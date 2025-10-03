"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"
import { Activity, DollarSign, Users, Bot, BarChart3, Headphones, CheckCircle2, Calendar, ArrowRight, TrendingUp, Zap, Monitor, CreditCard, MessageSquare, Settings, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack"       

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
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#EFF0F1] to-[#626E7C]" id="dashboard">
      <div className="container-custom">
        {/* Header Section */}
        <div className="mb-20">
          <Reveal>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3B82F6] to-[#097abe] text-white rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                All-In-One Platform
              </div>
              <h2 className="text-black text-5xl lg:text-7xl font-bold mb-6">      
                <AnimatedText text="Intelligent Dashboard" delay={0.2} />       
              </h2>
              <p className="text-xl text-[#626E7C] mb-4 max-w-3xl mx-auto">      
                The Operating System for hospitality
              </p>
              <p className="text-lg text-black max-w-4xl mx-auto">
                Magically simplify hotel operations, channel distribution, payments and guest experience with Aiyra's intelligent platform
              </p>
            </div>
          </Reveal>
        </div>

        {/* Hubs Grid with Cards Stack */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 lg:gap-8 xl:gap-12">
            <div className="left-0 top-0 lg:sticky lg:h-svh lg:py-12 mb-8 lg:mb-0">
              <h5 className="text-xs uppercase tracking-wide text-[#BDC3C8]">Our Platform</h5>
              <h2 className="mb-6 mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-black">
                Complete{" "}
                <span className="text-[#3B82F6]">Hospitality Management</span> Solution
              </h2>
              <p className="max-w-prose text-sm text-black">
                Aiyra's intelligent platform revolutionizes hotel operations with cutting-edge technology.
                From automated front desk operations to AI-powered guest services, our comprehensive suite
                of tools empowers hospitality professionals to deliver exceptional experiences while maximizing revenue.
              </p>
            </div>
            <ContainerScroll className="min-h-[400vh] space-y-6 lg:space-y-8 py-6 lg:py-12">
              {dashboardHubs.map((hub, index) => (
                <CardSticky
                  key={hub.id}
                  index={index + 2}
                  className="rounded-2xl border border-[#BDC3C8] p-4 sm:p-6 lg:p-8 shadow-md backdrop-blur-md bg-[#626E7C]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${hub.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <hub.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tighter text-white">
                          {hub.title}
                        </h2>
                        <p className="text-[#E0E3E5] text-xs sm:text-sm">{hub.subtitle}</p>
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6] self-start sm:self-auto">
                      {String(index + 1).padStart(2, "0")}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {hub.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#3B82F6]/20 transition-colors"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#3B82F6]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-xs sm:text-sm">{feature.label}</h4>
                          <p className="text-xs text-[#E0E3E5]">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardSticky>
              ))}
            </ContainerScroll>
          </div>
        </div>


        {/* CTA Section */}
        <Reveal delay={0.4}>
          <div className="text-center mb-20 mt-20">
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#3B82F6] to-[#097abe] hover:from-[#097abe] hover:to-[#3B82F6] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
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
                className="border-2 border-[#626E7C] text-[#626E7C] hover:bg-[#626E7C] hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-colors"
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

        {/* Support Statement */}
        <Reveal delay={0.6}>
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#3B82F6]/20 backdrop-blur-sm rounded-full border border-[#3B82F6]/30">
              <div className="w-8 h-8 bg-gradient-to-r from-[#3B82F6] to-[#097abe] rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-black font-medium">
                All solutions include 24/7 support, training & implementation
              </span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}