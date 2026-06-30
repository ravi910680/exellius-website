import Link from "next/link"
import Image from "next/image"
import HelpCenterHero from "../../HelpCenterHero"
import {
  ArrowLeft,
  Building2,
  ChevronRight,
  Search,
  Upload,
} from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const inputRows = [
  {
    element: "Placeholder text",
    description: "Enter domains (example.com) or paste multiple",
  },
  {
    element: "Left icon",
    description:
      "A small grid/domain icon inside the input field on the far left.",
  },
  {
    element: "Scroll arrows",
    description:
      "Up/down scroll arrows on the right edge of the input indicate multi-line domain entry support.",
  },
  {
    element: "Horizontal scrollbar",
    description:
      "A left/right scroll indicator appears at the bottom of the input field for long domain entries.",
  },
  {
    element: "Border style",
    description:
      "Purple/lavender outline appears when the input is focused.",
  },
]

const usageSteps = [
  "Type a single domain directly, e.g. tata.com",
  "Paste multiple domains at once — each on a new line or comma-separated",
  "Use the upload button to import a list from a file",
]

const uploadSteps = [
  "Click the upload button to open a file picker dialog",
  "Select a CSV or text file containing a list of company domains",
  "The domains are loaded into the input field automatically",
  "Then click the purple Search button to run the lookup",
]

function InfoTable({
  rows,
}: {
  rows: {
    element: string
    description: string
  }[]
}) {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-[#ECE6FF]">
      <table className="w-full border-collapse text-sm md:text-base">
        <thead>
          <tr className="bg-[#7C3AED] text-[#9856F2]">
            <th className="w-[32%] px-5 py-4 text-left font-bold">
              UI Element
            </th>
            <th className="px-5 py-4 text-left font-bold">
              What It Does
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.element} className="odd:bg-white even:bg-[#F8F3FF]">
              <td className="border-t border-[#ECE6FF] px-5 py-4 font-bold text-[#7C3AED] align-top">
                {row.element}
              </td>

              <td className="border-t border-[#ECE6FF] px-5 py-4 leading-7 text-gray-700 align-top">
                {row.description}
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
        className="mt-6 h-auto w-auto rounded-xl border border-[#ECE6FF]"
      />

      <p className="mt-3 text-sm italic text-gray-500">{caption}</p>
    </>
  )
}

export default function FindEmailByCompanyPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Find Email by Company"
        subtitle="Exellius Finder Tool"
        searchPlaceholder="Search Finder articles..."
      />

      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/en" className="hover:text-[#9856F2]">
            All Collections
          </Link>

          <ChevronRight className="h-4 w-4" />

          <Link href="/en/finder" className="hover:text-[#9856F2]">
            Exellius Finder Tool
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span>Find Email by Company</span>
        </div>

        <Link
          href="/en/finder"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#9856F2]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Finder
        </Link>

        <article className="rounded-2xl border border-[#ECE6FF] bg-white p-8 shadow-sm md:p-10">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl">
            <Building2 className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Find Email by Company
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            This is the default view when the Finder page first loads. It is
            used to search all professional email addresses associated with a
            company domain.
          </p>

          <DocImage
            src="/help-center/finder-company-tab.png"
            alt="Find email by company tab"
            caption="Find email by company tab — active/purple state highlighted"
          />

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#7C3AED]">
              4.1 Screen Layout
            </h2>

            <DocImage
              src="/help-center/finder-domain-search-card.png"
              alt="Domain Search card"
              caption="Domain Search card — full view"
            />

            <p className="mt-5 text-lg leading-8 text-gray-700">
              The main content area consists of a single white card on a light
              grey page background. The card contains:
            </p>

            <ul className="mt-5 list-disc space-y-3 pl-6 text-lg leading-8 text-gray-700">
              <li>A card title: Domain Search</li>
              <li>A wide text input field</li>
              <li>An upload/import button</li>
              <li>A purple search button</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#7C3AED]">
              4.2 Domain Search Input Field
            </h2>

            <div className="mt-6 rounded-xl bg-[#F8F3FF] px-5 py-4 font-mono text-sm text-[#7C3AED]">
              Enter domains (example.com) or paste multiple
            </div>

            <InfoTable rows={inputRows} />

            <p className="mt-8 text-lg font-semibold text-[#202124]">
              How to use this field:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-lg leading-8 text-gray-700">
              {usageSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#7C3AED]">
              4.3 Upload / Import Button
            </h2>

            <DocImage
              src="/help-center/finder-upload-import.png"
              alt="Upload import button"
              caption="Upload / import button — grey icon button highlighted"
            />

            <div className="mt-6 rounded-xl bg-[#F8F3FF] px-5 py-4 font-mono text-sm text-[#7C3AED]">
              [ Upload icon ] — Grey square button to the right of the input
              field
            </div>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              This button allows you to import a list of domains from an
              external file rather than typing or pasting them manually.
            </p>

            <div className="mt-6 overflow-hidden rounded-xl border border-[#7C3AED]">
              <div className="bg-[#F8F3FF] px-5 py-4 font-bold text-[#7C3AED]">
                Expected use
              </div>

              <div className="divide-y divide-[#ECE6FF] bg-white">
                {uploadSteps.map((step) => (
                  <div key={step} className="px-5 py-4 text-gray-700">
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#7C3AED]">
              4.4 Search Button
            </h2>

            <DocImage
              src="/help-center/finder-search-button.png"
              alt="Purple search button"
              caption="Purple search button — magnifying glass icon highlighted"
            />

            <div className="mt-6 rounded-xl bg-[#F8F3FF] px-5 py-4 font-mono text-sm text-[#7C3AED]">
              [ Magnifying glass icon ] — Filled purple square button
            </div>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              The purple button with a white magnifying glass icon is positioned
              at the far right of the input row. After entering one or more
              domains, click this button to retrieve all professional email
              addresses associated with those domains from the Exellius
              database.
            </p>
          </section>

          <div className="mt-12 rounded-2xl bg-[#F8F3FF] p-6">
            <div className="flex gap-4">
              <Search className="mt-1 h-6 w-6 shrink-0 text-[#9856F2]" />

              <div>
                <h3 className="text-lg font-bold text-[#202124]">
                  Best Practice
                </h3>

                <p className="mt-3 leading-7 text-gray-700">
                  Use clean company domains such as{" "}
                  <strong>example.com</strong>. Avoid adding protocol prefixes
                  like <strong>https://</strong> unless the tool explicitly
                  supports them.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/finder/tab-navigation-two-modes"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Previous
            </Link>

            <Link
              href="/en/finder/find-email-by-name"
              className="text-sm font-medium text-[#9856F2]"
            >
              Next: Find Email by Name →
            </Link>
          </div>
        </article>
      </div>
        <HelpCenterFooter />
    </section>
  )
}