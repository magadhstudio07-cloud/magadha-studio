import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import GridBackground from "./GridBackground";

const Hero = () => {
  return (
    <section className="pt-14 min-h-screen flex items-center justify-center relative">
      <GridBackground />
      <div className="container py-24 md:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] uppercase">
            We craft digital experiences that drive growth
          </h1>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Book a meeting
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-3 px-8 py-4 border border-border text-sm font-medium hover:bg-secondary transition-colors"
            >
              View our work
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
