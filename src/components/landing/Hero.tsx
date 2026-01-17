import { motion } from "framer-motion";
import GridBackground from "./GridBackground";
import ArrowIcon from "./ArrowIcon";

const Hero = () => {
  return (
    <section className="container">
      <div className="relative border-x-0">
        <GridBackground />
        <div className="relative min-h-[600px] lg:h-[700px] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:container z-[1]"
          >
            <div className="px-4">
              <div>
                <h1 className="font-sans xl:text-[5rem] lg:text-6xl md:text-[2.8rem] sm:text-5xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground pointer-events-none uppercase select-none text-balance">
                  We craft digital experiences
                </h1>
                <h1 className="font-sans xl:text-[5rem] lg:text-6xl md:text-[2.8rem] sm:text-5xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground pointer-events-none uppercase select-none text-balance">
                  <span className="md:text-right md:block">that drive growth</span>
                </h1>
              </div>
            </div>

            <div className="mt-6 px-4">
              <div className="inline-grid sm:w-fit sm:grid-cols-[max-content_max-content] w-full grid-cols-1 gap-4 mt-6">
                <a
                  href="#contact"
                  className="group flex items-center justify-between gap-2 border border-border hover:border-muted-foreground transition-colors px-6 py-3 backdrop-blur-[2px] bg-foreground text-background relative"
                >
                  Book a meeting
                  <ArrowIcon inverted />
                </a>
                <a
                  href="#work"
                  className="group flex items-center justify-between gap-2 border border-border hover:border-muted-foreground backdrop-blur-[2px] transition-colors px-6 py-3 bg-transparent"
                >
                  View our work
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

export default Hero;
