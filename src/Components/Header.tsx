
"use client"

import { useEffect } from 'react'; 
import Aos from 'aos'; 
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation'; 
import icon from '../../public/images/simple-icons.svg';
import { headerData } from './utils/data'; 
import 'aos/dist/aos.css'; 
import Image from 'next/image';

const Header = () => {
  useEffect(() => {
    Aos.init();
  }, []);
    
  return (
    <main data-aos="fade-up" data-aos-duration="2000" id='head' className="pt-20 md:pt-32 container mx-auto sm:mb-20 items-center">
      <div>
        <TypeAnimation
          sequence={[headerData.headline]}
          wrapper="h1"
          speed={40}
          cursor={true}
          style={{
            fontSize: '2.270em',
            color: '#FFFFFF',
            lineHeight: '1.2',
            fontFamily: 'Blorado, sans-serif',
            textRendering: 'geometricPrecision',
            fontWeight: '500',
            letterSpacing: '9.9px'
          }}
        />
        
        {headerData.paragraphs.map((paragraph, index) => (
          <p key={index} className='md:max-w-5xl mt-6 text-gray'>
            {paragraph}
          </p>
        ))}
        
        <h1 className="mt-8 text-xl font-semibold text-white">{headerData.services.title}</h1>
        <ul className="mt-4 space-y-2">
          {headerData.services.items.map((item, index) => (
            <li key={index} className="flex items-start text-gray">
              <span className="mr-2">•</span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
        
        
          <p className='md:max-w-5xl mt-6 text-gray'> 
            I'm not just a frontend developer who knows React, NextJS, 
         and Tailwind—I'm a business partner who helps creative professionals
          achieve tangible results. </p>
         

        
       <div className='lg:flex gap-2 items-center md:max-w-5xl mt-6 text-gray'>
          <p >
          Ready to build a website that actually works for your business?          
          </p>
          <a className='font-bold text-base' href="mailto:easycode.techdev@gmail.com">
             KINDLY CONTACT ME</a>

         </div>
     
        <Link 
          to='Projects'
          spy={true} 
          smooth={true} 
          offset={-55} 
          duration={1500}
          className='flex items-center gap-6 mt-10 -mb-0 leading-normal tracking-[2.29px]'
        >
          <span className='sendMessage sendMessage1 font-thin'>SEE PROJECTS</span>
          <Image className="animate-bounce w-6 h-6 ..." src={icon} alt="" />
        </Link>
      </div>
    </main>
  );
}; export default Header;