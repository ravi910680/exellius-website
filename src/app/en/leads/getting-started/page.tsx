import Link from "next/link"
import Image from "next/image"
import HelpCenterHero from "../../HelpCenterHero"
import {
  ArrowLeft,
  ChevronRight,
  LogIn,
  CheckCircle2,
} from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const steps = [
  {
    number: 1,
    title: "Visit the App",
    description:
      "Go to app.exellius.com/leads in your browser.",
  },
  {
    number: 2,
    title: "Enter Your Credentials",
    description:
      "Type your registered email address and password in the login fields.",
  },
  {
    number: 3,
    title: "Two-Factor Authentication (if enabled)",
    description:
      "If your account has 2FA enabled, enter the verification code sent to your email or authenticator app.",
  },
  {
    number: 4,
    title: "Land on the Dashboard",
    description:
      "After login, you are taken directly to the Leads search interface — the main working area of the tool.",
  },
]

export default function GettingStartedPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">

      <HelpCenterHero
        title="Getting Started"
        subtitle="Logging In"
        searchPlaceholder="Search Lead Discovery articles..."
      />

      <div className="mx-auto max-w-5xl px-6 py-10">

        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/en">
            All Collections
          </Link>

          <ChevronRight className="h-4 w-4"/>

          <Link href="/en/leads">
            Exellius Lead Discovery
          </Link>

          <ChevronRight className="h-4 w-4"/>

          <span>Getting Started</span>
        </div>

        <Link
          href="/en/leads"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#9856F2]"
        >
          <ArrowLeft className="h-4 w-4"/>
          Back to Lead Discovery
        </Link>

        <article className="rounded-2xl bg-white border border-[#ECE6FF] p-10">

          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl ">
            <LogIn className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold">
            Getting Started — Logging In
          </h1>

           <Image
            src="/help-center/toolbar.png"
            alt="Action toolbar"
            width={1366}
            height={768}
            className="mt-8 rounded-xl border"
          />
           <p className="mt-4 text-center text-sm text-gray-500">
            Action toolbar — record count, Finder/Saved toggle, Save and Export
          </p>


          <p className="mt-6 text-lg text-gray-700">
            Before you can access the Leads page, you need to log in to your
            Exellius account.
          </p>

         
         

          <div className="mt-12 space-y-6">

            {steps.map((step)=>(
              <div
                key={step.number}
                className="overflow-hidden rounded-xl border border-[#ECE6FF]"
              >

                <div className="grid md:grid-cols-[140px_1fr]">

                  <div className="flex items-center  bg-[#2F6CF5] p-8">

                    <div className="text-center ">

                      <div className="text-3xl font-bold text-[#9856F2]">
                        {step.number}
                      </div>

                      <div className="mt-2 text-sm uppercase tracking-wide">
                        Step
                      </div>

                    </div>

                  </div>

                  <div className="bg-white p-8">

                    <h3 className="text-2xl font-semibold">
                      {step.title}
                    </h3>

                    <div className="mt-4 flex gap-3">

                      <CheckCircle2 className="mt-1 h-5 w-5 text-[#9856F2]" />

                      <p className="text-lg leading-8 text-gray-700">
                        {step.description}
                      </p>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

          <div className="mt-12 rounded-xl bg-[#F7F1FF] p-6">

            <h3 className="font-bold">
              Tip
            </h3>

            <p className="mt-3 leading-7 text-gray-700">
              If you forget your password, use the "Forgot Password"
              option on the login screen to reset it.
            </p>

          </div>

          <div className="mt-12 flex justify-between border-t pt-6">

            <Link href="/en/leads/overview">
              ← Previous
            </Link>

            <Link href="/en/leads/interface-layout">
              Next →
            </Link>

          </div>

        </article>

      </div>

      <HelpCenterFooter />

    </section>
  )
}