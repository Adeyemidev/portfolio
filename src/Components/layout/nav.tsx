import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { usePageLoad } from "@/hook";
import Link from "next/link";

export default function NavBar () {
 
  const navItems = [
    { label: "Projects", link: "projects" },
    { label: "Contact", link: "contact" },
    { label: "About", link: "about" }
  ];
  
const { isLoaded } = usePageLoad(); 

// style
const transform = "text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12"
// 
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
                  href={`#${item.link}`} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, item.link)}                  
                  className="text-slate-300 hover:text-white transition-colors relative group cursor-pointer"
                >
                  {item.label}
                  <span className="absolute left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              
            </div>
               <div className="flex space-x-4 items-center">
                <Link href="https://x.com/easycode01" target="_blank" className={transform}>
                   <BsTwitterX  className='w-5 h-8' />
                </Link>
                <Link href="https://github.com/Adeyemidev" target="_blank" className={transform}>
                  <FaGithub className={`h-8 w-5 ${transform}`}  />
                </Link>

                <Link href="https://www.linkedin.com/in/adeyemi-ezekiel-o" target="_blank">
                 <FaLinkedin className={`h-8 w-5 ${transform}`}  />
                </Link>
               </div>
             </div>
           </div>
         </div>
       </nav>
  );
};
