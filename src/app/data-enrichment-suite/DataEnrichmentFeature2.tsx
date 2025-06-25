"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function DataEnrichmentFeature2() {
  return (
    <section className="bg-white py-6 px-6">
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
                src="/crm-sync.png" // Replace with real visual
                alt="CRM Enrichment Visual"
                width={520}
                height={360}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2 text-left relative z-10">
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Real-Time CRM Enrichment</h4>
            <div className="h-0.5 w-10 bg-[#6c3cbe] mb-5"></div>

            <p className="text-base text-gray-800 mb-6">
              Keep your pipeline clean and accurate—automatically. Exellius integrates directly with your CRM to enrich leads as they arrive and maintain data hygiene over time:
            </p>

            <ul className="space-y-3 text-sm text-gray-900">
              {[
                <><strong>Auto-fill lead data</strong> inside HubSpot, Salesforce & others</>,
                <><strong>Enrich in real-time</strong> when a form is submitted or lead is added</>,
                <><strong>Daily syncs</strong> to update job titles, company info & more</>,
                <><strong>Trigger workflows</strong> based on enriched fields like revenue or role</>
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
