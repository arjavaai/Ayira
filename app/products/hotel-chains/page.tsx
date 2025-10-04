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
  Building2,
  Users,
  TrendingUp,
  Shield,
  BarChart3,
  Bot,
  Globe,
  Lock,
  Settings,
  Database,
  Zap,
  Activity,
  Award,
  Target,
  DollarSign,
  UserCheck,
  LineChart
} from "lucide-react"
import Image from "next/image"

export default function HotelChainsPage() {
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
                  <Building2 className="w-3 h-3 mr-1" />
                  Hotel Chains & Groups
                </Badge>

                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
                  Enterprise PMS for{" "}
                  <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">Hotel</span>{" "}
                  <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">Chains</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  More than just enterprise PMS - Aiyra combines multi-property management with built-in AI chatbot,
                  advanced business intelligence, and predictive analytics. Get three enterprise platforms in one
                  integrated solution designed specifically for hotel chains and groups.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group rounded-lg"
                >
                  Schedule Enterprise Demo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 rounded-lg"
                >
                  Contact Sales
                </Button>
              </div>

              {/* Feature highlights */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Enterprise AI chatbot & automation included
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Advanced BI & predictive analytics included
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Multi-property intelligence dashboards
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Dedicated enterprise account management
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
                  alt="Modern Hotel Chain Building"
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
              Enterprise-Grade{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                Multi-Property Management
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Designed for hotel chains and groups that need centralized control, brand consistency, and scalable operations across multiple properties.
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
                  id: "dashboard",
                  label: "Dashboard",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/hotel-management-dashboard-with-occupancy-charts-r.jpg"
                        alt="Multi-Property Dashboard"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                            <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Multi-Property Dashboard
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Centralized command center for managing multiple properties with real-time visibility across your entire portfolio.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-blue-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Unified property overview
                          </div>
                          <div className="flex items-center gap-2 text-blue-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Cross-property analytics
                          </div>
                          <div className="flex items-center gap-2 text-blue-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Centralized reporting
                          </div>
                          <div className="flex items-center gap-2 text-blue-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Brand consistency management
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "users",
                  label: "User Management",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/luxury-hotel-lobby-with-warm-lighting-modern-desig.jpg"
                        alt="Enterprise User Management"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                            <UserCheck className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Enterprise User Management
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Advanced role-based access control with customizable permissions for different staff levels and properties.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-green-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Role-based permissions
                          </div>
                          <div className="flex items-center gap-2 text-green-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Staff hierarchy management
                          </div>
                          <div className="flex items-center gap-2 text-green-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Multi-property access
                          </div>
                          <div className="flex items-center gap-2 text-green-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Audit trail tracking
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "bi",
                  label: "Business Intelligence",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/modern-hotel-management-dashboard-interface-with-c.jpg"
                        alt="Enterprise Business Intelligence"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-sky-500/20 rounded-xl flex items-center justify-center">
                            <LineChart className="w-5 h-5 md:w-6 md:h-6 text-sky-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Enterprise Business Intelligence
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Built-in BI platform with predictive analytics, cross-property comparisons, and executive dashboards - no additional software needed.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sky-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Portfolio benchmarking
                          </div>
                          <div className="flex items-center gap-2 text-sky-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Predictive revenue analytics
                          </div>
                          <div className="flex items-center gap-2 text-sky-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Custom executive dashboards
                          </div>
                          <div className="flex items-center gap-2 text-sky-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Multi-property intelligence
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "ai",
                  label: "AI Chatbot",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/luxury-hotel-lobby-with-white-flowers-elegant-mode.jpg"
                        alt="Enterprise AI Chatbot"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-sky-500/20 rounded-xl flex items-center justify-center">
                            <Bot className="w-5 h-5 md:w-6 md:h-6 text-sky-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Enterprise AI Chatbot
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Scalable AI chatbot system that handles guest inquiries across all properties with brand-consistent responses and multi-language support.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sky-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Multi-property AI support
                          </div>
                          <div className="flex items-center gap-2 text-sky-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Brand-consistent responses
                          </div>
                          <div className="flex items-center gap-2 text-sky-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Multi-language capabilities
                          </div>
                          <div className="flex items-center gap-2 text-sky-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Enterprise-grade automation
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
                        src="/hotel-management-dashboard-with-occupancy-charts-r.jpg"
                        alt="Global Channel Management"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-500/20 rounded-xl flex items-center justify-center">
                            <Globe className="w-5 h-5 md:w-6 md:h-6 text-teal-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Global Channel Management
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Manage distribution across 50+ OTA channels with group-level rate management and inventory control.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-teal-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Bulk rate updates
                          </div>
                          <div className="flex items-center gap-2 text-teal-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Group inventory control
                          </div>
                          <div className="flex items-center gap-2 text-teal-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Channel performance analytics
                          </div>
                          <div className="flex items-center gap-2 text-teal-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Commission optimization
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "revenue",
                  label: "Revenue",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/modern-hotel-management-dashboard-interface-with-c.jpg"
                        alt="Revenue Management System"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                            <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Revenue Management System
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          AI-powered revenue optimization with market intelligence and competitive analysis across all properties.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-red-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Market intelligence
                          </div>
                          <div className="flex items-center gap-2 text-red-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Competitive analysis
                          </div>
                          <div className="flex items-center gap-2 text-red-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Group pricing strategies
                          </div>
                          <div className="flex items-center gap-2 text-red-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Revenue forecasting
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                }
              ]}
              defaultTab="dashboard"
              className="max-w-4xl w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Security Section */}
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
              Built for{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">Enterprise Scale</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Trusted by leading hotel chains worldwide for managing hundreds of properties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise Security",
                description: "Bank-level security with SSO integration, data encryption, and compliance management.",
                icon: Lock,
                features: ["SSO integration", "Data encryption", "Compliance reporting", "Security monitoring"]
              },
              {
                title: "Custom Integrations",
                description: "Connect with your existing systems through custom APIs and integrations.",
                icon: Settings,
                features: ["Custom API access", "System integrations", "Data migration", "Third-party tools"]
              },
              {
                title: "Dedicated Support",
                description: "24/7 priority support with dedicated account management and CSM.",
                icon: Users,
                features: ["24/7 priority support", "Dedicated CSM", "Training programs", "Onboarding assistance"]
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
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mb-6">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Hotel Chains", icon: Building2 },
              { number: "10,000+", label: "Properties Managed", icon: Globe },
              { number: "45%", label: "Operational Efficiency Gain", icon: TrendingUp },
              { number: "99.99%", label: "Enterprise Uptime SLA", icon: Shield }
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
                Ready for Enterprise-Grade PMS?
              </h2>

              <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed">
                Scale Your Hotel Chain Operations
              </p>
              <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                Join leading hotel chains who trust Aiyra to manage their multi-property operations. Get enterprise
                features, dedicated support, and scalable infrastructure.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-sky-600 hover:bg-sky-50 rounded-lg px-8 py-4 text-lg font-normal border-2 border-white"
              >
                Schedule Enterprise Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-sky-600 rounded-lg px-8 py-4 text-lg font-normal"
              >
                Contact Sales Team
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8">
              <p className="text-sm text-white/90 mb-4">Custom deployment • Enterprise SLA • Dedicated support • Security compliance</p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
