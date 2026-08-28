export interface Project {
  id: string;
  title: string;
  category: 'Enterprise SaaS' | 'Frontend' | 'Others';
  description: string;
  outcome: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface AiAssistantTool {
  name: string;
  provider: string;
  iconKey: string;
  capabilities: string[];
  summary: string;
}

export interface SkillItem {
  name: string;
  iconKey: string;
  category: 'Frontend' | 'UI & Libraries' | 'Backend & API' | 'Tools';
}

export interface DeveloperProfile {
  name: string;
  title: string;
  role: string;
  company: string;
  product: string;
  bio: string;
  location: string;
  status: string;
  resumeUrl: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  highlights: {
    label: string;
    value: string;
  }[];
}

export const developerProfile: DeveloperProfile = {
  name: "Munawar Ali Mangat",
  title: "Angular Frontend Developer",
  role: "Frontend Developer",
  company: "Enterprise SaaS",
  product: "Embase Prosuit",
  bio: "Frontend Developer specializing in Angular, TypeScript, RxJS, and Angular Material for building high-performance enterprise SaaS applications, complex multi-step workflows, and REST API integrations, alongside practical MERN stack experience.",
  location: "India",
  status: "Available for new opportunities",
  resumeUrl: "/Munawar_Ali_Resume.pdf",
  socials: {
    github: "https://github.com/munawaralimangat",
    linkedin: "https://linkedin.com/in/munawar-ali-mangat",
    email: "munawaralimangat@gmail.com",
  },
  highlights: [
    { label: "Core Role", value: "Angular Developer" },
    { label: "Specialization", value: "Enterprise SaaS" },
    { label: "State & UI", value: "RxJS & Material" },
    { label: "Secondary Stack", value: "MERN Stack" },
  ]
};

export const coreTechList: SkillItem[] = [
  // Frontend
  { name: "Angular", iconKey: "angular", category: "Frontend" },
  { name: "React", iconKey: "react", category: "Frontend" },
  { name: "TypeScript", iconKey: "typescript", category: "Frontend" },
  { name: "JavaScript", iconKey: "javascript", category: "Frontend" },
  { name: "Tailwind CSS", iconKey: "tailwindcss", category: "Frontend" },
  { name: "HTML5", iconKey: "html5", category: "Frontend" },
  { name: "CSS3", iconKey: "css3", category: "Frontend" },

  // UI / Libraries & State
  { name: "Redux Toolkit", iconKey: "reduxtoolkit", category: "UI & Libraries" },
  { name: "RxJS", iconKey: "rxjs", category: "UI & Libraries" },
  { name: "Angular Material", iconKey: "angularmaterial", category: "UI & Libraries" },
  { name: "ApexCharts", iconKey: "apexcharts", category: "UI & Libraries" },

  // Backend / Database / API
  { name: "Node.js", iconKey: "nodejs", category: "Backend & API" },
  { name: "MongoDB", iconKey: "mongodb", category: "Backend & API" },
  { name: "Express.js", iconKey: "express", category: "Backend & API" },
  { name: "REST APIs", iconKey: "restapis", category: "Backend & API" },

  // Tools & Platforms
  { name: "Git", iconKey: "git", category: "Tools" },
  { name: "GitHub", iconKey: "github", category: "Tools" },
  { name: "Postman", iconKey: "postman", category: "Tools" },
  //  { name: "VS Code", iconKey: "vscode", category: "Tools" },
  // { name: "Vite", iconKey: "vite", category: "Tools" },
  { name: "npm", iconKey: "npm", category: "Tools" },
  // { name: "Netlify", iconKey: "netlify", category: "Tools" },
];

export const aiAssistedTools: AiAssistantTool[] = [
  {
    name: "Claude Code",
    provider: "Anthropic",
    iconKey: "claude",
    capabilities: ["Coding & Refactoring", "Debugging", "Codebase Analysis"],
    summary: "Utilized for complex codebase navigation, multi-file architectural refactoring, and troubleshooting Angular & TypeScript logic."
  },
  {
    name: "OpenAI Codex",
    provider: "OpenAI",
    iconKey: "openai",
    capabilities: ["Feature Implementation", "Debugging", "Code Analysis"],
    summary: "Employed for rapid component scaffolding, API response parsing logic, and drafting robust test validation patterns."
  },
  {
    name: "Google Gemini",
    provider: "Google",
    iconKey: "gemini",
    capabilities: ["Technical Research", "Problem Solving", "Code Assistance"],
    summary: "Used for in-depth framework documentation research, algorithmic problem solving, and optimizing data transformations."
  }
];

export const projectsData: Project[] = [
  {
    id: "embase-examination-workflow",
    title: "Embase Prosuit — Examination & Academic Workflow",
    category: "Enterprise SaaS",
    description: "Developed and maintained core academic and examination modules for a college management SaaS platform. Implemented multi-step workflows with draft persistence, validation, status-based navigation, examination applications, and revaluation handling.",
    outcome: "Built reactive forms with robust HttpClient API integrations, error boundaries, loading states, and strongly typed TypeScript models.",
    tags: ["Angular", "TypeScript", "RxJS", "Angular Material", "Tailwind CSS", "REST APIs"],
    featured: true
  },
  {
    id: "embase-finance-hostel",
    title: "Embase Prosuit — Finance, Fee & Hostel Operations",
    category: "Enterprise SaaS",
    description: "Built financial input interfaces, fee management workflows, and hostel mess calculation engines. Implemented advanced data tables featuring dynamic search, filtering, sorting, pagination, bulk actions, and print-optimized structured reports.",
    outcome: "Streamlined operational data entry and reporting for administrative staff with robust asynchronous data handling via RxJS.",
    tags: ["Angular", "TypeScript", "RxJS", "REST APIs", "Tailwind CSS", "Angular Material"],
    featured: true
  },
  {
    id: "embase-analytics-portal",
    title: "Embase Prosuit — Administrative Portal & Analytics",
    category: "Enterprise SaaS",
    description: "Engineered administrative dashboard features integrating ApexCharts for visual metrics reporting, reusable dialog components, and modular state management across large enterprise SaaS modules.",
    outcome: "Resolved template type-checking, runtime issues, and Git merge conflicts across multi-developer release branches.",
    tags: ["Angular", "TypeScript", "ApexCharts", "RxJS", "Angular Material", "Git"],
    featured: true
  },
  {
    id: "bicyclerepublic-ecommerce",
    title: "BicycleRepublic — E-Commerce Web App",
    category: "Others",
    description: "Developed a comprehensive e-commerce website specializing in bicycles. Implemented both admin and client sides using Node.js, Express, MongoDB, and JWT authentication with search/filtering capabilities.",
    outcome: "Built secure JWT authentication, MongoDB product catalog and inventory management, dynamic price/category filtering, and responsive Tailwind UI.",
    tags: ["Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JavaScript", "REST APIs"],
    githubUrl: "https://github.com/munawaralimangat",
    featured: true
  },
  {
    id: "asocialhub-social-platform",
    title: "ASocialHub — Backend Social API Services",
    category: "Others",
    description: "Architected and developed the backend REST API services for a social networking platform. Built JWT-secured user authentication, post creation and interaction endpoints, and optimized MongoDB schema models.",
    outcome: "Implemented secure JWT authentication & authorization, scalable RESTful API controllers, robust middleware pipelines, and MongoDB database indexing.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    githubUrl: "https://github.com/munawaralimangat",
    featured: true
  }
];
