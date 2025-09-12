// app/email-finder/page.tsx (or pages/email-finder.tsx if using pages directory)

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "./Content";
import CallToAction from "@/components/CallToAction";
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Exellius Data - 95% Accurate B2B Contacts & Company Intelligence",
    description:
      "Our proprietary database delivers verified emails, direct dials, and firmographics updated every 48 hours. Learn about our data sources and accuracy guarantees.",
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
