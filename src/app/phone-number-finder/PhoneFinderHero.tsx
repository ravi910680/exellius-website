"use client"

import { useState } from "react"
import Image from "next/image"
import CryptoJS from "crypto-js"

// ---------- Types ----------
interface PhoneResult {
  id: string
  name: string
  phone: string
  first_name?: string
  last_name?: string
}

interface ApiResponse {
  data: PhoneResult[]
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
  includeLinkedinUrl: string[]
}

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

// ---------- Component ----------
export default function PhoneFinderHero() {
  const [input, setInput] = useState("")
  const [results, setResults] = useState<PhoneResult[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSearch = async () => {
  if (!input.trim()) {
    setError("Please enter a LinkedIn profile URL.")
    return
  }

  // Basic LinkedIn URL validation
  const linkedinRegex = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-_]+\/?$/;
  if (!linkedinRegex.test(input.trim())) {
    setError("Please enter a valid LinkedIn profile URL.")
    return
  }

  setError("")
  setLoading(true)

  // Prepare encrypted filters
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
    search: [],
    includeFirstName: [],
    includeLastName: [],
    includeLinkedinUrl: [input.trim()],
  }

  const encryptedData = encryptData({
    ...filters,
    page: 1,
    limit: 1,
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
    const response = await fetch(
      "https://api.app.exellius.com/api/leads/getPeopleLeads/",
      requestOptions
    )

    const result = await response.json()
    const decrypted = decryptData<ApiResponse>(result.data)
    console.log("Decrypted Response:", decrypted)

    setResults(decrypted?.data || [])
  } catch (error) {
    if (error instanceof Error) {
      console.error("API Error:", error.message)
    } else {
      console.error("Unknown API Error:", error)
    }
  } finally {
    setLoading(false)
  }
}



  return (
    <section className="relative w-full bg-[#fcf4fc] pt-40 pb-24 px-6 overflow-hidden text-center">
      {/* Top Background Image */}
      <Image
        src="/bg_top.png"
        alt="Top Background"
        width={1920}
        height={400}
        className="absolute top-0 left-0 w-full object-cover z-0"
      />

      {/* Bottom Background Image */}
      <Image
        src="/bg_bottom.png"
        alt="Bottom Background"
        width={1920}
        height={400}
        className="absolute bottom-0 left-0 w-full object-cover z-0"
      />

      {/* Grid Lines Background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[url('/grid-lines.svg')] bg-cover opacity-20" />

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <p className="text-[#9856F2] font-medium mb-2 text-sm sm:text-base">
          Phone Number Finder
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Get Verified <span className="text-[#9856F2]">Professional</span>{" "}
          Phone <br className="hidden sm:block" />
          Numbers in Seconds
        </h1>

        <p className="text-base sm:text-lg text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
          Connecting with decision-makers quickly is crucial in the fast-moving
          world. Exellius delivers verified mobile numbers with high accuracy,
          ensuring your outreach efforts hit the mark.
        </p>

        {/* Input Form */}
        <div className="flex justify-center w-full px-4 mb-12">
          <div className="flex w-full max-w-2xl">
            <input
              type="text"
              placeholder="Enter LinkedIn Profile Link…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 text-sm sm:text-base border border-r-0 border-[#9856F2] rounded-l-full focus:outline-none focus:ring-2 focus:ring-[#9856F2] h-12 px-4 bg-white"
            />
            <button
              type="button"
              onClick={handleSearch}
              disabled={loading}
              className="bg-[#9856F2] text-white text-sm sm:text-base px-6 h-12 rounded-r-full hover:bg-[#6c3cbe] border border-[#9856F2]"
            >
              {loading ? "Searching..." : "Find mobile number"}
            </button>
          </div>
        </div>
         {error && (
    <p className="text-red-500 text-sm mt-3">{error}</p>
  )}


        {/* Results */}
        <div className="max-w-3xl mx-auto space-y-4">
          {results.slice(0, 2).map((res) => (
            <div
              key={res.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-[#e0d0f5]"
            >
              <p className="text-gray-900 font-semibold">{res.first_name+" "+res.last_name}</p>
              <p className="text-gray-700 text-sm">{res.phone}</p>
              <button className="bg-[#9856F2] hover:bg-[#7e48d6] text-white text-sm font-medium px-3 py-1 rounded">
                More Details
              </button>
            </div>
          ))}

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
