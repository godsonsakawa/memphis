"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Send, ChevronRight, Globe, Clock, Calendar, Shield, Check } from "lucide-react";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: formRef,
    offset: ["start end", "end start"]
  });
  
  // Form state
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  // Animation values
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.95, 1, 1, 0.95]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success
      setTimeout(() => {
        setFormStatus('idle');
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-black to-blue-950">
      {/* Premium background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-[40rem] h-[40rem] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute top-[40%] left-[10%] w-[30rem] h-[30rem] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[35rem] h-[35rem] rounded-full bg-blue-400/5 blur-[150px]" />
        
        {/* Gold accent lines */}
        <div className="absolute top-[5%] left-[5%] w-[1px] h-[300px] bg-gradient-to-b from-primary/70 to-transparent" />
        <div className="absolute top-[5%] left-[5%] w-[150px] h-[1px] bg-gradient-to-r from-primary/70 to-transparent" />
        
        <div className="absolute bottom-[10%] right-[5%] w-[1px] h-[200px] bg-gradient-to-t from-primary/70 to-transparent" />
        <div className="absolute bottom-[10%] right-[5%] w-[150px] h-[1px] bg-gradient-to-l from-primary/70 to-transparent" />
        
        {/* Decorative elements */}
        <div className="absolute top-[60%] left-[20%] w-[200px] h-[200px] border border-primary/10 rounded-full" />
        <div className="absolute top-[25%] right-[15%] w-[300px] h-[300px] border border-blue-500/10 rounded-full" />
        <div className="absolute bottom-[30%] left-[40%] w-[150px] h-[150px] border border-primary/10 rounded-full opacity-30" />
      </div>

      {/* Hero Section - Premium Design */}
      <section className="pt-40 pb-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2"></span>
                Connect With Us
              </div>
              
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-8 leading-tight">
                <span className="block">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
                    Let's Elevate Your
                  </span>
                </span>
                <span className="block mt-2">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">
                    Business Strategy
                  </span>
                </span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto"
              >
                Our team of experienced advisors is ready to help your business achieve its strategic and financial objectives. Let's start the conversation today.
              </motion.p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {/* Communication Method Cards - Premium Design */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group p-1 bg-gradient-to-br from-primary/20 to-transparent rounded-xl overflow-hidden"
              >
                <div className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-lg h-full p-8 border border-white/10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">Email Us</h3>
                  <p className="text-white/60 mb-4">Our team typically responds within 24 hours on business days.</p>
                  <a 
                    href="mailto:info@memphiscapital.co.ke" 
                    className="inline-flex items-center text-primary font-medium group-hover:text-primary/90 transition-all"
                  >
                    info@memphiscapital.co.ke
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="group p-1 bg-gradient-to-br from-primary/20 to-transparent rounded-xl overflow-hidden"
              >
                <div className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-lg h-full p-8 border border-white/10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">Call Us</h3>
                  <p className="text-white/60 mb-4">Available Monday through Friday, 9AM to 5PM EAT.</p>
                  <a 
                    href="tel:+254733900225" 
                    className="inline-flex items-center text-primary font-medium group-hover:text-primary/90 transition-all"
                  >
                    +254 733 900 225
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="group p-1 bg-gradient-to-br from-primary/20 to-transparent rounded-xl overflow-hidden"
              >
                <div className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-lg h-full p-8 border border-white/10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">Visit Us</h3>
                  <p className="text-white/60 mb-4">Schedule an in-person meeting at our office.</p>
                  <p className="text-white/90 group-hover:text-white transition-colors">
                    Western Heights, Westlands, Nairobi, Kenya
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Separator */}
      <div className="container mx-auto px-4 mb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      {/* Contact Form Section - Premium Design */}
      <section ref={formRef} className="py-20 relative z-10">
        <motion.div
          style={{ opacity, scale }}
          className="container mx-auto px-4"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-white/70 mb-8 max-w-md">
                  Fill out the form below, and our team will get back to you within 24 hours to discuss how Memphis Capital can help your business grow.
                </p>
                
                {/* Premium Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors"
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors"
                      >
                        <option value="" className="bg-background">Select a service</option>
                        <option value="business-strategy" className="bg-background">Business Strategy</option>
                        <option value="transaction-advisory" className="bg-background">Transaction Advisory</option>
                        <option value="capital-sourcing" className="bg-background">Capital Sourcing</option>
                        <option value="financial-modelling" className="bg-background">Financial Modelling</option>
                        <option value="market-research" className="bg-background">Market Research</option>
                        <option value="other" className="bg-background">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors"
                      placeholder="Tell us about your business needs..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="consent" 
                      className="w-4 h-4 rounded border-white/30 text-primary focus:ring-primary/50" 
                      required 
                    />
                    <label htmlFor="consent" className="ml-2 block text-sm text-white/70">
                      I consent to Memphis Capital processing my data to contact me.
                    </label>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className={`w-full px-8 py-4 rounded-lg font-medium relative overflow-hidden group ${
                        formStatus === 'submitting' 
                          ? 'bg-primary/70 cursor-not-allowed' 
                          : 'bg-primary hover:bg-primary/90'
                      } text-primary-foreground transition-all duration-300`}
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 group-hover:animate-shimmer"></span>
                      <span className="relative flex items-center justify-center gap-2">
                        {formStatus === 'submitting' ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : formStatus === 'success' ? (
                          <>
                            <Check className="w-5 h-5" />
                            Message Sent!
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Submit Message
                          </>
                        )}
                      </span>
                    </button>
                    
                    {formStatus === 'success' && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-green-400 text-sm mt-2 text-center"
                      >
                        Thank you for your message. We'll be in touch soon!
                      </motion.p>
                    )}
                  </div>
                </form>
              </motion.div>
              
              {/* Right Column - Additional Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Office Image Card */}
                <div className="relative h-64 w-full rounded-xl overflow-hidden mb-8">
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-10"></div>
                  <Image 
                    src="https://img.freepik.com/free-photo/workplace-with-laptop-wooden-table_73899-2181.jpg?t=st=1746790646~exp=1746794246~hmac=96b48e471d0e58ef854766a8cbfe9f75e8c1f2317bfcbf5a472ac28e1217352a&w=1480" 
                    alt="Memphis Capital Office"
                    fill
                    className="object-cover"
                    unoptimized={true}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                    <h3 className="text-white font-semibold">Memphis Capital Headquarters</h3>
                    <p className="text-white/70 text-sm">Nairobi, Kenya</p>
                  </div>
                </div>
                
                {/* Premium Additional Information */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Business Hours</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Operating Hours</h4>
                        <p className="text-white/70 mt-1">Monday - Friday: 9:00 AM - 5:00 PM EAT</p>
                        <p className="text-white/70">Weekends: Closed</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Appointment Scheduling</h4>
                        <p className="text-white/70 mt-1">Schedule an in-person or virtual meeting with our consultants.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Privacy Note */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Privacy Assurance</h4>
                    <p className="text-white/70 mt-1">All communications are treated with strict confidentiality. Your information is secure and will never be shared with third parties without your consent.</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Global Presence */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-24"
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="h-px w-8 bg-primary"></div>
                  <span className="text-primary uppercase tracking-wider text-sm font-medium">International Reach</span>
                  <div className="h-px w-8 bg-primary"></div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-white">Our Global Presence</h2>
              </div>
              
              <div className="relative h-[300px] rounded-xl overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10"></div>
                <Image 
                  src="https://img.freepik.com/free-photo/globalization-networking-concept-global-business_248186-371.jpg?t=st=1746791278~exp=1746794878~hmac=150ac2e9b37c43a53edb5857f5be32e233f91848483a4a7849bfd9e0b57e1863&w=1800" 
                  alt="Global Map"
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
                
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="bg-black/70 backdrop-blur-md p-8 rounded-xl max-w-lg text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                      <Globe className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">International Network</h3>
                    <p className="text-white/70">
                      While our headquarters are in Nairobi, Memphis Capital offers services across Africa, Europe, and Asia through our partner network.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}