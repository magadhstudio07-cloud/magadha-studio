import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, ChevronDown } from "lucide-react";
import ArrowIcon from "./ArrowIcon";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background"
    >
      <section className="container">
        <div className="border-x border-border relative h-16">
          <nav className="relative h-full flex justify-between">
            {/* Logo */}
            <div className="w-[215px] lg:border-e h-full border-border">
              <a 
                href="/" 
                className="h-full items-center px-4 inline-flex group transition-colors lg:hover:bg-primary/5"
              >
                <span className="text-sm font-bold tracking-[0.2em] uppercase">
                  MAGADH<span className="font-normal tracking-normal ml-1 text-muted-foreground">STUDIO</span>
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="flex-1 flex justify-center">
              <NavigationMenu className="hidden lg:flex h-full">
                <NavigationMenuList className="h-full">
                  <NavigationMenuItem className="flex h-16">
                    <NavigationMenuLink
                      href="#work"
                      className="h-full flex group inline-flex w-max items-center justify-center bg-background px-5 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                    >
                      Case Studies
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="flex h-16">
                    <NavigationMenuTrigger className="h-full rounded-none bg-background px-5 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-1 p-2">
                        <li>
                          <NavigationMenuLink
                            href="#services"
                            className="block select-none space-y-1 rounded-none p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Web Development</div>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            href="#services"
                            className="block select-none space-y-1 rounded-none p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Branding & Identity</div>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            href="#services"
                            className="block select-none space-y-1 rounded-none p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">UI/UX Design</div>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            href="#services"
                            className="block select-none space-y-1 rounded-none p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Digital Strategy</div>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Get in touch */}
            <div className="w-[215px] border-s border-border flex md:block">
              <a 
                href="#contact"
                className="hidden lg:flex h-full w-full items-center justify-center group transition-colors hover:bg-primary/5"
              >
                <span className="group font-medium flex items-center gap-4">
                  Get in touch
                  <ArrowIcon />
                </span>
              </a>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center justify-end h-full w-full absolute right-0 top-0 bottom-0">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <button 
                    type="button" 
                    className="size-16 hover:bg-accent flex items-center justify-center border-s border-border"
                    aria-label="Open menu"
                  >
                    <Menu className="h-6 w-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-[400px] p-0">
                  <div className="flex flex-col h-full pt-16">
                    <nav className="flex-1">
                      <a 
                        href="#work" 
                        className="block px-6 py-4 text-lg border-b border-border hover:bg-accent transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Case Studies
                      </a>
                      <a 
                        href="#services" 
                        className="block px-6 py-4 text-lg border-b border-border hover:bg-accent transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Services
                      </a>
                      <a 
                        href="#contact" 
                        className="block px-6 py-4 text-lg border-b border-border hover:bg-accent transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Get in touch
                      </a>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </section>
    </motion.header>
  );
};

export default Header;
