"use client"

import Image from "next/image"

export default function ColdEmailHero() {
  return (
    <section className="bg-[#F8F9FC] border-b border-gray-200">
      <div className="max-w-7xl mx-auto pt-40 px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left content */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Cold email templates
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-lg">
            Find inspiration from best-performing cold emails, sorted by categories.
          </p>
        </div>

        {/* Right image */}
        <div className="flex justify-center md:justify-end">
     {/*     <Image
            src="/images/cold-email-hero.png" // place your image in public/images/
            alt="Cold email templates illustration"
            width={500}
            height={350}
            className="w-full max-w-md h-auto"
            priority
          />
          */}
        </div>
      </div>
    </section>
  )
}
