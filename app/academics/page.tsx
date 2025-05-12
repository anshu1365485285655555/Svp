import type { Metadata } from "next"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Explore the academic programs, streams, and curriculum offered at Sikar Vidyapeeth Senior Secondary School.",
}

export default function AcademicsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Academics</h1>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Classes Offered</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Pre-Primary</CardTitle>
              <CardDescription>Foundation Years</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=160&width=320"
                  alt="Pre-Primary Classes"
                  fill
                  className="object-cover"
                />
              </div>
              <p>
                Our pre-primary section includes Play Group, Nursery, and Kindergarten, focusing on early childhood
                development through play-based learning.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <CardTitle>Primary & Middle</CardTitle>
              <CardDescription>Classes 1 to 8</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=160&width=320"
                  alt="Primary Classes"
                  fill
                  className="object-cover"
                />
              </div>
              <p>
                The primary and middle school curriculum focuses on building strong foundations in core subjects while
                nurturing creativity and critical thinking.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <CardTitle>Secondary & Senior Secondary</CardTitle>
              <CardDescription>Classes 9 to 12</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=160&width=320"
                  alt="Secondary Classes"
                  fill
                  className="object-cover"
                />
              </div>
              <p>
                Our secondary and senior secondary sections prepare students for board examinations and higher education
                with specialized streams and focused academic guidance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Academic Streams</h2>
        <Tabs defaultValue="science" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="science">Science</TabsTrigger>
            <TabsTrigger value="agriculture">Agriculture</TabsTrigger>
            <TabsTrigger value="commerce">Commerce</TabsTrigger>
            <TabsTrigger value="arts">Arts</TabsTrigger>
          </TabsList>

          <TabsContent value="science" className="bg-muted p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Science Stream</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  Our Science stream prepares students for careers in engineering, medicine, research, and technology
                  with a strong foundation in Physics, Chemistry, Biology, and Mathematics.
                </p>
                <h4 className="text-xl font-medium mb-2">Core Subjects:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>Physics</li>
                  <li>Chemistry</li>
                  <li>Mathematics</li>
                  <li>Biology (Optional)</li>
                  <li>Computer Science (Optional)</li>
                </ul>
                <p>
                  The curriculum includes extensive practical work, projects, and preparation for competitive
                  examinations.
                </p>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=256&width=384" alt="Science Lab" fill className="object-cover" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="agriculture" className="bg-muted p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Agriculture Stream</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  Our Agriculture stream provides specialized knowledge in agricultural sciences, preparing students for
                  careers in farming, agricultural research, and related industries.
                </p>
                <h4 className="text-xl font-medium mb-2">Core Subjects:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>Agriculture</li>
                  <li>Biology</li>
                  <li>Chemistry</li>
                  <li>Mathematics/Economics (Optional)</li>
                </ul>
                <p>
                  Students gain practical experience through field visits, agricultural projects, and hands-on training.
                </p>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=256&width=384"
                  alt="Agriculture Field"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="commerce" className="bg-muted p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Commerce Stream</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  The Commerce stream prepares students for careers in business, finance, accounting, and management
                  with a strong foundation in commercial subjects.
                </p>
                <h4 className="text-xl font-medium mb-2">Core Subjects:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>Accountancy</li>
                  <li>Business Studies</li>
                  <li>Economics</li>
                  <li>Mathematics (Optional)</li>
                  <li>Informatics Practices (Optional)</li>
                </ul>
                <p>
                  Students develop analytical skills, financial literacy, and business acumen through case studies and
                  projects.
                </p>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=256&width=384" alt="Commerce Class" fill className="object-cover" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="arts" className="bg-muted p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Arts Stream</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  Our Arts stream offers a diverse curriculum in humanities and social sciences, preparing students for
                  careers in law, journalism, civil services, and more.
                </p>
                <h4 className="text-xl font-medium mb-2">Core Subjects:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>History</li>
                  <li>Political Science</li>
                  <li>Geography</li>
                  <li>Economics</li>
                  <li>Hindi/English Literature</li>
                  <li>Psychology (Optional)</li>
                </ul>
                <p>
                  Students develop critical thinking, communication skills, and a deep understanding of society and
                  culture.
                </p>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=256&width=384" alt="Arts Class" fill className="object-cover" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-center mb-8">Teaching Methodology</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We employ interactive teaching methods that encourage student participation, discussion, and
                collaborative learning to make education engaging and effective.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technology Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Modern educational technology is integrated into our classrooms to enhance learning experiences and
                prepare students for a digital future.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Experiential Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We believe in learning by doing, with practical experiments, field trips, projects, and activities that
                reinforce theoretical knowledge.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Personalized Attention</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our favorable teacher-student ratio allows for personalized attention to each student's learning needs
                and academic progress.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Holistic Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We follow a comprehensive assessment system that evaluates not just academic performance but also
                co-curricular achievements and personal growth.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Value-Based Education</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our curriculum integrates moral values, ethics, and character development alongside academic subjects
                for holistic student development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
