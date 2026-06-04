"use client";

import { useEffect, useRef } from "react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Adeyemi built our SaaS dashboard from scratch — fast, clean, and exactly what we envisioned. The attention to performance and UI detail was next level. Highly recommend.",
    name: "James T.",
    role: "CEO • Flowdesk",
  },
  {
    quote:
      "Working with Adeyemi was seamless. He took our broken frontend and turned it into something our users actually enjoy. Conversion rate went up within the first week.",
    name: "Sarah K.",
    role: "Founder • Launchpad HQ",
  },
  {
    quote:
      "Super professional and communicates clearly at every stage. Delivered ahead of schedule and the code was clean and well structured. Will definitely work with him again.",
    name: "Daniel O.",
    role: "CTO • NestWork",
  },
  {
    quote:
      "He doesn't just build what you ask — he thinks about the user experience too. Our onboarding flow went from clunky to buttery smooth. Exactly what we needed.",
    name: "Amara F.",
    role: "Product Lead • Vaultly",
  },
  {
    quote:
      "Adeyemi integrated our API and built the entire frontend in record time. Clean TypeScript, great component structure, and zero drama. A developer you can trust.",
    name: "Lena R.",
    role: "Marketing Lead • Trackify",
  },
  {
    quote:
      "I've worked with many developers but Adeyemi stands out. Fast delivery, pixel-perfect UI, and he actually cares about how the product performs. Outstanding work.",
    name: "Imran K.",
    role: "Director • AceBooks",
  },
];

// Duplicate for seamless loop
const allTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5;
    const totalWidth = track.scrollWidth / 2;

    const animate = () => {
      position += speed;
      if (position >= totalWidth) {
        position = 0;
      }
      track.style.transform = `translateX(-${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => {
      animationId = requestAnimationFrame(animate);
    };

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animationId);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <section className=" py-16 overflow-hidden ">
      {/* Header */}
      <h1 className="text-medium font-bold">WHAT CLIENTS SAY</h1>
        <p className="my-3 text-white/80 text-sm ">Results, reliability, and a smooth process.</p>

      {/* Scrolling track */}
      <div className="overflow-hidden">
        <div ref={trackRef} className="flex gap-3 w-max">
          {allTestimonials.map((t, i) => (
            <div
              key={i}
              className="w-[340px] flex-shrink-0 rounded-lg border border-white/40 bg-[#141414] rounded-sm p-6 flex flex-col justify-between"
            >
              <p className="text-sm text-white/80 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-700 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-white/40">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}