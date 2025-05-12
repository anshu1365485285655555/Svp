import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image src="/images/logo.png" alt="Sikar Vidyapeeth Logo" fill className="object-contain" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Sikar Vidyapeeth</h2>
                <p className="text-xs text-muted-foreground">Senior Secondary School</p>
              </div>
            </div>
            <p className="mb-4 text-sm">
              Established in 1998, Sikar Vidyapeeth is committed to providing quality education and holistic development
              to students from Play Group to Class XII.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/sikarvidhyapeeth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/sikarvidhyapeeth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/sikarvidhyapeeth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/sikarvidhyapeeth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/c/SikarVidyapeeth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-primary">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-primary">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-primary">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/academics" className="hover:text-primary">
                  Pre-Primary Education
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-primary">
                  Primary Education
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-primary">
                  Secondary Education
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-primary">
                  Science Stream
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-primary">
                  Commerce Stream
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-primary">
                  Arts Stream
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-primary">
                  Agriculture Stream
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-sm space-y-3">
              <div className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin mt-0.5"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Basant Vihar, Sikar, Rajasthan, India</span>
              </div>
              <div className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone mt-0.5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>8432466872, 9460548011, 9414351611</span>
              </div>
              <div className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail mt-0.5"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span>info@sikarvidhyapeeth.com</span>
              </div>
              <div className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-globe mt-0.5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" x2="22" y1="12" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <span>www.sikarvidhyapeeth.com</span>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Sikar Vidyapeeth Senior Secondary School. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/privacy-policy" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-primary">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
