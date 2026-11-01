"use client";

import { motion } from 'framer-motion';
import { Cpu, Lightbulb, Rocket, Bot, Sparkles } from 'lucide-react';
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
      icon: <Lightbulb size={24} />,
      title: "Zero-Mock Product Instinct",
      description: "Focusing on solving actual user problems with real-time indexing, direct actions, and usable tools rather than static or mock prototypes."
    },
    {
      icon: <Rocket size={24} />,
      title: "Rapid Shipping Velocity",
      description: "Moving swiftly from product idea to interactive UI, API integration, and production deployment on Vercel with high craft and attention to detail."
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
            Building intelligent, usable digital products at the intersection of generative AI and modern web technologies.
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
              I am a final-year student at <strong>Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur</strong>, specializing in <strong>AI-native full-stack web development</strong> and modern software products.
            </p>
            <p>
              My approach focuses on harnessing modern AI capabilities—including <strong>multimodal APIs, prompt architecture, and intelligent agent workflows</strong>—to build responsive, production-ready web applications that solve real-world problems.
            </p>
            <div className={styles.highlightQuote}>
              &ldquo;I don&apos;t just study tools; I deploy production software. Every system I build addresses real user friction with live data, zero mockups, and modern AI intelligence.&rdquo;
            </div>
            <p>
              Over the last two years, I have architected and deployed over six distinct AI-driven applications, compiled a 400+ page full-stack masterbook, and established an end-to-end shipping velocity that bridges idea to production in record time.
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
