"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Reveal } from "./reveal"
import { Server, Bot, BarChart3, CheckCircle2, ArrowRight, Sparkles } from "lucide-react"

const platforms = [
  {
    id: "pms",
    icon: Server,
    name: "Property Management System",
    description:
      "Complete PMS with reservations, check-ins, housekeeping, and operations management for all property types.",
    features: ["Reservations & Channel Management", "Housekeeping & Maintenance", "Guest Communication"],
    color: "blue",
    gradient: "from-blue-50 via-blue-100/50 to-indigo-50",
    accentColor: "blue",
    bgPattern: "bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1)_0%,transparent_50%)]",
  },
  {
    id: "ai",
    icon: Bot,
    name: "AI Chatbot & Automation",
    description:
      "Built-in AI chatbot that handles guest inquiries, automates responses, and provides 24/7 customer support.",
    features: ["24/7 Automated Guest Support", "Multi-language Capabilities", "Smart Recommendations"],
    color: "purple",
    gradient: "from-purple-50 via-purple-100/50 to-pink-50",
    accentColor: "purple",
    bgPattern: "bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1)_0%,transparent_50%)]",
  },
  {
    id: "analytics",
    icon: BarChart3,
    name: "Analytics & Business Intelligence",
    description:
      "Advanced BI platform with real-time dashboards, predictive analytics, and actionable insights for data-driven decisions.",
    features: ["Real-time Performance Dashboards", "Predictive Revenue Analytics", "Custom KPI Tracking"],
    color: "teal",
    gradient: "from-teal-50 via-teal-100/50 to-emerald-50",
    accentColor: "teal",
    bgPattern: "bg-[radial-gradient(circle_at_40%_40%,rgba(20,184,166,0.1)_0%,transparent_50%)]",
  },
]

export function CollectionStrip() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={containerRef} className="py-20 lg:py-32 bg-gradient-to-b from-white to-blue-50/30">
      <div className="mb-12">
        <Reveal>
          <div className="container-custom text-center">
            <h2 className="text-neutral-900 mb-4 text-5xl lg:text-6xl font-normal">More Than Just PMS Software</h2>
            <p className="text-xl text-neutral-600 mb-2">Three Platforms in One Solution</p>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Unlike traditional PMS systems, Aiyra combines property management, AI intelligence, and business
              analytics in one integrated platform.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {platforms.map((platform, index) => (
            <Reveal key={platform.id} delay={index * 0.1}>
              <motion.div
                className={`relative group overflow-hidden rounded-3xl bg-gradient-to-br ${platform.gradient} border border-white/20 backdrop-blur-sm hover:border-white/40 transition-all duration-500 cursor-pointer`}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {/* Background Pattern */}
                <div className={`absolute inset-0 ${platform.bgPattern} opacity-50`} />
                
                {/* Glassmorphism Effect */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />
                
                {/* Card Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Icon with Modern Styling */}
                  <motion.div 
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                      platform.accentColor === 'blue' 
                        ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40' 
                        : platform.accentColor === 'purple'
                        ? 'bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40'
                        : 'bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg shadow-teal-500/25 group-hover:shadow-teal-500/40'
                    }`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <platform.icon className="w-10 h-10 text-white" />
                    <motion.div
                      className="absolute -top-1 -right-1"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-4 h-4 text-yellow-400" />
                    </motion.div>
                  </motion.div>

                  {/* Bold Typography */}
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4 leading-tight group-hover:text-neutral-800 transition-colors duration-300">
                    {platform.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-neutral-700 mb-6 leading-relaxed text-sm group-hover:text-neutral-800 transition-colors duration-300">
                    {platform.description}
                  </p>

                  {/* Features with Enhanced Styling */}
                  <div className="flex-1">
                    <ul className="space-y-3">
                      {platform.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-center gap-3 text-sm font-medium text-neutral-700 group-hover:text-neutral-800 transition-colors duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.1) + (idx * 0.1) + 0.3 }}
                        >
                          <motion.div
                            className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                              platform.accentColor === 'blue' 
                                ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                                : platform.accentColor === 'purple'
                                ? 'bg-gradient-to-br from-purple-500 to-purple-600'
                                : 'bg-gradient-to-br from-teal-500 to-teal-600'
                            }`}
                            whileHover={{ scale: 1.2 }}
                          >
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </motion.div>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Interactive CTA */}
                  <motion.div 
                    className="mt-6 pt-6 border-t border-white/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: (index * 0.1) + 0.5 }}
                  >
                    <motion.button
                      className={`flex items-center gap-2 font-semibold text-sm transition-colors duration-300 ${
                        platform.accentColor === 'blue' 
                          ? 'text-blue-600 group-hover:text-blue-700' 
                          : platform.accentColor === 'purple'
                          ? 'text-purple-600 group-hover:text-purple-700'
                          : 'text-teal-600 group-hover:text-teal-700'
                      }`}
                      whileHover={{ x: 5 }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    platform.accentColor === 'blue' 
                      ? 'bg-gradient-to-br from-blue-500/10 to-transparent' 
                      : platform.accentColor === 'purple'
                      ? 'bg-gradient-to-br from-purple-500/10 to-transparent'
                      : 'bg-gradient-to-br from-teal-500/10 to-transparent'
                  }`}
                />
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <motion.div 
            className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white rounded-3xl p-8 lg:p-12 text-center border border-white/10 backdrop-blur-sm"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1)_0%,transparent_50%)] opacity-50" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05)_0%,transparent_50%)] opacity-30" />
            
            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl" />
            
            <div className="relative z-10">
              <motion.h3 
                className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Why This Matters
              </motion.h3>
              <motion.p 
                className="text-lg text-blue-50 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Traditional PMS systems only handle basic operations. Aiyra goes beyond by including advanced AI and
                analytics that most competitors charge extra for - or don't offer at all. You get three enterprise-grade
                platforms for the price of one simple PMS subscription.
              </motion.p>
              
              {/* Decorative Elements */}
              <motion.div 
                className="flex justify-center mt-8 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div 
                  className="w-2 h-2 bg-white/60 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                />
                <motion.div 
                  className="w-2 h-2 bg-white/80 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div 
                  className="w-2 h-2 bg-white/60 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
