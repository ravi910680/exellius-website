import Header from "@/components/Header"
import Hero from "./Hero";
import Footer from "@/components/Footer"
import Price from "./Price"
import Companies from "@/components/Companies"
import FAQs from "./FAQs"


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Price />
       <Companies />
        <FAQs />
        
      
        <Footer /> 
        
       
      </main>
    </>
  )
}
