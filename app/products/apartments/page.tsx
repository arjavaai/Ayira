"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedCounter } from "@/components/animated-counter"
import { 
  Building, 
  TrendingUp, 
  Clock, 
  Users, 
  Star,
  Shield
} from "lucide-react"

export default function ApartmentCommunitiesPage() {
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
                  <Building className="w-3 h-3 mr-1" />
                  Apartment Communities
                </Badge>
                
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
                  Smart Management for{" "}
                  <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">Apartment</span>{" "}
                  <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">Communities</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Comprehensive property management solution designed for apartment communities and multi-family housing. 
                  Streamline operations, enhance resident experience, and maximize property value.
                </p>
              </div>
            </motion.div>
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
              <Building className="w-3 h-3 mr-1" />
              Trusted by Apartment Communities
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
              Trusted by Apartment Communities{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">Worldwide</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of apartment communities who trust Aiyra to manage their operations
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "1,800+", label: "Apartment Communities", icon: Building },
              { number: "28%", label: "Operational Efficiency Gain", icon: TrendingUp },
              { number: "20min", label: "Daily Time Saved", icon: Clock },
              { number: "99.8%", label: "System Uptime", icon: Shield }
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

      <Footer />
    </div>
  )
}
