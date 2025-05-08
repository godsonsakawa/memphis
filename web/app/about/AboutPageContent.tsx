"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import {
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Target,
  Users,
  Globe,
  Shield,
  TrendingUp,
  BarChart4,
  Building,
  LineChart,
  Briefcase,
} from "lucide-react"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function AboutPageContent() {
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

      <div className="container mx-auto px-4 pt-40 pb-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <motion.div
            className="mb-24 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="relative w-20 h-20 mx-auto mb-4">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md" />
                <div className="relative bg-gradient-to-br from-blue-600 to-blue-400 rounded-full w-full h-full flex items-center justify-center">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Memphis Capital
            </motion.h1>

            <motion.p
              className="text-xl text-blue-100/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Your strategic partner for business growth and financial excellence in Kenya and beyond
            </motion.p>
          </motion.div>

          {/* Who We Are Section */}
          <motion.section
            className="mb-24 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="relative h-full w-full">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-transparent rounded-2xl blur-lg" />
                  <div className="relative p-8 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-black/40 h-full">
                    <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-6">
                      {[
                        { icon: <Shield className="w-8 h-8" />, text: "Trusted Advisors", value: "10+ Years" },
                        { icon: <Globe className="w-8 h-8" />, text: "Global Network", value: "25+ Countries" },
                        { icon: <TrendingUp className="w-8 h-8" />, text: "Growth Experts", value: "150+ Clients" },
                        { icon: <Briefcase className="w-8 h-8" />, text: "Investments", value: "$50M+" },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex flex-col items-center text-center p-4 rounded-xl bg-blue-900/10 border border-blue-500/10"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          <div className="p-3 bg-blue-500/10 rounded-full text-blue-400 mb-3">{item.icon}</div>
                          <span className="text-xl font-bold text-white mb-1">{item.value}</span>
                          <span className="text-sm text-blue-100/70">{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="relative mb-6">
                  <div className="absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-500/0 rounded-full" />
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-white">
                    <Users className="w-7 h-7 text-blue-400" />
                    Who We Are
                  </h2>
                </div>

                <p className="text-lg text-blue-100/70 leading-relaxed mb-6">
                  Memphis Capital Kenya Limited is your gateway to strategic business growth. We specialize in unlocking
                  capital, crafting winning strategies, and providing expert financial solutions.
                </p>

                <p className="text-lg text-blue-100/70 leading-relaxed">
                  With our hands-on approach and deep industry expertise, we empower businesses to thrive and scale with
                  confidence in today's competitive marketplace.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { icon: <Shield className="w-5 h-5" />, text: "Trusted Advisors" },
                    { icon: <Globe className="w-5 h-5" />, text: "Global Network" },
                    { icon: <TrendingUp className="w-5 h-5" />, text: "Growth Experts" },
                    { icon: <CheckCircle className="w-5 h-5" />, text: "Proven Results" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 text-blue-100/90"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <div className="p-2 bg-blue-500/10 rounded-full text-blue-400">{item.icon}</div>
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Our Mission Section */}
          <motion.section
            className="mb-24 relative py-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-black/30 rounded-3xl" />
            <div className="absolute inset-0 border border-blue-500/20 rounded-3xl" />

            <div className="relative px-8 md:px-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative w-32 h-32"
                  >
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md" />
                    <div className="relative bg-gradient-to-br from-blue-600 to-blue-400 rounded-full w-full h-full flex items-center justify-center">
                      <Target className="w-16 h-16 text-white" />
                    </div>
                  </motion.div>
                </div>

                <div className="md:w-2/3 text-center md:text-left">
                  <motion.h2
                    className="text-3xl font-bold mb-6 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    Our Mission
                  </motion.h2>

                  <motion.p
                    className="text-2xl font-light text-blue-100/90 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    To empower businesses with strategic expertise and capital solutions that drive sustainable growth
                    and long-term success.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Why Choose Us Section */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block mb-4"
              >
                <div className="p-3 bg-blue-500/10 rounded-full">
                  <Lightbulb className="w-8 h-8 text-blue-400" />
                </div>
              </motion.div>

              <motion.h2
                className="text-3xl font-bold mb-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Why Choose Us?
              </motion.h2>

              <motion.p
                className="text-lg text-blue-100/70 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                We bring a unique combination of expertise, experience, and innovation to help your business succeed
              </motion.p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  value: "strategic-investment",
                  title: "Strategic Investment",
                  content:
                    "Our strategic investment approach combines deep market analysis with innovative financial solutions to maximize returns and minimize risks for our clients.",
                  icon: <BarChart4 className="w-5 h-5" />,
                },
                {
                  value: "proven-success",
                  title: "Proven Success",
                  content:
                    "With a track record of successful investments and business transformations, we bring proven methodologies and results-driven strategies to every engagement.",
                  icon: <TrendingUp className="w-5 h-5" />,
                },
                {
                  value: "industry-expertise",
                  title: "Industry Expertise",
                  content:
                    "Our team of seasoned professionals brings decades of combined experience across various industries, ensuring deep insights and informed decision-making.",
                  icon: <Briefcase className="w-5 h-5" />,
                },
                {
                  value: "tailored-solutions",
                  title: "Tailored Solutions",
                  content:
                    "We understand that every business is unique. Our solutions are customized to meet your specific needs, challenges, and growth objectives.",
                  icon: <Lightbulb className="w-5 h-5" />,
                },
                {
                  value: "global-network",
                  title: "Global Network",
                  content:
                    "Leverage our extensive network of industry leaders, investors, and strategic partners to access new opportunities and markets.",
                  icon: <Globe className="w-5 h-5" />,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.value}
                  className="bg-gradient-to-r from-blue-900/20 to-black/20 rounded-xl px-6 py-2 border border-blue-500/20 hover:border-blue-400/40 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <AccordionItem value={item.value}>
                    <AccordionTrigger className="text-lg font-medium text-white">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-500/10 rounded-full text-blue-400">{item.icon}</div>
                        {item.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-blue-100/70 text-base pl-12">{item.content}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.section>

          {/* Our Values Section */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block mb-4"
              >
                <div className="p-3 bg-blue-500/10 rounded-full">
                  <CheckCircle className="w-8 h-8 text-blue-400" />
                </div>
              </motion.div>

              <motion.h2
                className="text-3xl font-bold mb-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Our Values
              </motion.h2>

              <motion.p
                className="text-lg text-blue-100/70 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                The principles that guide our work and relationships
              </motion.p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Integrity",
                  description: "We maintain the highest standards of honesty and transparency in all our dealings.",
                  icon: <Shield className="w-10 h-10" />,
                  color: "from-blue-600/20 to-blue-400/5",
                },
                {
                  title: "Excellence",
                  description:
                    "We strive for excellence in every aspect of our service delivery and client relationships.",
                  icon: <TrendingUp className="w-10 h-10" />,
                  color: "from-blue-500/20 to-blue-300/5",
                },
                {
                  title: "Innovation",
                  description: "We embrace innovative solutions to address complex business challenges.",
                  icon: <Lightbulb className="w-10 h-10" />,
                  color: "from-blue-400/20 to-blue-200/5",
                },
                {
                  title: "Partnership",
                  description: "We build lasting partnerships based on trust, collaboration, and mutual success.",
                  icon: <Users className="w-10 h-10" />,
                  color: "from-blue-500/20 to-blue-300/5",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  className={`p-8 rounded-xl bg-gradient-to-br ${value.color} border border-blue-500/20 hover:border-blue-400/40 transition-all group hover:shadow-lg hover:shadow-blue-500/5`}
                  variants={fadeInUp}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-6 text-blue-400 group-hover:text-blue-300 transition-colors">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-blue-100/70 group-hover:text-blue-100/90 transition-colors">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Our Approach Section */}
          <motion.section
            className="mb-24 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="relative mb-6">
                  <div className="absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-500/0 rounded-full" />
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-white">
                    <ArrowRight className="w-7 h-7 text-blue-400" />
                    Our Approach
                  </h2>
                </div>

                <motion.p
                  className="text-lg text-blue-100/70 leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  We take a comprehensive approach to business advisory, combining deep industry expertise with
                  innovative thinking to deliver tailored solutions for each client. Our team of experienced
                  professionals works closely with you to understand your unique challenges and opportunities.
                </motion.p>

                <motion.p
                  className="text-lg text-blue-100/70 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Whether you're seeking strategic guidance, capital investment, or market insights, we provide the
                  expertise and resources needed to help your business thrive in today's competitive environment.
                </motion.p>

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <button className="hover-lift hover-glow px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center gap-2 transition-all">
                    Learn More About Our Process
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </div>

              <div className="md:w-1/2 order-1 md:order-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-transparent to-blue-500/20 rounded-2xl blur-lg" />
                  <div className="relative p-8 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-black/40">
                    <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                      <LineChart className="w-6 h-6 text-white" />
                    </div>

                    <div className="space-y-6">
                      {[
                        {
                          step: "01",
                          title: "Analyze",
                          description: "Comprehensive assessment of your business needs",
                        },
                        {
                          step: "02",
                          title: "Strategize",
                          description: "Develop tailored financial and growth strategies",
                        },
                        { step: "03", title: "Implement", description: "Execute plans with precision and expertise" },
                        { step: "04", title: "Optimize", description: "Continuous improvement and adaptation" },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-4 p-4 rounded-xl bg-blue-900/10 border border-blue-500/10"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                            {item.step}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                            <p className="text-sm text-blue-100/70">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
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
                Ready to accelerate your business growth?
              </motion.h2>

              <motion.p
                className="text-lg text-blue-100/80 max-w-2xl mx-auto mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Contact Memphis Capital today to discover how our strategic expertise and capital solutions can help
                your business thrive.
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
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/services"
                  className="hover-lift card-hover px-8 py-3 bg-transparent border border-primary/50 text-foreground rounded-lg font-medium flex items-center justify-center gap-2"
                >
                  Explore Our Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
