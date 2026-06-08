import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import {
  Building2,
  Sparkles,
  HardHat,
  Shield,
  Bath,
  TreePine,
  ArrowRight,
  Check,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services | Pro's Sanitation Ltd",
  description: "Professional cleaning services including office cleaning, deep cleaning, post-construction cleanup, sanitization, restroom hygiene, and external cleaning.",
}

const services = [
  {
    id: "office",
    icon: Building2,
    title: "Office Cleaning",
    description: "Keep your workspace pristine with our professional office cleaning services.",
    outcome: "A clean, organized workspace that boosts productivity and impresses clients.",
    features: [
      "Daily or scheduled cleaning",
      "Desk and workstation sanitization",
      "Common area maintenance",
      "Trash removal and recycling",
    ],
  },
  {
    id: "deep",
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Thorough, comprehensive cleaning that reaches every corner and surface.",
    outcome: "A completely refreshed space, free from built-up dirt and grime.",
    features: [
      "Floor-to-ceiling cleaning",
      "Behind and under furniture",
      "Detailed surface scrubbing",
      "Air vent and fixture cleaning",
    ],
  },
  {
    id: "construction",
    icon: HardHat,
    title: "Post-Construction Cleaning",
    description: "Transform construction sites into move-in ready spaces.",
    outcome: "A spotless, safe environment ready for immediate use.",
    features: [
      "Debris and dust removal",
      "Window and glass cleaning",
      "Surface polishing",
      "Final inspection ready",
    ],
  },
  {
    id: "sanitization",
    icon: Shield,
    title: "Sanitization & Disinfection",
    description: "Professional-grade sanitization for health and safety compliance.",
    outcome: "A hygienic environment that protects staff and visitors.",
    features: [
      "EPA-approved disinfectants",
      "High-touch surface focus",
      "Airborne pathogen reduction",
      "Regular sanitization schedules",
    ],
  },
  {
    id: "restroom",
    icon: Bath,
    title: "Restroom Hygiene Services",
    description: "Complete restroom care that maintains the highest hygiene standards.",
    outcome: "Spotless, fresh-smelling facilities that reflect your professionalism.",
    features: [
      "Deep fixture cleaning",
      "Floor and tile sanitization",
      "Supply restocking",
      "Odor elimination",
    ],
  },
  {
    id: "external",
    icon: TreePine,
    title: "External Cleaning",
    description: "Maintain your building's exterior and outdoor spaces.",
    outcome: "An impressive exterior that enhances your property's curb appeal.",
    features: [
      "Facade washing",
      "Parking area cleaning",
      "Entrance maintenance",
      "Outdoor furniture care",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 border-b border-border">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm font-medium tracking-widest text-accent uppercase">
              What we offer
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Comprehensive cleaning solutions tailored to your business needs. Every service delivered with professionalism and attention to detail.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-6 p-4 bg-muted rounded-lg">
                      <p className="text-sm font-medium text-accent">Outcome</p>
                      <p className="mt-1 text-foreground">{service.outcome}</p>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <Check className="h-4 w-4 text-accent shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`relative aspect-[4/3] rounded-lg overflow-hidden bg-muted ${index % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                    <Image
                      src={index % 3 === 0 ? "/images/office-cleaning.jpg" : index % 3 === 1 ? "/images/deep-cleaning.jpg" : "/images/restroom-hygiene.jpg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-muted">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Need a custom solution?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              We tailor our services to meet your specific needs. Contact us today for a personalized quote.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a
                  href="https://wa.me/18687401381?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20your%20services."
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
