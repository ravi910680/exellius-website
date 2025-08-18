"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function LeadDiscoveryStep4() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Step Card */}
        <div className="relative rounded-xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 shadow-sm border border-gray-200 overflow-hidden bg-[#FEF0EC]">
          
          {/* Left-side background image */}
          <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none opacity-40 hidden md:block z-0">
            <Image
              src="/grp-large-left.png"
              alt="Section Background"
              fill
              className="object-cover object-left"
            />
          </div>

          {/* Left: Dual Images */}
          <div className="w-full lg:w-1/2 flex gap-4 justify-center items-center relative z-10">
            {/* Left Panel */}
            <div className="w-[230px]">
              <Image
                src="/images/img-20.png"
                alt="Campaign Panel 1"
                width={230}
                height={360}
                className="w-full h-auto object-contain rounded-md"
              />
            </div>

            {/* Right Overlay Panel */}
            <div className="w-[230px] -ml-3">
              <Image
                src="/img-4b.png"
                alt="Campaign Panel 2"
                width={230}
                height={360}
                className="w-full h-auto object-contain rounded-md"
              />
            </div>
          </div>

          {/* Right Text Content */}
          <div className="w-full lg:w-1/2 text-left relative z-10">
            <h3 className="text-2xl font-bold text-[#6c3cbe] mb-2">Step 4:</h3>
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Track & Optimize Campaigns</h4>
            <div className="h-0.5 w-10 bg-[#6c3cbe] mb-5"></div>

            <p className="text-base text-gray-800 mb-6">
              Measure and improve your outreach efforts in real time:
            </p>

            <ul className="space-y-3 text-sm text-gray-900">
              {[
                <><strong>Access campaign performance analytics</strong></>,
                <><strong>Track open rates, click-throughs, and engagement</strong></>,
                <><strong>Identify top-performing segments and channels</strong></>,
                <><strong>Refine messaging</strong> based on real-time feedback</>
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 text-[#6c3cbe]" />
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
