import { Facebook, Instagram, Linkedin, X } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-6 gap-10">
        {/* Brand and Social */}
        <div>
          <img src="/logo-white.png" alt="Exellius Logo" className="w-32 mb-4" />
          <p className="text-sm text-gray-300 mb-6">
            Your daily stream of fresh data on companies and professionals
          </p>
          <div className="flex gap-4">
            <Link href="https://www.instagram.com/exelliussystems"><Instagram className="w-5 h-5 text-[#9856F2]" /></Link>
            <Link href="https://x.com/ExelliusSystems"><X className="w-5 h-5 text-[#9856F2]" /></Link>
            <Link href="https://www.linkedin.com/company/exellius-systems"><Linkedin className="w-5 h-5 text-[#9856F2]" /></Link>
            <Link href="https://www.facebook.com/exelliussystems/"><Facebook className="w-5 h-5 text-[#9856F2]" /></Link>
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-semibold mb-4 pb-1">Products</h4>
          <div className="w-20 h-1 bg-white rounded mb-5" />
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/lead-discovery">Lead Discovery</Link></li>
            <li><Link href="/domain-search">Domain Search</Link></li>
            <li><Link href="/professional-email-finder">Professional Email Finder</Link></li>
            <li><Link href="/advanced-email-verifier">Advanced Email Verifier</Link></li>
            <li><Link href="/phone-number-finder">Phone Number Finder</Link></li>
            <li><Link href="/website-technology-checker">Website Technology Checker</Link></li>
            
            <li><Link href="/data-platform">Data Platform</Link></li>
            
            <li><Link href="/amazon-seller-data">Amazon Seller Data</Link></li>
          </ul>
        </div>

        {/* Add-ons */}
        <div>
          <h4 className="font-semibold mb-4 pb-1">Add-ons</h4>
          <div className="w-20 h-1 bg-white rounded mb-5" />
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/website-technology-checker">Website Technology Checker</Link></li>
            <li><Link href="/data-enrichment-suite">Data Enrichment Suite</Link></li>
            
            <li><Link href="/bulk-task">Bulk Task</Link></li>
            <li><Link href="/developer-api-hub">Developer API Hub</Link></li>
            <li><Link href="/bulk-task">Bulk Task</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-4 pb-1">Resources</h4>
          <div className="w-20 h-1 bg-white rounded mb-5" />
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/coming-soon">Blogs</Link></li>
            <li><Link href="/customer-stories">Customer Stories</Link></li>
            <li><Link href="/templates">Templates</Link></li>
            <li><Link href="/help-center">Help Center</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4 pb-1">Company</h4>
          <div className="w-20 h-1 bg-white rounded mb-5" />
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/our-data">Our Data</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-4 pb-1">Support</h4>
          <div className="w-20 h-1 bg-white rounded mb-5" />
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/contact-us">Contact Us</Link></li>
            <li><Link href="/help-center">Help Center / FAQ</Link></li>
            <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 px-6 py-6 text-sm text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>©2025 All Rights Reserved. Exellius®</div>
          <div className="flex gap-6">
            <Link href="/terms-and-conditions" className="hover:text-white transition">Terms & Conditions</Link>
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
