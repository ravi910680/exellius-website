"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function TechCheckerHero() {
  return (
    <section className="relative w-full bg-[#F0F8FF] pt-44 pb-20 px-6 overflow-hidden">
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
        
        {/* Left: Static Image */}
        <div className="w-full max-w-md">
          <Image
            src="/tech_checker.png" // 🔁 Replace with a relevant illustration or screenshot
            alt="Website Technology Checker"
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* Right: Headline + Content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-snug">
            Instantly Discover <span className="text-[#6c3cbe]">What Powers</span> Any Website
          </h1>

          <p className="mt-6 text-base text-gray-900">
            Curious about what tools, platforms, or stacks your competitors are using?
            With our Website Technology Checker, you can uncover any site&apos;s backend & frontend tools—fast.
            Whether you&apos;re a developer, marketer, or founder, understanding tech choices gives you a strategic edge.
          </p>

          <p className="mt-4 text-base text-gray-900">
            From CMS, frameworks, and CDNs to analytics and marketing scripts—we scan it all.
            No setup. Just enter a domain and get full-stack visibility instantly.
          </p>

          <ul className="mt-6 space-y-2">
            {[
              "Detect 80+ technology types including CMS, JS libraries, and CRMs",
              "Instant results—no signup required",
              "Built for developers, marketers & tech analysts"
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-2 font-medium">
                <CheckCircle className="w-5 h-5 text-[#6c3cbe]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="bg-[#9856F2] hover:bg-[#5a30aa] text-white text-lg">
              Try it Free
            </Button>
            <Button variant="ghost" size="lg" className="text-[#6c3cbe] text-lg">
              Explore Features
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
