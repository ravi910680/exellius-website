"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function LeadDiscoveryStep1() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Card Container */}
        <div className="relative bg-[#FBF8FE] border border-gray-200 rounded-xl shadow-sm overflow-hidden px-6 md:px-12 py-12 flex flex-col lg:flex-row items-center gap-10">
          
          {/* ✅ Right-side background image inside the card */}
          <div className="absolute inset-y-0 right-0 w-1/2 opacity-90 pointer-events-none hidden md:block z-0">
            <Image
              src="/grp-large.png"
              alt="Background graphic"
              fill
              className="object-contain object-right"
            />
          </div>

          {/* ✅ Left Content */}
          <div className="w-full lg:w-1/2 relative z-10 text-left">
            <h3 className="text-3xl font-semibold mb-2">
              <span className="text-[#9856F2]">01.</span> Accurate & Fast Email Checker
            </h3>
            <div className="h-0.5 w-10 bg-[#9856F2] mb-4"></div>

            <p className="text-md sm:text-base text-gray-800 mb-6">
              Our <strong>email verification</strong> tool delivers instant results with 95% accuracy.
              By validating emails in real-time, you can:
            </p>

            <ul className="space-y-4 text-md text-gray-900">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-1 text-[#9856F2]" />
                <span><strong>Reduce bounce rates</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-1 text-[#9856F2]" />
                <span><strong>Improve email deliverability</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-1 text-[#9856F2]" />
                <span><strong>Protect sender reputation</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-1 text-[#9856F2]" />
                <span><strong>Save costs on failed campaigns</strong></span>
              </li>
            </ul>
          </div>

          {/* ✅ Right Image */}
          <div className="w-full lg:w-1/2 relative z-10 flex justify-center">
            <div className="w-[420px]">
              <Image
                src="/verify-2.png" // Replace with actual screenshot if different
                alt="Step visual"
                width={420}
                height={300}
                className="w-full h-auto object-contain rounded-lg "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
