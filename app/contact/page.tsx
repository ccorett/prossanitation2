"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Phone, MapPin, Clock, ArrowRight, Check } from "lucide-react"

const contactInfo = [
  { icon: Phone, title: "Phone", content: "(868) 740-1381", href: "tel:+18687401381" },
  { icon: MapPin, title: "Location", content: "Trinidad and Tobago", href: null },
  { icon: Clock, title: "Hours", content: "Mon - Sat: 7am - 6pm", href: null },
]

const services = [
  "Office Cleaning",
  "Deep Cleaning",
  "Post-Construction Cleaning",
  "Sanitization & Disinfection",
  "Restroom Hygiene Services",
  "External Cleaning",
  "Other",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit request")
      }

      setIsSubmitted(true)
      setFormData({ name: "", business: "", phone: "", email: "", service: "", message: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 border-b border-border">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm font-medium tracking-widest text-accent uppercase">
              Get in touch
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Ready for a spotless space? Get in touch today for a free quote. We respond quickly to all inquiries.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="text-xl font-semibold">Quick Contact</h2>
                <p className="mt-4 text-muted-foreground">
                  The fastest way to reach us is via WhatsApp or phone.
                </p>

                <div className="mt-8 space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.title}</p>
                        {item.href ? (
                          <a href={item.href} className="font-medium hover:text-accent transition-colors">
                            {item.content}
                          </a>
                        ) : (
                          <p className="font-medium">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 space-y-3">
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a
                      href="https://wa.me/18687401381?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20cleaning%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp Us Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="tel:+18687401381">
                      Call (868) 740-1381
                    </a>
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="rounded-lg border border-border p-6 lg:p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <Check className="h-7 w-7" />
                      </div>
                      <h3 className="mt-6 text-xl font-semibold">Thank you!</h3>
                      <p className="mt-2 text-muted-foreground">
                        We&apos;ve received your message and will get back to you shortly.
                      </p>
                      <Button
                        className="mt-6"
                        variant="outline"
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormData({ name: "", business: "", phone: "", email: "", service: "", message: "" })
                        }}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-xl font-semibold">Request a Quote</h2>
                      <p className="mt-2 text-muted-foreground">
                        Fill out the form below and we&apos;ll get back to you as soon as possible.
                      </p>

                      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">Your Name *</Label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Smith"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="business">Business Name</Label>
                            <Input
                              id="business"
                              name="business"
                              type="text"
                              value={formData.business}
                              onChange={handleChange}
                              placeholder="Your Company Ltd"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="(868) 123-4567"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="service">Service Needed *</Label>
                          <Select
                            value={formData.service}
                            onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))}
                            required
                          >
                            <SelectTrigger id="service">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Additional Details</Label>
                          <Textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your space and any specific requirements..."
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Request"}
                          {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
