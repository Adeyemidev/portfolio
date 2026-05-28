"use client";

import { useState } from "react";
import Link from "next/link";

type Category = "All" | "React" | "Nextjs" | "WordPress" |"Custom";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  href: string;
  category: Category[];
}

const projects: Project[] = [
  {
    title: "KOVIO - Event Planning Marketplace",
    description:
      "Nigeria's largest event planning marketplace. Built the frontend from the ground up including real-time booking flows, multi-user dashboards, payment integrations, and a vendor management system.",
    image: "/images/kovio.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    href: "https://kovio.co",
    category: ["Nextjs", "React"],
  },
  {
    title: "Ambaqual Fashion Design - Ecommerce Website",
    description:
      "The site showcases fashion design services, portfolio work, and creative solutions offered by this division of the AmbaQual Group, targeting clients seeking professional fashion design and related creative services. .",
    image: "/images/amber.png",
    tags: ["WordPress", "CSS", "Elementor", "WooCommerce"],
    href: "https://ambaqualfashiondesign.ambaqualgroup.co.uk/",
    category: ["WordPress", "Custom"],
  },
  {
    title: "SwiftPass - KYC & Digital Identity Platform",
    description:
      "A digital identity and KYC verification platform built for scale. Engineered the full frontend architecture using Next.js, TypeScript, and Shadcn UI — delivering a seamless onboarding flow and real-time KYC status tracking.",
    image: "/images/swiftpass.png",
    tags: ["TypeScript", "Next.js", "Shadcn UI", "Tailwind CSS"],
    href: "https://swiftpass-web.vercel.app/",
    category: ["Nextjs", "Custom"],
  },
   {
    title: "JERSEY GENERATOR - CUSTOM ECOMMERCE WEBSITE",
    description:
      "A fully custom eCommerce platform built for jersey/apparel customization and sales. Developed using WordPress with a custom child theme and heavily customized Elementor interface.",
    image: "/images/jersey.jpg",
    tags: ["Acf", "Wordpress", "Elementor Child", "Php", "Css", "Jquery", "FPD"],
    href: "https://thejerseygenerator.com/",
    category: ["WordPress"],
  },
  {
    title: "GCMS - Canadian Immigration Case Management",
    description:
      "A professional case management platform for a Canadian immigration firm. Built a responsive multi-page platform with structured intake flow, service pages, and a client-facing portal.",
    image: "/images/gcms.png",
    tags: ["Next.js", "ExpressJS", "Tailwind CSS", "Styled Components"],
    href: "https://mummyserena.netlify.app/",
    category: ["Nextjs", "Custom"],
  },

  {
    title: "Audiophile - E-commerce Store",
    description:
      "A multi-page premium audio products e-commerce store with cart functionality, checkout flow, and responsive design.",
    image: "/images/audiophile.png",
    tags: ["JavaScript", "React", "Tailwind CSS"],
    href: "https://audiophilic.vercel.app/",
    category: ["React"],
  },
 
  {
    title: "Designo - Agency Website",
    description:
      "A multi-page design agency website with contact form, location pages, and clean brand identity presentation.",
    image: "/images/designo.png",
    tags: ["React", "CSS", "JavaScript"],
    href: "https://designo-ade.netlify.app/",
    category: ["React", "Custom"],
  },
];

const filters: Category[] = ["All", "React", "Nextjs", "WordPress", "Custom"];

export default function Works() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category.includes(active));

  return (
    <section className=" py-16">
      {/* Header */}
      <h1 className="text-3xl font-black uppercase tracking-widest mb-2">
        MY WORKS
      </h1>
      <p className="text-white/50 text-sm mb-10">
        Fast, clean, and conversion-focused frontend builds.
      </p>

      {/* Layout: Filter sidebar + Projects */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filter Sidebar */}
        <div className="w-full md:w-[220px] flex-shrink-0">
          <div className="border border-white/10 bg-[#141414] p-5">
            <p className="text-xs font-bold uppercase tracking-widest mb-4 text-white/60">
              Filter
            </p>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`text-xs px-3 py-1.5 border transition-all ${
                    active === f
                      ? "border-red bg-white text-black font-bold"
                      : "border-white/20 text-white/60 hover:border-white/15 hover:text-white"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <p className="text-xs text-white/40 mt-5">
              Showing{" "}
              <span className="text-white font-bold">{filtered.length}</span>{" "}
              projects
            </p>
          </div>
        </div>

        {/* Projects List */}
        <div className="flex-1 flex flex-col gap-4">
          {filtered.map((project, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row border border-white/10 bg-[#141414] overflow-hidden group"
            >
              {/* Image */}
              <div className="w-full md:w-[380px] h-[220px] flex-shrink-0 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between gap-4">
                <div>
                  <h2 className="text-base font-black uppercase tracking-wide mb-2">
                    {project.title}
                  </h2>
                  <p className="text-sm text-white/50 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs border border-white/10 px-3 py-0.5 rounded-full text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={project.href}
                  target="_blank"
                  className="text-sm underline underline-offset-4 hover:text-white/60 transition-colors w-fit"
                >
                  View Live →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}