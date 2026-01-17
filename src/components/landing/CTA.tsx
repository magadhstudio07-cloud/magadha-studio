import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import GridBackground from "./GridBackground";

const CTA = () => {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border relative">
      <GridBackground />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-accent text-xs font-medium uppercase tracking-[0.3em]">
            Let's Talk
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] uppercase">
            Ready to transform your digital presence?
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
            Whether you're launching a new brand or scaling an existing one, 
            we're here to help you achieve your goals.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:hello@magadh.studio"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href="mailto:hello@magadh.studio"
              className="inline-flex items-center gap-3 px-8 py-4 border border-border text-sm font-medium hover:bg-secondary transition-colors"
            >
              Schedule a call
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
