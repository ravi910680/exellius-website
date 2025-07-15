"use client"

import { AlarmClock, ShieldCheck, Settings2, Users } from "lucide-react"

export default function PremiumGuarantees() {
  return (
    <section className="bg-[#fffdfb] px-6 py-16">
      <div className="max-w-5xl mx-auto border border-gray-200 rounded-xl p-8 md:p-10 shadow-sm bg-white">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Premium Guarantees</h2>

        <div className="space-y-6">
          {/* Guarantee 1 */}
          <div className="flex items-start gap-4">
            <AlarmClock className="w-6 h-6 text-[#e05e2b] mt-1" />
            <div>
              <p className="text-base text-gray-900">
                <span className="font-semibold">48-Hour Delivery</span> or get a <span className="text-[#e05e2b] font-medium">10% discount</span>
              </p>
            </div>
          </div>

          {/* Guarantee 2 */}
          <div className="flex items-start gap-4">
            <Settings2 className="w-6 h-6 text-[#6c3cbe] mt-1" />
            <div>
              <p className="text-base text-gray-900">
                <span className="font-semibold">90% Match Accuracy</span> guaranteed — or we’ll manually <span className="text-[#6c3cbe] font-medium">re-filter your list</span>
              </p>
            </div>
          </div>

          {/* Guarantee 3 */}
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-[#10b981] mt-1" />
            <div>
              <p className="text-base text-gray-900">
                <span className="font-semibold">GDPR-Compliant Data</span> — zero legal risk for outreach
              </p>
            </div>
          </div>

          {/* CTA - Enterprise */}
          <div className="flex items-start gap-4 mt-6">
            <Users className="w-6 h-6 text-[#6c3cbe] mt-1" />
            <div>
              <p className="text-base text-gray-900">
                <span className="font-semibold">Need 50,000+ leads?</span>{" "}
                <a
                  href="#"
                  className="text-[#6c3cbe] underline underline-offset-2 font-medium"
                >
                  Explore Enterprise Solutions
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
