"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, BookOpen } from 'lucide-react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  const stats = [
    { value: "6+", label: "Production Web Applications" },
    { value: "7", label: "Authored Masterbooks & Handbooks" },
    { value: "MMMUT", label: "B.Tech (Graduating 2027)" },
    { value: "100%", label: "Live Deployed on Vercel" },
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
          <span>Final-Year Student &bull; MMMUT Gorakhpur</span>
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
          <div className={styles.avatarRoleTag}>AI Web Dev</div>
        </motion.div>
        
        {/* Simplified Headings */}
        <motion.h1 
          className={`${styles.title} text-gradient`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Building Intelligent Web Products with AI
        </motion.h1>
        
        <motion.h2 
          className={`${styles.subtitle} text-gradient-accent`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          Prakhar Mishra &mdash; AI Full-Stack Web Developer
        </motion.h2>
        
        <motion.p 
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Final-year Mechanical Engineering student at MMMUT Gorakhpur building AI-powered web applications and usable digital products.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <a href="#projects" className={`${styles.btn} ${styles.primary}`}>
            View My Work <ArrowRight size={17} />
          </a>
          <a href="#books" className={`${styles.btn} ${styles.secondary}`}>
            <BookOpen size={16} /> View Books (PDF)
          </a>
          <a href="#agent-terminal" className={`${styles.btn} ${styles.secondary}`}>
            <Terminal size={16} /> Live AI Twin
          </a>
          <Link href="/resume" className={`${styles.btn} ${styles.tertiary}`}>
            <Download size={16} /> Resume
          </Link>
        </motion.div>

        {/* Live Metrics Ribbon - 100% Real Prakhar Credentials */}
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
