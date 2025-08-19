"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function LeadDiscoveryStep1() {
  return (
    <section className="bg-white px-6 text-center pt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          How <span className="text-[#9856F2]">Exellius</span> Uncovers <br />
          Technology Stack
        </h2>
        <div className="w-16 h-[4px] bg-[#9856F2] mx-auto mb-12" />
        
        {/* Card Container */}
        <div className="relative bg-[#FBF8FE] border border-gray-200 rounded-xl shadow-sm overflow-hidden px-6 md:px-12 py-12 flex flex-col lg:flex-row items-center gap-10">
          
          {/* Background graphic inside card */}
          <div className="absolute inset-y-0 right-0 w-1/2 opacity-90 pointer-events-none hidden md:block z-0">
            <Image
              src="/grp-large.png"
              alt="Background graphic"
              fill
              className="object-contain object-right"
            />
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative z-10 flex justify-center order-first lg:order-last">
            <div className="w-[620px]">
              <Image
                src="/images/img-9.svg"
                alt="Tech Lookup Visual"
                width={620}
                height={500}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Left Content */}
          <div className="w-full lg:w-1/2 relative z-10 text-left order-last lg:order-first">
            <h3 className="text-3xl font-semibold mb-2">
              <span className="text-[#9856F2]">01.</span> Core Infrastructure
            </h3>
            <div className="h-0.5 w-10 bg-[#9856F2] mb-4"></div>

            <p className="text-md sm:text-base text-gray-800 mb-4">
              Exellius’ <strong>website tech lookup</strong> scans domains to uncover the underlying{" "}
              <strong>infrastructure stack</strong> powering any site — giving you visibility into what
              technologies your prospects rely on.
            </p>

            <p className="text-md font-bold mb-2 text-gray-900">Key Insights:</p>
            <ul className="space-y-3 text-md text-gray-900">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-[#9856F2]" />
                <span><strong>CMS:</strong> WordPress, Shopify, Joomla</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-[#9856F2]" />
                <span><strong>Web Servers:</strong> Apache, Nginx, Microsoft IIS</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-[#9856F2]" />
                <span><strong>Programming:</strong> JavaScript frameworks (React, Angular), PHP versions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
