"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HowItWorksInfographic() {
  const steps = [
    {
      image: "/icons/icon-2.png", // 👈 Your image for "Enter a Domain"
      title: "Enter a Domain",
      desc: 'Search any company website (e.g., "exellius.com").',
      bg: "bg-[#F6F0FF]",
    },
    {
      image: "/icons/icon-3.png", // 👈 Your image for "Review Results"
      title: "Review Results",
      desc: "Get a list of emails with confidence scores and sources.",
      bg: "bg-[#FFF2ED]",
    },
    {
      image: "/icons/icon-1.png", // 👈 Your image for "Export or Verify"
      title: "Export or Verify",
      desc: "Get a list of emails with confidence scores and sources.",
      bg: "bg-[#EEF7FF]",
    },
  ]

  return (
    <section className="py-24 px-6 bg-white text-center">
      {/* Title */}
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
        How It Works (This will go as <span className="text-[#9856F2] text-5xl">infographic<br className="hidden md:inline" /> along </span>{" "} with above content)
      </h2>
      <div className="h-1 w-16 bg-[#9856F2] mx-auto mb-14" />

      {/* Steps */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
  {steps.map((step, i) => (
    <div
      key={i}
      className={`rounded-xl p-8 text-left shadow-sm ${step.bg} transition hover:shadow-md`}
    >
      {/* Icon + Index Row */}
      <div className="mb-6 flex items-center justify-between">
        {/* Icon */}
        <Image src={step.image} alt={step.title} width={48} height={48} />

        {/* Index Number */}
        <span className="text-2xl font-bold text-[#E0C4FF]">
          {String(i + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Title and Description */}
      <h4 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h4>
      <p className="text-base text-gray-700">{step.desc}</p>
    </div>
  ))}
</div>


      {/* CTA */}
      <div className="mt-12">
        <Button className="bg-[#9856F2] hover:bg-[#6c3cbe] text-white px-16 py-8 text-base sm:text-lg rounded-md">
          Try Domain Search Free
        </Button>
      </div>
    </section>
  )
}
