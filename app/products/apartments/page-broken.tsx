"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedTabs } from "@/components/ui/animated-tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  CheckCircle2,
  ArrowRight,
  Star,
  Building,
  TrendingUp,
  Users,
  FileText,
  DollarSign,
  Wrench,
  Shield,
  Bell,
  Calendar,
  CreditCard,
  Home,
  Lock,
  Heart,
  Camera,
  UserCheck,
  CalendarCheck
} from "lucide-react"
import Image from "next/image"
// import { ScrollAnimatedText, ScrollAnimatedWords, ScrollFadeIn, ScrollSlideIn } from "@/components/ScrollAnimatedText"

export default function ApartmentCommunitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-neutral-light to-neutral-medium overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-teal-100 text-teal-700 border-teal-200 hover:bg-teal-200">
                  <Building className="w-3 h-3 mr-1" />
                  Apartment Communities
                </Badge>

                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white">
                  Smart Management for{" "}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Apartment</span>{" "}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Communities</span>
                </h1>

                <p className="text-xl text-white leading-relaxed max-w-2xl">
                  Comprehensive management solution for apartment complexes and residential communities. Streamline
                  lease management, automate rent collection, enhance community engagement, and provide exceptional
                  tenant experiences.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-brand-secondary to-brand-primary hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Schedule Demo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  Contact Sales
                </Button>
              </div>

              {/* Feature highlights */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Complete residential property management
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Digital lease management system
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Automated rent collection
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Maintenance request tracking
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
                  src="/luxury-hotel-lobby-with-white-flowers-elegant-mode.jpg"
                  alt="Modern Apartment Community Complex"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-teal-500/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 text-center">
            Complete Residential Community Management
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed text-center mb-16">
            Everything you need to manage modern apartment communities efficiently. From digital leasing to
            community engagement and maintenance coordination.
          </p>

          <div className="flex justify-center">
            <AnimatedTabs
              tabs={[
                {
                  id: "lease",
                  label: "Lease Management",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/luxury-hotel-lobby-with-warm-lighting-modern-desig.jpg"
                        alt="Lease Management System"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                            <FileText className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Lease Management System
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Comprehensive lease management with automated renewals, document storage, and compliance tracking.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-blue-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Digital lease agreements
                          </div>
                          <div className="flex items-center gap-2 text-blue-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Renewal automation
                          </div>
                          <div className="flex items-center gap-2 text-blue-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Document management
                          </div>
                          <div className="flex items-center gap-2 text-blue-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Compliance tracking
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "portal",
                  label: "Tenant Portal",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/hotel-management-dashboard-with-occupancy-charts-r.jpg"
                        alt="Tenant Portal & Community"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                            <Users className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Tenant Portal & Community
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Modern tenant portal with community features, announcements, and resident communication tools.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-green-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Online rent payments
                          </div>
                          <div className="flex items-center gap-2 text-green-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Community announcements
                          </div>
                          <div className="flex items-center gap-2 text-green-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Resident directory
                          </div>
                          <div className="flex items-center gap-2 text-green-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Event coordination
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "maintenance",
                  label: "Maintenance",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/modern-hotel-management-dashboard-interface-with-c.jpg"
                        alt="Maintenance Request System"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                            <Wrench className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Maintenance Request System
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Streamlined maintenance management with work order tracking, vendor coordination, and tenant communication.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-purple-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Online maintenance requests
                          </div>
                          <div className="flex items-center gap-2 text-purple-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Work order tracking
                          </div>
                          <div className="flex items-center gap-2 text-purple-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Vendor management
                          </div>
                          <div className="flex items-center gap-2 text-purple-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Priority scheduling
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "finance",
                  label: "Finance",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/luxury-hotel-lobby-with-white-flowers-elegant-mode.jpg"
                        alt="Rent Collection & Finance"
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
                            Rent Collection & Finance
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Automated rent collection with payment processing, late fee management, and financial reporting.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-orange-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Automated rent collection
                          </div>
                          <div className="flex items-center gap-2 text-orange-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Late fee processing
                          </div>
                          <div className="flex items-center gap-2 text-orange-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Financial reporting
                          </div>
                          <div className="flex items-center gap-2 text-orange-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Payment tracking
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "security",
                  label: "Security",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/hotel-management-dashboard-with-occupancy-charts-r.jpg"
                        alt="Security & Access Control"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-500/20 rounded-xl flex items-center justify-center">
                            <Shield className="w-5 h-5 md:w-6 md:h-6 text-teal-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Security & Access Control
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Integrated security system with access control, visitor management, and community safety features.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-teal-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Access control management
                          </div>
                          <div className="flex items-center gap-2 text-teal-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Visitor registration
                          </div>
                          <div className="flex items-center gap-2 text-teal-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Security monitoring
                          </div>
                          <div className="flex items-center gap-2 text-teal-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Emergency alerts
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
                        src="/luxury-hotel-lobby-with-warm-lighting-modern-desig.jpg"
                        alt="Community Engagement"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                            <Heart className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Community Engagement
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Tools to build vibrant communities with events, amenity booking, and resident communication.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-red-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Event planning tools
                          </div>
                          <div className="flex items-center gap-2 text-red-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Amenity reservations
                          </div>
                          <div className="flex items-center gap-2 text-red-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Community boards
                          </div>
                          <div className="flex items-center gap-2 text-red-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Neighbor connections
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                }
              ]}
              defaultTab="lease"
              className="max-w-4xl w-full"
            />
            </div>
        </div>
      </section>

      {/* Modern Features Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 text-center">
            Modern Community Living Features
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed text-center mb-16">
            Tools designed to create vibrant, connected apartment communities where residents love to live
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tenant Portal",
                description: "Modern online portal for rent payments, maintenance requests, and community communication.",
                icon: Home,
                color: "bg-blue-100 text-blue-600"
              },
              {
                title: "Community Events",
                description: "Event planning tools, amenity booking system, and community engagement features.",
                icon: Calendar,
                color: "bg-green-100 text-green-600"
              },
              {
                title: "Security & Safety",
                description: "Access control, visitor management, and emergency communication systems.",
                icon: Lock,
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
          <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6 tracking-tight text-center">
            Leading property management companies choose Aiyra
          </h2>
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-gray-100 text-gray-700 border-gray-200">
              <Building className="w-3 h-3 mr-1" />
              Trusted by Apartment Communities
            </Badge>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "450+", label: "Apartment Communities", icon: Building },
              { number: "25,000+", label: "Residential Units", icon: Home },
              { number: "95%", label: "Rent Collection Rate", icon: CreditCard },
              { number: "4.7★", label: "Tenant Satisfaction", icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-black mb-2">
                      {stat.number}
                    </div>
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-neutral-light to-neutral-medium relative">
        <div className="container-custom text-center relative">
          <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight text-center">
            Ready to Transform Your Community?
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto mb-12">
            <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed">
              Build Thriving Apartment Communities
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Join forward-thinking property managers who've revolutionized their apartment communities with modern
              technology, better tenant experiences, and streamlined operations.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 rounded-lg px-8 py-4 text-lg font-normal"
              >
                Schedule Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-black border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 rounded-lg px-8 py-4 text-lg font-normal"
              >
                Contact Sales Team
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8">
              <p className="text-sm text-white/80 mb-4">Custom implementation • Training included • Ongoing support • Scalable solution</p>
            </div>
            </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
