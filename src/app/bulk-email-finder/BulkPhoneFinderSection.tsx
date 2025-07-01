"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

const advantages = [
  {
    title: "Accurate Data",
    description: "Verified, up-to-date phone numbers",
    image: "/icons/bulk-8.png",
    bg: "#F8F2FF",
  },
  {
    title: "Bulk Processing",
    description: "Get a list of phone numbers in minutes",
    image: "/icons/bulk-9.png",
    bg: "#EDF2FB",
  },
  {
    title: "Multi-Source Validation",
    description: "Cross-checked for reliability",
    image: "/icons/bulk-10.png",
    bg: "#F8F2FF",
  },
]

const steps = [
  {
    step: "01",
    text: "Upload company names or domains",
    bg: "#F9F5FF",
  },
  {
    step: "02",
    text: "Exellius fetches associated phone numbers",
    bg: "#FEF6F5",
  },
  {
    step: "03",
    text: "Download the contact list for your CRM or dialer",
    bg: "#EDF2FB",
  },
]

export default function BulkPhoneFinderSection() {
  return (
    <section className="w-full bg-[#fdf1db] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          <span className="text-[#9856F2]">04.</span>{" "}
          <span className="text-gray-900">Bulk Phone Finder:</span>{" "}
          Get Valid <span className="text-[#9856F2]">Contact Numbers</span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-700 text-sm sm:text-base mb-10">
          Phone outreach remains a powerful sales channel. Exellius’ bulk phone finder helps you obtain direct and
          mobile numbers linked to professionals, enhancing your cold-calling strategy.
        </p>

        {/* Advantages */}
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Advantages:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {advantages.map((item, i) => (
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
          Get Contacts
        </Button>
      </div>
    </section>
  )
}
