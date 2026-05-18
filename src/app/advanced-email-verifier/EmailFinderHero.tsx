"use client"

import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import clsx from "clsx"
import Image from "next/image"
import CryptoJS from "crypto-js"
import {
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid"

const SECRET_KEY = "4b227777d4dd1fc61c6f884f48641d02"

const tabToSlug = {
  "Search Using Domain": "domain-search",
  "Find Using Names": "professional-email-finder",
  "Get it Verified": "advanced-email-verifier",
}

const slugToTab = {
  "domain-search": "Search Using Domain",
  "professional-email-finder": "Find Using Names",
  "advanced-email-verifier": "Get it Verified",
}

const tabs = [
  "Search Using Domain",
  "Find Using Names",
  "Get it Verified",
]

function decryptData(encryptedData: string) {
  try {
    const decryptedText = CryptoJS.AES.decrypt(
      encryptedData,
      SECRET_KEY
    ).toString(CryptoJS.enc.Utf8)

    return decryptedText ? JSON.parse(decryptedText) : null
  } catch {
    return null
  }
}

const DetailRow = ({
  label,
  value,
}: {
  label: string
  value: string
}) => {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 gap-4">
      <span className="text-sm text-gray-500">{label}</span>

      <span className="text-sm font-medium text-gray-800 text-right break-all">
        {value}
      </span>
    </div>
  )
}

const booleanLabel = (value: unknown) => {
  if (value === true) return "Yes"
  if (value === false) return "No"
  if (value === null || value === undefined) return "--"
  return String(value)
}

export default function EmailFinderHero() {
  const router = useRouter()
  const pathname = usePathname()

  const slug =
    pathname?.split("/").filter(Boolean).pop() || ""

  const [selectedTab, setSelectedTab] = useState(
    slugToTab[slug as keyof typeof slugToTab] ||
      "Search Using Domain"
  )

  const [email, setEmail] = useState("")
  const [trialCount, setTrialCount] = useState(0)
  const [limitMessage, setLimitMessage] = useState("")
  const [loading, setLoading] = useState(false)

  type VerificationResult = {
    status?: string
    final_status?: string
    status_reason?: string
    score?: number
    smtp_check?: boolean
    disposable?: boolean
    catch_all?: boolean
    valid_domain?: boolean
    valid_format?: boolean
    role_account?: boolean
    free_email?: boolean
    webmail?: boolean
    accept_all?: boolean
    smtp_server?: string
    smtp_response?: string
    validation_method?: string
    is_blocked?: boolean
    is_connection_failure?: boolean
    mx_records?: string[]
    email?: string
    attributes?: {
      domain?: string
      provider?: string
      username?: string
    }
    quality_check?: {
      email_quality_score?: string
      can_receive_email?: string
      disposable_address?: string
      not_a_catchall_address?: string
      not_a_generic_address?: string
      valid_domain?: string
      valid_format?: string
    }
    [key: string]: unknown
  }

  const [verificationResult, setVerificationResult] =
    useState<VerificationResult | null>(null)

  useEffect(() => {
    setSelectedTab(
      slugToTab[slug as keyof typeof slugToTab] ||
        "Search Using Domain"
    )
  }, [slug])

  useEffect(() => {
    if (typeof window === "undefined") return

    const storedCount = Number(
      sessionStorage.getItem("emailVerifierTrials") || 0
    )

    setTrialCount(storedCount)

    if (storedCount >= 3) {
      setLimitMessage(
        "You reached the maximum number of trial searches today. Please create a free account or sign in to continue using Exellius"
      )
    }
  }, [])

  const handleTabClick = (
    tab: keyof typeof tabToSlug
  ) => {
    const slug = tabToSlug[tab]
    router.push(`/${slug}`)
  }

  const verifyEmail = async () => {
    if (!email) return

    if (trialCount >= 3) {
      setLimitMessage(
        "You reached the maximum number of trial searches today. Please create a free account or sign in to continue using Exellius"
      )
      return
    }

    const nextCount = trialCount + 1

    setTrialCount(nextCount)

    sessionStorage.setItem(
      "emailVerifierTrials",
      String(nextCount)
    )

    setLoading(true)
    setVerificationResult(null)
    setLimitMessage("")

    try {
      const response = await fetch(
        "https://api.app.exellius.com/api/bounce/check/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          },
          body: JSON.stringify({ email }),
        }
      )

      const result = await response.json()

      const decrypted = decryptData(result.data)

      setVerificationResult(decrypted?.data || null)
    } catch (error) {
      console.error(error)
      setLimitMessage(
        "Unable to verify email. Please try again later."
      )
    } finally {
      setLoading(false)
    }
  }

  const statusMap = {
    valid: {
      label: "VALID",
      color: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-200",
      image: "/success.png",
      icon: CheckCircleIcon,
    },
    invalid: {
      label: "INVALID",
      color: "text-red-500",
      bg: "bg-red-50",
      border: "border-red-200",
      image: "/failed.png",
      icon: XCircleIcon,
    },
    risky: {
      label: "RISKY",
      color: "text-yellow-500",
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      image: "/failed.png",
      icon: ExclamationTriangleIcon,
    },
    unknown: {
      label: "UNKNOWN",
      color: "text-gray-500",
      bg: "bg-gray-50",
      border: "border-gray-200",
      image: "/failed.png",
      icon: QuestionMarkCircleIcon,
    },
  }

  const currentStatus =
    verificationResult?.final_status &&
    ["valid", "invalid", "risky", "unknown"].includes(
      verificationResult.final_status
    )
      ? verificationResult.final_status
      : "unknown"

  const status =
    statusMap[currentStatus as keyof typeof statusMap]

  const score =
    Number(
      verificationResult?.quality_check?.email_quality_score?.replace(
        "%",
        ""
      )
    ) ||
    verificationResult?.score ||
    0

  return (
    <section className="relative w-full py-24 pt-60 bg-[#fcf4fc] overflow-hidden text-center">
      <Image
        src="/bg_top.png"
        alt=""
        width={1920}
        height={400}
        className="absolute top-0 w-full"
      />

      <Image
        src="/bg_bottom.png"
        alt=""
        width={1920}
        height={400}
        className="absolute bottom-0 w-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10">
          Email Verifier
        </h1>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex border rounded-md overflow-hidden bg-white">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() =>
                  handleTabClick(
                    tab as keyof typeof tabToSlug
                  )
                }
                className={clsx(
                  "px-6 py-3 text-sm w-[200px]",
                  selectedTab === tab
                    ? "text-purple-600 border-b-2 border-purple-600 bg-purple-50"
                    : "text-gray-600"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {selectedTab === "Get it Verified" && (
          <div className="flex flex-col items-center">
            {/* Input */}
            <div className="flex w-full max-w-3xl bg-white border rounded-xl overflow-hidden mb-4 shadow-sm">
              <input
                type="email"
                placeholder="Enter email..."
                className="flex-1 px-4 py-4 outline-none"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                disabled={trialCount >= 3}
              />

              <button
                onClick={verifyEmail}
                disabled={
                  loading || trialCount >= 3
                }
                className="bg-purple-600 hover:bg-purple-700 transition text-white px-8 disabled:opacity-50"
              >
                {loading
                  ? "Verifying..."
                  : "Verify"}
              </button>
            </div>

            {/* Limit Message */}
            {limitMessage && (
              <div className="mt-4 border border-yellow-300 bg-yellow-50 text-yellow-700 px-4 py-3 rounded-md text-sm flex items-start gap-2 max-w-3xl mx-auto w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mt-0.5 text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m0 3.75h.008v.008H12v-.008zM10.343 3.94c.873-1.519 3.04-1.519 3.913 0l7.013 12.194A2.25 2.25 0 0119.263 19.5H4.737a2.25 2.25 0 01-1.993-3.366L9.757 3.94z"
                  />
                </svg>

                <p>
                  You reached the maximum number of
                  trial searches today. Please{" "}
                  <a
                    href="https://app.exellius.com/signup"
                    target="_blank"
                    className="underline text-yellow-800"
                  >
                    create a free account
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://app.exellius.com/login"
                    target="_blank"
                    className="underline text-yellow-800"
                  >
                    sign in
                  </a>{" "}
                  to continue using Exellius.
                </p>
              </div>
            )}

            {/* RESULT */}
            {verificationResult && (
              <div className="w-full mt-8">
                {/* TOP SUMMARY */}
                <div className="flex gap-5 mb-6 w-full">
  
  {/* RESULT CARD */}
  <div
    className={`flex-1 rounded-2xl border p-6 text-left shadow-sm ${status.bg} ${status.border}`}
  >
    <div className="flex items-center gap-4">
      <div
        className={`w-16 h-16 rounded-full border-2 flex items-center justify-center overflow-hidden ${status.border} ${status.bg}`}
      >
        <img
          src={status.image}
          alt={status.label}
          className="w-8 h-8 object-contain"
        />
      </div>

      <div>
        <p className="text-sm text-gray-500">
          Validation Result
        </p>

        <h2
          className={`text-2xl font-bold mt-1 ${status.color}`}
        >
          {verificationResult.final_status ||
            verificationResult.status ||
            "--"}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          {verificationResult.final_status !==
          "valid"
            ? verificationResult.status_reason
            : ""}
        </p>
      </div>
    </div>
  </div>

  {/* SCORE */}
  <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border text-left">
    <h3 className="text-3xl font-bold text-green-600 mb-2">
      {score}%
    </h3>

    <p className="text-sm text-gray-500 mb-4">
      Email Quality Score
    </p>

    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full  rounded-full"
        style={{
          width: `${score}%`,background:`linear-gradient(to right, #f87171, #fbbf24, #34d399)`,
        }}
      />
    </div>
  </div>

  {/* RECEIVE */}
  <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border text-left">
    <h3 className="text-2xl font-semibold mb-2">
      {verificationResult.quality_check
        ?.can_receive_email || "--"}
    </h3>

    <p className="text-sm text-gray-500">
      Can receive email
    </p>
  </div>

  {/* DISPOSABLE */}
  <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border text-left">
    <h3 className="text-2xl font-semibold mb-2">
      {verificationResult.disposable
        ? "Yes"
        : "No"}
    </h3>

    <p className="text-sm text-gray-500">
      Disposable
    </p>
  </div>

  {/* DOMAIN */}
  <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border text-left">
    <h3 className="text-2xl font-semibold text-green-600 mb-2">
      {verificationResult.quality_check
        ?.valid_domain || "Yes"}
    </h3>

    <p className="text-sm text-gray-500">
      Valid Domain
    </p>
  </div>
</div>

                {/* DETAILS GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
                  {/* EMAIL DETAILS */}
                  <div className="bg-white rounded-2xl p-6 border shadow-sm text-left">
                    <h3 className="font-semibold text-lg mb-4">
                      Email Details
                    </h3>

                    <DetailRow
                      label="Email"
                      value={
                        verificationResult.email ||
                        "--"
                      }
                    />

                    <DetailRow
                      label="Domain"
                      value={
                        verificationResult.attributes
                          ?.domain || "--"
                      }
                    />

                    <DetailRow
                      label="Provider"
                      value={
                        verificationResult.attributes
                          ?.provider || "--"
                      }
                    />

                    <DetailRow
                      label="Username"
                      value={
                        verificationResult.attributes
                          ?.username || "--"
                      }
                    />

                    <DetailRow
                      label="Accept All"
                      value={booleanLabel(
                        verificationResult.accept_all
                      )}
                    />

                    <DetailRow
                      label="Disposable"
                      value={booleanLabel(
                        verificationResult.disposable
                      )}
                    />

                    <DetailRow
                      label="Role Account"
                      value={booleanLabel(
                        verificationResult.role_account
                      )}
                    />

                    <DetailRow
                      label="Free Email"
                      value={booleanLabel(
                        verificationResult.free_email
                      )}
                    />

                    <DetailRow
                      label="Webmail"
                      value={booleanLabel(
                        verificationResult.webmail
                      )}
                    />
                  </div>

                  {/* SMTP */}
                  <div className="bg-white rounded-2xl p-6 border shadow-sm text-left">
                    <h3 className="font-semibold text-lg mb-4">
                      SMTP & Connection
                    </h3>

                    <DetailRow
                      label="SMTP Check"
                      value={booleanLabel(
                        verificationResult.smtp_check
                      )}
                    />

                    <DetailRow
                      label="Blocked"
                      value={booleanLabel(
                        verificationResult.is_blocked
                      )}
                    />

                    <DetailRow
                      label="Connection Failure"
                      value={booleanLabel(
                        verificationResult.is_connection_failure
                      )}
                    />

                    <DetailRow
                      label="SMTP Server"
                      value={
                        verificationResult.smtp_server ||
                        "--"
                      }
                    />

                    <DetailRow
                      label="SMTP Response"
                      value={
                        verificationResult.smtp_response ||
                        "--"
                      }
                    />

                    <DetailRow
                      label="Validation Method"
                      value={
                        verificationResult.validation_method ||
                        "--"
                      }
                    />
                  </div>

                  {/* QUALITY */}
                  <div className="bg-white rounded-2xl p-6 border shadow-sm text-left">
                    <h3 className="font-semibold text-lg mb-4">
                      Quality Breakdown
                    </h3>

                    <DetailRow
                      label="Can receive email"
                      value={
                        verificationResult.quality_check
                          ?.can_receive_email ||
                        "--"
                      }
                    />

                    <DetailRow
                      label="Disposable address"
                      value={
                        verificationResult.quality_check
                          ?.disposable_address ||
                        "--"
                      }
                    />

                    <DetailRow
                      label="Email quality score"
                      value={
                        verificationResult.quality_check
                          ?.email_quality_score ||
                        "--"
                      }
                    />

                    <DetailRow
                      label="Not a catchall"
                      value={
                        verificationResult.quality_check
                          ?.not_a_catchall_address ||
                        "--"
                      }
                    />

                    <DetailRow
                      label="Not generic"
                      value={
                        verificationResult.quality_check
                          ?.not_a_generic_address ||
                        "--"
                      }
                    />

                    <DetailRow
                      label="Valid domain"
                      value={
                        verificationResult.quality_check
                          ?.valid_domain ||
                        "--"
                      }
                    />

                    <DetailRow
                      label="Valid format"
                      value={
                        verificationResult.quality_check
                          ?.valid_format ||
                        "--"
                      }
                    />

                    <div className="mt-6">
                      

                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-red-400 via-yellow-400 to-green-500 rounded-full"
                          style={{
                            width: `${score}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* MX RECORDS */}
                <div className="bg-white rounded-2xl p-6 border shadow-sm text-left">
                  <h3 className="font-semibold text-lg mb-5">
                    MX Records
                  </h3>

                  {Array.isArray(
                    verificationResult.mx_records
                  ) &&
                  verificationResult.mx_records
                    .length > 0 ? (
                    <div className="flex flex-wrap gap-3">
                      {verificationResult.mx_records.map(
                        (record) => (
                          <span
                            key={record}
                            className="px-4 py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg text-sm"
                          >
                            {record}
                          </span>
                        )
                      )}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm">
                      No MX records available.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}