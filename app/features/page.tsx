"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import MagicBento from "@/components/MagicBento"
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#EFF0F1] to-[#626E7C]">
        <div className="container-custom">
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-black">Powerful Features for </span>
                <span className="bg-gradient-to-r from-[#097abe] to-[#3B82F6] bg-clip-text text-transparent">Modern Hotels</span>
              </motion.h1>
              <motion.p
                className="text-xl text-white mb-8"
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
                  className="bg-gradient-to-r from-[#3B82F6] to-[#097abe] text-white px-8 py-4 text-lg font-semibold rounded-full hover:from-[#097abe] hover:to-[#3B82F6] transition-all duration-300 shadow-lg"
                  asChild
                >
                  <a href="/experience">Book a Demo</a>
                </Button>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Magic Bento Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom flex justify-center">
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="59, 130, 246"
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-br from-[#EFF0F1] to-[#626E7C]">
        <div className="container-custom">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-black">Ready to See These </span>
                <span className="bg-gradient-to-r from-[#097abe] to-[#3B82F6] bg-clip-text text-transparent">Features in Action?</span>
              </h2>
              <p className="text-xl text-white mb-8">
                Book a personalized demo and discover how Aiyra can transform your hotel operations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#3B82F6] to-[#097abe] text-white px-8 py-4 text-lg font-semibold rounded-full hover:from-[#097abe] hover:to-[#3B82F6] transition-all duration-300 shadow-lg"
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
                  className="bg-[#626E7C]/10 backdrop-blur-sm text-black rounded-full font-medium border-2 border-[#626E7C]/30 hover:bg-[#626E7C]/20 transition-colors px-8 py-4 text-lg"
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
