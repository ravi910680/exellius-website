"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import AnimatedVisual from "./animation/AnimatedVisual"
import "./animation/FigmaSmartLoopedAnimation.css";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#fcf4fc] pt-44 pb-20 px-6 overflow-hidden">
      {/* Top Background Image */}
      <Image
        src="/bg_top.png" // 🖼️ Replace with your actual asset
        alt="Top Background"
        width={1920}
        height={400}
        className="absolute top-0 left-0 w-full object-cover z-0"
      />

      {/* Bottom Background Image */}
      <Image
        src="/bg_bottom.png" // 🖼️ Replace with your actual asset
        alt="Bottom Background"
        width={1920}
        height={400}
        className="absolute bottom-0 left-0 w-full object-cover z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center ">
        {/* Left Content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-1000">
            <span className="text-[#9856F2]">Exellius</span> – The Ultimate B2B<br />
            Data Platform for Verified Leads &{" "}
            <span className="text-[#9856F2]">Email Validation</span>
          </h1>

          <p className="mt-6 text-lg text-gray-1000">
            Find, Verify, and Reach High-Quality B2B Leads with Confidence
          </p>

          <p className="mt-2 text-sm text-gray-900">
            98% Accurate B2B Data | 100M+ Verified Contacts | GDPR Compliant
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-wrap gap-4 items-center ">
          <Button size="lg" className="bg-[#9856F2] hover:bg-[#5a30aa] text-white text-lg">
  Book a Demo
</Button>

            <Button variant="ghost" size="lg" className="text-[#6c3cbe] text-lg">
              Compare Plans <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Social Proof Image */}
          <div className="mt-6">
            <Image
              src="/star.png" // 🖼️ Your actual image path here
              alt="Customer Reviews"
              width={240}
              height={60}
            />
          </div>
        </div>

        {/* Right Content */}
       

        {/* Search Field (moved out of image box) */}
       {/* Right Content */}
<div className="mt-10 lg:mt-0 lg:ml-12">
  <AnimatedVisual />
</div>

      </div>
    </section>
  )
}
