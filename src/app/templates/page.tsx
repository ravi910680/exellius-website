// app/email-finder/page.tsx (or pages/email-finder.tsx if using pages directory)

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "./Content";
import ColdEmailHero from "./ColdEmailHero";
import SubjectLineFormulas from "./SubjectLineFormulas";
import CallToAction from "@/components/CallToAction";
import Head from "next/head"


export default function EmailFinderPage() {
  return (
    <>
    <Head>
                <title>Free B2B Outreach Templates - Optimized for Exellius Data</title>
                <meta
                  name="description"
                  content="Download high-converting email sequences, LinkedIn scripts, and call templates designed to work seamlessly with Exellius' verified contact data"
                />
              </Head>
      <Header />
      <ColdEmailHero />
     
      
            <Content />

             <SubjectLineFormulas />
      <CallToAction />
     
     
      <Footer />
    </>
  );
}
