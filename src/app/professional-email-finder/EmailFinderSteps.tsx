"use client"

import { User, Globe, MailCheck } from "lucide-react"

export default function EmailFinderSteps() {
  const steps = [
    {
      icon: <User className="w-8 h-8 text-[#9856F2]" />,
      title: "Enter the Full Name",
      desc: "Provide the professional’s first and last name.",
    },
    {
      icon: <Globe className="w-8 h-8 text-[#9856F2]" />,
      title: "Add the Company Domain",
      desc: "Our tool auto-suggests domains for accuracy.",
    },
    {
      icon: <MailCheck className="w-8 h-8 text-[#9856F2]" />,
      title: "Get Verified Emails",
      desc: "Receive validated email addresses instantly.",
    },
  ]

  return (
    <section className="bg-[#FFF7FF] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          How Does the <span className="text-[#9856F2]">Email Finder</span> Work?
        </h2>
        <div className="h-1 w-16 bg-[#9856F2] mx-auto mb-8" />

        {/* Subtext */}
        <p className="text-gray-700 mb-12 text-base max-w-2xl mx-auto">
          Exellius’ <strong>email extractor</strong> simplifies prospecting with a straightforward process:
        </p>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border border-gray-200 px-6 py-8 text-left hover:shadow-md transition"
            >
              {/* Icon and Index */}
              <div className="flex items-center justify-between mb-4">
                {step.icon}
                <span className="text-2xl font-bold text-[#E0C4FF]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title & Description */}
              <h4 className="text-[#9856F2] font-semibold text-lg mb-2">{step.title}</h4>
              <p className="text-gray-700 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
