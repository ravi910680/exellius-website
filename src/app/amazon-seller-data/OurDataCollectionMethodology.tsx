"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function OurDataCollectionMethodology() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Our <span className="text-[#6c3cbe]">Data Collection</span> Methodology
        </h2>
        <div className="h-1 w-20 bg-[#6c3cbe] mt-4 mb-16 mx-auto rounded"></div>

        {/* Content Card */}
        <div className="relative bg-[#F5F9FF] rounded-xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 shadow-sm border border-gray-200 overflow-hidden">
          
          {/* Background Graphic */}
          <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none opacity-70 hidden md:block z-0">
            <Image
              src="/grp-large.png"
              alt="Background Graphic"
              fill
              className="object-contain object-right"
            />
          </div>

          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 text-left relative z-10">
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Multi-Source Verification</h4>
            <div className="h-0.5 w-10 bg-[#6c3cbe] mb-5"></div>

            <p className="text-base text-gray-800 mb-6">
              Exellius employs a layered, multi-source strategy to ensure our Amazon seller database remains accurate and comprehensive:
            </p>

            <ul className="space-y-3 text-sm text-gray-900">
              {[
                <><strong>API Integration:</strong> Direct connections with marketplace platforms</>,
                <><strong>Public Record Verification:</strong> Cross-referencing with business registries</>,
                <><strong>Seller Outreach:</strong> Direct communication to confirm details</>,
                <><strong>Continuous Updates:</strong> Monthly refresh cycles for data freshness</>,
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 text-[#6c3cbe]" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Visual Image */}
          <div className="w-full lg:w-1/2 flex justify-center relative z-10">
            <div className="w-[420px]">
              <Image
                src="/data-methodology.png" // Replace with a visual that reflects data flow/verification
                alt="Data Methodology Visual"
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
