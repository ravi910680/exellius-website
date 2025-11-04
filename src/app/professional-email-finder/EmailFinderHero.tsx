"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import clsx from "clsx"
import Image from "next/image"
import CryptoJS from "crypto-js"

const SECRET_KEY = "4b227777d4dd1fc61c6f884f48641d02"
const DAILY_LIMIT = 3 // ✅ Only 3 searches per day

// ---------- Types ----------
interface LeadResult {
  id: string
  first_name: string
  last_name: string
  email: string
}

interface ApiResponse {
  data: LeadResult[]
}

interface Filters {
  includeIndustry: string[]
  excludeIndustry: string[]
  includeemployeeCount: string[]
  includeRevenue: string[]
  includemanagmentRole: string[]
  includeCompany: string[]
  excludeCompany: string[]
  includedepartmentKeyword: string[]
  includePersonalCountry: string[]
  excludePersonalCountry: string[]
  includecompanyLocation: string[]
  excludeCompanyLocation: string[]
  includejobTitles: string[]
  excludeJobTitles: string[]
  includetechnology: string[]
  foundingYear: string[]
  funding: string[]
  perCompany: number
  search: string[]
  includeFirstName: string[]
  includeLastName: string[]
}

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

// ---------- Component ----------
export default function EmailFinderHero() {
  const router = useRouter()
  const pathname = usePathname()
  const slug = pathname?.split("/").filter(Boolean).pop() || ""
  const [selectedTab, setSelectedTab] = useState(slugToTab[slug] || "Search Using Domain")
  const [loading, setLoading] = useState(false)

  const [fullName, setFullName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [results, setResults] = useState<LeadResult[]>([])
  const [error, setError] = useState("")
  const [remaining, setRemaining] = useState(DAILY_LIMIT)

  // --- Initialize search limit ---
  useEffect(() => {
    const today = new Date().toDateString()
    const stored = localStorage.getItem("emailFinderUsage")
    if (stored) {
      const data = JSON.parse(stored)
      if (data.date === today) {
        setRemaining(Math.max(DAILY_LIMIT - data.count, 0))
      } else {
        localStorage.setItem("emailFinderUsage", JSON.stringify({ date: today, count: 0 }))
        setRemaining(DAILY_LIMIT)
      }
    } else {
      localStorage.setItem("emailFinderUsage", JSON.stringify({ date: today, count: 0 }))
    }
  }, [])

  const updateUsage = () => {
    const today = new Date().toDateString()
    const stored = localStorage.getItem("emailFinderUsage")
    if (stored) {
      const data = JSON.parse(stored)
      const newCount = data.date === today ? data.count + 1 : 1
      localStorage.setItem("emailFinderUsage", JSON.stringify({ date: today, count: newCount }))
      setRemaining(Math.max(DAILY_LIMIT - newCount, 0))
    }
  }

  // --- Handle Tab Navigation ---
  useEffect(() => {
    setSelectedTab(slugToTab[slug] || "Search Using Domain")
  }, [slug])

  const handleTabClick = (tab: string) => {
    const slug = tabToSlug[tab]
    router.push(`/${slug}`)
  }

  const handleSearch = async () => {
    if (remaining <= 0) {
      setError("You’ve reached your daily limit. Please try again tomorrow or sign up for more credits.")
      return
    }

    if (!fullName.trim()) {
      setError("Please enter the full name.")
      return
    }
    if (!companyName.trim()) {
      setError("Please enter the company name.")
      return
    }

    const nameParts = fullName.trim().split(" ")
    if (nameParts.length < 2) {
      setError("Please enter both first and last name.")
      return
    }

    setError("")
    setLoading(true)

    const filters: Filters = {
      includeIndustry: [],
      excludeIndustry: [],
      includeemployeeCount: [],
      includeRevenue: [],
      includemanagmentRole: [],
      includeCompany: [companyName],
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
      search: [],
      includeFirstName: [nameParts[0]],
      includeLastName: [nameParts[1]],
    }

    const encryptedData = encryptData({
      ...filters,
      page: 1,
      limit: 10,
      sort_by: "first_name",
      sort_order: "asc",
    })

    try {
      const response = await fetch("https://api.app.exellius.com/api/leads/getPeopleLeads/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
        body: JSON.stringify({ data: encryptedData }),
      })

      const result = await response.json()
      const decrypted = decryptData<ApiResponse>(result.data)
      setResults(decrypted?.data || [])

      updateUsage() // ✅ Increment daily usage
    } catch (error) {
      console.error("API Error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative w-full py-24 bg-[#fcf4fc] overflow-hidden text-center">
      {/* Background */}
      <Image
        src="/bg_top.png"
        alt="Top Background"
        width={1920}
        height={400}
        className="absolute top-0 left-0 w-full object-cover z-0"
      />
      <Image
        src="/bg_bottom.png"
        alt="Bottom Background"
        width={1920}
        height={400}
        className="absolute bottom-0 left-0 w-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-[url('/grid-lines.svg')] bg-cover opacity-10 pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto pt-40">
        <p className="text-md text-[#9856F2] font-semibold mb-2 pb-4">
          Professional Email Finder
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Find the Verified{" "}
          <span className="text-[#9856F2]">Email Address</span> of Any
          Professional
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
                  selectedTab === tab
                    ? "text-[#9856F2] border-b-2 border-[#9856F2] bg-[#f7f0fd]"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Search Form */}
        <div className="flex justify-center mb-12">
          <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-sm overflow-hidden border border-[#e0d0f5] items-stretch flex-nowrap">
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full name"
              className="w-[45%] py-4 px-4 text-sm outline-none text-black bg-transparent border-r border-[#e0d0f5]"
            />
            <div className="w-[5%] flex items-center justify-center px-2 text-gray-500 border-r border-[#e0d0f5]">
              @
            </div>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Company name"
              className="w-[45%] py-4 px-4 text-sm outline-none text-black bg-transparent border-r border-[#e0d0f5]"
            />
            <button
              onClick={handleSearch}
              disabled={remaining <= 0}
              className={clsx(
                "w-[25%] font-semibold text-sm px-6 whitespace-nowrap transition",
                remaining <= 0
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-[#9856F2] hover:bg-[#7e48d6] text-white"
              )}
            >
              {loading ? "Searching..." : "Find Email"}
            </button>
          </div>
        </div>

        {/* Remaining Count */}
        <p className="text-sm text-gray-600 mb-4">
          {remaining > 0
            ? ``
            : <div className="mt-4 border border-yellow-300 bg-yellow-50 text-yellow-700 px-4 py-3 rounded-md text-sm flex items-start gap-2 max-w-3xl mx-auto">
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
              </div>}
        </p>

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

        {/* Results */}
        <div className="max-w-5xl mx-auto space-y-4">
          {results.slice(0, 2).map((res) => (
            <div
              key={res.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-[#e0d0f5]"
            >
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

          {results.length > 0 && (
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
