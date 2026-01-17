import { motion } from "framer-motion";
import GridBackground from "./GridBackground";
import ArrowIcon from "./ArrowIcon";

const CTA = () => {
  const handleScheduleCall = () => {
    // Open Calendly popup
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/your-calendly-link'
      });
    } else {
      // Fallback to direct link
      window.open('https://calendly.com/your-calendly-link', '_blank');
    }
  };

  return (
    <section id="contact" className="container">
      <div className="relative border-x-0">
        <GridBackground />
        <div className="relative min-h-[500px] lg:h-[600px] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:container z-[1]"
          >
            <div className="px-4">
              <div>
                <h2 className="font-sans xl:text-[5rem] lg:text-6xl md:text-[2.8rem] sm:text-5xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground pointer-events-none uppercase select-none text-balance">
                  Ready to transform your
                </h2>
                <h2 className="font-sans xl:text-[5rem] lg:text-6xl md:text-[2.8rem] sm:text-5xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground pointer-events-none uppercase select-none text-balance">
                  <span className="md:text-right md:block">digital presence?</span>
                </h2>
              </div>
            </div>

            <div className="mt-6 px-4">
              <div className="inline-grid sm:w-fit sm:grid-cols-[max-content_max-content] w-full grid-cols-1 gap-4 mt-6">
                <button
                  onClick={handleScheduleCall}
                  className="group flex items-center justify-between gap-2 border border-border hover:border-muted-foreground transition-colors px-6 py-3 backdrop-blur-[2px] bg-foreground text-background relative"
                >
                  Schedule a call
                  <ArrowIcon inverted />
                </button>
                <a
                  href="mailto:hello@magadh.studio"
                  className="group flex items-center justify-between gap-2 border border-border hover:border-muted-foreground backdrop-blur-[2px] transition-colors px-6 py-3 bg-transparent"
                >
                  Start a project
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
