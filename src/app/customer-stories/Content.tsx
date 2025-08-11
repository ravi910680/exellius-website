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

        {/* Featured Success Stories */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold text-gray-900">Featured Success Stories</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {/* Case Study 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-[#eee]">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/test-1.jpg" alt="Client Logo" width={40} height={40} style={{borderRadius:"50%"}} />
              <h3 className="font-bold text-xl text-gray-900">SaaS CRM Provider</h3>
            </div>
            <p className="text-md mb-2"><strong>Industry:</strong> SaaS (CRM Software)</p>
            <p className="text-md mb-2"><strong>Challenge:</strong> Needed high-intent leads with 90%+ email accuracy</p>
            <p className="text-md mb-2"><strong>Exellius Solution:</strong></p>
            <ul className="list-disc list-inside text-md text-gray-700 mb-2">
              <li>Custom technographic filters to target IT decision-makers</li>
              <li>API integration with their Salesforce instance</li>
            </ul>
            <p className="text-md font-semibold mb-2">Results:</p>
            <ul className="list-disc list-inside text-md text-gray-700 space-y-1">
              <li>✔ 42% increase in sales-qualified leads</li>
              <li>✔ 28% higher email open rates</li>
            </ul>
            <Button variant="link" className="mt-4 text-[#9856F2] p-0">Read Full Story →</Button>
          </div>

          {/* Case Study 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-[#eee]">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/test-2.jpg" alt="Client Logo" width={40} height={40} style={{borderRadius:"50%"}} />
              <h3 className="font-bold text-xl text-gray-900">Global Recruitment Firm</h3>
            </div>
            <p className="text-md mb-2"><strong>Industry:</strong> Global Recruitment</p>
            <p className="text-md mb-2"><strong>Challenge:</strong> Expanding into new markets with verified contact data</p>
            <p className="text-md mb-2"><strong>Exellius Solution:</strong></p>
            <ul className="list-disc list-inside text-md text-gray-700 mb-2">
              <li>Country-specific lead lists (EMEA & APAC coverage)</li>
              <li>Weekly data refreshes to maintain accuracy</li>
            </ul>
            <p className="text-md font-semibold mb-2">Results:</p>
            <ul className="list-disc list-inside text-md text-gray-700 space-y-1">
              <li>✔ 3x faster market entry</li>
              <li>✔ 67% reduction in bounce rates</li>
            </ul>
            <Button variant="link" className="mt-4 text-[#9856F2] p-0">Read Full Story →</Button>
          </div>

          {/* New Case Study 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-[#eee]">
            <div className="flex items-center gap-3 mb-4">
               <Image src="/avatar/avatar2.png" alt="Client Logo" width={40} height={40} style={{borderRadius:"50%"}} />
              <h3 className="font-bold text-xl text-gray-900">B2B Market Research Firm</h3>
            </div>
            <p className="text-md mb-2"><strong>Industry:</strong> Business Intelligence</p>
            <p className="text-md mb-2"><strong>Challenge:</strong> Sourcing 10,000+ executive contacts weekly</p>
            <p className="text-md mb-2"><strong>Exellius Solution:</strong></p>
            <ul className="list-disc list-inside text-md text-gray-700 mb-2">
              <li>C-level contact database with direct dials</li>
              <li>Company hierarchy mapping</li>
              <li>Automated data enrichment</li>
            </ul>
            <p className="text-md font-semibold mb-2">Results:</p>
            <ul className="list-disc list-inside text-md text-gray-700 space-y-1">
              <li>✔ 200,000+ decision-maker contacts yearly</li>
              <li>✔ 82% interview completion rate</li>
              <li>✔ 5x faster project turnaround</li>
            </ul>
            <Button variant="link" className="mt-4 text-[#9856F2] p-0">Read Full Story →</Button>
          </div>

          {/* New Case Study 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-[#eee]">
            <div className="flex items-center gap-3 mb-4">
               <Image src="/avatar/avatar3.png" alt="Client Logo" width={40} height={40} style={{borderRadius:"50%"}} />
              <h3 className="font-bold text-xl text-gray-900">Fintech Payments Platform</h3>
            </div>
            <p className="text-md mb-2"><strong>Industry:</strong> Financial Technology</p>
            <p className="text-md mb-2"><strong>Challenge:</strong> Needed to identify merchants processing $10M+ annually for high-ticket sales</p>
            <p className="text-md mb-2"><strong>Exellius Solution:</strong></p>
            <ul className="list-disc list-inside text-md text-gray-700 mb-2">
              <li>Custom merchant scoring algorithm combining:</li>
              <ul className="list-disc list-inside ml-6">
                <li>Transaction volume signals</li>
                <li>POS system technographics</li>
                <li>E-commerce platform footprints</li>
              </ul>
              <li>Integrated with sales team&apos;s Gong.io for call intelligence</li>
            </ul>
            <p className="text-md font-semibold mb-2">Results:</p>
            <ul className="list-disc list-inside text-md text-gray-700 space-y-1">
              <li>✔ $2.3M in new ARR from first 90 days</li>
              <li>✔ 37% shorter sales cycle for pre-qualified leads</li>
              <li>✔ 92% data accuracy on merchant financial profiles</li>
            </ul>
            <Button variant="link" className="mt-4 text-[#9856F2] p-0">Read Full Story →</Button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900">What Our Customers Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              quote: "Exellius’ data cut our prospecting time in half while doubling meeting bookings. Their company insights help us personalize at scale.",
              name: " VP Sales",
              logo: "/logo1.png",
              avatar: "/person1.png",
            },
            {
              quote: "The only provider that consistently delivers accurate emails for hard-to-reach executives. Game-changer for our ABM strategy.",
              name: " Demand Gen Lead",
              logo: "/logo2.png",
              avatar: "/person2.png",
            },
            {
              quote: "With Exellius, we’ve reduced lead research time by 60% and improved our outreach response rates by 35%. A game-changer for our sales team!",
              name: "FinTech Innovations Provider",
            },
            {
              quote: "Exellius delivers hyper-relevant prospect data that helps us tailor our messaging effectively. Our conversion rates have never been higher.",
              name: "Leading B2B Marketing Group",
            },
            {
              quote: "The accuracy and depth of Exellius’ insights have transformed our outbound strategy. We’re closing deals faster with less effort.",
              name: "Enterprise Software Inc.",
            },
            {
              quote: "Finding direct emails for C-level execs used to take hours. With Exellius, we get accurate contacts in seconds—game-changing for our outbound strategy.",
              name: "Enterprise SaaS Provider",
            },
            {
              quote: "Processing 50,000 leads used to take weeks. With Exellius’ Bulk Tool, we enriched and segmented our entire database in 48 hours.",
              name: "Marketing Automation Platform",
            },
            {
              quote: "The accuracy of Exellius’ mobile numbers is unmatched. We cut through gatekeepers and reach decision-makers faster.",
              name: "Business Consulting Firm",
            },
            {
              quote: "No more wasted emails! Exellius’ real-time verification ensures our campaigns hit real inboxes, boosting deliverability and ROI.",
              name: "Lead Generation Company",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow border border-[#eee] relative"
            >
              <Quote className="absolute top-4 right-4 text-[#9856F2] w-6 h-6" />
              <p className="text-gray-800 text-lg italic">“{t.quote}”</p>
              <div className="mt-4 flex items-center gap-3">
                <div>
                  <p className="text-md font-semibold">{t.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
