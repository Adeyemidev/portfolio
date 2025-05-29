
'use client'

import Image from 'next/image'
import Aos from 'aos'
import { useEffect, useState } from 'react'
import 'aos/dist/aos.css'
import net2 from '../../public/images/net2.png'
import { skillsData } from './utils/data'
import { Progress } from './ui/progress'


const Skills = (): JSX.Element => {
  useEffect(() => {
    Aos.init();
  }, []);
  
  const [progressValues, setProgressValues] = useState<{ [key: string]: number }>({});
  
  // Function to determine gradient color based on proficiency
  // const getProgressColor = (proficiency: number) => {
  //   if (proficiency >= 90) return 'from-emerald-500 to-teal-400'; // High proficiency
  //   if (proficiency >= 80) return 'from-blue-500 to-indigo-400'; // Good proficiency
  //   if (proficiency >= 70) return 'from-violet-500 to-purple-400'; // Medium proficiency
  //   return 'from-amber-500 to-orange-400'; // Lower proficiency
  // };

  return (
    <section
      id="skills"
      className="container mx-auto"
 
    >      
    <h1 className="text-[2.270em] leading-[40px] tracking-[-1.14px] sm:leading-[72px] sm:tracking-[-2.05px]  md:leading-extralarge md:tracking-tight font-bold">
       SKILLS & EXPERTISE
    </h1>

      <div
      data-aos="zoom-in-up"
            data-aos-duration="1500"
            rel="noopener noreferrer"
    
      className=" group grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {skillsData.map((category, index) => (
          <div key={index}>
            <h2 className="text-base lg:text-[24px] border-b border-gray-800 mb-5 leading-medium font-medium pt-5 pb-2 text-green transition-colors">
              {category.category}
            </h2>

            <div className="space-y-8">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-white font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-400">
                      {skill.years} {skill.years === 1 ? 'Year' : 'Years'}
                    </span>
                  </div>


              <div className="flex items-center w-full">
                    <div className="flex-1 mr-3 h-2 lg:h-2.5 rounded-full text-base overflow-hidden border border-gray-700 shadow-inner">
                      <div 
                        className="h-full bg-[#4EE1A0] rounded-full" 
                        style={{ width: `${skill.proficiency || 0}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-medium text-white">
                      {skill.proficiency || 0}%
                    </span>
                  </div>


                  <p className="text-sm text-gray">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-4 border border-gray-400 rounded-lg bg-gray-900/50" data-aos="fade-up" data-aos-duration="2000">
        <h3 className="text-xl lg:text-[24px] mb-4 text-white font-medium">Current Focus</h3>
        <p className="text-gray-50 text-sm">
          As a frontend developer, I specialize in creating high-performance, user-friendly websites using
          modern technologies like React, Next.js, and Tailwind CSS. My goal is to deliver exceptional user
          experiences while ensuring that the websites I build are fast, responsive, and easy to maintain.
       </p>
      </div>
    </section>
  );
};
export default Skills