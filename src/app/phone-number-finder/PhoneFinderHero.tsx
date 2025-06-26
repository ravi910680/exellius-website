"use client"

import { useState } from "react"
import Image from "next/image"

export default function PhoneFinderHero() {
  const [input, setInput] = useState("")

  return (
    <section className="relative w-full bg-[#fcf4fc] pt-40 pb-24 px-6 overflow-hidden text-center">
      {/* Top Background Image */}
      <Image
        src="/bg_top.png"
        alt="Top Background"
        width={1920}
        height={400}
        className="absolute top-0 left-0 w-full object-cover z-0"
      />

      {/* Bottom Background Image */}
      <Image
        src="/bg_bottom.png"
        alt="Bottom Background"
        width={1920}
        height={400}
        className="absolute bottom-0 left-0 w-full object-cover z-0"
      />

      {/* Grid Lines Background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[url('/grid-lines.svg')] bg-cover opacity-20" />

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Subtitle */}
        <p className="text-[#9856F2] font-medium mb-2 text-sm sm:text-base">
          Phone Number Finder
        </p>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Get Verified <span className="text-[#9856F2]">Professional</span>{" "}
          Phone <br className="hidden sm:block" />
          Numbers in Seconds
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
          Connecting with decision-makers quickly is crucial in the fast-moving world. A phone number finder helps sales teams bypass gatekeepers and reach prospects directly. Exellius offers a reliable B2B phone number finder tool that delivers verified mobile numbers with high accuracy, ensuring your outreach efforts hit the mark.
        </p>

        {/* Input Form */}
        <form className="flex justify-center w-full px-4" onSubmit={(e) => e.preventDefault()}>
          <div className="flex w-full max-w-2xl">
            <input
              type="text"
              placeholder="Enter LinkedIn Profile Link…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 text-sm sm:text-base border border-r-0 border-[#9856F2] rounded-l-full focus:outline-none focus:ring-2 focus:ring-[#9856F2] h-12 px-4 bg-white"
            />
            <button
              type="submit"
              className="bg-[#9856F2] text-white text-sm sm:text-base px-6 h-12 rounded-r-full hover:bg-[#6c3cbe] border border-[#9856F2]"
            >
              FIND MOBILE NUMBER
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
