import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-secondary/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="container px-4 md:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 reveal" data-delay="0">
          <p className="font-mono text-muted-foreground text-xs tracking-widest uppercase mb-3">
            Let's Talk
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Get In{" "}
            <span className="text-gradient">Touch</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
            Open to new opportunities, collaborations, and interesting projects. Let's build
            something great together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            {
              icon: <Mail size={20} />,
              label: "Email",
              value: "muhammadhasaanwork@gmail.com",
              href: "mailto:muhammadhasaanwork@gmail.com",
              delay: 100,
            },
            {
              icon: <Phone size={20} />,
              label: "Phone — Tap to Call",
              value: "+92 322 4476937",
              href: "tel:+923224476937",
              delay: 200,
              highlight: true,
            },
            {
              icon: <Github size={20} />,
              label: "GitHub",
              value: "MuhammadHasaanWaseem",
              href: "https://github.com/MuhammadHasaanWaseem",
              delay: 300,
            },
            {
              icon: <Linkedin size={20} />,
              label: "LinkedIn",
              value: "MuhammadHasaan",
              href: "https://linkedin.com/in/MuhammadHasaan",
              delay: 400,
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`reveal-scale flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl ${
                item.highlight
                  ? "border-foreground bg-foreground text-background hover:bg-foreground/90"
                  : "border-border bg-card hover:border-foreground/30"
              }`}
              data-delay={item.delay}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-110 ${
                  item.highlight
                    ? "bg-background/15 text-background"
                    : "bg-muted text-foreground group-hover:bg-foreground group-hover:text-background"
                }`}
              >
                {item.icon}
              </div>
              <div className="min-w-0">
                <div
                  className={`text-xs mb-0.5 font-medium ${
                    item.highlight ? "text-background/70" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </div>
                <div
                  className={`text-sm font-semibold truncate ${
                    item.highlight ? "text-background" : "text-foreground"
                  }`}
                >
                  {item.value}
                </div>
              </div>
              {item.highlight && (
                <div className="ml-auto shrink-0">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-background/20 text-background text-xs font-mono">
                    📞 Call
                  </span>
                </div>
              )}
            </a>
          ))}
        </div>

        {/* Location */}
        <div className="flex justify-center reveal" data-delay="500">
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm border border-border rounded-full px-4 py-2 bg-card">
            <MapPin size={13} />
            Lahore, Pakistan
          </div>
        </div>
      </div>
    </section>
  );
}
