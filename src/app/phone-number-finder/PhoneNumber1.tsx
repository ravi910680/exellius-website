"use client"

import Image from "next/image"

export default function LeadDiscoveryStep1() {
  return (
    <section className="bg-white  px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          How <span className="text-[#6c3cbe]">Exellius’</span> Phone Number Finder Works
        </h2>
        <div className="h-1 w-20 bg-[#6c3cbe] mt-4 mb-16 mx-auto rounded"></div>

        {/* Inner Card */}
        <div className="relative bg-[#FBF8FE] rounded-xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 shadow-sm border border-gray-200 overflow-hidden">
          
          {/* Right-side background image inside the card */}
          <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none opacity-90 hidden md:block z-0">
            <Image
              src="/grp-large.png"
              alt="Background graphic"
              fill
              className="object-contain object-right"
            />
          </div>

          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 text-left relative z-10">
            <h3 className="text-3xl font-semibold mb-1">
              <span className="text-[#9856F2]">01.</span> LinkedIn Profile Search
            </h3>
            <div className="h-0.5 w-20 bg-[#6c3cbe] mb-5 mt-5"></div>

            <p className="text-base text-gray-800 mb-6">
              Enter a LinkedIn URL to instantly retrieve the associated mobile number. <br />
              Example: <strong>“https://www.linkedin.com/in/john-doe”</strong> → Get their direct contact.
            </p>
          </div>

          {/* Right: Single Image */}
          <div className="w-full lg:w-1/2 flex justify-center relative z-10">
            <div className="w-[420px]">
              <Image
                src="/image_1.png"
                alt="Step visual"
                width={420}
                height={300}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
