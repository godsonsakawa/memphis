"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  Handshake,
  Search,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "strategy",
    icon: TrendingUp,
    title: "Business Strategy",
    description: "Transform challenges into opportunities with our data-driven strategic guidance, focusing on sustainable growth and market positioning.",
    link: "/services#business-strategy"
  },
  {
    id: "sourcing",
    icon: DollarSign,
    title: "Capital Sourcing",
    description: "Access our extensive network of investors and funding solutions tailored precisely to your unique growth needs and financial structure.",
    link: "/services#capital-sourcing"
  },
  {
    id: "advisory",
    icon: Handshake,
    title: "Transaction Advisory",
    description: "Receive expert guidance throughout the entirety of your transaction lifecycle, from initiation to successful post-merger integration.",
    link: "/services#transaction-advisory"
  },
  {
    id: "research",
    icon: Search,
    title: "Market Research",
    description: "Gain critical competitive advantages with our in-depth market intelligence, trend analysis, and customer insights.",
    link: "/services#market-research"
  },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2"></span>
            Our Services
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Specialized Expertise for Exceptional Results
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-white/70 max-w-3xl mx-auto"
          >
            Our comprehensive suite of services is designed to help you navigate complex business challenges and accelerate sustainable growth.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="group h-full">
                  <div className="h-full flex flex-col rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/5 bg-gradient-to-br from-white/5 to-white/[0.02]">
                    <div className="pt-8 px-8 pb-6">
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors">
                          <ChevronRight className="w-4 h-4 text-white/70 group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-white/70 group-hover:text-white/80 transition-colors">
                        {service.description}
                      </p>
                      
                      <Link 
                        href={service.link} 
                        className="mt-6 inline-flex items-center text-primary group-hover:text-primary/80 font-medium"
                      >
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* View all services button */}
        <div className="mt-12 text-center">
          <Link href="/services">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-md font-medium hover:bg-white/5 transition-colors"
            >
              View All Services
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
