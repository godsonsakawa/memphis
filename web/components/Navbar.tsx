"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Simplified navigation with fewer items
const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md shadow-lg py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/memphislogo.png"
                alt="Memphis Capital Logo"
                width={200}
                height={60}
                className="h-20 w-auto transition-transform hover:scale-105"
                priority
              />
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-medium transition-all duration-300 hover-scale ${
                    pathname === item.href
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="hover-lift hover-glow hover-brightness bg-primary text-primary-foreground text-lg font-medium px-8 py-3 rounded-md"
                >
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-md text-white hover:bg-white/10 transition-colors"
              >
                <Menu className="h-8 w-8" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed inset-y-0 right-0 w-full sm:w-3/4 max-w-sm bg-black/95 shadow-xl border-l border-neutral-800"
            >
              <div className="flex items-center justify-between p-6 border-b border-neutral-800">
                <Image
                  src="/memphislogo.png"
                  alt="Memphis Capital Logo"
                  width={180}
                  height={55}
                  className="h-14 w-auto"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md text-white hover:bg-white/10 transition-colors"
                >
                  <X className="h-8 w-8" />
                </button>
              </div>

              <nav className="p-6 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-4 rounded-lg text-xl font-medium transition-all duration-300 hover-scale ${
                      pathname === item.href
                        ? "bg-primary/10 text-primary"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="p-6 border-t border-neutral-800">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    className="hover-lift hover-glow hover-brightness w-full bg-primary text-primary-foreground text-xl font-medium py-4 rounded-lg"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
