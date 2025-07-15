"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutUs() {
  return (
    <section className="bg-[#FDF7FF] py-24 px-6 text-gray-900 pt-40">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            About <span className="text-[#9856F2]">Exellius Systems</span>
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Powering Smarter B2B Decisions with Data Intelligence
          </p>
        </div>

        {/* Section: Company Overview (Text Only) */}
        <div className="text-lg max-w-4xl mx-auto text-center">
          <p>
            At Exellius, we believe data is the cornerstone of growth in the modern business landscape.
            As a trusted provider of global data intelligence and enterprise data solutions, we empower
            organizations to unlock actionable insights, accelerate B2B lead generation, and drive revenue
            growth with precision.
          </p>
        </div>

        {/* Section: Who We Are */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p>
              Exellius is a forward-thinking B2B data solutions partner dedicated to helping businesses harness
              the power of accurate, scalable, and compliant data. Whether you need a high-quality B2B leads database,
              reliable email finding services, or comprehensive global data intelligence, our platform delivers the
              tools you need to connect with decision-makers seamlessly.
            </p>
          </div>
          <div className="relative w-full h-72">
            <Image
              src="/group.jpg"
              alt="About Exellius Team"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Section: Our Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative w-full h-72">
            <Image
              src="/mission.jpg"
              alt="Mission"
              fill
              className="object-contain"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>
              Our mission is simple: to transform how businesses discover, engage, and convert opportunities.
              By combining cutting-edge technology with deep B2B lead generation data expertise, we enable
              sales and marketing teams to focus on what matters most—building meaningful relationships and
              closing deals faster.
            </p>
          </div>
        </div>

        {/* Section: Why Choose Us */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Exellius?</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-10">
            We empower businesses with data-driven precision.
          </p>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Data Accuracy Guarantee", value: "100%" },
              { label: "Industries Covered", value: "50+" },
              { label: "Global B2B Contacts", value: "10M+" },
              { label: "Client Retention Rate", value: "95%" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-3xl font-bold text-[#6c3cbe]">{stat.value}</p>
                <p className="text-sm text-gray-700 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Why Points */}

           <div className="mb-8">
    <h3 className="text-2xl font-semibold mb-4">What Sets Us Apart</h3>
    <p className="text-gray-700 max-w-2xl mx-auto">
      Exellius isn’t just a data provider—we’re your partner in B2B growth. Here's how we help you scale smarter, faster, and more efficiently.
    </p>
  </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {[
              {
                title: "Trusted Accuracy",
                desc: "Our proprietary data validation ensures you get verified, up-to-date B2B leads.",
              },
              {
                title: "Scalable Solutions",
                desc: "From startups to enterprises, our enterprise data solutions adapt to your needs.",
              },
              {
                title: "Global Reach",
                desc: "Access a vast B2B leads database spanning industries and geographies.",
              },
              {
                title: "Innovation-Driven",
                desc: "We continuously refine our Exellius platform to stay ahead of market demands.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white shadow-md">
                <h3 className="font-semibold text-lg mb-2 text-[#6c3cbe]">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Join the Data-Driven Revolution</h2>
          <p className="text-gray-800 mb-6">
            Thousands of businesses rely on Exellius Systems to fuel their growth. Discover how our B2B data solutions can elevate your strategy—explore our platform or contact us today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-[#9856F2] hover:bg-[#5a30aa] text-white text-lg">
              Explore Platform
            </Button>
            <Button variant="ghost" size="lg" className="text-[#6c3cbe] text-lg">
              Contact Us
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}
