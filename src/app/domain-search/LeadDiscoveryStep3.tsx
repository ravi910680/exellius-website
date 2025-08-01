"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function LeadDiscoveryStep3() {
  return (
    <section className="bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Step Card */}
        <div className="relative bg-[#F9F5FF] border border-gray-200 rounded-xl shadow-sm overflow-hidden px-6 md:px-12 py-12 flex flex-col lg:flex-row items-center gap-10">
          
          {/* Right-side background image */}
          <div className="absolute inset-y-0 right-0 w-1/2 opacity-60 pointer-events-none hidden md:block z-0">
            <Image
              src="/grp-large.png"
              alt="Grid background"
              fill
              className="object-cover object-right"
            />
          </div>

          {/* Right Screenshot Image - show first on mobile, second on desktop */}
          <div className="w-full lg:w-1/2 flex justify-center relative z-10 order-first lg:order-last">
            <div className="w-[500px]">
              <Image
                src="/domain-3.png"
                alt="Email Verifier UI"
                width={500}
                height={360}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Left Text Section - show second on mobile, first on desktop */}
          <div className="w-full lg:w-1/2 relative z-10 text-left order-last lg:order-first">
            <h3 className="text-3xl font-bold mb-2">
              <span className="text-[#9856F2]">03.</span> Domain Search API for Automation
            </h3>
            <div className="h-0.5 w-10 bg-[#9856F2] mb-4"></div>

            <p className="text-md sm:text-base text-gray-800 mb-5 max-w-xl">
              Integrate our Domain Search API into your CRM or marketing stack to find email addresses
              programmatically—ideal for SaaS platforms and custom workflows.
            </p>

            <p className="text-md font-bold mb-2 text-gray-900">Key Benefits:</p>
            <ul className="space-y-3 text-md text-gray-900">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-[#9856F2]" />
                <span>Real-time email verification.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-[#9856F2]" />
                <span>Reduce manual data entry with automated enrichment.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
