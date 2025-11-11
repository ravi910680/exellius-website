"use client"

import { useState } from "react"
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

// ---------- Types ----------
interface PhoneResult {
  id: string
  first_name?: string
  last_name?: string
  mobile_phone?: string | null
  work_direct_phone?: string | null
  corporate_phone?: string | null
  phone?: string | null
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

    // ✅ Replace https with http
    const formattedUrl = input.trim().replace(/^https:\/\//i, "http://")

    setError("")
    setLoading(true)

    // Prepare request body
    const raw = encryptData({
      email:[],
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
      includeLinkedinUrl: [formattedUrl],
    })

    // Headers
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYXBpX2tleSIsIm5hbWUiOiJkZWZhdWx0LWFwaS1rZXkiLCJwZXJtYW5lbnQiOnRydWUsImlhdCI6MTc1NzA3Nzg0OH0.6eqmipK-0-YIJIRu_U5GGF2ksuOyZXAQ3UzzFmDCEbw"
    )

    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({ data: raw }),
      redirect: "follow",
    }

    try {
      const response = await fetch("https://api.app.exellius.com/api/leads/getPeopleLeads", requestOptions)
      const result = await response.json()

      const decrypted = decryptData<{ data: PhoneResult[] }>(result.data)
      console.log("Decrypted Response:", decrypted)

      if (decrypted?.data && Array.isArray(decrypted.data)) {
        setResults(decrypted.data)
      } else {
        setResults([])
        setError("No results found.")
      }
    } catch (error) {
      console.error("API Error:", error)
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  // ✅ Helper to get best available phone number
  const getBestPhone = (item: PhoneResult): string | null => {
    return (
      item.mobile_phone ||
      item.work_direct_phone ||
      item.corporate_phone ||
      item.phone ||
      null
    )
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

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

        {/* Results */}
        <div className="max-w-3xl mx-auto space-y-4">
          {results.slice(0, 1).map((res) => {
            const bestPhone = getBestPhone(res)
            return (
              <div
                key={res.id}
                className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-[#e0d0f5]"
              >
                <p className="text-gray-900 font-semibold">
                  {res.first_name + " " + res.last_name}
                </p>
                <p className="text-gray-700 text-sm">
                  {bestPhone ? bestPhone : "No number available"}
                </p>
                <button onClick={() => window.open("https://app.exellius.com/signup", "_blank")} className="bg-[#9856F2] hover:bg-[#7e48d6] text-white text-sm font-medium px-3 py-1 rounded">
                  More Details
                </button>
              </div>
            )
          })}

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
