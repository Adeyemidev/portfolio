import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { usePageLoad } from "@/hook";
import Link from "next/link";
import React, { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: "Projects", link: "projects" },
    { label: "Contact", link: "contact" },
    { label: "About", link: "about" }
  ];
  
  const { isLoaded } = usePageLoad(); 

  // Style for social icons
  const transform = "text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
    // Close mobile menu after clicking
    setIsMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Fixed Navigation Bar */}
      <nav className={`fixed top-0 w-full z-30 transition-all duration-700 
          ${isLoaded ? 'translate-y-0' : '-translate-y-full'}
        `}>
        <div className="backdrop-blur-md bg-slate-900/80 max-w-7xl mx-auto px-6">
          <div className="py-4 border-b shadow-md border-white/20">
            <div className="flex justify-between items-center">
              
              {/* Hamburger Menu Button */}
              <button
                className="lg:hidden text-white transition-transform duration-300 ease-in-out z-50 relative"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                style={{
                  transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)'
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

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <a 
                    key={item.label} 
                    href={`#${item.link}`} 
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, item.link)}                  
                    className="text-slate-300 hover:text-white transition-colors relative group cursor-pointer"
                  >
                    {item.label}
                    <span className="absolute left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4 items-center">
                <Link href="https://x.com/easycode01" target="_blank" className={transform}>
                  <BsTwitterX className='w-5 h-5' />
                </Link>
                <Link href="https://github.com/Adeyemidev" target="_blank" className={transform}>
                  <FaGithub className='h-5 w-5' />
                </Link>
                <Link href="https://www.linkedin.com/in/adeyemi-ezekiel-o" target="_blank" className={transform}>
                  <FaLinkedin className='h-5 w-5' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop - Click to close menu*/}
          <div 
            className="fixed inset-0 bg-black z-40 lg:hidden"
            onClick={closeMenu}>
          </div>
          
          {/* Mobile Menu */}
          <div className={`fixed top-0 left-0 h-screen w-64 bg-slate-900 z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <div className="pt-4 px-6">
              {/* Close button inside mobile menu */}
              <div className="flex justify-start mb-6">
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

              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <a 
                    key={item.label} 
                    href={`#${item.link}`} 
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, item.link)}                  
                    className="text-slate-300 hover:text-white transition-colors relative group cursor-pointer text-lg"
                  >
                    {item.label}
                    <span className="absolute left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </div>
              
              {/* Mobile Social Links */}
              <div className="flex space-x-4 items-center mt-8 pt-6 border-t border-white/20">
                <Link href="https://x.com/easycode01" target="_blank" className={transform}>
                  <BsTwitterX className='w-6 h-6' />
                </Link>
                <Link href="https://github.com/Adeyemidev" target="_blank" className={transform}>
                  <FaGithub className='h-6 w-6' />
                </Link>
                <Link href="https://www.linkedin.com/in/adeyemi-ezekiel-o" target="_blank" className={transform}>
                  <FaLinkedin className='h-6 w-6' />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}