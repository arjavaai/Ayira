"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"
import { Building2, Bot, BarChart3, Calendar, DollarSign, Wifi, Shield, Users, Zap } from "lucide-react"
import { AnimatedTabs } from "@/components/ui/animated-tabs"

const hotelTabs = [
  {
    id: "operations",
    label: "Operations",
    content: (
      <div className="grid grid-cols-2 gap-6 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hotel Operations"
          className="rounded-lg w-full h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
        />
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold mb-0 text-white mt-0 !m-0">
              End-to-End Operations
            </h2>
          </div>
          <p className="text-sm text-gray-200 mt-0 leading-relaxed">
            Aiyra consolidates all your hotel operations into one sophisticated dashboard, giving you unprecedented control over multiple properties. Monitor occupancy rates, staff performance, and guest satisfaction scores in real-time across your entire portfolio.
          </p>
          <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
            <Zap className="w-4 h-4" />
            Real-time monitoring & analytics
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "revenue",
    label: "Revenue",
    content: (
      <div className="grid grid-cols-2 gap-6 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Revenue Optimization"
          className="rounded-lg w-full h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
        />
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold mb-0 text-white mt-0 !m-0">
              Intelligent Revenue Optimization
            </h2>
          </div>
          <p className="text-sm text-gray-200 mt-0 leading-relaxed">
            Experience the power of Aiyra's AI-driven pricing engine that analyzes market conditions, competitor rates, and demand patterns 24/7. Our advanced algorithms automatically adjust your room rates to maximize revenue while maintaining optimal occupancy levels.
          </p>
          <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
            <BarChart3 className="w-4 h-4" />
            AI-powered dynamic pricing
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "distribution",
    label: "Distribution",
    content: (
      <div className="grid grid-cols-2 gap-6 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Global Distribution"
          className="rounded-lg w-full h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
        />
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <Wifi className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold mb-0 text-white mt-0 !m-0">
              Global Distribution Network
            </h2>
          </div>
          <p className="text-sm text-gray-200 mt-0 leading-relaxed">
            Aiyra seamlessly connects your properties to 50+ premium OTA channels including Booking.com, Expedia, and Airbnb. Our sophisticated channel management ensures real-time synchronization, eliminating overbookings and maximizing your online presence.
          </p>
          <div className="flex items-center gap-2 text-purple-400 text-sm font-medium">
            <Calendar className="w-4 h-4" />
            50+ booking channels integrated
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "ai",
    label: "AI Support",
    content: (
      <div className="grid grid-cols-2 gap-6 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="AI Concierge"
          className="rounded-lg w-full h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
        />
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
              <Bot className="w-6 h-6 text-orange-400" />
            </div>
            <h2 className="text-2xl font-bold mb-0 text-white mt-0 !m-0">
              AI-Powered Guest Concierge
            </h2>
          </div>
          <p className="text-sm text-gray-200 mt-0 leading-relaxed">
            Let Aiyra's intelligent virtual assistant handle guest inquiries, provide personalized recommendations, and manage routine requests. Our AI learns from every interaction to deliver increasingly sophisticated and human-like service.
          </p>
          <div className="flex items-center gap-2 text-orange-400 text-sm font-medium">
            <Users className="w-4 h-4" />
            24/7 intelligent guest support
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "analytics",
    label: "Analytics",
    content: (
      <div className="grid grid-cols-2 gap-6 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Analytics Dashboard"
          className="rounded-lg w-full h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
        />
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-teal-400" />
            </div>
            <h2 className="text-2xl font-bold mb-0 text-white mt-0 !m-0">
              Advanced Analytics Suite
            </h2>
          </div>
          <p className="text-sm text-gray-200 mt-0 leading-relaxed">
            Aiyra transforms raw data into actionable insights with beautiful, real-time dashboards. Track RevPAR, ADR, occupancy trends, and forecasting models that help you make informed strategic decisions for sustainable growth.
          </p>
          <div className="flex items-center gap-2 text-teal-400 text-sm font-medium">
            <BarChart3 className="w-4 h-4" />
            Predictive analytics & forecasting
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "support",
    label: "Support",
    content: (
      <div className="grid grid-cols-2 gap-6 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Premium Support"
          className="rounded-lg w-full h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
        />
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-red-400" />
            </div>
            <h2 className="text-2xl font-bold mb-0 text-white mt-0 !m-0">
              Premium Support Experience
            </h2>
          </div>
          <p className="text-sm text-gray-200 mt-0 leading-relaxed">
            Access Aiyra's dedicated hospitality experts who understand your industry challenges. Our 24/7 premium support includes phone, chat, and priority assistance to ensure your operations never miss a beat.
          </p>
          <div className="flex items-center gap-2 text-red-400 text-sm font-medium">
            <Shield className="w-4 h-4" />
            Enterprise-grade support & security
          </div>
        </div>
      </div>
    ),
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-blue-50/30" id="features">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl text-neutral-900 mb-4 lg:text-6xl">
              Why Hotels Choose <span className="italic font-light text-blue-600">Aiyra</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Discover how Aiyra revolutionizes hospitality management with cutting-edge technology and unparalleled
              intelligence that transforms your operations into a luxury experience
            </p>
          </div>
        </Reveal>

        <div className="flex justify-center">
          <Reveal delay={0.2}>
            <AnimatedTabs 
              tabs={hotelTabs} 
              defaultTab="operations"
              className="max-w-4xl w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
