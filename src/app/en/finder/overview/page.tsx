import Link from "next/link"
import Image from "next/image"
import HelpCenterHero from "../../HelpCenterHero"
import {
  ArrowLeft,
  ChevronRight,
  MailSearch,
  Building2,
  UserSearch,
} from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

export default function FinderOverviewPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Overview"
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

          <span>Overview</span>
        </div>

        <Link
          href="/en/finder"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#9856F2]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Finder
        </Link>

        <article className="rounded-2xl border border-[#ECE6FF] bg-white p-8 shadow-sm md:p-10">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F6F0FF]">
            <MailSearch className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">Overview</h1>

          <Image
            src="/help-center/lead-finder.png"
            alt="Finder active navigation"
            width={1}
            height={1}
            sizes="100vw"
            className="mt-8 h-auto w-auto rounded-xl border border-[#ECE6FF]"
          />

          <p className="mt-3 text-sm italic text-gray-500">
            Left navigation panel — Finder active highlighted
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            The Finder page{" "}
            <strong>(app.exellius.com/finder)</strong> is Exellius&apos;s
            dedicated email discovery tool. It allows users to find verified
            professional email addresses using two distinct methods:
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-[#ECE6FF] bg-[#FBF8FF] p-6">
              <div className="mb-4 flex h-11 w-11 items-left justify-left rounded-xl ">
                <Building2 className="h-6 w-6 text-[#9856F2]" />
              </div>

              <h2 className="text-xl font-bold text-[#9856F2]">
                Find email by company
              </h2>

              <p className="mt-3 leading-7 text-gray-700">
                Search a company domain to retrieve all associated professional
                emails.
              </p>
            </div>

            <div className="rounded-2xl border border-[#ECE6FF] bg-[#FBF8FF] p-6">
              <div className="mb-4 flex h-11 w-11 items-left justify-left rounded-xl ">
                <UserSearch className="h-6 w-6 text-[#9856F2]" />
              </div>

              <h2 className="text-xl font-bold text-[#9856F2]">
                Find email by name
              </h2>

              <p className="mt-3 leading-7 text-gray-700">
                Look up a specific individual by their full name and company
                domain.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-[#F8F3FF] p-6">
            <p className="leading-7 text-gray-700">
              Both modes are accessible from the same page through clearly
              labelled tab buttons at the top of the screen.
            </p>
          </div>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/finder"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Back to collection
            </Link>

            <Link
              href="/en/finder/page-header"
              className="text-sm font-medium text-[#9856F2]"
            >
              Next: Page Header →
            </Link>
          </div>
        </article>
      </div>
      <HelpCenterFooter />
    </section>
  )
}