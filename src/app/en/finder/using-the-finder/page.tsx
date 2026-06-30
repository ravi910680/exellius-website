import Link from "next/link"
import HelpCenterHero from "../../HelpCenterHero"
import { ArrowLeft, ChevronRight, ListChecks } from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const workflowA = [
  {
    title: "Open the Finder page",
    description:
      "Navigate to app.exellius.com/finder. The page loads with Tab 1 (Find email by company) active by default.",
  },
  {
    title: "Locate the Domain Search card",
    description:
      "The white card labelled Domain Search is visible in the center of the page below the tab switcher.",
  },
  {
    title: "Enter one or more domains",
    description:
      "Click inside the input field and type a domain such as infosys.com, or paste several domains at once.",
  },
  {
    title: "Or upload a domain list",
    description:
      "Click the grey upload icon button and select a CSV or text file containing a list of domains.",
  },
  {
    title: "Run the search",
    description:
      "Click the purple magnifying glass button. Exellius queries its database and returns verified professional email addresses.",
  },
]

const workflowB = [
  {
    title: "Switch to Tab 2",
    description:
      "Click the Find email by name tab button. The card below switches to the Email Finder layout.",
  },
  {
    title: "Enter the person's full name",
    description:
      "Click the left input field and type the first and last name of the person you are searching for.",
  },
  {
    title: "Enter the company domain",
    description:
      "Click the right input field and type the domain of the company they work at.",
  },
  {
    title: "Or upload a name-domain list",
    description:
      "Click the grey upload button and select a CSV file containing full name and company domain columns.",
  },
  {
    title: "Run the search",
    description:
      "Click the purple magnifying glass button. The tool returns verified professional email addresses matching the name and domain.",
  },
]

function StepList({
  steps,
}: {
  steps: {
    title: string
    description: string
  }[]
}) {
  return (
    <div className="mt-6 space-y-4">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className="overflow-hidden rounded-xl border border-[#CFC8E8] bg-[#F8F6FF]"
        >
          <div className="grid grid-cols-[72px_1fr]">
            <div className="flex items-left justify-left bg-[#7C3AED] px-5 py-4 pb-0 text-xl font-bold text-[#9856F2]">
             Step - {index + 1}
            </div>

            <div className="px-5 py-4">
              <h3 className="font-bold text-[#202124]">{step.title}</h3>
              <p className="mt-1 leading-6 text-gray-700">
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function UsingTheFinderPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Step-by-Step: Using the Finder"
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

          <span>Step-by-Step: Using the Finder</span>
        </div>

        <Link
          href="/en/finder"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#9856F2]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Finder
        </Link>

        <article className="rounded-2xl border border-[#ECE6FF] bg-white p-8 shadow-sm md:p-10">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl ">
            <ListChecks className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Step-by-Step: Using the Finder
          </h1>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#7C3AED]">
              Workflow A — Find emails from a company domain
            </h2>

            <StepList steps={workflowA} />
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#7C3AED]">
              Workflow B — Find an email by person name
            </h2>

            <StepList steps={workflowB} />
          </section>

          <div className="mt-12 rounded-2xl bg-[#F8F3FF] p-6">
            <h3 className="text-lg font-bold text-[#202124]">
              Best Practice
            </h3>

            <p className="mt-3 leading-7 text-gray-700">
              Use company-domain search when you want to find multiple contacts
              at a company. Use name-based search when you already know the
              exact person you want to reach.
            </p>
          </div>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/finder/shared-interface-elements"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Previous
            </Link>

            <Link
              href="/en/finder/quick-reference"
              className="text-sm font-medium text-[#9856F2]"
            >
              Next: Quick Reference →
            </Link>
          </div>
        </article>
      </div>
        <HelpCenterFooter />
    </section>
  )
}