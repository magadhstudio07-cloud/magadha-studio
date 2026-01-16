import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Fintech Dashboard",
    description: "A real-time analytics platform for a Series A fintech startup. Reduced load time by 60% and improved user engagement metrics across the board.",
    stack: ["React", "TypeScript", "TanStack Query"],
  },
  {
    name: "SaaS Onboarding",
    description: "Complete redesign of user onboarding flow. Increased activation rate by 35% through optimized user journeys and micro-interactions.",
    stack: ["Next.js", "Framer Motion", "Tailwind"],
  },
  {
    name: "E-commerce Platform",
    description: "Headless commerce frontend with sub-second page loads and optimized checkout flow, directly increasing conversion rates.",
    stack: ["React", "GraphQL", "Stripe"],
  },
];

const FeaturedWork = () => {
  return (
    <section id="work" className="border-t border-border grid-bg">
      <div className="container py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-xs font-medium uppercase tracking-[0.3em]">
            Work
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-medium">
            Case Studies
          </h2>
        </motion.div>
      </div>

      <div className="border-t border-border">
        {projects.map((project, index) => (
          <motion.a
            key={project.name}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group block border-b border-border hover:bg-secondary/30 transition-colors"
          >
            <div className="container py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="text-xl md:text-2xl font-medium">{project.name}</h3>
                  <ArrowUpRight className="h-5 w-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 border border-border text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
