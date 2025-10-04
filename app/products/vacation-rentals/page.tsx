"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedTabs } from "@/components/ui/animated-tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedCounter } from "@/components/animated-counter"
import {
  CheckCircle2,
  ArrowRight,
  Star,
  TrendingUp,
  Clock,
  Home,
  Calendar,
  MessageSquare,
  DollarSign,
  Wifi,
  Key,
  Sparkles,
  Globe,
  Shield,
  Bell,
  ClipboardList,
  Mail,
  Lock,
  Zap
} from "lucide-react"
import Image from "next/image"
// import { ScrollAnimatedText, ScrollAnimatedWords, ScrollFadeIn, ScrollSlideIn } from "@/components/ScrollAnimatedText"

export default function VacationRentalsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-white overflow-hidden">

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-gradient-to-r from-sky-100 to-blue-100 text-sky-700 border-sky-200 hover:from-sky-200 hover:to-blue-200">
                  <Home className="w-3 h-3 mr-1" />
                  Airbnb & Vacation Rentals
                </Badge>

                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
                  Smart Management for{" "}
                  <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">Vacation</span>{" "}
                  <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">Rentals</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Perfect for individual property owners and vacation rental managers. Automate guest communication,
                  synchronize across all platforms, and maximize your rental income with smart pricing and seamless operations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group rounded-lg"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 rounded-lg"
                >
                  See Demo
                </Button>
              </div>

              {/* Feature highlights */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-sky-500" />
                  Perfect for individual property owners
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-sky-500" />
                  Multi-platform listing management
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-sky-500" />
                  Automated guest communication
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-sky-500" />
                  Smart pricing optimization
                </div>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/luxury-hotel-lobby-with-warm-lighting-modern-desig.jpg"
                  alt="Beautiful Vacation Rental Property"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-sky-500/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Everything You Need for{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                Vacation Rental Success
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              From listing management to guest automation, we've got all the tools you need to run a successful vacation rental business with minimal effort.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <AnimatedTabs
              tabs={[
                {
                  id: "sync",
                  label: "Multi-Platform",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/luxury-hotel-lobby-with-warm-lighting-modern-desig.jpg"
                        alt="Multi-Platform Synchronization"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                            <Globe className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Multi-Platform Synchronization
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Seamlessly sync your listings across Airbnb, VRBO, Booking.com, and 20+ vacation rental platforms.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-blue-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Real-time calendar sync
                          </div>
                          <div className="flex items-center gap-2 text-blue-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Automated rate updates
                          </div>
                          <div className="flex items-center gap-2 text-blue-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Zero double bookings
                          </div>
                          <div className="flex items-center gap-2 text-blue-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Unified inbox management
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "messaging",
                  label: "Automation",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/hotel-management-dashboard-with-occupancy-charts-r.jpg"
                        alt="Automated Guest Communication"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-sky-500/20 rounded-xl flex items-center justify-center">
                            <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-sky-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Automated Guest Communication
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Smart messaging system with automated check-in instructions, local recommendations, and guest support.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sky-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Welcome message automation
                          </div>
                          <div className="flex items-center gap-2 text-sky-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Check-in instruction delivery
                          </div>
                          <div className="flex items-center gap-2 text-sky-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Local recommendations
                          </div>
                          <div className="flex items-center gap-2 text-sky-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            24/7 automated support
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "access",
                  label: "Smart Access",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/modern-hotel-management-dashboard-interface-with-c.jpg"
                        alt="Smart Access Management"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                            <Key className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Smart Access Management
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Automated keyless entry with smart locks, access codes, and guest arrival coordination.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-purple-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Smart lock integration
                          </div>
                          <div className="flex items-center gap-2 text-purple-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Automated access codes
                          </div>
                          <div className="flex items-center gap-2 text-purple-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Guest arrival notifications
                          </div>
                          <div className="flex items-center gap-2 text-purple-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Keyless entry management
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "pricing",
                  label: "Pricing",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/luxury-hotel-lobby-with-white-flowers-elegant-mode.jpg"
                        alt="Dynamic Pricing Engine"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                            <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Dynamic Pricing Engine
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          AI-powered pricing optimization based on local events, seasonality, and market demand.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-orange-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Event-based pricing
                          </div>
                          <div className="flex items-center gap-2 text-orange-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Seasonal adjustments
                          </div>
                          <div className="flex items-center gap-2 text-orange-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Market demand analysis
                          </div>
                          <div className="flex items-center gap-2 text-orange-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Revenue optimization
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "cleaning",
                  label: "Cleaning",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/luxury-hotel-lobby-with-warm-lighting-modern-desig.jpg"
                        alt="Cleaning & Maintenance"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-500/20 rounded-xl flex items-center justify-center">
                            <ClipboardList className="w-5 h-5 md:w-6 md:h-6 text-teal-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Cleaning & Maintenance
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Coordinate cleaning schedules, maintenance tasks, and property preparation between bookings.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-teal-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Automated cleaning scheduling
                          </div>
                          <div className="flex items-center gap-2 text-teal-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Maintenance task management
                          </div>
                          <div className="flex items-center gap-2 text-teal-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Turnover coordination
                          </div>
                          <div className="flex items-center gap-2 text-teal-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Property inspection logs
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "checkin",
                  label: "Check-in",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/hotel-management-dashboard-with-occupancy-charts-r.jpg"
                        alt="Check-in Automation"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                            <Shield className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Check-in Automation
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Streamlined check-in process with automated guest verification and welcome procedures.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-red-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Digital guest verification
                          </div>
                          <div className="flex items-center gap-2 text-red-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Automated welcome procedures
                          </div>
                          <div className="flex items-center gap-2 text-red-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            House rule acceptance
                          </div>
                          <div className="flex items-center gap-2 text-red-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Local guide delivery
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                }
              ]}
              defaultTab="sync"
              className="max-w-4xl w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Platform Integration Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Integrated with All{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">Major Platforms</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Seamlessly manage your listings across all vacation rental platforms from one dashboard
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Airbnb Integration",
                description: "Full Airbnb API integration with real-time sync of bookings, messages, and calendar updates.",
                icon: Home,
                color: "bg-red-100 text-red-600"
              },
              {
                title: "VRBO & Booking.com",
                description: "Synchronize with VRBO, Booking.com, and other major vacation rental platforms automatically.",
                icon: Globe,
                color: "bg-blue-100 text-blue-600"
              },
              {
                title: "Direct Bookings",
                description: "Create your own booking website to avoid platform fees and build direct guest relationships.",
                icon: Sparkles,
                color: "bg-sky-100 text-sky-600"
              }
            ].map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 ${platform.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <platform.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {platform.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {platform.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-6 bg-gray-100 text-gray-700 border-gray-200">
              <Home className="w-3 h-3 mr-1" />
              Trusted by Vacation Rental Owners
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
              Join thousands of property owners who've{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">automated their business</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "8,500+", label: "Vacation Rental Properties", icon: Home },
              { number: "38%", label: "Revenue Increase", icon: TrendingUp },
              { number: "90%", label: "Guest Communication Automated", icon: MessageSquare },
              { number: "4.9★", label: "Average Guest Rating", icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="bg-white border border-gray-200 hover:shadow-xl hover:border-sky-200 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-8">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-r from-sky-100 to-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <stat.icon className="w-6 h-6 text-sky-600" />
                    </motion.div>
                    <AnimatedCounter 
                      value={stat.number}
                      duration={2500}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent mb-2"
                    />
                    <div className="text-gray-600 font-medium text-sm">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-sky-400 to-blue-600 relative">
        <div className="container-custom text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Main Content */}
            <div className="space-y-8 max-w-4xl mx-auto">
              <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                Ready to Automate Your Rental?
              </h2>

              <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed">
                Maximize Your Rental Income
              </p>
              <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                Join thousands of successful vacation rental owners who've automated their operations and increased
                revenue with smart pricing and seamless guest management.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-sky-600 hover:bg-sky-50 rounded-lg px-8 py-4 text-lg font-normal border-2 border-white"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-sky-600 rounded-lg px-8 py-4 text-lg font-normal"
              >
                Talk to Specialist
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8">
              <p className="text-sm text-white/80 mb-4">Free 30-day trial • No setup fees • Platform integrations included • Cancel anytime</p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
