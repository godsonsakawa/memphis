"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Globe, BriefcaseBusiness, ArrowRight } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    icon: Rocket,
    title: "Entrepreneurial DNA",
    description: "We've built, funded, and exited ventures. We understand your journey because we've lived it, turning challenges into triumphs."
  },
  {
    icon: Globe,
    title: "Global Network, Local Insight",
    description: "Leverage our international connections, perfectly balanced with deep, nuanced expertise in African markets for strategic advantage."
  },
  {
    icon: BriefcaseBusiness,
    title: "Holistic Partnership",
    description: "From initial strategy through execution and beyond – we are your dedicated partners at every critical stage of growth."
  },
];

export function WhyMemphisSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        {/* Premium separator */}
        <div className="mb-24">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
        
        {/* Section header */}
        <div className="max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2"></span>
            Why Memphis Capital
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Expertise meets exceptional execution
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-white/70"
          >
            Africa’s future is being built now. And founders shouldn’t have to figure it out alone. We blend deep market insight, structured capital strategy, and an operator’s mindset to help you scale without second-guessing.

            Strategy-first, always. We don’t just introduce you to capital - we help you shape a strategy that attracts it.

            Investor-grade materials. From your pitch to your model, everything speaks your value and scales your credibility.

            Founder-focused process. Structured, honest, and built to move with momentum.

          </motion.p>
        </div>

        {/* Featured spotlight area */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Large image */}
            <div className="lg:col-span-3 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="relative aspect-[16/10] rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                <Image 
                  src="/front-view-stacked-coins-with-dirt-plant.jpg" 
                  alt="Strategic business meeting" 
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-1/3 z-20"></div>
                <div className="absolute bottom-0 left-0 p-6 z-30">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm">
                    Strategic Excellence
                  </span>
                </div>
              </motion.div>
            </div>
            
            {/* First reason - featured */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="h-full flex flex-col justify-center">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="h-px bg-gradient-to-r from-primary to-transparent mb-6"
                ></motion.div>
                
                <span className="text-primary/80 uppercase tracking-wider text-sm font-medium mb-3 block">
                  Our Foundation
                </span>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-5">
                  {reasons[0].title}
                </h3>
                
                <p className="text-white/70 mb-8">
                  {reasons[0].description}
                </p>
                
                <a 
                  href="/about" 
                  className="inline-flex items-center text-primary font-medium group hover:text-primary/80 transition-colors"
                >
                  Read our story
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Other reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          {reasons.slice(1).map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
              >
                <div className="group p-1 bg-gradient-to-br from-primary/10 to-transparent rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-lg p-8 border border-white/10">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>
                    
                    <p className="text-white/70">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}