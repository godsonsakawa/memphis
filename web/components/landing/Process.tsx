"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SearchCheck, BarChart3, LineChart, TrendingUp } from "lucide-react";

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
    <section ref={ref} className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        {/* Premium separator */}
        <div className="mb-24">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
        
        {/* Section header */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2"></span>
            Our Methodology
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            A structured approach to exceptional results
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-white/70"
          >
            Our proven methodology ensures consistent delivery of high-quality outcomes for every client engagement.
          </motion.p>
        </div>
        
        {/* Process Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute top-0 bottom-0 left-[30px] md:left-1/2 w-px bg-gradient-to-b from-primary/50 via-white/10 to-primary/50 md:transform md:-translate-x-px"></div>
          
          <div className="relative">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.number} className="mb-16 last:mb-0">
                  <div className="flex md:block">
                    {/* Timeline node */}
                    <div className="flex-none relative z-10">
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center relative left-0 md:left-1/2 md:transform md:-translate-x-1/2"
                      >
                        <span className="text-xl font-light text-primary">{step.number}</span>
                      </motion.div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow pl-6 md:pl-0">
                      <div className={`md:w-1/2 ${isEven ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                        <motion.div
                          initial={{ opacity: 0, y: 20, x: isEven ? 20 : -20 }}
                          animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
                          transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-4">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                          </div>
                          
                          <p className="text-white/70">{step.description}</p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}