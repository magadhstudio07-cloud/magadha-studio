import { motion } from "framer-motion";
import GridBackground from "./GridBackground";
import ArrowIcon from "./ArrowIcon";

const Hero = () => {
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

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="container">
      <div className="border-border relative border-x-0">
        <GridBackground />
        <div className="relative min-h-[600px] lg:h-[700px] flex flex-col justify-center">
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="md:container z-[1]">
            <div className="px-4">
              <div>
                <motion.h1
                  variants={itemVariants}
                  className="font-sans xl:text-[4rem] lg:text-6xl md:text-[2.8rem] sm:text-5xl text-5xl font-bold leading-[1.1] tracking-tight text-foreground pointer-events-none uppercase select-none text-balance"
                >
                  We build the best editorial
                </motion.h1>
                <motion.h1
                  variants={itemVariants}
                  className="font-sans xl:text-[5rem] lg:text-6xl md:text-[2.8rem] sm:text-5xl text-5xl font-bold leading-[1.1] tracking-tight text-foreground pointer-events-none uppercase select-none text-balance"
                >
                  <span className="md:text-right md:block">experiences on the web</span>
                </motion.h1>
              </div>
            </div>

            <div className="mt-6 px-4">
              <motion.div
                variants={buttonVariants}
                className="inline-grid sm:w-fit sm:grid-cols-[max-content_max-content] w-full grid-cols-1 gap-4 mt-6"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group selection:bg-muted selection:!text-foreground flex items-center justify-between gap-2 border border-border hover:border-muted-foreground transition-colors px-6 py-3 backdrop-blur-[2px] bg-foreground text-background relative"
                >
                  Book a meeting
                  <ArrowIcon inverted />
                </motion.a>
                <motion.a
                  href="#work"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-between gap-2 border border-border hover:border-muted-foreground backdrop-blur-[2px] transition-colors px-6 py-3 bg-transparent"
                >
                  View our work
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

export default Hero;
