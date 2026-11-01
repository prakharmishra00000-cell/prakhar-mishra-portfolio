"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Terminal, Sparkles, BookOpen, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  const stats = [
    { value: "6+", label: "Production AI Platforms" },
    { value: "50K+", label: "Opportunities Indexed" },
    { value: "500+", label: "Exams & Systems Mapped" },
    { value: "100%", label: "Full-Stack Deployment Rate" },
  ];

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.auroraGlow} />
      <div className={styles.secondaryGlow} />
      
      <div className={styles.content}>
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.badgeRow}
        >
          <span className="pulse-dot" />
          <span>Final-Year Systems Engineer &bull;</span>
          <span className={styles.badgeAccent}>Architecting AI-Native Web Products</span>
        </motion.div>

        {/* Profile Avatar with Radial Glow Ring */}
        <motion.div
          className={styles.avatarContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={styles.avatarGlowRing} />
          <img 
            src="/profile.jpg" 
            alt="Prakhar Mishra" 
            className={styles.profileImage} 
          />
          <div className={styles.avatarRoleTag}>AI &bull; Full-Stack</div>
        </motion.div>
        
        {/* Main Headings */}
        <motion.h1 
          className={`${styles.title} text-gradient`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Engineering Intelligent Digital Products With Generative AI
        </motion.h1>
        
        <motion.h2 
          className={`${styles.subtitle} text-gradient-accent`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          Prakhar Mishra &mdash; AI Full-Stack Developer &amp; Systems Builder
        </motion.h2>
        
        <motion.p 
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Translating structured engineering discipline from MMMUT Gorakhpur into production-grade AI platforms. 
          Specialized in Next.js, real-time data pipelines, intelligent agents, and high-velocity product execution.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <a href="#projects" className={`${styles.btn} ${styles.primary}`}>
            Explore Featured Systems <ArrowRight size={18} />
          </a>
          <a href="#agent-terminal" className={`${styles.btn} ${styles.secondary}`}>
            <Terminal size={17} /> Test AI Assistant
          </a>
          <Link href="/resume" className={`${styles.btn} ${styles.tertiary}`}>
            <Download size={17} /> View Technical Resume
          </Link>
          <Link href="/book" className={`${styles.btn} ${styles.tertiary}`}>
            <BookOpen size={17} /> Full-Stack Book
          </Link>
        </motion.div>

        {/* Live Metrics Ribbon */}
        <motion.div 
          className={styles.statsBar}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className={styles.statItem}>
              <div className={`${styles.statValue} text-gradient-glow`}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
