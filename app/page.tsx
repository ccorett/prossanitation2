import Image from "next/image"
import Link from "next/link"
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

const services = [
  { icon: Building2, title: "Office Cleaning", description: "Daily and scheduled cleaning for workspaces" },
  { icon: Sparkles, title: "Deep Cleaning", description: "Thorough cleaning for every corner" },
  { icon: HardHat, title: "Post-Construction", description: "Debris removal and final polish" },
  { icon: Shield, title: "Sanitization", description: "Disinfection for safe environments" },
  { icon: Bath, title: "Restroom Hygiene", description: "Complete restroom care and maintenance" },
  { icon: TreePine, title: "External Cleaning", description: "Outdoor and facade maintenance" },
]

const features = [
  "Professional trained staff",
  "Full PPE for every job",
  "Quality guaranteed",
  "Reliable scheduling",
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-cleaning.jpg"
              alt="Professional cleaning team at work"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
            <div className="max-w-xl">
              <p className="text-sm font-medium tracking-widest text-white/70 uppercase">
                Professional Cleaning Services
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                Every corner.<br />
                <span className="text-accent">Every surface.</span>
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Professional cleaning and sanitation services for businesses. Spotless results with reliability and attention to detail.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a
                    href="https://wa.me/18687401381?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20your%20cleaning%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="!bg-white/10 !border-white/30 !text-white hover:!bg-white/20 hover:!text-white">
                  <a href="tel:+18687401381">
                    Call (868) 740-1381
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-medium tracking-widest text-accent uppercase">
                What we do
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Our Services
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Comprehensive cleaning solutions for every business need.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Button asChild variant="outline">
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 lg:py-32 bg-muted">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-medium tracking-widest text-accent uppercase">
                  Why choose us
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Professional standards,<br />exceptional results.
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  We take pride in delivering exceptional cleaning services that exceed expectations. Our professional team is committed to maintaining the highest standards.
                </p>
                
                <ul className="mt-8 space-y-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/about">
                      Learn More About Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/office-cleaning.jpg"
                  alt="Clean modern office space"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Visual Grid */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-sm font-medium tracking-widest text-accent uppercase">
                Our work
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Results you can see
              </h2>
              <p className="mt-4 text-muted-foreground">
                Pristine spaces, every time.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { src: "/images/office-cleaning.jpg", label: "Office Cleaning" },
                { src: "/images/deep-cleaning.jpg", label: "Deep Cleaning" },
                { src: "/images/restroom-hygiene.jpg", label: "Restroom Hygiene" },
              ].map((item) => (
                <div key={item.label} className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-4 text-white font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-foreground text-background">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready for a spotless space?
            </h2>
            <p className="mt-4 text-lg text-background/70 max-w-xl mx-auto">
              Get a quote today and experience the Pro&apos;s Sanitation difference.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a
                  href="https://wa.me/18687401381?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20cleaning%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get a Quote on WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="!bg-white !border-white !text-foreground hover:!bg-white/90">
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
