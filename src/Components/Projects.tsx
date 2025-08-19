'use client'
import useIntersectionObserver from '@/hook'
import { BsArrowRight } from 'react-icons/bs'
import { projects } from '../utils/data'


import React from 'react';
export default function Projects(){
  const [setRef, isVisible]= useIntersectionObserver();

  return (
    <section id='projects' className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 "></div>
      
      <div ref={setRef} className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          <p className=" text-white py-3 rounded-full font-semibold transition-all duration-300 transform ">
            PROJECTS
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className={`group backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10  transition-all duration-500 transform hover:scale-105  ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 text-white rounded-full text-xs font-medium transition-colors" style={{border: "1px solid", opacity:'0.7', borderColor: "oklch(27.9% 0.041 260.031)"}}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-medium transition-colors group-hover:translate-x-2 transform duration-300"
                >
                  View Project <BsArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
