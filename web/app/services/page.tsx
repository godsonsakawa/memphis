"use client"

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import {
  Lightbulb,
  Handshake,
  LineChart,
  DollarSign,
  Search,
  Target,
  BarChart3,
  FileCheck,
  ArrowRight,
  ChevronRight,
  TrendingUp,
  Check,
  Shield,
  BarChart4,
  Globe,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"

// Enhanced services data with more premium content
const services = [
  {
    category: "Strategic Advisory",
    tagline: "Expert guidance for navigating complex business landscapes",
    description:
      "Our strategic advisory services provide senior-level expertise to help organizations navigate critical inflection points with confidence and clarity.",
    image: "/person-office-analyzing-checking-finance-graphs.jpg",
    gradient: "from-primary/20 to-indigo-600/10",
    featured: true,
    items: [
      {
        icon: Lightbulb,
        title: "Business Strategy Consulting",
        description: "Tailored plans to drive sustainable growth and profitability through market positioning, competitive analysis, and operational excellence.",
        benefits: ["Custom growth roadmaps", "Competitive positioning", "Strategic planning"],
        cta: "Discover Strategy Solutions"
      },
      {
        icon: Handshake,
        title: "Deal Origination & Structuring",
        description: "We identify, design and execute value-driven deals that maximize returns while minimizing risk through our extensive network and deep industry expertise.",
        benefits: ["Access to exclusive deals", "Optimal deal structures", "Post-transaction support"],
        cta: "Explore Deal Services"
      },
      {
        icon: LineChart,
        title: "Transaction Advisory",
        description: "End-to-end support throughout mergers, acquisitions, and business restructures with meticulous due diligence and value creation strategies.",
        benefits: ["Rigorous due diligence", "Value creation strategies", "Integration planning"],
        cta: "View Advisory Services"
      },
    ],
  },
  {
    category: "Financial Solutions",
    tagline: "Capital optimization and financial excellence",
    description:
      "Our comprehensive financial services ensure your business has the capital structure, reporting systems, and analytical tools needed to optimize performance and drive growth.",
    image: "/front-view-two-stacks-coins-with-jar-plants.jpg",
    gradient: "from-blue-600/20 to-cyan-600/10",
    featured: false,
    items: [
      {
        icon: DollarSign,
        title: "Capital Sourcing & Fundraising",
        description: "Connect with the ideal investors and financing solutions through our extensive network of institutional investors, family offices, and strategic partners.",
        benefits: ["Investor matching", "Pitch preparation", "Term negotiation"],
        cta: "Explore Capital Solutions"
      },
      {
        icon: BarChart3,
        title: "Advanced Financial Modelling",
        description: "Build sophisticated financial models that illuminate business performance drivers, project future scenarios, and support critical decision-making.",
        benefits: ["Dynamic scenario planning", "Driver-based forecasting", "Investor-ready models"],
        cta: "Learn About Modelling"
      },
      {
        icon: FileCheck,
        title: "Client Due Diligence",
        description: "Comprehensive assessments to identify risks, validate assumptions, and ensure informed investment decisions through our meticulous evaluation process.",
        benefits: ["Risk mitigation", "Value verification", "Negotiation leverage"],
        cta: "Explore Due Diligence"
      },
    ],
  },
  {
    category: "Market Research & Analysis",
    tagline: "Insights that drive strategic advantage",
    description:
      "Our research team delivers actionable intelligence that illuminates market opportunities, competitive landscapes, and consumer insights to power data-driven decision making.",
    image: "close-up-pen-with-tablet-table.jpg",
    gradient: "from-violet-600/20 to-purple-600/10",
    featured: false,
    items: [
      {
        icon: Search,
        title: "Market Research",
        description: "Gain deep market insights through our comprehensive analysis of industry trends, market sizing, and growth opportunities to inform strategic initiatives.",
        benefits: ["Opportunity identification", "Market sizing", "Trend analysis"],
        cta: "Discover Market Insights"
      },
      {
        icon: Target,
        title: "Competitive Analysis",
        description: "Understand your competitive landscape with detailed analysis of market positioning, competitor strengths and weaknesses, and strategic differentiation.",
        benefits: ["Competitive benchmarking", "Gap analysis", "Positioning strategy"],
        cta: "Explore Competitive Edge"
      },
    ],
  },
]


const backgroundImages = [
  "https://img.freepik.com/free-photo/plants-with-coins-stacked-dirt-banknote_23-2148803946.jpg?t=st=1746706783~exp=1746710383~hmac=adf7b3c75b8489aa572f894954565f88f5d29643dadd3b135ebf6891c21f1e96&w=1380",
  "/person-office-analyzing-checking-finance-graphs.jpg",
  "/employee-working-marketing-setting.jpg"
]

export default function ServicesPage() {
  // State and refs
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState(services[0].category)
  const servicesRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"]
  })

  // Animation values
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.95, 1, 1, 0.95])

  // Background image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

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

      {/* Hero Section - Enhanced with premium elements */}
      <section className="container mx-auto px-4 pt-32 pb-20 relative z-10 min-h-[75vh] flex flex-col justify-center">
        {/* Premium background image slideshow */}
        <div className="absolute inset-0 -z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" />
              <Image
                src={backgroundImages[currentImageIndex]}
                alt="Background Slide"
                fill
                priority
                className="object-cover"
                sizes="100vw"
                unoptimized={true}
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-background z-20" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left column - Main heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2"></span>
              Enterprise Solutions
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-8 leading-tight">
              <span className="block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
                  Strategic Services for
                </span>
              </span>
              <span className="block mt-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">
                  Enterprise Excellence
                </span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
              Memphis Capital delivers premium advisory and capital solutions that
              elevate your business strategy, optimize financial performance, and
              accelerate sustainable growth.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="#services">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-md font-medium flex items-center gap-2 shadow-lg shadow-primary/20"
                >
                  Explore Our Services
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-md font-medium hover:bg-white/5 transition-colors"
                >
                  Schedule a Consultation
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right column - Key services preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-600/5 rounded-2xl -z-10 blur-xl"></div>
            <div className="border border-white/10 rounded-2xl backdrop-blur-sm bg-white/5 p-8">
              <h3 className="text-xl font-medium text-white mb-6">Our Core Services</h3>

              <div className="space-y-4">
                {services.slice(0, 3).map((category) => (
                  <div
                    key={category.category}
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-1 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                      {category.category === "Strategic Advisory" && <Lightbulb className="w-4 h-4 text-primary" />}
                      {category.category === "Financial Solutions" && <DollarSign className="w-4 h-4 text-primary" />}
                      {category.category === "Market Research & Analysis" && <Search className="w-4 h-4 text-primary" />}
                    </div>
                    <div>
                      <h4 className="font-medium text-white group-hover:text-primary transition-colors">
                        {category.category}
                      </h4>
                      <p className="text-sm text-white/70 mt-1">
                        {category.tagline}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-white text-sm">Enterprise-grade</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="text-white text-sm">Global reach</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Services Navigation */}
      <section className="border-y border-white/10 py-4 sticky top-0 z-30 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <FileCheck className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-medium text-white">Our Service Portfolio</h2>
            </div>

            <div className="flex items-center gap-1 md:gap-2 overflow-x-auto hide-scrollbar py-2 w-full md:w-auto">
              {services.map((service) => (
                <button
                  key={service.category}
                  onClick={() => setActiveCategory(service.category)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === service.category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-white/5 text-white/70 hover:bg-white/10'
                    }`}
                >
                  {service.category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section ref={servicesRef} id="services" className="py-20 relative z-10">
        <motion.div
          style={{ opacity, scale }}
          className="container mx-auto px-4"
        >
          {services.map((service) => (
            <AnimatePresence key={service.category} mode="wait">
              {activeCategory === service.category && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mb-32"
                >
                  {/* Service Category Header - Asymmetric premium design */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="order-2 lg:order-1">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="h-px bg-gradient-to-r from-primary to-transparent mb-6"
                      ></motion.div>

                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-primary/80 uppercase tracking-wider text-sm font-medium mb-3 block"
                      >
                        {service.tagline}
                      </motion.span>

                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-6"
                      >
                        {service.category}
                      </motion.h2>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg text-white/80 leading-relaxed"
                      >
                        {service.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-8 flex flex-wrap gap-4"
                      >
                        <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-md">
                          <TrendingUp className="w-5 h-5 text-primary" />
                          <span className="text-white/80">Performance optimization</span>
                        </div>
                        <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-md">
                          <Shield className="w-5 h-5 text-primary" />
                          <span className="text-white/80">Risk mitigation</span>
                        </div>
                        <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-md">
                          <BarChart4 className="w-5 h-5 text-primary" />
                          <span className="text-white/80">Growth acceleration</span>
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      className="order-1 lg:order-2 relative aspect-[4/3] rounded-xl overflow-hidden"
                    >
                      {/* Premium image treatment */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} mix-blend-overlay z-10`}></div>
                      <div className="absolute inset-0 bg-black/30 z-20"></div>
                      <Image
                        src={service.image}
                        alt={service.category}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        unoptimized={true}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-1/3 z-30"></div>
                      <div className="absolute bottom-0 left-0 p-6 z-40">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm">
                          Enterprise Solutions
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Services Cards - Premium, interactive design */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
                    {service.items.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                        >
                          <div className="group h-full">
                            <div className="h-full flex flex-col rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/5 bg-gradient-to-br from-white/5 to-white/[0.02]">
                              {/* Card header */}
                              <div className="pt-8 px-8 pb-6 border-b border-white/10">
                                <div className="flex justify-between items-start mb-6">
                                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                                    <Icon className="w-7 h-7 text-primary" />
                                  </div>
                                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors">
                                    <ChevronRight className="w-4 h-4 text-white/70 group-hover:text-primary transition-colors" />
                                  </div>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                                  {item.title}
                                </h3>

                                <p className="text-white/70 group-hover:text-white/80 transition-colors">
                                  {item.description}
                                </p>
                              </div>

                              {/* Card body */}
                              <div className="px-8 py-6 flex-1 flex flex-col">
                                <h4 className="text-sm font-medium text-primary/80 uppercase tracking-wider mb-4">
                                  Key Benefits
                                </h4>

                                <ul className="space-y-3 mb-6 flex-1">
                                  {item.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3 h-3 text-primary" />
                                      </div>
                                      <span className="text-white/80">{benefit}</span>
                                    </li>
                                  ))}
                                </ul>

                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </motion.div>
      </section>



      {/* Premium CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Premium background with depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/80 to-blue-900/10" />
            <div className="absolute inset-0 border border-primary/20 rounded-2xl" />

            {/* Abstract shapes with premium look */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-primary/5 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-500/5 blur-[100px] rounded-full" />
            <div className="absolute top-[20%] left-[10%] w-32 h-32 border border-primary/10 rounded-full opacity-30" />
            <div className="absolute bottom-[20%] right-[10%] w-24 h-24 border border-primary/10 rounded-full opacity-30" />

            {/* Content with premium design */}
            <div className="relative px-8 md:px-12 py-16 md:py-20">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row items-center gap-12"
                >
                  <div className="md:w-2/3">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
                      Begin Your Journey
                    </span>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                      Ready to elevate your business strategy?
                    </h2>

                    <p className="text-lg text-white/80 mb-8">
                      Schedule a personalized consultation with our senior advisors to discover how Memphis Capital's premium solutions can transform your business performance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/contact">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-8 py-4 bg-primary text-primary-foreground rounded-md font-medium flex items-center gap-2 shadow-lg shadow-primary/20"
                        >
                          Schedule a Consultation
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>
                      </Link>

                      <Link href="/about">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-md font-medium hover:bg-white/5 transition-colors"
                        >
                          Meet Our Team
                        </motion.button>
                      </Link>
                    </div>
                  </div>

                  <div className="md:w-1/3 hidden md:block">
                    <div className="relative h-60 w-60 mx-auto">
                      <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-pulse"></div>
                      <div className="absolute inset-4 rounded-full border-2 border-primary/30"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <TrendingUp className="w-20 h-20 text-primary/50" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
