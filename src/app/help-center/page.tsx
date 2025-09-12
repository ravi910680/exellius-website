// app/email-finder/page.tsx (or pages/email-finder.tsx if using pages directory)

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import Content from "./Content";
import FAQs from "./FAQs";
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Exellius Help Center - FAQs & Product Documentation",
    description:
      "Find instant answers about data sourcing, API integration, account management, and troubleshooting. Average response time: 22 minutes",
  }
}



export default function EmailFinderPage() {
  return (
    <>
    
      <Header />
      
         
          <Content />
          <FAQs />
      <CallToAction />
     
     
      <Footer />
    </>
  );
}
