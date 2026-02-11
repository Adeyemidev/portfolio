
/* =======================
   TYPES
======================= */

interface HeaderData {
  paragraphs: string[];
}

interface AboutData {
  paragraphs: string[];
  highlights: string[];
}

interface Skill {
  name: string;
  description: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

interface Project {
  id: string;
  title: string;
  image: string;
  link: string;
  tags: string[];
}

/* =======================
   HEADER
======================= */

export const headerData: HeaderData = {
  paragraphs: [
    "Frontend developer helping SaaS startups build fast, AI-integrated web apps that convert users into customers.",
    "Over 4+ years, I’ve worked with startups globally to improve performance, UX, and frontend systems that directly impact growth, retention, and revenue.",
  ],
};

/* =======================
   ABOUT
======================= */

export const aboutData = {
  paragraphs: [
    "I work with SaaS founders and startup teams to fix slow, conversion-killing frontends and replace them with fast, intuitive interfaces users actually enjoy.",
  "My work has helped:",
  " ~ Reduce page load times by up to 25%",
  "~ Improve conversions through UX and performance optimization",
  "~ Build real-time platforms handling thousands of users",

  "I specialize in frontend development for SaaS and e-commerce platforms, focusing on clean, maintainable code that directly impacts business growth.",
  "I enjoy working with startups and growing companies because you get to see the real, measurable impact of good frontend engineering."
  ]
};

/* =======================
   SKILLS
======================= */

export const skillsData: SkillCategory[] = [
  {
    category: "TECH STACK",
    skills: [
      {
        name: "React & Next.js ",
        description: "high-performance, scalable SaaS frontend",
      },
      {
        name: "TypeScript",
        description: "predictable, maintainable codebases",
      },
      {
        name: "Tailwind CSS",
        description: 'fast, consistent UI development',
      },
      {
        name: "AI Integrations",
        description: "smarter user experiences and workflow automation",
      },
    ],
  },
];

/* =======================
   PROJECTS
======================= */

export const projects = [
  {
    id: 'SwiftPass',
    title: 'SwiftPass Website',
    image: '/images/swiftpass.png',
    link: 'https://swift-pass-customer-web.vercel.app',
    tags: ['NEXTJS', 'TYPESCRIPT', 'SHADCN + TAILWINDCSS']
  },
  // {
  //   id: 'kovio',
  //   title: 'Kovio Event Marketplace',
  //   image: '/images/kovio.png',
  //   link: 'https://kovio-fe.vercel.app',
  //   tags: ['TYPESCRIPT', 'NEXTJS', 'TAILWINDCSS']
  // },
  {
    id: 'gcms',
    title: 'GCMS Website',
    image: '/images/GCMS.png',
    link: 'https://mummyserena.netlify.app/',
    tags: ['REACTJS', 'Styled Component', 'TailwindCSS','EXPRESSJS']
  },
  {
    id: 'crowdlaunch',
    title: 'CROWDLAUNCH',
    image: '/images/crowdfund.png',
    link: 'https://crowdlaunch.vercel.app/',
    tags: ['TYPESCRIPT', 'REACT', 'TAILWINDCSS']
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