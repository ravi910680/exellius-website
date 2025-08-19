"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function LeadDiscoveryStep2() {
  return (
    <section className="bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#FEF0EC] border border-gray-200 rounded-2xl overflow-hidden shadow-sm px-6 md:px-12 py-12 flex flex-col lg:flex-row items-center gap-10">
          
          {/* ✅ Background grid pattern */}
          <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none opacity-60 hidden md:block z-0">
            <Image
              src="/grp-large-left.png" // Replace with light grid SVG
              alt="Grid background"
              fill
              className="object-cover"
            />
          </div>

          {/* ✅ Left: UI Image */}
          <div className="w-full lg:w-1/2 relative z-10">
            <Image
              src="/images/img-25.svg" // Replace with actual image
              alt="Contact Discovery UI"
              width={2416}
              height={2112}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>

          {/* ✅ Right: Text Content */}
          <div className="w-full lg:w-1/2 relative z-10 text-left">
            {/* Heading with step number */}
            <div className="flex items-baseline gap-3 mb-2">
              <h3 className="text-3xl font-bold text-[#9856F2]">02.</h3>
              <h4 className="text-3xl font-bold text-gray-900">
                Alternative Contact Discovery
              </h4>
            </div>

            {/* Underline */}
            <div className="h-1 w-12 bg-[#9856F2] mb-5"></div>

            {/* Paragraph */}
            <p className="text-md sm:text-base text-gray-800 leading-relaxed mb-4">
              When direct emails <em>aren’t</em> available, we surface:
            </p>

            <ul className="space-y-3 text-md text-gray-900">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-[#9856F2]" />
                <span>Professional social profiles</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-[#9856F2]" />
                <span>Departmental aliases</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-[#9856F2]" />
                <span>Verified phone numbers (where available)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
