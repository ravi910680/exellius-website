"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AmazonSellerDataHero() {
  return (
    <section className="relative w-full bg-[#F9F5FF] pt-44 pb-20 px-6 overflow-hidden">
      {/* Decorative Backgrounds */}
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

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left: Visual */}
        <div className="w-full max-w-md">
          <Image
            src="/amazon-seller-hero.png" // Replace with your Amazon data image
            alt="Amazon Seller Data"
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* Right: Text Content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-snug">
            <span className="text-[#6c3cbe]">Amazon Seller Data</span> to Power{" "}
            <span className="text-[#6c3cbe]">DTC & SaaS Prospecting</span>
          </h1>

          <p className="mt-6 text-base text-gray-900">
            Instantly access verified contact and store-level insights for millions of Amazon sellers worldwide. 
            From private-label brands to high-volume sellers—target the right merchants with precision.
          </p>

          <p className="mt-4 text-base text-gray-900">
            Filter by category, reviews, revenue, location, or fulfillment method. Find their decision-makers, emails, and websites in one click.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="bg-[#9856F2] hover:bg-[#5a30aa] text-white text-lg">
              Explore Seller Leads
            </Button>
            <Button variant="ghost" size="lg" className="text-[#6c3cbe] text-lg">
              View Sample Data
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
