"use client"

import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function EmailVerifyFeature() {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-sm bg-[#FEF0EC]">
        
        {/* Left: Image on background grid */}
        <div className="relative bg-[#FEF0EC]">
          <Image
            src="/left-back.png"
            alt="Background grid"
            fill
            className="object-cover opacity-30"
          />
          <div className="relative z-10 flex items-center justify-center h-full p-8">
            <Image
              src="/images/img-15.svg"
              alt="Email verification UI"
              width={2604}
              height={1554}
              className="rounded-md"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="bg-[#FEF0EC] p-6 sm:p-10 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 items-center gap-2">
            <span className="text-[#9856F2]">04. </span>
             Data Enrichment & Lead Intelligence
          </h2>
          <div className="w-20 h-1 bg-[#9856F2] rounded mb-4 mt-5" />
          <p className="text-md text-gray-700 leading-relaxed mb-6">
            Transform basic contact lists into rich prospect profiles with our AI-driven enrichment engine.
          </p>
          {/* Bullet List */}
          <ul className="space-y-4 text-md text-gray-800">
            {[
              "B2B Contact Intelligence — Enhance lead profiles with firmographics.",
              "Data Enrichment Platform — Improve lead scoring with verified data.",
              "Ideal Customers — Target high-intent buyers with precision.",
            ].map((item, i) => {
              const [boldPart, rest] = item.split(" — ");
              return (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="text-[#9856F2] w-7 h-7 sm:w-6 sm:h-6 md:w-5 md:h-5" />
                  <span>
                    <strong className="font-semibold text-gray-1000">{boldPart}</strong> — {rest}
                  </span>
                </li>
              );
            })}
          </ul>

          <a
            href="https://app.exellius.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="bg-[#9856F2] hover:bg-[#813fe0] text-white w-fit mt-8">
              Enrich Your CRM Data
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
