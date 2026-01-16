import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We learn about your goals, users, and technical requirements.",
  },
  {
    number: "02",
    title: "Design",
    description: "We plan the architecture, components, and user experience.",
  },
  {
    number: "03",
    title: "Build",
    description: "We develop your product with clean, maintainable code.",
  },
  {
    number: "04",
    title: "Ship",
    description: "We deploy, test, and ensure everything runs smoothly.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            How we work
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A straightforward process designed for efficiency and clarity.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <span className="text-sm font-medium text-muted-foreground">
                {step.number}
              </span>
              <h3 className="mt-2 text-xl font-medium">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
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
