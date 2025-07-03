"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {  Phone, BookOpen } from "lucide-react"
import Link from "next/link"

export default function HelpCenter() {
  return (
    <section className="w-full bg-white py-24 px-6 pt-40">
      <div className="max-w-6xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Exellius Help Center
          </h1>
          <p className="text-gray-700 text-base sm:text-lg">
            Fast answers for your data questions
          </p>
        </div>

        {/* Quick Access */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="col-span-1 md:col-span-3 relative">
            <Input
              type="text"
              placeholder="Search articles, topics, or questions..."
              className="w-full px-5 py-4 text-base border rounded-md shadow-sm"
            />
           
          </div>
          <div className="bg-[#F9F5FF] p-6 rounded-xl text-center shadow-sm">
            <BookOpen className="mx-auto mb-3 text-[#6c3cbe] w-6 h-6" />
            <h4 className="font-semibold">Popular Articles</h4>
          </div>
          <div className="bg-[#F5FAFF] p-6 rounded-xl text-center shadow-sm">
            <Phone className="mx-auto mb-3 text-[#6c3cbe] w-6 h-6" />
            <h4 className="font-semibold">Contact Support</h4>
            <p className="text-sm text-gray-600 mt-1">Avg. response: 22 minutes</p>
          </div>
        </div>

        {/* Core Topics */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Core Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Getting Started",
                links: [
                  "How to access your Exellius dashboard",
                  "Understanding your data credits",
                  "Setting up team members"
                ]
              },
              {
                title: "Data Solutions",
                links: [
                  "Finding accurate B2B emails",
                  "Using our lead database",
                  "Verifying data accuracy"
                ]
              },
              {
                title: "Integrations",
                links: [
                  "Connecting to Salesforce",
                  "API documentation",
                  "Zapier automation"
                ]
              },
              {
                title: "Account & Billing",
                links: [
                  "Upgrading your plan",
                  "Downloading invoices",
                  "Cancellation policy"
                ]
              }
            ].map((section, i) => (
              <div key={i}>
                <h4 className="font-semibold text-lg mb-3 text-[#6c3cbe]">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, j) => (
                    <li key={j} className="text-sm text-gray-700 hover:underline">
                      <Link href="#">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Guides */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F9F5FF] p-6 rounded-xl shadow-sm">
              <h4 className="text-lg font-semibold mb-2">📗 The Complete Guide to Data Accuracy</h4>
              <p className="text-sm text-gray-600 mb-4">
                Learn how Exellius maintains 95%+ email verification rates
              </p>
              <Button variant="outline">Read Guide</Button>
            </div>
            <div className="bg-[#F5FAFF] p-6 rounded-xl shadow-sm">
              <h4 className="text-lg font-semibold mb-2">🎥 Video Tutorial: Finding Leads in 2 Minutes</h4>
              <Button variant="outline">Watch Tutorial</Button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked</h2>
          <ul className="space-y-4">
            {[
              {
                question: "How often is your database updated?",
                answer:
                  "Our B2B data refreshes every 48 hours through automated verification."
              },
              {
                question: "What’s your data coverage by industry?",
                answer:
                  "We cover 94% of S&P 500 companies and 82% of tech startups globally."
              },
              {
                question: "Can I export my lead lists?",
                answer:
                  "Yes, all plans include CSV exports with full field data."
              }
            ].map((item, i) => (
              <li key={i} className="bg-[#FAF9FE] p-5 rounded-lg shadow-sm">
                <h4 className="text-md font-semibold text-gray-900 mb-1">
                  {item.question}
                </h4>
                <p className="text-sm text-gray-700">{item.answer}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Link href="#" className="text-[#6c3cbe] font-medium hover:underline">
              See All FAQs
            </Link>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Need More Help?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="default">📞 Live Chat</Button>
            <Button variant="outline">📩 support@exellius.com</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
