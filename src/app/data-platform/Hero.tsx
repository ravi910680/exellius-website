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

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Text Content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-snug text-gray-900">
            <span className="text-[#9856F2]">Exellius</span>{" "}
            B2B Data Platform – Reliable{" "}
            <span className="text-[#9856F2]">Phone Number</span> & Email Data Solutions
          </h1>

          <p className="mt-6 text-base text-gray-900">
            Exellius offers a cutting-edge B2B Data Platform designed to help businesses
            streamline their lead generation and sales outreach. Our platform provides access
            to high-quality B2B contact data, including verified emails, phone numbers, and
            professional details, ensuring your campaigns target the right decision-makers.
          </p>

          <p className="mt-4 text-base text-gray-900">
            Whether you’re looking for an email database, domain-based contacts, or direct
            phone numbers, Exellius delivers reliable business contact data to fuel your growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="bg-[#9856F2] hover:bg-[#7836c9] text-white text-lg">
              Get Started
            </Button>
            <Button variant="ghost" size="lg" className="text-[#6c3cbe] text-lg">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full max-w-md">
          <Image
            src="/plate-1.svg"
            alt="Lead Finder Login"
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
