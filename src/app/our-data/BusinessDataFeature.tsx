import {
  MailCheck,
  Globe,
  Users,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";

// Data for the 4-step validation
const steps = [
  {
    title: "Syntax Check",
    description: "RFC-compliant email patterns",
    icon: <MailCheck className="text-indigo-600" size={28} />,
  },
  {
    title: "Domain Verification",
    description: "MX record validation",
    icon: <Globe className="text-blue-600" size={28} />,
  },
  {
    title: "Role Detection",
    description: "Filter generic addresses",
    icon: <Users className="text-amber-600" size={28} />,
  },
  {
    title: "Human Review",
    description: "5% random sampling",
    icon: <ShieldCheck className="text-green-600" size={28} />,
  },
];

// Data for refresh cycles
const refreshes = [
  {
    label: "Emails",
    interval: "Every 48 hours",
    color: "from-fuchsia-100 to-fuchsia-50",
    iconColor: "text-fuchsia-600",
    border: "border-fuchsia-200",
    desc: "Always up-to-date contact details with near-real-time validation.",
  },
  {
    label: "Company Data",
    interval: "Weekly",
    color: "from-sky-100 to-sky-50",
    iconColor: "text-sky-600",
    border: "border-sky-200",
    desc: "Frequent updates for changes in company profiles and hierarchies.",
  },
  {
    label: "Technographics",
    interval: "Monthly",
    color: "from-stone-100 to-stone-50",
    iconColor: "text-stone-600",
    border: "border-stone-200",
    desc: "Regularly refreshed technology stack and usage insights.",
  },
];

export default function DataVerificationProcess() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 md:p-10 max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Data Verification Process
      </h2>
      <p className="text-gray-500 text-base mb-8">
        Ensuring data quality through automated and manual checks
      </p>

      {/* 4-Step Validation Timeline */}
      <ol className="relative border-l-2 border-indigo-100 ml-3 mb-12">
        {steps.map((step, idx) => (
          <li key={step.title} className="mb-8 ml-6">
            {/* Step circle/icon */}
            <span className="absolute -left-6 flex items-center justify-center w-10 h-10 bg-indigo-50 rounded-full ring-2 ring-white shadow">
              {step.icon}
            </span>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-gray-900">
                <span className="mr-2 text-indigo-500">{idx + 1}.</span> {step.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 pl-7">{step.description}</p>
          </li>
        ))}
      </ol>

      {/* Refresh Cycles Card Grid */}
      <div>
        <h3 className="text-lg font-bold mb-4 text-gray-900">Refresh Cycles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {refreshes.map((ref) => (
            <div
              key={ref.label}
              className={`border ${ref.border} rounded-xl p-6 shadow-sm bg-gradient-to-br ${ref.color} transition-shadow hover:shadow-lg flex flex-col items-center text-center`}
            >
              <div className="mb-3">
                <RefreshCw className={ref.iconColor} size={32} />
              </div>
              <div className="text-base font-semibold text-gray-800 mb-1">
                {ref.label}
              </div>
              <span className="inline-block mb-2 rounded-full bg-white font-semibold text-xs px-3 py-1 border border-gray-200 shadow-sm text-gray-600">
                {ref.interval}
              </span>
              <div className="text-xs text-gray-500">{ref.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
