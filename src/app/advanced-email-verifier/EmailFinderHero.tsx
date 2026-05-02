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

// ---------- Helper Row ----------
const Row = ({ label, value }: { label: string; value: string }) => {
  const color =
    value === "Yes"
      ? "text-green-600"
      : value === "No"
      ? "text-red-500"
      : "text-gray-800"

  return (
    <div className="flex justify-between border-b border-gray-100 pb-1">
      <span className="text-gray-600">{label}</span>
      <span className={`font-medium ${color}`}>{value}</span>
    </div>
  )
}


function decryptData(encryptedData: string) {
  try {
    const decryptedText = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY).toString(CryptoJS.enc.Utf8)
    return decryptedText ? JSON.parse(decryptedText) : null
  } catch {
    return null
  }
}

export default function EmailFinderHero() {
  const router = useRouter()
  const pathname = usePathname()

  const slug = pathname?.split("/").filter(Boolean).pop() || ""
  const [selectedTab, setSelectedTab] = useState(slugToTab[slug as keyof typeof slugToTab] || "Search Using Domain")
  const [email, setEmail] = useState("")
  const [trialCount, setTrialCount] = useState(0)
  const [limitMessage, setLimitMessage] = useState("")
  type VerificationResult = {
    status?: string
    score?: number
    smtp_check?: boolean
    disposable?: boolean
    catch_all?: boolean
    valid_domain?: boolean
    valid_format?: boolean
    [key: string]: unknown
  }
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setSelectedTab(slugToTab[slug as keyof typeof slugToTab] || "Search Using Domain")
  }, [slug])

  useEffect(() => {
    if (typeof window === "undefined") return
    const storedCount = Number(sessionStorage.getItem("emailVerifierTrials") || 0)
    setTrialCount(storedCount)
    if (storedCount >= 3) {
      setLimitMessage(
        "You reached the maximum number of trial searches today. Please create a free account or sign in to continue using Exellius"
      )
    }
  }, [])

  const handleTabClick = (tab: keyof typeof tabToSlug) => {
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
    sessionStorage.setItem("emailVerifierTrials", String(nextCount))

    setLoading(true)
    setVerificationResult(null)
    setLimitMessage("")

    try {
      const response = await fetch("https://api.app.exellius.com/api/bounce/check/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()
      const decrypted = decryptData(result.data)

      setVerificationResult(decrypted?.data || null)
    } catch (error) {
      console.error(error)
      setLimitMessage("Unable to verify email. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  // --------- Derived Values ----------
  const score = verificationResult?.score || 0

  const getScoreWidth = () => `${score}%`


  const statusMap = {
  valid: {
    label: "VALID",
    color: "text-green-600",
    icon: CheckCircleIcon,
  },
  invalid: {
    label: "INVALID",
    color: "text-red-500",
    icon: XCircleIcon,
  },
  risky: {
    label: "RISKY",
    color: "text-yellow-500",
    icon: ExclamationTriangleIcon,
  },
  unknown: {
    label: "UNKNOWN",
    color: "text-gray-500",
    icon: QuestionMarkCircleIcon,
  },
}

  return (
    <section className="relative w-full py-24 pt-60 bg-[#fcf4fc] overflow-hidden text-center">
      
      <Image src="/bg_top.png" alt="" width={1920} height={400} className="absolute top-0 w-full" />
      <Image src="/bg_bottom.png" alt="" width={1920} height={400} className="absolute bottom-0 w-full" />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        <h1 className="text-4xl font-bold mb-10">
          Email Verifier
        </h1>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex border rounded-md overflow-hidden bg-white">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab as keyof typeof tabToSlug)}
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

        {/* Verify Tab */}
        {selectedTab === "Get it Verified" && (
          <div className="flex flex-col items-center">
            
            {/* Input */}
            <div className="flex w-full max-w-3xl bg-white border rounded-lg overflow-hidden mb-4">
              <input
                type="email"
                placeholder="Enter email..."
                className="flex-1 px-4 py-4 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={trialCount >= 3}
              />
              <button
                onClick={verifyEmail}
                disabled={loading || trialCount >= 3}
                className="bg-purple-600 text-white px-6 disabled:opacity-50"
              >
                {loading ? "Verifying..." : "Verify"}
              </button>
            </div>

            {limitMessage && (
              <p className="text-sm text-gray-600 mb-4">
          
           
            <div className="mt-4 border border-yellow-300 bg-yellow-50 text-yellow-700 px-4 py-3 rounded-md text-sm flex items-start gap-2 max-w-3xl mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mt-0.5 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0 3.75h.008v.008H12v-.008zM10.343 3.94c.873-1.519 3.04-1.519 3.913 0l7.013 12.194A2.25 2.25 0 0119.263 19.5H4.737a2.25 2.25 0 01-1.993-3.366L9.757 3.94z" />
                </svg>
                <p>
                  You reached the maximum number of trial searches today. Please{" "}
                  <a href="https://app.exellius.com/signup" target="_blank" className="underline text-yellow-800">
                    create a free account
                  </a>{" "}
                  or{" "}
                  <a href="https://app.exellius.com/login" target="_blank" className="underline text-yellow-800">
                    sign in
                  </a>{" "}
                  to continue using Exellius.
                </p>
              </div>
        </p>
            )}

            {/* Result UI */}
            {verificationResult && (
              <div className="w-full max-w-3xl p-6 bg-white rounded-xl border shadow-sm text-left">

{/* Summary */}
<div className="mb-6">
  <h3 className="text-sm text-gray-500 mb-1 font-semibold pb-3">Verification result</h3>
  {(() => {
    type StatusKey = keyof typeof statusMap
    const rawStatus = verificationResult?.final_status || "unknown"
    const currentStatus: StatusKey =
      ["valid", "invalid", "risky", "unknown"].includes(String(rawStatus))
        ? (rawStatus as StatusKey)
        : "unknown"
    const status = statusMap[currentStatus]
    const StatusIcon = status.icon
    return (
      <div className="flex gap-2 items-center">
        <StatusIcon className={`w-5 h-5 ${status.color}`} />
        <span className={`font-semibold text-sm ${status.color}`}>
          {status.label}
        </span>
      </div>
    )
  })()}
</div>

                {/* Quality */}
                <div className="mb-6">
                  <h3 className="text-sm text-gray-500 mb-3">Quality Check</h3>

                  <div className="space-y-2 text-sm">
                    <Row label="Can receive email" value={verificationResult.smtp_check ? "Yes" : "No"} />
                    <Row label="Disposable address" value={verificationResult.disposable ? "Yes" : "No"} />
                    <Row label="Catch-all" value={verificationResult.catch_all ? "Yes" : "No"} />
                    <Row label="Valid domain" value={verificationResult.valid_domain ? "Yes" : "No"} />
                    <Row label="Valid format" value={verificationResult.valid_format ? "Yes" : "No"} />
                  </div>
                </div>

                {/* Score */}
                <div>
                  <h3 className="text-sm text-gray-500 mb-2">Email score</h3>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-400 via-yellow-400 to-green-500"
                      style={{ width: getScoreWidth() }}
                    />
                  </div>
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {score}%
                  </div>
                </div>

              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}