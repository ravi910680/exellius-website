"use client"

import React from "react"

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-24 px-6 pt-40">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mt-2">Effective: July 1, 2025</p>
          <div className="h-1 w-20 bg-[#6c3cbe] mt-4 mx-auto rounded" />
        </div>

        {/* Content */}
        <div className="space-y-10 text-gray-800 leading-relaxed text-base">

          {/* 1. Introduction */}
          <section>
            <h2 className="text-xl font-semibold text-[#6c3cbe] mb-2">1. Introduction</h2>
            <p>
              Exellius Systems, Inc. ("we," "our," or "us") respects your privacy. This policy explains how we collect, use, disclose, and protect your data when you use our B2B data platform ("Service"). By using our Service, you agree to the practices described in this policy.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-xl font-semibold text-[#6c3cbe] mb-2">2. Information We Collect</h2>
            <h3 className="font-semibold mt-3">2.1 Data You Provide</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Account Information: Name, work email, company details, payment info</li>
              <li>Inquiries: Contact forms, support tickets</li>
              <li>Integration Data: CRM credentials (if integrations are enabled)</li>
            </ul>

            <h3 className="font-semibold mt-4">2.2 Automatically Collected Data</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Usage Data: IP address, browser, timestamps</li>
              <li>Cookies: Session and authentication tokens</li>
              <li>Device Info: OS, device identifiers</li>
            </ul>

            <h3 className="font-semibold mt-4">2.3 Business Contact Data</h3>
            <p>
              We collect and license professional contact data from:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Public directories</li>
              <li>Verified user submissions</li>
              <li>Partner APIs</li>
            </ul>
          </section>

          {/* 3. How We Use Information */}
          <section>
            <h2 className="text-xl font-semibold text-[#6c3cbe] mb-2">3. How We Use Information</h2>
            <table className="w-full border mt-4 text-sm text-left">
              <thead>
                <tr className="bg-[#f9f5ff] text-[#6c3cbe]">
                  <th className="p-2 border">Purpose</th>
                  <th className="p-2 border">Legal Basis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Service delivery (e.g. lead access)</td>
                  <td className="p-2 border">Contractual necessity</td>
                </tr>
                <tr>
                  <td className="p-2 border">Fraud prevention</td>
                  <td className="p-2 border">Legitimate interest</td>
                </tr>
                <tr>
                  <td className="p-2 border">Product improvement (analytics)</td>
                  <td className="p-2 border">Consent (if required)</td>
                </tr>
                <tr>
                  <td className="p-2 border">Marketing communications</td>
                  <td className="p-2 border">Opt-in consent</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 4. Information Sharing */}
          <section>
            <h2 className="text-xl font-semibold text-[#6c3cbe] mb-2">4. Information Sharing</h2>
            <h3 className="font-semibold mt-3">4.1 Service Providers</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Stripe, PayPal (payments)</li>
              <li>AWS, Google Cloud (hosting)</li>
            </ul>

            <h3 className="font-semibold mt-4">4.2 Legal Obligations</h3>
            <p>
              We may disclose data when required by law, court orders, or valid subpoenas.
            </p>

            <h3 className="font-semibold mt-4">4.3 Corporate Transactions</h3>
            <p>
              In the event of a merger or acquisition, user data may be shared under confidentiality.
            </p>
          </section>

          {/* 5. International Data Transfers */}
          <section>
            <h2 className="text-xl font-semibold text-[#6c3cbe] mb-2">5. International Data Transfers</h2>
            <p>
              Data may be stored or processed in regions like the EU, US, or APAC. We use:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Standard Contractual Clauses for EU data</li>
              <li>Local compliance in APAC</li>
              <li>Primary storage: [Your Country]</li>
            </ul>
          </section>

          {/* 6. Cookies and Tracking */}
          <section>
            <h2 className="text-xl font-semibold text-[#6c3cbe] mb-2">6. Cookies and Tracking</h2>
            <table className="w-full border mt-4 text-sm text-left">
              <thead>
                <tr className="bg-[#f9f5ff] text-[#6c3cbe]">
                  <th className="p-2 border">Cookie Type</th>
                  <th className="p-2 border">Purpose</th>
                  <th className="p-2 border">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Essential</td>
                  <td className="p-2 border">Authentication</td>
                  <td className="p-2 border">Session</td>
                </tr>
                <tr>
                  <td className="p-2 border">Analytics</td>
                  <td className="p-2 border">Usage trends</td>
                  <td className="p-2 border">12 months</td>
                </tr>
                <tr>
                  <td className="p-2 border">Marketing</td>
                  <td className="p-2 border">Ad targeting</td>
                  <td className="p-2 border">24 months</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-2">Manage preferences anytime via the <strong>Cookie Settings</strong> link in our footer.</p>
          </section>

          {/* 7. Data Subject Rights */}
          <section>
            <h2 className="text-xl font-semibold text-[#6c3cbe] mb-2">7. Data Subject Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Access your data</li>
              <li>Rectify inaccurate information</li>
              <li>Request data deletion (where legally allowed)</li>
              <li>Export your data in a portable format</li>
            </ul>
            <p className="mt-2">
              Email <a href="mailto:privacy@exellius.com" className="text-[#6c3cbe] underline">privacy@exellius.com</a> — we respond within 30 days.
            </p>
          </section>

          {/* 8. Security Measures */}
          <section>
            <h2 className="text-xl font-semibold text-[#6c3cbe] mb-2">8. Security Measures</h2>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Technical:</strong> AES-256 encryption, annual pen testing</li>
              <li><strong>Organizational:</strong> Role-based access, security training</li>
              <li><strong>Compliance:</strong> SOC 2 Type II audits</li>
            </ul>
          </section>

          {/* 9. Policy Updates */}
          <section>
            <h2 className="text-xl font-semibold text-[#6c3cbe] mb-2">9. Policy Updates</h2>
            <p>
              We notify users of significant changes via:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Email alerts (30 days before)</li>
              <li>In-app banners (visible for 14 days)</li>
            </ul>
          </section>

          {/* 10. Contact Us */}
          <section>
            <h2 className="text-xl font-semibold text-[#6c3cbe] mb-2">10. Contact Us</h2>
            <p>
              <strong>Data Protection Officer:</strong> [Name] <br />
              <a href="mailto:dpo@exellius.com" className="text-[#6c3cbe] underline">dpo@exellius.com</a> <br />
              [Company Address]
            </p>
          </section>

        </div>
      </div>
    </section>
  )
}
