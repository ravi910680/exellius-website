"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function LeadDiscoveryStep3() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Inner Card */}
        <div className="relative bg-[#FBF8FE] rounded-xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 shadow-sm border border-gray-200 overflow-hidden">
          
          {/* Background graphic on right */}
          <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none opacity-90 hidden md:block z-0">
            <Image
              src="/grp-large.png"
              alt="Background graphic"
              fill
              className="object-contain object-right"
            />
          </div>

          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 text-left relative z-10">
            <h3 className="text-3xl font-semibold mb-1">
              <span className="text-[#9856F2]">03.</span> Export & Activate
            </h3>
            <div className="h-0.5 w-20 bg-[#9856F2] mb-5 mt-5"></div>

            <p className="text-base text-gray-800 mb-6">
              Push enriched leads to your CRM/MAP in 1 click
            </p>

           <a
    href="https://app.exellius.com/signup"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-4"
  >
    <Button className="bg-[#9856F2] hover:bg-[#6c3cbe] text-white text-sm font-semibold px-6 py-2 rounded">
      Create Free Account
    </Button>
  </a>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2 flex justify-center relative z-10">
            <div className="w-[420px]">
              <Image
                src="/data-5.svg" // Replace with actual step 3 image
                alt="Step 3 visual"
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
