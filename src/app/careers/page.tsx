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
                <title>Careers at Exellius - Build the Future of B2B Data</title>
                <meta
                  name="description"
                  content="Join our team of data innovators! Competitive salaries, remote flexibility, and meaningful work powering global business connections."
                />
              </Head>
      <Header />
      
            <Content />
      <CallToAction />
     
     
      <Footer />
    </>
  );
}
