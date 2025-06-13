"use client"

import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function EmailVerifyFeature() {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto rounded-xl bg-[#FEF0EC] overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-sm">
        
        {/* Left: Image on background grid */}
        <div className="relative ">
          <Image
            src="/left-back.png"
            alt="Background grid"
            fill
            className="object-cover opacity-30"
          />
          <div className="relative z-10 flex items-center justify-center h-full p-8">
            <Image
              src="/Amazon.png"
              alt="Email verification UI"
              width={400}
              height={300}
              className="rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className=" p-6 sm:p-10 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 items-center gap-2">
            <span className="text-[#9856F2]">06. </span>
             Amazon Seller Data & B2B Leads
          </h2>
          <div className="w-20 h-1 bg-[#9856F2] rounded mb-4 mt-5" />

          {/* Divider */}
          <div className="w-10 h-1  rounded mt-4 mb-6" />

          <p className="text-md text-gray-700 leading-relaxed mb-6">
          Exellius offers the most comprehensive Amazon seller intelligence available, providing direct access to the rapidly evolving e-commerce ecosystem.
          </p>

          {/* Bullet List */}
          <ul className="space-y-4 text-md text-gray-800">
  {[
    "Amazon Seller Contact Data — Connect with e-commerce sellers.",
    "B2B Leads for Amazon Sellers — Find verified wholesale buyers.",
    "Amazon Seller Database — Access a curated list of seller details.",
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
      </div>
    </section>
  )
}
