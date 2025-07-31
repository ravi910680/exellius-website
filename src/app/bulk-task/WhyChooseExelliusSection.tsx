"use client"

export default function WhyChooseExelliusSection() {
  const features = [
    {
      number: "01",
      title: "High Accuracy",
      description: "Industry-leading data validation",
      bg: "#F8F8FC",
    },
    {
      number: "02",
      title: "Bulk Processing",
      description: "Handle thousands of records in one go",
      bg: "#FEF4F2",
    },
    {
      number: "03",
      title: "User-Friendly",
      description: "Simple CSV uploads & exports",
      bg: "#EDF2FB",
    },
    {
      number: "04",
      title: "Secure & Compliant",
      description: "GDPR-friendly data handling",
      bg: "#FDF1FF",
    },
  ]

  return (
    <section className="w-full bg-white pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Why Choose <span className="text-[#9856F2]">Exellius</span> Over Other Tools?
        </h2>
        <div className="h-1 w-16 bg-[#9856F2] mx-auto my-6" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 mb-10">
          {features.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-6 text-left shadow-sm relative"
              style={{ backgroundColor: item.bg }}
            >
              <div className=" top-3 right-4 text-6xl font-bold text-[#E2DDF6] select-none text-right mb-4">
                {item.number}
              </div>
              <h4 className="font-semibold text-sm text-black mb-1">{item.title}</h4>
              <p className="text-xs text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="text-sm sm:text-base text-gray-800">
          Enhance your outreach with accurate, scalable data.{" "}
          <a href="https://app.exellius.com/signup" className="text-[#9856F2] font-medium hover:underline">
            Sign up for Exellius now
          </a>{" "}
          and transform your prospecting workflow!
        </p>
      </div>
    </section>
  )
}
