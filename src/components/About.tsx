"use client";

import { motion } from 'framer-motion';
import { Cpu, Lightbulb, Rocket, Workflow } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
  const differentiators = [
    {
      icon: <Cpu size={24} />,
      title: "AI-First Development",
      description: "Leveraging modern AI tools and APIs to accelerate research, development, and product iteration."
    },
    {
      icon: <Workflow size={24} />,
      title: "Cross-Domain Engineering",
      description: "Combining Mechanical Engineering's structured problem-solving with advanced software architecture."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Product Thinking",
      description: "Focusing on solving real user problems rather than building technology for technology's sake."
    },
    {
      icon: <Rocket size={24} />,
      title: "Rapid Prototyping",
      description: "Moving swiftly from idea to UI, application logic, AI integration, and final deployment."
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
          <h2 className={`${styles.title} text-gradient`}>The Journey</h2>
        </motion.div>

        <div className={styles.content}>
          <motion.div 
            className={styles.text}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p>
              I am a final-year Mechanical Engineering student at MMMUT, Gorakhpur, who expanded beyond my core discipline to build <strong>AI-powered software products</strong> using modern web technologies.
            </p>
            <p>
              My engineering background provided a strong foundation in structured problem solving and systems thinking. I applied these principles to software, transitioning into an AI Full-Stack Web Developer. 
            </p>
            <p>
              I don't simply learn technologies—<strong>I use them to build usable digital products.</strong> My work focuses on the intersection of AI, prompt engineering, and modern web development to create intelligent applications.
            </p>
          </motion.div>

          <motion.div 
            className={styles.differentiator}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className={styles.diffTitle}>Why My Approach Is Different</h3>
            <ul className={styles.diffList}>
              {differentiators.map((item, index) => (
                <li key={index} className={styles.diffItem}>
                  <div className={styles.diffIcon}>{item.icon}</div>
                  <div className={styles.diffText}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
