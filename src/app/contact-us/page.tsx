// app/email-finder/page.tsx (or pages/email-finder.tsx if using pages directory)

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "./Content";
import CallToAction from "@/components/CallToAction";
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Exellius - Get Expert B2B Data Support",
    description:
      "Have questions about our data solutions? Our team reaches out for sales inquiries, technical support, or partnership opportunities.",
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
