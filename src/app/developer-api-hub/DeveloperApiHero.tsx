"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function DeveloperApiHero() {
  return (
    <section className="relative w-full bg-[#F4F6FF] pt-44 pb-20 px-6 overflow-hidden">
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
        
        {/* Left: Visual */}
        <div className="w-full max-w-md">
          <Image
            src="/api-hero.png" // Replace with your developer visual
            alt="API Integration Visual"
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* Right: Text Content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-snug">
            <span className="text-[#6c3cbe]">Developer API Hub</span> to{" "}
            <span className="text-[#6c3cbe]">Power Your Apps</span> with Verified Data
          </h1>

          <p className="mt-6 text-base text-gray-900">
            Build smarter products, workflows, and automations using our developer-first enrichment and verification APIs. Exellius gives you programmatic access to the most accurate B2B data infrastructure on the web.
          </p>

          <p className="mt-4 text-base text-gray-900">
            Enrich leads, validate emails, and search for contacts — all through a flexible, well-documented REST API built for scale and reliability.
          </p>

          <ul className="mt-6 space-y-2">
            {[
              "Real-time email verification & enrichment endpoints",
              "Bulk operations with async processing support",
              "Secure token-based authentication",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-2 font-medium">
                <CheckCircle className="w-5 h-5 text-[#6c3cbe]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="bg-[#9856F2] hover:bg-[#5a30aa] text-white text-lg">
              Explore API Docs
            </Button>
            <Button variant="ghost" size="lg" className="text-[#6c3cbe] text-lg">
              Start Free with API Key
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
