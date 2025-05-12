import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function EventsSection() {
  const events = [
    {
      title: "Annual Sports Day",
      date: "December 15, 2025",
      description: "Join us for a day of athletic competitions, team sports, and celebration of physical fitness.",
      image: "/images/sports-day.png",
    },
    {
      title: "Science Exhibition",
      date: "November 10, 2025",
      description:
        "Students showcase innovative science projects and experiments across various scientific disciplines.",
      image: "/images/science-exhibition.png",
    },
    {
      title: "Cultural Festival",
      date: "January 25, 2026",
      description: "A vibrant celebration of art, music, dance, and drama showcasing student talents and creativity.",
      image: "/images/cultural-festival.png",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Stay updated with the latest events, activities, and celebrations at Sikar Vidyapeeth.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48">
              <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardDescription>{event.date}</CardDescription>
              <CardTitle>{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{event.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild>
          <Link href="/events">View All Events</Link>
        </Button>
      </div>
    </section>
  )
}
