"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function TechCheckerFeature1() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          What Makes <span className="text-[#6c3cbe]">Exellius</span> the Best Website Technology Checker?
        </h2>
        <div className="h-1 w-20 bg-[#6c3cbe] mt-4 mb-16 mx-auto rounded"></div>

        {/* Inner Card */}
        <div className="relative bg-[#EAF2FB] rounded-xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 shadow-sm border border-gray-200 overflow-hidden">
          
          {/* Background Image Inside Card */}
          <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none opacity-80 hidden md:block z-0">
            <Image
              src="/grp-large.png"
              alt="Background graphic"
              fill
              className="object-contain object-right"
            />
          </div>

          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 text-left relative z-10">
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Uncover the Full Tech Stack Instantly</h4>
            <div className="h-0.5 w-10 bg-[#6c3cbe] mb-5"></div>

            <p className="text-base text-gray-800 mb-6">
              Just enter a website URL to reveal everything it runs on—from frontend frameworks to backend infrastructure.
              Exellius scans, analyzes, and displays:
            </p>

            <ul className="space-y-3 text-sm text-gray-900">
              {[
                <><strong>CMS Platforms</strong> (WordPress, Webflow, etc.)</>,
                <><strong>JavaScript Libraries</strong> (React, Vue, jQuery)</>,
                <><strong>Hosting, CDN & SSL Info</strong></>,
                <><strong>Tracking & Marketing Tools</strong></>
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
                src="/tech-scan-ui.png" // 🔁 Replace with relevant visual
                alt="Tech stack scan preview"
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
