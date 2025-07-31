"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function LeadDiscoveryHero() {
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

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Static Image - shows first on mobile, left column on desktop */}
        <div className="w-full max-w-xl order-first lg:order-first">
          <Image
            src="/lead-discovery/hero.png"
            alt="Lead Discovery Visual"
            width={800}
            height={800}
            className="w-full h-auto"
          />
        </div>

        {/* Right: Headline + Content - shows second on mobile, right column on desktop */}
        <div className="max-w-2xl order-last lg:order-last">
          <h1 className="text-4xl font-bold leading-snug">
            <span className="text-[#6c3cbe]">B2B Lead Discovery</span> That Outperforms{" "}
            <span className="text-[#6c3cbe]">Manual Prospecting</span>
          </h1>

          <p className="mt-6 text-base text-gray-900">
            Having trouble getting qualified B2B leads into your pipeline? You’re not alone.
            In a world where 62% of marketers say generating high-quality leads is their biggest challenge,
            having access to verified, accurate B2B database isn’t just helpful—it’s essential.
          </p>

          <ul className="mt-6 space-y-2">
            {[
              "Get direct contacts for C-level executives",
              "Access a premium B2B leads database with 95% accuracy",
              "Enrich existing prospect data with missing contacts",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-2 font-medium">
                <CheckCircle className="w-5 h-5 text-[#6c3cbe]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://app.exellius.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-auto"
            >
              <Button size="lg" className="bg-[#9856F2] hover:bg-[#5a30aa] text-white text-lg">
                Create Free Account
              </Button>
            </a>
            <a href="/pricing" className="w-auto">
              <Button variant="ghost" size="lg" className="text-[#6c3cbe] text-lg">
                Compare Plans
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
