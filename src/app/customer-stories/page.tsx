// app/email-finder/page.tsx (or pages/email-finder.tsx if using pages directory)

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "./Content";
import CallToAction from "@/components/CallToAction";
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Exellius Customer Success Stories - Real B2B Growth Results",
    description:
      "See how 1,200+ companies achieved 42% more meetings with Exellius' accurate contact data. Read case studies from SaaS, finance & enterprise clients",
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
