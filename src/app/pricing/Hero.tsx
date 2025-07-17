"use client"

import Image from "next/image" // Make sure you have next/image installed if not already

export default function LeadDiscoveryHero() {
  const purpleColor = "#9856F2"; // Defined for the 'Exellius' part of the title

  return (
    <section className="relative w-full bg-[#FFF5FD] pt-44 pb-20 px-6 overflow-hidden">
      {/* Top Background Image */}
      <Image
        src="/bg_top.png" // Ensure this path is correct relative to your public/ directory
        alt="Top Background Decoration"
        width={1920} // Provide appropriate width
        height={400} // Provide appropriate height
        className="absolute top-0 left-0 w-full object-cover z-0"
        priority // Consider adding priority if this image is above the fold
      />

      {/* Bottom Background Image */}
      <Image
        src="/bg_bottom.png" // Ensure this path is correct relative to your public/ directory
        alt="Bottom Background Decoration"
        width={1920} // Provide appropriate width
        height={400} // Provide appropriate height
        className="absolute bottom-0 left-0 w-full object-cover z-0"
        priority // Consider adding priority if this image is above the fold
      />

      {/* Content Container - Relative Z-index to appear above background images */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col  justify-center text-center p-10">
        {/* Headline and Subtitle */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2 sm:text-6xl md:text-3xl lg:text-3xl">
          <span style={{ color: purpleColor }}>Exellius</span> Pricing Plans
        </h1>
        <p className="text-xl text-gray-700 sm:text-xl md:text-xl lg:text-xl">
          Credit-Based Plans — Pay Only for What You Use
        </p>
      </div>
    </section>
  )
}