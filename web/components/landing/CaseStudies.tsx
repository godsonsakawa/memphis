"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Clock, Check, DollarSign, BarChart4, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock-up image for ZETU (replace with actual image path)
const zetuImage = "https://img.freepik.com/free-vector/gradient-blockchain-concept_23-2149164717.jpg?t=st=1746855857~exp=1746856457~hmac=ecee8dad8ab1a17efb72e680bc54802538bfd90bf6100324ef5d2e47872b813f&w=1380";

export function CaseStudiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Case study steps
  const workflowSteps = [
    { id: 1, title: "Connect", icon: Shield, description: "Register and complete KYC" },
    { id: 2, title: "Deliver", icon: Clock, description: "Fulfill orders to buyers in the network" },
    { id: 3, title: "Verify", icon: Check, description: "Delivery is confirmed on the blockchain" },
    { id: 4, title: "Receive", icon: DollarSign, description: "Get instant payment to your account" },
  ];

  // Impact metrics
  const impactMetrics = [
    { value: "$15B", label: "in financing gap addressed", icon: BarChart4 },
    { value: "60%", label: "SME failures prevented", icon: Shield },
    { value: "5%", label: "flat fee vs traditional 15-30%", icon: DollarSign },
    { value: "$1,000", label: "minimum invoice size", icon: Zap },
  ];

  return (
    <section ref={ref} className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        {/* Premium separator */}
        <div className="mb-24">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
        
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-8"
          >
            <Shield className="w-4 h-4 mr-2" />
            Client Success Story
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            WE DON’T JUST ADVISE - WE BUILD
          </motion.h2>
          
          <motion.p
            className="text-lg text-white/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            While helping African founders navigate capital challenges, we identified a $15 billion financing gap in supply chain finance.
            So, we’re building the solution.

          </motion.p>
        </div>
        
        {/* Case Study Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Case Study Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-white/5 to-transparent p-0.5 rounded-xl">
              <div className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-lg p-8 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-white">ZETU</h3>
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-primary text-sm">Fintech Solution</span>
                </div>
                
                <p className="text-white/80 mb-8">
                Meet Zetu - our blockchain-powered platform delivering same-day payments to suppliers across East Africa.
                </p>
                
                <h4 className="text-lg font-medium text-white mb-4">About ZETU:</h4>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-white/90">
                      <span className="font-medium text-white">The Problem:</span> 35,000 + SMEs slowed down by 30-90 day payment cycles.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-white/90">
                      <span className="font-medium text-white">Our Solution:</span> Instant supplier payments, verified through smart contracts
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-white/90">
                      <span className="font-medium text-white">The Market:</span> $4.2B annual opportunity in East Africa alone.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <BarChart4 className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-white/90">
                      <span className="font-medium text-white"> * </span> Zetu represents Memphis Capital’s commitment to not only identifying market gaps but also filling them. Because founders don’t need more theory. They need systems that work.
                    </span>
                  </li>
                </ul>
                
                
                
                
              </div>
            </div>
          </motion.div>
          
          {/* Image and Impact Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Case Study Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/10 mix-blend-overlay z-10"></div>
              <Image
                src="https://img.freepik.com/free-photo/cryptocurrency-coding-digital-blue-background-open-source-blockchain-concept_53876-124644.jpg?t=st=1746708882~exp=1746712482~hmac=2683c881df6a59d5c35ea2da13cdb9ae25c26903491711d9cd02c78a0c687a4b&w=1380"
                alt="ZETU Blockchain Solution"
                fill
                className="object-cover"
                unoptimized={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-20"></div>
              <div className="absolute bottom-0 left-0 p-6 z-30">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm">
                  Impact Solution
                </span>
              </div>
            </div>
            
            
            
            <div className="mt-8 text-center">
              <p className="text-white/50 text-sm italic">
                This solution specifically targets SMEs in East Africa, helping them get paid faster through a trustless, secure blockchain system
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
