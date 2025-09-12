// app/email-finder/page.tsx (or pages/email-finder.tsx if using pages directory)

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "./Content";
import CallToAction from "@/components/CallToAction";
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Exellius Terms of Service - Legal Guidelines",
    description:
      "Review our terms covering data usage, subscriptions, and compliance for assurance and legal understanding.",
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
