import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import HomePage from "@/components/HomePage";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-full">
      <HomePage />  
      <AboutUs />   
      <Services /> 
      <Contact />
    </main>
  );
}
