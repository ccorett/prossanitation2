import Link from "next/link"
import Image from "next/image"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Pro's Sanitation Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-lg font-semibold tracking-tight">
                Pro&apos;s Sanitation
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Professional cleaning and sanitation services for businesses across Trinidad and Tobago.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <a
              href="tel:+18687401381"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              (868) 740-1381
            </a>
            <a
              href="https://wa.me/18687401381"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Pro&apos;s Sanitation Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
