"use client"

import { useState } from "react"
import HelpCenterSidebar from "./HelpCenterSidebar"
import HelpCenterHero from "./HelpCenterHero"
const topics = [
  {
    category: "Getting Started",
    articles: [
      {
        title: "How to Access Your Exellius Dashboard",
        content: (
          <>
            <p>
              Your Exellius dashboard is the central hub for managing data
              projects, tracking usage, and collaborating with your team.
              Whether you're a new user or need a refresher, this guide will
              walk you through accessing your dashboard securely and
              efficiently.
            </p>
            <h3 className="mt-4 font-semibold">Step-by-Step Access Instructions</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li>
                Visit <strong>www.exellius.com</strong> and click "Login".
              </li>
              <li>
                Enter your email & password, or use "Forgot Password?" if
                needed.
              </li>
              <li>Complete 2FA if enabled.</li>
              <li>Navigate to your Dashboard via the main menu.</li>
            </ol>
          </>
        ),
      },
      {
        title: "Understanding Your Data Credits",
        content: (
          <>
            <p>
              Exellius uses a data credit system to manage usage across tasks.
              Each action consumes credits based on file size, complexity, and
              analysis type.
            </p>
          </>
        ),
      },
      {
        title: "Setting Up Team Members in Exellius",
        content: (
          <>
            <p>
              Exellius allows secure collaboration by letting you share data
              access, assign roles, and track team activity.
            </p>
          </>
        ),
      },
    ],
  },
  {
    category: "Data Solutions",
    articles: [
      {
        title: "Finding Accurate B2B Emails",
        content: (
          <>
            <p>
              Exellius combines multiple verification methods to provide
              reliable B2B contact data:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Real-time verification against corporate email servers</li>
              <li>Pattern recognition for domain-specific email formats</li>
              <li>Proprietary algorithms that cross-reference data points</li>
              <li>Regular database updates to remove bounced contacts</li>
            </ul>
            <h3 className="mt-4 font-semibold">Step-by-Step Email Search Process</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li>Go to Tools → Contact Finder in your dashboard</li>
              <li>Enter company, job title, location</li>
              <li>Use filters for industry, job level, and company size</li>
              <li>Review confidence scores and last verification date</li>
              <li>Export to CSV or integrate with CRM</li>
            </ol>
          </>
        ),
      },
      {
        title: "Using Our Lead Database",
        content: (
          <>
            <p>
              Our database includes 200M+ professional profiles, covering 50+
              countries and 30+ industries, updated weekly.
            </p>
            <h3 className="mt-4 font-semibold">Key Search Features</h3>
            <ul className="list-disc list-inside">
              <li>Technographic searching</li>
              <li>Funding round filters</li>
              <li>Department-level search</li>
            </ul>
          </>
        ),
      },
      {
        title: "Verifying Data Accuracy",
        content: (
          <>
            <p>Our multi-step verification process includes:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Syntax Check</li>
              <li>Domain Verification</li>
              <li>SMTP Check</li>
              <li>Role Account Detection</li>
              <li>Human Verification</li>
            </ul>
            <h3 className="mt-4 font-semibold">Accuracy Benchmarks</h3>
            <ul className="list-disc list-inside">
              <li>Emails: 92% deliverability</li>
              <li>Phone Numbers: 88% connect rate</li>
              <li>Job Titles: 90% current</li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    category: "Account & Billing",
    articles: [
      {
        title: "Upgrading Your Plan",
        content: (
          <>
            <h3 className="font-semibold">When to Consider Upgrading</h3>
            <ul className="list-disc list-inside">
              <li>You're consistently running out of data credits</li>
              <li>Your team has grown and needs more seats</li>
              <li>You require advanced features like API access or premium support</li>
            </ul>
            <h3 className="mt-4 font-semibold">How to Upgrade</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li>Navigate to Billing in Account Settings</li>
              <li>Click "Upgrade Plan"</li>
              <li>Compare feature tiers and select your plan</li>
              <li>Choose billing cycle and add extras if needed</li>
              <li>Confirm payment details</li>
            </ol>
            <h3 className="mt-4 font-semibold">After Upgrading</h3>
            <p>Immediate access to new features, prorated billing, and a new cycle start.</p>
          </>
        ),
      },
      {
        title: "Downloading Invoices",
        content: (
          <>
            <h3 className="font-semibold">How to Access</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li>Go to Account Settings → Billing → Invoices</li>
              <li>Filter by date or search invoice number</li>
              <li>Download as PDF, CSV, or print</li>
            </ol>
            <p>Invoices include plan details, usage charges, tax breakdown, and payment method.</p>
          </>
        ),
      },
      {
        title: "Cancellation Policy",
        content: (
          <>
            <h3 className="font-semibold">How to Cancel</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li>Go to Account → Billing → Subscription</li>
              <li>Click "Cancel Plan" and confirm</li>
            </ol>
            <p>
              Annual plans cancelled within 30 days get prorated refunds. Data remains
              until end of billing cycle, with reactivation possible within 90 days.
            </p>
          </>
        ),
      },
    ],
  },
  {
    category: "Data Accuracy Guide",
    articles: [
      {
        title: "Ensuring 95%+ Email Verification Accuracy",
        content: (
          <>
            <p>
              Data accuracy is critical for effective sales, marketing, and customer
              engagement. At Exellius, we ensure 95%+ email verification accuracy
              through a multi-layered validation process.
            </p>
            <h3 className="mt-4 font-semibold">How Exellius Ensures Data Accuracy</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li>
                <strong>Real-Time Email Verification</strong>
                <ul className="list-disc list-inside ml-5">
                  <li>SMTP Validation</li>
                  <li>MX Record Checks</li>
                  <li>Syntax Analysis</li>
                </ul>
              </li>
              <li>
                <strong>Proprietary Verification Algorithms</strong>
                <ul className="list-disc list-inside ml-5">
                  <li>Corporate directories</li>
                  <li>Professional networks</li>
                  <li>Historical engagement data</li>
                </ul>
              </li>
              <li>
                <strong>Continuous Database Updates</strong>
                <ul className="list-disc list-inside ml-5">
                  <li>Monthly re-verification</li>
                  <li>Bounce detection</li>
                  <li>Role account filtering</li>
                </ul>
              </li>
            </ol>
            <h3 className="mt-4 font-semibold">Industry-Leading Benchmarks</h3>
            <table className="table-auto border mt-2">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Exellius Rate</th>
                  <th>Industry Average</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Email Deliverability</td>
                  <td>95%+</td>
                  <td>70-85%</td>
                </tr>
                <tr>
                  <td>Phone Accuracy</td>
                  <td>90%+</td>
                  <td>75-80%</td>
                </tr>
                <tr>
                  <td>Job Title Freshness</td>
                  <td>92%+</td>
                  <td>80-85%</td>
                </tr>
              </tbody>
            </table>
            <h3 className="mt-4 font-semibold">Maintaining Clean Data</h3>
            <ul className="list-disc list-inside">
              <li>Verify before importing</li>
              <li>Monitor data health</li>
              <li>Optimize for deliverability</li>
            </ul>
            <h3 className="mt-4 font-semibold">FAQs</h3>
            <p>
              Covers re-verification frequency, typo correction, handling failed
              verifications, Alaska-specific data, compliance, and CRM integration.
            </p>
          </>
        ),
      },
    ],
  },
];



export default function HelpCenterPage() {
  const [selectedTitle, setSelectedTitle] = useState(
    topics[0].articles[0].title
  )

  const selectedArticle =
    topics
      .flatMap((topic) => topic.articles)
      .find((a) => a.title === selectedTitle) || topics[0].articles[0]

  return (

    <>
     <HelpCenterHero topics={topics} onSelect={setSelectedTitle} />
    <div className="flex h-screen">
      <HelpCenterSidebar
        topics={topics}
        selectedTitle={selectedTitle}
        onSelect={setSelectedTitle}
      />
      <main className="flex-1 overflow-y-auto p-8">
        <h1 className="text-2xl font-bold text-gray-900">
          {selectedArticle.title}
        </h1>
        <div className="mt-4 prose max-w-none">{selectedArticle.content}</div>
      </main>
    </div>
    </>
  )
}
