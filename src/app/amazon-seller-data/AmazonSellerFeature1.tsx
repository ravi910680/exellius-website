"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function AmazonSellerFeature1() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Unlock <span className="text-[#6c3cbe]">Global Amazon Seller</span> Intelligence
        </h2>
        <div className="h-1 w-20 bg-[#6c3cbe] mt-4 mb-16 mx-auto rounded"></div>

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
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Global Seller Coverage</h4>
            <div className="h-0.5 w-10 bg-[#6c3cbe] mb-5"></div>

            <p className="text-base text-gray-800 mb-6">
              Get access to a growing network of Amazon sellers across all major geographies and categories:
            </p>

            <ul className="space-y-3 text-sm text-gray-900">
              {[
                <><strong>Millions of sellers</strong> across 100+ countries</>,
                <><strong>US, UK, IN, DE & 15+ Amazon marketplaces</strong></>,
                <><strong>Private label, FBA, DTC, and wholesale models</strong></>,
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 text-[#6c3cbe]" />
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-gray-600">
              From emerging brands to high-volume stores, access detailed Amazon seller profiles to fuel your sales and partnerships.
            </p>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2 flex justify-center relative z-10">
            <div className="w-[420px]">
              <Image
                src="/amazon-global-map.png" // Replace with relevant visual
                alt="Amazon Sellers Map"
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
