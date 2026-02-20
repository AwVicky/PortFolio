# Portfolio Project Documentation

**Last Updated:** February 20, 2026  
**Developer:** Muhammad Hasaan (MH)  
**Repository:** AwVicky/PortFolio

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Architecture & Structure](#architecture--structure)
4. [How It Works](#how-it-works)
5. [Styling & Theme System](#styling--theme-system)
6. [Components Breakdown](#components-breakdown)
7. [Features & Functionality](#features--functionality)
8. [Build & Deployment](#build--deployment)
9. [Development Setup](#development-setup)

---

## Project Overview

This is a **modern portfolio website** built to showcase Muhammad Hasaan's work as a Full Stack Software Engineer specializing in React Native and web development. The portfolio features:

- **Single-page application (SPA)** with smooth scrolling and section-based navigation
- **Responsive design** that works seamlessly across mobile, tablet, and desktop
- **Professional showcase** of 8+ production apps, work experience, skills, and contact information
- **Modern UI/UX** with elegant animations, reveal effects, and interactive elements

### Purpose
The portfolio serves as:
- A digital resume and professional introduction
- A showcase of real-world projects (App Store, Play Store, web apps)
- A point of contact for potential employers and collaborators

---

## Technology Stack

### Core Technologies

| Category | Technologies |
|----------|-------------|
| **Frontend Framework** | React 18.3.1 |
| **Build Tool** | Vite 5.4.19 |
| **Language** | TypeScript 5.8.3 |
| **Styling** | Tailwind CSS 3.4.17 |
| **UI Components** | shadcn/ui (Radix UI primitives) |
| **Routing** | React Router DOM 6.30.1 |
| **Icons** | Lucide React 0.462.0 |
| **State Management** | TanStack Query 5.83.0 |
| **Animations** | CSS transitions + custom keyframes |
| **Testing** | Vitest 3.2.4 + Testing Library |
| **Package Manager** | Bun (with npm fallback) |

### Key Dependencies

```json
{
  "react": "^18.3.1",
  "react-router-dom": "^6.30.1",
  "@tanstack/react-query": "^5.83.0",
  "tailwindcss": "^3.4.17",
  "lucide-react": "^0.462.0",
  "@radix-ui/*": "Multiple UI primitive components"
}
```

### Dev Tools
- **ESLint** for code quality
- **PostCSS + Autoprefixer** for CSS processing
- **Vite SWC Plugin** for fast React refresh
- **Lovable Tagger** for component tagging in development

---

## Architecture & Structure

### Project Structure

```
PortFolio/
├── public/                # Static assets (robots.txt)
├── src/
│   ├── assets/           # Images (projects, profile, hero background)
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components (40+ components)
│   │   ├── Navbar.tsx   # Fixed navigation with scroll effect
│   │   ├── Hero.tsx     # Landing section with profile
│   │   ├── Projects.tsx # Auto-scrolling project carousel
│   │   ├── Experience.tsx # Timeline of work history
│   │   ├── Skills.tsx   # Tech stack grid with stats
│   │   ├── Contact.tsx  # Contact cards & information
│   │   └── Footer.tsx   # Footer with social links
│   ├── pages/
│   │   ├── Index.tsx    # Main portfolio page
│   │   └── NotFound.tsx # 404 error page
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions (tailwind merge)
│   ├── App.tsx          # Root component with providers
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles & CSS variables
├── components.json       # shadcn/ui configuration
├── tailwind.config.ts   # Tailwind theme configuration
├── vite.config.ts       # Vite build configuration
└── package.json         # Dependencies and scripts
```

### Application Flow

```
Entry: main.tsx
  └─> App.tsx (Providers: QueryClient, TooltipProvider, Router, Toasters)
      ├─> Route "/" → Index.tsx (Main Portfolio)
      │   ├─> Navbar (Fixed header)
      │   ├─> Hero (Landing section)
      │   ├─> Projects (Carousel)
      │   ├─> Experience (Timeline)
      │   ├─> Skills (Grid + Stats)
      │   ├─> Contact (Contact cards)
      │   └─> Footer
      └─> Route "*" → NotFound.tsx (404 page)
```

---

## How It Works

### 1. **Application Bootstrap** (`main.tsx` → `App.tsx`)

The app initializes with:
- **React 18 createRoot** for concurrent rendering
- **QueryClientProvider** for data fetching (future-ready)
- **TooltipProvider** from Radix UI for accessible tooltips
- **BrowserRouter** for client-side routing
- **Toaster components** (shadcn toast + Sonner) for notifications

### 2. **Routing System**

- **Single route (`/`)** displays the main portfolio (Index page)
- **Catch-all route (`*`)** shows 404 NotFound page
- Uses React Router DOM v6 with `<Routes>` and `<Route>`

### 3. **Main Portfolio Page** (`Index.tsx`)

The Index page orchestrates all sections:

```tsx
<div className="min-h-screen">
  <Navbar />      {/* Fixed navigation */}
  <main>
    <Hero />      {/* #about anchor */}
    <Projects />  {/* #projects anchor */}
    <Experience /> {/* #experience anchor */}
    <Skills />    {/* #skills anchor */}
    <Contact />   {/* #contact anchor */}
  </main>
  <Footer />
</div>
```

**Scroll Reveal System:**
- Uses `IntersectionObserver` API to detect when elements enter viewport
- Elements with classes `.reveal`, `.reveal-left`, `.reveal-scale` start hidden
- When visible, adds `.visible` class triggering smooth animations
- Supports `data-delay` attribute for staggered animations

### 4. **Navigation** (`Navbar.tsx`)

**Features:**
- **Fixed positioning** with scroll-based background blur effect
- **Smooth scroll** links to section anchors (`#about`, `#projects`, etc.)
- **Responsive mobile menu** with hamburger toggle
- **Social links** (GitHub, LinkedIn, Email)
- **Scroll detection:** Changes background opacity after 40px scroll

**Implementation:**
```tsx
useEffect(() => {
  const handler = () => setScrolled(window.scrollY > 40);
  window.addEventListener("scroll", handler);
  return () => window.removeEventListener("scroll", handler);
}, []);
```

### 5. **Hero Section** (`Hero.tsx`)

**Features:**
- **Profile picture** with animated ring and "Available" status dot
- **Animated text** with gradient effects on name
- **CTA buttons** (View Projects, Get In Touch)
- **Social links** with icons
- **Background effects:**
  - Subtle grayscale hero image (opacity 7%)
  - Grid pattern overlay
  - Floating orbs with CSS animations
- **Scroll hint** with bouncing arrow

**Animations:** Uses custom CSS classes with delays:
```tsx
<h1 className="animate-slide-up opacity-0 delay-100">
  Muhammad <span className="text-gradient">Hasaan</span>
</h1>
```

### 6. **Projects Section** (`Projects.tsx`)

**Features:**
- **Auto-scrolling infinite carousel** of 8 production projects
- **Manual navigation** with left/right arrow buttons
- **Pause on hover** functionality
- **Platform badges** (Web, iOS, Android, Shopify)
- **Live links** to App Store, Play Store, or web apps
- **Tech stack tags** for each project

**Implementation:**
- Uses `requestAnimationFrame` for smooth 60fps auto-scroll
- **Infinite loop:** Projects array duplicated 3x for seamless wrapping
- Position tracking with `useRef` for manual scroll control
- Cards styled with hover effects, shadows, and transforms

**Projects included:**
1. Composit Art Board (React + PostgreSQL SaaS)
2. Volunteer: Actify Now (React Native iOS app)
3. Kinnect (Dating app with KNN algorithm)
4. Melodic Minds (AI music learning iOS app)
5. eBible KS (iOS scripture app)
6. Judged (Competition judging platform)
7. Gasio (AI card game analytics)
8. Usama Shopify Design (Custom storefront)

### 7. **Experience Section** (`Experience.tsx`)

**Features:**
- **Vertical timeline** with gradient line
- **Current position indicator** with pulsing dot
- **3 job positions** detailed with:
  - Company name, location, period
  - Role and responsibilities
  - Icons for briefcase, location, calendar
- **Education** entry at bottom

**Visual hierarchy:**
- Current role: Filled dark circle with badge
- Past roles: Outlined circles
- Responsive dot sizes (12px mobile, 16px desktop)

### 8. **Skills Section** (`Skills.tsx`)

**Features:**
- **6 skill categories** with emoji icons:
  - 📱 Mobile (React Native, Expo, iOS, Android)
  - 🖥️ Frontend (React, TypeScript, Tailwind)
  - ⚙️ Backend (Node.js, Express, PostgreSQL, Firebase)
  - 🤖 AI & APIs (OpenAI, Stripe, Google Maps)
  - 🚀 DevOps (Docker, GitHub Actions, Git)
  - 📚 Learning (Java, Spring Boot)
- **Interactive cards** with hover effects (lift, shadow, border glow)
- **Stats section** showing:
  - 8+ Production Apps
  - 3+ Companies
  - 3.5 CGPA

**Interaction:**
- Skill tags change background on hover (muted → foreground)
- Cards lift on hover with scale transform

### 9. **Contact Section** (`Contact.tsx`)

**Features:**
- **4 contact cards:**
  - Email (mailto link)
  - Phone (tel link with highlighted CTA)
  - GitHub (external link)
  - LinkedIn (external link)
- **Location badge** showing Lahore, Pakistan
- **Phone card highlighted** with dark background as primary CTA

**Accessibility:**
- Proper `target="_blank"` with `rel="noopener noreferrer"`
- Icons from Lucide React
- Semantic HTML structure

### 10. **Footer** (`Footer.tsx`)

Simple footer with:
- "MH" logo + Tech stack mention
- Current year (dynamic)
- Social links (GitHub, LinkedIn)

---

## Styling & Theme System

### Design Philosophy

The portfolio uses a **minimal, modern aesthetic** with:
- **Monochromatic base** (black, white, grays)
- **Clean typography** (Space Grotesk + JetBrains Mono)
- **Subtle animations** that enhance without distracting
- **High contrast** for readability
- **Responsive spacing** using Tailwind's utility classes

### Tailwind Configuration

**Custom Theme Extensions:**

#### Fonts
```ts
fontFamily: {
  sans: ['Space Grotesk', 'sans-serif'],  // Headings & body
  mono: ['JetBrains Mono', 'monospace'],  // Code & labels
}
```

#### Color System (CSS Variables)
All colors use HSL with CSS variables for easy theme switching:

```css
:root {
  --background: 0 0% 100%;      /* Pure white */
  --foreground: 0 0% 4%;        /* Near black */
  --primary: 0 0% 6%;           /* Dark gray */
  --secondary: 0 0% 93%;        /* Light gray */
  --muted: 0 0% 93%;            /* Subtle backgrounds */
  --border: 0 0% 88%;           /* Border color */
  --radius: 0.75rem;            /* Border radius */
}
```

**Dark mode support** via `.dark` class (currently not activated but prepared):
```css
.dark {
  --background: 0 0% 4%;
  --foreground: 0 0% 96%;
  /* Inverted color scheme */
}
```

#### Custom Gradients
```css
--gradient-text: linear-gradient(135deg, hsl(0 0% 4%), hsl(0 0% 30%));
--gradient-card: linear-gradient(145deg, hsl(0 0% 99%), hsl(0 0% 95%));
```

#### Shadows & Glows
```css
--glow-primary: 0 4px 32px hsl(0 0% 0% / 0.10);
--glow-primary-lg: 0 8px 56px hsl(0 0% 0% / 0.16);
```

### Animation System

#### Custom Keyframes

**1. Float Animation** (6s infinite)
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}
```
Used for: Floating orbs in hero background

**2. Slide Up** (0.7s cubic-bezier)
```css
@keyframes slide-up {
  from { opacity: 0; transform: translateY(32px); }
  to { opacity: 1; transform: translateY(0); }
}
```
Used for: Hero text staggered entrance

**3. Reveal Left** (0.7s cubic-bezier)
```css
@keyframes reveal-left {
  from { opacity: 0; transform: translateX(-28px); }
  to { opacity: 1; transform: translateX(0); }
}
```
Used for: Experience timeline items

**4. Scale In** (0.5s cubic-bezier)
```css
@keyframes scale-in {
  from { opacity: 0; transform: scale(0.92); }
  to { opacity: 1; transform: scale(1); }
}
```
Used for: Skill cards, contact cards

**5. Pulse Glow** (3s infinite)
```css
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 12px hsl(0 0% 0% / 0.08); }
  50% { box-shadow: 0 0 36px hsl(0 0% 0% / 0.18); }
}
```

**6. Shimmer** (2s linear infinite)
```css
@keyframes shimmer {
  0% { backgroundPosition: '-200% 0'; }
  100% { backgroundPosition: '200% 0'; }
}
```
Configured for loading states (Tailwind plugin)

#### Intersection Observer Reveal System

**How it works:**
1. Elements start with `.reveal`, `.reveal-left`, or `.reveal-scale` classes
2. Initial state: `opacity: 0` + transform offset
3. JavaScript `IntersectionObserver` watches viewport
4. When element enters view (threshold: 0.1, margin: -40px bottom)
5. Adds `.visible` class triggering CSS transition
6. Supports `data-delay` for staggered effects

**Example:**
```tsx
<div className="reveal" data-delay="100">
  {/* Content animates in 100ms after visibility */}
</div>
```

**CSS:**
```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Utility Classes

**Text Gradient:**
```css
.text-gradient {
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```
Used for: Name highlight in hero, section headers

**Glow Effects:**
```css
.glow { box-shadow: var(--glow-primary); }
.glow-lg { box-shadow: var(--glow-primary-lg); }
```

**Border Effects:**
```css
.border-glow {
  border: 1.5px solid hsl(0 0% 0% / 0.4);
  box-shadow: var(--glow-primary);
}
```

**Hover Scale:**
```css
.hover-scale {
  transition: transform 0.2s;
}
.hover-scale:hover {
  transform: scale(1.05);
}
```

### Responsive Design

**Breakpoints** (Tailwind defaults):
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px
- `2xl:` 1400px (custom container max)

**Mobile-first approach:**
- Stack elements vertically on small screens
- Show hamburger menu below `md:` breakpoint
- Adjust font sizes: `text-4xl md:text-5xl lg:text-8xl`
- Responsive padding: `px-4 md:px-8`

---

## Components Breakdown

### UI Components (shadcn/ui)

The project includes **40+ pre-built UI components** from shadcn/ui library:

**Categories:**
1. **Form Components:** Input, Textarea, Select, Checkbox, Radio, Switch, Slider, Calendar, Date Picker
2. **Overlays:** Dialog, Alert Dialog, Drawer, Sheet, Popover, Hover Card, Tooltip, Context Menu, Dropdown Menu
3. **Navigation:** Tabs, Accordion, Breadcrumb, Menubar, Navigation Menu, Pagination
4. **Feedback:** Alert, Toast, Progress, Skeleton, Sonner (toast notifications)
5. **Display:** Card, Avatar, Badge, Separator, Aspect Ratio, Scroll Area
6. **Layout:** Resizable Panels, Sidebar, Collapsible, Table
7. **Advanced:** Command Palette, Form (with React Hook Form), Carousel, Chart

**Configuration:** All components use:
- Radix UI primitives for accessibility
- Tailwind CSS for styling
- CSS variables for theming
- TypeScript for type safety

---

## Features & Functionality

### 1. Smooth Scrolling
- Hash-based navigation (`#about`, `#projects`, etc.)
- Browser-native smooth scroll behavior
- Fixed navbar stays visible during scroll

### 2. Intersection Observer Animations
- Detects element visibility in viewport
- Triggers reveal animations on scroll
- Staggered delays for visual hierarchy
- Runs once per element (unobserves after reveal)

### 3. Auto-Scrolling Carousel
- Projects carousel scrolls automatically at 0.6px/frame (≈36px/sec)
- Pauses on hover (`onMouseEnter`/`onMouseLeave`)
- Manual navigation with arrow buttons
- Infinite loop via duplicated arrays
- Active indicator dots

### 4. Responsive Mobile Menu
- Hamburger icon appears below 768px
- Slides down menu with nav links
- Closes on link click
- Icon switches between Menu ↔ X

### 5. External Links
- Social icons link to GitHub, LinkedIn
- Email links use `mailto:`
- Phone uses `tel:` protocol
- Opens external links in new tab with security attributes

### 6. Performance Optimization
- **Vite build tool:** Fast HMR and optimized production builds
- **SWC compiler:** Faster than Babel for React transforms
- **CSS variables:** Efficient theming without runtime JS
- **RequestAnimationFrame:** Smooth 60fps carousel animation
- **Image optimization:** Assets imported via Vite

### 7. SEO & Meta Tags
Currently basic (in `index.html`):
- Title, description, author
- Open Graph tags
- Twitter Card meta
- **Note:** These need updating from "Lovable App" placeholder

---

## Build & Deployment

### Development Server
```bash
bun run dev
# or
npm run dev
```
- Runs on `http://[::]:8080` (IPv6)
- Hot Module Replacement (HMR) enabled
- Component tagger active in dev mode

### Production Build
```bash
bun run build
# or
npm run build
```
- Vite builds optimized bundle in `dist/`
- Code splitting and tree shaking
- Minified CSS and JS
- Source maps for debugging

**Build modes:**
- `build` - Production build
- `build:dev` - Development build (preserves source structure)

### Preview Production Build
```bash
bun run preview
# or
npm run preview
```
Serves the `dist/` folder locally to test production build

### Testing
```bash
bun run test        # Run tests once
bun run test:watch  # Watch mode
```
Uses Vitest with jsdom environment

### Linting
```bash
bun run lint
```
ESLint with React and TypeScript rules

---

## Development Setup

### Prerequisites
- **Node.js** 18+ or **Bun** runtime
- Git

### Installation

1. **Clone repository:**
```bash
git clone https://github.com/AwVicky/PortFolio.git
cd PortFolio
```

2. **Install dependencies:**
```bash
bun install
# or
npm install
```

3. **Start dev server:**
```bash
bun run dev
```

4. **Open browser:**
Navigate to `http://localhost:8080`

### Environment
No environment variables required - fully static site.

### Adding New Content

**Add a new project:**
Edit `src/components/Projects.tsx`:
```tsx
const projects: Project[] = [
  {
    title: "New Project",
    description: "Description here",
    image: newProjectImg, // Import at top
    tags: ["React", "Node.js"],
    platforms: ["Web"],
    liveUrl: "https://example.com",
  },
  // ... existing projects
];
```

**Update experience:**
Edit `src/components/Experience.tsx`:
```tsx
const experiences = [
  {
    role: "Your Role",
    company: "Company Name",
    location: "City, Country",
    period: "Start – End",
    points: ["Responsibility 1", "Responsibility 2"],
    current: true, // or false
  },
  // ... existing experiences
];
```

**Modify skills:**
Edit `src/components/Skills.tsx`:
```tsx
const skillCategories = [
  {
    label: "Category",
    icon: "🎨",
    skills: ["Skill 1", "Skill 2"],
  },
  // ... existing categories
];
```

### Customization

**Change colors:**
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary: 200 100% 50%; /* Change to your brand color */
}
```

**Change fonts:**
1. Update Google Fonts import in `src/index.css`
2. Update `tailwind.config.ts`:
```ts
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
}
```

**Modify animations:**
Edit keyframes in `src/index.css` or Tailwind config

---

## Summary

### What This Project Is

A **professional portfolio website** that showcases:
- ✅ Real-world projects with live links
- ✅ Work experience and education
- ✅ Technical skills across mobile & web
- ✅ Contact information and social presence

### How It Works

1. **Built with Vite + React** for fast, modern development
2. **Styled with Tailwind CSS** using a minimal monochrome theme
3. **Animated with CSS** and Intersection Observer for scroll reveals
4. **Structured as SPA** with section-based navigation
5. **Responsive design** that adapts to all screen sizes
6. **Production-ready** with optimized builds and testing setup

### Key Technical Features

- 🎨 **Custom theme system** with CSS variables
- 🎭 **Smooth animations** with custom keyframes
- 📱 **Fully responsive** mobile-first design
- ♿ **Accessible** with Radix UI primitives
- ⚡ **Fast builds** with Vite and SWC
- 🔄 **Auto-scrolling carousel** with manual controls
- 👁️ **Scroll-triggered reveals** using IntersectionObserver
- 🎯 **Clean architecture** with reusable components

### Style & Theme

- **Aesthetic:** Minimal, modern, professional
- **Color Palette:** Monochrome (black/white/grays)
- **Typography:** Space Grotesk (sans) + JetBrains Mono (mono)
- **Animations:** Subtle, purposeful, performance-conscious
- **Layout:** Section-based with smooth scrolling
- **Responsive:** Mobile-first with tablet and desktop breakpoints

---

**End of Documentation**

For questions or contributions, contact: muhammadhasaanwork@gmail.com
