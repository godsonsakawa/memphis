"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SearchCheck, BarChart3, LineChart, TrendingUp } from "lucide-react";
import React from "react";

const processSteps = [
  {
    number: "01",
    icon: SearchCheck,
    title: "Discovery & Diagnostic",
    description: "Deep‑dive workshops to map challenges and objectives. Customized state of play report outlining gaps and quick‑win opportunities."
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Strategy & Structuring",
    description: "Jointly craft your 12–36‑month growth roadmap. Financial model build‑out and capital‑raising strategy."
  },
  {
    number: "03",
    icon: LineChart,
    title: "Execution & Fundraising",
    description: "Investor deck creation, pipeline outreach, and pitch coaching. Negotiations, term‑sheet review, and closing support."
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Monitoring & Optimization",
    description: "Monthly performance reviews against KPIs. Course corrections, follow‑on funding support, and exit planning."
  }
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-black relative">
      {/* Simple border elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-neutral-800"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-neutral-800"></div>
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* Refined section header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-blue-400 uppercase tracking-widest text-sm font-medium mb-4"
          >
            Our Methodology
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight"
          >
            A structured approach to <span className="font-medium">exceptional results</span>
          </motion.h2>
        </div>
        
        {/* Premium Process Steps Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.15) }}
                className="flex"
              >
                <div className="mr-6">
                  <div className="w-14 h-14 border border-neutral-800 rounded-full flex items-center justify-center">
                    <span className="font-light text-xl text-neutral-400">{step.number}</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-3">
                    <Icon size={16} className="text-blue-400 mr-2" strokeWidth={2} />
                    <h3 className="text-xl font-medium text-white">{step.title}</h3>
                  </div>
                  
                  <p className="text-neutral-400 leading-relaxed">{step.description}</p>
                  
                  {/* Subtle divider */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block h-12 w-px bg-neutral-800 absolute ml-7 mt-6"></div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Premium Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 max-w-2xl mx-auto text-center"
        >
          <p className="text-neutral-500 text-sm italic">
            Each process is tailored to the specific needs of your business, ensuring optimal alignment with your strategic objectives.
          </p>
        </motion.div>
      </div>
    </section>
  );
}