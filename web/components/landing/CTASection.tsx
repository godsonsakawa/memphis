"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function CTASection() {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Premium background with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/80 to-blue-900/10" />
      <div className="absolute inset-0 border border-primary/20 rounded-2xl" />
      
      {/* Abstract shapes with premium look */}
      <div className="absolute top-0 right-0 w-60 h-60 bg-primary/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-500/5 blur-[100px] rounded-full" />
      <div className="absolute top-[20%] left-[10%] w-32 h-32 border border-primary/10 rounded-full opacity-30" />
      <div className="absolute bottom-[20%] right-[10%] w-24 h-24 border border-primary/10 rounded-full opacity-30" />
      
      {/* Content with premium design */}
      <div className="relative px-8 md:px-12 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="md:w-2/3">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
                Begin Your Journey
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                Ready to accelerate your business growth?
              </h2>
              
              <p className="text-lg text-white/80 mb-8">
                Schedule a personalized consultation with our senior advisors to discover how Memphis Capital's premium solutions can transform your business performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-primary text-primary-foreground rounded-md font-medium flex items-center gap-2 shadow-lg shadow-primary/20"
                  >
                    Schedule a Consultation
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                
                <Link href="/services">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-md font-medium hover:bg-white/5 transition-colors"
                  >
                    Explore Our Services
                  </motion.button>
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/3 hidden md:block">
              <div className="relative h-60 w-60 mx-auto">
                <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full border-2 border-primary/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <TrendingUp className="w-20 h-20 text-primary/50" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
