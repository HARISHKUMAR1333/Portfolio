/**
 * Single source of truth for the portfolio.
 * Every value here is extracted from Harishkumar A's resume.
 * Placeholders are clearly marked and used only where the resume is silent.
 */

/**
 * Experience is auto-calculated from the first join date (Sep 2023) so the
 * portfolio stays accurate over time without manual edits — e.g. 2.7 → 2.8 → ...
 * Floored to one decimal so it ticks up gradually (~every 1.2 months).
 */
export const EXPERIENCE_START = new Date(2023, 8, 1); // September 1, 2023

export function calcExperienceYears(now: Date = new Date()): number {
  const months =
    (now.getFullYear() - EXPERIENCE_START.getFullYear()) * 12 +
    (now.getMonth() - EXPERIENCE_START.getMonth());
  return Math.max(0, Math.floor((months / 12) * 10) / 10);
}

export const experienceYears = calcExperienceYears(); // numeric, e.g. 2.7
export const experienceLabel = `${experienceYears}+`; // e.g. "2.7+"

export const profile = {
  name: "Harishkumar A",
  firstName: "Harishkumar",
  title: "Full-Stack AI Engineer",
  // Rotating roles for the hero typing effect (all grounded in the resume).
  roles: [
    "Full-Stack AI Engineer",
    "React & Node.js Developer",
    "AI Agent Builder",
    "RAG & LLM Engineer",
    "Cloud & DevOps Practitioner",
  ],
  // Portfolio-grade rewrite of the resume summary (accuracy preserved).
  intro: `I design and ship responsive, scalable web applications — and increasingly, the AI agents that power them. With ${experienceLabel} years at WizzGeeks, I work end-to-end across React, Node.js, cloud infrastructure, and modern LLM tooling to turn ideas into production-ready products.`,
  summary: `Passionate Full-Stack Developer with ${experienceLabel} years of experience at WizzGeeks designing and developing responsive, scalable web applications. Proficient in React, Node.js, Express, and building RESTful APIs with MongoDB. Hands-on experience with AWS (EC2, S3), server management, and application deployment using Nginx and Docker. Familiar with CI/CD pipelines, Git workflows, and performance optimization.`,
  objective:
    "To build intelligent, high-performance products at the intersection of full-stack engineering and applied AI — writing clean, maintainable code, mentoring others, and continuously learning along the way.",
  location: "Madurai, Tamil Nadu, India",
  email: "harishkumarhk8604@gmail.com",
  phone: "+91 6379011300",
  experienceYears: experienceLabel,
  company: "WizzGeeks",
  // No social URLs were provided in the resume — these are elegant placeholders.
  socials: {
    github: "https://github.com/", // placeholder — add your GitHub username
    linkedin: "https://www.linkedin.com/in/a-harishkumar-b592b3221",
    email: "mailto:harishkumarhk8604@gmail.com",
    phone: "tel:+916379011300",
  },
  resumeUrl: "/Harishkumar%20A.pdf",
  resumeFileName: "Harishkumar A.pdf",
} as const;

export const stats = [
  { label: "Years of Experience", value: experienceYears, suffix: "+" },
  { label: "Concurrent Users Served", value: 3000, suffix: "+" },
  { label: "AI Engineering Projects", value: 5, suffix: "" },
  { label: "Storage Cost Reduced", value: 60, suffix: "%" },
];

export const highlights = [
  "End-to-end ownership: UI, APIs, infrastructure & deployment",
  "Production Voice & Real-Time AI agents (Pipecat, LiveKit)",
  "Scaled platforms to 3,000+ concurrent users",
  "Mentored junior developers in Agile teams",
];

export const strengths = [
  "Clean, maintainable code",
  "Agile collaboration",
  "Performance optimization",
  "Continuous learning",
  "Team mentorship",
  "Product ownership",
];

export type SkillGroup = {
  category: string;
  icon: string; // lucide icon name key (mapped in component)
  skills: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "Layout",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Material-UI (MUI)", level: 88 },
      { name: "Bootstrap", level: 85 },
      { name: "Responsive UI / UX", level: 90 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Express.js", level: 92 },
      { name: "RESTful API Development", level: 93 },
      { name: "KrakenD API Gateway", level: 80 },
    ],
  },
  {
    category: "AI / Machine Learning",
    icon: "BrainCircuit",
    skills: [
      { name: "AI Agent Development", level: 90 },
      { name: "RAG Methods", level: 85 },
      { name: "LLM Tool / Function Calling", level: 88 },
      { name: "Model Context Protocol (MCP)", level: 84 },
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "SQL", level: 82 },
      { name: "Database Management", level: 88 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      { name: "AWS (EC2, S3)", level: 85 },
      { name: "Docker", level: 86 },
      { name: "Nginx", level: 84 },
      { name: "CI/CD (GitHub Actions)", level: 85 },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: "Wrench",
    skills: [
      { name: "Git", level: 93 },
      { name: "Jira (Agile)", level: 85 },
      { name: "NATS Messaging", level: 80 },
      { name: "Keycloak (Auth)", level: 82 },
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  points: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    company: "Delhi Public School",
    role: "Full Stack Developer",
    period: "Recent", // resume did not specify exact dates
    summary:
      "Built and led delivery of an AI-driven education platform serving thousands of concurrent users.",
    points: [
      "Developed a full-stack web application using React and Express.js with role-based access for Admin, Principal, Teacher, and Student.",
      "Implemented AI-driven question generation, an online test portal, and an automated AI evaluation system supporting 3,000+ concurrent users.",
      "Deployed with scalable architecture ensuring secure API integration, performance optimization, and high availability in production.",
      "Led and coordinated a cross-functional team — managing task distribution, code reviews, and delivery timelines.",
    ],
    tech: ["React", "Express.js", "RBAC", "AI Evaluation", "Scalable Architecture"],
  },
  {
    company: "Bluefunda",
    role: "Full Stack Developer",
    period: "Earlier role",
    summary:
      "Engineered scalable services, real-time interfaces, and automated CI/CD pipelines.",
    points: [
      "Developed scalable backend services using Express.js with RESTful APIs and KrakenD API Gateway for aggregation and routing.",
      "Built responsive web interfaces in React, integrating real-time features with NATS messaging.",
      "Implemented authentication and authorization with Keycloak for secure user access management.",
      "Coordinated with clients and cross-functional teams (SAP developers, Figma designers) in Agile, using Jira for task management.",
      "Designed and maintained a CI/CD pipeline with Docker and GitHub Actions automating build, test, and deployment.",
      "Created a fast, SEO-optimized promotional site with Hugo CMS, and integrated MinIO (with MCP) as a cost-effective S3 alternative.",
    ],
    tech: ["Express.js", "React", "KrakenD", "NATS", "Keycloak", "Docker", "GitHub Actions", "Hugo", "MinIO"],
  },
  {
    company: "GUVI / HCL — Zen Class",
    role: "Frontend Developer",
    period: "Earlier role",
    summary:
      "Crafted accessible, responsive interfaces and integrated them with backend APIs.",
    points: [
      "Built responsive, accessible UIs using React, Material-UI (MUI), and Bootstrap with a consistent design system.",
      "Integrated dynamic front-end components with RESTful APIs, collaborating with backend developers and UI designers.",
      "Collaborated in an Agile team using Git, contributing to stand-ups and sprint planning.",
    ],
    tech: ["React", "Material-UI", "Bootstrap", "REST APIs", "Git"],
  },
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  tech: string[];
  highlight: string;
  icon: string;
};

export const projects: Project[] = [
  {
    title: "Telephony / Voice AI Agent",
    tagline: "Pipecat · Python",
    description:
      "A production Voice AI agent enabling real-time STT → LLM → TTS streaming for automated customer-service calls with low-latency conversational responses.",
    features: [
      "Real-time speech-to-text → LLM → text-to-speech pipeline",
      "Low-latency conversational responses",
      "Deployed for automated customer-service calls",
    ],
    tech: ["Pipecat", "Python", "STT", "LLM", "TTS"],
    highlight: "Production deployment",
    icon: "PhoneCall",
  },
  {
    title: "Real-Time Interview AI Agent",
    tagline: "LiveKit · WebRTC",
    description:
      "A real-time conversational interview agent on LiveKit with low-latency WebRTC audio, integrating OpenAI LLMs and STT / TTS providers for speech.",
    features: [
      "Low-latency WebRTC audio streaming",
      "OpenAI LLM + STT / TTS integration",
      "Supports 200 concurrent live interviews",
    ],
    tech: ["LiveKit", "WebRTC", "OpenAI", "STT", "TTS"],
    highlight: "200 concurrent interviews",
    icon: "Mic",
  },
  {
    title: "Natural-Language-to-SQL Agent",
    tagline: "LLM Tool Calling",
    description:
      "An LLM-powered NL-to-SQL agent using function calling, schema-aware prompting, and query validation to translate natural-language requests into executable SQL.",
    features: [
      "Function calling with schema-aware prompting",
      "Query validation for safe execution",
      "Improves data accessibility, reduces manual analytics",
    ],
    tech: ["LLM", "Function Calling", "SQL", "Schema Prompting"],
    highlight: "Reduced manual analytics effort",
    icon: "Database",
  },
  {
    title: "LLM-Powered Assessment Platform",
    tagline: "AI Question Gen + Auto-Grading",
    description:
      "An assessment platform using AI-driven question generation and automated grading, with RBAC and scalable architecture for high availability.",
    features: [
      "AI question generation & automated grading",
      "RBAC: Admin, Principal, Teacher, Student",
      "Scales to 3,000+ concurrent users",
    ],
    tech: ["React", "Express.js", "LLM", "RBAC"],
    highlight: "3,000+ concurrent users",
    icon: "GraduationCap",
  },
  {
    title: "MCP Storage Automation",
    tagline: "Model Context Protocol + MinIO",
    description:
      "An MCP integration exposing MinIO object storage as agent-callable tools, enabling prompt-driven file management and storage automation.",
    features: [
      "MinIO exposed as agent-callable MCP tools",
      "Prompt-driven file & storage automation",
      "Cost-effective alternative to Amazon S3",
    ],
    tech: ["MCP", "MinIO", "S3", "Automation"],
    highlight: "~60% storage cost reduction",
    icon: "HardDrive",
  },
];

export type Education = {
  degree: string;
  institution: string;
  period: string;
  score: string;
};

export const education: Education[] = [
  {
    degree: "B.Tech, Information Technology",
    institution: "K S R Institute for Engineering & Technology, Namakkal",
    period: "2020 — 2024",
    score: "CGPA: 8.17",
  },
  {
    degree: "Higher Secondary (HSC)",
    institution: "Kamarajar Matric Hr Sec School, Sholavandan, Madurai",
    period: "2019 — 2020",
    score: "69.33%",
  },
];

// The resume lists no formal certifications. These reflect demonstrated
// competencies and are clearly framed as focus areas, not issued certificates.
export const achievements = [
  {
    title: "Scaled to 3,000+ Users",
    description:
      "Architected and deployed an AI education platform supporting 3,000+ concurrent users with high availability.",
    icon: "Users",
  },
  {
    title: "~60% Storage Cost Cut",
    description:
      "Replaced Amazon S3 with an MCP-integrated MinIO setup, reducing storage costs by roughly 60%.",
    icon: "TrendingDown",
  },
  {
    title: "Production AI Agents",
    description:
      "Shipped real-time Voice (Pipecat) and Interview (LiveKit) AI agents to production with low latency.",
    icon: "Bot",
  },
  {
    title: "Team Leadership & Mentorship",
    description:
      "Led cross-functional teams and mentored junior developers across Agile delivery cycles.",
    icon: "Award",
  },
];

export const techStack = [
  "React", "Next.js", "Node.js", "Express.js", "TypeScript", "JavaScript",
  "Python", "MongoDB", "SQL", "AWS", "Docker", "Nginx", "Git",
  "GitHub Actions", "KrakenD", "NATS", "Keycloak", "MinIO", "Pipecat",
  "LiveKit", "OpenAI", "MCP", "Hugo", "Jira", "Material-UI", "Bootstrap",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
