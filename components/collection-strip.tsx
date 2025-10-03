"use client"

import { useRef, useState, useEffect, ReactNode } from "react"
import { motion } from "framer-motion"
import { Reveal } from "./reveal"
import { Activity, DollarSign, Users, Bot, BarChart3, Headphones, CheckCircle2, Calendar, ArrowRight, TrendingUp, Zap, Monitor, CreditCard, MessageSquare, Settings, Shield, Building, TreePine, Home, MapPin, Star, Users2, MessageCircle, BarChart, Brain, Globe, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

// CardSwap Component
export interface CardProps {
  children: ReactNode
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="w-full h-full relative">
      <div className="absolute inset-0 bg-[#626E7C] rounded-3xl shadow-2xl backdrop-blur-md border border-[#BDC3C8]/30">
        <div className="relative h-full">
          {children}
        </div>
      </div>
    </div>
  )
}

interface CardSwapProps {
  children: ReactNode[]
  cardDistance?: number
  verticalDistance?: number
  delay?: number
  pauseOnHover?: boolean
}

export const CardSwap: React.FC<CardSwapProps> = ({
  children,
  cardDistance = 40,
  verticalDistance = 50,
  delay = 4000,
  pauseOnHover = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % children.length)
    }, delay)

    return () => clearInterval(interval)
  }, [children.length, delay, isPaused])

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true)
    }
  }

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false)
    }
  }

  return (
    <div 
      className="relative w-full h-full perspective-1000"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children.map((child, index) => {
        const offset = index - currentIndex
        const zIndex = children.length - Math.abs(offset)
        const isActive = index === currentIndex
        const isNext = index === (currentIndex + 1) % children.length
        const isPrev = index === (currentIndex - 1 + children.length) % children.length
        
        // Calculate transform based on position
        let transform = ''
        let opacity = 0.3
        let scale = 0.9
        
        if (isActive) {
          transform = 'translateZ(0px) rotateY(0deg) rotateX(0deg)'
          opacity = 1
          scale = 1
        } else if (isNext) {
          transform = `translateX(${cardDistance}px) translateY(${verticalDistance}px) rotateY(-12deg) rotateX(3deg) translateZ(-30px)`
          opacity = 0.8
          scale = 0.95
        } else if (isPrev) {
          transform = `translateX(-${cardDistance * 0.4}px) translateY(-${verticalDistance * 0.4}px) rotateY(12deg) rotateX(-3deg) translateZ(-60px)`
          opacity = 0.6
          scale = 0.9
        } else {
          transform = `translateX(${cardDistance * (offset > 0 ? 1.5 : -1)}px) translateY(${verticalDistance * offset}px) rotateY(${offset * 10}deg) rotateX(${offset * 2}deg) translateZ(${-90 * Math.abs(offset)}px)`
          opacity = 0.3
          scale = 0.85
        }
        
        const style = {
          position: 'absolute' as const,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex,
          opacity,
          scale,
          transform,
          transformStyle: 'preserve-3d' as const,
          transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          pointerEvents: (isActive ? 'auto' : 'none') as 'auto' | 'none'
        }

        return (
          <div key={index} style={style}>
            {child}
          </div>
        )
      })}
    </div>
  )
}

const platformFeatures = [
  {
    id: "property-management",
    title: "Property Management System",
    subtitle: "Complete PMS with reservations, check-ins, housekeeping, and operations management for all property types.",
    icon: Building,
    color: "from-[#097abe] to-[#076198]",
    features: [
      { icon: Calendar, label: "Reservations & Channel Management", description: "Seamless booking across all channels" },
      { icon: Settings, label: "Housekeeping & Maintenance", description: "Streamlined operations management" },
      { icon: MessageCircle, label: "Guest Communication", description: "Centralized messaging system" }
    ]
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot & Automation",
    subtitle: "Built-in AI chatbot that handles guest inquiries, automates responses, and provides 24/7 customer support.",
    icon: Bot,
    color: "from-[#076198] to-[#054972]",
    features: [
      { icon: Headphones, label: "24/7 Automated Guest Support", description: "Always available customer service" },
      { icon: Globe, label: "Multi-language Capabilities", description: "Support guests in their language" },
      { icon: Brain, label: "Smart Recommendations", description: "Personalized suggestions and offers" }
    ]
  },
  {
    id: "analytics-bi",
    title: "Analytics & Business Intelligence",
    subtitle: "Advanced BI platform with real-time dashboards, predictive analytics, and actionable insights for data-driven decisions.",
    icon: BarChart,
    color: "from-[#054972] to-[#03304c]",
    features: [
      { icon: Monitor, label: "Real-time Performance Dashboards", description: "Live insights into your business" },
      { icon: TrendingUp, label: "Predictive Revenue Analytics", description: "Forecast and optimize revenue" },
      { icon: Target, label: "Custom KPI Tracking", description: "Monitor what matters most" }
    ]
  }
]

export function CollectionStrip() {
  const containerRef = useRef<HTMLDivElement>(null)

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
    <section ref={containerRef} className="py-12 lg:py-20 bg-gradient-to-b from-[#EFF0F1] to-[#626E7C]" id="dashboard">
      <div className="container-custom">
        {/* Main Content Section */}
        <div className="mb-12 lg:mb-16">
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-gradient-to-r from-[#3B82F6] to-[#097abe] text-white rounded-full text-xs lg:text-sm font-medium mb-4 lg:mb-6">
                  <Zap className="w-3 h-3 lg:w-4 lg:h-4" />
                  All-In-One Platform
                </div>
                <h2 className="text-black text-2xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6 leading-tight">
                  <AnimatedText text="More Than Just PMS Software" delay={0.2} />
                </h2>
                <p className="text-lg lg:text-xl font-semibold text-[#626E7C] mb-3 lg:mb-4">
                  Three Platforms in One Solution
                </p>
                <p className="text-base lg:text-lg text-black leading-relaxed">
                  Unlike traditional PMS systems, Aiyra combines property management, AI intelligence, and business analytics in one integrated platform.
                </p>
              </div>

              {/* Right Side - CardSwap (Desktop) / Simple Cards (Mobile) */}
              <div className="relative">
                {/* Desktop CardSwap */}
                <div className="hidden lg:block" style={{ height: '420px' }}>
                  <CardSwap
                    cardDistance={25}
                    verticalDistance={35}
                    delay={4000}
                    pauseOnHover={true}
                  >
                    {platformFeatures.map((platform, index) => (
                      <Card key={platform.id}>
                        <div className="h-full flex flex-col p-6">
                          {/* Header */}
                          <div className="flex items-start gap-4 mb-5">
                            <div className={`w-14 h-14 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0`}>
                              <platform.icon className="w-7 h-7 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                                {platform.title}
                              </h3>
                              <p className="text-[#E0E3E5] text-xs leading-relaxed">
                                {platform.subtitle}
                              </p>
                            </div>
                          </div>

                          {/* Features */}
                          <div className="space-y-3 flex-1 mb-5">
                            {platform.features.map((feature, featureIndex) => (
                            <motion.div
                                key={featureIndex}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#3B82F6]/20 transition-all duration-300 group"
                                whileHover={{ scale: 1.01 }}
                              >
                                <div className="w-8 h-8 bg-[#3B82F6]/30 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#3B82F6]/50 transition-colors">
                                  <feature.icon className="w-4 h-4 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-white text-xs mb-1">
                                    {feature.label}
                                  </h4>
                                  <p className="text-xs text-[#E0E3E5] leading-relaxed">
                                    {feature.description}
                                  </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                          {/* Learn More Button */}
                          <div className="mt-auto pt-4 border-t border-[#3B82F6]/30">
                            <Button 
                              variant="outline" 
                              className="w-full h-9 border-2 border-[#3B82F6]/50 text-white hover:bg-[#3B82F6]/20 hover:border-[#3B82F6] font-semibold text-xs rounded-xl backdrop-blur-sm transition-all duration-300"
                        >
                            Learn More
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </CardSwap>
                </div>

                {/* Mobile Simple Cards */}
                <div className="lg:hidden space-y-6">
                  {platformFeatures.map((platform, index) => (
                    <motion.div
                      key={platform.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="bg-[#626E7C] rounded-2xl shadow-2xl backdrop-blur-md border border-[#BDC3C8]/30 p-6"
                    >
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0`}>
                          <platform.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                            {platform.title}
                          </h3>
                          <p className="text-[#E0E3E5] text-sm leading-relaxed">
                            {platform.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-4 mb-6">
                        {platform.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#3B82F6]/20 transition-all duration-300"
                          >
                            <div className="w-10 h-10 bg-[#3B82F6]/30 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                              <feature.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-white text-sm mb-1">
                                {feature.label}
                              </h4>
                              <p className="text-xs text-[#E0E3E5] leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Learn More Button */}
                      <div className="pt-4 border-t border-[#3B82F6]/30">
                        <Button 
                          variant="outline" 
                          className="w-full h-10 border-2 border-[#3B82F6]/50 text-white hover:bg-[#3B82F6]/20 hover:border-[#3B82F6] font-semibold text-sm rounded-xl backdrop-blur-sm transition-all duration-300"
                        >
                          Learn More
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* CTA Section */}
        <Reveal delay={0.4}>
          <div className="text-center mb-12 lg:mb-16 mt-12 lg:mt-16">
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#3B82F6] to-[#097abe] hover:from-[#097abe] hover:to-[#3B82F6] text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <motion.a
                  href="#experience"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2"
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                </motion.a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#626E7C] text-[#626E7C] hover:bg-[#626E7C] hover:text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-full transition-colors"
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
          <div className="text-center mt-12 lg:mt-16">
            <div className="inline-flex items-center gap-2 lg:gap-3 px-4 lg:px-6 py-2 lg:py-3 bg-[#3B82F6]/20 backdrop-blur-sm rounded-full border border-[#3B82F6]/30">
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-[#3B82F6] to-[#097abe] rounded-full flex items-center justify-center">
                <Star className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
              </div>
              <span className="text-black font-medium text-sm lg:text-base">
                All solutions include 24/7 support, training & implementation
              </span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
