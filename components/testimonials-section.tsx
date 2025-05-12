import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Alumni, Batch of 2018",
      content:
        "My years at Sikar Vidyapeeth shaped my character and career. The teachers' guidance and the school's focus on holistic development prepared me well for engineering college and beyond.",
      avatar: "👨‍🎓",
    },
    {
      name: "Priya Agarwal",
      role: "Parent",
      content:
        "We've seen remarkable growth in our child's academic performance and confidence since joining Sikar Vidyapeeth. The school's balanced approach to education and supportive environment makes it special.",
      avatar: "👩‍👧",
    },
    {
      name: "Dr. Amit Choudhary",
      role: "Alumni, Batch of 2010",
      content:
        "The strong foundation I received at Sikar Vidyapeeth, especially in sciences, was instrumental in my journey to becoming a doctor. The values instilled during my school years continue to guide me.",
      avatar: "👨‍⚕️",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What People Say</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Hear from our alumni, parents, and community members about their experiences with Sikar Vidyapeeth.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-muted/30">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="flex h-12 w-12 rounded-full bg-primary/10 items-center justify-center text-2xl">
                {testimonial.avatar}
              </div>
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <CardDescription>{testimonial.role}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="italic">"{testimonial.content}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
