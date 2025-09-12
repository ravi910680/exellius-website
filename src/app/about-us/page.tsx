// app/email-finder/page.tsx (or pages/email-finder.tsx if using pages directory)

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "./Content";
import CallToAction from "@/components/CallToAction";


import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Exellius - Trusted B2B Data Solutions Provider",
    description:
      "Exellius empowers businesses with 95% accurate B2B contact data. Learn about our mission, global data intelligence platform, and commitment to data protection.",
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
