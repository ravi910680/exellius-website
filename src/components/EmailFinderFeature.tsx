"use client"

import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function EmailFinderFeature() {
  return (
    <section className="w-full px-4 sm:px-6">
      <div className="max-w-7xl mx-auto rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-white shadow-sm">
        {/* Right: Image */}
        <div className="relative bg-[#FBF8FE] order-first md:order-last">
          {/* Optional grid background, retained as before */}
          <Image
            src="/right-back.png"
            alt="Grid background"
            fill
            className="object-cover object-left opacity-50"
          />
          <div className="relative z-10 flex items-center justify-center h-full p-6 sm:p-8">
            <Image
              src="/images/img-test.webp"
              alt="Email Finder Feature"
              width={643} // Adjust as needed
              height={471} // Adjust as needed
              className="rounded-lg "
              priority
            />
          </div>
        </div>

        {/* Left: Content remains unchanged */}
        <div className="bg-[#FBF8FE] p-6 sm:p-10 flex flex-col justify-center order-last md:order-first">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
            <span className="text-[#9856F2]">01. </span> 
            Find Email Addresses & <br />
            Business Contacts
          </h2>
          <div className="w-20 h-1 bg-[#9856F2] rounded mb-4 mt-5" />
          <p className="mt-4 text-md text-gray-900">
            Exellius revolutionizes lead generation with our intelligent contact discovery system that delivers accurate professional emails at scale.
          </p>
          {/* Feature List */}
          <ul className="mt-6 space-y-3 text-md text-gray-900">
            {[
              "Company Email Finder — Locate corporate emails in seconds.",
              "Domain Email Extraction — Extract all emails associated with a website.",
              "Professional Email Search — Get accurate work emails for decision-makers.",
              "Employee Email Finder — Locate emails by name and company.",
            ].map((item, i) => {
              const [boldPart, rest] = item.split(" — ");
              return (
                <li key={i} className="flex items-start gap-3">
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
              Find Verified Contacts Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
