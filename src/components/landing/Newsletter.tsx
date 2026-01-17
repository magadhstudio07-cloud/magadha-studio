import { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="container" id="newsletter" aria-labelledby="newsletter-heading">
      <div className="border-x border-border relative">
        <div className="border-x border-border py-8 md:py-12 lg:py-16 px-6 md:px-10 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="font-mono text-[10px] tracking-[2px] text-muted-foreground uppercase mb-4"
            >
              No spam, only good stuff
            </motion.h2>
            <motion.h3
              variants={itemVariants}
              id="newsletter-heading"
              className="text-3xl tracking-tight pb-6 text-foreground"
            >
              Subscribe to our newsletter
            </motion.h3>
            <motion.div variants={itemVariants} className="mb-4 text-balance">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground">
                  Get insights on design trends, development tips, and exclusive project breakdowns delivered to your inbox.
                </p>
                <p className="text-muted-foreground">Join 2,500+ subscribers</p>
              </div>
            </motion.div>

            {/* Avatar stack */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center mb-8"
            >
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, x: -20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1, type: "spring" }}
                  className="relative size-12 rounded-full bg-muted overflow-hidden border-2 border-background flex items-center justify-center text-muted-foreground text-sm font-medium"
                  style={{ zIndex: 5 - i, marginLeft: i === 1 ? 0 : -10 }}
                >
                  {String.fromCharCode(64 + i)}
                </motion.div>
              ))}
            </motion.div>

            {/* Email form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="flex gap-2 items-start justify-center max-w-md mx-auto">
                <div className="flex-1">
                  <label className="sr-only" htmlFor="email">
                    Email address
                  </label>
                  <input
                    className="flex border border-border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-foreground w-full h-12 rounded-none"
                    placeholder="Enter your email"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email address for newsletter"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-foreground hover:bg-foreground/90 text-background px-4 py-2 rounded-none h-12"
                  type="submit"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
