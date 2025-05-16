"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileCheck } from "lucide-react";

// Testimonial data
const testimonials = [
  {
    quote:
      "Partnering with this team helped us reduce supplier payment delays by over 90% and boost trust across our supply chain. Their blockchain expertise turned a major operational challenge into a competitive advantage.",
    author: "CEO",
    company: "ZETU",
  },
  {
    quote:
      "Memphis Capital has been a game-changer for our business. Their investment and strategic guidance helped us scale faster than we ever imagined. Beyond funding, they provided invaluable insights that refined our business model.",
    author: "Co-Founder & CEO",
    company: "Carogiv Limited",
  },
  {
    quote:
      "Working with Memphis Capital transformed our approach to growth. Their team's deep expertise in financial modeling and market analysis gave us the clarity we needed to make confident decisions about our expansion strategy.",
    author: "Managing Director",
    company: "TechVision Kenya",
  },
  {
    quote:
      "The strategic advisory services from Memphis Capital helped us navigate a complex acquisition process with confidence. Their attention to detail and industry knowledge were instrumental in securing favorable terms.",
    author: "Chief Financial Officer",
    company: "Horizon Industries",
  },
];

export function TestimonialsSection() {
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
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-8"
          >
            <FileCheck className="w-4 h-4 mr-2" />
            <span>Client Success Stories</span>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span>Trusted by Industry Leaders</span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>See how our services have transformed businesses across industries</span>
          </motion.p>
        </div>
        
        {/* Premium testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Premium card design */}
              <div className="h-full rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-1">
                <div className="h-full rounded-lg bg-white/[0.02] p-6 backdrop-blur-sm relative">
                  <div className="absolute top-4 left-4 text-4xl text-primary/20 font-serif">"</div>
                  
                  <p className="relative text-white/90 mb-6 italic pt-6 text-sm">
                    <span>{testimonial.quote}</span>
                  </p>
                  
                  <div className="mt-auto border-t border-white/10 pt-4">
                    <p className="font-medium text-white text-sm">
                      <span>{testimonial.author}</span>
                    </p>
                    <p className="text-white/70 text-sm">
                      <span>{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 rounded-2xl border border-white/10 bg-white/[0.02] p-10"
        >
          <p className="text-center text-sm text-white/50 uppercase tracking-wider mb-8">
            <span>Trusted by leading organizations</span>
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-70">
            {/* Placeholder for client logos */}
            <div className="h-8 w-32 bg-white/10 rounded-md"></div>
            <div className="h-8 w-24 bg-white/10 rounded-md"></div>
            <div className="h-8 w-28 bg-white/10 rounded-md"></div>
            <div className="h-8 w-32 bg-white/10 rounded-md"></div>
            <div className="h-8 w-24 bg-white/10 rounded-md"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
