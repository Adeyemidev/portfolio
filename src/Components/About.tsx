
"use client";

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { aboutData } from "@/utils/data";
import { useState } from "react";

export default function About() {
  const [isDownloading, setIsDownloading] = useState(false);

  // const handleDownload = async () => {
  //   if (isDownloading) return;
  //   setIsDownloading(true);
  //   try {
  //     await new Promise((resolve) => setTimeout(resolve, 1500));
  //     const link = document.createElement("a");
  //     link.href = "/resume.pdf";
  //     link.download = "Resume.pdf";
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //     await new Promise((resolve) => setTimeout(resolve, 500));
  //   } catch (error) {
  //     console.error("Download failed:", error);
  //   } finally {
  //     setIsDownloading(false);
  //   }
  // };
      
  return (
    <section className="pt-[8rem] container">
      {/* Two column layout: Image left, Content right */}
      <div className=" flex flex-col md:flex-row gap-12 items-center mx-auto">

        {/* Left — Photo */}
        
          <div className=" overflow-hidden lg:w-2/5">
            <img
              src="/images/profile1.png"
              alt="Adeyemi Ezekiel"
              className="w-full lg:h-screen rounded-t-2xl rounded-b-2xl object-cover object-top"
            />
        </div>

        {/* Right — Content */}
        <div className="flex-1">

          {/* Hey, I'm ADEYEMI */}
          <h1 className="text-medium font-black uppercase tracking-wide mb-6">
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
          <h2 className=" text-xl font-black uppercase tracking-widest mb-4 mt-8">
            {aboutData.sectionTitle}
          </h2>

          {/* Remaining paragraphs */}
          {aboutData.paragraphs.slice(1).map((paragraph, index) => (
            <p key={index} className="text-base text-slate-300 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row mt-10 gap-4 items-center">
            <Link
              href="/work"
              className="group bg-blue-600 px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 inline-flex items-center justify-center gap-2"
            >
              SEE MY WORK
              <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="group border border-white/40 px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 inline-flex items-center justify-center gap-2"
            >
              CONTACT
              <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

        </div>
      </div></div>
    </section>
  );
}