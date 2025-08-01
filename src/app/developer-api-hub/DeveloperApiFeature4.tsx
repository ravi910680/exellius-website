"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function DeveloperApiFeature4() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
       
        {/* Feature Card */}
        <div className="relative bg-[#EAF2FB] rounded-xl p-8 md:p-12 flex flex-col-reverse lg:flex-row items-center gap-10 shadow-sm border border-gray-200 overflow-hidden">
          
          {/* Background Graphic */}
          <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none opacity-70 hidden md:block z-0">
            <Image
              src="/grp-large-left.png"
              alt="Background graphic"
              fill
              className="object-contain object-left"
            />
          </div>

          {/* Left: Visual */}
          <div className="w-full lg:w-1/2 flex justify-center relative z-10">
            <div className="w-[420px]">
              <Image
                src="/outreach-target.png" // Replace with actual graphic
                alt="Outreach Targeting Visual"
                width={420}
                height={300}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2 text-left relative z-10">
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Target the Right People with Precision</h4>
            <div className="h-0.5 w-10 bg-[#6c3cbe] mb-5"></div>

            <p className="text-base text-gray-800 mb-6">
              Integrate high-precision targeting into your workflows. Our API supports rich filtering so your outbound efforts reach the right audience, every time.
            </p>

            <ul className="space-y-3 text-sm text-gray-900">
              {[
                <><strong>Filter by job function</strong> and seniority level</>,
                <><strong>Segment by industry</strong>, employee size & region</>,
                <><strong>Target users</strong> of specific tech stacks</>,
                <><strong>Prioritize accounts</strong> showing buyer intent</>
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
