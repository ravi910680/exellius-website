// app/email-finder/page.tsx (or pages/email-finder.tsx if using pages directory)

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "./Content";

import CallToAction from "@/components/CallToAction";
import Head from "next/head"

export default function EmailFinderPage() {
  return (
    <>
     <Head>
                <title>Exellius Privacy Policy - Data Protection Commitment</title>
                <meta
                  name="description"
                  content="Learn how we collect, use, and protect your information in compliance with GDPR, CCPA, and global privacy laws."
                />
              </Head>
      <Header />
      
            <Content />
      <CallToAction />
     
     
      <Footer />
    </>
  );
}
