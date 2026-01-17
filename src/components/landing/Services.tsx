import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import GridBackground from "./GridBackground";

const services = [
  {
    icon: "W",
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies. From landing pages to complex platforms, we deliver fast, scalable solutions.",
  },
  {
    icon: "B",
    title: "Branding & Identity",
    description: "Strategic brand development that captures your essence. Logo design, visual systems, and brand guidelines that make you stand out.",
  },
  {
    icon: "U",
    title: "UI/UX Design",
    description: "User-centered design that converts. We create intuitive interfaces and seamless experiences that delight your customers.",
  },
  {
    icon: "D",
    title: "Digital Strategy",
    description: "Data-driven strategies to grow your digital presence. SEO, analytics, and conversion optimization to maximize your ROI.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const Services = () => {
  return (
    <section id="services" className="border-t border-border" aria-labelledby="services-heading">
      {/* Intro text */}
      <div className="container py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-2xl"
        >
          <motion.span
            variants={itemVariants}
            className="text-accent text-xs font-medium uppercase tracking-[0.3em] block"
          >
            What We Do
          </motion.span>
          <motion.h2
            variants={itemVariants}
            id="services-heading"
            className="mt-4 text-3xl md:text-4xl font-bold tracking-tight uppercase"
          >
            Full-service digital agency
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-muted-foreground leading-relaxed"
          >
            We help ambitious brands transform their digital presence. From strategy to execution, 
            we deliver end-to-end solutions that drive real business results.
          </motion.p>
        </motion.div>
      </div>

      {/* Services grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="grid md:grid-cols-2"
      >
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            variants={itemVariants}
            whileHover={{ backgroundColor: "hsl(var(--secondary) / 0.3)" }}
            className="group border-b border-r border-border p-8 md:p-12 transition-colors cursor-pointer relative overflow-hidden"
          >
            <GridBackground />
            <div className="flex flex-col relative z-10">
              {/* Large letter icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8 relative w-24 h-24 flex items-center justify-center"
              >
                <span 
                  className="text-[80px] font-light leading-none select-none"
                  style={{
                    WebkitTextStroke: '1px hsl(var(--border))',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {service.icon}
                </span>
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-sm">
                {service.description}
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Learn more
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="w-6 h-6 rounded-full border border-border flex items-center justify-center group-hover:border-foreground transition-colors"
                >
                  <ArrowUpRight className="h-3 w-3" />
                </motion.span>
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
