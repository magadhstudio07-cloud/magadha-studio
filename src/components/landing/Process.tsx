import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We learn about your goals, users, and technical requirements through in-depth discussions.",
  },
  {
    number: "02",
    title: "Design",
    description: "We plan the architecture, components, and user experience with detailed specifications.",
  },
  {
    number: "03",
    title: "Build",
    description: "We develop your product with clean, maintainable code and regular progress updates.",
  },
  {
    number: "04",
    title: "Ship",
    description: "We deploy, test, and ensure everything runs smoothly with ongoing support.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight uppercase">
            How We Work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-8"
            >
              <span className="text-xs font-medium text-muted-foreground">
                {step.number}
              </span>
              <h3 className="mt-4 text-xl font-medium uppercase tracking-wide">{step.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
