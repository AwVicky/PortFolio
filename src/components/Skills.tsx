const skillCategories = [
  {
    label: "Mobile",
    icon: "📱",
    skills: ["React Native CLI", "Expo Router", "NativeWind", "Reanimated", "iOS Deployment", "Android", "IAP", "RevenueCat"],
  },
  {
    label: "Frontend",
    icon: "🖥️",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "TanStack Query", "Redux", "Context API"],
  },
  {
    label: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "PostgreSQL", "Firebase", "Supabase", "Drizzle ORM", "Prisma", "REST APIs"],
  },
  {
    label: "AI & APIs",
    icon: "🤖",
    skills: ["OpenAI", "Google Maps API", "Stripe", "Clerk", "Logto", "PostHog"],
  },
  {
    label: "DevOps",
    icon: "🚀",
    skills: ["Docker", "GitHub Actions", "Git", "JMeter", "Jira", "ClickUp"],
  },
  {
    label: "Learning",
    icon: "📚",
    skills: ["Java", "Spring Boot"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-background">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="container px-4 md:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 reveal" data-delay="0">
          <p className="font-mono text-muted-foreground text-xs tracking-widest uppercase mb-3">
            Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Skills &{" "}
            <span className="text-gradient">Technologies</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.label}
              className="reveal-scale rounded-2xl border border-border bg-card p-6 hover:border-foreground/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              data-delay={i * 80}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-bold text-foreground">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-muted text-muted-foreground text-xs font-mono hover:bg-foreground hover:text-background transition-all duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
          {[
            { value: "8+", label: "Production Apps", desc: "Shipped to App Store & Play Store" },
            { value: "3+", label: "Companies", desc: "Remote & on-site experience" },
            { value: "3.5", label: "CGPA", desc: "BS Software Engineering" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="reveal-scale rounded-2xl border border-border bg-card p-6 hover:border-foreground/30 hover:shadow-lg transition-all duration-300"
              data-delay={i * 100}
            >
              <div className="text-4xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="font-semibold text-foreground text-sm">{stat.label}</div>
              <div className="text-muted-foreground text-xs mt-1">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
