"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How often is your database updated?",
    answer:
      "Our B2B database refreshes automatically every 48 hours to ensure you have access to the latest and most accurate data.",
  },
  {
    question: "What industries do you cover in your data?",
    answer:
      "We provide extensive coverage, including 94% of S&P 500 companies and 82% of tech startups worldwide, supporting diverse industries across Alaska and beyond.",
  },
  {
    question: "Can I export my lead lists?",
    answer:
      "Yes, every subscription plan allows you to export your lead lists in CSV format, complete with detailed field data for easy integration.",
  },
  {
    question: "How comprehensive is your Alaska-specific data?",
    answer:
      "We maintain a robust dataset tailored to Alaska’s business landscape, including local companies, startups, and key industry sectors.",
  },
  {
    question: "Can I search for direct phone numbers and emails for Alaska businesses?",
    answer:
      "Absolutely! Our tools allow targeted searches for verified direct phone numbers and professional email addresses within Alaska businesses.",
  },
  {
    question: "What formats are available for data export?",
    answer:
      "Leads can be exported in multiple formats, including CSV, Excel, and API integration for seamless import into your CRM or marketing platform.",
  },
  {
    question: "Is your data compliant with privacy regulations?",
    answer:
      "Yes, we strictly follow all relevant data protection laws such as GDPR and CAN-SPAM, ensuring your outreach remains compliant.",
  },
  {
    question: "Do you offer bulk data cleaning and verification services?",
    answer:
      "Yes, we provide bulk email and phone number verification services to help keep your marketing lists clean and effective.",
  },
  {
    question: "Can I customize my lead lists based on Alaska-specific filters?",
    answer:
      "Definitely! Filter leads by location, industry, company size, job title, and other criteria specific to Alaska to target your ideal audience.",
  },
  {
    question: "How do you ensure the accuracy of the phone numbers and emails?",
    answer:
      "We use a combination of automated AI verification, real-time validation, and manual checks to maintain high data accuracy.",
  },
]

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggle = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i)
  }

  return (
    <section className="bg-[#FFF5FD] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          Frequently Asked Questions
        </h2>
        <div className="h-1 w-16 bg-[#9856F2] mx-auto mb-10" />
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = activeIndex === i
          return (
            <div
              key={i}
              className={`rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "bg-white border-b-2 border-[#9856F2] shadow-md" : "bg-[#FAF6FF]"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full text-left flex items-center justify-between px-6 py-5 font-semibold text-lg sm:text-xl text-gray-900 focus:outline-none"
              >
                <span className={isOpen ? "text-[#9856F2]" : ""}>{faq.question}</span>
                {isOpen ? (
                  <ChevronUp className="text-[#9856F2] w-5 h-5" />
                ) : (
                  <ChevronDown className="text-[#9856F2] w-5 h-5" />
                )}
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[300px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
                }`}
              >
                <p className="text-sm sm:text-base text-gray-700">{faq.answer}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
