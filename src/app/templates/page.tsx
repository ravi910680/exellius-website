// app/email-finder/page.tsx (or pages/email-finder.tsx if using pages directory)

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "./Content";
import ColdEmailHero from "./ColdEmailHero";
import SubjectLineFormulas from "./SubjectLineFormulas";
import CallToAction from "@/components/CallToAction";
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Free B2B Outreach Templates - Optimized for Exellius Data",
    description:
      "Download high-converting email sequences, LinkedIn scripts, and call templates designed to work seamlessly with Exellius' verified contact data",
  }
}



export default function EmailFinderPage() {
  return (
    <>
    
      <Header />
      <ColdEmailHero />
     
      
            <Content />

             <SubjectLineFormulas />
      <CallToAction />
     
     
      <Footer />
    </>
  );
}
