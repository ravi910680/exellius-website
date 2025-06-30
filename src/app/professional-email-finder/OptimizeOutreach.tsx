"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function OptimizeOutreach() {
  return (
    <section className="bg-[#FCF7FF] px-6 py-20 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/email-search-1.png" // Replace with your actual image path
            alt="Optimize outreach UI"
            width={600}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Beyond <span className="text-[#9856F2]">Email Search</span> – Optimize Your Outreach
          </h2>
          <div className="w-16 h-1 bg-[#9856F2] mb-6" />

          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Finding emails is just the first step. Exellius offers additional tools to maximize your success:
          </p>

          <ul className="space-y-4 text-base">
            {[
              {
                label: "Email Verification",
                description: "Ensure every address is valid before sending.",
              },
              {
                label: "Cold Email Campaigns",
                description: "Personalize and automate outreach for better responses.",
              },
              {
                label: "CRM Integrations",
                description: "Sync contacts effortlessly with your existing tools.",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#9856F2] mt-1" />
                <span>
                  <strong>{item.label}</strong> — {item.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
