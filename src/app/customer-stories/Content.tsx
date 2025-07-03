"use client"

import { Button } from "@/components/ui/button"
import { Quote } from "lucide-react"
import Image from "next/image"

export default function CustomerSuccess() {
  return (
    <section className="bg-[#fdfaff] py-24 px-6 pt-40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            How Leading Teams Accelerate Growth with <span className="text-[#9856F2]">Exellius</span>
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Discover how 1,200+ companies leverage our accurate B2B data to power pipelines
          </p>
        </div>

        {/* Featured Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {/* Case 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-[#eee]">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/client-logo1.png" alt="Client Logo" width={40} height={40} />
              <h3 className="font-bold text-xl text-gray-900">SaaS CRM Provider</h3>
            </div>
            <p className="text-sm mb-2"><strong>Industry:</strong> SaaS (CRM Software)</p>
            <p className="text-sm mb-2"><strong>Challenge:</strong> Needed high-intent leads with 90%+ email accuracy</p>
            <p className="text-sm mb-2"><strong>Solution:</strong> Custom technographic filters + Salesforce API sync</p>
            <p className="text-sm mb-4"><strong>Results:</strong></p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>✔ 42% increase in sales-qualified leads</li>
              <li>✔ 28% higher email open rates</li>
            </ul>
            <Button variant="link" className="mt-4 text-[#9856F2] p-0">Read Full Story →</Button>
          </div>

          {/* Case 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-[#eee]">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/client-logo2.png" alt="Client Logo" width={40} height={40} />
              <h3 className="font-bold text-xl text-gray-900">Global Recruitment Firm</h3>
            </div>
            <p className="text-sm mb-2"><strong>Industry:</strong> Global Recruitment</p>
            <p className="text-sm mb-2"><strong>Challenge:</strong> Expansion with verified contact data</p>
            <p className="text-sm mb-2"><strong>Solution:</strong> Country-based lists + weekly data refreshes</p>
            <p className="text-sm mb-4"><strong>Results:</strong></p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>✔ 3x faster market entry</li>
              <li>✔ 67% reduction in bounce rates</li>
            </ul>
            <Button variant="link" className="mt-4 text-[#9856F2] p-0">Read Full Story →</Button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900">What Our Customers Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl p-6 shadow border border-[#eee] relative">
            <Quote className="absolute top-4 right-4 text-[#9856F2] w-6 h-6" />
            <p className="text-gray-800 text-md italic">
              “Exellius’ data cut our prospecting time in half while doubling meeting bookings. Their company insights help us personalize at scale.”
            </p>
            <div className="mt-4 flex items-center gap-3">
              <Image src="/person1.png" alt="Customer" width={40} height={40} className="rounded-full" />
              <div>
                <p className="text-sm font-semibold">[Name], VP Sales</p>
                <Image src="/logo1.png" alt="Company Logo" width={60} height={20} />
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl p-6 shadow border border-[#eee] relative">
            <Quote className="absolute top-4 right-4 text-[#9856F2] w-6 h-6" />
            <p className="text-gray-800 text-md italic">
              “The only provider that consistently delivers accurate emails for hard-to-reach executives. Game-changer for our ABM strategy.”
            </p>
            <div className="mt-4 flex items-center gap-3">
              <Image src="/person2.png" alt="Customer" width={40} height={40} className="rounded-full" />
              <div>
                <p className="text-sm font-semibold">[Name], Demand Gen Lead</p>
                <Image src="/logo2.png" alt="Company Logo" width={60} height={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
