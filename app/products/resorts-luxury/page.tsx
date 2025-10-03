"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { AnimatedTabs } from "@/components/ui/animated-tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  BarChart3, 
  Calendar, 
  DollarSign, 
  Users, 
  Bot, 
  Smartphone, 
  CheckCircle2, 
  ArrowRight,
  Star,
  TrendingUp,
  Clock,
  Shield,
  Zap,
  Target,
  Award,
  Globe,
  Settings,
  Activity,
  Headphones,
  Sparkles,
  Crown,
  Heart,
  Utensils,
  Waves,
  Mountain,
  Car,
  Gift
} from "lucide-react"
import Image from "next/image"
// import { ScrollAnimatedText, ScrollAnimatedWords, ScrollFadeIn, ScrollSlideIn } from "@/components/ScrollAnimatedText"

export default function ResortsLuxuryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#EFF0F1] to-[#626E7C] overflow-hidden">
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
                <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200">
                  <Crown className="w-3 h-3 mr-1" />
                  Resorts & Luxury Properties
                </Badge>
                
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white">
                  Luxury Resort{" "}
                  <span className="bg-gradient-to-r from-[#097abe] to-[#3B82F6] bg-clip-text text-transparent">Management</span>{" "}
                  <span className="bg-gradient-to-r from-[#097abe] to-[#3B82F6] bg-clip-text text-transparent">System</span>
                </h1>

                <p className="text-xl text-white leading-relaxed max-w-2xl">
                  Sophisticated management platform designed for luxury resorts and high-end properties.
                  Seamlessly manage accommodations, dining, spa services, activities, and guest experiences
                  all from one elegant system.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#3B82F6] to-[#097abe] hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Experience Luxury PMS
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  Book Private Demo
                </Button>
              </div>

              {/* Feature highlights */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  All-inclusive resort management
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Luxury guest experience tools
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Multi-venue coordination
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Premium concierge features
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
                  alt="Luxury Resort Pool and Spa"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gold-500/20 rounded-full animate-pulse delay-1000"></div>
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
              Complete Resort{" "}
              <span className="text-purple-600">
                Experience Management
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Everything you need to deliver exceptional luxury experiences. From villa management to spa services, dining reservations to exclusive activities.
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
                  id: "operations",
                  label: "Operations",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/luxury-hotel-lobby-with-warm-lighting-modern-desig.jpg"
                        alt="Resort Operations Management"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                            <Settings className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Resort Operations Management
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Comprehensive resort management including accommodations, activities, dining, and guest services in one platform.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-blue-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Room & villa management
                          </div>
                          <div className="flex items-center gap-2 text-blue-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Activity scheduling
                          </div>
                          <div className="flex items-center gap-2 text-blue-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Dining reservations
                          </div>
                          <div className="flex items-center gap-2 text-blue-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Guest service coordination
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "activities",
                  label: "Activities",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/luxury-hotel-lobby-with-white-flowers-elegant-mode.jpg"
                        alt="Activity & Experience Booking"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                            <Mountain className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Activity & Experience Booking
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Integrated activity management system for spa treatments, excursions, dining, and resort experiences.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-green-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Spa appointment scheduling
                          </div>
                          <div className="flex items-center gap-2 text-green-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Tour & excursion booking
                          </div>
                          <div className="flex items-center gap-2 text-green-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Equipment rental
                          </div>
                          <div className="flex items-center gap-2 text-green-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Experience packages
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "dining",
                  label: "Dining",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/luxury-hotel-lobby-with-warm-lighting-modern-desig.jpg"
                        alt="Restaurant & Dining Management"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                            <Utensils className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Restaurant & Dining Management
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Multi-venue dining management with reservation systems, menu management, and guest preferences.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-orange-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Multi-restaurant bookings
                          </div>
                          <div className="flex items-center gap-2 text-orange-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Menu management
                          </div>
                          <div className="flex items-center gap-2 text-orange-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Special dietary tracking
                          </div>
                          <div className="flex items-center gap-2 text-orange-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Private dining coordination
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "experience",
                  label: "Experience",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/luxury-hotel-lobby-with-white-flowers-elegant-mode.jpg"
                        alt="Guest Experience Platform"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                            <Heart className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Guest Experience Platform
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Personalized guest experience management with preference tracking and luxury service coordination.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-purple-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Guest preference profiles
                          </div>
                          <div className="flex items-center gap-2 text-purple-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Concierge service management
                          </div>
                          <div className="flex items-center gap-2 text-purple-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            VIP guest tracking
                          </div>
                          <div className="flex items-center gap-2 text-purple-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Special occasion planning
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "spa",
                  label: "Spa & Wellness",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/luxury-hotel-lobby-with-warm-lighting-modern-desig.jpg"
                        alt="Spa & Wellness Center"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-500/20 rounded-xl flex items-center justify-center">
                            <Waves className="w-5 h-5 md:w-6 md:h-6 text-teal-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Spa & Wellness Center
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Complete spa and wellness management with treatment scheduling, therapist management, and package sales.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-teal-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Treatment room scheduling
                          </div>
                          <div className="flex items-center gap-2 text-teal-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Therapist management
                          </div>
                          <div className="flex items-center gap-2 text-teal-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Wellness package tracking
                          </div>
                          <div className="flex items-center gap-2 text-teal-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Membership management
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "services",
                  label: "Luxury Services",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
                      <Image
                        src="/luxury-hotel-lobby-with-white-flowers-elegant-mode.jpg"
                        alt="Luxury Guest Services"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
                      />
                      <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-gold-500/20 rounded-xl flex items-center justify-center">
                            <Crown className="w-5 h-5 md:w-6 md:h-6 text-gold-400" />
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
                            Luxury Guest Services
                          </h2>
                        </div>
                        <p className="text-xs md:text-sm text-gray-200 mt-0 leading-relaxed">
                          Premium guest service tools including butler services, private dining, and exclusive experience management.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-gold-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Butler service coordination
                          </div>
                          <div className="flex items-center gap-2 text-gold-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Private chef arrangements
                          </div>
                          <div className="flex items-center gap-2 text-gold-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Yacht & transfer booking
                          </div>
                          <div className="flex items-center gap-2 text-gold-400 text-xs md:text-sm">
                            <CheckCircle2 className="w-3 h-3" />
                            Exclusive experience access
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                }
              ]} 
              defaultTab="operations"
              className="max-w-4xl w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              Luxury Resort{" "}
              <span className="text-purple-600">Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Specialized features for high-end resort operations and guest experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Spa & Wellness",
                description: "Complete spa management with treatment scheduling, wellness packages, and therapist coordination.",
                icon: Waves,
                color: "bg-teal-100 text-teal-600"
              },
              {
                title: "Fine Dining",
                description: "Multi-venue restaurant management with sommelier services and private dining coordination.",
                icon: Utensils,
                color: "bg-orange-100 text-orange-600"
              },
              {
                title: "Exclusive Experiences",
                description: "Curated experiences, private excursions, and bespoke services for discerning guests.",
                icon: Sparkles,
                color: "bg-purple-100 text-purple-600"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
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
            <Badge variant="secondary" className="mb-6 bg-purple-100 text-purple-700 border-purple-200">
              <Crown className="w-3 h-3 mr-1" />
              Luxury Excellence
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
              Trusted by Luxury Resorts{" "}
              <span className="text-purple-600">Worldwide</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Leading luxury resorts choose Aiyra for exceptional guest experience management
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "300+", label: "Luxury Resorts", icon: Crown },
              { number: "4.9★", label: "Guest Satisfaction Score", icon: Star },
              { number: "40%", label: "Spa Revenue Increase", icon: TrendingUp },
              { number: "24/7", label: "Concierge Support", icon: Headphones }
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#EFF0F1] to-[#626E7C] relative">
        <div className="container-custom text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Top Button */}
            <div className="flex justify-center">
              <Button 
                variant="outline" 
                size="sm"
                className="bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200 rounded-lg px-4 py-2 text-sm font-normal"
              >
                Read our launch article
                <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </div>

            {/* Main Content */}
            <div className="space-y-8 max-w-4xl mx-auto">
              <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                Ready for Luxury{" "}
                <span className="bg-gradient-to-r from-[#097abe] to-[#3B82F6] bg-clip-text text-transparent">Resort</span>{" "}
                <span className="bg-gradient-to-r from-[#097abe] to-[#3B82F6] bg-clip-text text-transparent">Management?</span>
              </h2>

              <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed">
                Elevate Your Resort Experience
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white text-black border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 rounded-lg px-8 py-4 text-lg font-normal"
              >
                Experience Luxury PMS
                <span className="ml-2">👑</span>
              </Button>
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 rounded-lg px-8 py-4 text-lg font-normal"
              >
                Speak with Specialist
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8">
              <p className="text-sm text-white/80 mb-4">Join the world's most prestigious resorts who trust Aiyra to deliver exceptional guest experiences and streamline luxury operations.</p>
              <div className="flex items-center justify-center gap-8 text-sm text-white/80">
                <div>✓ Private consultation</div>
                <div>✓ Luxury implementation</div>
                <div>✓ Premium support</div>
                <div>✓ White-glove service</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
