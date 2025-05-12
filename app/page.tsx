import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import CoursesSection from "@/components/courses-section"
import StatsSection from "@/components/stats-section"
import EventsSection from "@/components/events-section"
import TestimonialsSection from "@/components/testimonials-section"
import ResultsSection from "@/components/results-section"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />
      <AboutSection />
      <StatsSection />
      <CoursesSection />
      <EventsSection />
      <ResultsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
