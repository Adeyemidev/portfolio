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
    title: "",
    items: []
  },
  close: {
    semi: ""
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