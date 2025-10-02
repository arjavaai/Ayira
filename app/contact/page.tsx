"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MessageSquare, Clock, MapPin, ArrowRight, CheckCircle2 } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    subtitle: "Get help via email",
    detail: "support@aiyra.com",
    info: "Response within 24 hours"
  },
  {
    icon: Phone,
    title: "Phone Support",
    subtitle: "Speak with our experts",
    detail: "+1 (555) 123-4567",
    info: "Mon-Fri, 9AM-6PM EST"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    subtitle: "Chat with our team",
    detail: "Available on website",
    info: "Mon-Fri, 9AM-9PM EST"
  }
]

const offices = [
  {
    city: "New York",
    address: "123 Business Ave, Suite 456",
    postalCode: "New York, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "ny@aiyra.com"
  },
  {
    city: "London",
    address: "45 Tech Street",
    postalCode: "London, UK EC1A 1BB",
    phone: "+44 20 1234 5678",
    email: "london@aiyra.com"
  },
  {
    city: "Singapore",
    address: "88 Innovation Hub",
    postalCode: "Singapore 018956",
    phone: "+65 6123 4567",
    email: "singapore@aiyra.com"
  }
]

const benefits = [
  "24-hour response time",
  "Hospitality experts",
  "Free consultation"
]

export default function ContactPage() {
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
                Get in Touch
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Have questions about Aiyra? Our hospitality experts are here to help you find the perfect solution for your hotel.
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

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Reveal>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" className="mt-2" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" className="mt-2" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="john@hotel.com" className="mt-2" required />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="company">Company/Hotel Name *</Label>
                    <Input id="company" placeholder="Your Hotel Name" className="mt-2" required />
                  </div>

                  <div>
                    <Label htmlFor="inquiry">Inquiry Type *</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">Sales Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      className="mt-2 min-h-32"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full py-6 font-semibold"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    We'll respond to your inquiry within 24 hours during business days.
                  </p>
                </form>
              </div>
            </Reveal>

            {/* Contact Methods */}
            <Reveal delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Other Ways to Reach Us</h2>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <Card key={index} className="border-2 hover:border-blue-200 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <method.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{method.title}</h3>
                            <p className="text-gray-600 mb-2">{method.subtitle}</p>
                            <p className="text-blue-600 font-semibold mb-1">{method.detail}</p>
                            <p className="text-sm text-gray-500 flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {method.info}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Quick Links */}
                <div className="mt-8 p-6 bg-blue-50 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Need Immediate Help?</h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full flex-1"
                      asChild
                    >
                      <a href="/experience">Book a Demo</a>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full flex-1"
                      asChild
                    >
                      <a href="/resources">Browse FAQ</a>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container-custom">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                Our Global Offices
              </h2>
              <p className="text-xl text-gray-600">
                Serving hotels worldwide with local expertise and support.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offices.map((office, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <Card className="border-2 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{office.city}</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>{office.address}</p>
                      <p>{office.postalCode}</p>
                      <p className="pt-2 flex items-center gap-2 text-blue-600 font-medium">
                        <Phone className="w-4 h-4" />
                        {office.phone}
                      </p>
                      <p className="flex items-center gap-2 text-blue-600 font-medium">
                        <Mail className="w-4 h-4" />
                        {office.email}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-blue-50">
        <div className="container-custom">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Don't wait to transform your hotel operations. See Aiyra in action with a personalized demo.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
                asChild
              >
                <motion.a
                  href="/experience"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2"
                >
                  Book Your Free Demo
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
