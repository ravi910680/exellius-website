"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function EcommerceIntelligenceSection() {
  return (
    <section className="bg-[#FEF7FF] py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/img-19.svg" // replace with your actual image path
            alt="Exellius eCommerce Intelligence"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Unlock <span className="text-[#9856F2]">eCommerce Intelligence</span> with Exellius
          </h2>

          <div className="h-1 w-24 bg-[#9856F2] rounded mb-6" />

          <p className="text-base text-gray-800 mb-4">
            Our database tracks <span className="font-semibold">2,500+ eCommerce technologies</span> across{" "}
            <span className="font-semibold">26 million+ websites</span>, enriched with powerful attributes to give
            you a 360° market view.
          </p>

          <h4 className="font-semibold text-gray-900 mb-3">Deep Insights Include:</h4>
          <ul className="space-y-3 mb-6">
            {[
              "Estimated tech spend for smarter prospecting.",
              "Revenue and employee count for firmographic context.",
              "Industry and location data to refine targeting.",
              "Social media influence & global rank to gauge brand impact.",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-800">
                <CheckCircle className="w-5 h-5 mt-1 text-[#9856F2]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <p className="text-base text-gray-700 mb-6">
            👉 Start your search today! Use the{" "}
            <a href="https://www.exellius.com/website-technology-checker" className="text-[#9856F2] underline">
              Exellius Website Tech Stack Analyzer
            </a>{" "}
            to see what technologies any website is using and explore live adoption trends.
          </p>
        </div>
      </div>
    </section>
  )
}
