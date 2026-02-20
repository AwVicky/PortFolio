import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-8">
        {/* Logo */}
        <a href="#" className="font-mono font-bold text-lg tracking-tight">
          <span className="text-foreground">M.Waqar</span>
          {/* <span className="text-muted-foreground">.</span> */}
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="https://github.com/waqar shakeel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/waqar shakeel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:waqarshakeel96@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-primary"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            {theme === "dark" ? (
              <>
                <Sun size={18} />
                Light Mode
              </>
            ) : (
              <>
                <Moon size={18} />
                Dark Mode
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  );
}
