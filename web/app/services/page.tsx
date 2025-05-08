"use client"

import { motion, AnimatePresence } from "framer-motion"
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
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

const services = [
  {
    category: "Strategic Advisory",
    description:
      "We provide actionable insights and business strategy consulting to help companies navigate challenges and unlock growth. Our expertise includes:",
    items: [
      {
        icon: Lightbulb,
        title: "Business Strategy Consulting",
        description: "Tailored plans to drive sustainable growth and profitability.",
      },
      {
        icon: Handshake,
        title: "Deal Origination & Structuring",
        description: "We design and execute value-driven deals that maximize returns.",
      },
      {
        icon: LineChart,
        title: "Transaction Advisory",
        description: "Expert support throughout mergers, acquisitions, and business restructures.",
      },
    ],
  },
  {
    category: "Financial Solutions",
    description: "Our financial services ensure your business has the capital and tools to thrive:",
    items: [
      {
        icon: DollarSign,
        title: "Capital Sourcing & Fundraising",
        description: "We connect you with investors and financing options suited to your needs.",
      },
      {
        icon: BarChart3,
        title: "Advanced Financial Modelling",
        description: "Accurate models for better decision-making and future planning.",
      },
      {
        icon: FileCheck,
        title: "Client Due Diligence",
        description: "Rigorous assessments to mitigate risks and ensure informed investments.",
      },
    ],
  },
  {
    category: "Market Research & Analysis",
    description: "We offer deep insights into market trends, competitive landscapes, and growth opportunities:",
    items: [
      {
        icon: Search,
        title: "Market Research",
        description: "Data-driven research to support your strategic decisions and expansion plans.",
      },
      {
        icon: Target,
        title: "Competitive Analysis",
        description: "In-depth analysis of your market position and competitors to inform growth strategies.",
      },
    ],
  },
]

const testimonials = [
  {
    quote:
      "Memphis Capital has been a game-changer for our business. Their investment and strategic guidance helped us scale faster than we ever imagined. Beyond funding, they provided invaluable insights that refined our business model and positioned us for long-term success.",
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
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const backgroundImages = [
  "/black-businessman-using-computer-laptop.jpg",
  "/person-office-analyzing-checking-finance-graphs.jpg",
  "/employee-working-marketing-setting.jpg"
]

export default function ServicesPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-black to-blue-950">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-[30rem] h-[30rem] rounded-full bg-blue-500/5 blur-[100px]" />
        <div className="absolute top-[40%] left-[10%] w-[20rem] h-[20rem] rounded-full bg-blue-600/5 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[25rem] h-[25rem] rounded-full bg-blue-400/5 blur-[100px]" />

        {/* Geometric elements */}
        <div className="absolute top-[15%] left-[10%] w-[1px] h-[200px] bg-gradient-to-b from-blue-500/50 to-transparent" />
        <div className="absolute top-[15%] left-[10%] w-[100px] h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent" />

        <div className="absolute bottom-[20%] right-[15%] w-[1px] h-[150px] bg-gradient-to-b from-transparent to-blue-500/50" />
        <div className="absolute bottom-[20%] right-[15%] w-[100px] h-[1px] bg-gradient-to-l from-transparent to-blue-500/50" />

        <div className="absolute top-[60%] left-[20%] w-[150px] h-[150px] border border-blue-500/10 rounded-full" />
        <div className="absolute top-[30%] right-[25%] w-[100px] h-[100px] border border-blue-500/10 rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24 pb-12 relative z-10 min-h-[60vh]">
        {/* Background Image Slideshow */}
        <div className="absolute inset-0 -z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={backgroundImages[currentImageIndex]}
                alt="Background Slide"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-blue-950/90" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <div className="relative w-16 h-16 mx-auto mb-3">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md" />
              <div className="relative bg-gradient-to-br from-blue-600 to-blue-400 rounded-full w-full h-full flex items-center justify-center">
                <Handshake className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block mb-2">
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

          <motion.h2
            className="text-xl md:text-2xl font-light text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            How can we help you?
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-blue-100/70 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            At Memphis Capital, we provide a comprehensive suite of financial and advisory services designed to help
            startups and businesses secure funding, optimize operations, and achieve sustainable growth. From deal
            origination to investor preparedness, we ensure that every company we work with is positioned for long-term
            success.
          </motion.p>
        </motion.div>
      </section>

      {/* Services Sections */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={service.category}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
              <motion.h2
                className="text-2xl font-semibold text-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {service.category}
              </motion.h2>
            </div>

            <motion.p
              className="text-blue-100/70 mb-12 max-w-3xl pl-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {service.description}
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {service.items.map((item, itemIndex) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                    className="p-8 rounded-xl bg-gradient-to-br from-blue-900/20 to-black/40 border border-blue-500/20 hover:border-blue-400/40 transition-all group hover:shadow-lg hover:shadow-blue-500/5"
                  >
                    <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                      <Icon className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-blue-100/70 mb-6 group-hover:text-blue-100/90 transition-colors">
                      {item.description}
                    </p>

                    <Link
                      href={`/services/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      Learn more
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* Testimonial Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <div className="p-3 bg-blue-500/10 rounded-full">
                <FileCheck className="w-8 h-8 text-blue-400" />
              </div>
            </motion.div>

            <motion.h2
              className="text-3xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Client Success Stories
            </motion.h2>

            <motion.p
              className="text-lg text-blue-100/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Hear from businesses we've helped transform
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-xl bg-gradient-to-br from-blue-900/20 to-black/40 border border-blue-500/20 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-4 -left-4 text-5xl text-blue-500/30 font-serif">"</div>
                <div className="absolute -bottom-4 -right-4 text-5xl text-blue-500/30 font-serif rotate-180">"</div>

                <p className="text-blue-100/90 mb-8 relative z-10 italic">{testimonial.quote}</p>

                <div className="text-blue-100/70 border-t border-blue-500/20 pt-4">
                  <p className="font-medium text-white">{testimonial.author}</p>
                  <p>{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          className="relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-black/40" />
          <div className="absolute inset-0 border border-blue-500/20 rounded-2xl" />

          {/* Abstract shapes */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full" />
          <div className="absolute top-[20%] left-[10%] w-20 h-20 border border-blue-500/20 rounded-full opacity-30" />
          <div className="absolute bottom-[20%] right-[10%] w-16 h-16 border border-blue-500/20 rounded-full opacity-30" />

          <div className="relative px-8 py-16 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to transform your business?
            </motion.h2>

            <motion.p
              className="text-lg text-blue-100/80 max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Schedule a consultation with our team to discuss how Memphis Capital can help you achieve your business
              goals.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                href="/contact"
                className="hover-lift hover-glow px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/about"
                className="hover-lift card-hover px-8 py-3 bg-transparent border border-primary/50 text-foreground rounded-lg font-medium flex items-center justify-center gap-2"
              >
                Learn About Our Team
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
