"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function LeadDiscoveryStep3() {
  return (
    <section className="bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Inner Card */}
        <div className="relative bg-[#FBF8FE] rounded-xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 shadow-sm border border-gray-200 overflow-hidden">

          {/* Full background image inside the card */}
          <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none opacity-90 hidden md:block z-0">
            <Image
              src="/grp-large.png"
              alt="Background graphic"
              fill
              className="object-cover object-right"
            />
          </div>

          {/* Right: Step 3 Visual - show first on mobile */}
          <div className="w-full lg:w-1/2 flex justify-center relative z-10 order-first lg:order-last">
            <div className="w-[520px]">
              <Image
                src="/lead-discovery/img-5.png" // Replace with appropriate image if needed
                alt="Step 3 Visual"
                width={420}
                height={300}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Left Text Content - show second on mobile */}
          <div className="w-full lg:w-1/2 text-left relative z-10 order-last lg:order-first">
            <h3 className="text-2xl font-bold text-[#6c3cbe] mb-2"></h3>
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Enrich Your Existing Leads</h4>
            <div className="h-0.5 w-10 bg-[#6c3cbe] mb-5"></div>

            <p className="text-base text-gray-800 mb-6">
              Upgrade your existing lead lists with the latest information:
            </p>

            <ul className="space-y-3 text-sm text-gray-900">
              {[
                <><strong>Fill in missing contact details</strong> like emails and phone numbers</>,
                <><strong>Update job titles</strong> and company changes automatically</>,
                <><strong>Append firmographics</strong> such as industry, size, and revenue</>,
                <><strong>Boost deliverability</strong> with 96%+ accurate, refreshed data</>
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 text-[#6c3cbe]" />
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
