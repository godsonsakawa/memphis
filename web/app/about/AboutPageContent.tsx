"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
}

const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
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
    <div className="relative min-h-screen overflow-hidden bg-[#0a1428]">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-[30rem] h-[30rem] rounded-full bg-amber-500/5 blur-[100px]" />
        <div className="absolute top-[40%] left-[10%] w-[20rem] h-[20rem] rounded-full bg-amber-600/5 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[25rem] h-[25rem] rounded-full bg-amber-400/5 blur-[100px]" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=50&width=50')] bg-[length:50px_50px] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-24 relative z-10">
        {/* Hero Section - Simplified and more impactful */}
        <motion.div className="mb-24" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Trusted Financial Partner
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                About{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
                  Memphis Capital
                </span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                Your strategic partner for business growth and financial excellence in Kenya and beyond.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium flex items-center gap-2 transition-all shadow-lg shadow-amber-900/20"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/services"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium flex items-center gap-2 transition-all border border-slate-700"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative aspect-square max-w-md mx-auto lg:ml-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-amber-900/20 rounded-2xl blur-xl"></div>
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-amber-900/10">
                <Image
                  src="https://img.freepik.com/free-photo/abstract-business-people-city-buildings_53876-139657.jpg?t=st=1746706321~exp=1746709921~hmac=be7cd72171c0d958e35eb734bba0c99d8c896f74713b37f7807662f6543d563b&w=1800"
                  alt="Memphis Capital Team"
                  width={600}
                  height={600}
                  className="object-cover h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Key Stats - Visual and impactful */}
        <motion.section
          className="mb-24 py-12 px-6 md:px-12 rounded-2xl bg-[#0c1a30] border border-slate-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10+", label: "Years Experience", icon: <Building className="w-6 h-6" /> },
              { value: "25+", label: "Countries Served", icon: <Globe className="w-6 h-6" /> },
              { value: "150+", label: "Clients Advised", icon: <Users className="w-6 h-6" /> },
              { value: "$50M+", label: "Capital Deployed", icon: <BarChart4 className="w-6 h-6" /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 p-3 bg-amber-500/10 rounded-full text-amber-400">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Who We Are - More visual, less text */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium">
                <Users className="w-4 h-4 mr-2" />
                Who We Are
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Strategic Partners in <span className="text-amber-400">Financial Excellence</span>
              </h2>

              <p className="text-lg text-slate-300 leading-relaxed">
                Memphis Capital Kenya Limited is your gateway to strategic business growth. We specialize in unlocking
                capital, crafting winning strategies, and providing expert financial solutions.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: <Shield className="w-5 h-5" />, text: "Trusted Advisors" },
                  { icon: <Globe className="w-5 h-5" />, text: "Global Network" },
                  { icon: <TrendingUp className="w-5 h-5" />, text: "Growth Experts" },
                  { icon: <CheckCircle className="w-5 h-5" />, text: "Proven Results" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-2 bg-amber-500/10 rounded-full text-amber-400 flex-shrink-0">{item.icon}</div>
                    <span className="text-slate-200 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-600/10 to-amber-900/10 rounded-2xl blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                <Image
                  src="https://img.freepik.com/free-photo/front-view-stacked-coins-with-dirt-plant_23-2148803904.jpg?t=st=1746706549~exp=1746710149~hmac=eb14c97ae57770c948a0348e74d1c38a1cec4972fd80255c968e96237a5b335f&w=900"
                  alt="Memphis Capital Office"
                  width={800}
                  height={600}
                  className="object-cover w-full h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <blockquote className="text-xl font-light italic text-white">
                    "With our hands-on approach and deep industry expertise, we empower businesses to thrive and scale
                    with confidence."
                  </blockquote>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Leadership Team</p>
                      <p className="text-sm text-slate-400">Memphis Capital</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Our Mission - More visual, centered */}
        <motion.section
          className="mb-24 relative py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-[#0c1a30] rounded-3xl"></div>
          <div className="absolute inset-0 border border-amber-800/30 rounded-3xl"></div>

          <div className="relative px-8 md:px-12 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="relative w-20 h-20 mx-auto">
                <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-md"></div>
                <div className="relative bg-gradient-to-br from-amber-600 to-amber-400 rounded-full w-full h-full flex items-center justify-center">
                  <Target className="w-10 h-10 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Mission
            </motion.h2>

            <motion.p
              className="text-2xl font-light text-slate-200 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              To empower businesses with strategic expertise and capital solutions that drive sustainable growth and
              long-term success.
            </motion.p>
          </div>
        </motion.section>

        {/* Why Choose Us - Tab-based for better organization */}
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
              <div className="p-3 bg-amber-500/10 rounded-full">
                <Lightbulb className="w-8 h-8 text-amber-400" />
              </div>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Why Choose Us?
            </motion.h2>

            <motion.p
              className="text-lg text-slate-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We bring a unique combination of expertise, experience, and innovation to help your business succeed
            </motion.p>
          </div>

          <Tabs defaultValue="strategic" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-8 bg-slate-900/50 p-1 rounded-lg border border-slate-800">
              {[
                { value: "strategic", label: "Strategic Investment", icon: <BarChart4 className="w-4 h-4 mr-2" /> },
                { value: "success", label: "Proven Success", icon: <TrendingUp className="w-4 h-4 mr-2" /> },
                { value: "expertise", label: "Industry Expertise", icon: <Briefcase className="w-4 h-4 mr-2" /> },
                { value: "solutions", label: "Tailored Solutions", icon: <Lightbulb className="w-4 h-4 mr-2" /> },
                { value: "network", label: "Global Network", icon: <Globe className="w-4 h-4 mr-2" /> },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center justify-center data-[state=active]:bg-amber-600 data-[state=active]:text-white"
                >
                  <span className="hidden md:flex items-center">
                    {tab.icon}
                    {tab.label}
                  </span>
                  <span className="md:hidden flex items-center">{tab.icon}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="bg-[#0c1a30] rounded-xl border border-slate-800 p-6">
              {[
                {
                  value: "strategic",
                  title: "Strategic Investment",
                  content:
                    "Our strategic investment approach combines deep market analysis with innovative financial solutions to maximize returns and minimize risks for our clients.",
                  image: "https://img.freepik.com/free-photo/investment-business-budget-credit-costs-concept_53876-13720.jpg?t=st=1746706482~exp=1746710082~hmac=f65fd7a0b9e83723335255ebd53038002f8da60798021870c52b35bd8438c597&w=1800",
                },
                {
                  value: "success",
                  title: "Proven Success",
                  content:
                    "With a track record of successful investments and business transformations, we bring proven methodologies and results-driven strategies to every engagement.",
                  image: "https://img.freepik.com/free-photo/man-saving-money-energy-crisis_23-2150061849.jpg?t=st=1746706605~exp=1746710205~hmac=834b793427bee260cab0b80c87b7c7fc32ed27d3ba6a53243a500b23c9389db2&w=1380",
                },
                {
                  value: "expertise",
                  title: "Industry Expertise",
                  content:
                    "Our team of seasoned professionals brings decades of combined experience across various industries, ensuring deep insights and informed decision-making.",
                  image: "https://img.freepik.com/free-photo/3d-background-children-with-castle_23-2150499381.jpg?t=st=1746706686~exp=1746710286~hmac=958a5e7365b53c76814372bec2ffc97ab73587c4698498296dffa143196fd208&w=1800",
                },
                {
                  value: "solutions",
                  title: "Tailored Solutions",
                  content:
                    "We understand that every business is unique. Our solutions are customized to meet your specific needs, challenges, and growth objectives.",
                  image: "https://img.freepik.com/free-photo/front-view-stacked-coins-with-dirt-plant_23-2148803904.jpg?t=st=1746706549~exp=1746710149~hmac=eb14c97ae57770c948a0348e74d1c38a1cec4972fd80255c968e96237a5b335f&w=900",
                },
                {
                  value: "network",
                  title: "Global Network",
                  content:
                    "Leverage our extensive network of industry leaders, investors, and strategic partners to access new opportunities and markets.",
                  image: "https://img.freepik.com/free-photo/plants-with-coins-stacked-dirt-banknote_23-2148803946.jpg?t=st=1746706783~exp=1746710383~hmac=adf7b3c75b8489aa572f894954565f88f5d29643dadd3b135ebf6891c21f1e96&w=1380",
                },
              ].map((tab) => (
                <TabsContent key={tab.value} value={tab.value} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-white">{tab.title}</h3>
                      <p className="text-lg text-slate-300 leading-relaxed">{tab.content}</p>
                      <div className="mt-6">
                        <Link
                          href="/services"
                          className="inline-flex items-center text-amber-400 hover:text-amber-300 font-medium"
                        >
                          Learn more
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                    <div className="rounded-xl overflow-hidden border border-slate-800">
                      <Image
                        src={tab.image || "/placeholder.svg"}
                        alt={tab.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.section>

        {/* Our Values - Card-based for better visual appeal */}
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
              <div className="p-3 bg-amber-500/10 rounded-full">
                <CheckCircle className="w-8 h-8 text-amber-400" />
              </div>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Our Values
            </motion.h2>

            <motion.p
              className="text-lg text-slate-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              The principles that guide our work and relationships
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
                color: "from-amber-600 to-amber-400",
              },
              {
                title: "Excellence",
                description:
                  "We strive for excellence in every aspect of our service delivery and client relationships.",
                icon: <TrendingUp className="w-10 h-10" />,
                color: "from-amber-500 to-amber-300",
              },
              {
                title: "Innovation",
                description: "We embrace innovative solutions to address complex business challenges.",
                icon: <Lightbulb className="w-10 h-10" />,
                color: "from-amber-400 to-amber-200",
              },
              {
                title: "Partnership",
                description: "We build lasting partnerships based on trust, collaboration, and mutual success.",
                icon: <Users className="w-10 h-10" />,
                color: "from-amber-500 to-amber-300",
              },
            ].map((value, index) => (
              <motion.div key={value.title} variants={fadeInUp} transition={{ duration: 0.5 }} className="group">
                <Card className="h-full bg-slate-900/50 border-slate-800 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${value.color}`}></div>
                  <CardContent className="p-6">
                    <div className="mb-6 text-amber-400 group-hover:text-amber-300 transition-colors">{value.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-amber-300 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-slate-300 group-hover:text-slate-200 transition-colors">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Our Approach - Visual process */}
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
              <div className="p-3 bg-amber-500/10 rounded-full">
                <ArrowRight className="w-8 h-8 text-amber-400" />
              </div>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Our Approach
            </motion.h2>

            <motion.p
              className="text-lg text-slate-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              A comprehensive methodology to deliver exceptional results
            </motion.p>
          </div>

          <div className="relative">
            {/* Connection lines */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-amber-900/50 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Analyze",
                  description: "Comprehensive assessment of your business needs",
                  icon: <LineChart className="w-6 h-6" />,
                },
                {
                  step: "02",
                  title: "Strategize",
                  description: "Develop tailored financial and growth strategies",
                  icon: <Lightbulb className="w-6 h-6" />,
                },
                {
                  step: "03",
                  title: "Implement",
                  description: "Execute plans with precision and expertise",
                  icon: <CheckCircle className="w-6 h-6" />,
                },
                {
                  step: "04",
                  title: "Optimize",
                  description: "Continuous improvement and adaptation",
                  icon: <TrendingUp className="w-6 h-6" />,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center h-full flex flex-col items-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-400 font-bold text-xl z-10 relative">
                        {item.step}
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-amber-600/10 animate-ping"></div>
                    </div>

                    <div className="p-3 bg-amber-500/10 rounded-full text-amber-400 mb-4">{item.icon}</div>

                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-amber-900/20"
            >
              Learn More About Our Process
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </motion.section>

        {/* CTA Section - More visually appealing */}
        <motion.div
          className="relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/placeholder.svg?height=600&width=1200&text=Memphis+Capital"
            alt="Memphis Capital"
            width={1200}
            height={600}
            className="w-full h-full object-cover absolute inset-0"
          />

          <div className="absolute inset-0 bg-[#0a1428]/90"></div>
          <div className="absolute inset-0 border border-amber-500/20 rounded-2xl"></div>

          <div className="relative px-8 py-16 md:py-24 max-w-4xl mx-auto text-center">
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
              className="text-lg text-slate-200 max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Contact Memphis Capital today to discover how our strategic expertise and capital solutions can help your
              business thrive.
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
                className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg shadow-amber-900/30 transition-all"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services"
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 border border-slate-700 transition-all"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
