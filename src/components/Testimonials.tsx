"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

const testimonials = [
  {
    name: "Human",
    avatar: "/avatar.jpg",
    text: `Exellius has cut our prospecting time in half! The verified email addresses and phone number finder tools help us connect with decision-makers faster.`,
  },
  {
    name: "John D.",
    avatar: "/avatar.jpg",
    text: `We’ve seen a 40% improvement in response rates since switching to Exellius. The verified data is a game changer.`,
  },
  {
    name: "Sofia R.",
    avatar: "/avatar.jpg",
    text: `Our SDR team loves the accuracy and the speed of the platform. It’s become a critical part of our sales process.`,
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div className="text-center md:text-left order-1 md:order-none">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Our Customers Say<br />
            About <span className="text-[#9856F2]">Exellius</span>
          </h2>
          <p className="mt-4 text-lg italic text-gray-700 font-medium">
            Trusted by Sales Teams, Marketers &amp; Data Professionals Worldwide
          </p>
          <div className="w-36 h-1 bg-[#9856F2] rounded mt-4 mb-6 mx-auto md:mx-0" />
          <p className="mt-6 text-md text-gray-900 leading-relaxed">
            Exellius has helped thousands of businesses find verified email addresses, validate contact details, and enrich lead data for better outreach. Here’s what our customers have to say:
          </p>
        </div>

        {/* Testimonial Card with Animation */}
        <div className="relative bg-[#f0f4ff] p-8 sm:p-10 md:p-20 rounded-xl shadow-sm text-gray-800 order-2 md:order-none w-full min-h-[250px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
             key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <p className="italic text-md leading-relaxed mb-6">
                &ldquo;{testimonials[index].text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src={testimonials[index].avatar}
                  alt={testimonials[index].name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <p className="font-semibold">{testimonials[index].name}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <div className="absolute bottom-4 right-4 flex gap-3 z-10">
            <button
              onClick={prev}
              className="w-8 h-8 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200"
            >
              <ArrowLeft className="w-4 h-4 mx-auto" />
            </button>
            <button
              onClick={next}
              className="w-8 h-8 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200"
            >
              <ArrowRight className="w-4 h-4 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
