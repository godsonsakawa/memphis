"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-white">
            Let’s Build Something Great Together
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed">
            We're here to help you with your business needs. Whether you're looking for strategic advice, 
            capital solutions, or market insights, our team is ready to assist you.
          </p>
        </motion.div>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-lg bg-black/50 border border-neutral-800 hover:border-blue-400/30 transition-colors"
          >
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Email Us</h3>
            <a 
              href="mailto:info@memphiscapital.co.ke" 
              className="text-neutral-400 hover:text-blue-400 transition-colors"
            >
              info@memphiscapital.co.ke
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-lg bg-black/50 border border-neutral-800 hover:border-blue-400/30 transition-colors"
          >
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Call Us</h3>
            <a 
              href="tel:+254733900225" 
              className="text-neutral-400 hover:text-blue-400 transition-colors"
            >
              +254 733 900 225
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 rounded-lg bg-black/50 border border-neutral-800 hover:border-blue-400/30 transition-colors"
          >
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Visit Us</h3>
            <p className="text-neutral-400">
              Western Heights, Westlands, Nairobi, Kenya
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-neutral-800 text-white placeholder-neutral-500 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-neutral-800 text-white placeholder-neutral-500 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 rounded-lg bg-black/50 border border-neutral-800 text-white placeholder-neutral-500 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-black/50 border border-neutral-800 text-white placeholder-neutral-500 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
} 