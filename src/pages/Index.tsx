import { useEffect } from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Clients from "@/components/landing/Clients";
import Services from "@/components/landing/Services";
import CaseStudies from "@/components/landing/CaseStudies";
import Stats from "@/components/landing/Stats";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  // Set dark mode as default on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Clients />
        <Services />
        <CaseStudies />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
