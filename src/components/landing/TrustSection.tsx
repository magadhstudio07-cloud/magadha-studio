import { motion } from "framer-motion";

const logos = [
  { name: "Acme", width: "w-20" },
  { name: "Quantum", width: "w-24" },
  { name: "Pulse", width: "w-16" },
  { name: "Apex", width: "w-20" },
  { name: "Nova", width: "w-16" },
];

const TrustSection = () => {
  return (
    <section className="py-16 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground text-center mb-10">
            Trusted by founders and growing teams
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className={`${logo.width} h-8 bg-card border border-border rounded-md flex items-center justify-center`}
              >
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
