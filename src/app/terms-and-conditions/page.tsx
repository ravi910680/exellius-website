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
                <title>Exellius Terms of Service - Legal Guidelines</title>
                <meta
                  name="description"
                  content="Review our terms covering data usage, subscriptions, and compliance for assurance and legal understanding."
                />
              </Head>
      <Header />
      
            <Content />
      <CallToAction />
     
     
      <Footer />
    </>
  );
}
