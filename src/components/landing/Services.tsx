import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import GridBackground from "./GridBackground";

const services = [
  {
    icon: "F",
    title: "Frontend Development",
    description: "From the latest in React Server Components to tried and tested patterns that help you scale your website, we don't do half measures.",
  },
  {
    icon: "U",
    title: "UI Implementation",
    description: "Pixel-perfect translation of designs into responsive, accessible interfaces with cutting-edge development.",
  },
  {
    icon: "A",
    title: "API Integration",
    description: "Seamless connection to backends, third-party services, and data sources with structure that scales.",
  },
  {
    icon: "P",
    title: "Performance Optimization",
    description: "Core Web Vitals improvements, bundle optimization, and speed enhancements.",
  },
];

const Services = () => {
  return (
    <section id="services" className="border-t border-border">
      {/* Services grid */}
      <div className="grid md:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group border-b border-r border-border p-8 md:p-12 hover:bg-secondary/30 transition-colors cursor-pointer relative overflow-hidden"
          >
            <GridBackground />
            <div className="flex flex-col relative z-10">
              {/* Large letter icon */}
              <div className="mb-8 relative w-24 h-24 flex items-center justify-center">
                <span 
                  className="text-[80px] font-light leading-none select-none"
                  style={{
                    WebkitTextStroke: '1px hsl(var(--border))',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {service.icon}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-sm">
                {service.description}
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                View service
                <span className="w-6 h-6 rounded-full border border-border flex items-center justify-center group-hover:border-foreground transition-colors">
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
