"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"
import { Activity, DollarSign, Users, Bot, BarChart3, Headphones, CheckCircle2, Calendar, ArrowRight, TrendingUp, Zap, Monitor, CreditCard, MessageSquare, Settings, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const dashboardHubs = [
  {
    id: "operations",
    title: "Operations Hub",
    subtitle: "Automate front desk, back office, and housekeeping tasks",
    icon: Settings,
    color: "from-blue-500 to-blue-600",
    features: [
      { icon: Monitor, label: "PMS", description: "Complete property management system" },
      { icon: DollarSign, label: "POS", description: "Point of sale integration" },
      { icon: BarChart3, label: "Analytics", description: "Real-time performance insights" },
      { icon: CheckCircle2, label: "Tasks", description: "Automated workflow management" }
    ]
  },
  {
    id: "sales",
    title: "Sales Hub", 
    subtitle: "Maximize bookings and revenue with advanced tools",
    icon: TrendingUp,
    color: "from-green-500 to-green-600",
    features: [
      { icon: Calendar, label: "Booking Engine", description: "Direct booking optimization" },
      { icon: Activity, label: "Channel Manager", description: "Multi-platform distribution" },
      { icon: DollarSign, label: "Revenue Manager", description: "Dynamic pricing automation" },
      { icon: BarChart3, label: "Analytics", description: "Revenue forecasting & insights" }
    ]
  },
  {
    id: "guest",
    title: "Guest Hub",
    subtitle: "Enhance guest experience with personalized services", 
    icon: Users,
    color: "from-purple-500 to-purple-600",
    features: [
      { icon: MessageSquare, label: "Guest Messaging", description: "Automated communication" },
      { icon: Bot, label: "AI Support", description: "24/7 intelligent assistance" },
      { icon: CheckCircle2, label: "Reviews", description: "Feedback management system" },
      { icon: Users, label: "Profiles", description: "Guest preference tracking" }
    ]
  },
  {
    id: "payments",
    title: "Payments Hub",
    subtitle: "Simplify billing and secure payment processing",
    icon: CreditCard,
    color: "from-orange-500 to-orange-600", 
    features: [
      { icon: CreditCard, label: "Payment Gateway", description: "Secure transaction processing" },
      { icon: DollarSign, label: "Billing", description: "Automated invoice generation" },
      { icon: CheckCircle2, label: "Settlement", description: "Fast fund transfers" },
      { icon: Shield, label: "Security", description: "PCI DSS compliance" }
    ]
  }
]

export function MaterialsSection() {
  const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    return (
      <span>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + index * 0.03,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            style={{ display: char === " " ? "inline" : "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    )
  }

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-blue-50/20 to-white" id="dashboard">
      <div className="container-custom">
        {/* Header Section */}
        <div className="mb-20">
          <Reveal>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                All-In-One Platform
              </div>
              <h2 className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent text-5xl lg:text-7xl font-bold mb-6">
                <AnimatedText text="Intelligent Dashboard" delay={0.2} />
              </h2>
              <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
                The Operating System for hospitality
              </p>
              <p className="text-lg text-gray-500 max-w-4xl mx-auto">
                Magically simplify hotel operations, channel distribution, payments and guest experience with Aiyra's intelligent platform
              </p>
            </div>
          </Reveal>
      </div>

        {/* Hubs Grid */}
        <div className="mb-20">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {dashboardHubs.map((hub, index) => (
              <motion.div
                key={hub.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    },
                  },
                }}
              >
                <Reveal delay={index * 0.1}>
                  <Card className="group h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <CardHeader className="p-8 pb-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${hub.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <hub.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{hub.title}</CardTitle>
                          <CardDescription className="text-gray-600 text-base leading-relaxed">
                            {hub.subtitle}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                      <div className="grid grid-cols-2 gap-4">
                        {hub.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <feature.icon className="w-5 h-5 text-gray-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 text-sm">{feature.label}</h4>
                              <p className="text-xs text-gray-500">{feature.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <Reveal delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <motion.div
              className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl border border-blue-200"
              whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">98%</div>
              <p className="text-gray-600 font-medium">Revenue Optimization</p>
            </motion.div>
                  <motion.div
              className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-3xl border border-green-200"
              whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Activity className="w-10 h-10 text-white" />
                    </div>
              <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-2">24/7</div>
              <p className="text-gray-600 font-medium">Real-time Monitoring</p>
                  </motion.div>
            <motion.div
              className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl border border-purple-200"
              whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Bot className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2">AI</div>
              <p className="text-gray-600 font-medium">Powered Intelligence</p>
            </motion.div>
              </div>
            </Reveal>

        {/* CTA Section */}
        <Reveal delay={0.4}>
          <div className="text-center mb-20">
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
              <motion.a
                href="#experience"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2"
                >
                  Explore the Aiyra Experience
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-full"
                asChild
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Demo
              </motion.a>
              </Button>
            </motion.div>
          </div>
        </Reveal>

        {/* Dashboard Preview */}
        <Reveal delay={0.5}>
            <motion.div
            className="relative max-w-6xl mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
            <Card className="bg-white border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                  <Image 
                    src="/hotel-management-dashboard-with-occupancy-charts-r.jpg" 
                    alt="Aiyra Dashboard Preview" 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </CardContent>
            </Card>
            </motion.div>
          </Reveal>
      </div>
    </section>
  )
}
