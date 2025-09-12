"use client"

import { useState,useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import clsx from "clsx"
import Image from "next/image"
import CryptoJS from "crypto-js"

const SECRET_KEY = "4b227777d4dd1fc61c6f884f48641d02"

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
   
  
    // Sync selected tab with URL on route change
    useEffect(() => {
      setSelectedTab(slugToTab[slug] || "Search Using Domain")
    }, [slug])
  
    const handleTabClick = (tab: string) => {
      const slug = tabToSlug[tab]
      router.push(`/${slug}`)
    }

  const [fullName, setFullName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [results, setResults] = useState<LeadResult[]>([])

  const handleSearch = async () => {

     setLoading(true)
    const filters: Filters = {
      includeIndustry: [],
      excludeIndustry: [],
      includeemployeeCount: [],
      includeRevenue: [],
      includemanagmentRole: [],
      includeCompany: [],
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
      search: [fullName],
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

    console.log(process.env.NEXT_PUBLIC_API_TOKEN);
    const requestOptions: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
      body: JSON.stringify({ data: encryptedData }),
    }

    try {
      const response = await fetch(
        "https://app.exellius.com/api/leads/getPeopleLeads/",
        requestOptions
      )


     
      

      const result = await response.json()
      
      const decrypted = decryptData<ApiResponse>(result.data)
      console.log(decrypted);
       setLoading(false)

      setResults(decrypted?.data || [])
    } catch (error) {
      if (error instanceof Error) {
        console.error("API Error:", error.message)
      } else {
        console.error("Unknown API Error:", error)
      }
    }
  }

  return (
    <section className="relative w-full py-24 bg-[#fcf4fc] overflow-hidden text-center">
      {/* Background Layers */}
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
              className="w-[45%] min-w-[150px] py-4 px-4 text-sm outline-none text-black bg-transparent border-r border-[#e0d0f5]"
            />
            <div className="w-[5%] flex items-center justify-center px-2 text-gray-500 border-r border-[#e0d0f5]">
              @
            </div>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Company name"
              className="w-[45%] min-w-[150px] py-4 px-4 text-sm outline-none text-black bg-transparent border-r border-[#e0d0f5]"
            />
            <button
              onClick={handleSearch}
              className="w-[25%] bg-[#9856F2] hover:bg-[#7e48d6] text-white font-semibold text-sm px-6 whitespace-nowrap"
            >
             {loading ? "Searching...":" Find Email"}
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-5xl mx-auto space-y-4">
          {/* First 2 results */}
          {results.slice(0, 2).map((res) => (
            <div
              key={res.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-[#e0d0f5]"
            >
              <p className="text-gray-900 font-semibold">
                {res.first_name} {res.last_name}
              </p>
              <p className="text-gray-700 text-sm">{res.email}</p>
              <button className="bg-[#9856F2] hover:bg-[#7e48d6] text-white text-sm font-medium px-3 py-1 rounded">
                More Details
              </button>
            </div>
          ))}

          {/* CTA if more results */}
          {results.length > 2 && (
            <div className="flex justify-center mt-4">
              <button className="bg-[#9856F2] hover:bg-[#7e48d6] text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-md">
                Get Free 10 Credits – Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
