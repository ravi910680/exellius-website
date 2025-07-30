"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import AnimatedVisual from "./animation/AnimatedVisual"
import "./animation/FigmaSmartLoopedAnimation.css"

export default function Hero() {
  return (
    <section className="relative w-full bg-[#fcf4fc] pt-32 pb-12 sm:pt-40 sm:pb-20 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background Images */}
      <Image
        src="/bg_top.png"
        alt="Top Background"
        width={1920}
        height={400}
        priority
        className="absolute top-0 left-0 w-full object-cover z-0 pointer-events-none select-none"
      />
      <Image
        src="/bg_bottom.png"
        alt="Bottom Background"
        width={1920}
        height={400}
        loading="lazy"
        className="absolute bottom-0 left-0 w-full object-cover z-0 pointer-events-none select-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-0">
        {/* Left Content */}
        <div className="w-full max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight text-gray-900">
            <span className="text-[#9856F2]">Exellius</span> – The Ultimate B2B<br/>
            Data Platform for Verified Leads &{" "}
            <span className="text-[#9856F2]">Email Validation</span>
          </h1>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-900">
            Find, Verify, and Reach High-Quality B2B Leads with Confidence
          </p>
          <p className="mt-2 text-xs sm:text-sm text-gray-800">
            98% Accurate B2B Data | 100M+ Verified Contacts | GDPR Compliant
          </p>
          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center lg:justify-start items-center">
            <Button size="lg" className="w-full sm:w-auto bg-[#9856F2] hover:bg-[#5a30aa] text-white text-lg">
              Book a Demo
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto text-[#6c3cbe] text-lg">
              Compare Plans <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          {/* Social Proof Image */}
          <div className="mt-4 sm:mt-6">
            <Image
              src="/star.png"
              alt="Customer Reviews"
              width={180}
              height={48}
              className="mx-auto lg:mx-0"
              priority
            />
          </div>
        </div>
        {/* Right Content */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <AnimatedVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
