import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-12 border-t border-border"
    >
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <a href="/" className="text-sm font-bold tracking-[0.2em] uppercase">
              MAGADH<span className="font-normal tracking-normal ml-1 text-muted-foreground">STUDIO</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              A full-service digital agency crafting exceptional brand experiences 
              and high-performance web solutions for ambitious businesses.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider mb-4">Services</h4>
            <div className="flex flex-col gap-2">
              <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Web Development
              </a>
              <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Branding & Identity
              </a>
              <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                UI/UX Design
              </a>
              <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Digital Strategy
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@magadh.studio"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                hello@magadh.studio
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} magadh.studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
