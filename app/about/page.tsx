import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Sikar Vidyapeeth Senior Secondary School's history, vision, mission, and leadership.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">About Sikar Vidyapeeth</h1>

      <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6">Our History</h2>
          <p className="text-lg mb-4">
            Sikar Vidyapeeth Senior Secondary School was established on 26th June 1998 with a vision to provide quality
            education to the children of Sikar and surrounding areas.
          </p>
          <p className="text-lg mb-4">
            Over the past 25+ years, the school has grown from a small institution to one of the most respected
            educational establishments in the region, consistently producing excellent academic results and well-rounded
            students.
          </p>
          <p className="text-lg">
            Our journey has been marked by continuous improvement, expansion of facilities, and adaptation to modern
            educational practices while maintaining our core values and traditions.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Historical photo of Sikar Vidyapeeth"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
        <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image src="/placeholder.svg?height=400&width=600" alt="School building" fill className="object-cover" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-semibold mb-6">Vision & Mission</h2>
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">Our Vision</h3>
            <p className="text-lg">
              To nurture young minds into responsible, knowledgeable, and compassionate individuals who contribute
              positively to society and excel in their chosen fields.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3">Our Mission</h3>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li>Provide holistic education that balances academic excellence with character development</li>
              <li>Create a stimulating learning environment that encourages curiosity and critical thinking</li>
              <li>Instill values of respect, integrity, and social responsibility</li>
              <li>Embrace innovation while honoring cultural traditions</li>
              <li>Prepare students for global challenges while remaining rooted in Indian values</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Leadership</h2>
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary shadow-lg">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Mr. Shravan Haritwal - Director & Principal"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold mb-2">Mr. Shravan Haritwal</h3>
          <p className="text-xl text-muted-foreground mb-6">Director & Principal</p>
          <p className="text-lg">
            Under the visionary leadership of Mr. Shravan Haritwal, Sikar Vidyapeeth has flourished into an institution
            of excellence. His dedication to quality education and holistic development of students has been the guiding
            force behind the school's success and reputation.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-center mb-10">Affiliation & Recognition</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-muted p-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="relative w-32 h-32">
                <Image src="/placeholder.svg?height=128&width=128" alt="RBSE Logo" fill className="object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Rajasthan Board of Secondary Education (RBSE)</h3>
                <p className="text-lg">
                  Sikar Vidyapeeth is proudly affiliated with the Rajasthan Board of Secondary Education (RBSE),
                  ensuring our curriculum meets state standards of excellence.
                </p>
              </div>
            </div>
            <p className="text-lg text-center">
              The school follows both Hindi and English as mediums of instruction, catering to diverse learning
              preferences and ensuring students are proficient in both languages.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
