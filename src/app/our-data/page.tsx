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
                <title>Exellius Data - 95% Accurate B2B Contacts & Company Intelligence</title>
                <meta
                  name="description"
                  content="Our proprietary database delivers verified emails, direct dials, and firmographics updated every 48 hours. Learn about our data sources and accuracy guarantees."
                />
              </Head>
      <Header />
      
            <Content />
      <CallToAction />
     
     
      <Footer />
    </>
  );
}
