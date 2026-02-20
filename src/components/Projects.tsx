import { ExternalLink, Globe, Smartphone, ChevronLeft, ChevronRight } from "lucide-react";
import compositImg from "@/assets/project-composit.jpg";
import kinnectImg from "@/assets/project-kinnect.jpg";
import volunteerImg from "@/assets/project-volunteer.jpg";
import melodicImg from "@/assets/project-melodic.jpg";
import ebibleImg from "@/assets/project-ebible.jpg";
import judgedImg from "@/assets/project-judged.jpg";
import gasioImg from "@/assets/project-gasio.jpg";
import shopifyImg from "@/assets/project-shopify.jpg";
import { useEffect, useRef, useState } from "react";

type PlatformTag = "Web" | "iOS" | "Android" | "Shopify";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  platforms: PlatformTag[];
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "Composit Art Board",
    description: "AI-powered art board creator and designer platform. Full-stack SaaS with CMS, analytics, containerized deployment, and authentication.",
    image: compositImg,
    tags: ["React", "Express", "PostgreSQL", "Drizzle", "Docker", "Clerk"],
    platforms: ["Web"],
    liveUrl: "https://composit.upvave.app/",
  },
  {
    title: "Volunteer: Actify Now",
    description: "Community volunteering platform with AI-powered opportunity matching, real-time actions feed, and Liquid Glass UI design for iOS.",
    image: volunteerImg,
    tags: ["React Native", "Expo Router", "Supabase", "OpenAI", "Reanimated"],
    platforms: ["iOS"],
    liveUrl: "https://apps.apple.com/",
  },
  {
    title: "Kinnect",
    description: "Online dating platform powered by KNN-based matching algorithm, Google Maps integration, in-app purchases, and real-time chat.",
    image: kinnectImg,
    tags: ["React Native", "Expo Router", "KNN Algorithm", "Google Maps", "IAP"],
    platforms: ["Android", "iOS"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.app.kinnect",
  },
  {
    title: "Melodic Minds",
    description: "AI-integrated music learning app with Liquid Glass UI, Stripe payments, RevenueCat, and Google Ads monetization on iOS.",
    image: melodicImg,
    tags: ["React Native CLI", "Firebase", "OpenAI", "Stripe", "RevenueCat"],
    platforms: ["iOS"],
    liveUrl: "https://apps.apple.com/",
  },
  {
    title: "eBible KS",
    description: "Scripture reading and study app for iOS with bookmarking, notes, search, and offline access to Bible content.",
    image: ebibleImg,
    tags: ["React Native", "iOS", "Firebase", "Offline Storage"],
    platforms: ["iOS"],
    liveUrl: "https://apps.apple.com/",
  },
  {
    title: "Judged",
    description: "Competition judging and scoring platform for iOS. Real-time leaderboards, scorecards, and event management features.",
    image: judgedImg,
    tags: ["React Native", "iOS", "Real-time", "Firebase"],
    platforms: ["iOS"],
    liveUrl: "https://apps.apple.com/",
  },
  {
    title: "Gasio",
    description: "AI-powered card game analytics platform. Smart probability analysis, game history tracking, and strategy recommendations.",
    image: gasioImg,
    tags: ["React", "Node.js", "OpenAI", "WebSocket"],
    platforms: ["Web"],
  },
  {
    title: "Usama — Shopify Design",
    description: "Custom Shopify storefront design with modern UI, optimized product pages, and conversion-focused layouts.",
    image: shopifyImg,
    tags: ["Shopify", "Liquid", "CSS", "UI Design"],
    platforms: ["Shopify"],
  },
];

const platformColor = (platform: PlatformTag) =>
  "bg-white/80 text-foreground border-foreground/15 backdrop-blur-sm";

const platformIcon = (platform: PlatformTag) => {
  if (platform === "iOS" || platform === "Android") return <Smartphone size={10} />;
  return <Globe size={10} />;
};

// Duplicate for infinite loop
const loopedProjects = [...projects, ...projects, ...projects];

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const animFrameRef = useRef<number>(0);
  const positionRef = useRef(0);
  const speedRef = useRef(0.6); // px per frame
  const cardWidth = 380; // px
  const gap = 20;
  const singleSetWidth = projects.length * (cardWidth + gap);

  // Auto-scroll loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      if (!isPaused) {
        positionRef.current += speedRef.current;
        if (positionRef.current >= singleSetWidth) {
          positionRef.current -= singleSetWidth;
        }
        track.style.transform = `translateX(-${positionRef.current}px)`;

        // Update active dot
        const idx = Math.round(positionRef.current / (cardWidth + gap)) % projects.length;
        setActiveIndex(idx);
      }
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isPaused, singleSetWidth]);

  const scrollBy = (direction: "left" | "right") => {
    const step = cardWidth + gap;
    if (direction === "right") {
      positionRef.current = (positionRef.current + step) % singleSetWidth;
    } else {
      positionRef.current = (positionRef.current - step + singleSetWidth) % singleSetWidth;
    }
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.5s cubic-bezier(0.22,1,0.36,1)";
      trackRef.current.style.transform = `translateX(-${positionRef.current}px)`;
      setTimeout(() => {
        if (trackRef.current) trackRef.current.style.transition = "";
      }, 500);
    }
  };

  // Section reveal
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal, .reveal-scale");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          const d = el.dataset.delay ? parseInt(el.dataset.delay) : 0;
          setTimeout(() => el.classList.add("visible"), d);
          obs.unobserve(el);
        }
      }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      {/* Header */}
      <div className="container px-4 md:px-8 mb-12">
        <div className="text-center reveal" data-delay="0">
          <p className="font-mono text-muted-foreground text-xs tracking-widest uppercase mb-3">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            A selection of apps and platforms — from AI-powered tools to production mobile apps
            on the App Store and Play Store.
          </p>
        </div>

        {/* Nav arrows */}
        <div className="flex justify-center gap-3 mt-8 reveal" data-delay="100">
          <button
            onClick={() => scrollBy("left")}
            className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scrollBy("right")}
            className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-200 hover:scale-110"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Infinite scroll track */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{ gap: `${gap}px`, paddingLeft: "2rem", paddingRight: "2rem" }}
        >
          {loopedProjects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-foreground/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer shrink-0"
              style={{ width: `${cardWidth}px` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: "220px" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                {/* Platform badges */}
                <div className="absolute top-3 left-3 flex gap-1.5">
                  {project.platforms.map((p) => (
                    <span
                      key={p}
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs font-medium ${platformColor(p)}`}
                    >
                      {platformIcon(p)}
                      {p}
                    </span>
                  ))}
                </div>

                {/* Live link */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 shadow-md"
                  >
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-base text-foreground mb-2 group-hover:text-foreground/80 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-xs font-mono group-hover:bg-foreground/8 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-xs font-mono">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-6 h-2 bg-foreground"
                : "w-2 h-2 bg-border"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
