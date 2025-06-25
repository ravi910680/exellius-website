"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function DataEnrichmentHero() {
  return (
    <section className="relative w-full bg-[#F9F5FF] pt-44 pb-20 px-6 overflow-hidden">
      {/* Top Background */}
      <Image
        src="/bg_top.png"
        alt="Top Background"
        width={1920}
        height={400}
        className="absolute top-0 left-0 w-full object-cover z-0"
      />

      {/* Bottom Background */}
      <Image
        src="/bg_bottom.png"
        alt="Bottom Background"
        width={1920}
        height={400}
        className="absolute bottom-0 left-0 w-full object-cover z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Left: Image */}
        <div className="w-full max-w-md">
          <Image
            src="/data-enrichment.png" // Replace with actual enrichment visual
            alt="Data Enrichment Visual"
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* Right: Content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-snug">
            <span className="text-[#6c3cbe]">Data Enrichment Suite</span> to{" "}
            <span className="text-[#6c3cbe]">Enhance & Complete</span> Your Lead Data
          </h1>

          <p className="mt-6 text-base text-gray-900">
            Incomplete lead data is costing your sales team time, accuracy, and opportunities.
            With Exellius, enrich your contacts with verified emails, phone numbers, job titles,
            firmographics, technographics, and more—all in one platform.
          </p>

          <p className="mt-4 text-base text-gray-900">
            Empower your CRM with clean, actionable data. Whether you’re uploading a list or enriching in real-time, 
            our AI-powered enrichment ensures every lead is sales-ready.
          </p>

          <ul className="mt-6 space-y-2">
            {[
              "Fill in missing fields like phone, email, or company size",
              "Update outdated job titles and company info",
              "Append firmographic and technographic tags"
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-2 font-medium">
                <CheckCircle className="w-5 h-5 text-[#6c3cbe]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="bg-[#9856F2] hover:bg-[#5a30aa] text-white text-lg">
              Try Data Enrichment
            </Button>
            <Button variant="ghost" size="lg" className="text-[#6c3cbe] text-lg">
              View Use Cases
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
