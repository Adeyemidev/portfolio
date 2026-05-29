"use client";

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { navItems, socialLinks } from "@/utils/data";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const transform =
    "text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12";

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);
  return (
    <>
    <nav className={`fixed top-0  w-full z-30 transform transition-all duration-700  ${
  mounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
}`}>
     
        <div className="backdrop-blur-md  shadow-md ">
          <div className="flex w-full items-center justify-between container border-b border-white/40 py-4">
            <Link href="/" className="shrink-0 pl-0">
                <img src="/images/logo.svg" alt="Logo" className="h-8 w-auto block" />
              </Link>
            <div className="flex items-center gap-8 min-w-0">

              <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-slate-300 hover:text-white transition-colors relative group text-sm ${
                      isActive(item.href) ? "text-white" : ""
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${
                        isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 shrink-0">
                <Link
                  href="/contact"
                  className="text-sm  hidden lg:block  px-4 py-2 bg-blue-600 transition-colors"
                >
                  CONTACT
                </Link>
                <button
                  className="lg:hidden text-white transition-transform duration-300 ease-in-out z-50 relative"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                  style={{
                    transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-all duration-300"
                  >
                    {!isMenuOpen ? (
                      <>
                        <path
                          d="M3 12H21"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 6H21"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 18H21"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </>
                    ) : (
                      <>
                        <path
                          d="M18 6L6 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 6L18 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </>
                    )}
                  </svg>
                </button>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 lg:hidden"
            onClick={closeMenu}
            aria-hidden
          />
          <div
            className={`fixed top-0 right-0 h-screen w-80 z-50 lg:hidden transform transition-transform duration-300 ease-in-out backdrop-blur-lg bg-black/30 border-r border-gray-600/30 shadow-xl ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="pt-4 px-3">
              <div className="flex justify-end mb-6">
                <button
                  onClick={closeMenu}
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className={` p-3 font-innertext hover:text-white transition-colors text-xs ${
                      isActive(item.href) ? "text-blue-600 bg-white/10 " : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="flex space-x-4 items-center mt-8 pt-6 border-t border-white/30">
              <button
                 type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-2.5 text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
             > Contact </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
