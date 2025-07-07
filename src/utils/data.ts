interface HeaderData {
  headline: string;
  service: string[];
  paragraphs: string[];
  // services: {
  //   title: string;
  //   items: string[];
  // };
  close: {
    semi: string;
    // closing: string;
  };
}

interface Skill {
  name: string;
  proficiency: number;
  years: number;
  description: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}





// Mock data
export const headerData: HeaderData = {
  paragraphs: [
    "Nice to meet you! I'm Adeyemi Moses.",
    "Based in Nigeria, I'm a front-end developer passionate about building accessible web apps that users love."
  ],
  headline: "",
  service: [],
  close: {
    semi: ""
  }
};

export const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React / Next.js", proficiency: 90, description: "Building interactive web applications" },
      { name: "TypeScript", proficiency: 80, description: "Static type checking and code reliability" },
      { name: "CSS / Tailwind CSS / shadcn/ui", proficiency: 95, description: "Modern styling and component libraries" }
    ]
  },
  {
    category: "Backend & Tools",
    skills: [
      { name: "Node.js / Express", proficiency: 75, description: "Building scalable backend applications" },
      { name: "Go / PostgreSQL", proficiency: 85, description: "High-performance backend services" }
    ]
  }
];

export const projects = [
  {
    id: 'crowdlaunch',
    title: 'CROWDLAUNCH',
    image: '/images/CROWDFUND.png',
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

// export const headerData: HeaderData = {
//   headline: "Front-End Developer.",
//   paragraphs: [
//     "I craft exceptional digital experiences with modern technologies, transforming ideas into fast, responsive, and beautiful websites."
//   ],
//   services: {
//     title: "",
//     items: []
//   },
//   close: {
//     semi: ""
//   }
// };

// export const skillsData = [
//   {
//     category: "Frontend (From Scratch)",
//     skills: [
//       {
//         name: "HTML5",
//         years: 3,
//         proficiency: 90,
//         description: "Semantic markup, accessibility, SEO best practices"
//       },
//       {
//         name: "CSS3",
//         years: 3,
//         proficiency: 85,
//         description: "Animations, CSS Grid, Flexbox, responsive design"
//       },
//       {
//         name: "JavaScript",
//         years: 4,
//         proficiency: 88,
//         description: "ES6+, DOM manipulation, async/await, fetch API"
//       }
//     ]
//   },
//   {
//     category: "WordPress",
//     skills: [
//       {
//         name: "Theme Development",
//         years: 4,
//         proficiency: 92,
//         description: "Custom themes, child themes, template hierarchy"
//       },
//       {
//         name: "Plugin Development",
//         years: 3,
//         proficiency: 81,
//         description: "Custom functionality, hooks, filters, WordPress API"
//       },
//       {
//         name: "WooCommerce",
//         years: 2,
//         proficiency: 72,
//         description: "Store setup, payment gateways, custom product types"
//       }
//     ]
//   }
// ];