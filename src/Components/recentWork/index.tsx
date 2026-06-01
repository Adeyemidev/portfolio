import Link from "next/link";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  href: string;
}

const projects: Project[] = [
  {
    title: "KOVIO - Event Planning Marketplace",
    description:
      "Nigeria's largest event planning marketplace. Built the frontend from the ground up including real-time booking flows, multi-user dashboards, and payment integrations.",
    image: "/images/kovio.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    href: "https://kovio.co",
  },
  {
    title: "Ambaqual Fashion Design - Ecommerce Website",
    description:
      "The site showcases fashion design services, portfolio work, and creative solutions offered by this division of the AmbaQual Group, targeting clients seeking professional fashion design and related creative services. .",
    image: "/images/amber.png",
    tags: ["WordPress", "CSS", "Elementor", "WooCommerce"],
    href: "https://swift-pass-customer-web.vercel.app",
  },

];

export default function RecentWork() {
  return (
    <section className=" py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-small lg:text-medium font-bold uppercase">
          Recent Work
        </h2>
        <Link
          href="/projects"
          className="text-sm bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 text-white font-semibold"
        >
          View all
        </Link>
      </div>
      <p className="text-white/40 text-sm mb-10">
        Fast, clean, and conversion-focused frontend builds.
      </p>

      {/* Projects Grid - asymmetric 65/35 layout */}
      <div className="grid lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-lg border border-white/40 group cursor-pointer ${
              i % 2 === 0 ? "col-span-2" : "col-span-1"
            }`}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[300px] lg:h-[420px] object-cover object-top transition-transform duration-500 group-hover:scale-95"
            />

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-5 backdrop-blur-lg bg-black/30">
              <h3 className="text-sm lg:text-smaller font-black uppercase tracking-wide mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-white/80 mb-3 line-clamp-2">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs border border-white/20 px-2 py-0.5 rounded-full text-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Link
                href={project.href}
                target="_blank"
                className="text-xs underline underline-offset-4 hover:text-white/60 transition-colors"
              >
                See live →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}