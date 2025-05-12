import type { Metadata } from "next"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Gallery",
  description: "View photos and videos of Sikar Vidyapeeth Senior Secondary School's campus, events, and activities.",
}

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Gallery</h1>

      <Tabs defaultValue="campus" className="mb-16">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
          <TabsTrigger value="campus">Campus</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="sports">Sports</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="campus">
          <h2 className="text-2xl font-semibold mb-6">Campus</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={`campus-${i}`}
                className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Campus+${i + 1}`}
                  alt={`Campus image ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events">
          <h2 className="text-2xl font-semibold mb-6">Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={`event-${i}`}
                className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Event+${i + 1}`}
                  alt={`Event image ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sports">
          <h2 className="text-2xl font-semibold mb-6">Sports</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={`sport-${i}`}
                className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Sports+${i + 1}`}
                  alt={`Sports image ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="activities">
          <h2 className="text-2xl font-semibold mb-6">Activities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={`activity-${i}`}
                className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Activity+${i + 1}`}
                  alt={`Activity image ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements">
          <h2 className="text-2xl font-semibold mb-6">Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={`achievement-${i}`}
                className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Achievement+${i + 1}`}
                  alt={`Achievement image ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div>
        <h2 className="text-2xl font-semibold text-center mb-8">Video Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`video-${i}`} className="bg-muted rounded-lg overflow-hidden shadow-md">
              <div className="relative aspect-video">
                <Image
                  src={`/placeholder.svg?height=200&width=360&text=Video+${i + 1}`}
                  alt={`Video thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center">
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
                      className="lucide lucide-play text-white"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">School Annual Function {i + 2023}</h3>
                <p className="text-sm text-muted-foreground">
                  Experience the highlights of our annual cultural celebration showcasing student talents.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
