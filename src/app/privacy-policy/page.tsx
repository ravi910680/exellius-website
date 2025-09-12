// app/email-finder/page.tsx (or pages/email-finder.tsx if using pages directory)

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "./Content";

import CallToAction from "@/components/CallToAction";
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Exellius Privacy Policy - Data Protection Commitment",
    description:
      "Learn how we collect, use, and protect your information in compliance with GDPR, CCPA, and global privacy laws.",
  }
}

export default function EmailFinderPage() {
  return (
    <>
     
      <Header />
      
            <Content />
      <CallToAction />
     
     
      <Footer />
    </>
  );
}
