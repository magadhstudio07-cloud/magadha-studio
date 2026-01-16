import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  {
    title: "Clean, scalable code",
    description: "Well-structured, documented, and easy to maintain.",
  },
  {
    title: "Performance-first approach",
    description: "Every decision optimized for speed and efficiency.",
  },
  {
    title: "Clear communication",
    description: "Regular updates, honest timelines, no surprises.",
  },
  {
    title: "Reliable delivery",
    description: "We ship on time, every time.",
  },
];

const WhyUs = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Why mm.studio
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-md">
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
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
