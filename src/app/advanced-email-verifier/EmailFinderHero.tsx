"use client"

import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import clsx from "clsx"
import Image from "next/image"

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

const tabs = [
  "Search Using Domain",
  "Find Using Names",
  "Get it Verified",
]

export default function EmailFinderHero() {
  const router = useRouter()
  const pathname = usePathname()

  const slug = pathname?.split("/").filter(Boolean).pop() || ""
  const [selectedTab, setSelectedTab] = useState(slugToTab[slug] || "Search Using Domain")

  // Sync selected tab with URL
  useEffect(() => {
    setSelectedTab(slugToTab[slug] || "Search Using Domain")
  }, [slug])

  const handleTabClick = (tab: string) => {
    const slug = tabToSlug[tab]
    router.push(`/${slug}`)
  }

  return (
    <section className="relative w-full py-24 pt-60 bg-[#fcf4fc] overflow-hidden text-center">
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

      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="text-md text-[#9856F2] font-semibold mb-2 pb-10">
          Exellius Email Verifier
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12">

          The Most Reliable  <span className="text-[#9856F2]">Email Verifier </span> for<br /> Professional Outreach
          
        </h1>

        {/* Horizontal Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm border border-[#e0d0f5] bg-white overflow-hidden">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => handleTabClick(tab)}
                className={clsx(
                  "px-6 py-3 text-sm font-medium transition-all",
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

        {/* Search Using Domain */}
        {selectedTab === "Search Using Domain" && (
          <div className="flex justify-center">
            <div className="flex w-full max-w-3xl bg-white rounded-lg shadow-sm overflow-hidden border border-[#e0d0f5]">
              <input
                type="text"
                placeholder="Enter a domain name..."
                className="flex-1 py-4 px-4 text-sm outline-none text-black bg-transparent"
              />
              <button className="bg-[#9856F2] hover:bg-[#7e48d6] text-white font-semibold text-sm px-6">
                Find email addresses
              </button>
            </div>
          </div>
        )}

        {/* Find Using Names */}
        {selectedTab === "Find Using Names" && (
          <div className="flex justify-center">
            <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-sm overflow-hidden border border-[#e0d0f5] items-center">
              <input
                type="text"
                placeholder="Full name"
                className="w-[40%] py-4 px-4 text-sm outline-none text-black bg-transparent border-r border-[#e0d0f5]"
              />
              <span className="px-2 text-gray-500">@</span>
              <input
                type="text"
                placeholder="Company name"
                className="w-[40%] py-4 px-4 text-sm outline-none text-black bg-transparent border-r border-[#e0d0f5]"
              />
              <button className="bg-[#9856F2] hover:bg-[#7e48d6] text-white font-semibold text-sm h-full px-6 whitespace-nowrap">
                Find email address
              </button>
            </div>
          </div>
        )}

        {/* Get it Verified */}
        {selectedTab === "Get it Verified" && (
          <div className="flex justify-center">
            <div className="flex w-full max-w-3xl bg-white rounded-lg shadow-sm overflow-hidden border border-[#e0d0f5] items-center">
              <input
                type="email"
                placeholder="Enter an email address..."
                className="flex-1 py-4 px-4 text-sm outline-none text-black bg-transparent"
              />
              <button className="bg-[#9856F2] hover:bg-[#7e48d6] text-white font-semibold text-sm px-6 h-full whitespace-nowrap">
                Verify email
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
