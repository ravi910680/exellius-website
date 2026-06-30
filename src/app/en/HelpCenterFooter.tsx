
import Image from "next/image"
import { Facebook, Linkedin, Twitter } from "lucide-react"

export default function HelpCenterFooter() {
  return (
    <footer className=" bg-white py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <Image
          src="/logo.jpg"
          alt="Exellius Logo"
          width={95}
          height={32}
          className="rounded-lg opacity-20 grayscale pb-5"
        />

        <p className="mt-7 text-sm text-gray-400 pb-10">
          For more information, contact our Support team:{" "}
          <a
            href="mailto:contact@exellius.com"
            className="hover:text-[#9856F2]"
          >
            contact@exellius.com
          </a>
        </p>

        <div className="mt-9 flex items-center gap-5 text-gray-400">
          <a href="https://www.facebook.com/exelliussystems/" aria-label="Facebook" className="hover:text-[#9856F2]">
            <Facebook className="h-4 w-4" />
          </a>

          <a href="https://x.com/ExelliusSystems" aria-label="Twitter" className="hover:text-[#9856F2]">
            <Twitter className="h-4 w-4" />
          </a>

          <a href="https://www.linkedin.com/company/exellius-systems" aria-label="LinkedIn" className="hover:text-[#9856F2]">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}