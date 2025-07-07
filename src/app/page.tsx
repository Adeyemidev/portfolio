"use client"

import NavBar from "@/Components/layout/nav";
import Header from "@/Components/Header";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";
import Contact from "@/Components/Contact";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Portfolio = () => {
  return (
    <div className="text-white "
    // bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent)] opacity-50"
  style={{backgroundColor:  'hsl(207, 26%, 17%)'}}
     >
      <NavBar />
      <Header />
      <Skills />
      <Projects />
      <ToastContainer />
      <Contact /> 
    </div>
  );
};

export default Portfolio;





















// import React, { useState, useEffect } from 'react';
// import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code2, Rocket, Zap, Globe, Database, Server } from 'lucide-react';

// const ExpertPortfolio = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const techStack = [
//     { name: 'TypeScript', level: 'Expert', years: '5+', color: 'from-blue-400 to-blue-600' },
//     { name: 'React/Next.js', level: 'Expert', years: '6+', color: 'from-cyan-400 to-cyan-600' },
//     { name: 'Node.js/Express', level: 'Advanced', years: '4+', color: 'from-green-400 to-green-600' },
//     { name: 'GraphQL/Apollo', level: 'Expert', years: '3+', color: 'from-pink-400 to-pink-600' },
//     { name: 'AWS/Docker', level: 'Advanced', years: '3+', color: 'from-orange-400 to-orange-600' },
//     { name: 'Tailwind CSS', level: 'Expert', years: '4+', color: 'from-teal-400 to-teal-600' }
//   ];

//   const projects = [
//     {
//       title: 'Enterprise SaaS Platform',
//       description: 'Built a scalable multi-tenant platform serving 50K+ users with micro-frontend architecture',
//       tech: ['Next.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'AWS'],
//       metrics: ['99.9% uptime', '2.1s load time', '50K+ users'],
//       gradient: 'from-purple-500 via-pink-500 to-red-500'
//     },
//     {
//       title: 'Real-time Trading Dashboard',
//       description: 'High-performance financial dashboard with WebSocket connections and complex data visualization',
//       tech: ['React', 'D3.js', 'WebSocket', 'Redis', 'Node.js'],
//       metrics: ['<100ms latency', '1M+ data points', '24/7 uptime'],
//       gradient: 'from-green-400 via-blue-500 to-purple-600'
//     },
//     {
//       title: 'AI-Powered Analytics Suite',
//       description: 'Machine learning insights platform with predictive analytics and automated reporting',
//       tech: ['Next.js', 'Python', 'TensorFlow', 'MongoDB', 'Docker'],
//       metrics: ['85% accuracy', '10x faster insights', 'Fortune 500 clients'],
//       gradient: 'from-orange-400 via-red-500 to-pink-500'
//     }
//   ];

//   return (
//     <div className="min-h-screen gradient-to-br from-slate-900 via- purple-900 to-slate-900 text-white overflow-hidden">
//       {/* Animated Background */}
//       <div className="fixed bg- black text-black inset-0 overflow-hidden pointer-events-none">
//        <div className="absolute inset-0 bg-gra dient-to-br from- purple-900/20 via-blue-900/10 to-slate-900/20"></div>
//         <div 
//           className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl transition-all duration-300 ease-out"
//           style={{
//             left: mousePosition.x - 192,
//             top: mousePosition.y - 192
//           }}
//         ></div> 
//       </div>

//       {/* Navigation */}
//       <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isLoaded ? 'translate-y-0' : '-translate-y-full'}`}>
//         <div className="backdrop-blur-md bg-slate-900/80 border-b border-slate-700/50">
//           <div className="max-w-7xl mx-auto px-6 py-4">
//             <div className="flex justify-between items-center">
//               <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//                 EasyCode
//               </div>
//               <div className="hidden md:flex space-x-8">
//                 {['Work', 'About', 'Contact'].map((item) => (
//                   <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-300 hover:text-white transition-colors relative group">
//                     {item}
//                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
//                   </a>
//                 ))}
//               </div>
//               <div className="flex space-x-4">
//                 <Github className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
//                 <Linkedin className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
//                 <Mail className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>


//       {/* Tech Stack */}
//       <section className="py-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
//             Technology Expertise
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {techStack.map((tech, index) => (
//               <div key={tech.name} className="p-6 rounded-xl backdrop-blur-sm bg-slate-800/30 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 transform hover:scale-105">
//                 <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tech.color} mb-4 flex items-center justify-center`}>
//                   <Code2 className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2 text-white">{tech.name}</h3>
//                 <div className="flex justify-between items-center mb-3">
//                   <span className="text-sm text-slate-400">{tech.years} experience</span>
//                   <span className="px-2 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded text-xs font-medium text-green-400 border border-green-500/30">
//                     {tech.level}
//                   </span>
//                 </div>
//                 <div className="w-full bg-slate-700 rounded-full h-2">
//                   <div className={`h-2 rounded-full bg-gradient-to-r ${tech.color} transition-all duration-1000`} style={{width: tech.level === 'Expert' ? '95%' : '85%'}}></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Projects */}
//       <section className="py-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
//             Featured Projects
//           </h2>
          
//           <div className="space-y-8">
//             {projects.map((project, index) => (
//               <div key={project.title} className="relative overflow-hidden rounded-2xl backdrop-blur-sm bg-slate-800/30 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 transform hover:scale-[1.02]">
//                 <div className="md:flex">
//                   <div className="md:w-1/2 p-6 md:p-8">
//                     <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
//                     <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                    
//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {project.tech.map((tech) => (
//                         <span key={tech} className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300 border border-slate-600/50">
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
                    
//                     <div className="grid grid-cols-3 gap-4 mb-6">
//                       {project.metrics.map((metric, idx) => (
//                         <div key={idx} className="text-center">
//                           <div className="text-lg font-bold text-cyan-400">{metric}</div>
//                         </div>
//                       ))}
//                     </div>
                    
//                     <div className="flex space-x-4">
//                       <button className="flex items-center space-x-2 px-4 py-2 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors text-white">
//                         <ExternalLink className="w-4 h-4" />
//                         <span>Live Demo</span>
//                       </button>
//                       <button className="flex items-center space-x-2 px-4 py-2 border border-slate-600 rounded-lg hover:border-slate-400 transition-colors text-slate-300">
//                         <Github className="w-4 h-4" />
//                         <span>Code</span>
//                       </button>
//                     </div>
//                   </div>
                  
//                   <div className="md:w-1/2 relative min-h-64">
//                     <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
//                     <div className="h-64 md:h-full flex items-center justify-center">
//                       <div className="text-6xl md:text-8xl opacity-20 text-white">
//                         {index === 0 ? <Server /> : index === 1 ? <Database /> : <Zap />}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact CTA */}
//       <section className="py-20 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Build Something Amazing?</h2>
//           <p className="text-lg md:text-xl text-slate-300 mb-8">
//             Let's discuss how I can help architect your next breakthrough product.
//           </p>
//           <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 text-white">
//             Start a Conversation
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ExpertPortfolio;