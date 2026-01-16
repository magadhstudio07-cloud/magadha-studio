import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-16 border-t border-border"
    >
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <a href="/" className="text-lg font-semibold tracking-tight">
              magadh<span className="text-primary">.studio</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              A frontend studio that builds fast, scalable, and user-focused 
              web experiences for startups and growing teams.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Contact</h4>
            <a
              href="mailto:hello@magadh.studio"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              hello@magadh.studio
            </a>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} magadh.studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
