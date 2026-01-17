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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="contact" className="container" aria-labelledby="cta-heading">
      <div className="relative border-x-0">
        <GridBackground />
        <div className="relative min-h-[500px] lg:h-[600px] flex flex-col justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="md:container z-[1]"
          >
            <div className="px-4">
              <motion.h2
                variants={itemVariants}
                id="cta-heading"
                className="font-sans xl:text-[5rem] lg:text-6xl md:text-[2.8rem] sm:text-5xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground pointer-events-none uppercase select-none text-balance"
              >
                Ready to transform your
              </motion.h2>
              <motion.h2
                variants={itemVariants}
                className="font-sans xl:text-[5rem] lg:text-6xl md:text-[2.8rem] sm:text-5xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground pointer-events-none uppercase select-none text-balance"
              >
                <span className="md:text-right md:block">digital presence?</span>
              </motion.h2>
            </div>

            <div className="mt-6 px-4">
              <motion.div
                variants={itemVariants}
                className="inline-grid sm:w-fit sm:grid-cols-[max-content_max-content] w-full grid-cols-1 gap-4 mt-6"
              >
                <motion.button
                  onClick={handleScheduleCall}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-between gap-2 border border-border hover:border-muted-foreground transition-colors px-6 py-3 backdrop-blur-[2px] bg-foreground text-background relative"
                >
                  Schedule a call
                  <ArrowIcon inverted />
                </motion.button>
                <motion.a
                  href="mailto:hello@magadh.studio"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-between gap-2 border border-border hover:border-muted-foreground backdrop-blur-[2px] transition-colors px-6 py-3 bg-transparent"
                >
                  Start a project
                  <ArrowIcon />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
