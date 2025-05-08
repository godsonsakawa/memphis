"use client";

import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export function HeroSection() {
    // Use absolute URLs for all images to ensure they load correctly
    const images = [
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1788&q=80", // City skyline at night
        "https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", // Modern office building
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" // City road at night
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
            // Reset error state when changing images
            setImageError(false);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Handle image loading errors
    const handleImageError = () => {
        console.log("Image failed to load");
        setImageError(true);
    };

    return (
        <section className="relative w-full min-h-screen flex items-center pt-24 pb-16">
            {/* Premium background with overlay */}
            <div className="absolute inset-0 -z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0"
                    >
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" />

                        {/* Main image with fallback */}
                        {!imageError ? (
                            <Image
                                src={images[currentImage]}
                                alt="Investment Growth"
                                fill
                                priority
                                className="object-cover"
                                sizes="100vw"
                                unoptimized={true}
                                onError={handleImageError}
                            />
                        ) : (
                            // Fallback background color if image fails to load
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-950"></div>
                        )}
                    </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-background z-20" />
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    {/* Main content section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-8">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2"></span>

                        </div>

                        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-8 leading-tight">
                            <span className="block">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
                                    Powering Growth Through
                                </span>
                            </span>
                            <span className="block mt-2">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">
                                    Smart Capital and Strategy
                                </span>
                            </span>
                        </h1>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="h-px max-w-sm bg-gradient-to-r from-primary to-transparent mb-8"
                        ></motion.div>

                        <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
                            End-to-end Business Strategy, Capital Sourcing & Market Intelligence—driving your growth with precision, expertise, and proven methodologies.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-10">
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="px-8 py-4 bg-primary text-primary-foreground rounded-md font-medium flex items-center gap-2 shadow-lg shadow-primary/20"
                                >
                                    Schedule a Consultation
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </Link>

                            <Link href="/services">
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-md font-medium hover:bg-white/5 transition-colors"
                                >
                                    Explore Our Services
                                </motion.button>
                            </Link>
                        </div>
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