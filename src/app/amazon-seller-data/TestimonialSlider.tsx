"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    industry: "Consumer Electronics Manufacturer",
    quote:
      "Reduced our Amazon distribution onboarding time by 68% using Exellius' verified seller network. Found 9 perfect partners across North America and Japan.",
  },
  {
    industry: "Home Goods Top 200 Seller",
    quote:
      "Liquidated $2.3M in excess inventory through Exellius-matched buyers in 90 days - their category-specific filters made all the difference.",
  },
  {
    industry: "Global 3PL Provider",
    quote:
      "Now source 72% of our marketplace clients through Exellius. The performance analytics help us identify high-growth sellers before competitors.",
  },
  {
    industry: "Beauty Brand Accelerator",
    quote:
      "Secured 14 strategic Amazon sellers for our brand launch through Exellius' AI matching. Achieved 40% higher sell-through than projected.",
  },
  {
    industry: "Private Equity Firm",
    quote:
      "Identified 3 acquisition targets with 90%+ accurate revenue verification - something no other database could provide at this scale.",
  },
]

export default function TestimonialSlider() {
  const groupSize = 4
  const [startIndex, setStartIndex] = useState(0)

  const getLoopedTestimonials = () => {
    const looped = []
    for (let i = 0; i < groupSize; i++) {
      const index = (startIndex + i) % testimonials.length
      looped.push(testimonials[index])
    }
    return looped
  }

  const next = () => {
    setStartIndex((prev) => (prev + groupSize) % testimonials.length)
  }

  const prev = () => {
    setStartIndex((prev) =>
      (prev - groupSize + testimonials.length) % testimonials.length
    )
  }

  const visibleTestimonials = getLoopedTestimonials()

  return (
    <section className="bg-[#fffdfb] px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-10">
          Proven Results Across Industries
        </h2>

        <div className="relative">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-300">
            {visibleTestimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-left"
              >
                <p className="text-sm text-gray-700 mb-3 italic">"{testimonial.quote}"</p>
                <p className="text-sm font-semibold text-[#6c3cbe]">
                  — {testimonial.industry}
                </p>
              </div>
            ))}
          </div>

          {/* Arrow Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0">
            <button
              onClick={prev}
              className="p-2 bg-white border rounded-full shadow hover:bg-gray-100"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0">
            <button
              onClick={next}
              className="p-2 bg-white border rounded-full shadow hover:bg-gray-100"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
