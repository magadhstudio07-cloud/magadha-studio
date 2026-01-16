import { motion } from "framer-motion";

const TrustSection = () => {
  return (
    <section className="py-20 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-lg md:text-xl leading-relaxed text-foreground">
            We build with a curated stack of modern technologies and frameworks that we{" "}
            <em className="text-accent font-medium">actually</em>{" "}
            <strong>believe</strong> in.
          </p>
          <p className="mt-4 text-lg md:text-xl leading-relaxed text-muted-foreground">
            These technologies helped us scale businesses, like yours, to hundreds of thousands of users, 
            optimized core metrics, and created experiences second-to-none.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
