'use client'

import { useState } from "react"

import clsx from "clsx"
import Image from "next/image"

const tabs = [
  "Domain Email Search",
  "Professional Email Finder",
  "Email Verifier",
]

export default function EmailFinderHero() {
  const [activeTab, setActiveTab] = useState("Domain Email Search")

  return (
    <section className="relative w-full bg-[#fcf4fc] pt-44 pb-20 px-6 overflow-hidden text-center">
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

      {/* Radial/Grid Background Overlay (optional) */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[url('/grid-lines.svg')] bg-cover opacity-20" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Find professional emails by domain in one click |{" "}
          <span className="text-[#9856F2]">Exellius</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-gray-800 mb-10 max-w-2xl mx-auto">
          Exellius helps find emails by domain, streamlines sales and marketing by finding email
          addresses by name, bulk email finder and API services in one click.
        </p>

        {/* Tab Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-8">
            <div className="w-fit  flex justify-center gap-2 mb-4 border border-[#9856F2] p-2">
       {tabs.map((tab, index) => (
  <button
    key={tab}
    onClick={() => setActiveTab(tab)}
    className={clsx(
      "px-5 py-2.5 text-sm sm:text-base font-medium transition-all  rounded-none text-black",
      activeTab === tab
        ? "bg-white border-[#9856F2] text-[#9856F2]"
        : "bg-[#fcf4fc] border-[#e0d0f5] text-gray-700 hover:border-[#9856F2]",
      index === 1 && "border-x-2 border-x-[#e0d0f5]" // left+right border for second tab
    )}
  >
    {tab}
  </button>
))}


          </div>
        </div>

        {/* Search Field */}
      <form className="flex justify-center w-full px-4">
  <div className="flex w-full max-w-2xl">
    <input
      type="text"
      placeholder="enter your domain name"
      className="flex-1 text-sm sm:text-base border border-r-0 border-[#9856F2] rounded-l-full focus:outline-none focus:ring-2 focus:ring-[#9856F2] h-12 px-4"
    />
    <button
      type="submit"
      className="bg-[#9856F2] text-white text-sm sm:text-base px-6 h-12 rounded-r-full hover:bg-[#6c3cbe] border border-[#9856F2]"
    >
      {activeTab}
    </button>
  </div>
</form>



      </div>
    </section>
  )
}
