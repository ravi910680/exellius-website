"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function GetStartedSection() {
  return (
    <section className="bg-[#FEF7FF] py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/plate-3.svg" // replace with your actual image path
            alt="Exellius Platform"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get Started with <span className="text-[#9856F2]">Exellius’</span> B2B Email Database Today!
          </h2>

          <div className="h-1 w-24 bg-[#9856F2] rounded mb-6" />

          <p className="text-base text-gray-800 mb-4">
            Ready to transform your outreach? Explore our{" "}
            <a href="/data-enrichment-suite" className="text-[#9856F2] underline">B2B Data Enrichment Tool</a> to
            enhance your existing lead lists with missing contact details.
          </p>

          <h4 className="font-semibold text-gray-900 mb-3">Key Takeaways:</h4>
          <ul className="space-y-3 mb-6">
            {[
              "Exellius provides a reliable B2B Data Platform for sales and marketing success.",
              "Features like Email Finder, Phone Number Finder, and Domain Search simplify lead generation.",
              "High-quality B2B contact data ensures better campaign performance.",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-800">
                <CheckCircle className="w-5 h-5 mt-1 text-[#9856F2]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <p className="text-base text-gray-700">
            Fuel your growth with accurate, actionable data—try Exellius now!
          </p>
        </div>
      </div>
    </section>
  )
}
