
/* =======================
   TYPES
======================= */

export const SITE_BACKGROUND = "oklch(14.7% 0.004 49.25)";

export interface NavItem {
  label: string;
  href: string;
}

export interface HeaderData {
  availabilityBadge: string;
  headline: string;
  paragraphs: string[];
}

export interface AboutData {
  title: string;
  paragraphs: string[];
  sectionTitle: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  image: string;
}

export interface PassionBlock {
  title: string;
  description: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface Skill {
  name: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  image: string;
  link: string;
  tags: string[];
}

export interface ServicesData {
  title: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  href: string;
}

/* =======================
   NAVIGATION
======================= */

export const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "WORK", href: "/work" },
  { label: "ABOUT", href: "/about" },
];

export const socialLinks: SocialLink[] = [
  { label: "X", href: "https://x.com/easycode01" },
  { label: "GitHub", href: "https://github.com/Adeyemidev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adeyemi-ezekiel-o" },
];

/* =======================
   HEADER
======================= */

export const headerData: HeaderData = {
  availabilityBadge: "Available for Gigs",
  headline: "I BUILD FAST, CLEAN INTERFACES THAT CONVERT",
  paragraphs: [
    "I develop seamless frontend experiences with solid architecture, sleek interfaces, and reliable performance. Every line of code is crafted to make your product feel fast, stable, and effortless to use.",
  ],
};

export const workflowSteps: WorkflowStep[] = [
  {
    step: 1,
    title: "GET ALIGNED",
    description:
      "A quick call to understand what you need. Then you get a clear plan—what we're building, what it costs, and when it's done.",
  },
  {
    step: 2,
    title: "START BUILDING",
    description:
      "Watch your site take shape with live previews. Give feedback at every stage so it turns out exactly right.",
  },
  {
    step: 3,
    title: "Launch & Improve",
    description:
      "Test and go live. We track what works and keep optimizing so your site actually drives results.",
  },
];

export const recentWorkPreview = {
  title: "RECENT WORK",
  subtitle:
    "A mix of no-code, low-code, and custom builds, always conversion-first.",
  viewAllHref: "/work",
};

export const testimonials: Testimonial[] = [
  {
    id: "client-1",
    quote: "good review here",
    name: "name",
    role: "Client",
    image: "/client1.jpg",
  },
];

export const passionBlock: PassionBlock = {
  title: "PASSIONATE ABOUT CLEAN, PERFORMANT SOLUTIONS",
  description:
    "I design and develop robust frontend interfaces that bring ideas to life; whether it's a custom web app, or e-commerce platform.",
  image: "/images/profile1.png",
  ctaLabel: "About Me",
  ctaHref: "/about",
};

/* =======================
   ABOUT
======================= */

export const aboutData: AboutData = {
  title: "HEY, I'M ADEYEMI",
  sectionTitle: "EXPERIENCE & APPROACH",
  paragraphs: [
    "I'm a front-end developer who works across the entire spectrum from custom to no-code/low-code solutions. I build websites, and web applications that actually work. I also handle SEO to help you get found on Google. Recently, I've been working a lot with AI integrations; building wrappers, connecting to third-party models, and creating AI agents. Whether you're a local business in Nigeria or a tech startup anywhere, I'll build what you need. When I'm not coding, I just rest!",
    "I've been building web applications and mobile apps for over 5 years. During this time, I've worked across many different industries and learned that every project has its own challenges.",
    "What sets me apart is how I handle communication. When issues come up (and they always do), I address them quickly and honestly. I believe in keeping relationships strong because that's how great work gets done. No drama, just solutions.",
    "On the SEO side, I handle both on-page and off-page optimization. I've helped clients in healthcare, e-commerce, finance, real estate, and more get found on Google. Each niche has its tricks, and I've learned them through real client work.",
    "I'm currently open to freelance gigs and full-time opportunities (Remote or onsite). If you need someone for a quick project or want to add me to your team permanently, let's talk.",
  ],
};

/* =======================
   SERVICES
======================= */

export const servicesData: ServicesData = {
  title: "Build fast. Rank higher. Sell more.",
  items: [
    "Front-End (Nextjs/TypeScript)",
    "Shopify eCommerce",
    "Shopify Custom (API/Liquid)",
    "WordPress Sites",
    "Custom WP + PHP (Sage)",
    "SEO & Performance",
    "AI & Automation",
  ],
};
