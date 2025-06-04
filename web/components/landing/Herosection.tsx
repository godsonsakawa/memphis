"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-24 pb-16">
      {/* Background video - using a simpler approach without fixed positioning */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.2 }}
        >
          <source src="/memphiscapital.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content container */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Main content section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2"></span>
              Strategic Financial Partners
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-8 leading-tight">
              <span className="block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
                  Powering Growth Through
                </span>
              </span>
              <span className="block mt-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">
                  Smart Capital and Strategy
                </span>
              </span>
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px max-w-sm bg-gradient-to-r from-primary to-transparent mb-8"
            ></motion.div>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
              End-to-end Business Strategy, Capital Sourcing & Market Intelligence—driving your growth with precision,
              expertise, and proven methodologies.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-md font-medium flex items-center gap-2 shadow-lg shadow-primary/20"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-md font-medium hover:bg-white/5 transition-colors"
                >
                  Explore Our Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 0.2 }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  )
}
