"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function DataEnrichmentFeature2() {
  return (
    <section className="bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Enrichment Feature Card */}
        <div className="relative rounded-xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 shadow-sm border border-gray-200 overflow-hidden bg-[#FEF0EC]">
          
          {/* Background Graphic (left side) */}
          <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none opacity-40 hidden md:block z-0">
            <Image
              src="/grp-large-left.png"
              alt="Section Background"
              fill
              className="object-cover object-left"
            />
          </div>

          {/* Left: Visual */}
          <div className="w-full lg:w-1/2 relative z-10">
            <div className="rounded-lg p-2 w-full h-full flex justify-center items-center">
              <Image
                src="/data-enrich-1.png" // Replace with real visual
                alt="CRM Enrichment Visual"
                width={420}
                height={320}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2 text-left relative z-10">
            <h4 className="text-3xl font-semibold mb-1">
              <span className="text-[#9856F2]">02.</span> Automatic Enrichment
            </h4>
            <div className="h-0.5 w-20 bg-[#9856F2] mb-4 mt-5"></div>

            <p className="text-sm text-gray-800 mb-5 ">We append:</p>

            <ul className="space-y-3 text-sm text-gray-900">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-[#9856F2]" />
                <span>B2B contact data (Direct dials, verified emails)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-[#9856F2]" />
                <span>Company insights (Funding, employee count, technographics)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-[#9856F2]" />
                <span>Intent signals (Recent web activity, content downloads)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
