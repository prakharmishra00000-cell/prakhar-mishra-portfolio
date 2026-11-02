"use client";

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, Sparkles, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Projects.module.css';

interface Project {
  name: string;
  category: string;
  role: string;
  problem: string;
  solution: string;
  positioning: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  liveLink: string;
  githubLink: string;
  image: string;
}

const projectsData: Project[] = [
  {
    name: "MatrixMind AI",
    category: "Autonomous AI & Generative Intelligence",
    role: "Multiverse AI Reasoning, Presentation Generator & Multi-Agent Council Platform",
    problem: "Standard LLM chatbots operate with single-dimension responses, rigid token gates, and lack autonomous multi-perspective adversarial evaluation and document synthesis.",
    solution: "A full-scale multimodal AI platform featuring Multiverse Matrix Simulation modeling counterfactual realities, automated PowerPoint (.pptx) slide deck synthesis, multi-agent adversarial Council debates, local client-side entity anonymization, and 10 dynamic cosmic visual themes.",
    positioning: "Unrestricted Multimodal AI with Multiverse Simulations & Automated PPT Synthesis.",
    metrics: [
      { label: "AI Personas", value: "3 Modes" },
      { label: "PPT Synthesis", value: "Direct .pptx" },
      { label: "Access Tier", value: "Unlimited" }
    ],
    technologies: ["Google Gemini Flash", "React", "Express", "Mermaid.js", "PptxGenJS", "Vercel"],
    liveLink: "https://ai-chat-bot-app-generate-bot-s-projects.vercel.app",
    githubLink: "https://github.com/prakharmishra00000-cell/ai-chat-bot",
    image: "/matrixmind.png"
  },
  {
    name: "CareerHub AI",
    category: "Career Tech & Aggregation",
    role: "AI Real-Time Opportunity & Job Discovery Engine",
    problem: "Job seekers struggle with fragmented job portals, gated paywalls, and outdated mock listings across tech and core engineering domains.",
    solution: "A unified real-time job discovery engine aggregating live opportunities from 9+ platforms (LinkedIn, Indeed, Glassdoor, ZipRecruiter, Shine, Apna, Remotive, Arbeitnow) with 0% mock data, instant direct-apply links, and indexing for 40+ engineering degrees.",
    positioning: "Every Opportunity. One Search. AI-powered real-time discovery.",
    metrics: [
      { label: "Opportunities", value: "50K+" },
      { label: "Live Sources", value: "9+" },
      { label: "Degrees Mapped", value: "40+" }
    ],
    technologies: ["Next.js", "TypeScript", "Multi-Source Scraper", "API Aggregator", "Tailwind CSS"],
    liveLink: "https://careerhub-ai-ruby.vercel.app/",
    githubLink: "https://github.com/prakharmishra00000-cell/careerhub-ai",
    image: "/careerhub.png"
  },
  {
    name: "ExamIntel",
    category: "AI & Education",
    role: "AI Competitive Exam Intelligence & Prep Ecosystem",
    problem: "Aspirants preparing for competitive exams lack unified analytical intelligence—navigating fragmented sources for syllabus breakdowns and prerequisites.",
    solution: "An enterprise-grade 17-feature exam intelligence platform featuring real-time Exam Comparison, Prerequisite Dependency Mapping, Personalized Paper Generation, and interactive AI mentoring powered by Google Gemini.",
    positioning: "A full-scale AI exam intelligence and preparation ecosystem.",
    metrics: [
      { label: "AI Capabilities", value: "17" },
      { label: "Intelligence", value: "Gemini AI" },
      { label: "User Flow", value: "Real-Time" }
    ],
    technologies: ["Gemini AI API", "Next.js", "React", "Vercel"],
    liveLink: "https://my-project-teal-two-91.vercel.app/",
    githubLink: "https://github.com/prakharmishra00000-cell/examintel",
    image: "/examintel.png"
  },
  {
    name: "Nexron AI",
    category: "AI & Education",
    role: "Living AI Learning Roadmap & Adaptive Career Mentor",
    problem: "Self-directed learners struggle with rigid, static study curricula that fail to adapt when schedules change, daily availability fluctuates, or career goals shift.",
    solution: "An intelligent, adaptive roadmap engine featuring live AI curriculum generation, dynamic schedule replanning, and personalized career mentoring.",
    positioning: "A living AI learning roadmap and career mentor tailored to any skill or goal.",
    metrics: [
      { label: "Curriculum", value: "Adaptive" },
      { label: "Replanning", value: "Dynamic" },
      { label: "Design", value: "AI-First" }
    ],
    technologies: ["Generative AI", "Next.js", "TypeScript", "Prompt Orchestration"],
    liveLink: "https://studyflow-ai-tau-drab.vercel.app/",
    githubLink: "https://github.com/prakharmishra00000-cell/studyflow-ai",
    image: "/nexron.png"
  },
  {
    name: "ExamArena",
    category: "Career Tech & Aggregation",
    role: "AI-Powered Engineering Career & Exam Discovery Platform",
    problem: "Engineering students face difficulty discovering suitable exams matching their branch, qualification, and career goals across fragmented sources.",
    solution: "A unified career intelligence platform integrating a 500+ exam ecosystem with multi-dimensional filtering, comparison, and AI career guidance.",
    positioning: "A unified career intelligence platform for engineering students.",
    metrics: [
      { label: "Exams Explored", value: "500+" },
      { label: "Branches", value: "All Eng." },
      { label: "Filters", value: "Multi-Dim" }
    ],
    technologies: ["React", "Next.js", "Search Algorithms", "Vercel"],
    liveLink: "https://exam-arena-two.vercel.app/",
    githubLink: "https://github.com/prakharmishra00000-cell/exam-arena",
    image: "/examarena.png"
  },
  {
    name: "PrepOS AI",
    category: "Developer & Productivity",
    role: "Enterprise-Style AI Career Preparation Operating System",
    problem: "Students use disconnected tools for resume prep, coding, mock interviews, and skill-gap analysis, leading to inefficient career preparation.",
    solution: "A unified AI operating system offering an AI Placement Digital Twin, Mock Simulator, AI Coding IDE, and comprehensive career intelligence tools.",
    positioning: "A unified AI operating system for career preparation.",
    metrics: [
      { label: "AI Modules", value: "50+" },
      { label: "Interactive Tools", value: "IDE + Twin" },
      { label: "Simulation", value: "Full-Stack" }
    ],
    technologies: ["Next.js", "AI Agent Runtime", "In-Browser Code Exec", "Tailwind CSS"],
    liveLink: "https://placement-prep-ai-tau.vercel.app/",
    githubLink: "https://github.com/prakharmishra00000-cell/placement-prep-ai",
    image: "/prepos.png"
  },
  {
    name: "Telegram Document Downloader AI",
    category: "Developer & Productivity",
    role: "AI-Powered Telegram Document Intelligence & Cloud Downloader",
    problem: "Extracting, organizing, and analyzing specific documents from large Telegram channels natively is cumbersome and lacks content understanding.",
    solution: "A modern web utility featuring secure MTProto authentication, automated channel file extraction, and Gemini-powered AI document summarization, smart tagging, and content categorization.",
    positioning: "AI-augmented document intelligence and extraction for Telegram.",
    metrics: [
      { label: "Auth Protocol", value: "MTProto" },
      { label: "AI Extraction", value: "Gemini AI" },
      { label: "Throughput", value: "Cloud Batch" }
    ],
    technologies: ["MTProto API", "Gemini AI", "Next.js", "Vercel"],
    liveLink: "https://telegram-file-downloader.vercel.app/",
    githubLink: "https://github.com/prakharmishra00000-cell/Telegram-file-downloader",
    image: "/telegram.png"
  }
];

const categories = ["All Systems", "AI & Education", "Career Tech & Aggregation", "Developer & Productivity"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Systems");

  const filteredProjects = activeCategory === "All Systems"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.eyebrow}>
            <Sparkles size={14} /> Production Portfolio
          </div>
          <h2 className={`${styles.title} text-gradient`}>Featured AI &amp; Web Systems</h2>
          <p className={styles.subtitle}>
            Deployed live applications built to solve complex discovery, career, and data challenges.
          </p>
        </motion.div>

        {/* Filter Navigation & Scroll Controls */}
        <div className={styles.topControlRow}>
          <div className={styles.filterBar}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.filterBtn} ${activeCategory === category ? styles.filterActive : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className={styles.scrollNavControls}>
            <button 
              className={styles.scrollNavBtn} 
              onClick={() => {
                const el = document.getElementById('projectsCarouselTrack');
                if (el) el.scrollBy({ left: -420, behavior: 'smooth' });
              }}
              aria-label="Previous Project"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              className={styles.scrollNavBtn} 
              onClick={() => {
                const el = document.getElementById('projectsCarouselTrack');
                if (el) el.scrollBy({ left: 420, behavior: 'smooth' });
              }}
              aria-label="Next Project"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Running Form Carousel Track */}
        <div 
          id="projectsCarouselTrack"
          className={styles.carouselContainer}
        >
          <div className={styles.carouselTrack}>
            {/* Render duplicated list for continuous running flow */}
            {[...filteredProjects, ...filteredProjects].map((project, idx) => (
              <div 
                key={`${project.name}-${idx}`}
                className={styles.projectCard}
              >
                <div className={styles.imageWrapper}>
                  <img 
                    src={project.image} 
                    alt={`${project.name} Interface`} 
                    className={styles.projectImage} 
                  />
                  <div className={styles.imageOverlay} />
                  <span className={styles.categoryTag}>{project.category}</span>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardHeader}>
                    <div>
                      <h3 className={styles.projectName}>{project.name}</h3>
                      <p className={styles.projectRole}>{project.role}</p>
                    </div>
                  </div>

                  <p className={styles.solutionText}>{project.solution}</p>

                  <div className={styles.metricsRow}>
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className={styles.metricItem}>
                        <span className={styles.metricVal}>{metric.value}</span>
                        <span className={styles.metricLabel}>{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.techTags}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={styles.cardFooter}>
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.liveBtn}
                    >
                      Launch Live App <ArrowUpRight size={15} />
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.githubBtn}
                      aria-label={`View ${project.name} Source Code on GitHub`}
                    >
                      <Code2 size={16} /> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
