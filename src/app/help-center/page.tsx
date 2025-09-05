// app/email-finder/page.tsx (or pages/email-finder.tsx if using pages directory)

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import Content from "./Content";
import FAQs from "./FAQs";
import Head from "next/head"


export default function EmailFinderPage() {
  return (
    <>
    <Head>
                <title>Exellius Help Center - FAQs & Product Documentation</title>
                <meta
                  name="description"
                  content="Find instant answers about data sourcing, API integration, account management, and troubleshooting. Average response time: 22 minutes"
                />
              </Head>
      <Header />
      
         
          <Content />
          <FAQs />
      <CallToAction />
     
     
      <Footer />
    </>
  );
}
