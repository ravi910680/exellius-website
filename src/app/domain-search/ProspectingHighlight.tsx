"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function ProspectingHighlight() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center ">
        
        {/* Right UI Image - show first on mobile, second on desktop */}
        <div className="w-full lg:w-1/2 flex justify-center order-first lg:order-last">
          <Image
            src="/images/img-6.svg" // Replace with actual image
            alt="Prospecting UI"
            width={760}
            height={560}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Left Text Content - show second on mobile, first on desktop */}
        <div className="w-full lg:w-1/2 text-left order-last lg:order-first">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Supercharge Your Prospecting<br /> with <span className="text-[#9856F2]">Exellius</span>
          </h2>
          <div className="h-0.5 w-14 bg-[#9856F2] mb-6" />

          <ul className="space-y-5 text-base text-gray-800">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#9856F2] mt-0.5" />
              <span>
                <strong>Find emails by domain</strong> at scale with 95%+ accuracy.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#9856F2] mt-0.5" />
              <span>
                <strong>Bulk domain search</strong> for high-volume lead generation.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#9856F2] mt-0.5" />
              <span>
                <strong>Domain Search API</strong> for automated workflows.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
