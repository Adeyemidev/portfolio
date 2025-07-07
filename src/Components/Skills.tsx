
// 'use client'

// import Image from 'next/image'
// import Aos from 'aos'
// import { useEffect, useState } from 'react'
// import 'aos/dist/aos.css'
// import net2 from '../../public/images/net2.png'
// import { skillsData } from '../utils/data'
// import { Progress } from './ui/progress'
// import useIntersectionObserver from '@/hook'
// import { Ref } from 'react-hook-form'
// import ProgressBar from './ui/progress'
// import { Code2 } from 'lucide-react'

// export default function Skills () {
//  const [setRef, isVisible] = useIntersectionObserver();
   
//   const techStack = [
//     { name: 'TypeScript', level: 'Expert', years: '5+', color: 'from-blue-400 to-blue-600' },
//     { name: 'React/Next.js', level: 'Expert', years: '6+', color: 'from-cyan-400 to-cyan-600' },
//     { name: 'Node.js/Express', level: 'Advanced', years: '4+', color: 'from-green-400 to-green-600' },
//     { name: 'GraphQL/Apollo', level: 'Expert', years: '3+', color: 'from-pink-400 to-pink-600' },
//     { name: 'AWS/Docker', level: 'Advanced', years: '3+', color: 'from-orange-400 to-orange-600' },
//     { name: 'Tailwind CSS', level: 'Expert', years: '4+', color: 'from-teal-400 to-teal-600' }
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1) , transp arent)] opacity- 50"></div>
      
//       <div ref={setRef} className="container mx-auto px-6 relative z-10">
//         <div id='about' className={`text-center mb-16 transform transition-all duration-1000 ${
//           isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//         }`}>
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//             About Me!
//           </h2>
//           <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
//             As a passionate developer, I specialize in creating high-performance,
//             user-friendly websites using modern technologies like React, Next.js, GO, PostgreSQL and Tailwind CSS.
//             My goal is to deliver exceptional user experiences while ensuring that the websites
//             I build are fast, responsive, and easy to maintain.
//           </p>
//         </div>

//         <div className="mb-16">
//           <h3 className="text-3xl font-bold text-center mb-12 text-white">SKILLS & EXPERTISE</h3>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             {skillsData.map((category, index) => (
//               <div key={index} className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 transform transition-all duration-1000 delay-${index * 200} ${
//                 isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//               }`}>
//                 <h4 className="text-2xl font-semibold mb-6 text-blue-400">{category.category}</h4>
                
//                 <div className="space-y-6">
//                   {category.skills.map((skill, skillIndex) => (
//                     <div key={skillIndex} className="space-y-3">
//                       <div className="flex justify-between items-center">
//                         <span className="text-white font-medium">{skill.name}</span>
//                         <span className="text-gray-400 text-sm">
//                           {skill.years} {skill.years === 1 ? 'Year' : 'Years'}
//                         </span>
//                       </div>
                      
//                       <ProgressBar percentage={skill.proficiency} isVisible={isVisible} />
                      
//                       <div className="flex justify-between items-center">
//                         <p className="text-gray-400 text-sm">{skill.description}</p>
//                         <span className="text-blue-400 font-semibold">{skill.proficiency}%</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

       
//       </div>
//     </section>

//     //       {/* Tech Stack */}
//       // <section className="py-20 px-6">
//       //   <div className="max-w-7xl mx-auto">
//       //     <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
//       //       Technology Expertise
//       //     </h2>
          
//       //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       //       {techStack.map((tech, index) => (
//       //         <div key={tech.name} className="p-6 rounded-xl backdrop-blur-sm bg-slate-800/30 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 transform hover:scale-105">
//       //           <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tech.color} mb-4 flex items-center justify-center`}>
//       //             <Code2 className="w-6 h-6 text-white" />
//       //           </div>
//       //           <h3 className="text-xl font-semibold mb-2 text-white">{tech.name}</h3>
//       //           <div className="flex justify-between items-center mb-3">
//       //             <span className="text-sm text-slate-400">{tech.years} experience</span>
//       //             <span className="px-2 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded text-xs font-medium text-green-400 border border-green-500/30">
//       //               {tech.level}
//       //             </span>
//       //           </div>
//       //           <div className="w-full bg-slate-700 rounded-full h-2">
//       //             <div className={`h-2 rounded-full bg-gradient-to-r ${tech.color} transition-all duration-1000`} style={{width: tech.level === 'Expert' ? '95%' : '85%'}}></div>
//       //           </div>
//       //         </div>
//       //       ))}
//       //     </div>
//       //   </div>
//       // </section>
//   );
// };
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
    <section id='about' className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div> */}
      
      <div ref={setRef} className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div  className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            As a passionate developer, I specialize in creating high-performance,
            user-friendly websites using modern technologies like React, Next.js, GO, PostgreSQL and Tailwind CSS.
            My goal is to deliver exceptional user experiences while ensuring that the websites
            I build are fast, responsive, and easy to maintain.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Expertise</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {skillsData.map((category, index) => {
              const IconComponent = getIconForCategory(category.category);
              const categoryColor = getCategoryColor(category.category);
              
              return (
                <div key={index} className={`group bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-800/60 transform transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${categoryColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-semibold text-white">{category.category}</h4>
                  </div>
                  
                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-3">
                        {/* Skill Header */}
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <span className="text-white font-medium text-lg">{skill.name}</span>
                           
                          </div>
                           <span className={`px-2 py-1 rounded-full text-xs font-medium ${getProficiencyColor(skill.proficiency)} bg-gray-700/50`}>
                              {getProficiencyLevel(skill.proficiency)}
                            </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="relative">
                          <ProgressBar percentage={skill.proficiency} isVisible={isVisible} />
                        </div>
                        
                        {/* Skill Description */}
                        <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      
      </div>
    </section>
  );
};