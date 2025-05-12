"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "Facilities", href: "/facilities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image src="/images/logo.png" alt="Sikar Vidyapeeth Logo" fill className="object-contain" />
              </div>
              <div className="hidden md:block">
                <h1 className="text-lg font-bold leading-tight">Sikar Vidyapeeth</h1>
                <p className="text-xs text-muted-foreground">Senior Secondary School</p>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${pathname === item.href ? "text-primary" : "text-muted-foreground"}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button asChild className="hidden md:inline-flex">
              <Link href="/admissions">Apply Now</Link>
            </Button>
            <button type="button" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-background md:hidden transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image src="/images/logo.png" alt="Sikar Vidyapeeth Logo" fill className="object-contain" />
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight">Sikar Vidyapeeth</h1>
              <p className="text-xs text-muted-foreground">Senior Secondary School</p>
            </div>
          </Link>
          <button type="button" className="rounded-md p-1" onClick={() => setMobileMenuOpen(false)}>
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="space-y-2 py-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 text-base font-medium ${pathname === item.href ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Button asChild className="w-full">
                <Link href="/admissions" onClick={() => setMobileMenuOpen(false)}>
                  Apply Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
