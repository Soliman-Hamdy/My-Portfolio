export const skills = [
  {
    category: "Languages",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React.js", "Next.js", "Vite", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Chrome DevTools"],
  },
  {
    category: "Core Concepts",
    items: [
      "Responsive Design",
      "Component Architecture",
      "DOM Manipulation",
      "REST APIs",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  image?: string; // صورة من public/projects/
  live?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "FreshCart Online Store",
    description:
      "Multi-page e-commerce storefront with catalog, category filtering, product details, cart, wishlist, and full authentication flows, powered by a REST API.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/freshcart.png",
    live: "https://e-commerce-bice-three-17.vercel.app/",
    github: "https://github.com/Soliman-Hamdy/E-Commerce",
  },
  {
    title: "Social Media Platform",
    description:
      "Full-stack social platform where users create posts, like, comment, and chat in real time, built on a custom React front end and Node.js REST API.",
    tech: ["React", "Vite", "JavaScript", "Node.js"],
    image: "/projects/social-app.png",
    live: "https://social-app-alpha-five.vercel.app/home",
    github: "https://github.com/Soliman-Hamdy/Social-App",
  },
  {
    title: "The Lens of the Photography World",
    description:
      "Content platform for photography enthusiasts that pairs educational tips with a live, API-fed image feed. Fully responsive across mobile and desktop.",
    tech: ["React", "Vite", "JavaScript"],
    image: "/projects/lens.png",
    live: "https://the-lens-of-the-photography-world.vercel.app/",
    github:
      "https://github.com/Soliman-Hamdy/The-lens-of-the-photography-world",
  },
  {
    title: "Wanderlust — Global Travel Planner",
    description:
      "Decision-support tool that helps travelers narrow down destinations by country and category, with live weather data and instant real-time filtering.",
    tech: ["Bootstrap", "JavaScript"],
    image: "/projects/wanderlust.png",
    live: "https://wanderlust-your-global-travel-plann-ten.vercel.app/",
    github:
      "https://github.com/Soliman-Hamdy/Wanderlust-Your-Global-Travel-Planner",
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  details: string;
  highlights?: string[];
  tags?: string[];
};

export const education: EducationItem[] = [
  {
    degree: "Front-End Development Bootcamp",
    school: "Route Academy",
    period: "Feb 2026 – Aug 2026",
    details:
      "An intensive, project-based program focused on building modern, production-ready web applications from the ground up.",
    highlights: [
      "Built responsive, cross-browser interfaces with semantic HTML5 and modern CSS3.",
      "Mastered JavaScript (ES6+) fundamentals: DOM manipulation, async code, and working with REST APIs.",
      "Developed component-based apps with React and Next.js, using TypeScript for safer, more maintainable code.",
      "Styled fast, consistent UIs with Tailwind CSS and Bootstrap.",
      "Worked with Git and GitHub for version control, branching, and collaboration.",
    ],
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Git",
    ],
  },
  {
    degree: "B.Sc. Business",
    school: "Alexandria University, Faculty of Business (English Section)",
    period: "Graduated 2024",
    details:
      "A business degree taught in English that built my analytical thinking, communication, and an understanding of users, goals, and results.",
    highlights: [
      "Studied in an English-taught program, which strengthened my technical English and communication.",
      "Learned to approach problems from the user's and the business's point of view, which shapes how I design interfaces.",
    ],
    tags: ["Business", "Communication", "Problem Solving"],
  },
];

export const contact = {
  location: "Alexandria, Egypt",
  phone: "01150368270",
  email: "soliman.hamdy3003@gmail.com",
  linkedin: "https://www.linkedin.com/in/soliman-hamdy-3b3a97210",
  github: "https://github.com/Soliman-Hamdy",
};
export const about = {
  headline: "I turn ideas into fast, clean, and friendly interfaces.",
  paragraphs: [
    "I'm a front-end developer who loves the moment a blank screen turns into something people actually enjoy using. I build with React, Next.js, TypeScript, and Tailwind CSS, and I care just as much about how an interface feels as how it's built.",
    "I've built 10+ projects, from a full e-commerce store to a real-time social platform, a photography content hub, and a travel planner powered by live APIs. Each one taught me something new about structure, performance, and user experience.",
    "I'm detail-oriented, a strong communicator, and always curious about the next thing to learn. I like clean code, pixel-level polish, and work that actually helps people.",
  ],
  stats: [
    { value: "10+", label: "Projects built" },
    { value: "React", label: "Main stack" },
    { value: "Next.js", label: "Main stack" },
  ],
  highlights: [
    {
      icon: "layers",
      title: "Component Architecture",
      text: "Reusable, maintainable React and Next.js components.",
    },
    {
      icon: "smartphone",
      title: "Responsive Design",
      text: "Cross-browser interfaces that work on mobile and desktop.",
    },
    {
      icon: "plug",
      title: "REST API Integration",
      text: "Authentication, data fetching, and real-time features.",
    },
    {
      icon: "git",
      title: "Git Workflows",
      text: "Clean version control with Git and GitHub.",
    },
  ],
};
