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
            src="/amazon-1.jpeg"
            alt="Amazon Seller Data"
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* Right: Text Content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-snug">
            <span className="text-[#6c3cbe]">Amazon Seller Database</span><br />
            Complete Amazon Seller List for Your Business Growth
          </h1>

          <p className="mt-6 text-base text-gray-900">
            At Exellius, we&apos;ve built &apos; most comprehensive Amazon seller database to help businesses like yours connect with verified sellers across multiple marketplaces.
          </p>

          <p className="mt-4 text-base text-gray-900">
            Our meticulously curated Amazon seller list provides accurate, up-to-date information to streamline your lead generation and partnership efforts.
          </p>

         <div className="mt-8 flex flex-wrap gap-4">
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
