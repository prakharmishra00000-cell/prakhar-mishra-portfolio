"use client";

import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import styles from './Resume.module.css';

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={styles.resumePage}>
      <Link href="/" className={styles.closeBtn} aria-label="Close Resume">
        <X size={24} />
      </Link>
      
      <button onClick={handlePrint} className={styles.printBtn}>
        Print / Save PDF
      </button>

      <div className={styles.document}>
        <header className={styles.header}>
          <h1 className={styles.name}>Prakhar Mishra</h1>
          <h2 className={styles.title}>AI Full-Stack Web Developer</h2>
          <div className={styles.contact}>
            <span>MMMUT, Gorakhpur, UP, India</span>
            <span><a href="mailto:prakharmishraflp@gmail.com">prakharmishraflp@gmail.com</a></span>
            <span><a href="tel:+916372843175">+91 6372843175</a></span>
            <span><a href="https://github.com/prakharmishra00000-cell" target="_blank" rel="noopener noreferrer">GitHub</a></span>
            <span><a href="https://www.linkedin.com/in/prakhar-mishra-8aa426423" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
          </div>
        </header>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Professional Summary</h3>
          <p className={styles.summary}>
            Final-year Mechanical Engineering student who successfully expanded into AI-first software development. 
            Passionate about building intelligent digital products where AI meets modern web development. 
            I combine a structured engineering mindset with advanced web architectures, specializing in AI integration, 
            prompt engineering, and rapid product prototyping to solve complex user problems.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Technical Skills</h3>
          <div className={styles.skillGroup}>
            <h4>Artificial Intelligence:</h4>
            <p>AI-powered applications, AI APIs, Prompt Engineering, AI Agent Development, AI product integration</p>
          </div>
          <div className={styles.skillGroup}>
            <h4>Web & Application Dev:</h4>
            <p>Frontend Development, Backend Development, APIs, Database Integration, Authentication, Next.js, React</p>
          </div>
          <div className={styles.skillGroup}>
            <h4>Development Tools:</h4>
            <p>Antigravity, GitHub, Vercel, Render, zen.ai, ChatGPT, Gemini</p>
          </div>
          <div className={styles.skillGroup}>
            <h4>Product Development:</h4>
            <p>SaaS Concepts, UI/UX Design, Career & Education Technology, Automation</p>
          </div>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Featured Projects</h3>
          
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <h4>ExamArena</h4>
              <span className={styles.date}>Live Platform</span>
            </div>
            <div className={styles.role}>AI-Powered Engineering Career & Exam Discovery Platform</div>
            <p>
              A unified career intelligence platform designed to help engineering students navigate over 500+ exams across various sectors and domains.
            </p>
            <ul>
              <li>Architected a multi-dimensional filtering system allowing search by branch, qualification, sector, and salary.</li>
              <li>Integrated AI career guidance capabilities for personalized career roadmaps and exam insights.</li>
              <li>Engineered a highly responsive and performant UI to handle large datasets of career information smoothly.</li>
            </ul>
          </div>

          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <h4>PrepOS AI</h4>
              <span className={styles.date}>Live Platform</span>
            </div>
            <div className={styles.role}>Enterprise-Style AI Career Preparation Operating System</div>
            <p>
              A unified AI operating system bringing together disparate career prep workflows into a single ecosystem with 50+ career capabilities.
            </p>
            <ul>
              <li>Developed an AI Placement Digital Twin and Mock Simulator for technical and behavioral interview preparation.</li>
              <li>Integrated advanced career intelligence tools like Resume & JD Matcher, Skill Gap Radar, and Hiring Pattern Analyzer.</li>
              <li>Implemented comprehensive developer tools including an AI coding environment and technical doubt solver.</li>
            </ul>
          </div>

          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <h4>Telegram Document Downloader</h4>
              <span className={styles.date}>Live Platform</span>
            </div>
            <div className={styles.role}>Secure Web-Based Telegram File Extractor</div>
            <p>
              A web utility featuring secure user authentication to directly access and download Telegram documents through a clean browser interface.
            </p>
            <ul>
              <li>Engineered a secure, encrypted authentication system for user sign-ins and session management.</li>
              <li>Integrated seamless API connections to bypass native app restrictions for document retrieval.</li>
              <li>Built a responsive, dark-mode focused UI for an optimal user extraction experience.</li>
            </ul>
          </div>


        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Experience</h3>
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <h4>Independent Product Developer</h4>
              <span className={styles.date}>Present</span>
            </div>
            <div className={styles.role}>Building Experience Through Products</div>
            <p>
              Rather than traditional internships, I have focused on building end-to-end, real-world technology products. I take ideas from concept to UI, wire up backend logic, integrate state-of-the-art AI capabilities, and deploy production-ready applications. My primary domains of interest include Career Technology, Education Technology, and AI-powered automation workflows.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Education</h3>
          <div className={styles.educationItem}>
            <div>
              <h4>Madan Mohan Malaviya University of Technology (MMMUT)</h4>
              <p>Bachelor of Technology in Mechanical Engineering</p>
            </div>
            <div>
              <span className={styles.date}>Expected Graduation: Final Year</span>
              <p style={{textAlign: 'right', fontSize: '0.85rem', color: '#666'}}>Gorakhpur, UP</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
