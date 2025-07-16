import { Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-neutral-800">
      <div className="container mx-auto px-6 py-20">
        {/* Premium Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Company Info - Left Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white tracking-tight">Memphis Capital</h2>
            <div className="w-16 h-1 bg-blue-500"></div>
            <p className="text-neutral-400 max-w-md leading-relaxed">
              Memphis Capital is a Nairobi-based strategy and capital advisory firm helping East African businesses raise growth capital, streamline financial models, and scale with precision.
            </p>
          </div>

          {/* Navigation - Middle Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white">Navigation</h3>
            <nav className="flex flex-col space-y-3">
              <a href="/about" className="text-neutral-400 hover:text-blue-400 transition-colors">About</a>
              <a href="/services" className="text-neutral-400 hover:text-blue-400 transition-colors">Services</a>
              <a href="/contact" className="text-neutral-400 hover:text-blue-400 transition-colors">Contact</a>
            </nav>
          </div>

          {/* Contact & Socials - Right Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white">Contact Us</h3>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/10 p-2.5 rounded-full">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-neutral-400">Western Heights, Westlands, Nairobi, Kenya</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/10 p-2.5 rounded-full">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <a href="tel:+254733900225" className="text-neutral-400 hover:text-blue-400 transition-colors">
                  +254 733 900 225
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/10 p-2.5 rounded-full">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <a href="mailto:info@memphiscapital.co.ke" className="text-neutral-400 hover:text-blue-400 transition-colors">
                  info@memphiscapital.co.ke
                </a>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <a href="https://www.linkedin.com/company/the-memphis-capital/posts/?feedView" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors flex items-center">
                  <FaLinkedin className="w-6 h-6" />
                  <span className="ml-2">Follow us on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright & Legal */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-neutral-500 mb-2 md:mb-0">
            © {currentYear} Memphis Capital. All rights reserved.
          </div>
          <div className="text-sm text-neutral-600 mb-2 md:mb-0">
            Focused on Excellence
          </div>
          <div className="text-sm text-neutral-500">
            <a href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}