export default function StatsSection() {
  const stats = [
    { value: "25+", label: "Years of Excellence" },
    { value: "5000+", label: "Alumni Network" },
    { value: "100+", label: "Experienced Faculty" },
    { value: "4", label: "Academic Streams" },
  ]

  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
