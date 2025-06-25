"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function TechCheckerStep4() {
  return (
    <section className="bg-white py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 shadow-sm border border-gray-200 overflow-hidden bg-[#FEF0EC]">
          {/* Background Image */}
          <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none opacity-40 hidden md:block z-0">
            <Image
              src="/grp-large-left.png"
              alt="Decorative Background"
              fill
              className="object-cover object-left"
            />
          </div>

          {/* Left Side - Screenshots */}
          <div className="w-full lg:w-1/2 flex gap-4 justify-center items-center relative z-10">
            <div className="w-[230px]">
              <Image
                src="/img-4a.png"
                alt="Tech Panel 1"
                width={230}
                height={360}
                className="w-full h-auto object-contain rounded-md"
              />
            </div>
            <div className="w-[230px] -ml-3">
              <Image
                src="/img-4b.png"
                alt="Tech Panel 2"
                width={230}
                height={360}
                className="w-full h-auto object-contain rounded-md"
              />
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="w-full lg:w-1/2 text-left relative z-10">
            <h3 className="text-2xl font-bold text-[#6c3cbe] mb-2">Step 4:</h3>
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Analyze Tech Stack of Any Website</h4>
            <div className="h-0.5 w-10 bg-[#6c3cbe] mb-5"></div>

            <p className="text-base text-gray-800 mb-6">
              Instantly uncover the tools and technologies used by your prospects:
            </p>

            <ul className="space-y-3 text-sm text-gray-900">
              {[
                "Discover CMS, analytics, CRMs, and more",
                "Track web technologies for better targeting",
                "Identify sales triggers from tech changes",
                "Enrich lead profiles with tech insights"
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 text-[#6c3cbe]" />
                  <span className="font-semibold">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
