"use client"

import Image from "next/image"
import { Check } from "lucide-react"

export default function BulkTaskHero() {
  return (
    <section className="relative w-full bg-[#F9F5FF] pt-44 pb-24 px-6 overflow-hidden">
      {/* Top Background */}
      <Image
        src="/bg_top.png"
        alt="Top Background"
        width={1920}
        height={400}
        className="absolute top-0 left-0 w-full object-cover z-0"
      />

      {/* Bottom Background */}
      <Image
        src="/bg_bottom.png"
        alt="Bottom Background"
        width={1920}
        height={400}
        className="absolute bottom-0 left-0 w-full object-cover z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <div className="max-w-2xl w-full">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-snug">
            Bulk Tasks Made Easy With{" "}
            <span className="text-[#9856F2]">Exellius</span>: Find, Verify & Enrich Bulk Data
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-800">
            At Exellius, we empower businesses with powerful bulk email finder, email verifier,
            domain search, and phone finder tools to streamline prospecting, reduce bounce rates,
            and enhance outreach efficiency.
          </p>

          <p className="mt-4 text-base sm:text-lg text-gray-800">
            Whether you need a list of email addresses, a list of phone numbers, or a list of domains,
            Exellius provides high-quality data in bulk, saving time and boosting productivity.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full ">
          <Image
            src="/bulk-data-1.png"
            alt="Bulk Task Visual"
            width={600}
            height={600}
            className="w-full h-auto "
          />
        </div>
      </div>

      {/* Features Grid (inside same section) */}
      <div className="relative z-10 max-w-7xl mx-auto mt-20">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Why Use Exellius for Bulk Data Tasks?
          </h3>
          <p className="mt-2 text-sm sm:text-base text-gray-700">
            Manually searching for contact information is tedious and inefficient.
            Exellius automates the process, allowing you to:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {[
            "Find email addresses in bulk with precision",
            "Verify email addresses in bulk to improve deliverability",
            "Perform bulk domain search to uncover key decision-makers",
            "Use bulk mobile number finder to expand your contact database",
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm border border-[#eee] p-6 flex items-start gap-4 text-left"
            >
              <div className="bg-[#9856F2] rounded-full p-2">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm sm:text-base font-medium text-gray-800">
                {item}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm sm:text-base text-gray-600 text-center max-w-2xl mx-auto">
          With Exellius, you can process thousands of records in minutes, ensuring your campaigns
          target the right prospects with validated data.
        </p>
      </div>
    </section>
  )
}
