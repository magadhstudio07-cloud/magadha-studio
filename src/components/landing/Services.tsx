import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: "F",
    title: "Frontend Development",
    description: "From the latest in React Server Components to tried and tested patterns that help you scale your website, we don't do half measures. Get in touch to find out how we can help for your business.",
  },
  {
    icon: "U",
    title: "UI Implementation",
    description: "Pixel-perfect translation of designs into responsive, accessible interfaces. We provide cutting-edge development to increase your content velocity and smash core metrics.",
  },
  {
    icon: "A",
    title: "API Integration",
    description: "Seamless connection to backends, third-party services, and data sources. Building structure that scales beautifully, with performance to boot.",
  },
  {
    icon: "P",
    title: "Performance Optimization",
    description: "Core Web Vitals improvements, bundle optimization, and speed enhancements. Let's get you on the fast track to success.",
  },
];

const Services = () => {
  return (
    <section id="services" className="border-t border-border">
      {/* Intro text */}
      <div className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-md"
        >
          <p className="text-lg leading-relaxed">
            We build with a curated stack of modern technologies and frameworks that we{" "}
            <em className="text-accent">actually</em>{" "}
            <strong>believe</strong> in.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            These technologies helped us scale businesses, like yours, to hundreds of thousands of pages, 
            and created experiences second-to-none.
          </p>
        </motion.div>
      </div>

      {/* Services grid */}
      <div className="grid md:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group border-t border-border grid-bg p-8 md:p-12 hover:bg-secondary/30 transition-colors cursor-pointer"
          >
            <div className="flex flex-col">
              {/* Large letter icon with line styling */}
              <div className="mb-8 relative w-32 h-32 flex items-center justify-center">
                <span className="text-[100px] font-light text-muted-foreground/20 leading-none select-none"
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
