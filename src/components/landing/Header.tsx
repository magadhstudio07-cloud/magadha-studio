import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border"
    >
      <div className="container flex items-center h-14">
        {/* Logo */}
        <a href="/" className="text-sm font-bold tracking-[0.2em] uppercase border-r border-border pr-6 mr-6">
          MAGADH<span className="font-normal tracking-normal ml-1 text-muted-foreground">STUDIO</span>
        </a>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 flex-1">
          <a href="#work" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
            Case Studies
          </a>
          <a href="#services" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
            Services
          </a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4 ml-auto">
          <ThemeToggle />
          <a 
            href="#contact"
            className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
