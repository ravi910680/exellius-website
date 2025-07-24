"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function LeadDiscoveryStep1() {
  return (
    <section className="bg-white  px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          How <span className="text-[#6c3cbe]">Exellius</span> Helps You Discover High-Quality B2B Leads
        </h2>
        <div className="h-1 w-20 bg-[#6c3cbe] mt-4 mb-16 mx-auto rounded"></div>

        {/* Inner Card */}
        <div className="relative bg-[#FBF8FE] rounded-xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 shadow-sm border border-gray-200 overflow-hidden">
          
          {/* Right-side background image inside the card */}
          <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none opacity-90 hidden md:block z-0">
            <Image
              src="/grp-large.png"
              alt="Background graphic"
              fill
              className="object-cover object-right"
            />
          </div>

          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 text-left relative z-10">
            <h3 className="text-2xl font-bold text-[#6c3cbe] mb-2"></h3>
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Define Your Target Audience</h4>
            <div className="h-0.5 w-10 bg-[#6c3cbe] mb-5"></div>

            <p className="text-base text-gray-800 mb-6">
              Refine your leads with Exellius’ advanced filtering options based on:
            </p>

            <ul className="space-y-3 text-sm text-gray-900">
              {[
                <><strong>Industry</strong> (Tech, Healthcare, Finance, etc.)</>,
                <><strong>Company Size</strong> (Startups, SMBs, Enterprises)</>,
                <><strong>Job Roles</strong> (C-level, Managers, Directors)</>,
                <><strong>Geographic Location</strong></>
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 text-[#6c3cbe]" />
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Single Image */}
          <div className="w-full lg:w-1/2 flex justify-center relative z-10">
            <div className="w-[520px]">
              <Image
                src="/lead-discovery/img-3.png" // 🔁 Replace with appropriate image
                alt="Step visual"
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
