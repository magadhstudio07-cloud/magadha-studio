import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-balance">
            We build interfaces that convert and scale.
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            A frontend studio for startups and growing teams. Fast, 
            scalable, and focused on results.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="font-medium group">
              Start a project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="font-medium">
              View work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
