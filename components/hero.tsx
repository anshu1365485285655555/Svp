import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/school-building.png"
          alt="School building"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Welcome to Sikar Vidyapeeth Senior Secondary School
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Nurturing young minds since 1998 with quality education and holistic development. Join us in shaping the
            future leaders of tomorrow.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/admissions">Apply for Admission</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-black"
              asChild
            >
              <Link href="/about">Discover More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
