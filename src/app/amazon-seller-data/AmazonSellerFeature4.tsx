"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function AmazonSellerFeature4() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
       
        <div className="relative bg-[#EAF2FB] rounded-xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 shadow-sm border border-gray-200 overflow-hidden">
          
          {/* Background Graphic */}
          <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none opacity-50 hidden md:block z-0">
            <Image
              src="/grp-large-left.png"
              alt="Integration Background"
              fill
              className="object-contain object-left"
            />
          </div>

          {/* Left: Visual Image */}
          <div className="w-full lg:w-1/2 flex justify-center relative z-10">
            <div className="w-[420px]">
              <Image
                src="/amazon-integrations.png" // Replace with actual integration visual
                alt="Export & Integration Visual"
                width={420}
                height={300}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2 text-left relative z-10">
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Plug Amazon Seller Data into Your Systems</h4>
            <div className="h-0.5 w-10 bg-[#6c3cbe] mb-5"></div>

            <p className="text-base text-gray-800 mb-6">
              Get full control over how and where your Amazon seller insights flow. Export, sync, and analyze with your favorite tools:
            </p>

            <ul className="space-y-3 text-sm text-gray-900">
              {[
                <><strong>Export to CSV</strong> for manual workflows or BI tools</>,
                <><strong>Connect via API</strong> to automate data pull into your system</>,
                <><strong>Sync with CRMs</strong> like Salesforce or HubSpot</>,
                <><strong>Use with enrichment</strong> or lead scoring pipelines</>
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
