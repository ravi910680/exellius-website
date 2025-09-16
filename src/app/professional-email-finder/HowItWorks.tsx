"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function LeadDiscoveryStep1() {
  return (
    <section className="bg-white px-6 text-center py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Take Your Prospecting to the <span className="text-[#9856F2]">Next Level</span>
        </h2>
        <div className="w-16 h-[4px] bg-[#9856F2] mx-auto mb-6" />

        <p className="text-gray-700 text-base mb-12">
          Finding emails is just the beginning. Exellius gives you the intelligence to connect smarter:
        </p>

        {/* Main Card */}
        <div className="relative bg-[#FBF8FE] border border-gray-200 rounded-xl shadow-sm overflow-hidden px-6 md:px-12 py-12 flex flex-col lg:flex-row items-center gap-10">
          {/* Background pattern on right */}
          <div className="absolute inset-y-0 right-0 w-1/2 opacity-90 pointer-events-none hidden md:block z-0">
            <Image
              src="/grp-large.png"
              alt="Background graphic"
              fill
              className="object-contain object-right"
            />
          </div>

          {/* Image - shows first on mobile, right side on desktop */}
          <div className="w-full lg:w-1/2 relative z-10 flex justify-center order-first lg:order-last">
            <div >
              <Image
                src="/images2/image-2.svg"
                alt="Department pattern UI"
                width={2344}
                height={1916}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Text Content - shows second on mobile, left side on desktop */}
          <div className="w-full lg:w-1/2 relative z-10 text-left order-last lg:order-first">
            <h3 className="text-3xl font-semibold mb-2">
              <span className="text-[#9856F2]">01.</span> Department-Specific Email Patterns
            </h3>
            <div className="h-0.5 w-10 bg-[#9856F2] mb-4"></div>

            <p className="text-md sm:text-base text-gray-800 mb-4">
              Our algorithm detects unique email structures for:
            </p>

            <ul className="space-y-3 text-md text-gray-900">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-[#9856F2]" />
                <span>Executive teams (C-suite patterns)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-[#9856F2]" />
                <span>Sales & marketing departments</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-[#9856F2]" />
                <span>Engineering/technical roles</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
