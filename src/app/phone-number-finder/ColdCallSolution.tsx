"use client"

import Image from "next/image"

export default function ColdCallSolution() {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Why <span className="text-[#9856F2] font-bold">83%</span> of Cold Calls Fail
        </h2>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
          (And How We Fix It)
        </h3>

        {/* Divider */}
        <div className="h-1 w-20 bg-[#9856F2] rounded mx-auto mb-8" />

        {/* Subtext */}
        <p className="text-gray-800 text-base sm:text-lg mb-2 font-semibold">
          Get Verified Phone Numbers as You Prospect
        </p>
        <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
          Enrich LinkedIn profiles with direct mobile numbers, email addresses, and company data in one click.
          Exellius works seamlessly with <strong>LinkedIn, Sales Navigator, and Recruiter Lite</strong> — turning profiles into actionable contacts.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
          {/* Card 1 */}
          <div className="rounded-xl bg-[#f9f4fd] border border-[#eee] px-6 py-6">
            <Image
              src="/icons/call-1.png" // Add image to /public/icons/
              alt="No Gatekeepers"
              width={50}
               height={50}
              className="mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">No gatekeepers</h4>
            <p className="text-gray-700 text-sm">Reach mobile phones, not front desks</p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl bg-[#fef4f2] border border-[#eee] px-6 py-6">
            <Image
              src="/icons/call-2.png"
              alt="Real-time Verification"
              width={50}
               height={50}
              className="mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Real-time verification</h4>
            <p className="text-gray-700 text-sm">95% accuracy guarantee</p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl bg-[#edf5fd] border border-[#eee] px-6 py-6">
            <Image
              src="/icons/call-3.png"
              alt="Global Coverage"
              width={50}
              height={50}
              className="mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Global coverage</h4>
            <p className="text-gray-700 text-sm">Including hard-to-find European markets</p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="bg-[#9856F2] hover:bg-[#6c3cbe] text-white font-medium px-8 py-3 rounded-md text-sm sm:text-base">
          Get Started for Free
        </button>
      </div>
    </section>
  )
}
