"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronsRight } from "lucide-react"


const useCases = [
  {
    title: "Sales Teams",
    description: "Find decision-makers from target accounts",
    image: "/icons/sales.png",
    bg: "#F8F2FF",
  },
  {
    title: "Recruiters",
    description: "Source candidates from company domains",
    image: "/icons/bulk-7.png",
    bg: "#EDF2FB",
  },
  {
    title: "Marketers",
    description: "Build segmented contact lists for campaigns",
    image: "/icons/marketing.png",
    bg: "#FEF1F4",
  },
]

const steps = [
  {
    step: "01",
    text: "Enter multiple domains (or upload a CSV)",
    bg: "#F9F5FF",
  },
  {
    step: "02",
    text: "Exellius retrieves all associated emails, phones, names, and job titles",
    bg: "#FEF6F5",
  },
  {
    step: "03",
    text: "Export the enriched list of prospects for your outreach",
    bg: "#EDF2FB",
  },
]

export default function BulkDomainSearchSection() {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          <span className="text-[#9856F2]">03.</span>{" "}
          <span className="text-gray-900">Bulk Domain Search:</span>{" "}
          Extract All <span className="text-[#9856F2]">Associated Emails</span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-700 text-sm sm:text-base mb-10">
          Need contact details for an entire company? Exellius’ bulk domain search extracts all available emails
          linked to a domain—ideal for lead generation and recruitment.
        </p>

        {/* Use Cases */}
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Use Cases:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {useCases.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl shadow-sm text-center"
              style={{ backgroundColor: item.bg }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={40}
                height={40}
                className="mx-auto mb-3"
              />
              <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <h3 className="text-lg font-semibold text-gray-800 mb-6">How to Perform Bulk Domain Search:</h3>
       <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 mb-10 items-center">
  {steps.map((item, i) => (
    <>
      {/* Step Card */}
      <div
        key={`step-${i}`}
        className="p-6 rounded-xl text-left shadow-sm relative"
        style={{ backgroundColor: item.bg }}
      >
        <div className="text-6xl text-[#F1E9FF] font-bold text-right">
          {item.step}
        </div>
        <p className="mt-12 text-sm text-gray-700 font-medium">
          {item.text}
        </p>
      </div>

      {/* Chevron Icon (Not after the last step) */}
      {i < steps.length - 1 && (
        <div key={`chevron-${i}`} className="hidden sm:flex justify-center">
          <ChevronsRight className="text-[#9856F2]" size={28} strokeWidth={2} />
        </div>
      )}
    </>
  ))}
</div>

        <a
  href="https://app.exellius.com/signup"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block"
>
  <Button className="bg-[#9856F2] text-white hover:bg-[#7836c9] text-sm sm:text-base">
    Search Now
  </Button>
</a>

      </div>
    </section>
  )
}
