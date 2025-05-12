import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CoursesSection() {
  const courses = [
    {
      title: "Science Stream",
      description:
        "Prepare for careers in engineering, medicine, research with strong foundation in Physics, Chemistry, Biology, and Mathematics.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-flask-conical"
        >
          <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"></path>
          <path d="M8.5 2h7"></path>
          <path d="M7 16h10"></path>
        </svg>
      ),
      link: "/academics",
    },
    {
      title: "Commerce Stream",
      description:
        "Develop skills for careers in business, finance, accounting with focus on commercial subjects and analytical thinking.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-bar-chart-3"
        >
          <path d="M3 3v18h18"></path>
          <path d="M18 17V9"></path>
          <path d="M13 17V5"></path>
          <path d="M8 17v-3"></path>
        </svg>
      ),
      link: "/academics",
    },
    {
      title: "Arts Stream",
      description:
        "Explore humanities and social sciences for careers in law, journalism, civil services, and more with diverse subject options.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-book-open-text"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          <path d="M6 8h2"></path>
          <path d="M6 12h2"></path>
          <path d="M16 8h2"></path>
          <path d="M16 12h2"></path>
        </svg>
      ),
      link: "/academics",
    },
    {
      title: "Agriculture Stream",
      description:
        "Gain specialized knowledge in agricultural sciences for careers in farming, research, and related industries.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-sprout"
        >
          <path d="M7 20h10"></path>
          <path d="M10 20c5.5-2.5.8-6.4 3-10"></path>
          <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path>
          <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path>
        </svg>
      ),
      link: "/academics",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 bg-muted/50 rounded-lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Academic Programs</h2>
        <p className="text-lg max-w-3xl mx-auto">
          We offer comprehensive education from Play Group to Class XII with multiple streams to cater to diverse
          student interests and career aspirations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {course.icon}
              </div>
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{course.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href={course.link}>Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild>
          <Link href="/academics">View All Programs</Link>
        </Button>
      </div>
    </section>
  )
}
