interface HeaderData {
  paragraphs: string[];
  
}

interface Skill {
  name: string;
  description: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}





// Mock data
export const headerData: HeaderData = {
  paragraphs: [
    "I build user-centered frontend websites and web apps with a strong focus on creating visually appealing and highly functional user interfaces using modern JavaScript framework such as ReactJS, NextJS. I program this websites using JavaScript/Typescript with dedicated approach to Test-Driven Development (TDD). ",
    "Additionally, I have extensive knowledge in 3D visualization using WebGL and ThreeJS, as well as web VR/AR implementation."
  ],
};

export const skillsData = [

  { 
about: [
  "I genuinely care about performance optimization and user experience. There's something satisfying about shaving seconds off load times or seeing conversion rates improve because the interface just makes sense.",
  "I love working with startups and growing companies because you get to see the direct impact of good frontend work on business growth. Whether it's an e-commerce site, SaaS platform, or fintech application, I focus on building interfaces that users actually enjoy using.",
  "Always up for interesting frontend challenges, especially if they involve modern JavaScript frameworks or creative UI/UX solutions."
]},

  {
    category: "MY GO-TO TECH STACK:",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Redux" },
      { name: "Three.js" },
      { name: "Node.js" },
      { name: "GraphQL" },
      { name: "MongoDB" }
    
  ]
  },

];

export const projects = [
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
    link: 'https://mummyserena.netlify.app/',
    tags: ['REACTJS', 'Styled Component', 'TailwindCSS','EXPRESSJS']
  },
  {
    id: 'kovio',
    title: 'KOVIO',
    image: '/images/kovio.png',
    link: 'https://kovio-fe.vercel.app/',
    tags: ['TYPESCRIPT', 'NEXTJS', 'TAILWINDCSS']
  },
  {
    id: 'audiophile',
    title: 'AUDIOPHILE',
    image: '/images/audiophile.png',
    link: 'https://audiophilic.vercel.app/',
    tags: ['JAVASCRIPT', 'TAILWINDCSS', 'REACT']
  },
  {
    id: 'countries',
    title: 'REST COUNTRIES API',
    image: '/images/RestApi.png',
    link: 'https://countries-apis-adeyemi.netlify.app/',
    tags: ['JAVASCRIPT', 'REACT', 'CSS']
  },
  {
    id: 'designo',
    title: 'DESIGNO',
    image: '/images/Designo.png',
    link: 'https://designo-ade.netlify.app/',
    tags: ['REACT', 'CSS', 'JAVASCRIPT']
  }
];

