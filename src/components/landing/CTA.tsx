import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border grid-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight uppercase leading-[1.1]">
            Ready to build something great?
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:hello@magadh.studio"
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Book a meeting
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
