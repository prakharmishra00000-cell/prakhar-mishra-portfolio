"use client";

import { motion } from 'framer-motion';
import { Cpu, Lightbulb, Rocket, Workflow, Compass, CheckCircle2, Award } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
  const pillars = [
    {
      icon: <Cpu size={24} />,
      title: "AI-Native Engineering",
      description: "Harnessing LLM APIs, autonomous prompt chains, and AI development systems to achieve 10x engineering throughput without sacrificing reliability."
    },
    {
      icon: <Workflow size={24} />,
      title: "Mechanical Systems Mindset",
      description: "Transferring thermodynamics, tolerance design, and rigorous system decomposition from MMMUT into scalable distributed web architecture."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Zero-Mock Product Instinct",
      description: "Building production software that delivers actual value—real-time scraping, live indexing, and direct value for end users rather than hollow vanity demos."
    },
    {
      icon: <Rocket size={24} />,
      title: "Rapid Full-Stack Delivery",
      description: "From concept and wireframe to high-converting UI, responsive logic, database bindings, and production deployment on Vercel in days, not months."
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
            <Compass size={14} /> Systems Philosophy
          </div>
          <h2 className={`${styles.title} text-gradient`}>The Engineering Background</h2>
          <p className={styles.subtitle}>
            Where core mechanical engineering rigor converges with state-of-the-art AI software architecture.
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
              I am a final-year Mechanical Engineering student at <strong>Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur</strong>, who expanded beyond traditional mechanical CAD/thermodynamics into the frontier of <strong>AI-native full-stack software development</strong>.
            </p>
            <p>
              My mechanical background taught me that complex machines succeed through <strong>fault tolerance, modularity, and stress analysis</strong>. When applied to software engineering, this produces clean architecture, hardened error boundaries, and performant data pipelines.
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
                <p>B.Tech Mechanical Engineering (Final Year) &bull; MMMUT Gorakhpur</p>
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
