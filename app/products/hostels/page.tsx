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
  Users,
  Bed,
  Calendar,
  DollarSign,
  Heart,
  Coffee,
  MapPin,
  PartyPopper,
  Backpack,
  Wifi,
  UtensilsCrossed,
  UserPlus
} from "lucide-react"
import Image from "next/image"

export default function HostelsPage() {
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
                  <Backpack className="w-3 h-3 mr-1" />
                  Hostels & Budget Accommodations
                </Badge>

                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
                  Smart Hostel{" "}
                  <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">Management</span>{" "}
                  <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">System</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Streamlined management solution designed specifically for hostels and budget accommodations.
                  Manage bed-level inventory, foster guest communities, and optimize operations for the modern
                  backpacker experience.
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
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Affordable pricing for budget properties
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Bed-level inventory management
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Social community features
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Backpacker platform integration
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
                  alt="Modern Hostel Dormitory with Bunk Beds"
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
              Built for{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                Modern Hostel Operations
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Everything you need to run a successful hostel. From bed-level inventory management to community
              building tools that create memorable experiences for travelers.
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
                  id: "beds",
                  label: "Bed Management",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/luxury-hotel-lobby-with-warm-lighting-modern-desig.jpg"
                        alt="Bed-Level Management"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                            <Bed className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Bed-Level Management
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Manage individual beds in shared dormitories with precise inventory control and bed assignment system.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-blue-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Individual bed tracking
                          </div>
                          <div className="flex items-center gap-2 text-blue-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Dormitory room management
                          </div>
                          <div className="flex items-center gap-2 text-blue-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Bed assignment automation
                          </div>
                          <div className="flex items-center gap-2 text-blue-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Occupancy optimization
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "community",
                  label: "Community",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/hotel-management-dashboard-with-occupancy-charts-r.jpg"
                        alt="Guest Community Features"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                            <Heart className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Guest Community Features
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Foster social connections with community boards, event planning, and guest interaction tools.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-green-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Social community boards
                          </div>
                          <div className="flex items-center gap-2 text-green-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Group activity planning
                          </div>
                          <div className="flex items-center gap-2 text-green-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Guest matching system
                          </div>
                          <div className="flex items-center gap-2 text-green-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Local recommendations
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
                        src="/modern-hotel-management-dashboard-interface-with-c.jpg"
                        alt="Budget-Friendly Pricing"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                            <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Budget-Friendly Pricing
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Dynamic pricing optimized for budget travelers with special rates for long-term stays and groups.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-purple-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Long-stay discounts
                          </div>
                          <div className="flex items-center gap-2 text-purple-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Group booking rates
                          </div>
                          <div className="flex items-center gap-2 text-purple-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Seasonal pricing
                          </div>
                          <div className="flex items-center gap-2 text-purple-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Student discounts
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "channels",
                  label: "Channels",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/luxury-hotel-lobby-with-white-flowers-elegant-mode.jpg"
                        alt="Backpacker Channel Integration"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-sky-500/20 rounded-xl flex items-center justify-center">
                            <Backpack className="w-5 h-5 md:w-6 md:h-6 text-sky-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Backpacker Channel Integration
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Connect with specialized backpacker and budget travel booking platforms and channels.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sky-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Hostelworld integration
                          </div>
                          <div className="flex items-center gap-2 text-sky-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Booking.com hostel rates
                          </div>
                          <div className="flex items-center gap-2 text-sky-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Backpacker platforms
                          </div>
                          <div className="flex items-center gap-2 text-sky-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Youth travel channels
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "events",
                  label: "Events",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/hotel-management-dashboard-with-occupancy-charts-r.jpg"
                        alt="Events & Activities"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-500/20 rounded-xl flex items-center justify-center">
                            <PartyPopper className="w-5 h-5 md:w-6 md:h-6 text-teal-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Events & Activities
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Plan and manage hostel events, walking tours, pub crawls, and social activities for guests.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-teal-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Event calendar management
                          </div>
                          <div className="flex items-center gap-2 text-teal-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Activity booking system
                          </div>
                          <div className="flex items-center gap-2 text-teal-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Tour coordination
                          </div>
                          <div className="flex items-center gap-2 text-teal-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Social event planning
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "common",
                  label: "Common Areas",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/luxury-hotel-lobby-with-warm-lighting-modern-desig.jpg"
                        alt="Common Area Management"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                            <Coffee className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Common Area Management
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Optimize shared spaces like kitchens, lounges, and work areas with usage tracking and maintenance.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-red-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Common space scheduling
                          </div>
                          <div className="flex items-center gap-2 text-red-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Kitchen usage tracking
                          </div>
                          <div className="flex items-center gap-2 text-red-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Maintenance coordination
                          </div>
                          <div className="flex items-center gap-2 text-red-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Amenity management
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                }
              ]}
              defaultTab="beds"
              className="max-w-4xl w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Hostel-Specific Features Section */}
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
              Hostel-Specific{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Tools designed specifically for the unique needs of hostel and budget accommodation operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bed Management",
                description: "Individual bed tracking in shared dormitories with automated assignment and availability management.",
                icon: Bed,
                color: "bg-blue-100 text-blue-600"
              },
              {
                title: "Guest Community",
                description: "Social features to help travelers connect, share experiences, and participate in hostel activities.",
                icon: UserPlus,
                color: "bg-green-100 text-green-600"
              },
              {
                title: "Digital Services",
                description: "WiFi management, digital check-in kiosks, and mobile-first guest services for tech-savvy travelers.",
                icon: Wifi,
                color: "bg-purple-100 text-purple-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
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
              <Backpack className="w-3 h-3 mr-1" />
              Trusted by Hostels Worldwide
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
              Join the modern{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">hostel revolution</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "1,200+", label: "Hostels & Budget Hotels", icon: Backpack },
              { number: "85%", label: "Occupancy Rate Increase", icon: TrendingUp },
              { number: "25min", label: "Check-in Time Reduction", icon: Clock },
              { number: "4.8★", label: "Guest Satisfaction", icon: Star }
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
                Ready to Transform Your Hostel?
              </h2>

              <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed">
                Build a Thriving Hostel Community
              </p>
              <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                Join the modern hostel revolution. Create amazing experiences for travelers while streamlining your
                operations and maximizing occupancy rates.
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
                Talk to Expert
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8">
              <p className="text-sm text-white/90 mb-4">Free trial • Budget-friendly pricing • Community support • Easy setup</p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
