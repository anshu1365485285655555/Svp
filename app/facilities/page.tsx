import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Explore the state-of-the-art facilities and infrastructure at Sikar Vidyapeeth Senior Secondary School.",
}

export default function FacilitiesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Facilities</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6">World-Class Infrastructure</h2>
          <p className="text-lg mb-4">
            At Sikar Vidyapeeth, we believe that a conducive learning environment is essential for holistic education.
            Our campus is designed to provide students with state-of-the-art facilities that enhance their learning
            experience and support their overall development.
          </p>
          <p className="text-lg">
            From modern classrooms to specialized laboratories, sports facilities to creative spaces, our infrastructure
            is carefully planned to meet the diverse needs of our students and provide them with opportunities to excel
            in academics, sports, arts, and other areas.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image src="/placeholder.svg?height=400&width=600" alt="School Building" fill className="object-cover" />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-10">Academic Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Modern Classrooms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-48 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="Modern Classroom"
                  fill
                  className="object-cover"
                />
              </div>
              <p>
                Our spacious, well-ventilated classrooms are equipped with smart boards, digital displays, and
                comfortable furniture to create an optimal learning environment.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Science Laboratories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-48 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="Science Laboratory"
                  fill
                  className="object-cover"
                />
              </div>
              <p>
                Separate, well-equipped laboratories for Physics, Chemistry, and Biology provide students with hands-on
                experience and practical knowledge.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Computer Labs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-48 rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=192&width=384" alt="Computer Lab" fill className="object-cover" />
              </div>
              <p>
                Our state-of-the-art computer labs feature the latest hardware and software, providing students with
                essential digital literacy and programming skills.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Library</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-48 rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=192&width=384" alt="Library" fill className="object-cover" />
              </div>
              <p>
                Our extensive library houses a vast collection of books, journals, magazines, and digital resources to
                foster a love for reading and research.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Agriculture Lab</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-48 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="Agriculture Lab"
                  fill
                  className="object-cover"
                />
              </div>
              <p>
                A specialized agriculture laboratory and experimental farm provide practical training for students in
                the agriculture stream.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Language Lab</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-48 rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=192&width=384" alt="Language Lab" fill className="object-cover" />
              </div>
              <p>
                Our language lab helps students improve their communication skills in both Hindi and English through
                interactive audio-visual tools.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-10">Sports Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Playground</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-60 rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=240&width=480" alt="Playground" fill className="object-cover" />
              </div>
              <p>
                Our expansive playground provides ample space for outdoor sports like cricket, football, and athletics,
                encouraging physical fitness and team spirit.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Indoor Sports Complex</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-60 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=240&width=480"
                  alt="Indoor Sports Complex"
                  fill
                  className="object-cover"
                />
              </div>
              <p>
                The indoor sports complex houses facilities for badminton, table tennis, chess, carrom, and other indoor
                games, allowing students to pursue sports regardless of weather conditions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Yoga and Meditation Center</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-60 rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=240&width=480" alt="Yoga Center" fill className="object-cover" />
              </div>
              <p>
                Our dedicated yoga and meditation center provides a serene environment for students to practice
                mindfulness, improve concentration, and maintain mental well-being.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Swimming Pool</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-60 rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=240&width=480" alt="Swimming Pool" fill className="object-cover" />
              </div>
              <p>
                Our semi-Olympic size swimming pool with trained instructors helps students learn swimming and
                participate in aquatic sports under safe supervision.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-10">Other Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Transport</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-48 rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=192&width=384" alt="School Bus" fill className="object-cover" />
              </div>
              <p>
                Our fleet of school buses provides safe and convenient transportation for students from various parts of
                Sikar and surrounding areas.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cafeteria</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-48 rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=192&width=384" alt="Cafeteria" fill className="object-cover" />
              </div>
              <p>
                Our hygienic cafeteria serves nutritious and balanced meals prepared under strict quality control to
                ensure students' health and well-being.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Medical Room</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-48 rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=192&width=384" alt="Medical Room" fill className="object-cover" />
              </div>
              <p>
                A well-equipped medical room with a qualified nurse provides immediate medical attention for minor
                injuries and health issues.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Auditorium</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-48 rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=192&width=384" alt="Auditorium" fill className="object-cover" />
              </div>
              <p>
                Our spacious auditorium hosts school events, cultural programs, seminars, and other gatherings with
                modern audio-visual equipment.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Art & Craft Room</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-48 rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=192&width=384" alt="Art Room" fill className="object-cover" />
              </div>
              <p>
                A dedicated space for creative expression, our art and craft room is equipped with materials and tools
                for various artistic pursuits.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Music & Dance Studio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-48 rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=192&width=384" alt="Music Studio" fill className="object-cover" />
              </div>
              <p>
                Our music and dance studio provides space and equipment for students to learn and practice various forms
                of performing arts.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-center mb-10">Safety & Security</h2>
        <div className="bg-muted p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Campus Security</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>24/7 security personnel monitoring the campus</li>
                <li>CCTV surveillance throughout the school premises</li>
                <li>Controlled access to the school building</li>
                <li>ID card system for students, staff, and visitors</li>
                <li>Regular safety drills and training</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Fire & Disaster Safety</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Fire extinguishers placed at strategic locations</li>
                <li>Smoke detectors and fire alarm systems</li>
                <li>Clearly marked emergency exits</li>
                <li>Regular fire and disaster management drills</li>
                <li>Trained staff for emergency response</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
