"use client"

import Image from "next/image"

export default function WhyPhoneFinder() {
  return (
    <section className="w-full bg-[#fef4f2] py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/phone-1.svg" // Make sure to add this in your /public folder
            alt="Phone Finder UI"
            width={700}
            height={500}
            className="w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Use a <span className="text-[#9856F2]">B2B Phone Number</span> Finder?
          </h2>
          <div className="h-1 w-20 bg-[#9856F2] mb-6 rounded" />

          <p className="text-gray-800 mb-6 text-base leading-relaxed">
            A <strong>phone number search</strong> tool like Exellius’ helps you:
          </p>

          <ul className="space-y-5 mb-6 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-[#9856F2] mt-1">✅</span>
              <span>
                <strong>Accelerate lead engagement</strong> — Skip the inbox and reach decision-makers by phone immediately.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#9856F2] mt-1">✅</span>
              <span>
                <strong>Improve conversion rates</strong> — Direct calls have higher response rates than emails.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#9856F2] mt-1">✅</span>
              <span>
                <strong>Access global contacts</strong> — Find phone numbers across North America, Europe, Asia, and more.
              </span>
            </li>
          </ul>

          <p className="text-base text-gray-800 leading-relaxed">
            With <strong>120M+ verified mobile numbers</strong>, Exellius ensures you get{" "}
            <strong>accurate, up-to-date</strong>—no landlines or generic HQ numbers.
          </p>
        </div>
      </div>
    </section>
  )
}
