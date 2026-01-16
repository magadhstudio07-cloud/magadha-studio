import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border"
    >
      <div className="container flex items-center justify-between h-14">
        <a href="/" className="text-sm font-bold tracking-[0.2em] uppercase">
          MAGADH<span className="font-normal tracking-normal ml-1 text-muted-foreground">STUDIO</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#work" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
            Case Studies
          </a>
          <a href="#services" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
            Services
          </a>
          <a href="#process" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
            Blog
          </a>
        </nav>

        <a 
          href="#contact"
          className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
        >
          Get in touch
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
