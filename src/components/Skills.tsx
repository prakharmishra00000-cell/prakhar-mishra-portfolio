"use client";

import { motion } from 'framer-motion';
import { Bot, Code2, Wrench, Layers, Terminal, Sparkles, Database, Cloud } from 'lucide-react';
import styles from './Skills.module.css';

interface SkillCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: { name: string; highlight?: boolean }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "AI & Autonomous Agents",
    description: "LLM integration, autonomous chains, and agent workflows",
    icon: <Bot size={24} />,
    skills: [
      { name: "Gemini 1.5 Pro & Flash", highlight: true },
      { name: "Claude 3.5 Sonnet", highlight: true },
      { name: "OpenAI GPT-4o" },
      { name: "AI Agent Architectures", highlight: true },
      { name: "Structured JSON Output" },
      { name: "Context Window Optimization" },
      { name: "Prompt Chaining & Multi-step Reasoning" },
      { name: "Retrieval Augmentation (RAG)" }
    ]
  },
  {
    title: "Modern Full-Stack Core",
    description: "Production web applications, reactive state, and server logic",
    icon: <Code2 size={24} />,
    skills: [
      { name: "Next.js 15 & 16 (App Router)", highlight: true },
      { name: "React 19", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "Node.js & Express" },
      { name: "REST & Streaming APIs" },
      { name: "Tailwind CSS & CSS Modules" },
      { name: "Framer Motion Animations" },
      { name: "State Management & Server Actions" }
    ]
  },
  {
    title: "AI Development Systems & Tooling",
    description: "Elite developer environments and code generation harnesses",
    icon: <Wrench size={24} />,
    skills: [
      { name: "Antigravity IDE & CLI", highlight: true },
      { name: "Claude Code / CLAUDE.md", highlight: true },
      { name: "GitHub Copilot / Codex" },
      { name: "Git & Version Control" },
      { name: "Vercel Edge & Cloud Deployment", highlight: true },
      { name: "Render & Supabase" },
      { name: "Postman & API Prototyping" }
    ]
  },
  {
    title: "Systems Engineering & Architecture",
    description: "Mechanical systems discipline applied to software scale",
    icon: <Layers size={24} />,
    skills: [
      { name: "Fault-Tolerant System Design", highlight: true },
      { name: "Live Data Scraping & Ingestion", highlight: true },
      { name: "MTProto Protocol Extraction" },
      { name: "Zero-Mock Architecture" },
      { name: "Thermodynamics & Systems Dynamics" },
      { name: "SaaS Product Economics" },
      { name: "Modular Component Hierarchies" }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.eyebrow}>
            <Terminal size={14} /> Technical Arsenal
          </div>
          <h2 className={`${styles.title} text-gradient`}>Full-Stack &amp; AI Capabilities</h2>
          <p className={styles.subtitle}>
            A curated inventory of the languages, frameworks, AI developer platforms, and systems methodologies I deploy daily.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              className={styles.card}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrap}>{category.icon}</div>
                <div>
                  <h3 className={styles.cardTitle}>{category.title}</h3>
                  <p className={styles.cardDesc}>{category.description}</p>
                </div>
              </div>

              <div className={styles.pillContainer}>
                {category.skills.map((skill) => (
                  <span 
                    key={skill.name} 
                    className={`${styles.skillPill} ${skill.highlight ? styles.highlightPill : ''}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
