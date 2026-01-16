import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    letter: "F",
    title: "Frontend Development",
    description: "From the latest in React Server Components to tried and tested patterns that help you scale your website, we don't do half measures.",
  },
  {
    letter: "U",
    title: "UI Implementation",
    description: "Pixel-perfect translation of designs into responsive, accessible interfaces that perform beautifully on every device.",
  },
  {
    letter: "A",
    title: "API Integration",
    description: "Seamless connection to backends, third-party services, and data sources with robust error handling and caching.",
  },
  {
    letter: "P",
    title: "Performance Optimization",
    description: "Core Web Vitals improvements, bundle optimization, and speed enhancements that directly impact your bottom line.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 border-t border-border grid-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight uppercase">
            Our Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-background p-8 md:p-12 hover:bg-secondary/50 transition-colors cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <span className="text-[120px] md:text-[160px] font-light leading-none text-border group-hover:text-muted-foreground/30 transition-colors">
                  {service.letter}
                </span>
                <div className="pt-8">
                  <h3 className="text-lg font-medium mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
                  >
                    View service
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
