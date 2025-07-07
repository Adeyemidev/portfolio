import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { useState,useEffect, MouseEvent } from "react";
import { usePageLoad } from "@/hook";
import Link from "next/link";
// NavBar Component
export default function NavBar () {
 
  const navItems = [
    { label: "Projects", link: "projects" },
    { label: "Contact", link: "contact" },
    { label: "About", link: "about" }
  ];
  
const { isLoaded } = usePageLoad(); 


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
};

return (
  <nav className={`fixed top-0 w-full z-50 transition-all duration-700 
      ${isLoaded ? 'translate-y-0' : '-translate-y-full'}
    `}>
 
         <div className="backdrop-blur-md bg-slate-900/80   max-w-7xl  mx-auto px-6">
           <div className=" py-4 border-b shadow-md border-white/20"  >
             <div className="flex justify-between items-center">
              
              <Link href="/">

               <div className="text-4 xl font-semibold  bg-clip- text " style={{fontSize:"18px"}}>
                 EasyCode
               </div>
              </Link>
               <div className="hidden md:flex space-x-8">

               {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href={`#${item.link}`} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, item.link)}                  className="text-slate-300 hover:text-white transition-colors relative group cursor-pointer"
                >
                  {item.label}
                  <span className="absolute left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              
            </div>
               <div className="flex space-x-4 items-center">
                <Link href="github.com/Ezekiel26" target="_blank">
                  <FaGithub className="w-5 h-8 text-slate-400 hover:text-white cursor-pointer transition-colors" />
                </Link>

                <Link href="https://www.linkedin.com/in/adeyemi-ezekiel-o" target="_blank">
                 <FaLinkedin className="w-5 h-8 text-slate-400 hover:text-white cursor-pointer transition-colors" />
                </Link>

                <Link href="mailto:adeyemiezekiel26@gmail.com" target="_blank">
                  <IoMdMail className="w-5 h-8 text-slate-400 hover:text-white cursor-pointer transition-colors" />
                </Link>
               </div>
             </div>
           </div>
         </div>
       </nav>
  );
};
