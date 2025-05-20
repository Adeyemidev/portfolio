'use client'

import Image from 'next/image'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

interface Project {
  id: string
  title: string
  image: string
  link: string
  tags: string[]
}

const projects: Project[] = [
  {
    id: 'crowdlaunch',
    title: 'CROWDLAUNCH',
    image: '/images/crowdfund.png',
    link: 'https://crowdlaunch.vercel.app/',
    tags: ['TYPESCRIPT', 'REACT', 'TAILWINDCSS']
  },
  {
    id: 'gcms',
    title: 'GCMS Website',
    image: '/images/GCMS.png',
    link: '/',
    tags: ['REACTJS', 'TAILWINDCSS', 'EXPRESSJS']
  },
  {
    id: 'cryptix',
    title: 'CRYPTIX',
    image: '/images/cryptix.png',
    link: 'https://www.cryptixnft.io/',
    tags: ['SVELTEJS', 'NEXTJS', 'SMART CONTRACT']
  },
  {
    id: 'countries',
    title: 'REST COUNTRIES API',
    image: '/images/RestApi.png',
    link: 'https://countries-apis-adeyemi.netlify.app/',
    tags: ['JAVASCRIPT', 'REACT', 'CSS']
  },
  {
    id: 'audiophile',
    title: 'AUDIOPHILE',
    image: '/images/audiophile.png',
    link: 'https://audiophilic.vercel.app/',
    tags: ['JAVASCRIPT', 'TAILWINDCSS', 'REACT']
  },
  {
    id: 'designo',
    title: 'DESIGNO',
    image: '/images/Designo.png',
    link: 'https://designo-ade.netlify.app/',
    tags: ['REACT', 'CSS', 'JAVASCRIPT']
  },
  {
    id: 'sunnyside',
    title: 'SUNNY-SIDE',
    image: '/images/sunnyside.png',
    link: 'https://adeyemi-sunny-side.netlify.app/',
    tags: ['HTML', 'CSS', 'JAVASCRIPT']
  }
]

const Projects = (): JSX.Element => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <section id="Projects" className='container mx-auto'>
      <div className="flex justify-between mb-6 items-center">
        <h1 className="text-[2.270em] leading-[40px] tracking-[-1.14px] sm:leading-[72px] sm:tracking-[-2.05px] md:leading-extralarge font-bold">
          Projects
        </h1>
        <h4 className="font-bold text-smallest leading-[26px] md:leading-normal tracking-[2.29px] sendMessage">
          <a 
            href="mailto:easycode.techdev@gmail.com"
            className="hover:text-green transition-colors"
          >
            CONTACT ME
          </a>
        </h4>
      </div>

      <div className="grid sm:grid-cols-2 gap-y-10 gap-10 pb-28">
        {projects.map((project) => (
          <a
            key={project.id}
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div>
              <div className="relative w-full rounded-lg h-[200px] lg:h-[300px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-xl lg:text-[24px] leading-medium font-medium pt-5 pb-2 group-hover:text-green transition-colors">
                {project.title}
              </p>
              <menu className="flex gap-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-gray text-base group-hover:text-white transition-colors">
                    {tag}
                  </span>
                ))}
              </menu>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects 