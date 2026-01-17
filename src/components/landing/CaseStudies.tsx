import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "TechFlow",
    category: "SaaS Platform",
    description: "Complete brand identity and web platform for a B2B automation startup.",
    metrics: "3x conversion increase",
  },
  {
    title: "Verde Organic",
    category: "E-commerce",
    description: "E-commerce redesign and digital strategy for sustainable skincare brand.",
    metrics: "150% revenue growth",
  },
  {
    title: "FinanceHub",
    category: "Fintech App",
    description: "Mobile-first web application for personal finance management.",
    metrics: "50k+ active users",
  },
];

const CaseStudies = () => {
  return (
    <section id="work" className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-accent text-xs font-medium uppercase tracking-[0.3em]">
              Selected Work
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight uppercase">
              Case Studies
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-border p-8 md:p-12 hover:bg-secondary/30 transition-colors cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-2xl md:text-3xl font-bold uppercase">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground max-w-lg">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <span className="text-accent text-lg font-semibold">
                      {project.metrics}
                    </span>
                  </div>
                  <span className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
