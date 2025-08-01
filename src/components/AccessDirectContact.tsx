"use client"

import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import PhoneAnimation from "@/components/animation/PhoneAnimation"

export default function EmailFinderFeature() {
  return (
    <section className="w-full py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-white shadow-sm">
        {/* Right: Animation - shows first on mobile, second on desktop */}
        <div className="relative bg-[#FBF8FE] order-first md:order-last">
          <Image
            src="/right-back.png"
            alt="Grid background"
            fill
            className="object-cover object-left opacity-30" // Optional: lighter to blend with bg
          />
          <div className="relative z-10 flex items-center justify-center h-full p-8">
            <PhoneAnimation />
          </div>
        </div>

        {/* Left: Content - shows second on mobile, first on desktop */}
        <div className="bg-[#FBF8FE] p-6 sm:p-10 flex flex-col justify-center order-last md:order-first">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            <span className="text-[#9856F2]">03. </span> 
            Access Direct Contacts &<br /> Phone Intelligence
          </h2>
          <div className="w-20 h-1 bg-[#9856F2] rounded mb-4 mt-5" />
          <p className="mt-4 text-md text-gray-900">
            We provide the most comprehensive B2B phone intelligence, combining verified corporate directories with AI-powered number discovery.
          </p>

          {/* Feature List */}
          <ul className="mt-6 space-y-4 text-md text-gray-800">
            {[
              "Check Email Validity — Reduce bounce rates with instant verification.",
              "Bulk Email Lookup — Validate thousands of email addresses at once.",
              "Verified Contact Data — Ensure only accurate leads enter your funnel.",
            ].map((item, i) => {
              const [boldPart, rest] = item.split(" — ")
              return (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="text-[#9856F2] w-7 h-7 sm:w-6 sm:h-6 md:w-5 md:h-5" />
                  <span>
                    <strong className="font-semibold text-gray-1000">{boldPart}</strong> — {rest}
                  </span>
                </li>
              )
            })}
          </ul>

          <a
            href="https://app.exellius.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="bg-[#9856F2] hover:bg-[#813fe0] text-white w-fit mt-8">
              Find Verified Phone Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
