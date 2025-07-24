"use client"

import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function EmailFinderFeature() {
  return (
    <section className="w-full py-100 px-4">
      <div className="max-w-7xl mx-auto rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-white shadow-sm">
        
        {/* Left: Content */}
        <div className="bg-[#FBF8FE] p-6 sm:p-10 flex flex-col justify-center">
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            <span className="text-[#9856F2]">05. </span> 
             Discover Company Tech Stack
          </h2>
          <div className="w-20 h-1 bg-[#9856F2] rounded mb-4 mt-5" />
          <p className="mt-4 text-md text-gray-900">
          Our technographic intelligence platform reveals the complete digital footprint of any business, from their CRM and marketing automation tools to ecommerce platforms and infrastructure providers.
          </p>

          {/* Feature List */}
          <ul className="mt-6 space-y-3 text-md text-gray-900">
  {[
    "Website Technology Checker — Identify CMS, CRM, and marketing tools.",
    "Tech Stack Lookup — Gain insights into competitor tech usage.",
    "Identify Website Stack — Personalize outreach based on tech preferences.",
   
  ].map((item, i) => {
    const [boldPart, rest] = item.split(" — ");
    return (
      <li key={i} className="flex items-start gap-2">
        <CheckCircle className="text-[#9856F2] w-7 h-7 sm:w-6 sm:h-6 md:w-5 md:h-5 " />
        <span>
          <strong className="font-semibold text-gray-1000">{boldPart}</strong> — {rest}
        </span>
      </li>
    );
  })}
</ul>


          <Button
            className="mt-8 bg-[#9856F2] hover:bg-[#813fe0] text-white w-fit"
            size="lg"
          >
            Find Verified Emails Now
          </Button>
        </div>

        {/* Right: Image on Grid BG */}
        <div className="relative bg-[#FBF8FE]">
          <Image
            src="/right-back.png"
            alt="Grid background"
            fill
            className="object-cover object-left opacity-50"
          />
          <div className="relative z-10 flex items-center justify-center h-full p-8">
            <Image
              src="/home/img-2.png"
              alt="Email finder UI"
              width={400}
              height={300}
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
