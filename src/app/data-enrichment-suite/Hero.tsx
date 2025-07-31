"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function DataEnrichmentHero() {
  return (
    <section className="relative w-full bg-[#FFF5FD] pt-40 pb-20 px-6 overflow-hidden">
      {/* Backgrounds */}
      <Image
        src="/bg_top.png"
        alt="Top Background"
        width={1920}
        height={400}
        className="absolute top-0 left-0 w-full object-cover z-0"
      />
      <Image
        src="/bg_bottom.png"
        alt="Bottom Background"
        width={1920}
        height={400}
        className="absolute bottom-0 left-0 w-full object-cover z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Right: Image - show first on mobile, second on desktop */}
        <div className="w-full max-w-lg order-first lg:order-last">
          <Image
            src="/data-1.svg" // Ensure this path exists
            alt="Data Enrichment Visual"
            width={800}
            height={800}
            className="w-full h-auto"
          />
        </div>

        {/* Left: Text Content - show second on mobile, first on desktop */}
        <div className="max-w-2xl text-left order-last lg:order-first">
          <h1 className="text-5xl font-bold leading-snug">
            Boost Business Growth with{" "}
            <span className="text-[#9856F2]">Advanced</span> Data Enrichment
          </h1>

          <p className="mt-6 text-base text-gray-900">
            Data enrichment is the process of enhancing raw data with additional insights, ensuring your business has the most up-to-date and actionable information.{" "}
            At Exellius, we provide cutting-edge data enrichment tools and services to help businesses refine their customer databases, improve lead generation, and drive growth.
          </p>

          <h2 className="mt-8 font-semibold text-lg text-black">Why Data Enrichment Matters</h2>
          <p className="mt-2 text-gray-900">
            <strong>Data enrichment platforms</strong> like Exellius enable businesses to:
          </p>

          <ul className="mt-4 space-y-3">
            {[
              "Improve lead quality with contact data enrichment",
              "Enhance CRM records with CRM data enrichment",
              "Increase sales efficiency with lead enrichment and customer data enrichment",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-2 font-medium">
                <CheckCircle className="w-5 h-5 text-[#9856F2]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-4">
            <a
              href="https://app.exellius.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-auto"
            >
              <Button size="lg" className="bg-[#9856F2] hover:bg-[#5a30aa] text-white text-lg">
                Get Started
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
