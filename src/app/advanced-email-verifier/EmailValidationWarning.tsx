"use client"

export default function EmailValidationWarning() {
  return (
    <section className="bg-[#9856F2] text-white text-center py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Bounced Emails Harm Reputation <br /> & Waste Budget
        </h2>
        <div className="w-20 h-[2px] bg-white mx-auto mb-6" />

        <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          An <strong>email verifier</strong> isn’t just helpful – it’s essential for protecting your deliverability. 
          Exellius provides the most accurate email validation tool available, instantly verifying 
          <strong> professional email addresses</strong> before they enter your CRM or campaign. Our real-time 
          <strong> email checker</strong> ensures you only send to valid, active inboxes – boosting open rates 
          while keeping your domain off spam blacklists.
        </p>
      </div>
    </section>
  )
}
