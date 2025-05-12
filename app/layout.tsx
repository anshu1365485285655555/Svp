import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Sikar Vidyapeeth Senior Secondary School",
    template: "%s | Sikar Vidyapeeth Senior Secondary School",
  },
  description:
    "Sikar Vidyapeeth Senior Secondary School - Established in 1998, offering RBSE education from Play Group to 12th Grade with Science, Agriculture, Arts, and Commerce streams.",
  keywords: ["Sikar Vidyapeeth", "RBSE School", "Sikar", "Rajasthan", "Education", "School"],
  authors: [{ name: "Sikar Vidyapeeth" }],
  creator: "Sikar Vidyapeeth",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sikarvidhyapeeth.com",
    title: "Sikar Vidyapeeth Senior Secondary School",
    description:
      "Sikar Vidyapeeth Senior Secondary School - Established in 1998, offering RBSE education from Play Group to 12th Grade with Science, Agriculture, Arts, and Commerce streams.",
    siteName: "Sikar Vidyapeeth Senior Secondary School",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
