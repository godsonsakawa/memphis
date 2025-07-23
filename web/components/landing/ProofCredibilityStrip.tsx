"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function ProofCredibilityStrip() {
  return (
    <section className="relative z-20 w-full bg-gradient-to-r from-primary/10 via-background/80 to-blue-900/10 border-y border-primary/20 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          className="text-center md:text-left text-base md:text-lg font-medium text-primary tracking-wide"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Trusted by African founders across <span className="font-bold text-primary">10+ markets</span>
        </motion.p>
        <Link href="/about">
          <motion.button
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-2 font-semibold text-base transition-all shadow-md shadow-primary/20"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            See how we do it
          </motion.button>
        </Link>
      </div>
    </section>
  );
} 