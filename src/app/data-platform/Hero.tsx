"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function DataPlatformHero() {
  return (
    <section className="relative w-full bg-[#FFF5FD] pt-44 pb-20 px-6 overflow-hidden">
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
        
        {/* Left: Image or Illustration */}
        <div className="w-full max-w-md">
          <Image
            src="/b2b-data.png" // Replace with relevant hero illustration
            alt="B2B Email Data"
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* Right: Headline + Content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-snug">
            <span className="text-[#6c3cbe]">Industry-Leading B2B Email Data</span>  
            Built for Sales, Marketing & Growth
          </h1>

          <p className="mt-6 text-base text-gray-900">
            Tap into our powerful data platform with millions of verified B2B email contacts, curated from multiple trusted sources, updated in real-time, and enriched with firmographic and technographic insights.
          </p>

          <p className="mt-4 text-base text-gray-900">
            Whether you&apos;re prospecting, enriching leads, or building ABM campaigns — our platform fuels it all with unmatched precision and reach.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="bg-[#9856F2] hover:bg-[#5a30aa] text-white text-lg">
              Explore Data Platform
            </Button>
            <Button variant="ghost" size="lg" className="text-[#6c3cbe] text-lg">
              Request a Sample
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
