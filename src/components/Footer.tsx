import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10">
        {/* Brand and Social */}
        <div className="md:col-span-2">
          <img src="/logo-white.png" alt="Exellius Logo" className="w-32 mb-4" />
          <p className="text-sm text-gray-300 mb-10">
            Your daily stream of fresh data on companies and professionals
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="#"><Instagram className="w-5 h-5 text-[#9856F2]" /></Link>
            <Link href="#"><Twitter className="w-5 h-5 text-[#9856F2]" /></Link>
            <Link href="#"><Linkedin className="w-5 h-5 text-[#9856F2]" /></Link>
            <Link href="#"><Facebook className="w-5 h-5 text-[#9856F2]" /></Link>
          </div>
        </div>

        {/* Footer Links */}
        <div>
          <h4 className="font-semibold mb-4 pb-1">Company</h4>
          <div className="w-20 h-1 bg-white rounded mb-5 mt-5" />
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">About us</Link></li>
            <li><Link href="#">Data transparency</Link></li>
            <li><Link href="#">News</Link></li>
            <li><Link href="#">Press area</Link></li>
            <li><Link href="#">Contact us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 pb-1">Data</h4>
          <div className="w-20 h-1 bg-white rounded mb-5 mt-5" />
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">Firmographic data</Link></li>
            <li><Link href="#">Employee data</Link></li>
            <li><Link href="#">Job posting data</Link></li>
            <li><Link href="#">Technographic data</Link></li>
            <li><Link href="#">Company data enrichment</Link></li>
            <li><Link href="#">Data APIs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 pb-1">Resources</h4>
          <div className="w-20 h-1 bg-white rounded mb-5 mt-5" />
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">Documentation</Link></li>
            <li><Link href="#">FAQ</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Discover companies</Link></li>
            <li><Link href="#">Resource center</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 pb-1">Use cases</h4>
          <div className="w-20 h-1 bg-white rounded mb-5 mt-5" />
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">Investment intelligence</Link></li>
            <li><Link href="#">Trend forecasting</Link></li>
            <li><Link href="#">Data-driven recruitment</Link></li>
            <li><Link href="#">Lead generation</Link></li>
            <li><Link href="#">Data enrichment</Link></li>
            <li><Link href="#">Labor market research</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar with Flex Layout */}
      <div className="border-t border-gray-700 px-6 py-6 text-sm text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>©2025 All Rights Reserved. Exellius®</div>
          <div className="flex gap-6">
            <Link href="/terms-and-condition" className="hover:text-white transition">Terms & Conditions</Link>
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
