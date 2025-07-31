"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function LeadDiscoveryStep3() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Step Card */}
        <div className="relative bg-[#F9F5FF] border border-gray-200 rounded-xl shadow-sm overflow-hidden px-6 md:px-12 py-12 flex flex-col lg:flex-row items-center gap-10">
          
          {/* Right-side background image */}
          <div className="absolute inset-y-0 right-0 w-1/2 opacity-60 pointer-events-none hidden md:block z-0">
            <Image
              src="/grp-large.png" // light background pattern
              alt="Grid background"
              fill
              className="object-cover object-right"
            />
          </div>

          {/* Right Screenshot Image - show first on mobile, second on desktop */}
          <div className="w-full lg:w-1/2 flex justify-center relative z-10 order-first lg:order-last">
            <div className="w-[500px]">
              <Image
                src="/finder-4.svg" // replace with actual image
                alt="Email Verifier UI"
                width={500}
                height={360}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Left Text Section - show second on mobile, first on desktop */}
          <div className="w-full lg:w-1/2 relative z-10 text-left order-last lg:order-first">
            <h3 className="text-3xl font-semibold mb-2">
              <span className="text-[#9856F2]">03.</span> Enterprise-Ready Data Governance
            </h3>
            <div className="h-0.5 w-10 bg-[#9856F2] mb-4"></div>

            <p className="text-md sm:text-base text-gray-800 mb-4 max-w-xl">
              Built with privacy by design:
            </p>

            <ul className="space-y-3 text-md text-gray-900">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-[#9856F2]" />
                <span>GDPR-compliant data sourcing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-[#9856F2]" />
                <span>Enterprise-grade security</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-[#9856F2]" />
                <span>Regular auditing of our verification systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
