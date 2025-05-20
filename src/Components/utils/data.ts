interface HeaderData {
  headline: string;
  paragraphs: string[];
  services: {
    title: string;
    items: string[];
  };
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

export const headerData: HeaderData = {
  headline: "Hi, I'M ADEYEMI, A FRONTEND DEVELOPER.",
  paragraphs: [
    "If you're here, there's a chance you need great hands on your projects or someone who can help bring your idea to life flawlessly"
    ],
  services: {
    title: "Working with me gets you:",
    items: [
      "A conversion-focused website that turns visitors into leads",
      "Strategic design that highlights your unique value proposition",
      "Technical excellence that makes your site lightning-fast and mobile-perfect",
      "A developer who understands both code AND marketing strategy"
    ]
  },
  close: {
    semi: "I'm not just a frontend developer who knows React, NextJS, and Tailwind—I'm a business partner who helps creative professionals achieve tangible results.",
  }
};

export const skillsData = [
  {
    category: "Frontend (From Scratch)",
    skills: [
      {
        name: "HTML5",
        years: 3,
        proficiency: 90,
        description: "Semantic markup, accessibility, SEO best practices"
      },
      {
        name: "CSS3",
        years: 3,
        proficiency: 85,
        description: "Animations, CSS Grid, Flexbox, responsive design"
      },
      {
        name: "JavaScript",
        years: 4,
        proficiency: 88,
        description: "ES6+, DOM manipulation, async/await, fetch API"
      }
    ]
  },
  {
    category: "WordPress",
    skills: [
      {
        name: "Theme Development",
        years: 4,
        proficiency: 92,
        description: "Custom themes, child themes, template hierarchy"
      },
      {
        name: "Plugin Development",
        years: 3,
        proficiency: 81,
        description: "Custom functionality, hooks, filters, WordPress API"
      },
      {
        name: "WooCommerce",
        years: 2,
        proficiency: 72,
        description: "Store setup, payment gateways, custom product types"
      }
    ]
  }
];