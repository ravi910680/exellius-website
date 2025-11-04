"use client"

import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import clsx from "clsx"
import Image from "next/image"
import CryptoJS from "crypto-js"

const SECRET_KEY = "4b227777d4dd1fc61c6f884f48641d02"

// ---------- Encryption helpers ----------
function encryptData(data: unknown): string | null {
  try {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString()
  } catch (error) {
    console.error("Encryption Error:", error)
    return null
  }
}

function decryptData<T>(encryptedData: string): T | null {
  try {
    const decryptedText = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY).toString(CryptoJS.enc.Utf8)
    return decryptedText ? (JSON.parse(decryptedText) as T) : null
  } catch (error) {
    console.error("Decryption Error:", error)
    return null
  }
}

interface LeadResult {
  id: string
  first_name: string
  last_name: string
  email: string
}

interface ApiResponse {
  data: LeadResult[]
}

const tabToSlug: Record<string, string> = {
  "Search Using Domain": "domain-search",
  "Find Using Names": "professional-email-finder",
  "Get it Verified": "advanced-email-verifier",
}

const slugToTab: Record<string, string> = {
  "domain-search": "Search Using Domain",
  "professional-email-finder": "Find Using Names",
  "advanced-email-verifier": "Get it Verified",
}

const tabs = ["Search Using Domain", "Find Using Names", "Get it Verified"]

export default function EmailFinderHero() {
  const router = useRouter()
  const pathname = usePathname()
  const slug = pathname?.split("/").filter(Boolean).pop() || ""

  const [selectedTab, setSelectedTab] = useState(slugToTab[slug] || "Search Using Domain")
  const [domain, setDomain] = useState("")
  const [results, setResults] = useState<LeadResult[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [showLimitAlert, setShowLimitAlert] = useState(false)
  const MAX_SEARCHES_PER_DAY = 3

  // ---------- Load & Reset Daily Limit ----------
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0]
    const storedDate = localStorage.getItem("searchDate")
    if (storedDate !== today) {
      localStorage.setItem("searchDate", today)
      localStorage.setItem("searchCount", "0")
    }
  }, [])

  const getSearchCount = () => parseInt(localStorage.getItem("searchCount") || "0")
  const incrementSearchCount = () => {
    const count = getSearchCount() + 1
    localStorage.setItem("searchCount", count.toString())
    return count
  }

  useEffect(() => {
    setSelectedTab(slugToTab[slug] || "Search Using Domain")
  }, [slug])

  const handleTabClick = (tab: string) => {
    const slug = tabToSlug[tab]
    router.push(`/${slug}`)
  }

  // ---------- Main Search Handler ----------
  const handleSearch = async () => {
    const currentCount = getSearchCount()
    if (currentCount >= MAX_SEARCHES_PER_DAY) {
      setShowLimitAlert(true)
      return
    }

    if (!domain.trim()) {
      setError("Please enter the company domain name.")
      return
    }

    const domainRegex = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,}$/
    if (!domainRegex.test(domain.trim())) {
      setError("Please enter a valid company domain (without https://).")
      return
    }

    setError("")
    setLoading(true)
    setShowLimitAlert(false)

    const filters = {
      includeIndustry: [],
      excludeIndustry: [],
      includeemployeeCount: [],
      includeRevenue: [],
      includemanagmentRole: [],
      includeCompany: [domain],
      excludeCompany: [],
      includedepartmentKeyword: [],
      includePersonalCountry: [],
      excludePersonalCountry: [],
      includecompanyLocation: [],
      excludeCompanyLocation: [],
      includejobTitles: [],
      excludeJobTitles: [],
      includetechnology: [],
      foundingYear: [],
      funding: [],
      perCompany: 1,
    }

    const page = 1
    const currentLimit = 10

    const encryptedData = encryptData({
      ...filters,
      page,
      limit: currentLimit,
      sort_by: "first_name",
      sort_order: "asc",
    })

    const requestOptions: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
      body: JSON.stringify({ data: encryptedData }),
    }

    try {
      const response = await fetch("https://api.app.exellius.com/api/leads/getPeopleLeads/", requestOptions)
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

      const result = await response.json()
      const decrypted = decryptData<ApiResponse>(result.data)
      setResults(decrypted?.data || [])

      incrementSearchCount() // increase count after successful search
    } catch (error) {
      console.error("API Error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative w-full py-24 pt-60 bg-[#fcf4fc] overflow-hidden text-center">
      <Image src="/bg_top.png" alt="Top Background" width={1920} height={400} className="absolute top-0 left-0 w-full object-cover z-0" />
      <Image src="/bg_bottom.png" alt="Bottom Background" width={1920} height={400} className="absolute bottom-0 left-0 w-full object-cover z-0" />
      <div className="absolute inset-0 bg-[url('/grid-lines.svg')] bg-cover opacity-10 pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="text-md text-[#9856F2] font-semibold mb-2 pb-10">Domain Email Search</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Find Professional Emails by <br />
          <span className="text-[#9856F2]">Domain Instantly</span>
        </h1>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm border border-[#e0d0f5] bg-white overflow-hidden">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => handleTabClick(tab)}
                className={clsx(
                  "px-6 py-3 text-sm font-medium transition-all w-[200px]",
                  selectedTab === tab ? "text-[#9856F2] border-b-2 border-[#9856F2] bg-[#f7f0fd]" : "text-gray-600 hover:bg-gray-100"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Input + Error */}
        {selectedTab === "Search Using Domain" && (
          <div className="flex justify-center flex-col items-center">
            <div className="flex w-full max-w-3xl bg-white rounded-lg shadow-sm overflow-hidden border border-[#e0d0f5]">
              <input
                type="text"
                placeholder="Enter a domain name..."
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="flex-1 py-4 px-4 text-sm outline-none text-black bg-transparent"
              />
              <button
                onClick={handleSearch}
                className="bg-[#9856F2] hover:bg-[#7e48d6] text-white font-semibold text-sm px-6"
              >
                {loading ? "Searching..." : "Find Email"}
              </button>
            </div>

            {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
            {showLimitAlert && (
              <div className="mt-4 border border-yellow-300 bg-yellow-50 text-yellow-700 px-4 py-3 rounded-md text-sm flex items-start gap-2 max-w-3xl">
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
            )}
          </div>
        )}

        {/* Results */}
        <div className="max-w-5xl mx-auto space-y-4 mt-12">
          {results.slice(0, 2).map((res) => (
            <div key={res.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-[#e0d0f5]">
              <p className="text-gray-900 font-semibold">
                {res.first_name} {res.last_name}
              </p>
              <p className="text-gray-700 text-sm">{res.email}</p>
              <button
                onClick={() => window.open("https://app.exellius.com/signup", "_blank")}
                className="bg-[#9856F2] hover:bg-[#7e48d6] text-white text-sm font-medium px-3 py-1 rounded"
              >
                More Details
              </button>
            </div>
          ))}

          {results.length > 2 && (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => window.open("https://app.exellius.com/signup", "_blank")}
                className="bg-[#9856F2] hover:bg-[#7e48d6] text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-md"
              >
                Get Free 10 Credits – Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
