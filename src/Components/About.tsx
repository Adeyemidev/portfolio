
"use client";

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { aboutData } from "@/utils/data";
import { useState } from "react";

export default function About() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (isDownloading) return;
    setIsDownloading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };
      
  return (
    <section className="py-24 pt-28 container">
      {/* Two column layout: Image left, Content right */}
      <div className=" flex flex-col md:flex-row gap-12 items-center mx-auto">

        {/* Left — Photo */}
        
          <div className="border border-white/40 overflow-hidden lg:w-2/5">
            <img
              src="/images/profile1.png"
              alt="Adeyemi Ezekiel"
              className="w-full lg:h-screen rounded-t-2xl rounded-b-2xl object-cover object-top"
            />
        </div>

        {/* Right — Content */}
        <div className="flex-1">

          {/* Hey, I'm ADEYEMI */}
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wide mb-6">
            HEY, I'M{" "}
            <span className="text-blue-400">ADEYEMI</span>
          </h1>

          {/* First paragraph */}
          {aboutData.paragraphs.slice(0, 1).map((paragraph, index) => (
            <p key={index} className="text-base text-slate-300 leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}

          {/* Experience & Approach */}
          <h2 className="text-base font-black uppercase tracking-widest mb-4 mt-8">
            {aboutData.sectionTitle}
          </h2>

          {/* Remaining paragraphs */}
          {aboutData.paragraphs.slice(1).map((paragraph, index) => (
            <p key={index} className="text-base text-slate-300 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row mt-10 gap-4">
            <Link
              href="/work"
              className="group bg-blue-600 px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 inline-flex items-center justify-center gap-2"
            >
              SEE MY WORK
              <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className={`border-2 px-8 py-4 font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 ${
                isDownloading ? "border-white/40 cursor-not-allowed" : "border-white/40"
              }`}
            >
              {isDownloading && (
                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              )}
              {isDownloading ? "Downloading..." : "Download Resume"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}