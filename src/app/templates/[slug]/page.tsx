"use client"

import { useParams, notFound, useRouter } from "next/navigation"
import { useMemo } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CallToAction from "@/components/CallToAction"
import { Document, Packer, Paragraph, TextRun } from "docx"
import { ArrowLeft } from "lucide-react"

const coldEmailPack = {
  templates: [
    {
      id: 1,
      industry: "Technology",
      categories: ["Sales", "Book meeting"],
      subject: "{First Name}, quick question about {Company}’s tech stack",
      body: `Hi {First Name},\n\nI noticed {Company} is scaling rapidly—how are you handling [specific pain point, e.g., "cloud infrastructure costs" or "team collaboration"]?\n\nWe’ve helped companies like [Similar Company] reduce [pain point] by X% using [Your Solution]. Would a 15-minute chat this week make sense to explore if we could do the same for you?\n\nBest,\n{Your Signature}`,
      count: 8,
    },
    {
      id: 2,
      industry: "Finance",
      categories: ["Networking", "Sales"],
      subject: "How {Company} is tackling {Industry Trend}",
      body: `Hi {First Name},\n\nWith {Industry Trend} (e.g., "rising payment fraud" or "digital transformation") impacting {Industry} firms, I thought you’d find this insight valuable: [Brief stat or tip].\n\nWe specialize in helping finance teams like yours [specific benefit, e.g., "cut processing time by 30%"]. Would you be open to a quick call to discuss?\n\nRegards,\n{Your Name}`,
      count: 6,
    },
    {
      id: 3,
      industry: "Healthcare",
      categories: ["Lead generation", "Sales"],
      subject: "{First Name}, a tip to streamline {Challenge}",
      body: `Hi {First Name},\n\nManaging {Challenge} (e.g., "patient data security" or "staff scheduling") is tougher than ever. Many {Industry} teams we work with are using [Your Solution] to [key outcome].\n\nCould I share a 10-minute case study on how [Similar Org] achieved [Result]?\n\nThanks,\n{Your Name}`,
      count: 10,
    },
    {
      id: 4,
      industry: "Manufacturing",
      categories: ["Sales", "Efficiency"],
      subject: "Reducing {Pain Point} for {Company}",
      body: `Hi {First Name},\n\nGiven {Company}’s focus on [specific operation, e.g., "lean manufacturing" or "global logistics"], I wanted to share how we helped [Similar Company] cut [Metric, e.g., "downtime by 20%"].\n\nAre you open to a quick chat to explore if this could work for you?\n\nBest regards,\n{Your Signature}`,
      count: 9,
    },
    {
      id: 5,
      industry: "Professional Services",
      categories: ["Demo request", "Client onboarding"],
      subject: "{First Name}, thought you’d find this relevant",
      body: `Hi {First Name},\n\nSince {Company} specializes in [Service], I figured you’d appreciate how [Your Solution] helped [Peer Firm] [Achievement, e.g., "automate 50% of client onboarding"].\n\nWould a 15-minute demo be useful? Let me know!\n\nBest regards,\n{Your Signature}`,
      count: 7,
    },
    {
      id: 11,
      industry: "Follow-Up",
      categories: ["Follow-up", "Reminder"],
      subject: "Following Up: {Original Subject Line}",
      body: `Dear {First Name},\n\nI hope this message finds you well. I wanted to follow up on my previous email regarding [briefly reference main value proposition].\n\nI understand you’re busy, so please let me know if this is something you’d like to explore further. Alternatively, I can provide additional details if helpful.\n\nLooking forward to your thoughts.\n\nBest regards,\n{Your Name}\n{Your Position}\n{Company Name}`,
      count: 3,
    },
    {
      id: 12,
      industry: "Follow-Up",
      categories: ["Case study", "Follow-up"],
      subject: "Insight for {Company}: {Relevant Benefit/Stat}",
      body: `Hello {First Name},\n\nI wanted to share a quick case study—we recently helped [Similar Company] achieve [specific result] by addressing [related challenge].\n\nGiven {Company}’s focus on [goal], I thought this might resonate. Would you be available for a brief call next week?\n\nKind regards,\n{Your Signature}`,
      count: 3,
    },
    {
      id: 13,
      industry: "Follow-Up",
      categories: ["Final follow-up", "Closing"],
      subject: "Should I Close This File?",
      body: `Hello {First Name},\n\nI don’t want to overstep, so please consider this my final follow-up regarding [topic]. If this isn’t a priority right now, I’ll circle back in a few months.\n\nOtherwise, I’d love to explore supporting {Company}’s goals. If you’re open, here’s my calendar link: [Calendar Link].\n\nBest regards,\n{Your Signature}`,
      count: 3,
    },
  ],
}


const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\{.*?\}/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")

export default function TemplatePage() {
  const params = useParams<{ slug: string }>()
  const { slug } = params
  const router = useRouter()

  const template = useMemo(() => {
    return coldEmailPack.templates.find(
      (t) => slugify(t.subject) === slug
    )
  }, [slug])

  if (!template) {
    notFound()
  }

  const downloadDoc = async () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [new TextRun({ text: `Subject: ${template?.subject}`, bold: true, size: 28 })],
            }),
            new Paragraph({ text: "" }),
            ...template!.body.split("\n").map(
              (line) =>
                new Paragraph({
                  children: [new TextRun({ text: line, size: 24 })],
                })
            ),
          ],
        },
      ],
    })

    const blob = await Packer.toBlob(doc)
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = `${slugify(template!.subject)}.docx`
    link.click()
  }

  return (
    <>
      <Header />
      <section className="w-full bg-white py-20 px-6 pt-40">
        <div className="max-w-4xl mx-auto">

          {/* All Templates Button */}
        <button
      onClick={() => router.push("/templates")}
      className="mb-6 flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded transition"
    >
      <ArrowLeft size={18} />
      All Templates
    </button>

          {/* Email Card */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            {/* Subject */}
            <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
              <span className="font-medium text-gray-800">
                Subject:
              </span>{" "}
              <span className="font-bold text-gray-900">
                {template.subject}
              </span>
            </div>

            {/* Email Body */}
            <div className="p-6 whitespace-pre-line text-gray-700">
              {template.body}
            </div>
          </div>

          {/* Download Button */}
          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={downloadDoc}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition"
            >
              Download Template
            </button>
          </div>

          {/* Categories */}
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex gap-2">
              {template.categories?.map((cat, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
      <Footer />
    </>
  )
}