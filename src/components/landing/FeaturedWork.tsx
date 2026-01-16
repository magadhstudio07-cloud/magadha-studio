import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Fintech Dashboard",
    description: "A real-time analytics platform for a Series A fintech startup. Reduced load time by 60%.",
    stack: ["React", "TypeScript", "TanStack Query", "Recharts"],
  },
  {
    name: "SaaS Onboarding",
    description: "Complete redesign of user onboarding flow. Increased activation rate by 35%.",
    stack: ["Next.js", "Framer Motion", "Tailwind CSS"],
  },
  {
    name: "E-commerce Storefront",
    description: "Headless commerce frontend with sub-second page loads and optimized checkout.",
    stack: ["React", "GraphQL", "Stripe", "Vercel"],
  },
];

const FeaturedWork = () => {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Work</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Selected work
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Projects that delivered real results for our clients.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-medium">{project.name}</h3>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:text-primary transition-all duration-300" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
