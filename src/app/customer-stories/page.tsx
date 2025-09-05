// app/email-finder/page.tsx (or pages/email-finder.tsx if using pages directory)
import Head from "next/head"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "./Content";
import CallToAction from "@/components/CallToAction";

export default function EmailFinderPage() {
  return (
    <>
    <Head>
                <title>Exellius Customer Success Stories - Real B2B Growth Results</title>
                <meta
                  name="description"
                  content="See how 1,200+ companies achieved 42% more meetings with Exellius' accurate contact data. Read case studies from SaaS, finance & enterprise clients"
                />
              </Head>
      <Header />
      
            <Content />
      <CallToAction />
     
     
      <Footer />
    </>
  );
}
