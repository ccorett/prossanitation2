import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Target,
  Clock,
  Heart,
  ArrowRight,
  Check,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Pro's Sanitation Ltd",
  description: "Learn about Pro's Sanitation Ltd - your trusted partner for professional cleaning and sanitation services.",
}

const values = [
  { icon: Shield, title: "Safety First", description: "Full PPE for every job, ensuring safety." },
  { icon: Target, title: "Attention to Detail", description: "Every surface gets the attention it deserves." },
  { icon: Clock, title: "Reliability", description: "Consistent service schedules you can depend on." },
  { icon: Heart, title: "Customer Focus", description: "Your satisfaction is our priority." },
]

const stats = [
  { value: "500+", label: "Businesses Served" },
  { value: "10+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
]

const standards = [
  "Full PPE (Personal Protective Equipment) for all staff",
  "Regular training on latest cleaning techniques",
  "EPA-approved cleaning and disinfection products",
  "Comprehensive quality control inspections",
  "Insurance coverage for peace of mind",
  "Background-checked and vetted team members",
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 border-b border-border">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm font-medium tracking-widest text-accent uppercase">
              About us
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Pro&apos;s Sanitation
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Your trusted partner for professional cleaning and sanitation services. We&apos;re committed to delivering excellence in every space we clean.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/team.jpg"
                  alt="Pro's Sanitation team"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Who we are
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Pro&apos;s Sanitation Ltd is a professional cleaning and sanitation company dedicated to serving businesses across Trinidad and Tobago.
                  </p>
                  <p>
                    Our team of trained professionals uses industry-leading equipment and techniques to deliver spotless results. From daily office maintenance to deep cleaning and sanitization, we handle it all with precision and care.
                  </p>
                  <p>
                    We believe that a clean environment is essential for productivity, health, and success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-foreground text-background">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-bold">{stat.value}</p>
                  <p className="mt-2 text-sm text-background/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-sm font-medium tracking-widest text-accent uppercase">
                Our values
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                What drives us
              </h2>
            </div>
            
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-foreground">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Standards */}
        <section className="py-24 lg:py-32 bg-muted">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-medium tracking-widest text-accent uppercase">
                  Our standards
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Professional standards
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  We maintain the highest professional standards in everything we do. Our commitment to quality and safety sets us apart.
                </p>
                
                <ul className="mt-8 space-y-4">
                  {standards.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/hero-cleaning.jpg"
                  alt="Professional cleaning in action"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to work with us?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Join hundreds of satisfied businesses. Contact us today to discuss your cleaning needs.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a
                  href="https://wa.me/18687401381?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+18687401381">
                  Call (868) 740-1381
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
