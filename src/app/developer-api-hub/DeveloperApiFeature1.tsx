"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function DeveloperApiFeature1() {
  return (
    <section className="bg-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Built for <span className="text-[#6c3cbe]">Developers</span>, Powered by{" "}
          <span className="text-[#6c3cbe]">Speed & Scale</span>
        </h2>
        <div className="h-1 w-20 bg-[#6c3cbe] mt-4 mb-16 mx-auto rounded" />

        {/* Feature Card */}
        <div className="relative bg-[#FBF8FE] rounded-xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 shadow-sm border border-gray-200 overflow-hidden">
          
          {/* Background Image */}
          <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none opacity-90 hidden md:block z-0">
            <Image
              src="/grp-large.png"
              alt="Background graphic"
              fill
              className="object-contain object-right"
            />
          </div>

          {/* Left: Text */}
          <div className="w-full lg:w-1/2 text-left relative z-10">
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Powerful REST API for B2B Data</h4>
            <div className="h-0.5 w-10 bg-[#6c3cbe] mb-5"></div>

            <p className="text-base text-gray-800 mb-6">
              Designed for seamless integration, our RESTful API delivers enriched B2B contact and company data directly into your stack with speed and precision.
            </p>

            <ul className="space-y-3 text-sm text-gray-900">
              {[
                <><strong>Fast JSON responses</strong> with scalable infrastructure</>,
                <><strong>Developer-friendly docs</strong> and real-time testing sandbox</>,
                <><strong>Secure API key management</strong> with rate limiting and usage logs</>,
                <><strong>Global coverage</strong> across 100+ countries with verified data</>
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 text-[#6c3cbe]" />
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2 flex justify-center relative z-10">
            <div className="w-[420px]">
              <Image
                src="/api-doc.png" // Replace with your actual API doc visual
                alt="API Integration Visual"
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
