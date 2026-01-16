import { motion } from "framer-motion";

const reasons = [
  {
    title: "Clean, scalable code",
    description: "Well-structured, documented, and easy to maintain for years to come.",
  },
  {
    title: "Performance-first approach",
    description: "Every decision optimized for speed, efficiency, and core web vitals.",
  },
  {
    title: "Clear communication",
    description: "Regular updates, honest timelines, and no surprises along the way.",
  },
  {
    title: "Reliable delivery",
    description: "We ship on time, every time. Your deadlines are our deadlines.",
  },
];

const WhyUs = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent text-xs font-medium uppercase tracking-[0.3em]">
              Why Us
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-medium">
              Why Magadh.Studio
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We focus on what matters: building products that work beautifully and perform exceptionally.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-accent pl-6"
              >
                <h3 className="font-medium mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
