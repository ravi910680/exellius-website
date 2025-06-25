"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function DataPlatformFeature1() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Inner Feature Card */}
        <div className="relative bg-[#FBF8FE] rounded-xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 shadow-sm border border-gray-200 overflow-hidden">
          
          {/* Background image */}
          <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none opacity-50 hidden md:block z-0">
            <Image
              src="/grp-large.png"
              alt="Tech background"
              fill
              className="object-cover object-right"
            />
          </div>

          {/* Left Text */}
          <div className="w-full lg:w-1/2 text-left relative z-10">
            
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Verified Global B2B Coverage</h4>
            <div className="h-0.5 w-10 bg-[#6c3cbe] mb-5"></div>

            <p className="text-base text-gray-800 mb-6">
              Reach decision-makers around the world with complete and validated contact data:
            </p>

            <ul className="space-y-3 text-sm text-gray-900">
              {[
                <><strong>Millions of B2B contacts</strong> across 100+ countries</>,
                <><strong>C-suite to operational roles</strong> across departments</>,
                <><strong>Emails, phones, and LinkedIn profiles</strong> for outreach-ready targeting</>,
                <><strong>Firmographics included</strong> like company size, industry, and location</>
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 text-[#6c3cbe]" />
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center relative z-10">
            <div className="w-[420px]">
              <Image
                src="/data-global.png" // Update with actual asset
                alt="Global B2B Coverage"
                width={420}
                height={300}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
