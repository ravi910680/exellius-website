"use client"

import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import FinancialDataFeature1 from "./FinancialDataFeature1"
import GeospatialDataFeature from "./GeospatialDataFeature"
import BusinessDataFeature from "./BusinessDataFeature"


export default function DataPage() {
  return (
    <section className="bg-[#FAF6FF] py-24 px-6 pt-40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Exellius Data <br />
            <span className="text-[#9856F2]">Precision, Protection, and Performance</span>
          </h1>
          <p className="text-base text-gray-700 max-w-2xl mx-auto">
            At Exellius, we don’t just provide data, we deliver reliable, actionable intelligence designed to fuel your B2B growth. Our unique database is built on data accuracy, rigorous validation, and data protection principles, ensuring you connect with the right prospects every time.
          </p>
        </div>

        {/* Feature Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">The Exellius Difference: Trusted Data, Proven Results</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-[#9856F2]">{i + 1}.</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700 text-md whitespace-pre-line">{item.description}</p>

                  {item.bullets && (
                    <ul className="mt-4 space-y-2">
                      {item.bullets.map((point, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-800">
                          <CheckCircle className="w-4 h-4 text-[#9856F2] mt-1" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        

        {/* Data Types Section */}
        <div className="mt-24">
          

          <FinancialDataFeature1 />

          <div className="mt-24 text-center">
         
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-800">
              <CheckCircle className="text-[#9856F2] w-5 h-5" /> Reliable data you can act on instantly
            </div>
            <div className="flex items-center gap-2 text-gray-800">
              <CheckCircle className="text-[#9856F2] w-5 h-5" /> Unique database with global coverage
            </div>
            <div className="flex items-center gap-2 text-gray-800">
              <CheckCircle className="text-[#9856F2] w-5 h-5" /> Data protection built into every layer
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
  <a href="https://app.exellius.com/signup" target="_blank" rel="noopener noreferrer">
    <Button size="lg" className="bg-[#9856F2] hover:bg-[#6c3cbe] text-white text-md">
      Explore Our Solutions
    </Button>
  </a>
  <a href="/contact-us">
    <Button variant="outline" size="lg" className="text-[#9856F2] border-[#9856F2]">
      Talk to Our Team
    </Button>
  </a>
</div>

        </div>


          <GeospatialDataFeature />
          <BusinessDataFeature />
         
          
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    title: "Unparalleled Data Accuracy",
    description:
      "Our Exellius database is powered by advanced algorithms and multi-layered verification processes, guaranteeing email data accuracy and up-to-date contact information. Whether you need accurate email lookup or company insights, we eliminate guesswork so you can focus on conversions."
  },
  {
    title: "A Unique Database Built for Scale",
    description:
      "Unlike generic providers, Exellius data is curated from diverse, compliant data sources, including:",
    bullets: [
      "Publicly available business directories",
      "Verified first-party submissions",
      "Real-time API integrations"
    ]
  },
  {
    title: "Reliable Email Finding Data",
    description:
      "Speed matters, but precision matters more. Our email finding data tools verify deliverability upfront, reducing bounce rates and maximizing campaign ROI. With Exellius email data, you get:",
    bullets: [
      "95%+ email data accuracy",
      "Direct lines to executives and department heads",
      "Regular refreshes to maintain data accuracy"
    ]
  },
  {
    title: "Commitment to Data Protection",
    description:
      "We adhere to global privacy regulations (GDPR, CCPA) and employ enterprise-grade encryption to safeguard our data—and yours. Trust and compliance are non-negotiables in every Exellius data solution."
  }
]
