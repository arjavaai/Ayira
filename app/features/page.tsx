"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Building2,
  BarChart3,
  DollarSign,
  Activity,
  TrendingUp,
  Bot,
  Smartphone,
  Headphones,
  CheckCircle2,
  ArrowRight
} from "lucide-react"

const features = [
  {
    id: 1,
    title: "Multi-Property Management",
    subtitle: "Centralized Control for All Your Hotels",
    description: "Manage all your hotels from a single, cloud-based dashboard. Assign tasks, monitor performance, and scale easily across unlimited properties. Real-time synchronization ensures you never miss a beat.",
    icon: Building2,
    color: "from-blue-500 to-blue-600",
    benefits: [
      "Unified dashboard for all properties",
      "Real-time property status updates",
      "Centralized staff task assignment",
      "Cross-property performance comparison"
    ]
  },
  {
    id: 2,
    title: "Live Analytics Dashboard",
    subtitle: "Data-Driven Decisions in Real-Time",
    description: "Track occupancy, RevPAR, bookings, cancellations, and revenue in real-time with visual, exportable KPIs. Make informed decisions with comprehensive analytics and forecasting tools.",
    icon: BarChart3,
    color: "from-purple-500 to-purple-600",
    benefits: [
      "Real-time occupancy tracking",
      "Revenue per available room (RevPAR)",
      "Booking conversion analytics",
      "Exportable performance reports"
    ]
  },
  {
    id: 3,
    title: "Dynamic Pricing Engine",
    subtitle: "Maximize Revenue with Smart Pricing",
    description: "Automatically adjust rates based on demand, seasonality, competition, and local events — maximize every booking. Our AI analyzes market conditions 24/7 to optimize your pricing strategy.",
    icon: DollarSign,
    color: "from-green-500 to-green-600",
    benefits: [
      "AI-powered price optimization",
      "Competitor analysis integration",
      "Seasonal demand forecasting",
      "Event-based pricing adjustments"
    ]
  },
  {
    id: 4,
    title: "OTA Channel Manager",
    subtitle: "Connect with 50+ Booking Platforms",
    description: "Synchronize availability and pricing across Booking.com, Airbnb, Expedia, and 50+ OTAs. Eliminate double bookings and maximize your online presence with automated inventory management.",
    icon: Activity,
    color: "from-orange-500 to-orange-600",
    benefits: [
      "Real-time inventory synchronization",
      "Automated rate distribution",
      "Zero double bookings",
      "Booking.com, Airbnb, Expedia integration"
    ]
  },
  {
    id: 5,
    title: "Revenue Management",
    subtitle: "Advanced Analytics for Profit Growth",
    description: "Forecast trends, monitor performance, and increase profitability with advanced revenue tools. Identify opportunities, track KPIs, and make strategic decisions that drive growth.",
    icon: TrendingUp,
    color: "from-teal-500 to-teal-600",
    benefits: [
      "Revenue forecasting models",
      "Profitability analysis",
      "Market trend insights",
      "Performance benchmarking"
    ]
  },
  {
    id: 6,
    title: "AI Assistant (Chatbot)",
    subtitle: "Intelligent Support for Staff and Guests",
    description: "Let AI answer FAQs, recommend actions, and assist hotel staff with automated insights. Provide 24/7 guest support while reducing workload on your team.",
    icon: Bot,
    color: "from-indigo-500 to-indigo-600",
    benefits: [
      "24/7 automated guest support",
      "Smart recommendations for staff",
      "Multi-language capabilities",
      "Integration with booking system"
    ]
  },
  {
    id: 7,
    title: "Mobile App",
    subtitle: "Manage Your Hotel from Anywhere",
    description: "Manage bookings, monitor performance, and communicate with staff — right from your phone. iOS and Android apps keep you connected to your business wherever you are.",
    icon: Smartphone,
    color: "from-pink-500 to-pink-600",
    benefits: [
      "iOS and Android native apps",
      "Real-time notifications",
      "Offline mode capabilities",
      "Staff communication tools"
    ]
  },
  {
    id: 8,
    title: "24/7 Support",
    subtitle: "Expert Help When You Need It Most",
    description: "Live chat, email, and phone support — always available when you need it most. Our hospitality experts understand your business and provide personalized assistance.",
    icon: Headphones,
    color: "from-red-500 to-red-600",
    benefits: [
      "Live chat support",
      "Phone and email assistance",
      "Hospitality industry experts",
      "Priority support for enterprise"
    ]
  }
]

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container-custom">
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-gray-900">Powerful Features for </span>
                <span className="text-blue-500">Modern Hotels</span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Everything you need to streamline operations, maximize revenue, and deliver exceptional guest experiences.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg"
                  asChild
                >
                  <a href="/experience">Book a Demo</a>
                </Button>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-8 items-start"
              >
                {/* Feature Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Feature Image */}
                <div className="w-80 h-64 rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100 flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm text-gray-600 font-medium">
                        {feature.title}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-b from-blue-600 to-blue-400">
        <div className="container-custom">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Ready to See These Features in Action?
              </h2>
              <p className="text-xl text-white mb-8">
                Book a personalized demo and discover how Aiyra can transform your hotel operations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 border-2 border-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg"
                  asChild
                >
                  <motion.a
                    href="/experience"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2"
                  >
                    Book Your Free Demo
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-medium transition-colors px-8 py-4 text-lg"
                  asChild
                >
                  <motion.a
                    href="/pricing"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Pricing Plans
                  </motion.a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
