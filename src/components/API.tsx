"use client"

import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function EmailFinderFeature() {
  return (
    <section className="w-full pb-20 px-4">
      <div className="max-w-7xl mx-auto rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-white shadow-sm">
        
        {/* Right: Image on Grid BG - shows first on mobile */}
        <div className="relative bg-[#FBF8FE] order-first md:order-last">
          <Image
            src="/right-back.png"
            alt="Grid background"
            fill
            className="object-cover object-left opacity-30"
          />
          <div className="relative z-10 flex items-center justify-center h-full p-8">
            <Image
              src="/images/img-13.png"
              alt="Email finder UI"
              width={2468}
              height={1964}
              className="rounded-md"
            />
          </div>
        </div>

        {/* Left: Content - shows second on mobile */}
        <div className="bg-[#FBF8FE] p-6 sm:p-10 flex flex-col justify-center order-last md:order-first">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            <span className="text-[#9856F2]">07. </span> 
            API & CRM Integrations
          </h2>
          <div className="w-20 h-1 bg-[#9856F2] rounded mb-4 mt-5" />
          <p className="mt-4 text-md text-gray-900">
            Exellius provides enterprise-grade integration capabilities designed to embed our data intelligence directly into your existing workflows.
          </p>

          {/* Feature List */}
          <ul className="mt-6 space-y-3 text-md text-gray-900">
            {[
              "Email Finder API — Automate email validation in your apps.",
              "Lead Enrichment API — Enhance CRM data programmatically.",
              "Contact Verification API — Ensure data accuracy in real-time.",
            ].map((item, i) => {
              const [boldPart, rest] = item.split(" — ");
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
            href="https://www.exellius.com/developer-api-hub"
           
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="bg-[#9856F2] hover:bg-[#813fe0] text-white w-fit mt-8">
              Get API Documentation
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
