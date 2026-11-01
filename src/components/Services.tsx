"use client";

import { motion } from 'framer-motion';
import { 
  Compass, 
  PenTool, 
  Code, 
  Rocket, 
  Workflow, 
  Cpu, 
  Database, 
  Layers, 
  ShieldCheck, 
  Layout, 
  BookOpen 
} from 'lucide-react';
import styles from './Services.module.css';

const workflowSteps = [
  { 
    step: "01",
    icon: <Compass size={22} />, 
    title: "Problem Discovery & Planning", 
    desc: "Analyze the core user problem, identify functional requirements, and plan the system structure." 
  },
  { 
    step: "02",
    icon: <PenTool size={22} />, 
    title: "Architecture & Interface Design", 
    desc: "Design responsive user interfaces, structured workflows, and clean application layouts." 
  },
  { 
    step: "03",
    icon: <Code size={22} />, 
    title: "Application Development", 
    desc: "Build modern web applications with responsive design, dynamic data handling, and AI functionality." 
  },
  { 
    step: "04",
    icon: <Rocket size={22} />, 
    title: "Testing & Production Deployment", 
    desc: "Test usability, responsiveness across devices, and deploy live to production hosting environments." 
  }
];

const capabilities = [
  {
    icon: <Cpu size={26} />,
    title: "AI-Powered Web Applications",
    desc: "Building interactive web applications that integrate artificial intelligence to solve complex search, career, and learning challenges."
  },
  {
    icon: <Database size={26} />,
    title: "Real-Time Data Aggregation",
    desc: "Creating web discovery engines that collect, organize, and present live opportunities from multiple sources with zero mock data."
  },
  {
    icon: <Layers size={26} />,
    title: "Full-Stack Web Development",
    desc: "Designing and developing complete, responsive web applications from user interface to database integration and user authentication."
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "Web Utilities & Automation",
    desc: "Building smart tools and utilities that automate repetitive workflows, file downloads, and data organization."
  },
  {
    icon: <Layout size={26} />,
    title: "Responsive UI/UX Design",
    desc: "Crafting modern, aesthetic, dark-themed user interfaces that provide intuitive navigation and seamless experiences across desktop and mobile."
  },
  {
    icon: <BookOpen size={26} />,
    title: "Technical Writing & Guides",
    desc: "Authoring comprehensive engineering handbooks and career encyclopedias that break down complex technical topics into actionable guides."
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
            A structured development process taking ideas from initial concepts to live, deployed web applications.
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

        {/* Core Offerings Grid - Clean descriptions only */}
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
