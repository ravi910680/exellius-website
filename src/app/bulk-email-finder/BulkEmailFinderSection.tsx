"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

const benefits = [
  {
    title: "High Accuracy",
    description: "Advanced algorithms fetch valid corporate emails",
    image: "/icons/bulk-3.png",
    bg: "#F8F2FF",
  },
  {
    title: "Scalable",
    description: "Upload thousands of domains to find email addresses in bulk",
    image: "/icons/bulk-2.png",
    bg: "#EDF2FB",
  },
  {
    title: "Time-Saving",
    description: "Skip manual searches and get results in seconds",
    image: "/icons/bulk-1.png",
    bg: "#FDF1FF",
  },
]

const steps = [
  {
    step: "01",
    text: "Upload a list of domains",
    bg: "#F9F5FF",
  },
  {
    step: "02",
    text: "Exellius scans multiple sources to retrieve relevant emails",
    bg: "#FEF6F5",
  },
  {
    step: "03",
    text: "Download a verified list of email addresses in CSV format",
    bg: "#EDF2FB",
  },
]

export default function BulkEmailFinderSection() {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          <span className="text-[#9856F2]">01.</span>{" "}
          <span className="text-gray-900">Bulk Email Finder:</span>{" "}
          Get a List of <span className="text-[#9856F2]">Email Addresses</span>{" "}
          Instantly
        </h2>

        <p className="max-w-2xl mx-auto text-gray-700 text-sm sm:text-base mb-10">
          Finding professional email addresses manually is time-consuming. Exellius’ bulk email finder
          extracts accurate contact details from domains, LinkedIn profiles, and company pages—helping
          you build a list of prospects effortlessly.
        </p>

        {/* Key Benefits */}
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Key Benefits:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {benefits.map((item, i) => (
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
        <h3 className="text-lg font-semibold text-gray-800 mb-6">How It Works:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {steps.map((item, i) => (
            <div
              key={i}
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
          ))}
        </div>

        <Button className="bg-[#9856F2] text-white hover:bg-[#7836c9] text-sm sm:text-base">
          Find Now
        </Button>
      </div>
    </section>
  )
}
