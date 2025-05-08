"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ChevronRight, Menu, X, ArrowRight } from "lucide-react";

// Refined navigation structure with optional mega-menu support
const navigationItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
    megaMenu: [
      {
        title: "Strategic Advisory",
        items: [
          { name: "Business Strategy", href: "/services#business-strategy" },
          { name: "Transaction Advisory", href: "/services#transaction-advisory" },
          { name: "Deal Origination", href: "/services#deal-origination" },
        ],
      },
      {
        title: "Financial Solutions",
        items: [
          { name: "Capital Sourcing", href: "/services#capital-sourcing" },
          { name: "Financial Modelling", href: "/services#financial-modelling" },
          { name: "Due Diligence", href: "/services#due-diligence" },
        ],
      },
      {
        title: "Research & Analysis",
        items: [
          { name: "Market Research", href: "/services#market-research" },
          { name: "Competitive Analysis", href: "/services#competitive-analysis" },
        ],
      },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarStyle, setNavbarStyle] = useState<"expanded" | "compact">("expanded");
  const { scrollY } = useScroll();
  const navbarRef = useRef<HTMLDivElement>(null);

  // Detect scroll position and update navbar style
  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrollThreshold = 100;
    if (latest > scrollThreshold && navbarStyle === "expanded") {
      setNavbarStyle("compact");
    } else if (latest <= scrollThreshold && navbarStyle === "compact") {
      setNavbarStyle("expanded");
    }
  });

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveMegaMenu(null);
  }, [pathname]);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMegaMenuToggle = (name: string) => {
    setActiveMegaMenu(prev => prev === name ? null : name);
  };

  return (
    <div ref={navbarRef} className="z-50">
      {/* Main Desktop Navigation */}
      <motion.header
        initial={false}
        animate={navbarStyle === "expanded" ? "expanded" : "compact"}
        variants={{
          expanded: {
            height: "120px",
            backgroundColor: "rgba(10, 10, 30, 0)",
            boxShadow: "none",
          },
          compact: {
            height: "80px",
            backgroundColor: "rgba(8, 10, 40, 0.95)",
            boxShadow: "0 5px 30px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(10px)",
          }
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 hidden lg:block"
      >
        <div className="container mx-auto h-full px-6">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.div
                variants={{
                  expanded: { scale: 1.0 },
                  compact: { scale: 0.85 }
                }}
              >
                <Image
                  src="/memphislogo.png"
                  alt="Memphis Capital Logo" 
                  width={90}
                  height={90}
                  className=""
                  priority
                  unoptimized={true}
                />
              </motion.div>
            </Link>

            {/* Main Navigation */}
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    onMouseEnter={() => item.megaMenu && handleMegaMenuToggle(item.name)}
                    onClick={() => item.megaMenu ? handleMegaMenuToggle(item.name) : null}
                    className={`relative px-5 py-2 mx-1 text-base font-medium transition-all duration-300 
                      ${pathname === item.href ? 'text-primary' : 'text-white hover:text-primary'}`}
                  >
                    <Link href={item.href} className="flex items-center">
                      {item.name}
                      {item.megaMenu && (
                        <motion.span
                          animate={{ rotate: activeMegaMenu === item.name ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-1 opacity-70"
                        >
                          <ChevronRight size={14} className="rotate-90" />
                        </motion.span>
                      )}
                    </Link>
                    
                    {/* Animated underline for active state */}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="navbar-active-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>

                  {/* Mega Menu Panel */}
                  {item.megaMenu && (
                    <AnimatePresence>
                      {activeMegaMenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 right-0 mt-2 w-screen max-w-5xl -translate-x-1/3"
                          onMouseLeave={() => setActiveMegaMenu(null)}
                        >
                          {/* Mega Menu Content */}
                          <div className="bg-background/95 backdrop-blur-lg border border-border/40 rounded-lg shadow-xl p-6 grid grid-cols-3 gap-6">
                            {item.megaMenu.map((section, idx) => (
                              <div key={idx} className="space-y-4">
                                <h3 className="text-primary font-medium text-sm tracking-wider uppercase">{section.title}</h3>
                                <ul className="space-y-2">
                                  {section.items.map((subItem) => (
                                    <li key={subItem.name}>
                                      <Link 
                                        href={subItem.href}
                                        className="text-foreground hover:text-primary transition-colors duration-200 flex items-center py-1 text-sm"
                                      >
                                        <span>{subItem.name}</span>
                                        <ArrowRight size={12} className="ml-1 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-5">            
              
              <Link href="/contact">
                <motion.button
                  variants={{
                    expanded: {
                      paddingLeft: "24px",
                      paddingRight: "24px",
                    },
                    compact: {
                      paddingLeft: "20px",
                      paddingRight: "20px",
                    }
                  }}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-2.5 font-medium text-sm transition-all hover:shadow-lg hover:shadow-primary/20"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 lg:hidden">
        <div className="bg-background/95 backdrop-blur-md border-b border-border/40 py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            {/* Mobile Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/memphislogo.png"
                alt="Memphis Capital Logo" 
                width={150}
                height={40}
                className="h-12 w-auto"
                unoptimized={true}
                priority
              />
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className="p-2 text-white hover:text-primary rounded-md"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 lg:hidden bg-background"
          >
            <div className="h-full flex flex-col">
              {/* Mobile Menu Header */}
              <div className="container mx-auto px-4 py-4 flex items-center justify-between border-b border-border/40">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <Image
                    src="/memphislogo.png"
                    alt="Memphis Capital Logo"
                    width={150}
                    height={40}
                    className="h-12 w-auto"
                    unoptimized={true}
                  />
                </Link>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-white hover:text-primary rounded-md"
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Mobile Menu Content */}
              <div className="flex-1 container mx-auto px-4 py-8 overflow-y-auto">
                <div className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-8"
                  >
                    {navigationItems.map((item, idx) => (
                      <div key={item.name}>
                        <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                          <div className={`text-2xl font-serif ${pathname === item.href ? 'text-primary' : 'text-white'}`}>
                            {item.name}
                          </div>
                        </Link>
                        
                        {/* Mobile submenu items */}
                        {item.megaMenu && (
                          <div className="mt-4 pl-4 space-y-5">
                            {item.megaMenu.map((section) => (
                              <div key={section.title} className="space-y-2">
                                <h4 className="text-primary/80 text-sm font-medium tracking-wider uppercase">
                                  {section.title}
                                </h4>
                                <ul className="space-y-3 border-l border-border/40 pl-4">
                                  {section.items.map((subItem) => (
                                    <li key={subItem.name}>
                                      <Link
                                        href={subItem.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-white/80 hover:text-primary transition-colors block py-1"
                                      >
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                  
                  {/* Mobile CTA */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pt-8 mt-8 border-t border-border/40"
                  >
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                      <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 px-6 rounded-md font-medium flex items-center justify-center">
                        Get Started
                        <ArrowRight size={16} className="ml-2" />
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
