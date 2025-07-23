"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function SocialProofSection() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-8"
          >
            <span>Founder wins that speak volumes</span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We don’t just strategize - we deliver outcomes
          </motion.h2>
        </div>
        {/* Social proof cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <motion.div
            className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-lg bg-white/[0.02] p-6 h-full flex flex-col">
              <h3 className="text-xl font-semibold text-primary mb-2">Fintech founder raised $1.2M Series A in 80 days</h3>
              <p className="text-white/80 mb-4">From pitch deck to close, we guide their entire funding process.</p>
            </div>
          </motion.div>
          <motion.div
            className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="rounded-lg bg-white/[0.02] p-6 h-full flex flex-col">
              <h3 className="text-xl font-semibold text-primary mb-2">Logistics company secured $3M to expand into 3 new markets</h3>
              <p className="text-white/80 mb-4">Financial models built to perform under pressure, not just on paper</p>
            </div>
          </motion.div>
          <motion.div
            className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="rounded-lg bg-white/[0.02] p-6 h-full flex flex-col">
              <h3 className="text-xl font-semibold text-primary mb-2">Agritech founder doubled revenue in 6 months.</h3>
              <p className="text-white/80 mb-4">One pricing pivot. Massive transformation.</p>
            </div>
          </motion.div>
        </div>
        {/* Section summary and CTA */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-lg text-white/80 mb-8">
            Whether you’re raising capital or tightening strategy - Memphis Capital helps you build with clarity, not confusion.
          </p>
          <Link href="/contact">
            <motion.button
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-4 font-semibold text-lg transition-all shadow-lg shadow-primary/20"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              Want to be our next case study? Book your strategy call
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
} 