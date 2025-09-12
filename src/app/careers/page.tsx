// app/email-finder/page.tsx (or pages/email-finder.tsx if using pages directory)

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "./Content";
import CallToAction from "@/components/CallToAction";
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Careers at Exellius - Build the Future of B2B Data",
    description:
      "Join our team of data innovators! Competitive salaries, remote flexibility, and meaningful work powering global business connections.",
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
