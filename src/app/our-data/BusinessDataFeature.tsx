"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function BusinessDataFeature() {
  return (
    <section className="px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Divider Only */}
       

        {/* Feature Card */}
        <div className="relative bg-[#FBF8FE] rounded-xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 shadow-sm border border-gray-200 overflow-hidden">
          
          {/* Background Graphic */}
          <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none opacity-90 hidden md:block z-0">
            <Image
              src="/grp-large.png"
              alt="Decorative Background"
              fill
              className="object-contain object-right"
            />
          </div>

          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 text-left relative z-10">
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Business & Corporate Data</h4>
            <div className="h-0.5 w-10 bg-[#6c3cbe] mb-5"></div>

            <p className="text-base text-gray-800 mb-6">
              Drive business intelligence with structured corporate datasets.
            </p>

            <ul className="space-y-3 text-sm text-gray-900">
              {[
                <><strong>Firmographics:</strong> Company registrations, industry classifications</>,
                <><strong>Supply Chain & Logistics:</strong> Shipping routes, trade volumes</>,
                <><strong>Consumer Behavior:</strong> Retail sales, e-commerce trends</>,
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 text-[#6c3cbe]" />
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-gray-600">
              Useful for B2B intelligence, logistics planning, and retail strategy.
            </p>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2 flex justify-center relative z-10">
            <div className="w-[420px]">
              <Image
                src="/business-corp.png" // Replace with relevant image
                alt="Business Data Illustration"
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
