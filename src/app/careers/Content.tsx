"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function CareerPage() {
  return (
    <section className="bg-white text-gray-900 py-24 px-6 pt-40">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl font-bold mb-4">
            Build the Future of Data Intelligence at <span className="text-[#9856F2]">Exellius</span>
          </h1>
          <p className="text-lg text-gray-700">
            At Exellius, we’re not just a data company – we’re architects of smarter B2B connections. Join our team of
            innovators, problem-solvers, and data enthusiasts who are redefining how businesses discover and engage
            their most valuable prospects.
          </p>
        </div>

        {/* Three-Column Feature Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "\ud83d\ude80 Mission That Matters",
              desc:
                "Help build the world’s most accurate, ethical, and actionable B2B data platform used by thousands of companies globally."
            },
            {
              title: "\ud83c\udf0d Growth Without Limits",
              desc:
                "Competitive salaries + equity options\nRemote-first culture with flexible hours\nAnnual learning with courses and conferences"
            },
            {
              title: "\u2764\ufe0f People-First Culture",
              desc:
                "Weekly team knowledge shares\nBiannual company retreats\nMental health and wellness programs"
            }
          ].map((item, i) => (
            <div key={i} className="bg-[#FAF6FF] rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#9856F2]">{item.title}</h3>
              <p className="text-gray-700 whitespace-pre-line">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Hiring Process Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Our Hiring Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-gray-800">
            {["Initial Chat (30 min) – Let’s get to know each other",
              "Skills Assessment – Practical, role-specific task",
              "Team Interview – Meet your future colleagues",
              "Offer – Typically within 10 business days"].map((step, i) => (
              <div key={i} className="bg-[#F5F2FD] p-4 rounded-md">
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Perks Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Perks & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {["Health insurance (medical, dental, vision)",
              "Work Life Balance (Hybrid working)",
              "Parental leave (16 weeks primary / 8 weeks secondary)",
              "Paid time off (Casual and Sick Leaves)"].map((perk, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#9856F2] mt-1" />
                <p className="text-gray-800 font-medium">{perk}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Power the Data Revolution?</h3>
          <p className="text-gray-700 mb-6">
            Browse Open Roles or Learn About Our Culture
          </p>
         <div className="flex flex-wrap justify-center gap-4">
  <a href="mailto:hr@exellius.com" className="w-auto">
    <Button size="lg" className="bg-[#9856F2] text-white text-base hover:bg-[#6c3cbe]">
      Email Us
    </Button>
  </a>
  <div className="flex flex-col items-center">
   
    <p className="text-sm text-[#9856F2] mt-2">send email to hr@exellius.com</p>
  </div>
</div>

        </div>
      </div>
    </section>
  )
}
