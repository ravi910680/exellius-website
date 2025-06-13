"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuresMenuPrimary = [
  { label: "Lead Discovery", desc: "Find Verified B2B Leads", href: "/lead-discovery" },
  { label: "Domain Search", desc: "Find Email Addresses of a Company", href: "/domain-search" },
  { label: "Professional Email Finder /Email Lookup", desc: "Locate Any Work Email Instantly", href: "/professional-email-finder" },
  { label: "Advanced Email Verifier", desc: "Check the Validity of an Email Address", href: "/advanced-email-verifier" },
  { label: "Phone Number Finder", desc: "Find Any Professional/Company Phone", href: "/phone-number-finder" },
  { label: "Website Technology Checker", desc: "Identify Technologies Used by Websites", href: "/website-technology-checker" },
  { label: "Data Enrichment Suite", desc: "Enhance & Complete Your Lead Data", href: "/data-enrichment-suite" },
]

const featuresMenuSecondary = [
  { label: "Data Platform", desc: "Industry-leading B2B Email Data", href: "/data-platform" },
  { label: "Bulk Email Finder", desc: "Verify & Find Contacts at Scale", href: "/bulk-email-finder" },
  { label: "Developer API Hub", desc: "Seamlessly Integrate Exellius into Your Stack", href: "/developer-api-hub" },
  { label: "Amazon Seller Data", desc: "", href: "/amazon-seller-data" },
]

const menuData: Record<"Resources" | "Company" | "Legal", { label: string; href: string }[]> = {
  Resources: [
    { label: "Blogs", href: "/blogs" },
    { label: "Customer Stories", href: "/customer-stories" },
    { label: "Templates", href: "/templates" },
    { label: "Help Center", href: "/help-center" },
  ],
  Company: [
    { label: "About Us", href: "/about-us" },
    { label: "Our Data", href: "/our-data" },
    { label: "Careers", href: "/careers" },
  ],
  Legal: [
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
}

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(prev => (prev === menu ? null : menu))
  }

  return (
    <>
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl bg-white rounded-full shadow-md px-6 py-6">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <Image src="/logo.png" alt="Exellius Logo" width={120} height={40} priority />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-900">
            {["Features", "Pricing Page", "Support", ...Object.keys(menuData)].map(label => (
              <div
                key={label}
                className="relative"
                onMouseEnter={() => toggleDropdown(label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {label === "Pricing Page" ? (
                  <Link href="/pricing" className="flex items-center gap-1 hover:text-purple-600 p-2">Pricing</Link>
                ) : label === "Support" ? (
                  <Link href="/contact-us" className="flex items-center gap-1 hover:text-purple-600 p-2">Support</Link>
                ) : (
                  <span className="flex items-center gap-1 cursor-pointer hover:text-purple-600 p-2">
                    {label}
                    <ChevronDown size={14} />
                  </span>
                )}

                {label === "Features" && activeDropdown === label && (
                  <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-md rounded-md z-50 w-[720px] grid grid-cols-2 gap-6 p-4">
                    <div className="grid grid-cols-1 gap-4">
                      {featuresMenuPrimary.map(item => (
                        <Link key={item.href} href={item.href} className="block text-sm text-gray-800 hover:text-purple-600">
                          <div className="font-medium">{item.label}</div>
                          {item.desc && <div className="text-sm text-gray-400">{item.desc}</div>}
                        </Link>
                      ))}
                    </div>
                    <div className="border-l pl-4">
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Platform Tools</p>
                      {featuresMenuSecondary.map(item => (
                        <Link key={item.href} href={item.href} className="block text-sm text-gray-800 hover:text-purple-600 mb-4">
                          <div className="font-medium">{item.label}</div>
                          {item.desc && <div className="text-sm text-gray-400">{item.desc}</div>}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {label !== "Features" && label !== "Pricing Page" && label !== "Support" && activeDropdown === label && (
                  <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-md rounded-md p-2 w-48 z-50">
                    {menuData[label as keyof typeof menuData].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-3 py-1 text-sm text-gray-700 hover:text-purple-600"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <Button variant="outline" className="text-sm px-4 py-2">Book a Demo</Button>
            <Button className="text-sm px-4 py-2">Create Account</Button>
          </div>

          <div className="flex lg:hidden">
            <Menu size={24} className="text-gray-700 cursor-pointer" onClick={() => setMobileOpen(true)} />
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-[9999] p-4 pt-6 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center justify-between mb-4">
              <Link href="/">
                <Image src="/logo.png" alt="Exellius Logo" width={100} height={36} />
              </Link>
              <X size={24} className="text-gray-700 cursor-pointer" onClick={() => setMobileOpen(false)} />
            </div>

            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Features</p>
              {[...featuresMenuPrimary, ...featuresMenuSecondary].map(item => (
                <Link key={item.href} href={item.href} className="block text-sm text-gray-800 hover:text-purple-600 mb-3">
                  <div className="font-medium">{item.label}</div>
                  {item.desc && <div className="text-sm text-gray-500">{item.desc}</div>}
                </Link>
              ))}
            </div>

            {["Pricing Page", "Support", ...Object.keys(menuData)].map(label => (
              <div key={label} className="mb-2">
                {label === "Pricing Page" ? (
                  <Link href="/pricing" className="block text-gray-800 py-2">Pricing</Link>
                ) : label === "Support" ? (
                  <Link href="/contact-us" className="block text-gray-800 py-2">Support</Link>
                ) : (
                  <>
                    <div className="text-sm font-medium text-gray-700 mb-1">{label}</div>
                    <div className="pl-4 border-l border-gray-200">
                      {(menuData[label as keyof typeof menuData] || []).map(item => (
                        <Link key={item.href} href={item.href} className="block text-sm text-gray-700 py-1 hover:text-purple-600">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <Button variant="outline" className="w-full">Book a Demo</Button>
            <Button className="w-full">Create Account</Button>
          </div>
        </div>
      )}
    </>
  )
}
