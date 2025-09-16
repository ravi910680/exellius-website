"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function LeadDiscoveryStep3() {
  return (
    <section className="bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Card */}
        <div className="relative bg-[#FBF8FE] rounded-xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 shadow-sm border border-gray-200 overflow-hidden">

          {/* Right-side background image */}
          <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none opacity-90 hidden md:block z-0">
            <Image
              src="/grp-large.png"
              alt="Background graphic"
              fill
              className="object-contain object-right"
            />
          </div>

          {/* Right Visual - show first on mobile, second on desktop */}
          <div className="w-full lg:w-1/2 flex justify-center relative z-10 order-first lg:order-last">
            <div className="">
              <Image
                src="/images2/image-8.svg"
                alt="API Integration Visual"
                width={420}
                height={300}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Left Text Content - show second on mobile, first on desktop */}
          <div className="w-full lg:w-1/2 text-left relative z-10 order-last lg:order-first">
            <h3 className="text-3xl font-semibold mb-1">
              <span className="text-[#9856F2]">03.</span> API Integration
            </h3>
            <div className="h-0.5 w-20 bg-[#9856F2] mb-5 mt-5"></div>

            <p className="text-base text-gray-800 mb-4">
              Scale your outreach with Exellius’ <strong>mobile number finder API</strong>:<br />
              Response includes:
            </p>

            <ul className="space-y-3 text-sm text-gray-900">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-[#9856F2]" />
                <span>International & national formats</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-[#9856F2]" />
                <span>Country code & verification status</span>
              </li>
            </ul>

            <a
              href="https://app.exellius.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-[#9856F2] hover:bg-[#6c3cbe] text-white font-medium px-8 py-3 rounded-md text-sm sm:text-base mt-8">
                Get Started for Free
              </button>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
