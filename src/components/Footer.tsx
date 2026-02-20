import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-sm text-muted-foreground">
          <span className="text-primary font-bold">MH</span> · Built with React & Tailwind ·{" "}
          {new Date().getFullYear()}
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/MuhammadHasaanWaseem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/MuhammadHasaan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
