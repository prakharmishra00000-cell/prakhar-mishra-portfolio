"use client";

import { motion } from 'framer-motion';
import { BookOpen, Download, FileText, Code2, Layers, Cpu, Sparkles, Bot } from 'lucide-react';
import styles from './Books.module.css';

interface BookItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  pages: string;
  format: string;
  icon: React.ReactNode;
  filePath: string;
  fileName: string;
}

const booksList: BookItem[] = [
  {
    id: "ai-engineer-roadmap",
    title: "AI Engineer Career Roadmap & Strategy Guide (2026–2030)",
    badge: "AI Engineering",
    description: "An actionable, strategic career roadmap for aspiring and modern AI Engineers covering generative AI fundamentals, prompt engineering architectures, LLM API integration, autonomous agent frameworks, and enterprise full-stack deployment.",
    pages: "Roadmap Edition",
    format: "PDF Document",
    icon: <Bot size={24} />,
    filePath: "/books/ai-engineer-career-roadmap.pdf",
    fileName: "AI_Engineer_Career_Roadmap_2026_2030.pdf"
  },
  {
    id: "fullstack-masterbook",
    title: "Full Stack Web Development Complete Masterbook",
    badge: "Full-Stack Web & AI",
    description: "Comprehensive 400+ page curriculum spanning 20 volumes and 81 modules: foundational computer architecture, modern JavaScript/TypeScript, React 19 internals, Next.js App Router, distributed database systems, and AI developer tooling.",
    pages: "400+ Pages (20 Vols)",
    format: "PDF Document",
    icon: <BookOpen size={24} />,
    filePath: "/books/fullstack-web-development-masterbook.pdf",
    fileName: "Full_Stack_Web_Development_Complete_Masterbook.pdf"
  },
  {
    id: "cse-career-guide",
    title: "Computer Science & Engineering (CSE) Career Intelligence Encyclopedia",
    badge: "Tech Careers",
    description: "An exhaustive career encyclopedia mapping 13 technological divisions (Software Engineering, Cloud & DevOps, AI/ML, Data Engineering, Cyber Security, Web3, FinTech), compensation benchmarks, and structured career ladders from junior engineer to engineering director.",
    pages: "500+ Pages",
    format: "PDF Document (24MB)",
    icon: <Code2 size={24} />,
    filePath: "/books/cse-career-guide.pdf",
    fileName: "Computer_Science_Engineering_Career_Intelligence_Encyclopedia.pdf"
  },
  {
    id: "mechanical-engineering-handbook",
    title: "The Ultimate Mechanical Engineering Masterbook & Handbook",
    badge: "Core Engineering",
    description: "A comprehensive professional handbook deconstructing core mechanical engineering principles: thermodynamics, fluid mechanics, machine design, strength of materials, and systems dynamics, bridging fundamental equations to modern industrial applications.",
    pages: "Handbook Edition",
    format: "PDF Document",
    icon: <Cpu size={24} />,
    filePath: "/books/mechanical-engineering-handbook.pdf",
    fileName: "Ultimate_Mechanical_Engineering_Masterbook.pdf"
  },
  {
    id: "mechanical-career-guide",
    title: "Mechanical Engineering Career Intelligence Encyclopedia",
    badge: "Industry & Core Careers",
    description: "The definitive guide for mechanical engineers detailing modern industry transitions: automotive, aerospace, robotics, HVAC, renewable energy, and corporate engineering trajectories with actionable skill matrices and salary analytics.",
    pages: "Career Guide",
    format: "PDF Document",
    icon: <Layers size={24} />,
    filePath: "/books/mechanical-career-guide.pdf",
    fileName: "Mechanical_Engineering_Career_Intelligence_Encyclopedia.pdf"
  },
  {
    id: "ssc-cgl-guide",
    title: "SSC CGL 2027 Master Preparation Handbook",
    badge: "Civil Examinations",
    description: "A structured, analytical handbook designed for competitive public examinations, breaking down quantitative aptitude, logical reasoning, general studies, and tier-specific strategic preparation frameworks.",
    pages: "Curated Guide",
    format: "PDF Document",
    icon: <FileText size={24} />,
    filePath: "/books/ssc-cgl-2027-guide.pdf",
    fileName: "SSC_CGL_2027_Master_Preparation_Handbook.pdf"
  },
  {
    id: "supply-chain-management",
    title: "Mechanical Supply Chain Management (SCM) Complete Guide",
    badge: "Operations & Logistics",
    description: "A rigorous deep dive into industrial supply chain engineering: procurement logistics, inventory optimization, Just-In-Time (JIT) manufacturing, ERP systems integration, and global distribution network resilience.",
    pages: "Operations Guide",
    format: "PDF Document",
    icon: <Layers size={24} />,
    filePath: "/books/supply-chain-management-guide.pdf",
    fileName: "Mechanical_Supply_Chain_Management_Complete_Guide.pdf"
  },
  {
    id: "motion-graphics-book",
    title: "Motion Graphics & Visual Systems Masterbook",
    badge: "UI/UX & Creative Engineering",
    description: "An interactive master guide covering visual rhythm, keyframe interpolation, kinetic typography, 3D composition, and UI motion design principles for high-engagement modern software interfaces.",
    pages: "Visual Systems Guide",
    format: "PDF Document",
    icon: <Sparkles size={24} />,
    filePath: "/books/motion-graphics-masterbook.pdf",
    fileName: "Motion_Graphics_Visual_Systems_Masterbook.pdf"
  }
];

export default function Books() {
  return (
    <section id="books" className={styles.booksSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.eyebrow}>
            <BookOpen size={14} /> Author &bull; Publications
          </div>
          <h2 className={`${styles.title} text-gradient`}>Authored Technical Masterbooks &amp; Handbooks</h2>
          <p className={styles.subtitle}>
            Eight comprehensive technical handbooks, AI roadmaps, and career encyclopedias authored to bridge engineering principles, generative AI, and modern software development. All available for direct PDF download.
          </p>
        </motion.div>

        <div className={styles.booksGrid}>
          {booksList.map((book, idx) => (
            <motion.div 
              key={book.id}
              className={styles.bookCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div className={styles.bookTop}>
                <div className={styles.iconWrap}>{book.icon}</div>
                <span className={styles.badge}>{book.badge}</span>
              </div>

              <h3 className={styles.bookTitle}>{book.title}</h3>
              <p className={styles.bookDesc}>{book.description}</p>

              <div className={styles.metaRow}>
                <span className={styles.metaItem}><strong>Scope:</strong> {book.pages}</span>
                <span className={styles.metaItem}><strong>Format:</strong> {book.format}</span>
              </div>

              <div className={styles.actions}>
                <a 
                  href={book.filePath} 
                  download={book.fileName}
                  className={styles.readBtn}
                  aria-label={`Download ${book.title} PDF`}
                >
                  <Download size={16} /> Download PDF
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
