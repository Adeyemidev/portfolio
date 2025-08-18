
'use client'

import { useEffect, useState } from 'react'
import { skillsData } from '../utils/data'
import useIntersectionObserver from '@/hook'
import ProgressBar from './ui/progress'
import { Code2, Layers, Database, Cloud, Globe, Smartphone } from 'lucide-react'

export default function Skills() {
  const [setRef, isVisible] = useIntersectionObserver();
  
  const getIconForCategory = (category: string): React.ElementType => {
    const icons: Record<string, React.ElementType> = {
      'Frontend Development': Globe,
      'Backend Development': Database,
      'Backend & Tools': Database,
      'Cloud & DevOps': Cloud,
      'Mobile Development': Smartphone,
      'Tools & Others': Layers
    };
    return icons[category] || Code2;
  };

  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      'Frontend Development': 'from-blue-500 to-cyan-500',
      'Backend Development': 'from-green-500 to-emerald-500',
      'Backend & Tools': 'from-green-500 to-emerald-500',
      'Cloud & DevOps': 'from-orange-500 to-red-500',
      'Mobile Development': 'from-purple-500 to-pink-500',
      'Tools & Others': 'from-yellow-500 to-amber-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  const getProficiencyLevel = (proficiency: number): string => {
    if (proficiency >= 90) return 'Expert';
    if (proficiency >= 75) return 'Advanced';
    if (proficiency >= 60) return 'Intermediate';
    return 'Beginner';
  };

  const getProficiencyColor = (proficiency: number): string => {
    if (proficiency >= 90) return 'text-green-400';
    if (proficiency >= 75) return 'text-blue-400';
    if (proficiency >= 60) return 'text-yellow-400';
    return 'text-gray-400';
  };

  return (
    
   <section id='about' className=" py-20 items -center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
     <div ref={setRef} className="max-w-5xl mx-auto pl-16">
       <div className={`mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
           
            <div className='block'>
            <Code2 className="w-4 h-4 text-white" opacity={0.5}/>
            <h2 className="text-4xl md:text-5xl font-medium ml-2" style={{opacity: "0.5"}}>
                About Me 
            </h2>
            <Code2 className="w-4 h-4 text-white" opacity={0.5}/>
          </div>

          {skillsData[0].about?.map((about)=>(
          <p className="text-gray-300 my-6 text-lg max-w-4xl leading-relaxed">

            {about}

          </p>))}
        </div>

        {/* Skills Section */}       
              
         <div className="text-3xl text-left font-medium text-white">
            {skillsData.map((cat, index) => (
             <div>
              <>             
                   <h2 className="text-4xl md:text-5xl font-medium" style={{opacity: "0.5"}}>
              {cat.category}            
            </h2>

           </> 
               <ul className='flex flex-wrap gap-3 lg:gap-6'>
                 {cat.skills && cat.skills.map((skill: { name: string }, i: number) => (
                   <p key={i}>• {skill.name}</p>
                 ))}
               </ul>
             </div>
            ))}
          </div>


           
        </div>

      </section>
      
  );
};