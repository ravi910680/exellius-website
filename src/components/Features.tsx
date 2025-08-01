"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Features() {
  return (
    <section className="w-full py-20  px-0 bg-white pt-0">
      <div className="w-full max-w-[100%] grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Column */}
        {/* Left Column */}
<div className="bg-[#fcf4fc] px-6 sm:px-10 md:px-20 py-10 sm:py-16 md:py-16 flex flex-col justify-center h-full">

          <h2 className="text-4xl sm:text-4xl font-bold text-gray-900">
            Precision-Built Tools for <br />
            <span className="text-[#9856F2]">Smarter Prospecting</span>
          </h2>
          <div className="w-20 h-1 bg-[#9856F2] rounded mt-5 mb-6" /> {/* Divider after title */}
          <p className="text-gray-900 text-md leading-relaxed">
            Exellius provides an all-in-one platform designed to transform how businesses discover, verify, and connect with their ideal customers. Our powerful suite of tools eliminates the guesswork from prospecting while ensuring you work with only the highest-quality data.
          </p>
        </div>

        {/* Right Column */}
        {/* Right Column */}
<div className="bg-[#ecf4fc] px-6 sm:px-10 md:px-10 py-12 sm:py-16 md:py-24 flex flex-col justify-center h-full">
  {/* Image at the top/left */}
 

  <h3 className="text-3xl font-semibold text-gray-900">
    Technical Trust Builders
  </h3>
  <div className="w-20 h-1 bg-[#9856F2] rounded mt-3 mb-6" /> {/* Divider after title */}

   <div className="relative h-24 w-full max-w-[400px] mb-6 mx-auto md:mx-0 md:mb-8">
    <Image
      src="/trust.png"
      alt="Technical trust icons"
      fill
      className="object-contain"
    />
  </div>
  <a
  href="https://app.exellius.com/signup"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block"
>
  <Button className="bg-[#9856F2] hover:bg-[#813fe0] text-white w-fit">
    Avail Free Trial
  </Button>
</a>

</div>
      </div>
    </section>
  )
}
