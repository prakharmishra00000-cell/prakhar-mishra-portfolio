export interface SectorInfo {
  id: string;
  name: string;
  codename: string;
  description: string;
  pos: { x: number; y: number; z: number };
  target: { x: number; y: number; z: number };
  color: string;
  badge: string;
}

export interface ProjectInfo {
  id: string;
  name: string;
  role: string;
  problem: string;
  solution: string;
  positioning: string;
  metrics: { label: string; value: string }[];
  liveLink: string;
  githubLink: string;
  image: string;
  tech: string[];
  worldCoord: { x: number; y: number; z: number };
  color: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
  color: string;
  worldCoord: { x: number; y: number; z: number };
}

export interface VideoTrack {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  description: string;
  generatorType: 'neural_matrix' | 'quantum_grid' | 'code_cascade' | 'ai_synapse';
}

export const SECTORS: SectorInfo[] = [
  {
    id: 'nexus',
    name: 'Nexus Core',
    codename: 'SECTOR-01 // COMMAND',
    description: 'Prakhar Mishra Core Identity, Systems Architecture & AI Engineering Nexus',
    pos: { x: 0, y: 3.5, z: 12 },
    target: { x: 0, y: 1.5, z: 0 },
    color: '#00f0ff',
    badge: 'ONLINE'
  },
  {
    id: 'theater',
    name: 'Holo-Theater',
    codename: 'SECTOR-02 // VIDEO BROADCAST',
    description: 'Monumental 3D Curved Holographic Video Screen showcasing real-time neural streams and architecture showreels',
    pos: { x: 0, y: 4, z: -16 },
    target: { x: 0, y: 3.2, z: -28 },
    color: '#f59e0b',
    badge: 'LIVE FEED'
  },
  {
    id: 'projects',
    name: 'AI Matrix Lab',
    codename: 'SECTOR-03 // PROJECTS CLUSTER',
    description: 'Intelligent real-time applications: CareerHub AI, ExamIntel, Nexron AI, ExamArena & PrepOS AI',
    pos: { x: -22, y: 5, z: -2 },
    target: { x: -26, y: 2, z: -8 },
    color: '#38bdf8',
    badge: '6 NODES'
  },
  {
    id: 'skills',
    name: 'Tech Arsenal',
    codename: 'SECTOR-04 // TECH FORGE',
    description: 'Autonomous AI Agents, Next.js Full-Stack, WebGL Shaders, Python APIs & Systems Engineering',
    pos: { x: 22, y: 5, z: -2 },
    target: { x: 26, y: 2, z: -8 },
    color: '#a855f7',
    badge: '4 PILLARS'
  },
  {
    id: 'transmission',
    name: 'Transmission Relay',
    codename: 'SECTOR-05 // QUANTUM BEACON',
    description: 'Skyward Photon Laser Beacon, Global Communication Terminal & Direct Contact Network',
    pos: { x: 0, y: 4, z: 18 },
    target: { x: 0, y: 2, z: 26 },
    color: '#10b981',
    badge: 'ACTIVE RELAY'
  }
];

export const PROJECTS_DATA: ProjectInfo[] = [
  {
    id: 'careerhub',
    name: 'CareerHub AI',
    role: 'AI-Powered Real-Time Career & Job Discovery Engine',
    problem: 'Job seekers face fragmented portals, sign-in barriers, and outdated mock listings that fail to deliver live opportunities across 40+ engineering disciplines.',
    solution: 'Unified job intelligence aggregating 9+ live platforms (LinkedIn, Indeed, Glassdoor, ZipRecruiter, Shine, Apna, Remotive) with 0% mock data, instant direct-apply links, and AI filtering.',
    positioning: 'Every Opportunity. One Search. AI-powered real-time career discovery across 9+ trusted sources.',
    metrics: [
      { label: 'Opportunities Indexed', value: '50K+' },
      { label: 'Live Platforms', value: '9+' },
      { label: 'Degree Disciplines', value: '40+' }
    ],
    liveLink: 'https://careerhub-ai-ruby.vercel.app/',
    githubLink: 'https://github.com/prakharmishra00000-cell/careerhub-ai',
    image: '/careerhub.png',
    tech: ['Next.js', 'React', 'FastAPI', 'Python', 'AI Crawlers', 'TailwindCSS'],
    worldCoord: { x: -30, y: 2.2, z: -14 },
    color: '#00f0ff'
  },
  {
    id: 'examintel',
    name: 'ExamIntel',
    role: 'AI-Powered Competitive Exam Intelligence Platform',
    problem: 'Competitive exam candidates struggle with fragmented syllabi, missing prerequisite relationships, and tedious cross-exam overlap analysis.',
    solution: 'Enterprise-grade 17-feature intelligence suite with exam comparison matrices, prerequisite mapping, paper generation, and Gemini AI mentoring.',
    positioning: 'A full-scale AI exam intelligence and preparation ecosystem.',
    metrics: [
      { label: 'AI Features', value: '17' },
      { label: 'Core Engine', value: 'Gemini AI' },
      { label: 'Intelligence Depth', value: 'High' }
    ],
    liveLink: 'https://my-project-teal-two-91.vercel.app/',
    githubLink: 'https://github.com/prakharmishra00000-cell/examintel',
    image: '/examintel.png',
    tech: ['Google Gemini API', 'Next.js', 'TypeScript', 'Node.js', 'Framer Motion'],
    worldCoord: { x: -24, y: 2.2, z: -14 },
    color: '#a855f7'
  },
  {
    id: 'nexron',
    name: 'Nexron AI',
    role: 'Living AI Learning Roadmap & Career Mentor',
    problem: 'Rigid study syllabi fail to adapt when schedules change, daily availability fluctuates, or career goals shift.',
    solution: 'Intelligent, adaptive roadmap engine featuring live dynamic curriculum generation, automated reschedule logic, and personal AI guidance.',
    positioning: 'A living AI learning roadmap and career mentor tailored to any skill or goal.',
    metrics: [
      { label: 'Personalization', value: 'Dynamic' },
      { label: 'Architecture', value: 'AI-First' },
      { label: 'Curriculum Gen', value: 'Instant' }
    ],
    liveLink: 'https://studyflow-ai-tau-drab.vercel.app/',
    githubLink: 'https://github.com/prakharmishra00000-cell',
    image: '/nexron.png',
    tech: ['React', 'Next.js', 'AI Agents', 'State Machine', 'Tailwind'],
    worldCoord: { x: -30, y: 2.2, z: -6 },
    color: '#38bdf8'
  },
  {
    id: 'examarena',
    name: 'ExamArena',
    role: 'Engineering Career & 500+ Exam Discovery Hub',
    problem: 'Engineering graduates face severe friction finding competitive exams tailored to specific branches and eligibility criteria.',
    solution: 'Centralized 500+ exam database with multi-dimensional branch filtering, comparison matrix, and AI career guidance.',
    positioning: 'A unified career intelligence platform for engineering students.',
    metrics: [
      { label: 'Exams Indexed', value: '500+' },
      { label: 'Approach', value: 'AI-First' },
      { label: 'Branch Mapping', value: 'Universal' }
    ],
    liveLink: 'https://exam-arena-two.vercel.app/',
    githubLink: 'https://github.com/prakharmishra00000-cell',
    image: '/examarena.png',
    tech: ['Next.js', 'TypeScript', 'Lucide', 'CSS Modules', 'Vercel'],
    worldCoord: { x: -24, y: 2.2, z: -6 },
    color: '#f59e0b'
  },
  {
    id: 'prepos',
    name: 'PrepOS AI',
    role: 'AI Placement Digital Twin & Preparation OS',
    problem: 'Disjointed tools for resume building, mock interviews, and coding tests cause fragmented prep workflows.',
    solution: 'Integrated platform offering an AI Placement Digital Twin, Mock Simulator, AI Coding IDE, and unified career diagnostic reports.',
    positioning: 'A unified AI operating system for career preparation.',
    metrics: [
      { label: 'AI Capabilities', value: '50+' },
      { label: 'Twin Simulation', value: 'Real-time' },
      { label: 'Interview Modes', value: 'Adaptive' }
    ],
    liveLink: 'https://placement-prep-ai-tau.vercel.app/',
    githubLink: 'https://github.com/prakharmishra00000-cell',
    image: '/prepos.png',
    tech: ['Next.js', 'Gemini AI', 'Monaco IDE', 'TypeScript', 'FastAPI'],
    worldCoord: { x: -30, y: 2.2, z: 2 },
    color: '#10b981'
  },
  {
    id: 'telegram',
    name: 'Telegram Document Downloader',
    role: 'Secure Web-Based File Extraction Utility',
    problem: 'Extracting and batching specific documents from Telegram channels without native client constraints.',
    solution: 'Clean browser-based extraction utility featuring encrypted user sessions and direct file downloading.',
    positioning: 'A secure web utility for Telegram file extraction.',
    metrics: [
      { label: 'Authentication', value: 'Encrypted' },
      { label: 'Latency', value: 'Sub-second' },
      { label: 'Format Support', value: 'Universal' }
    ],
    liveLink: 'https://telegram-file-downloader.vercel.app/',
    githubLink: 'https://github.com/prakharmishra00000-cell',
    image: '/telegram.png',
    tech: ['React', 'Node.js', 'Telegram MTProto', 'REST APIs'],
    worldCoord: { x: -24, y: 2.2, z: 2 },
    color: '#ec4899'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Artificial Intelligence & Agents',
    iconName: 'Bot',
    skills: ['Autonomous AI Agents', 'Google Gemini AI', 'Prompt Engineering', 'LangChain / Multi-Agent', 'AI Web Applications', 'API Integration'],
    color: '#00f0ff',
    worldCoord: { x: 24, y: 2.2, z: -14 }
  },
  {
    title: 'Web & Full-Stack Architecture',
    iconName: 'Code2',
    skills: ['Next.js (App Router)', 'React 19', 'TypeScript', 'TailwindCSS / Modern CSS', 'RESTful & GraphQL APIs', 'Database Design'],
    color: '#38bdf8',
    worldCoord: { x: 30, y: 2.2, z: -14 }
  },
  {
    title: '3D WebGL & Creative Tech',
    iconName: 'Layers',
    skills: ['Three.js 3D Viewport', 'WebGL Shaders & Lighting', 'Framer Motion', 'Interactive Canvas Physics', 'Spatial UX Design'],
    color: '#a855f7',
    worldCoord: { x: 24, y: 2.2, z: -6 }
  },
  {
    title: 'Systems & Production Tools',
    iconName: 'Wrench',
    skills: ['Git & GitHub', 'Vercel Deployment', 'Python / FastAPI', 'Antigravity / AI Coding', 'Performance Optimization'],
    color: '#f59e0b',
    worldCoord: { x: 30, y: 2.2, z: -6 }
  }
];

export const VIDEO_TRACKS: VideoTrack[] = [
  {
    id: 'vid-1',
    title: 'AI Neural Matrix & Autonomous Systems',
    subtitle: 'Real-Time Neural Synapse Visualizer // AI Architecture Core',
    category: 'AI SIMULATION',
    duration: '02:45',
    description: 'Dynamic neural network signal flow demonstrating multi-agent communication and cognitive prompt pipelines.',
    generatorType: 'neural_matrix'
  },
  {
    id: 'vid-2',
    title: 'Quantum Grid & Three.js 3D Engine',
    subtitle: 'High-Performance WebGL Shaders // Spatial Computing',
    category: '3D WEBGL',
    duration: '03:12',
    description: 'Real-time raymarched holographic cyber grid, dynamic vertex displacement, and ambient post-processing shaders.',
    generatorType: 'quantum_grid'
  },
  {
    id: 'vid-3',
    title: 'CareerHub AI & Production Data Stream',
    subtitle: '50K+ Live Opportunity Indexer // 9+ Real-Time Sources',
    category: 'PLATFORM REEL',
    duration: '01:58',
    description: 'High-speed data harvesting, intelligent filtering algorithms, and frictionless direct-apply pipelines.',
    generatorType: 'code_cascade'
  },
  {
    id: 'vid-4',
    title: 'Deep Synapse Reasoning // Gemini AI',
    subtitle: 'Multimodal Exam Intelligence & Graph Prerequisite Trees',
    category: 'COGNITIVE ENGINE',
    duration: '02:30',
    description: 'Personalized curriculum generation and semantic dependency graphs powered by Google Gemini.',
    generatorType: 'ai_synapse'
  }
];

export const PROFILE_INFO = {
  name: 'Prakhar Mishra',
  title: 'AI Full-Stack Web Developer & Creative Technologist',
  tagline: 'Architecting intelligent digital worlds where Autonomous AI converges with cutting-edge 3D WebGL engineering.',
  email: 'prakharmishraflp@gmail.com',
  phone: '+91 6372843175',
  github: 'https://github.com/prakharmishra00000-cell',
  linkedin: 'https://www.linkedin.com/in/prakhar-mishra-29931b268',
  status: 'AVAILABLE FOR HIGH-IMPACT ROLES & PRODUCT CONTRACTS',
  bio: 'Final-year Mechanical Engineering student at MMMUT Gorakhpur who transitioned into an AI Full-Stack Developer. Blending engineering first-principles, mechanical systems thinking, and cutting-edge software architecture to build production-grade AI platforms.'
};
