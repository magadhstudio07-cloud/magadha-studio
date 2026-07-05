import { motion } from "framer-motion";
import { Monitor, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="-mt-px"
    >
      <section className="container">
        <div className="border-x border-border relative border-t">
          <div className="py-12 px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {/* Magadha Studio */}
              <div>
                <h3 className="text-xs text-muted-foreground uppercase tracking-wider mb-6 font-mono">
                  Magadha Studio
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a 
                      href="/team" 
                      className="hover:text-muted-foreground transition-colors"
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className="hover:text-muted-foreground transition-colors inline-flex items-center gap-2"
                    >
                      Careers
                      <span className="text-xs px-2 py-0.5 bg-secondary rounded">Hiring</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#contact" 
                      className="hover:text-muted-foreground transition-colors"
                    >
                      Get in touch
                    </a>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-xs text-muted-foreground uppercase tracking-wider mb-6 font-mono">
                  Services
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a 
                      href="#services" 
                      className="hover:text-muted-foreground transition-colors"
                    >
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#services" 
                      className="hover:text-muted-foreground transition-colors"
                    >
                      Branding & Identity
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#services" 
                      className="hover:text-muted-foreground transition-colors"
                    >
                      UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#services" 
                      className="hover:text-muted-foreground transition-colors"
                    >
                      Digital Strategy
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-xs text-muted-foreground uppercase tracking-wider mb-6 font-mono">
                  Social
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a 
                      href="https://www.linkedin.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-muted-foreground transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://x.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-muted-foreground transition-colors"
                    >
                      X
                    </a>
                  </li>
                </ul>
              </div>

              {/* Theme Switcher */}
              <div className="md:flex md:flex-col md:items-start">
                <h3 className="text-xs text-muted-foreground uppercase tracking-wider mb-6 font-mono">
                  Theme
                </h3>
                <div className="grid grid-cols-3 border rounded-none w-[180px] overflow-hidden border-border">
                  <button
                    type="button"
                    onClick={() => setTheme("system")}
                    className={`flex h-10 items-center justify-center py-2 px-3 transition-colors ${
                      theme === "system" 
                        ? "bg-secondary text-foreground" 
                        : "bg-background text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                    title="System theme"
                  >
                    <Monitor className="h-4 w-4" />
                    <span className="sr-only">System theme</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme("light")}
                    className={`flex h-10 items-center justify-center py-2 px-3 transition-colors ${
                      theme === "light" 
                        ? "bg-secondary text-foreground" 
                        : "bg-background text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                    title="Light theme"
                  >
                    <Sun className="h-4 w-4" />
                    <span className="sr-only">Light theme</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme("dark")}
                    className={`flex h-10 items-center justify-center py-2 px-3 transition-colors ${
                      theme === "dark" 
                        ? "bg-secondary text-foreground" 
                        : "bg-background text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                    title="Dark theme"
                  >
                    <Moon className="h-4 w-4" />
                    <span className="sr-only">Dark theme</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-border" />

      <section className="container">
        <div className="border-x border-border relative">
          <div className="py-6 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <a 
                  href="#" 
                  className="hover:text-foreground transition-colors"
                >
                  Privacy policy
                </a>
                <span className="hidden md:inline">•</span>
                <a 
                  href="#" 
                  className="hover:text-foreground transition-colors"
                >
                  Terms of use
                </a>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-sm text-muted-foreground">
                  <span>© {new Date().getFullYear()} magadh.studio</span>
                  <span className="mx-2">•</span>
                  <span>All rights reserved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.footer>
  );
};

export default Footer;
