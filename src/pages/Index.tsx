import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import TrustSection from "@/components/landing/TrustSection";
import Services from "@/components/landing/Services";
import Process from "@/components/landing/Process";
import FeaturedWork from "@/components/landing/FeaturedWork";
import WhyUs from "@/components/landing/WhyUs";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <Services />
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
