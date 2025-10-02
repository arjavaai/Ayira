"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { TrendingUp, BarChart3, Calculator, Zap, CheckCircle2, Clock, Users, ArrowRight, Calendar, Clock3, User, Building, Phone, Mail, MessageSquare } from "lucide-react"

const demoHighlights = [
  {
    icon: TrendingUp,
    title: "See Revenue Growth Potential",
    description: "Discover how dynamic pricing can increase your revenue by 15-30%"
  },
  {
    icon: BarChart3,
    title: "Live Dashboard Walkthrough",
    description: "Experience real-time analytics and KPI tracking in action"
  },
  {
    icon: Calculator,
    title: "ROI Calculator",
    description: "Get a personalized analysis of your potential return on investment"
  },
  {
    icon: Zap,
    title: "Staff Efficiency Gains",
    description: "Learn how to reduce manual work and streamline operations"
  }
]

const agendaItems = [
  { title: "Current challenges discussion", duration: "5 min" },
  { title: "Live dashboard walkthrough", duration: "10 min" },
  { title: "Key features demonstration", duration: "10 min" },
  { title: "Q&A and next steps", duration: "5 min" }
]

const stats = [
  { value: "32%", label: "Average Revenue Increase" },
  { value: "4.9/5", label: "Customer Satisfaction" },
  { value: "24/7", label: "Expert Support" }
]

const benefits = [
  "30-minute session",
  "No obligation",
  "Hospitality expert"
]

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name is required"),
  properties: z.string().min(1, "Please select number of properties"),
  currentSystem: z.string().optional(),
  date: z.string().min(1, "Please select a preferred date"),
  time: z.string().min(1, "Please select a preferred time"),
  message: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export default function ExperiencePage() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      properties: "",
      currentSystem: "",
      date: "",
      time: "",
      message: "",
    },
  })

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data)
    // Handle form submission here
  }
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="container-custom">
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Book Your Free Demo
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                See how Aiyra can transform your hotel operations in just 30 minutes. Get a personalized walkthrough with real data examples.
              </motion.p>
              <motion.div
                className="flex items-center justify-center gap-6 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What You'll See */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                What You'll See in Your Demo
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our hospitality experts will show you exactly how Aiyra can solve your specific challenges and help you achieve your business goals.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demoHighlights.map((highlight, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <Card className="border-2 hover:border-blue-200 hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <highlight.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Agenda */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container-custom max-w-4xl">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                Demo Agenda (30 minutes)
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {agendaItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container-custom max-w-4xl">
          <Reveal>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Calendar className="w-4 h-4" />
                Book Your Free Demo
              </motion.div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Schedule Your Demo
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get a personalized walkthrough of Aiyra's features tailored to your hotel's needs
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form Section */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        {/* Personal Information Section */}
                        <div className="space-y-6">
                          <div className="flex items-center gap-2 mb-4">
                            <User className="w-5 h-5 text-blue-600" />
                            <h3 className="text-lg font-semibold text-gray-900">Personal Details</h3>
                          </div>
                          
                          <div className="grid sm:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-700 font-medium">First Name *</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="John" 
                                      className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors" 
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="lastName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-700 font-medium">Last Name *</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="Doe" 
                                      className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors" 
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid sm:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-700 font-medium flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    Email Address *
                                  </FormLabel>
                                  <FormControl>
                                    <Input 
                                      type="email" 
                                      placeholder="john@hotel.com" 
                                      className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors" 
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-700 font-medium flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    Phone Number *
                                  </FormLabel>
                                  <FormControl>
                                    <Input 
                                      type="tel" 
                                      placeholder="+1 (555) 123-4567" 
                                      className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors" 
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        <Separator className="my-8" />

                        {/* Business Information Section */}
                        <div className="space-y-6">
                          <div className="flex items-center gap-2 mb-4">
                            <Building className="w-5 h-5 text-blue-600" />
                            <h3 className="text-lg font-semibold text-gray-900">Business Information</h3>
                          </div>

                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-700 font-medium">Company/Hotel Name *</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Your Hotel Name" 
                                    className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="grid sm:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="properties"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-700 font-medium">Number of Properties *</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors">
                                        <SelectValue placeholder="Select number of properties" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="1">1 Property</SelectItem>
                                      <SelectItem value="2-5">2-5 Properties</SelectItem>
                                      <SelectItem value="6-10">6-10 Properties</SelectItem>
                                      <SelectItem value="11-25">11-25 Properties</SelectItem>
                                      <SelectItem value="25+">25+ Properties</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="currentSystem"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-700 font-medium">Current System</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors">
                                        <SelectValue placeholder="Select your current system" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="none">No system</SelectItem>
                                      <SelectItem value="excel">Excel/Manual</SelectItem>
                                      <SelectItem value="opera">Opera PMS</SelectItem>
                                      <SelectItem value="protel">Protel</SelectItem>
                                      <SelectItem value="cloudbeds">Cloudbeds</SelectItem>
                                      <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        <Separator className="my-8" />

                        {/* Scheduling Section */}
                        <div className="space-y-6">
                          <div className="flex items-center gap-2 mb-4">
                            <Clock3 className="w-5 h-5 text-blue-600" />
                            <h3 className="text-lg font-semibold text-gray-900">Schedule Your Demo</h3>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="date"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-700 font-medium">Preferred Date *</FormLabel>
                                  <FormControl>
                                    <Input 
                                      type="date" 
                                      className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors" 
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="time"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-700 font-medium">Preferred Time *</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors">
                                        <SelectValue placeholder="Select time" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="09:00">9:00 AM</SelectItem>
                                      <SelectItem value="10:00">10:00 AM</SelectItem>
                                      <SelectItem value="11:00">11:00 AM</SelectItem>
                                      <SelectItem value="12:00">12:00 PM</SelectItem>
                                      <SelectItem value="13:00">1:00 PM</SelectItem>
                                      <SelectItem value="14:00">2:00 PM</SelectItem>
                                      <SelectItem value="15:00">3:00 PM</SelectItem>
                                      <SelectItem value="16:00">4:00 PM</SelectItem>
                                      <SelectItem value="17:00">5:00 PM</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-700 font-medium flex items-center gap-2">
                                  <MessageSquare className="w-4 h-4" />
                                  Message/Specific Interests
                                </FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Tell us about your specific needs or interests..."
                                    className="min-h-24 border-2 border-gray-200 focus:border-blue-500 transition-colors resize-none"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            size="lg"
                            className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            Book My Free Demo
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </Button>
                        </motion.div>

                        <p className="text-sm text-gray-500 text-center leading-relaxed">
                          By submitting this form, you agree to receive communications from Aiyra. 
                          We respect your privacy and will never share your information.
                        </p>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>

              {/* Benefits Sidebar */}
              <div className="space-y-6">
                <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                      What You Get
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <Users className="w-6 h-6 text-blue-500" />
                      Trusted By
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="text-center p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                          {stat.value}
                        </div>
                        <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-blue-50">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Setup</h3>
                    <p className="text-gray-600 text-sm">
                      Get started with Aiyra in just 15 minutes after your demo
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                Join 2,500+ Hotel Owners Who Trust Aiyra
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <Card className="border-2 text-center">
                  <CardContent className="p-8">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
