import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import GridBackground from "./GridBackground";

const projects = [
  {
    name: "TechFlow AI",
    description: "Migrating hundreds of pages, re-platforming and extending for a leading AI integration platform",
    tags: ["React", "Next.js", "Vercel"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=720&h=540&fit=crop&auto=format",
  },
  {
    name: "Verde Organic",
    description: "Complete e-commerce platform with custom product configurator and subscription management",
    tags: ["Shopify", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=720&h=540&fit=crop&auto=format",
  },
  {
    name: "FinanceHub",
    description: "Enterprise dashboard redesign with real-time data visualization and reporting tools",
    tags: ["TypeScript", "D3.js", "AWS"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=720&h=540&fit=crop&auto=format",
  },
  {
    name: "HealthTech Pro",
    description: "HIPAA-compliant patient portal with telehealth integration and appointment scheduling",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=720&h=540&fit=crop&auto=format",
  },
];

const FeaturedProjects = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="container" id="work">
      {/* Section header */}
      <div className="border-x border-border relative">
        <div className="w-full border-y border-border py-6 -my-px">
          <h2 className="text-center font-mono text-[10px] tracking-[2px] text-muted-foreground uppercase">
            Our featured projects
          </h2>
        </div>
      </div>

      {/* Projects accordion */}
      <div className="border-x border-border relative">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Project image */}
          <a href="#" className="block relative overflow-hidden">
            <motion.img
              key={openIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              alt={projects[openIndex].name}
              src={projects[openIndex].image}
              className="size-full object-cover transition-opacity hover:opacity-90 dark:hover:opacity-85"
            />
          </a>

          {/* Accordion */}
          <div className="flex flex-col justify-between h-full">
            <div className="divide-y divide-border flex-grow">
              {projects.map((project, index) => (
                <div
                  key={project.name}
                  className="border-0 py-0 relative"
                >
                  {/* Corner decorations for open item */}
                  {openIndex === index && (
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute inset-0 bg-dot-zinc-300 dark:bg-dot-zinc-700 [mask-image:linear-gradient(to_bottom_right,black_10%,transparent_20%,transparent_80%,black_90%)] opacity-30" />
                      {/* Corner crosses */}
                      {[
                        "-top-[12.5px] -left-[12.5px]",
                        "-top-[12.5px] -right-[12.5px]",
                        "-bottom-[12.5px] -left-[12.5px]",
                        "-bottom-[12.5px] -right-[12.5px]",
                      ].map((position, i) => (
                        <div
                          key={i}
                          className={`size-6 flex items-center justify-center absolute z-[1] ${position}`}
                        >
                          <div className="absolute h-4 w-px bg-muted-foreground/50" />
                          <div className="absolute h-px w-4 bg-muted-foreground/50" />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Accordion header */}
                  <button
                    onClick={() => setOpenIndex(index)}
                    className={`w-full flex flex-1 items-center justify-between transition-all text-left px-8 md:px-12 py-6 text-xl font-normal hover:no-underline z-10 cursor-pointer transition-colors ${
                      openIndex === index
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {project.name}
                    {openIndex !== index && (
                      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                    )}
                  </button>

                  {/* Accordion content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-0 px-8 md:px-12 pb-8 space-y-6 relative">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 my-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-normal transition-colors bg-foreground border-border text-background"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="text-base text-foreground mt-2">
                        {project.description}
                      </p>

                      <a href="#" className="inline-block">
                        <span className="group inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mt-4">
                          View case study
                          <span className="ml-2 inline-flex size-[30px] items-center justify-center rounded-full bg-muted border border-border group-hover:border-muted-foreground transition-colors duration-200">
                            <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition-all duration-200" />
                          </span>
                        </span>
                      </a>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* View all link with grid background */}
            <div className="relative grid grid-cols-[1fr_max-content] border-t border-border h-[78px] overflow-hidden">
              <div className="relative">
                <GridBackground className="opacity-50" />
              </div>
              <div className="flex items-center justify-center p-4">
                <a href="#" className="group inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  View all case studies
                  <span className="ml-2 inline-flex size-[30px] items-center justify-center rounded-full bg-muted border border-border group-hover:border-muted-foreground transition-colors duration-200">
                    <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition-all duration-200" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
