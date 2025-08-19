"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function LeadDiscoveryStep2() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#FEF0EC] border border-gray-200 rounded-2xl overflow-hidden shadow-sm px-6 md:px-12 py-12 flex flex-col lg:flex-row items-center gap-10">
          
          {/* Background grid pattern on left */}
          <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none opacity-60 hidden md:block z-0">
            <Image
              src="/grp-large-left.png"
              alt="Grid background"
              fill
              className="object-cover"
            />
          </div>

          {/* Left UI Image */}
          <div className="w-full lg:w-1/2 relative z-10">
            <Image
              src="/images/img-8.svg"
              alt="Marketing & Analytics UI"
              width={520}
              height={360}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>

          {/* Right Text Content */}
          <div className="w-full lg:w-1/2 relative z-10 text-left">
            <div className="flex items-baseline gap-3 mb-2">
              <h3 className="text-3xl font-semibold mb-2">
                <span className="text-[#9856F2]">02.</span> Marketing & Analytics
              </h3>
            </div>

            <div className="h-1 w-24 bg-[#9856F2] mb-5"></div>

            <p className="text-md sm:text-base text-gray-800 leading-relaxed max-w-xl mb-5">
              Discover the marketing and analytics stack powering any website. From SEO tools to tracking pixels and ad networks, get insights into how businesses grow and scale their traffic.
            </p>

            <p className="text-md font-bold mb-2 text-gray-900">Key Insights:</p>
            <ul className="space-y-3 text-md text-gray-900">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-[#9856F2]" />
                <span><strong>SEO Tools:</strong> SEMrush, Ahrefs, Moz</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-[#9856F2]" />
                <span><strong>Tracking:</strong> Google Analytics, Hotjar, Facebook Pixel</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-[#9856F2]" />
                <span><strong>Ads:</strong> Google AdSense, Amazon Associates</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
