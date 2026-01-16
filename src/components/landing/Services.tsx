import { motion } from "framer-motion";
import { Code, Layers, Plug, Gauge, Wrench } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Modern React & Next.js applications built with performance and scalability in mind.",
  },
  {
    icon: Layers,
    title: "UI Implementation",
    description: "Pixel-perfect translation of designs into responsive, accessible interfaces.",
  },
  {
    icon: Plug,
    title: "API Integration",
    description: "Seamless connection to backends, third-party services, and data sources.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Core Web Vitals improvements, bundle optimization, and speed enhancements.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing updates, bug fixes, and technical support for your applications.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Services</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            What we do
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            End-to-end frontend services for modern web products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
