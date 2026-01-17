import { motion } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const ArrowIcon = () => (
  <div className="group relative h-4 w-4 overflow-hidden">
    <div className="grid h-full w-full grid-cols-5 grid-rows-5">
      <div className="col-start-2 row-start-1 h-full w-full group-hover:animate-pulse bg-foreground" />
      <div className="col-start-3 row-start-2 h-full w-full group-hover:animate-pulse bg-foreground" />
      <div className="col-start-4 row-start-3 h-full w-full group-hover:animate-pulse bg-foreground" />
      <div className="col-start-3 row-start-4 h-full w-full group-hover:animate-pulse bg-foreground" />
      <div className="col-start-2 row-start-5 h-full w-full group-hover:animate-pulse bg-foreground" />
    </div>
  </div>
);

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background"
    >
      {/* Screen reader navigation */}
      <nav aria-label="Primary Hidden Navigation" className="sr-only">
        <ul>
          <li>
            <a href="#work">Case Studies</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#process">Blog</a>
          </li>
          <li>
            <a href="#contact">Get in touch</a>
          </li>
        </ul>
      </nav>

      {/* Top border section */}
      <section className="container">
        <div className="border-x border-border relative h-4" />
      </section>

      <hr className="border-border" />

      {/* Main navigation */}
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

            {/* Center navigation */}
            <div className="flex-1 flex justify-center">
              <NavigationMenu className="hidden lg:flex h-full">
                <NavigationMenuList className="h-full">
                  <NavigationMenuItem className="flex h-16">
                    <NavigationMenuLink
                      href="#work"
                      className="h-full flex items-center px-5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      Case Studies
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="flex h-16">
                    <NavigationMenuTrigger className="h-full rounded-none bg-background px-5 text-sm font-medium hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent/50">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        <li>
                          <NavigationMenuLink
                            href="#services"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Web Development</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Custom websites and web applications
                            </p>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            href="#services"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">UI/UX Design</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Beautiful and intuitive interfaces
                            </p>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="flex h-16">
                    <NavigationMenuLink
                      href="#process"
                      className="h-full flex items-center px-5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      Blog
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right side - Get in touch */}
            <div className="w-[215px] border-s border-border flex">
              <a
                href="#contact"
                className="hidden lg:flex h-full w-full items-center justify-center group transition-colors hover:bg-primary/5"
              >
                <span className="font-medium flex items-center gap-4 text-sm">
                  Get in touch
                  <ArrowIcon />
                </span>
              </a>

              {/* Theme toggle - visible on desktop */}
            </div>

            {/* Mobile menu */}
            <div className="lg:hidden flex items-center justify-end h-full">
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    type="button"
                    className="size-16 hover:bg-accent flex items-center justify-center border-s border-border"
                    aria-label="Open menu"
                  >
                    <Menu className="h-6 w-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-[400px]">
                  <nav className="flex flex-col gap-4 mt-8">
                    <a href="#work" className="text-lg font-medium py-2 hover:text-muted-foreground transition-colors">
                      Case Studies
                    </a>
                    <a
                      href="#services"
                      className="text-lg font-medium py-2 hover:text-muted-foreground transition-colors"
                    >
                      Services
                    </a>
                    <a
                      href="#process"
                      className="text-lg font-medium py-2 hover:text-muted-foreground transition-colors"
                    >
                      Blog
                    </a>
                    <a
                      href="#contact"
                      className="text-lg font-medium py-2 hover:text-muted-foreground transition-colors"
                    >
                      Get in touch
                    </a>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </section>

      <hr className="border-border" />

      {/* Bottom border section */}
      <section className="container">
        <div className="border-x border-border relative h-0" />
      </section>
    </motion.header>
  );
};

export default Header;
