"use client"

import Image from "next/image"

export default function LeadDiscoveryStep2() {
  return (
    <section className="bg-white  px-6">
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
              src="/verify-3.png" // Replace with actual image
              alt="Bulk email checker UI"
              width={520}
              height={360}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>

          {/* ✅ Right: Text Content */}
          <div className="w-full lg:w-1/2 relative z-10 text-left">
            {/* Heading with step number */}
            <div className="flex items-baseline gap-3 mb-2">
              <h3 className="text-3xl font-bold text-[#9856F2]">02.</h3>
              <h4 className="text-3xl font-bold text-gray-900">
                Bulk Email Checker for Large Lists
              </h4>
            </div>

            {/* Underline */}
            <div className="h-1 w-12 bg-[#9856F2] mb-5"></div>

            {/* Paragraph */}
            <p className="text-md sm:text-base text-gray-800 leading-relaxed max-w-xl">
              Need to verify thousands of emails? Our <strong>bulk email checker</strong> allows you
              to upload entire lists in CSV or Excel formats and receive verification results in minutes.
              Perfect for marketers, sales teams, and recruiters managing large databases.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
