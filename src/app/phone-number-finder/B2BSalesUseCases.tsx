"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function B2BSalesUseCases() {
  return (
    <section className="w-full bg-[#F9EFFC] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/phone-5.svg" // Replace with your image
            alt="B2B Sales Use Case Visual"
            width={520}
            height={350}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Use Cases for <span className="text-[#9856F2]">B2B</span> Sales Teams
          </h2>
          <div className="h-1 w-20 bg-[#9856F2] mb-6 rounded" />

          <ul className="space-y-5 text-sm sm:text-base text-gray-800 mb-6">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-[#9856F2] mt-0.5" />
              <p><strong>Cold Calling Campaigns</strong> – Instantly access direct numbers for higher connect rates.</p>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-[#9856F2] mt-0.5" />
              <p><strong>Account-Based Marketing (ABM)</strong> – Enrich lead profiles with phone data.</p>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-[#9856F2] mt-0.5" />
              <p><strong>CRM Enrichment</strong> – Automatically update missing contact fields.</p>
            </li>
          </ul>

          <p className="text-sm sm:text-base font-medium text-gray-900">
            Enhance your leads with our{" "}
            <a href="#" className="text-[#9856F2] underline hover:text-[#6c3cbe] transition">
              Data Enrichment Suite
            </a>.
          </p>
        </div>
      </div>
    </section>
  )
}
