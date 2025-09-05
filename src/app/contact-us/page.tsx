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
                <title>Contact Exellius - Get Expert B2B Data Support</title>
                <meta
                  name="description"
                  content="Have questions about our data solutions? Our team reaches out for sales inquiries, technical support, or partnership opportunities."
                />
              </Head>
      <Header />
      
            <Content />
      <CallToAction />
     
     
      <Footer />
    </>
  );
}
