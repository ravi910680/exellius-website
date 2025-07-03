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

        {/* Section: Who We Are */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p>
              Exellius is a forward-thinking B2B data solutions partner dedicated to helping businesses harness the power of accurate, scalable, and compliant data. Whether you need a high-quality B2B leads database, reliable email finding services, or comprehensive global data intelligence, our platform delivers the tools you need to connect with decision-makers seamlessly.
            </p>
          </div>
          <div className="relative w-full h-72">
            <Image
              src="/about-intel.png" // Replace with real image path
              alt="Global B2B Data"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Section: Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative w-full h-72">
            <Image
              src="/about-mission.png" // Replace with real image path
              alt="Mission"
              fill
              className="object-contain"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>
              Our mission is simple: to transform how businesses discover, engage, and convert opportunities. By combining cutting-edge technology with deep B2B lead generation data expertise, we enable sales and marketing teams to focus on what matters most—building meaningful relationships and closing deals faster.
            </p>
          </div>
        </div>

        {/* Section: Why Choose Us */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Why Choose Exellius?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {[
              {
                title: "Trusted Accuracy",
                desc: "Our proprietary data validation ensures you get verified, up-to-date B2B leads."
              },
              {
                title: "Scalable Solutions",
                desc: "From startups to enterprises, our enterprise data solutions adapt to your needs."
              },
              {
                title: "Global Reach",
                desc: "Access a vast B2B leads database spanning industries and geographies."
              },
              {
                title: "Innovation-Driven",
                desc: "We continuously refine our Exellius platform to stay ahead of market demands."
              }
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
