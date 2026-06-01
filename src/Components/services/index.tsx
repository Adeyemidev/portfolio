

import Link from "next/link";

interface Service {
  subtitle?: string;
  title: string;
  points: string[];
  tags: string[];
  cta: string;
  ctaHref: string;
}

const services: Service[] = [
  {
    title: "Frontend Development",
    points: [
      "Modern web apps with React & Next.js.",
      "Pixel-perfect UI from Figma or design specs.",
      "Authentication, RBAC, and API integration.",
      "Performance-first: fast load times and clean code.",
    ],
    tags: ["nextjs", "react", "typescript", "tailwind"],
    cta: "See frontend work →",
    ctaHref: "/projects",
  },
  {
    title: "UI/UX Implementation",
    points: [
      "Turn Figma designs into production-ready interfaces.",
      "Responsive layouts across all screen sizes.",
      "Smooth animations and micro-interactions.",
      "Accessible, semantic HTML structure.",
    ],
    tags: ["figma", "tailwind", "framer motion", "shadcn"],
    cta: "See UI work →",
    ctaHref: "/projects",
  },
  {
    title: "Performance Optimization",
    points: [
      "Core Web Vitals: LCP/CLS/INP improvements.",
      "Code splitting, lazy loading, image optimization.",
      "Bundle size audit and reduction.",
      "Lighthouse score improvements.",
    ],
    tags: ["lighthouse", "nextjs", "performance", "web vitals"],
    cta: "Talk performance →",
    ctaHref: "/contact",
  },
  {
    title: "API Integration",
    points: [
      "REST & GraphQL API consumption.",
      "Third-party service integrations (Stripe, Paystack, etc).",
      "Real-time features with WebSockets.",
      "Error handling and loading state management.",
    ],
    tags: ["rest api", "graphql", "stripe", "paystack"],
    cta: "Talk integration →",
    ctaHref: "/contact",
  },
  {
    title: "Landing Page Development",
    points: [
      "Conversion-focused landing pages.",
      "Fast build turnaround — 3 to 5 days.",
      "SEO-ready structure and metadata.",
      "Contact forms and CTA integration.",
    ],
    tags: ["nextjs", "tailwind", "seo", "conversion"],
    cta: "Get a landing page →",
    ctaHref: "/contact",
  },
  {
    subtitle: "SAAS · DASHBOARDS · PLATFORMS",
    title: "SaaS Frontend Builds",
    points: [
      "Multi-role dashboards for SaaS products.",
      "Data visualization and analytics UI.",
      "Subscription flows and billing integration.",
      "Scalable component architecture.",
    ],
    tags: ["react", "typescript", "nextjs", "recharts"],
    cta: "See SaaS work →",
    ctaHref: "/projects",
  },
];

export default function Services() {
  return (
    <section className="pt-[8rem] container">
      {/* Hero headline */}
      <h1 className="text-medium font-black uppercase text-center mb-8">
        BUILD FAST. SHIP CLEAN. CONVERT MORE.
      </h1>

      {/* Filter tags */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {[
          "Frontend Development",
          "UI/UX Implementation",
          "Performance Optimization",
          "API Integration",
          "Landing Pages",
          "SaaS Builds",
        ].map((label) => (
          <span
            key={label}
            className="text-xs border border-white/20 px-4 py-1.5 text-white/60 hover:border-white/60 hover:text-white cursor-pointer transition-all"
          >
            {label}
          </span>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="border border-white/40 bg-[#141414] rounded-xl  px-4 py-3 lg:p-7 flex flex-col justify-between gap-6"
          >
            <div >
              {service.subtitle && (
                <p className="text-xs text-blue-400 uppercase tracking-widest mb-2">
                  {service.subtitle}
                </p>
              )}
              <h2 className="text-lg font-black uppercase tracking-wide mb-5">
                {service.title}
              </h2>
              <ul className="space-y-1.5 mb-6">
                {service.points.map((point, j) => (
                  <li key={j} className="text-sm text-white/60">
                    {point}
                  </li>
                ))}
              </ul>
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs border border-white/15 px-3 py-1 text-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href={service.ctaHref}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white text-sm font-semibold px-5 py-2.5 w-fit"
            >
              {service.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <div className="border border-white/40 bg-[#141414] px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-sm">
        <div>
          <h3 className="text-xl font-black uppercase tracking-wide mb-1">
            READY TO BUILD SOMETHING?
          </h3>
          <p className="text-sm text-white/40">
            Tell me your goal and I'll propose the fastest, cleanest path.
          </p>
        </div>
        <Link
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 transition-colors text-white text-sm font-semibold px-6 py-3 whitespace-nowrap"
        >
          Get started
        </Link>
      </div>
    </section>
  );
}
