import { motion } from "framer-motion";
import { Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import GridBackground from "@/components/landing/GridBackground";

const teamMembers = [
  {
    name: "Sujay Singh",
    role: "Co-Founder & Lead Engineer",
    bio: "Full-stack architect with deep expertise in building scalable web platforms, mobile applications, and AI-driven systems. Sujay leads technical strategy and ensures every project is engineered for performance and growth.",
    initials: "SS",
    linkedin: "https://www.linkedin.com/in/sujay-fullstack/",
    twitter: "#",
  },
  {
    name: "Praveen Sharma",
    role: "Co-Founder & Product Strategist",
    bio: "Product visionary focused on transforming complex business challenges into elegant digital experiences. Praveen drives client success, product direction, and the seamless integration of design with technology.",
    initials: "PS",
    linkedin: "https://www.linkedin.com/in/praveen-sharma-262911112/",
    twitter: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const Team = () => {
  return (
    <>
      <SEO
        title="Our Team | Magadha Studio"
        description="Meet the founders of Magadha Studio — Sujay Singh and Praveen Sharma. We build digital empires for ambitious startups and growing brands."
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          {/* Hero */}
          <section className="container">
            <div className="border-x border-border relative">
              <GridBackground />
              <div className="relative z-10 min-h-[400px] lg:h-[450px] flex flex-col justify-center py-16 px-4 md:px-8 lg:px-12">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={containerVariants}
                  className="max-w-3xl"
                >
                  <motion.span
                    variants={itemVariants}
                    className="inline-block px-4 py-1.5 border border-accent/50 text-accent text-xs font-medium uppercase tracking-[0.2em] mb-6"
                  >
                    The Founders
                  </motion.span>
                  <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-[1.1] mb-6"
                  >
                    Architects of Your
                    <br />
                    <span className="text-muted-foreground">Digital Empire</span>
                  </motion.h1>
                  <motion.p
                    variants={itemVariants}
                    className="text-lg text-muted-foreground max-w-xl leading-relaxed"
                  >
                    Two founders. One mission. We combine engineering excellence with product strategy to help startups build platforms that scale.
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Team Members */}
          <section className="container">
            <div className="border-x border-border relative">
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                {teamMembers.map((member, index) => (
                  <motion.article
                    key={member.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="p-8 md:p-12 lg:p-16 group hover:bg-secondary/20 transition-colors"
                  >
                    {/* Profile Image Placeholder */}
                    <div className="mb-8">
                      <div className="w-40 h-40 lg:w-48 lg:h-48 bg-secondary border border-border flex items-center justify-center overflow-hidden">
                        <span className="text-4xl lg:text-5xl font-bold text-muted-foreground/40 uppercase tracking-tight">
                          {member.initials}
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
                          {member.name}
                        </h2>
                        <p className="text-sm text-accent mt-1 uppercase tracking-wider">
                          {member.role}
                        </p>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {member.bio}
                      </p>

                      {/* Social Links */}
                      <div className="flex items-center gap-4 pt-4">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                          LinkedIn
                        </a>
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Twitter className="h-4 w-4" />
                          X
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="container">
            <div className="border-x border-border border-t relative">
              <div className="py-16 px-4 md:px-8 lg:px-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-2">
                      Work with us
                    </h2>
                    <p className="text-muted-foreground">
                      Ready to build something extraordinary? Let's talk.
                    </p>
                  </div>
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background text-sm font-medium hover:bg-accent transition-colors"
                  >
                    Start a project
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Team;
