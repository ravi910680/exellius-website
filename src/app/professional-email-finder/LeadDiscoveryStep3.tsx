"use client"

import Image from "next/image"

export default function LeadDiscoveryStep3() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Step Card */}
        <div className="relative bg-[#F9F5FF] border border-gray-200 rounded-xl shadow-sm overflow-hidden px-6 md:px-12 py-12 flex flex-col lg:flex-row items-center gap-10">
          
          {/* Right-side background image */}
          <div className="absolute inset-y-0 right-0 w-1/2 opacity-60 pointer-events-none hidden md:block z-0">
            <Image
              src="/grp-large.png" // light background pattern if needed
              alt="Grid background"
              fill
              className="object-cover object-right"
            />
          </div>

          {/* Left Text Section */}
          <div className="w-full lg:w-1/2 relative z-10 text-left">
            <h3 className="text-3xl font-semibold mb-2">
              <span className="text-[#9856F2]">03.</span> Email Verifier API for Seamless Integration
            </h3>
            <div className="h-0.5 w-10 bg-[#9856F2] mb-4"></div>

            <p className="text-md sm:text-base text-gray-800 mb-4 max-w-xl">
              Automate email validation within your CRM, marketing tools, or custom applications using
              Exellius’ <strong>Email Verifier API</strong>. Ensure every new contact added to your system
              is verified instantly.
            </p>
          </div>

          {/* Right Screenshot Image */}
          <div className="w-full lg:w-1/2 flex justify-center relative z-10">
            <div className="w-[500px]">
              <Image
                src="/img-3-step.png" // replace with actual image
                alt="Email Verifier UI"
                width={500}
                height={360}
                className="w-full h-auto object-contain rounded-lg "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
