
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import LogoCarousel from "@/components/LogoCarousel";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <LogoCarousel />
        <HowItWorks />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
