"use client"

import Image from "next/image"

const features = [
  {
    title: "98%+ Email Accuracy",
    description: "Our Email Verifier ensures minimal bounce rates.",
  },
  {
    title: "Real-Time Updates",
    description: "Access the latest B2B email data available.",
  },
  {
    title: "Global Coverage",
    description: "Millions of professional contacts across industries.",
  },
  {
    title: "Easy reach",
    description: "Direct phone numbers of executives for direct reach.",
  },
]

export default function WhyExelliusProvider() {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-[#9856F2]">Exellius</span> as Your Trusted<br />
            B2B Data Provider?
          </h2>

          <div className="w-16 h-1 bg-[#9856F2] mb-6" />

          <p className="text-gray-700 mb-6">
            In a world where data accuracy drives success, Exellius stands out as a leading B2B Data Provider with:
          </p>

          <ul className="space-y-4">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Image
                  src="/icons/check.png" // Replace with your checkmark icon in public folder
                  alt="check"
                  width={24}
                  height={24}
                  className="mt-1"
                />
                <p className="text-gray-800 text-base">
                  <span className="font-semibold">{item.title}</span> — {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/domain-finder-img.png" // Replace with your actual image path
            alt="Exellius Dashboard"
            width={600}
            height={500}
            className="w-full h-auto rounded-lg "
          />
        </div>
      </div>
    </section>
  )
}
