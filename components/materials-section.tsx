"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"
import { Activity, DollarSign, Users, Bot, BarChart3, Headphones, CheckCircle2, Calendar, ArrowRight, TrendingUp, Zap, Monitor, CreditCard, MessageSquare, Settings, Shield, Building, TreePine, Home, MapPin, Star, Users2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack"

const propertySolutions = [
  {
    id: "independent-hotels",
    title: "Independent Hotels",
    subtitle: "Tools to compete with big chains",
    icon: Building,
    color: "from-blue-500 to-blue-600",
    features: [
      { icon: Monitor, label: "Simplified Management", description: "Dashboard for streamlined operations" },
      { icon: Users, label: "Guest Experience", description: "Improve with fewer staff" },
      { icon: BarChart3, label: "Performance Analytics", description: "Real-time insights and reporting" },
      { icon: CheckCircle2, label: "Competitive Tools", description: "Features to match major chains" }
    ]
  },
  {
    id: "hotel-chains",
    title: "Hotel Chains", 
    subtitle: "Centralized multi-property control",
    icon: Building,
    color: "from-green-500 to-green-600",
    features: [
      { icon: Activity, label: "Multi-Property Control", description: "Centralized management system" },
      { icon: BarChart3, label: "Performance Benchmarking", description: "Compare across properties" },
      { icon: DollarSign, label: "Revenue Optimization", description: "Corporate-level strategies" },
      { icon: Settings, label: "Unified Operations", description: "Streamlined chain management" }
    ]
  },
  {
    id: "resorts-luxury",
    title: "Resorts & Luxury Properties",
    subtitle: "High-end guest personalization", 
    icon: Star,
    color: "from-purple-500 to-purple-600",
    features: [
      { icon: Users, label: "VIP Service Automation", description: "Personalized luxury experiences" },
      { icon: MessageSquare, label: "Guest Personalization", description: "Tailored high-end services" },
      { icon: CheckCircle2, label: "Reputation Management", description: "Review and feedback systems" },
      { icon: Star, label: "Luxury Standards", description: "Premium service delivery" }
    ]
  },
  {
    id: "hostels",
    title: "Hostels",
    subtitle: "Budget-friendly solutions",
    icon: Users2,
    color: "from-orange-500 to-orange-600", 
    features: [
      { icon: Users2, label: "Community Experience", description: "Community-driven management" },
      { icon: Calendar, label: "Shared Room Booking", description: "Optimized bed allocation" },
      { icon: MessageSquare, label: "Guest Communication", description: "Community-focused messaging" },
      { icon: DollarSign, label: "Budget Solutions", description: "Cost-effective management tools" }
    ]
  },
  {
    id: "airbnb-vacation",
    title: "Airbnb & Vacation Rentals",
    subtitle: "Multi-platform calendar sync",
    icon: Home,
    color: "from-teal-500 to-teal-600", 
    features: [
      { icon: Calendar, label: "Calendar Sync", description: "Across multiple platforms" },
      { icon: Monitor, label: "Owner Dashboards", description: "Single/multi-property management" },
      { icon: MessageSquare, label: "Guest Communication", description: "Automated messaging system" },
      { icon: Activity, label: "Platform Integration", description: "Seamless booking management" }
    ]
  },
  {
    id: "apartment-communities",
    title: "Apartment Communities",
    subtitle: "Long-term rental management",
    icon: MapPin,
    color: "from-indigo-500 to-indigo-600", 
    features: [
      { icon: Calendar, label: "Community Events", description: "Event management system" },
      { icon: MessageSquare, label: "Tenant Communication", description: "Centralized communication hub" },
      { icon: Settings, label: "Amenity Integration", description: "Modern booking systems" },
      { icon: Users, label: "Long-term Rentals", description: "Residential property management" }
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
                <AnimatedText text="Property Management Solutions" delay={0.2} />
              </h2>
              <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
                Discover tailored solutions designed for every type of hospitality business
              </p>
              <p className="text-lg text-gray-500 max-w-4xl mx-auto">
                From independent hotels to luxury resorts, our comprehensive platform adapts to your unique needs and business model
              </p>
            </div>
          </Reveal>
        </div>

        {/* Hubs Grid with Cards Stack */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 lg:gap-8 xl:gap-12">
            <div className="left-0 top-0 lg:sticky lg:h-svh lg:py-12 mb-8 lg:mb-0">
              <h5 className="text-xs uppercase tracking-wide text-gray-500">Our Solutions</h5>
              <h2 className="mb-6 mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
                Tailored{" "}
                <span className="text-blue-500">Property Management</span> Solutions
              </h2>
              <p className="max-w-prose text-sm text-gray-600">
                Every hospitality business is unique. Our platform adapts to your specific needs, whether you're 
                managing a boutique hotel, luxury resort, hostel, or vacation rental. Each solution is designed 
                to maximize efficiency and enhance guest experiences for your particular business model.
              </p>
            </div>
            <ContainerScroll className="min-h-[600vh] space-y-6 lg:space-y-8 py-6 lg:py-12">
              {propertySolutions.map((solution, index) => (
                <CardSticky
                  key={solution.id}
                  index={index + 1}
                  className="rounded-2xl border p-4 sm:p-6 lg:p-8 shadow-md backdrop-blur-md bg-white"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <solution.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tighter text-gray-900">
                          {solution.title}
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm">{solution.subtitle}</p>
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-500 self-start sm:self-auto">
                      {String(index + 1).padStart(2, "0")}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {solution.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">{feature.label}</h4>
                          <p className="text-xs text-gray-500">{feature.description}</p>
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
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <motion.a
                  href="#experience"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2"
                >
                  Book a Demo
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
                  Schedule Demo
                </motion.a>
              </Button>
            </motion.div>
          </div>
        </Reveal>

        {/* Support Statement */}
        <Reveal delay={0.6}>
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-50 rounded-full">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-700 font-medium">
                All solutions include 24/7 support, training & implementation
              </span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
