import { motion } from "framer-motion";

const clients = [
  "TechCorp",
  "StartupX",
  "FinanceHub",
  "GreenBrand",
  "MediaFlow",
  "HealthPlus",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const Clients = () => {
  return (
    <section className="py-16 border-t border-border" aria-labelledby="clients-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span id="clients-heading" className="text-xs text-muted-foreground uppercase tracking-[0.3em]">
            Trusted by innovative brands
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12"
        >
          {clients.map((client) => (
            <motion.div
              key={client}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center py-4"
            >
              <span className="text-lg font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                {client}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
