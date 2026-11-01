"use client";

import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  PenTool, 
  Code, 
  Cpu, 
  CheckCircle2, 
  Rocket, 
  Workflow, 
  Layers, 
  Database, 
  ShieldCheck, 
  Compass, 
  Sparkles 
} from 'lucide-react';
import styles from './Services.module.css';

const workflowSteps = [
  { 
    step: "01",
    icon: <Compass size={22} />, 
    title: "System Deconstruction", 
    desc: "Break down the core problem into inputs, state transformations, API requirements, and failure modes." 
  },
  { 
    step: "02",
    icon: <PenTool size={22} />, 
    title: "AI & Schema Architecture", 
    desc: "Design structured prompts, JSON schemas, rate-limiting guards, and high-conversion UX wireframes." 
  },
  { 
    step: "03",
    icon: <Code size={22} />, 
    title: "AI-Augmented Build", 
    desc: "Utilize elite AI harnesses (Antigravity, Claude Code, Turbopack) to assemble production code at 10x velocity." 
  },
  { 
    step: "04",
    icon: <Rocket size={22} />, 
    title: "Edge Deploy & Hardening", 
    desc: "Deploy instantly to Vercel/Edge with automated CI/CD, analytics, error tracking, and performance verification." 
  }
];

const capabilities = [
  {
    icon: <Cpu size={26} />,
    title: "AI-Native Web Applications",
    desc: "Production web applications leveraging LLM chains, live scraping, streaming inference, and prompt engineering.",
    tags: ["Gemini 1.5", "Claude API", "Streaming UX", "Vector RAG"]
  },
  {
    icon: <Database size={26} />,
    title: "Real-Time Data Aggregators",
    desc: "High-throughput engines that crawl, aggregate, deduplicate, and index disparate live web APIs with zero mock data.",
    tags: ["Data Pipelines", "MTProto", "Fast Ingestion", "Normalization"]
  },
  {
    icon: <Layers size={26} />,
    title: "Next.js Full-Stack SaaS",
    desc: "End-to-end applications with responsive design, secure authentication, database integrations, and clean state management.",
    tags: ["App Router", "TypeScript", "Tailwind CSS", "Server Actions"]
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "Systems Automation & Bot Engines",
    desc: "Headless scripts, Telegram bots, and automated workflows that streamline repetitive processes and file conversions.",
    tags: ["Automation", "Webhooks", "Cloud Functions", "Node.js"]
  },
  {
    icon: <Workflow size={26} />,
    title: "Interactive UI/UX Prototypes",
    desc: "Dark-mode, glassmorphic digital interfaces designed for developer tools, SaaS dashboards, and consumer software.",
    tags: ["Framer Motion", "Micro-Interactions", "Responsive", "Glassmorphism"]
  },
  {
    icon: <Lightbulb size={26} />,
    title: "Technical Writing & Curriculum",
    desc: "Deep technical documentation, curriculum authoring, and engineering masterbooks bridging foundational theory to real software.",
    tags: ["Masterbook", "System Specs", "Open Source", "Documentation"]
  }
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        
        {/* Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.eyebrow}>
            <Workflow size={14} /> Execution Framework
          </div>
          <h2 className={`${styles.title} text-gradient`}>How I Build &amp; What I Deliver</h2>
          <p className={styles.subtitle}>
            A rigorous engineering process designed to take ambitious concepts to production-grade web systems.
          </p>
        </motion.div>

        {/* 4-Step Engineering Pipeline */}
        <div className={styles.workflowTimeline}>
          {workflowSteps.map((step, idx) => (
            <motion.div 
              key={step.step}
              className={styles.workflowCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <span className={styles.stepIndex}>{step.step}</span>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Offerings Grid */}
        <div className={styles.servicesGrid}>
          {capabilities.map((item, idx) => (
            <motion.div 
              key={item.title}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div className={styles.serviceIcon}>{item.icon}</div>
              <h3 className={styles.serviceTitle}>{item.title}</h3>
              <p className={styles.serviceDesc}>{item.desc}</p>
              <div className={styles.servicePills}>
                {item.tags.map((t) => (
                  <span key={t} className={styles.servicePill}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
