// app/email-finder/page.tsx (or pages/email-finder.tsx if using pages directory)

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HelpCenterHero from "./HelpCenterHero";
import CallToAction from "@/components/CallToAction";
import Content from "./Content";
import FAQs from "./FAQs";


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
