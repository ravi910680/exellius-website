"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function DomainEmailFeature() {
  return (
    <section className="py-20 bg-white px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Image (show first on mobile) */}
        <div className="w-full lg:w-1/2 relative order-first lg:order-first">
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/images/img-22.png" // Replace with your actual image path
              alt="Domain Search UI"
              width={640}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Side - Text (show second on mobile) */}
        <div className="w-full lg:w-1/2 order-last lg:order-last">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Turn Incomplete Data into Your{" "}
            <span className="text-[#9856F2]">Competitive</span> Edge
          </h2>

          <div className="w-20 h-1 bg-[#9856F2] mb-6" />

          <p className="text-gray-800 mb-6 text-base leading-relaxed">
            Inaccurate or outdated prospect data costs businesses 20% of revenue.
            Exellius solves this with industry-leading <strong>data enrichment tools</strong> that:
          </p>

          <ul className="space-y-4 text-sm sm:text-base">
            {[
              "Fill missing firmographics (job titles, company size, tech stack)",
              "Verify emails/phones in real-time (Reduce bounce rates by 90%)",
              "Enrich CRM records automatically (Works with Salesforce, HubSpot & more)",
              "Scale with API-based enrichment (Process millions of records effortlessly)",
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-[#9856F2] w-5 h-5 mt-1" />
                <span className="text-gray-800">{point}</span>
              </li>
            ))}
          </ul>

         
        </div>
      </div>
    </section>
  )
}
