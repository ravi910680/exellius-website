"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function DataPlatformFeature2() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Inner Feature Card */}
        <div className="relative bg-[#FEF0EC] rounded-xl p-8 md:p-12 flex flex-col lg:flex-row-reverse items-center gap-10 shadow-sm border border-gray-200 overflow-hidden">
          
          {/* Background image on left */}
          <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none opacity-50 hidden md:block z-0">
            <Image
              src="/grp-large-left.png"
              alt="Data background"
              fill
              className="object-cover object-left"
            />
          </div>

          {/* Right Text Content */}
          <div className="w-full lg:w-1/2 text-left relative z-10">
           
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Deliverability-First Email Data</h4>
            <div className="h-0.5 w-10 bg-[#6c3cbe] mb-5"></div>

            <p className="text-base text-gray-800 mb-6">
              Don’t just get emails—get emails that land in inboxes. We prioritize quality and reachability:
            </p>

            <ul className="space-y-3 text-sm text-gray-900">
              {[
                <><strong>Human-verified emails</strong> with bounce rate under 5%</>,
                <><strong>SMTP-checked and domain-validated</strong> before delivery</>,
                <><strong>Deliverability scoring</strong> to prioritize best-fit contacts</>,
                <><strong>Suppression of known hard bounces</strong> and invalid domains</>
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 text-[#6c3cbe]" />
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Left Visual */}
          <div className="w-full lg:w-1/2 flex justify-center relative z-10">
            <div className="w-[420px]">
              <Image
                src="/deliverability.png" // Replace with actual image
                alt="Deliverability data visual"
                width={420}
                height={300}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
