"use client";

import { motion } from 'framer-motion';
import { Cpu, Lightbulb, Rocket, Bot, Sparkles, Palette } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
  const pillars = [
    {
      icon: <Bot size={24} />,
      title: "AI-First Web Architecture",
      description: "Leveraging state-of-the-art AI APIs (Gemini, Claude, OpenAI) to build intelligent web apps that process live data and automate complex tasks."
    },
    {
      icon: <Cpu size={24} />,
      title: "Full-Stack Engineering",
      description: "Crafting fast, responsive web applications using Next.js, React 19, TypeScript, and modern backend integrations with clean state management."
    },
    {
      icon: <Palette size={24} />,
      title: "Brand Systems & 8K Visual Design",
      description: "Architecting cohesive design languages, production logo suites, and high-fidelity 8K cyberpunk concept art series with moving marquee displays."
    },
    {
      icon: <Rocket size={24} />,
      title: "Zero-Mock Shipping Velocity",
      description: "Moving swiftly from product idea to interactive UI, authored technical masterbooks, and production deployment on Vercel with meticulous craft."
    }
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.eyebrow}>
            <Sparkles size={14} /> Product Philosophy
          </div>
          <h2 className={`${styles.title} text-gradient`}>About Me</h2>
          <p className={styles.subtitle}>
            Building intelligent, usable digital products at the intersection of generative AI, brand identity systems, and modern web technologies.
          </p>
        </motion.div>

        <div className={styles.mainGrid}>
          {/* Narrative Card */}
          <motion.div 
            className={styles.narrativeCard}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I am a final-year student at <strong>Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur</strong>, specializing in <strong>AI-native full-stack web development</strong>, brand identity architecture, and digital product design.
            </p>
            <p>
              My approach focuses on harnesssing modern AI capabilities—including <strong>multimodal APIs, prompt architecture, and autonomous agent workflows</strong>—combined with high-craft UI/UX, brand identity systems, and an 8K visual art practice.
            </p>
            <div className={styles.highlightQuote}>
              &ldquo;I don&apos;t just study tools; I deploy production software and craft visual universes. Every system I build addresses real user friction with live data, zero mockups, and high visual craft.&rdquo;
            </div>
            <p>
              Over the last two years, I have architected and deployed over six distinct AI-driven applications, published an 8K moving cyberpunk poster series, authored a 400+ page full-stack masterbook, and established an end-to-end shipping velocity that bridges idea to production in record time.
            </p>
            <div className={styles.authorSignature}>
              <div className={styles.authorMeta}>
                <h4>Prakhar Mishra</h4>
                <p>AI Full-Stack Web Developer &bull; MMMUT Gorakhpur (Graduating 2027)</p>
              </div>
            </div>
          </motion.div>

          {/* Differentiator Cards */}
          <motion.div 
            className={styles.diffGrid}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {pillars.map((item, index) => (
              <div key={index} className={styles.diffCard}>
                <div className={styles.diffIcon}>{item.icon}</div>
                <div className={styles.diffContent}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
