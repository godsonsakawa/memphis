"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export function HeroSection() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        "/beautiful-bildings-with-lights-hong-kong.jpg",
        "/dadar-skyline-mumbai-india.jpg"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative flex items-center justify-center w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden pt-24 pb-10">
            {/* Premium background with overlay */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src={images[currentImage]}
                        alt="Investment Growth"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-black/85 to-blue-950/90"></div>

                {/* Subtle animated glow effect */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '7s' }}></div>
            </div>

            {/* Premium decorative elements */}
            <div className="absolute top-32 left-10 w-32 h-32 border border-amber-500/20 rounded-full"></div>
            <div className="absolute top-40 left-16 w-20 h-20 border border-amber-500/30 rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-44 h-44 border-2 border-blue-500/10 rounded-full"></div>
            <div className="absolute bottom-16 right-14 w-36 h-36 border border-blue-500/20 rounded-full"></div>

            {/* Animated dots grid in background */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0)',
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="container mx-auto px-4 z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    {/* Main content section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 flex flex-col items-start max-w-2xl text-white"
                    >
                        {/* Premium tag/badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="flex items-center gap-2 mb-8 px-4 py-1.5 backdrop-blur-sm rounded-full border border-blue-700/30"
                        >
                            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
                            <span className="text-blue-200 text-xs font-medium uppercase tracking-wider"></span>
                        </motion.div>

                        {/* Premium headline with animation */}
                        <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none tracking-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <span className="block mb-3">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-300">
                                 Powering Growth Through 
                                </span>
                            </span>
                            <span className="block">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-200 to-amber-100">
                                Smart Capital and Strategy
                                </span>
                            </span>
                        </motion.h1>

                        {/* Premium divider */}
                        <div className="relative h-1 w-24 my-8 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-size-200">
                            <motion.div
                                className="absolute inset-0 bg-blue-300/30"
                                animate={{ x: ["0%", "100%", "0%"] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            ></motion.div>
                        </div>

                        {/* Description with improved typography */}
                        <motion.p
                            className="text-lg md:text-xl text-gray-100 leading-relaxed font-light"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            End-to-end Business Strategy, Capital Sourcing & Market Intelligence—driving your growth with precision, expertise, and proven methodologies.
                        </motion.p>

                        {/* Premium CTA section */}
                        <motion.div
                            className="mt-12 flex flex-col sm:flex-row items-center gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                        >
                            {/* Primary CTA with premium styling */}
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center gap-3 px-8 py-4 text-base font-medium text-white bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-500 transition-all duration-300 rounded-md shadow-lg shadow-amber-500/30"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = '/contact';
                                }}
                            >
                                <span>Let's Talk</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                {/* Premium golden glow effect on hover */}
                                <span className="absolute -inset-1 -z-10 rounded-md blur-lg bg-gradient-to-r from-amber-300 to-yellow-400 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></span>
                            </Link>

                        </motion.div>

                        {/* Trust badges section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="mt-16 pt-6 border-t border-gray-700/30"
                        >
                            <p className="text-xs uppercase tracking-wider text-gray-400 mb-4">Trusted by Enterprise Businesses</p>
                            <div className="flex flex-wrap items-center gap-8">
                                {/* Replace with actual client logos
                                <div className="h-6 w-24 bg-white/10 rounded-sm"></div>
                                <div className="h-5 w-20 bg-white/10 rounded-sm"></div>
                                <div className="h-7 w-28 bg-white/10 rounded-sm"></div> */}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Optional: Add a premium floating image/graphic on larger screens */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="hidden lg:block relative max-w-md"
                    >
                        <div className="relative w-full aspect-square bg-gradient-to-br from-blue-900/20 to-transparent p-1 rounded-2xl backdrop-blur-sm border border-blue-700/20">
                            <div className="absolute inset-0 bg-grid-white/[0.03] rounded-2xl"></div>
                            <div className="h-full w-full rounded-xl overflow-hidden flex items-center justify-center">
                                <div className="relative w-3/4 h-3/4">
                                    {/* Placeholder for a 3D chart/graph or premium illustration */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-full h-full bg-gradient-to-tr from-blue-600/30 via-transparent to-amber-500/30 rounded-lg flex items-center justify-center">
                                            <div className="text-white/70 text-center">
                                                <div className="text-4xl font-light">+268%</div>
                                                <div className="text-sm mt-2">Average Growth</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating accent elements */}
                        <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-blue-500/30 blur-md"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-amber-500/20 blur-md"></div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
                    <motion.div
                        className="w-1 h-2 bg-white rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
                    ></motion.div>
                </div>
            </motion.div>
        </section>
    );
}