
"use client";

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { ChevronDown } from "lucide-react";
import { ArrowBigRightDashIcon } from "lucide-react";
import { BsArrowBarRight } from "react-icons/bs";
import {
  headerData,
  workflowSteps,
  passionBlock,
} from "@/utils/data";
import { useState, useEffect } from "react";
import FAQ from "./faq";
import Testimonials from "./testimonials.tsx";
import RecentWork from "./recentWork";

const Home = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

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
    <>
      {/* ─── HERO ─── */}
      <section className="min-h-screen block items-center relative ">

        {/* Badge — slides down from top */}
        <div
          className={`mb-16 ml-6 pt-24 transform transition-all duration-700 delay-[0ms] ${
            mounted ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
          }`}
        >
          <span
            style={{ opacity: "0.5" }}
            className="px-4 py-2 animate-pulse rounded-full text-sm font-medium border border-dashed"
          >
            {headerData.availabilityBadge}
          </span>
        </div>

        {/* Headline — slides up from bottom */}
        <div
          className={`mx-auto text-center transform transition-all duration-700 delay-[150ms] ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="lg:w-4/5 mx-auto">
            <div id="wrapper">
              <h1 className="glitch text-center text-white relative text-[2em] lg:text-[3em]  lg:leading-[4rem] lg:tracking-[0.1em]" data-text={headerData.headline}>
                {headerData.headline}
              </h1>
            </div>
          </div>
        </div>

        {/* Paragraphs — slides up, slightly after headline */}
        <div
          className={`transform transition-all duration-700 delay-[300ms] ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {headerData.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              style={{ opacity: "0.9" }}
              className="text-base text-white/80 my-6 max-w-3xl leading-relaxed mx-auto text-center"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Buttons — slides up last */}
        <div
          className={`transform transition-all duration-700 delay-[450ms] ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex text-sm lg:text-base flex-row mt-5 gap-2 lg:gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="group bg-blue-600 px-3 lg:px-8 py-3 text-base lg:py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 inline-flex items-center gap-2"
            >
                CONTACT
              <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/work"
              className="group border border-white/40  px-3 lg:px-8 py-3 lg:py-4 font-base font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25  gap-2"
            >
                SEE MY WORK
            </Link>
          </div>
        </div>

        {/* Bounce arrow */}
        <ChevronDown className="absolute -bottom-24 lg:-bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 text-slate-400 animate-bounce" />
      </section>

      {/* ─── WORKFLOW ─── */}
      <section className="py-16">
        <div className="flex justify-between items-center">
          <h1 className="text-small lg:text-medium font-bold mb-3">MY WORKFLOW</h1>
         <div className="flex gap-2 hover:underline">
           <p className="text-xs lg:text-[13px] text-blue-300">Service</p>
            <BsArrowRight className="w-3 h-5 text-blue-300 group-hover:translate-x-1 transition-transform" />
         </div>

        </div>




         

        <div className="flex flex-col lg:flex-row gap-4 mt-6 items-center">
          {workflowSteps.map((step, i) => (
            <article
              key={step.step}
              className="fle border border-white/20 rounded-xl items-center m-auto p-4"
            >
              <div className="flex items-center gap-3 mb-3">
                
               

                <div className="h-7 w-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                   <span className="font-bold text-blue-800 text-sm leading-none">{step.step}</span>
                     </div>

                <h3 className=" uppercase">{step.title}</h3>
              </div>
              <p className="text-white/70 text-sm lg:text-[15px]">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ─── RECENT WORK ─── */}
      <RecentWork />

      {/* ─── TESTIMONIALS ─── */}
      <Testimonials />

      {/* ─── PASSION BLOCK ─── */}
      <section className="py-16">
        <div className="flex flex-col md:flex-row items-center text-center lg:text-left lg:gap-8">
          <img
            src={passionBlock.image}
            alt=""
            className="rounded-full w-32 h-32 object-cover"
          />
          <div className="flex-1">
            <h1 className="text-small lg:text-medium font-bold mb-4">{passionBlock.title}</h1>
            <p className="text-white/80 mb-6 text-base">{passionBlock.description}</p>
            <Link
              href={passionBlock.ctaHref}
              className="px-6 py-3 bg-blue-600 hover:bg-white/10 inline-block"
            >
              {passionBlock.ctaLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQ />
    </>
  )
};

export default Home;