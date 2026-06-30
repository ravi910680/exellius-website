import Link from "next/link"
import Image from "next/image"
import HelpCenterHero from "../../HelpCenterHero"
import {
  ArrowLeft,
  ChevronRight,
  Filter,
} from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const peopleFilters = [
  {
    filter: "Job Title / Role",
    options: "CEO, CMO, CTO, VP Sales, Marketing Manager, IT Director, Founder",
    purpose: "Find the right decision-maker or influencer for your offer",
  },
  {
    filter: "Seniority Level",
    options: "C-Level, VP, Director, Manager, Individual Contributor, Entry-Level",
    purpose: "Target by hierarchy for ABM or multi-threading deals",
  },
  {
    filter: "Department",
    options: "Sales, Marketing, Engineering, Finance, HR, Operations, Legal, Product, IT",
    purpose: "Focus outreach on the department most likely to buy",
  },
  {
    filter: "Years of Experience",
    options: "0–2, 3–5, 5–10, 10–20, 20+",
    purpose: "Target seasoned buyers or up-and-coming talent",
  },
  {
    filter: "LinkedIn Profile",
    options: "Has LinkedIn / No filter",
    purpose: "Ensure leads have a presence for social selling follow-up",
  },
  {
    filter: "Name Search",
    options: "Free-text first/last name",
    purpose: "Look up specific individuals directly by name",
  },
]

const companyFilters = [
  {
    filter: "Industry",
    options: "Tech & SaaS, Healthcare & Pharma, Finance, Banking, Manufacturing, Retail, Education, Legal, Real Estate",
    purpose: "Match leads to verticals you serve",
  },
  {
    filter: "Company Size / Headcount",
    options: "1–10, 11–50, 51–200, 201–500, 501–1000, 1001–5000, 5000+",
    purpose: "Filter by startup, SMB, mid-market, or enterprise",
  },
  {
    filter: "Revenue Range",
    options: "Under $1M, $1M–$10M, $10M–$50M, $50M–$100M, $100M+",
    purpose: "Target companies within your deal-size sweet spot",
  },
  {
    filter: "Company Type",
    options: "Public, Private, Non-profit, Government, Partnership",
    purpose: "Tailor outreach tone and pricing strategy",
  },
  {
    filter: "Company Name / Domain",
    options: "Free-text or domain input",
    purpose: "Prospect into a specific target account",
  },
  {
    filter: "Founded Year",
    options: "Date range slider",
    purpose: "Identify newer companies vs. established players",
  },
  {
    filter: "Technologies Used",
    options: "CRM, marketing tools, ERP, cloud platforms",
    purpose: "Target companies by technology stack",
  },
]

const locationFilters = [
  {
    filter: "Country",
    options: "190+ countries including USA, India, UK, Canada, Australia",
    purpose: "Focus on markets you operate in",
  },
  {
    filter: "State / Region",
    options: "Maharashtra, California, London, etc.",
    purpose: "Regional territory management",
  },
  {
    filter: "City",
    options: "Free-text or dropdown",
    purpose: "Hyper-local prospecting for field sales or events",
  },
  {
    filter: "Timezone",
    options: "IST, EST, PST, GMT, etc.",
    purpose: "Schedule outreach in the prospect's working hours",
  },
]

const contactDataFilters = [
  {
    filter: "Has Email",
    options: "Verified email available / Any",
    purpose: "Only show leads you can email",
  },
  {
    filter: "Email Type",
    options: "Corporate email, Personal email, Both",
    purpose: "Choose the right email type for outreach",
  },
  {
    filter: "Has Phone Number",
    options: "Direct dial available / Any",
    purpose: "Surface leads with phone numbers for SDR calls",
  },
  {
    filter: "Phone Type",
    options: "Mobile, Landline / Office, Both",
    purpose: "Choose mobile or office phone contacts",
  },
  {
    filter: "Verified Status",
    options: "AI-verified, Human-verified, Both",
    purpose: "Prioritize higher-confidence contact data",
  },
]

const intentFilters = [
  {
    filter: "Intent Data",
    options: "High, Medium, Low buying intent signals",
    purpose: "Prioritize prospects researching solutions like yours",
  },
  {
    filter: "Hiring Trends",
    options: "Currently hiring in Sales, Marketing, Tech, etc.",
    purpose: "Find companies showing growth signals",
  },
  {
    filter: "Funding Stage",
    options: "Seed, Series A, Series B, Series C+, IPO, Bootstrapped",
    purpose: "Target newly funded companies",
  },
  {
    filter: "Recent Funding",
    options: "Funded in last 30, 90, or 180 days",
    purpose: "Reach prospects when budgets are fresh",
  },
  {
    filter: "Technology Adoption",
    options: "Recently added / removed technology",
    purpose: "Catch companies during technology changes",
  },
]

const complianceFilters = [
  {
    filter: "GDPR Opt-Out Filter",
    options: "Exclude contacts who have opted out under GDPR",
    purpose: "Mandatory for targeting EU/UK contacts",
  },
  {
    filter: "Do Not Contact List",
    options: "Upload your own suppression list",
    purpose: "Avoid emailing existing customers or suppressed contacts",
  },
  {
    filter: "CAN-SPAM Compliance",
    options: "Pre-applied by default to US contacts",
    purpose: "Helps US outreach meet compliance requirements",
  },
]

function FilterTable({ rows }: { rows: any[] }) {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-[#ECE6FF]">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[#1F5BE3] text-[#9856F2]">
            <th className="w-[28%] px-4 py-3 text-left">Filter</th>
            <th className="w-[40%] px-4 py-3 text-left">Options / Values</th>
            <th className="w-[32%] px-4 py-3 text-left">Purpose</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.filter} className="odd:bg-white even:bg-[#F8FAFC]">
              <td className="border-t border-[#ECE6FF] px-4 py-4 font-semibold align-top">
                {row.filter}
              </td>
              <td className="border-t border-[#ECE6FF] px-4 py-4 align-top text-gray-700">
                {row.options}
              </td>
              <td className="border-t border-[#ECE6FF] px-4 py-4 align-top text-gray-700">
                {row.purpose}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function DocImage({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption: string
}) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={1}
        height={1}
        sizes="100vw"
        className="mt-8 h-auto w-auto rounded-xl border border-[#ECE6FF]"
      />

      <p className="mt-3 text-sm italic text-gray-500">{caption}</p>
    </>
  )
}

export default function FiltersPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Filters — Complete Reference"
        subtitle="Exellius Lead Discovery"
        searchPlaceholder="Search Lead Discovery articles..."
      />

      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/en" className="hover:text-[#9856F2]">
            All Collections
          </Link>

          <ChevronRight className="h-4 w-4" />

          <Link href="/en/leads" className="hover:text-[#9856F2]">
            Exellius Lead Discovery
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span>Filters</span>
        </div>

        <Link
          href="/en/leads"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#9856F2]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Lead Discovery
        </Link>

        <article className="rounded-2xl border border-[#ECE6FF] bg-white p-8 shadow-sm md:p-10">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl ">
            <Filter className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Filters — Complete Reference
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            The left-hand filter panel is the core of the Leads tool. Every
            filter can be stacked, which means you can apply multiple filters at
            the same time to build a precise target audience.
          </p>

          <DocImage
            src="/help-center/filters-panel.png"
            alt="Full Filters Panel"
            caption="Full left filter panel — Search, all filters, and Find Leads button"
          />

          <div className="mt-12 ">
            <h2 className="text-2xl font-bold text-[#202124]">
              5.1 People Filters
            </h2>

            <DocImage
              src="/help-center/people-filter.png"
              alt="People Filters"
              caption="Industry filter row (zoomed)"
            />

            <DocImage
              src="/help-center/all-people-filters.png"
              alt="All People Filters"
              caption="All 10 filter rows — Industry through Funding"
            />

            <p className="mt-5 text-lg leading-8 text-gray-700">
              These filters target the individual contact — the person you want
              to reach.
            </p>

            <FilterTable rows={peopleFilters} />
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#202124]">
              5.2 Company Filters
            </h2>

            <DocImage
              src="/help-center/company-filters.png"
              alt="Company Filters"
              caption="All 10 filter rows — Industry through Funding"
            />

            <p className="mt-5 text-lg leading-8 text-gray-700">
              These filters narrow the list based on the organization the
              contact works at.
            </p>

            <FilterTable rows={companyFilters} />
          </div>

          <div className="mt-12 ">
            <h2 className="text-2xl font-bold text-[#202124]">
              5.3 Location Filters
            </h2>

            <DocImage
              src="/help-center/location-filter.png"
              alt="Location Filters"
              caption="Location filter row (zoomed)"
            />

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Geo-target your search down to city level.
            </p>

            <FilterTable rows={locationFilters} />
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#202124]">
              5.4 Contact Data Filters
            </h2>

            <DocImage
              src="/help-center/contact-data-filter.png"
              alt="Contact Data Filters"
              caption="Title/Role filter row (zoomed)"
            />

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Use these filters to ensure the leads you see have the contact
              details you need.
            </p>

            <FilterTable rows={contactDataFilters} />
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#202124]">
              5.5 Intent & Buying Signal Filters
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              These filters surface companies and contacts who are more likely
              to be in an active buying cycle.
            </p>

            <FilterTable rows={intentFilters} />
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#202124]">
              5.6 Compliance & Suppression Filters
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Keep your outreach legal and clean by excluding contacts who
              should not be contacted.
            </p>

            <FilterTable rows={complianceFilters} />
          </div>

          <div className="mt-12 rounded-2xl bg-[#F8F3FF] p-6">
            <h3 className="text-lg font-bold text-[#202124]">
              Best Practice
            </h3>

            <p className="mt-3 leading-7 text-gray-700">
              Start broad with filters like industry and country, then narrow
              your audience using role, seniority, company size, email status,
              and buying signals.
            </p>
          </div>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/leads/search-bar"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Previous
            </Link>

            <Link
              href="/en/leads/results-grid"
              className="text-sm font-medium text-[#9856F2]"
            >
              Next: Results Grid →
            </Link>
          </div>
        </article>
      </div>
      <HelpCenterFooter />
    </section>
  )
}