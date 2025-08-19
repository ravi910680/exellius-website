"use client";

import Image from "next/image";

export default function WebsiteTechChecker() {
  return (
    <section className="relative w-full py-24 pt-60 bg-[#fcf4fc] overflow-hidden text-center">
      {/* Background Layers */}
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
      <div className="absolute inset-0 bg-[url('/grid-lines.svg')] bg-cover opacity-10 pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="text-md text-[#9856F2] font-semibold mb-2 pb-10">
          Website Technology Checker
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Analyze the Technology Stack <br />
          <span className="text-[#9856F2]">Behind Any Website</span>
        </h1>

        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Run a free, instant website tech stack analysis of CMS, frameworks, trackers, and security tools.
        </p>

        {/* Input + Button */}
        <div className="flex justify-center">
          <div className="flex w-full max-w-3xl bg-white rounded-lg shadow-sm overflow-hidden border border-[#e0d0f5]">
            <input
              type="text"
              placeholder="Enter Technology (e.g., Shopify, Magento, Klaviyo)"
              className="flex-1 py-4 px-4 text-sm outline-none text-black bg-transparent"
            />
            <button className="bg-[#9856F2] hover:bg-[#7e48d6] text-white font-semibold text-sm px-6">
              Check Now
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10 text-gray-700 text-sm font-medium">
          <span>✅ No registration</span>
          <span>✅ 100% private scans</span>
        </div>
      </div>
    </section>
  );
}
