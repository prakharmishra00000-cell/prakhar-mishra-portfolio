"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.glow} />
      
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/profile.jpg" alt="Prakhar Mishra" className={styles.profileImage} />
        </motion.div>
        
        <motion.h1 
          className={`${styles.title} text-gradient`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Prakhar Mishra
        </motion.h1>
        
        <motion.h2 
          className={`${styles.subtitle} text-gradient-accent`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          AI Full-Stack Web Developer
        </motion.h2>
        
        <motion.p 
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Building intelligent digital products where AI meets modern web development.
        </motion.p>
        
        <motion.div 
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#projects" className={`${styles.btn} ${styles.primary}`}>
            View My Work <ArrowRight size={18} />
          </a>
          <a href="mailto:prakharmishraflp@gmail.com" className={`${styles.btn} ${styles.secondary}`}>
            Let's Work Together <Mail size={18} />
          </a>
          <Link href="/resume" className={`${styles.btn} ${styles.tertiary}`}>
            View Resume <Download size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
