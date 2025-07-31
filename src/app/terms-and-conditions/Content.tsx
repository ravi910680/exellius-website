"use client"

import React from "react"

export default function TermsPage() {
  return (
    <section className="bg-white py-24 px-6 pt-40">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Exellius Terms of Service
          </h1>
          <p className="text-sm text-gray-500 mt-2">Last Updated: July 1, 2025</p>
          <div className="h-1 w-20 bg-[#6c3cbe] mt-4 mx-auto rounded" />
        </div>

        {/* Terms Content */}
        <div className="space-y-10 text-gray-800 leading-relaxed text-base">

          <div>
            <h2 className="text-xl font-semibold text-[#6c3cbe] mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing Exellius&apos; data platform (&quot;Service&quot;), you agree to these legally binding terms. If you are using the Service on behalf of a company, you represent and warrant that you have the authority to bind that entity.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#6c3cbe] mb-2">2. Service Description</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>B2B contact data and company intelligence</li>
              <li>Email verification services</li>
              <li>API access to our global database</li>
            </ul>
            <p className="mt-2 italic text-gray-600">
              Note: Data accuracy is guaranteed at 95% but not 100%.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#6c3cbe] mb-2">3. Account Requirements</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Provide accurate registration information</li>
              <li>Maintain password confidentiality</li>
              <li>Be at least 18 years old</li>
              <li>Do not use bots or scrapers to access data</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#6c3cbe] mb-2">4. Data Usage Restrictions</h2>
            <p>Prohibited uses include:</p>
            <ul className="list-none mt-2 space-y-1">
              <li>❌ Spam or unlawful communications</li>
              <li>❌ Reselling Exellius data without written consent</li>
              <li>❌ Reverse engineering our databases</li>
              <li>❌ High-volume scraping (&ge;1000 queries/day without API)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#6c3cbe] mb-2">5. Payments &amp; Renewals</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>All fees are non-refundable unless required by law</li>
              <li>Subscriptions renew automatically unless canceled 48h before cycle ends</li>
              <li>Price changes will be communicated 30 days in advance</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#6c3cbe] mb-2">6. Termination</h2>
            <p>We may suspend or terminate accounts for:</p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li>Material breach of these terms</li>
              <li>Suspicious or abusive usage patterns</li>
              <li>Payment failures lasting more than 15 days</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#6c3cbe] mb-2">7. Limitation of Liability</h2>
            <p>
              Exellius&apos; total liability shall not exceed fees paid during the 6 months preceding any claim. We are not liable for:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li>Indirect damages such as lost profits or revenue</li>
              <li>Third-party misuse of exported data</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#6c3cbe] mb-2">8. Governing Law</h2>
            <p>
              These terms are governed by the laws of [Your Jurisdiction]. All disputes will be resolved in the courts of [City].
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#6c3cbe] mb-2">9. Changes to Terms</h2>
            <p>
              We&apos;ll notify users of material changes to these terms via email at least 30 days before they take effect.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#6c3cbe] mb-2">Contact for Questions</h2>
            <p>
              For legal questions or clarification, please reach out to:
              <br />
              <a href="mailto:legal@exellius.com" className="text-[#6c3cbe] underline">legal@exellius.com</a>
              <br />
              Exellius Inc.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
