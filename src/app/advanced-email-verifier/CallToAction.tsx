"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="bg-[#FBF8FE] py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* ✅ Left: Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Get Started with{" "}
            <span className="text-[#9856F2]">Exellius Email Verifier</span> Today
          </h2>
          <div className="h-1 w-16 bg-[#9856F2] mb-6"></div>

          <ul className="space-y-4 text-gray-800 mb-10">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#9856F2] w-5 h-5 mt-1" />
              <span>
                <strong>Free Plan Available</strong> – Verify 50 emails/month at no cost.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#9856F2] w-5 h-5 mt-1" />
              <span>
                <strong>Instant Results</strong> – Real-time validation for single or bulk emails.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#9856F2] w-5 h-5 mt-1" />
              <span>
                <strong>API & Integrations</strong> – Seamlessly embed verification into your workflow.
              </span>
            </li>
          </ul>

          <button className="bg-[#9856F2] text-white font-semibold text-sm rounded-md px-6 py-3 hover:bg-[#7a3fe0] transition">
            Try Exellius’ Email Verifier Now
          </button>
        </div>

        {/* ✅ Right: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/verify-6.png" // Replace with actual path
            alt="Database visual"
            width={500}
            height={360}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  )
}
