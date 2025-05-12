import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ResultsSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Academic Excellence</h2>
        <p className="text-lg max-w-3xl mx-auto">
          We take pride in our students' outstanding academic achievements. Our results reflect our commitment to
          educational excellence and holistic development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Outstanding Results</h3>
          <p className="mb-4">
            Our students consistently achieve excellent results in the RBSE board examinations, with many securing top
            positions at the district and state levels.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>100% pass rate in the last academic year</li>
            <li>Over 75% of our students scored above 80% in board examinations</li>
            <li>15 students ranked in the top 100 at the district level</li>
            <li>Consistent improvement in overall performance year after year</li>
          </ul>
          <Button asChild>
            <Link href="/academics">View Academic Programs</Link>
          </Button>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image src="/images/results.png" alt="School Results" fill className="object-contain bg-white p-4" />
        </div>
      </div>
    </section>
  )
}
