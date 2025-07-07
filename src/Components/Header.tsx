
"use client"

import { useEffect } from 'react'; 
import Aos from 'aos'; 
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation'; 
import { headerData } from '../utils/data'; 
import 'aos/dist/aos.css'; 
import { BsArrowRight } from 'react-icons/bs';
import { usePageLoad } from '@/hook';
import { ChevronDown } from 'lucide-react';
import { Zap, Rocket, Globe } from 'lucide-react';
const Header = () => {
  useEffect(() => {
    Aos.init();
  }, []);
    const {isLoaded} = usePageLoad();
  return ( 


      //    {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6 pt-20">
        <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="mb-6">
            <span className="px-4 py-2 animate-pulse bg-gradient-to-r from-purple-50 0/20 to-pink-500/20 rounded-full text-sm font-medium border border-purple-500/30">
              Available for Opurtunities 
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-24 leading-tight">
            <span className="bg-gradient-to-r from-white bg-clip-text text-transparent">
              Software Developer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            I architect and build scalable, high-performance web applications that serve thousands of users. 
            Specializing in enterprise-grade React ecosystems and modern full-stack solutions.
          </p>
          

           <div className="flex flex-col sm:flex-row mt-5 gap-4 justify-center items-center ">
             
          <button className="group border bg-white from-green-400 to-blue-500 px-8 py-4 rounded-full font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"> 
           
           <span className="flex items-center gap-2">View My Work <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span> 
           </button>
       
        <Link to="Projects" spy={true}  smooth={true}  offset={-55}  duration={1500}>
      
      <button className="border-2 border-white/20 px-8 py-4 rounded-full font-semibold
       hover:border-green-400 hover:text-green-400 transition-all duration-300 hover:scale-105"> 
      Download Resume  </button>
            
    </Link>
    </div> 

          
        </div>
        
        <ChevronDown className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-6 h-6 text-slate-400 animate-bounce" />
      </section>
  );
};

export default Header;