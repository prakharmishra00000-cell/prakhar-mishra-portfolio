"use client";

import { motion } from 'framer-motion';
import { Bot, Code2, Wrench, Layers } from 'lucide-react';
import styles from './Skills.module.css';

const skillCategories = [
  {
    title: "Artificial Intelligence",
    icon: <Bot size={24} />,
    skills: [
      "AI-powered applications",
      "AI APIs",
      "Prompt Engineering",
      "AI Agent Development",
      "AI-assisted development",
      "AI product integration"
    ]
  },
  {
    title: "Web & Application Dev",
    icon: <Code2 size={24} />,
    skills: [
      "Frontend Development",
      "Backend Development",
      "APIs",
      "Database Integration",
      "Authentication",
      "Deployment",
      "Responsive Web Design"
    ]
  },
  {
    title: "Development Tools",
    icon: <Wrench size={24} />,
    skills: [
      "Antigravity",
      "GitHub",
      "Vercel",
      "Render",
      "zen.ai",
      "ChatGPT",
      "Gemini"
    ]
  },
  {
    title: "Product Development",
    icon: <Layers size={24} />,
    skills: [
      "SaaS Concepts",
      "AI Product Development",
      "Web Applications",
      "Career Technology",
      "Education Technology",
      "Automation",
      "AI Integration"
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
            <Wrench size={14} /> Technical Arsenal
          </div>
          <h2 className={`${styles.title} text-gradient`}>Technical Skills</h2>
          <p className={styles.subtitle}>
            The tools, frameworks, and technologies I use to build intelligent web applications.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrap}>{category.icon}</div>
                <div>
                  <h3 className={styles.cardTitle}>{category.title}</h3>
                </div>
              </div>

              <div className={styles.pillContainer}>
                {category.skills.map((skill) => (
                  <span key={skill} className={styles.skillPill}>
                    {skill}
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
