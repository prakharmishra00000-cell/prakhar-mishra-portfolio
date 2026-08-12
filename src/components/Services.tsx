"use client";

import { motion } from 'framer-motion';
import { Lightbulb, PenTool, Code, Cpu, Database, CheckCircle, Rocket, RefreshCw, Layout, Smartphone, Workflow } from 'lucide-react';
import styles from './Services.module.css';

const workflow = [
  { icon: <Lightbulb size={24} />, title: "Understand", desc: "Understand the problem, users and desired outcome." },
  { icon: <PenTool size={24} />, title: "Architect", desc: "Plan the product structure, features and technical workflow." },
  { icon: <Code size={24} />, title: "Generate", desc: "Use AI-assisted development to accelerate implementation." },
  { icon: <Cpu size={24} />, title: "Integrate", desc: "Connect APIs, AI models, databases and application logic." },
  { icon: <CheckCircle size={24} />, title: "Validate", desc: "Test functionality, responsiveness, usability and edge cases." },
  { icon: <Rocket size={24} />, title: "Deploy", desc: "Move the product into a production-ready environment." },
  { icon: <RefreshCw size={24} />, title: "Iterate", desc: "Continuously improve the product based on feedback." }
];

const services = [
  {
    icon: <Cpu size={32} />,
    title: "AI-Powered Websites",
    desc: "Modern websites enhanced with AI functionality to create intelligent user experiences."
  },
  {
    icon: <Database size={32} />,
    title: "AI Web Applications",
    desc: "Interactive applications powered by AI models and APIs for complex data processing."
  },
  {
    icon: <Layout size={32} />,
    title: "SaaS Development",
    desc: "Building scalable SaaS-style web products from concept to deployment."
  },
  {
    icon: <Smartphone size={32} />,
    title: "Web Application Development",
    desc: "End-to-end modern web applications built for speed, SEO, and user retention."
  },
  {
    icon: <PenTool size={32} />,
    title: "Website Redesign",
    desc: "Transforming outdated websites into modern, responsive digital experiences."
  }
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        
        <div className={styles.philosophy}>
          <motion.div 
            className={styles.header}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`${styles.title} text-gradient`}>From Idea to Product</h2>
            <p className={styles.subtitle}>My AI-First Development Workflow</p>
          </motion.div>

          <div className={styles.workflow}>
            {workflow.map((step, idx) => (
              <motion.div 
                key={step.title}
                className={styles.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className={styles.stepNumber}>0{idx + 1}</div>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            className={styles.closing}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            "I don't just build pages. I build usable digital products."
          </motion.p>
        </div>

        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`${styles.title} text-gradient`}>What I Can Build</h2>
          <p className={styles.subtitle}>Services I offer to turn ideas into reality.</p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, idx) => (
            <motion.div 
              key={service.title}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
