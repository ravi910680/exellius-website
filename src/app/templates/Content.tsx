"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Input } from "@/components/ui/input"

const templates = [
  {
    id: 1,
    title: "Cold Email Prospecting Pack",
    useCase: "Best for: First-touch outreach using verified Exellius contacts",
    includes: [
      "5 industry-specific email variations",
      "3 high-performing subject line formulas",
      "Automated follow-up sequence (Days 3, 7, 14)",
      "Built-in personalization tags (Company/Role/Industry)"
    ],
    subjectLine: {
      example: "Quick question about {Company.Name}",
      stats: "(48% avg. open rate | 12% reply rate)"
    },
    cta: "Download Template"
  },
  {
    id: 2,
    title: "LinkedIn Outreach Kit",
    useCase: "Best for: Social selling with decision-makers",
    includes: [
      "Connection request templates by seniority level",
      "Engagement message sequences",
      "Content sharing scripts"
    ],
    cta: "Download Template"
  },
  {
    id: 3,
    title: "Sales Call Scripts",
    useCase: "Best for: Phone prospecting with confidence",
    includes: [
      "30-second pitch frameworks",
      "Objection handlers",
      "Call-back request scripts"
    ],
    cta: "Download Template"
  }
]

export default function OutreachTemplatesPage() {
  return (
    <section className="w-full bg-white py-24 px-6 pt-40">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">High-Converting Outreach Templates</h1>
          <p className="mt-4 text-base text-gray-700 max-w-2xl mx-auto">
            Professionally crafted, data-backed templates designed for Exellius users
          </p>
        </div>

        {/* Why It Works */}
        <div className="bg-[#F9F5FF] rounded-xl p-8 mb-16">
          <h2 className="text-xl font-semibold text-[#6c3cbe] mb-4">Why Our Templates Work</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Built using insights from 2M+ successful campaigns</li>
            <li>Pre-optimized for Exellius' 95% accurate email data</li>
            <li>CRM-ready formats (Salesforce, HubSpot, Outreach)</li>
            <li>Proven to increase reply rates by 35-60%</li>
          </ul>
        </div>

        {/* Featured Templates */}
        <div className="space-y-12">
          {templates.map((template) => (
            <div key={template.id} className="bg-[#FAFAFA] border border-gray-200 p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{template.title}</h3>
              <p className="text-sm text-gray-700 italic mb-4">{template.useCase}</p>

              <ul className="list-disc list-inside space-y-2 mb-4 text-sm text-gray-800">
                {template.includes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              {template.subjectLine && (
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-900">Sample Subject Line:</p>
                  <p className="text-sm text-[#6c3cbe]">{template.subjectLine.example}</p>
                  <p className="text-xs text-gray-500">{template.subjectLine.stats}</p>
                </div>
              )}

              <Button className="bg-[#9856F2] hover:bg-[#7836c9] text-white text-sm">{template.cta}</Button>
            </div>
          ))}
        </div>

        {/* How to Use */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Download your free templates</li>
            <li>Personalize with Exellius data fields</li>
            <li>Execute through your CRM or outreach tool</li>
          </ol>
          <p className="mt-2 text-sm text-[#6c3cbe] italic">
            *Pro Tip: Pair with Exellius Email Verification to ensure 95%+ deliverability*
          </p>
        </div>

        {/* Trusted Logos */}
        <div className="mt-20 text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Trusted by Growth Teams At</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Placeholder logos */}
            <Image src="/logo1.png" alt="Client Logo" width={100} height={40} />
            <Image src="/logo2.png" alt="Client Logo" width={100} height={40} />
            <Image src="/logo3.png" alt="Client Logo" width={100} height={40} />
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-lg font-semibold text-gray-800 mb-6 text-center">What Our Users Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F9F5FF] p-6 rounded-xl shadow-sm">
              <p className="text-sm text-gray-700 italic">
                "These templates helped our team book 20% more meetings instantly. The Exellius integration makes personalization effortless."
              </p>
              <p className="text-sm font-semibold mt-4 text-gray-900">– Jamie R., Sales Director</p>
            </div>
            <div className="bg-[#EDF2FB] p-6 rounded-xl shadow-sm">
              <p className="text-sm text-gray-700 italic">
                "Finally templates that account for real email behavior patterns. The industry-specific versions are gold."
              </p>
              <p className="text-sm font-semibold mt-4 text-gray-900">– Taylor M., Demand Gen Lead</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Get All Templates</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Input type="email" placeholder="Your email address" className="max-w-md" />
            <Button className="bg-[#6c3cbe] text-white hover:bg-[#51289e]">Send</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
