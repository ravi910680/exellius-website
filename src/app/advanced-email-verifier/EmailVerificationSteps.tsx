"use client"

export default function EmailVerificationSteps() {
  const steps = [
    {
      index: "01",
      title: "Format Check",
      description:
        "Ensures the email follows standard syntax (e.g., no missing “@” or invalid characters).",
    },
    {
      index: "02",
      title: "Domain Check",
      description:
        "Confirms the domain is registered and has valid MX records.",
    },
    {
      index: "03",
      title: "SMTP Ping",
      description:
        "Contacts the mail server to check if the inbox exists (no email is sent).",
    },
    {
      index: "04",
      title: "Disposable & Webmail Filter",
      description:
        "Flags temporary or personal emails that may harm deliverability.",
    },
    {
      index: "05",
      title: "Accept-All Detection",
      description:
        "Identifies domains that accept all emails, helping you assess risk.",
    },
  ]

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          How Does <span className="text-[#9856F2]">Exellius’</span> Email Verification Work?
        </h2>
        <div className="h-1 w-16 bg-[#9856F2] mx-auto mb-6" />
        <p className="text-gray-700 max-w-xl mx-auto mb-14">
          Exellius’ email verification tool follows a rigorous validation process:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-white border rounded-xl shadow-sm px-5 pt-6 pb-8 text-left"
              style={{
                backgroundColor: i % 2 === 0 ? "#FAF8FF" : "#FEF0EC",
              }}
            >
              {/* Step Number Top Right */}
              <div className=" top-4 right-5 text-[66px] font-bold text-gray-200 leading-none text-right">
                {step.index}
              </div>

              {/* Title & Description */}
              <div className="mt-4">
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-700 leading-snug">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
