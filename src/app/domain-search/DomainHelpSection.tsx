export default function DomainHelpSection() {
  return (
    <section className="bg-[#9856F2] text-white py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Struggling to find email addresses by domain <br className="hidden sm:block" />
          for your B2B outreach?
        </h2>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-white mx-auto my-6" />

        {/* Description */}
        <p className="text-sm sm:text-base leading-relaxed mb-3">
          Exellius’ <span className="font-semibold">domain email finder</span> helps sales and marketing teams extract accurate, verified professional email addresses from any company domain in seconds.
        </p>
        <p className="text-sm sm:text-base leading-relaxed">
          Whether you need a single contact or a <span className="font-semibold">bulk domain search</span>, our tool helps you <span className="font-semibold">Find emails by domain</span> and simplifies prospecting by delivering high-quality leads with minimal effort.
        </p>
      </div>
    </section>
  )
}
