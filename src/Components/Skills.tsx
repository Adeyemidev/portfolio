
'use client'

import { skillsData } from '../utils/data'
import useIntersectionObserver from '@/hook'
import { Code2 } from 'lucide-react'

export default function Skills() {
  const [setRef, isVisible] = useIntersectionObserver()

  return (
    <section id="about" className=" py-20 relative overflow-hidden">
      <div
        ref={setRef}
        className="max-w- 5xl mx- auto px-6 md:px-0 "
      >
        {/* ABOUT SECTION */}
        <div
          className={`mb-16 transform transition-all duration-1000 lg:pl-[10rem] ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex items-center gap-2 mb-6">
            <Code2 className="w-4 h-4 text-white opacity-50" />
            <h2 className="text-white font-semibold italic text-lg">
              ABOUT ME
            </h2>
            <Code2 className="w-4 h-4 text-white opacity-50" />
          </div>


        <div className='text-gray-300 text-sm max-w-4xl leading-relaxed'>
          <p className='my-4'>I work with SaaS founders and startup teams to fix slow, conversion-killing frontends and replace them with fast, intuitive interfaces users actually enjoy.
         </p>

         <p className='my-4'>My work has helped:</p>

          <ol>
            <ol>~ Improve conversions through UX and performance optimization</ol>
             <ol> ~ Improve conversions through UX and performance optimization</ol>
            <ol> ~ Build real-time platforms handuling thousands of users</ol>
          </ol>

          <p className='my-4'>I specialize in frontend development for SaaS and e-commerce platforms, focusing on clean, maintainable code that directly impacts business growth.
          </p>
            
            <p className='my-4'>I enjoy working with startups and growing companies because you get to see the real, measurable impact of good frontend engineering.
            </p>
        </div>
         
        </div>


        {/* SKILLS SECTION */}
        <div className="text-left mx-auto text-center text-white">
          {skillsData.map((category, index) => (
            <div key={index} className="my-8">
              <h3 className="text-4xl md:text-5xl font-semibold italic mb-6 ">
                {category.category}
              </h3>

              <ul className='grid  grid-cols-2 space-y-20 place-items-center sp'>
                {category.skills.map((skill, i) => (
                  <li key={i}>
                    <p className="font-semibold text-lg">
                      {skill.name}
                    </p>
                    <p className="text-gray-300 font-normal text-center text-sm">
                      {skill.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
