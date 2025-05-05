
'use client'

import Image from 'next/image'
import Aos from 'aos'
import { useEffect, useState } from 'react'
import 'aos/dist/aos.css'
import net2 from '../../public/images/net2.png'
import { skillsData } from './utils/data'
import { Progress } from './ui/progress'


interface Skill {
  name: string
  experience: string
}


const Skills = (): JSX.Element => {
  useEffect(() => {
    Aos.init();
  }, []);
  
  const [progressValues, setProgressValues] = useState<{ [key: string]: number }>({});
  
  // useEffect(() => {
  //   const newProgressValues: { [key: string]: number } = {};
  //   const timer = setTimeout(() => {
  //     const values = {};
      
  //     skillsData.forEach(category => {
  //       category.skills.forEach(skill => {
  //         // Calculate proficiency - you can adjust this formula
  //         // This example converts years to percentage (max 5 years = 100%)
  //         // Or use explicit proficiency values if available in your data
  //         values[skill.name] = skill.proficiency || Math.min(skill.years * 20, 100);
  //       });
  //     });
      
  //     setProgressValues(values);
  //   }, 500);
    
  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <section
      id="skills"
      className="container mx-auto py-20"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <h1 className="text-[40px] mb-10 leading-[40px] tracking-[-1.14px] sm:text-[72px] sm:leading-[72px] sm:tracking-[-2.05px] md:text-extralarge md:leading-extralarge md:tracking-tight font-bold">
        SKILLS & EXPERTISE
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {skillsData.map((category, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-[24px] border-b border-gray-800 mb-5 leading-medium font-medium pt-5 pb-2 group-hover:text-green transition-colors">
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
                    <div className="flex-1 mr-3 rounded-full bg-[rgba(255, 255, 255, 0.1)]  border"  >
                      <Progress 
                        value={skill.proficiency || 0}
                        className="h-2 w-full" 
                      />
                    </div>
                    <span className="text-sm text-gray-400">
                    {skill.proficiency || 0}
                    </span>
                  </div>



                  <p className="text-sm text-gray">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-6 border border-gray-400 rounded-lg bg-gray-900/50" data-aos="fade-up" data-aos-duration="2000">
        <h3 className="text-xl mb-4 text-white font-medium">Current Focus</h3>
        <p className="text-gray-400">
          I'm currently expanding my expertise in headless WordPress with Next.js, modern frontend technologies,
          and performance optimization techniques to build faster, more engaging websites for my clients.
        </p>
      </div>
    </section>
  );
};
export default Skills

