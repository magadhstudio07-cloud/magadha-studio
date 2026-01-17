import { motion } from "framer-motion";

const clients = [
  "TechCorp",
  "StartupX",
  "FinanceHub",
  "GreenBrand",
  "MediaFlow",
  "HealthPlus",
];

const Clients = () => {
  return (
    <section className="py-16 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-[0.3em]">
            Trusted by innovative brands
          </span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center py-4"
            >
              <span className="text-lg font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
