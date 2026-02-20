import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Full Stack React Native Developer",
    company: "FOX IT",
    location: "Lahore, Pakistan",
    period: "2022 – Present",
    points: [
      "Developed full-stack solutions using React, React Native, and Firebase Node.js with production-ready user interfaces.",
      "Built and deployed multiple projects prioritizing performance and user experience across platforms.",
    ],
    current: true,
  },
  {
    role: "Front-End Software Engineer",
    company: "Open Malo Technologies",
    location: "Rajokot, India (Remote)",
    period: "2024",
    points: [
      "Spearheaded development of a cross-platform mobile app for Android & iOS using React Native with scalable architecture and reusable components.",
      "Integrated third-party and RESTful APIs securely, collaborated closely with the team to deliver clean, well-structured code.",
    ],
    current: false,
  },
  {
    role: "Full Stack Developer",
    company: "Upvave",
    location: "Lahore, Pakistan",
    period: "2023 – 2024",
    points: [
      "Led end-to-end development using React, React Native, and Node.js — delivering production-ready UIs and scalable backends.",
      "Utilized Docker for containerization ensuring consistent development and streamlined deployment workflows.",
    ],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-secondary/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />

      <div className="container px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal" data-delay="0">
          <p className="font-mono text-muted-foreground text-xs tracking-widest uppercase mb-3">
            My Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Work{" "}
            <span className="text-gradient">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-4 bottom-0 w-px bg-gradient-to-b from-foreground/40 via-foreground/10 to-transparent" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative flex gap-6 md:gap-10 reveal-left"
                data-delay={i * 120}
              >
                {/* Dot */}
                <div className="relative shrink-0 mt-1">
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border transition-all ${
                      exp.current
                        ? "bg-foreground border-foreground shadow-lg"
                        : "bg-background border-border"
                    }`}
                  >
                    <Briefcase
                      size={18}
                      className={exp.current ? "text-background" : "text-muted-foreground"}
                    />
                  </div>
                  {exp.current && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-foreground animate-pulse" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-4 pt-2">
                  <div className="flex flex-wrap gap-2 items-start justify-between mb-1">
                    <h3 className="font-bold text-lg text-foreground">{exp.role}</h3>
                    {exp.current && (
                      <span className="px-2.5 py-0.5 rounded-full bg-foreground text-background text-xs font-medium">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5 font-semibold text-foreground/80">
                      <Briefcase size={12} />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-foreground mt-1 shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="relative flex gap-6 md:gap-10 mt-6 reveal-left" data-delay="400">
            <div className="shrink-0 mt-1">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border bg-background border-border">
                <span className="text-xl">🎓</span>
              </div>
            </div>
            <div className="flex-1 pt-2">
              <h3 className="font-bold text-lg text-foreground">BS Software Engineering</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1 mb-2">
                <span className="font-semibold text-foreground/80">Lahore Garrison University</span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} /> Sep 2021 – June 2025
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                CGPA:{" "}
                <span className="text-foreground font-bold">3.5</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
