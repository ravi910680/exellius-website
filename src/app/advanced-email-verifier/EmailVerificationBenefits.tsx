"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function EmailVerificationBenefits() {
  return (
    <section className="bg-[#FFF8F8] px-6 py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/domain-finder-img.png" // Replace with actual image path
            alt="Email verification UI"
            width={560}
            height={420}
            className="rounded-lg w-full h-auto object-contain"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Use an <span className="text-[#9856F2]">Email Verification</span> Tool?
          </h2>
          <div className="h-1 w-16 bg-[#9856F2] mb-6" />

          <p className="text-gray-800 text-base sm:text-lg mb-6 leading-relaxed">
            Sending emails to invalid or non-existent addresses harms your sender reputation, increases bounce rates, and wastes valuable resources. Exellius’ <strong>email validator</strong> ensures that every email address in your list is legitimate, active, and capable of receiving messages.
            <br /><br />
            Our <strong>email address checker</strong> performs multi-layered validations, including:
          </p>

          <ul className="space-y-4 text-gray-900 text-base">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#9856F2] mt-1 w-5 h-5" />
              <span>
                <strong>Syntax & Format Check</strong> — Confirms the email follows standard formatting (e.g., <span className="text-[#9856F2]">name@company.com</span>).
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#9856F2] mt-1 w-5 h-5" />
              <span><strong>Domain Verification</strong> — Checks if the domain exists and has active MX records.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#9856F2] mt-1 w-5 h-5" />
              <span><strong>SMTP Validation</strong> — Connects to the recipient’s mail server to verify inbox existence (without sending an email).</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#9856F2] mt-1 w-5 h-5" />
              <span><strong>Disposable & Webmail Detection</strong> — Filters out temporary or personal email addresses (e.g., Gmail, Yahoo).</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#9856F2] mt-1 w-5 h-5" />
              <span><strong>Accept-All Domain Check</strong> — Identifies domains that accept all emails, helping you assess risk.</span>
            </li>
          </ul>

          <p className="text-gray-800 text-base mt-6">
            With Exellius’ <strong>email verification service</strong>, you can trust that your outreach efforts reach real, engaged recipients.
          </p>
        </div>
      </div>
    </section>
  )
}
