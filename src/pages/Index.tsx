import { useEffect } from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import Testimonials from "@/components/landing/Testimonials";
import Process from "@/components/landing/Process";
import FeaturedWork from "@/components/landing/FeaturedWork";
import WhyUs from "@/components/landing/WhyUs";
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
        <Services />
        <Testimonials />
        <Process />
        <FeaturedWork />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
