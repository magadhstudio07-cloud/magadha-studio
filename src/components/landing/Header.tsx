import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="text-lg font-semibold tracking-tight text-foreground">
          magadh<span className="text-primary">.studio</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Work
          </a>
          <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Process
          </a>
        </nav>

        <Button size="sm" className="font-medium bg-primary text-primary-foreground hover:bg-primary/90 glow-sm">
          Start a project
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;
