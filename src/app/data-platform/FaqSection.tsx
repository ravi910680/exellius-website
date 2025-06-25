"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How accurate is your B2B email data?",
    answer:
      "Our email data undergoes multi-layer verification — including SMTP validation, activity tracking, and human QA — to ensure over 95% accuracy and minimal bounce rates.",
  },
  {
    question: "Can I enrich existing records in bulk?",
    answer:
      "Yes. You can upload CSV files or use our API to enrich thousands of records at once — adding verified emails, phone numbers, job titles, firmographics, and more.",
  },
  {
    question: "Is your data compliant with global privacy laws?",
    answer:
      "Absolutely. We follow GDPR, CCPA, and CAN-SPAM guidelines. You can apply filters to exclude EU records or enable opt-out suppression in your workflows.",
  },
  {
    question: "How frequently is your database updated?",
    answer:
      "Our data is updated continuously — with millions of contact and company records refreshed weekly via automated systems and manual validation.",
  },
  {
    question: "Can I integrate your data with my CRM?",
    answer:
      "Yes. We offer native integrations with HubSpot, Salesforce, Pipedrive, and more — plus flexible webhooks and APIs to push enriched data into any system.",
  },
  {
    question: "Do you support account-based targeting?",
    answer:
      "Yes, our platform supports ABM. You can enrich and prioritize leads based on firmographics, tech stack, funding, and more — all tied to account-level intelligence.",
  },
  {
    question: "Is a free trial available?",
    answer:
      "We offer a free trial with limited credits, so you can test the platform’s enrichment accuracy before committing to a plan.",
  },
  {
    question: "How quickly can I start using the platform?",
    answer:
      "You can get started instantly after signing up. No installation or onboarding delays — just upload your data or search using filters to begin enrichment.",
  },
  {
    question: "Do you offer an API?",
    answer:
      "Yes. Our REST API supports enrichment, validation, and search functions — ideal for developers building custom integrations or workflows.",
  },
  {
    question: "Need help choosing a plan?",
    answer:
      "Reach out to our support team via chat or email. We'll help tailor a plan that fits your volume, tech stack, and GTM needs.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section className="bg-[#fcf4fc] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          FAQs About Our <span className="text-[#6c3cbe]">B2B Email Data</span> Platform
        </h2>
        <div className="h-1 w-20 bg-[#6c3cbe] mt-4 mb-12 mx-auto rounded" />

        <div className="space-y-4 text-left">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl border border-[#eee] px-6 py-4 transition-all shadow-sm ${
                openIndex === i ? "ring-2 ring-[#6c3cbe]" : ""
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between font-semibold text-gray-900 text-left"
              >
                {faq.question}
                {openIndex === i ? (
                  <ChevronUp className="text-[#6c3cbe]" />
                ) : (
                  <ChevronDown className="text-[#6c3cbe]" />
                )}
              </button>
              {openIndex === i && faq.answer && (
                <div className="mt-4 text-sm text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
