"use client"

import { CheckCircle } from "lucide-react"

const timelineSteps = [
  {
    id: "1",
    number: "01",
    title: "",
    side: "left",
    points: [],
    buttons: [
      { label: "Sign up free", variant: "primary", href: "https://app.exellius.com/signup" },
      { label: "No credit card", variant: "secondary" },
    ],
    bg: "bg-[#fbf8fe]",
  },
  {
    id: "2",
    number: "02",
    title: "Upload your first free 25 contacts",
    side: "right",
    points: [],
    buttons: [],
    bg: "bg-[#fff2ec]",
  },
  {
    id: "3",
    number: "03",
    title: "See the Exellius difference",
    side: "left",
    points: [],
    buttons: [],
    bg: "bg-[#edf4ff]",
  },
]

export default function GetStartedTimeline() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Get Started in <span className="text-[#6c3cbe]">3 Minutes</span>
        </h2>
        <div className="h-1 w-20 bg-[#6c3cbe] mt-4 mb-16 mx-auto rounded" />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-l-2 border-[#6c3cbe] z-0" />

          <div className="flex flex-col gap-20 relative z-10">
            {timelineSteps.map((step) => (
              <div
                key={step.id}
                className={`relative flex items-center justify-between gap-6 ${
                  step.side === "left" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div
                  className={`w-full max-w-sm rounded-xl shadow-sm border border-gray-200 p-6 text-left ${step.bg}`}
                >
                  <h4 className="font-semibold text-base text-gray-900">{step.title}</h4>

                  {/* Optional bullet points */}
                  {step.points.length > 0 && (
                    <ul className="space-y-2 text-sm text-gray-900">
                      {step.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 text-[#6c3cbe]" />
                          <span className="font-medium">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Optional buttons */}
                  {step.buttons.length > 0 && (
                    <div className="flex flex-col gap-2 mt-4">
                      {step.buttons.map((btn, i) =>
                        btn.href ? (
                          <a
                            key={i}
                            href={btn.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`rounded-md px-4 py-2 text-sm font-medium text-center ${
                              btn.variant === "primary"
                                ? "bg-[#6c3cbe] text-white hover:bg-[#582fa0]"
                                : "border border-[#6c3cbe] text-[#6c3cbe] hover:bg-[#e6e6f7]"
                            } transition`}
                          >
                            {btn.label}
                          </a>
                        ) : (
                          <button
                            key={i}
                            className={`rounded-md px-4 py-2 text-sm font-medium text-center ${
                              btn.variant === "primary"
                                ? "bg-[#6c3cbe] text-white hover:bg-[#582fa0]"
                                : "border border-[#6c3cbe] text-[#6c3cbe] hover:bg-[#e6e6f7]"
                            } transition cursor-default`}
                            disabled
                            type="button"
                          >
                            {btn.label}
                          </button>
                        )
                      )}
                    </div>
                  )}
                </div>

                {/* Centered Step Number */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20 w-24 h-24 flex items-center justify-center p-1 bg-white ">
                  <img
                    src={`/icons/${step.id}.png`}
                    alt={`Step ${step.id}`}
                    className="w-full h-full object-contain block"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-16 text-center">
          <a
            href="https://app.exellius.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-[#6c3cbe] hover:bg-[#582fa0] text-white px-6 py-3 rounded-lg text-sm font-semibold transition">
              Start Enriching Data Now
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
