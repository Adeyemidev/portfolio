
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
    <main
      data-aos="fade-up"
      data-aos-duration="2000"
      id="head"
      className="-mt-28 lg:-mt-0 lg:h-screen flex flex-col justify-center items-center text-center container mx-auto" 
    >
      <div className="flex flex-col items-center w-full">
        <TypeAnimation
          sequence={[headerData.headline]}
          wrapper="h1"
          speed={40}
          cursor={true}
          className=' leading-[40px] tracking-[-1.14px] sm:leading-[72px] sm:tracking-[-2.05px] md:text-extralarge md:leading-extralarge font-bold'
          style={{
            fontSize: '2.270em',
            color: '#FFFFFF',
            lineHeight: '1.2',
            fontFamily: 'Blorado, sans-serif',
            textRendering: 'geometricPrecision',
            letterSpacing: '9.9px',
            textAlign: 'center'
          }}
        />
        
        {headerData.paragraphs.map((paragraph, index) => (
          <p key={index} className="md:max-w-xl mt-6 mx-auto text-gray text-center">
            {paragraph}
          </p>
        ))}
        
     
        <Link 
          to="Projects"
          spy={true} 
          smooth={true} 
          offset={-55} 
          duration={1500}
          className="flex items-center justify-center mx-auto gap-3 mt-10 -mb-0 leading-normal tracking-[2.29px] text-center"
        >
          <span className="sendMessage sendMessage1 font-thin">SEE PROJECTS</span>
          <Image className="animate-bounce w-6 h-6" src={icon} alt="" />
        </Link>
      </div>
    </main>
  );
};

export default Header;