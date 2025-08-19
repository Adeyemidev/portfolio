
'use client'

import { skillsData } from '../utils/data'
import useIntersectionObserver from '@/hook'
import { Code2} from 'lucide-react'

export default function Skills() {
  const [setRef, isVisible] = useIntersectionObserver();

  return (
    
   <section id='about' className="container py-20 relative overflow-hidden">
     <div ref={setRef} className="max-w-5xl mx-auto lg:pl-16">
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
              
         <div className="text-center text-3xl text-left font-medium text-white">
            {skillsData.map((cat, index) => (
             <div>
              <>             
                   <h2 className="text-4xl mb-6 md:text-5xl font-medium" style={{opacity: "0.5"}}>
              {cat.category}            
            </h2>

           </> 
               <ul className='grid grid-cols-3 gap-3 lg:gap-6'>
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