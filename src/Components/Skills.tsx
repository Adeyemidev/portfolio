
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
                <div key={index} className={`group bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-white/20  transition-all hover:shadow-2xl delay-${index * 100} ${
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