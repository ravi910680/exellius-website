"use client"

import { usePathname, useRouter } from "next/navigation"
import clsx from "clsx"
import { useState } from "react"
import Image from "next/image"

const tabToSlug: Record<string, string> = {
  "Get it Verified": "advanced-email-verifier",
  "Search Using Domain": "domain-search",
  "Find Using Names": "professional-email-finder",
}

const slugToTab: Record<string, string> = {
  "domain-search": "Search Using Domain",
  "professional-email-finder": "Find Using Names",
  "advanced-email-verifier": "Get it Verified",
}

const tabs = [
  "Get it Verified",
  "Search Using Domain",
  "Find Using Names",
]

export default function EmailFinderHero() {
  const router = useRouter()
  const pathname = usePathname()

  const slug = pathname?.split("/").filter(Boolean).pop() || ""
  const activeTab = slugToTab[slug] || "Search Using Domain"
  const [selectedTab, setSelectedTab] = useState(activeTab)

  const handleTabClick = (tab: string) => {
    const slug = tabToSlug[tab]
    setSelectedTab(tab)
    router.push(`/${slug}`)
  }

  return (
    <section className="relative w-full py-24 pt-60 bg-[#fcf4fc] overflow-hidden text-center">
      {/* Background layers */}
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
        <p className="text-md text-[#9856F2] font-semibold mb-2 pb-10">Domain Email Search</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Find Professional Emails by <br />
          <span className="text-[#9856F2]">Domain Instantly</span>
        </h1>

        {/* Wrapping grid in flex to prevent extra whitespace */}
        <div className="flex justify-center">
          <div className="grid grid-cols-[150px_220px_250px_150px] bg-white rounded-lg shadow-sm overflow-hidden border border-[#e0d0f5]">
            {/* Label */}
            <div className="flex items-center justify-center px-4 text-lg italic text-gray-600 border-r border-[#e0d0f5]">
              Email…
            </div>

            {/* Tabs */}
            <div className="flex flex-col divide-y divide-[#e0d0f5] border-r border-[#e0d0f5] text-sm font-medium text-center">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTabClick(tab)}
                  className={clsx(
                    "py-4 hover:text-[#9856F2] transition-colors h-full",
                    selectedTab === tab && "text-[#9856F2] font-semibold"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Inputs */}
            <div className="flex flex-col justify-between px-4 border-r border-[#e0d0f5]">
              <input
                type="text"
                placeholder="Enter email to verify..."
                disabled={selectedTab !== "Get it Verified"}
                className={clsx(
                  "py-4 px-1 text-sm border-b outline-none transition-all bg-transparent",
                  selectedTab === "Get it Verified"
                    ? "border-[#9856F2] text-black"
                    : "border-gray-200 text-gray-400 cursor-not-allowed"
                )}
              />
              <input
                type="text"
                placeholder="Enter a domain name..."
                disabled={selectedTab !== "Search Using Domain"}
                className={clsx(
                  "py-4 px-1 text-sm border-b outline-none transition-all bg-transparent",
                  selectedTab === "Search Using Domain"
                    ? "border-[#9856F2] text-black"
                    : "border-gray-200 text-gray-400 cursor-not-allowed"
                )}
              />
              <div
                              className={clsx(
                                "flex gap-2 py-4 border-b",
                                selectedTab !== "Find Using Names" && "opacity-50 cursor-not-allowed"
                              )}
                            >
                              <input
                                type="text"
                                placeholder="First name"
                                disabled={selectedTab !== "Find Using Names"}
                                className={clsx(
                                  "w-1/2 px-2 text-sm outline-none bg-transparent ",
                                  selectedTab === "Find Using Names"
                                    ? "border-[#9856F2] text-black"
                                    : "text-gray-400"
                                )}
                              />
                              <input
                                type="text"
                                placeholder="Last name"
                                disabled={selectedTab !== "Find Using Names"}
                                className={clsx(
                                  "w-1/2 px-2 text-sm outline-none bg-transparent ",
                                  selectedTab === "Find Using Names"
                                    ? "border-[#9856F2] text-black"
                                    : "text-gray-400"
                                )}
                              />
                            </div>
            </div>

            {/* Button */}
            <div className="flex items-center justify-center">
              <button className="w-full h-full bg-[#9856F2] hover:bg-[#7e48d6] text-white font-semibold text-sm px-6 py-2">
                FIND
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
