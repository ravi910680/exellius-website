import Header from "@/components/Header"
import Hero from "./Hero";
import Footer from "@/components/Footer"
import Price from "./Price"
import FAQs from "./FAQs"
import PlanSelector from "./PlanSelector";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Price />
        <PlanSelector />
        
        {/* Additional sections */}
      
        <FAQs />
        
      
        <Footer /> 
        
       
      </main>
    </>
  )
}
