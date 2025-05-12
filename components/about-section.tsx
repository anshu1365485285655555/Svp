import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image src="/images/about-school.png" alt="About Sikar Vidyapeeth" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">About Sikar Vidyapeeth</h2>
          <p className="text-lg mb-4">
            Established on 26th June 1998, Sikar Vidyapeeth Senior Secondary School has been a beacon of educational
            excellence in Sikar, Rajasthan for over two decades.
          </p>
          <p className="text-lg mb-4">
            Under the visionary leadership of Mr. Shravan Haritwal, our school has grown from strength to strength,
            providing quality education from Play Group to Class XII in Science, Commerce, Arts, and Agriculture
            streams.
          </p>
          <p className="text-lg mb-6">
            We are affiliated with the Central Board of Secondary Education (CBSE) and offer education in both Hindi and
            English mediums to cater to diverse learning needs.
          </p>
          <Button asChild>
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
