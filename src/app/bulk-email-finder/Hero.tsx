"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function BulkTaskHero() {
  return (
    <section className="relative w-full bg-[#F9F5FF] pt-44 pb-20 px-6 overflow-hidden">
      {/* Top Background */}
      <Image
        src="/bg_top.png"
        alt="Top Background"
        width={1920}
        height={400}
        className="absolute top-0 left-0 w-full object-cover z-0"
      />

      {/* Bottom Background */}
      <Image
        src="/bg_bottom.png"
        alt="Bottom Background"
        width={1920}
        height={400}
        className="absolute bottom-0 left-0 w-full object-cover z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Left: Visual */}
        <div className="w-full max-w-md">
          <Image
            src="/bulk-task.png" // Replace with actual bulk visual
            alt="Bulk Task Visual"
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* Right: Text Content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-snug">
            <span className="text-[#6c3cbe]">Bulk Task</span> –{" "}
            <span className="text-[#6c3cbe]">Verify & Find Contacts</span> at Scale
          </h1>

          <p className="mt-6 text-base text-gray-900">
            Upload large lists of leads and let Exellius do the work. Our Bulk Task engine verifies email addresses,
            enriches missing data, and returns complete, accurate contact records—ready for outreach.
          </p>

          <p className="mt-4 text-base text-gray-900">
            Whether you're handling 1,000 or 100,000 contacts, scale your efforts with confidence and precision.
          </p>

          <ul className="mt-6 space-y-2">
            {[
              "Bulk verify emails and phone numbers",
              "Append missing job titles, LinkedIn URLs, and firmographics",
              "Upload CSV and download enriched data in minutes"
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-2 font-medium">
                <CheckCircle className="w-5 h-5 text-[#6c3cbe]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="bg-[#9856F2] hover:bg-[#5a30aa] text-white text-lg">
              Start Bulk Task
            </Button>
            <Button variant="ghost" size="lg" className="text-[#6c3cbe] text-lg">
              Watch It in Action
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
