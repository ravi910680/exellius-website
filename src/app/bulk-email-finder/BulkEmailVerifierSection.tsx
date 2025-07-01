"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

const benefits = [
  {
    image: "/icons/bulk-4.png",
    title: "Reduce Bounce Rates",
    description: "Remove invalid, disposable, or role-based emails",
    bg: "#F8F2FF",
  },
  {
    image: "/icons/bulk-5.png",
    title: "Improve Campaign Performance",
    description: "Only target active, deliverable addresses",
    bg: "#EDF2FB",
  },
  {
    image: "/icons/bulk-6.png",
    title: "Save Costs",
    description: "Avoid wasted outreach on non-existent contacts",
    bg: "#FDF1FF",
  },
]

const steps = [
  {
    step: "01",
    text: "Upload your list of email addresses",
    bg: "#F8F2FF",
  },
  {
    step: "02",
    text: "Exellius runs real-time checks (SMTP, DNS, spam trap detection)",
    bg: "#FEF6F5",
  },
  {
    step: "03",
    text: "Receive a clean, verified list with accuracy scores",
    bg: "#EDF2FB",
  },
]

export default function BulkEmailVerifierSection() {
  return (
    <section className="w-full bg-[#fdf1db] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          <span className="text-[#9856F2]">02.</span>{" "}
          <span className="text-gray-900">Bulk Email Verifier:</span>{" "}
          Ensure High <span className="text-[#9856F2]">Deliverability</span>
        </h2>

        <p className="max-w-3xl mx-auto text-gray-700 text-sm sm:text-base mb-10">
          Sending emails to invalid addresses hurts sender reputation. Exellius’ bulk email verifier
          checks syntax, domain validity, and mailbox activity to filter out risky emails.
        </p>

        {/* Key Benefits */}
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Why Verify Emails in Bulk?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl shadow-sm text-center bordrer border-[#eee]"
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

        {/* How it works */}
        <h3 className="text-lg font-semibold text-gray-800 mb-6">How to Perform Bulk Domain Search:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="p-6 rounded-xl text-left shadow-sm relative border border-[#eee]"
              style={{ backgroundColor: step.bg }}
            >
              <div className="text-6xl text-[#F1E9FF] font-bold text-right">{step.step}</div>
              <p className="mt-12 text-sm text-gray-700 font-medium">{step.text}</p>
            </div>
          ))}
        </div>

        <Button className="bg-[#9856F2] text-white hover:bg-[#7836c9] text-sm sm:text-base">
          Verify Now
        </Button>
      </div>
    </section>
  )
}
