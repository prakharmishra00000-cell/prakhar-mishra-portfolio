"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import styles from './Projects.module.css';

const projects = [
  {
    name: "ExamArena",
    role: "AI-Powered Engineering Career & Exam Discovery Platform",
    problem: "Engineering students face difficulty discovering suitable exams matching their branch, qualification, and career goals across fragmented sources.",
    solution: "A unified career intelligence platform integrating a 500+ exam ecosystem with multi-dimensional filtering, comparison, and AI career guidance.",
    positioning: "A unified career intelligence platform for engineering students.",
    metrics: [
      { label: "Exams Explored", value: "500+" },
      { label: "Approach", value: "AI-First" }
    ],
    liveLink: "https://exam-arena-two.vercel.app/",
    githubLink: "#", // Placeholder
    image: "/examarena.png"
  },
  {
    name: "PrepOS AI",
    role: "Enterprise-Style AI Career Preparation Operating System",
    problem: "Students use disconnected tools for resume prep, coding, mock interviews, and skill-gap analysis, leading to inefficient career preparation.",
    solution: "A unified AI operating system offering an AI Placement Digital Twin, Mock Simulator, AI Coding IDE, and comprehensive career intelligence tools.",
    positioning: "A unified AI operating system for career preparation.",
    metrics: [
      { label: "AI/Career Capabilities", value: "50+" },
      { label: "Products", value: "2 Major" }
    ],
    liveLink: "https://placement-prep-ai-tau.vercel.app/",
    githubLink: "#", // Placeholder
    image: "/prepos.png"
  },
  {
    name: "Telegram Document Downloader",
    role: "Secure Web-Based Telegram File Extractor",
    problem: "Extracting specific documents from Telegram channels natively can be cumbersome and restricted to the app ecosystem.",
    solution: "A web-based utility featuring secure user authentication to directly access and download Telegram documents through a clean browser interface.",
    positioning: "A secure web utility for Telegram file extraction.",
    metrics: [
      { label: "Auth", value: "Encrypted" },
      { label: "Type", value: "Web Utility" }
    ],
    liveLink: "https://telegram-file-downloader.vercel.app/",
    githubLink: "#", // Placeholder
    image: "/telegram.png"
  }
];

export default function Projects() {
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
          <h2 className={`${styles.title} text-gradient`}>Featured Work</h2>
          <p className={styles.subtitle}>Building intelligent products to solve complex user problems.</p>
        </motion.div>

        <div className={styles.timeline}>
          {projects.map((project, idx) => (
            <motion.div 
              key={project.name}
              className={styles.project}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.visual}>
                <img src={project.image} alt={`${project.name} Preview`} className={styles.projectImage} />
              </div>
              
              <div className={styles.content}>
                <div>
                  <h3 className={styles.projName}>{project.name}</h3>
                  <p className={styles.projRole}>{project.role}</p>
                </div>
                
                <div className={styles.story}>
                  <div className={styles.storyBlock}>
                    <h4>The Problem</h4>
                    <p>{project.problem}</p>
                  </div>
                  <div className={styles.storyBlock}>
                    <h4>The Solution</h4>
                    <p>{project.solution}</p>
                  </div>
                  <div className={styles.storyBlock}>
                    <h4>Product Positioning</h4>
                    <p><em>"{project.positioning}"</em></p>
                  </div>
                </div>

                <div className={styles.metrics}>
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className={styles.metric}>
                      <span className={styles.metricVal}>{metric.value}</span>
                      <span className={styles.metricLabel}>{metric.label}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.actions}>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.primary}`}>
                    Live Demo <ExternalLink size={16} />
                  </a>
                  {project.githubLink !== "#" && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.secondary}`}>
                      View Code <Code size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
