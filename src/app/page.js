import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import NossosNumeros from "@/components/NossosNumeros";
import ServicesSection from "@/components/ServicesSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mt-24 mx-auto px-10 py-4">
        <HeroSection/>
        <NossosNumeros/>
        <AboutSection/>
        <ServicesSection/>
        <ContactSection/>
      </div>
    </main>
  )
}
