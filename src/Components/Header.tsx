"use client"

import { Link } from 'react-scroll';
import { BsArrowRight } from 'react-icons/bs';
import { usePageLoad } from '@/hook';
import { ChevronDown } from 'lucide-react'
import { headerData } from '@/utils/data';
import { useState } from 'react';

const Header = () => {
    const [isDownloading, setIsDownloading] = useState(false); 

    const {isLoaded} = usePageLoad();

    const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
  scrollToSection(sectionId);
    }
  };

  const handleDownload = async () => {
    if (isDownloading) return; 

    setIsDownloading(true); 

    try {
        await new Promise(resolve => setTimeout(resolve, 1500));

        const link = document.createElement('a');
        link.href = '/resume.pdf'; 
        link.download = 'Resume.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
        console.error('Download failed:', error);
    } finally {
        setIsDownloading(false); 
    }
};
  return ( 

      <section className=" container min-h-screen flex items-center relative pt-20">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="mb-16">
            <span style={{opacity:"0.5"}} className="px-4 py-2 animate-pulse rounded-full text-sm font-medium border border-dashed">
              Available for Opurtunities 
            </span>
          </div>
          
       <div id="app">
        	<div id="wrapper">
	       	<h1 className="glitch" data-text="
           I'M ADEYEMI EZEKIEL">I'M ADEYEMI EZEKIEL</h1>
	        </div>
       </div>



          
        

           {headerData.paragraphs.map((paragraph, index) => (
            <p style={{opacity: "0.9"}} className="text-lg md:text-xl lg:text-2xl text-slate-300 my-6  max-w-4xl  leading-relaxed">
                   {paragraph}
            </p>
           ))}


        <div className="flex flex-col sm:flex-row mt-5 gap-4 justify-center items-center ">
             
          <button className="group border bg-white from-green-400 to-blue-500 px-8 py-4 rounded-full font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"> 
          

           <Link to="projects" onClick={() => scrollToSection("projects")}>
             <span className="flex items-center gap-2">
               View My Work <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </span>

       </Link>
           </button>
       

     <button 
    onClick={handleDownload}
    disabled={isDownloading}
    className={`border-2 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 ${
        isDownloading 
            ? 'border-white/20 cursor-not-allowed' 
            : 'border-white/20 '
    }`}
> 
    {isDownloading && (
        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    )}
    {isDownloading ? 'Downloading...' : 'Download Resume'}
</button>
            
    
    </div> 

          
        </div>
        
        <ChevronDown className="absolute -bottom-10 left-1/2 transform-translate-x-1/2 w-6 h-6 text-slate-400 animate-bounce" />
      </section>
  );
};

export default Header;