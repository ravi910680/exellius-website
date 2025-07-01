"use client"

export default function SalesMarketingBenefits() {
  const benefits = [
    {
      id: "01",
      title: "Improve Campaign Performance with Accurate B2B Contacts",
      description:
        "Low-quality data wastes time and resources. Exellius’ B2B Data Platform ensures your outreach targets real, active professionals, maximizing open and response rates.",
    },
    {
      id: "02",
      title: "Reduce Bounce Rates with Verified Email Data",
      description:
        "Our Email Data Platform includes built-in verification, so you only send emails to valid addresses.",
    },
    {
      id: "03",
      title: "Access Decision-Makers Directly",
      description:
        "Stop guessing email formats. With Exellius, you get structured B2B email data, including names, job titles, and company details.",
    },
    {
      id: "04",
      title: "No more delayed response",
      description:
        "The leads getting colder due to delayed response and extended conversation. Now with Exellius phone number data directly get on a call to warm your leads.",
    },
  ]

  return (
    <section className="bg-[#ffeff3] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            How <span className="text-[#9856F2]">Exellius</span> Enhances Your Sales & <br className="sm:hidden" />
            Marketing Efforts
          </h2>
          <div className="h-1 w-24 bg-[#9856F2] mx-auto mt-4 rounded" />
        </div>

        {/* Benefit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="relative p-6 bg-[#fdf4db] rounded-xl border border-gray-200 overflow-hidden"
            >
              {/* Large faded number */}
              <div className="   text-[100px] font-bold text-[#f0dedd] opacity-30 select-none text-right">
                {item.id}
              </div>

              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
