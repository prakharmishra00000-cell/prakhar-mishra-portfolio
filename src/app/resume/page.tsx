"use client";

import React from 'react';
import Link from 'next/link';
import { X, Printer, Download, MapPin, Globe, Cake, Phone, Mail } from 'lucide-react';
import styles from './Resume.module.css';

const LinkedinIcon = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={styles.resumePage}>
      <Link href="/" className={styles.closeBtn} aria-label="Close Resume">
        <X size={22} />
      </Link>
      
      <div className={styles.topActions}>
        <button onClick={handlePrint} className={styles.actionBtn}>
          <Printer size={16} /> Print Resume
        </button>
        <a href="/resume.pdf" download="Prakhar_Mishra_Resume.pdf" className={styles.actionBtnPrimary}>
          <Download size={16} /> Download PDF
        </a>
      </div>

      <div className={styles.sheet}>
        {/*----------HEADING----------*/}
        <header className={styles.header}>
          <h1 className={styles.name}>Prakhar Mishra</h1>
          
          <div className={styles.contactRow}>
            <span><MapPin size={13} className={styles.icon} /> Gorakhpur, UP</span>
            <span className={styles.sep}>|</span>
            <span>
              <Globe size={13} className={styles.icon} />
              <a href="https://prakhar-mishra-portfolio.vercel.app" target="_blank" rel="noopener noreferrer">
                prakhar-mishra-portfolio.vercel.app
              </a>
            </span>
            <span className={styles.sep}>|</span>
            <span><Cake size={13} className={styles.icon} /> DOB: 28 April 2006</span>
          </div>

          <div className={styles.contactRow}>
            <span>
              <Phone size={13} className={styles.icon} />
              <a href="tel:+916372843175">+91-6372843175</a>
            </span>
            <span className={styles.sep}>|</span>
            <span>
              <Mail size={13} className={styles.icon} />
              <a href="mailto:prakharmishra00000@gmail.com">prakharmishra00000@gmail.com</a>
            </span>
            <span className={styles.sep}>|</span>
            <span>
              <LinkedinIcon size={13} />
              <a href="https://www.linkedin.com/in/prakhar-mishra-8aa426423" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/prakhar-mishra-8aa426423
              </a>
            </span>
            <span className={styles.sep}>|</span>
            <span>
              <GithubIcon size={13} />
              <a href="https://github.com/prakharmishra00000-cell" target="_blank" rel="noopener noreferrer">
                github.com/prakharmishra00000-cell
              </a>
            </span>
          </div>
        </header>

        {/*-----------PROFESSIONAL SUMMARY-----------*/}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Professional Summary</h2>
          <p className={styles.paragraph}>
            AI Full-Stack Web Developer and final-year B.Tech student at MMMUT Gorakhpur, combining systems engineering principles with modern web technologies to architect intelligent digital products. Leverages state-of-the-art AI developer platforms (Claude, Antigravity, Codex, ChatGPT, Gemini) to build production-ready applications, live API aggregation engines, and responsive UI/UX. Deployed multiple live platforms on Vercel with a focus on product thinking and rapid iteration.
          </p>
        </section>

        {/*-----------TECHNICAL SKILLS-----------*/}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <div className={styles.skillsBlock}>
            <div className={styles.skillLine}>
              <strong className={styles.skillLabel}>AI Developer Tools:</strong>
              <span> Claude (Anthropic), Antigravity, OpenAI Codex, ChatGPT, Google Gemini, Prompt Engineering, Agentic Workflows</span>
            </div>
            <div className={styles.skillLine}>
              <strong className={styles.skillLabel}>Web &amp; Application Dev:</strong>
              <span> Next.js, React, JavaScript (ES6+), Python, HTML5, CSS3, FastAPI, REST APIs, Database Integration</span>
            </div>
            <div className={styles.skillLine}>
              <strong className={styles.skillLabel}>Deployment &amp; Platforms:</strong>
              <span> Git, GitHub, Vercel, Render, RapidAPI, Linux/Bash, Serverless Endpoints</span>
            </div>
            <div className={styles.skillLine}>
              <strong className={styles.skillLabel}>Product &amp; Creative:</strong>
              <span> SaaS Concepts, Responsive UI/UX Design, Figma AI, Digital Poster Design, Technical Writing</span>
            </div>
          </div>
        </section>

        {/*-----------EDUCATION-----------*/}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          
          <div className={styles.entry}>
            <div className={styles.entryRow}>
              <span className={styles.boldLeft}>Madan Mohan Malaviya University of Technology (MMMUT)</span>
              <span className={styles.rightText}>Gorakhpur, UP</span>
            </div>
            <div className={styles.entryRow}>
              <span className={styles.italicLeft}>Bachelor of Technology (B.Tech) – <strong>CGPA: 4.18</strong> (Final Year)</span>
              <span className={styles.italicRight}>2023 – 2027</span>
            </div>
            <ul className={styles.bulletList}>
              <li><strong>Focus:</strong> Artificial Intelligence Applications, Web Development, Systems Architecture, Engineering Design.</li>
            </ul>
          </div>

          <div className={styles.entry}>
            <div className={styles.entryRow}>
              <span className={styles.boldLeft}>Gayatri Shiksha Niketan</span>
              <span className={styles.rightText}>Jamshedpur, Jharkhand</span>
            </div>
            <div className={styles.entryRow}>
              <span className={styles.italicLeft}>Senior Secondary School Certificate (Class XII) – <strong>78%</strong></span>
              <span className={styles.italicRight}>2023</span>
            </div>
            <ul className={styles.bulletList}>
              <li>Physics, Chemistry, Mathematics, Computer Science, English.</li>
            </ul>
          </div>

          <div className={styles.entry}>
            <div className={styles.entryRow}>
              <span className={styles.boldLeft}>O.P. Jindal School</span>
              <span className={styles.rightText}>Odisha</span>
            </div>
            <div className={styles.entryRow}>
              <span className={styles.italicLeft}>Secondary School Examination (Class X) – <strong>93.2%</strong></span>
              <span className={styles.italicRight}>2021</span>
            </div>
            <ul className={styles.bulletList}>
              <li>Academic Distinction with strong aptitude in Mathematics, Science, and Information Technology.</li>
            </ul>
          </div>
        </section>

        {/*-----------EXPERIENCE-----------*/}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          
          <div className={styles.entry}>
            <div className={styles.entryRow}>
              <span className={styles.boldLeft}>Independent AI Product Developer</span>
              <span className={styles.rightText}>Remote / Gorakhpur, UP</span>
            </div>
            <div className={styles.entryRow}>
              <span className={styles.italicLeft}>AI-Powered Web Applications &amp; Full-Stack Development</span>
              <span className={styles.italicRight}>2024 – Present</span>
            </div>
            <ul className={styles.bulletList}>
              <li>Architected and deployed 5+ production web applications on Vercel, integrating multimodal AI models, APIs, and responsive frontends.</li>
              <li>Engineered live API aggregation pipelines, automated scraping fallbacks, and real-time LLM streaming for end-user tools.</li>
            </ul>
          </div>
        </section>

        {/*-----------KEY PROJECTS & ENGINEERING PORTFOLIO-----------*/}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Projects &amp; Engineering Portfolio</h2>
          
          <div className={styles.entry}>
            <div className={styles.entryRow}>
              <span className={styles.boldLeft}>
                CareerHub AI <span className={styles.sepPipe}>|</span> <em className={styles.projectTech}>Next.js, RapidAPI JSearch, Vercel, AI Search</em>
              </span>
              <span className={styles.italicRight}>2025 – 2026</span>
            </div>
            <ul className={styles.bulletList}>
              <li>Architected a real-time job discovery engine aggregating live opportunities from 9+ sources (LinkedIn, Indeed, Glassdoor, ZipRecruiter) with 0% mock data and direct application access across 40+ engineering degrees.</li>
              <li>Indexed 50,000+ live opportunities with multi-source filtering, zero-auth access, and high-performance serverless endpoints.</li>
            </ul>
          </div>

          <div className={styles.entry}>
            <div className={styles.entryRow}>
              <span className={styles.boldLeft}>
                ExamIntel <span className={styles.sepPipe}>|</span> <em className={styles.projectTech}>Google Gemini AI, React, Next.js, Vercel</em>
              </span>
              <span className={styles.italicRight}>2025 – 2026</span>
            </div>
            <ul className={styles.bulletList}>
              <li>Built an enterprise-grade 17-feature exam intelligence platform featuring real-time Exam Comparison, Prerequisite Dependency Mapping, Personalized Question Paper Generation, and interactive AI mentoring via Google Gemini streaming.</li>
            </ul>
          </div>

          <div className={styles.entry}>
            <div className={styles.entryRow}>
              <span className={styles.boldLeft}>
                Nexron AI &amp; PrepOS AI <span className={styles.sepPipe}>|</span> <em className={styles.projectTech}>Full-Stack, Adaptive Learning Engine, SaaS Architecture</em>
              </span>
              <span className={styles.italicRight}>2025 – 2026</span>
            </div>
            <ul className={styles.bulletList}>
              <li>Created an adaptive AI roadmap engine with dynamic schedule replanning based on availability, milestone tracking, and mentoring.</li>
              <li>Developed an enterprise career prep OS with 50+ capabilities including AI Placement Digital Twin, Mock Simulator, and Coding IDE.</li>
            </ul>
          </div>

          <div className={styles.entry}>
            <div className={styles.entryRow}>
              <span className={styles.boldLeft}>
                Telegram Document Downloader AI <span className={styles.sepPipe}>|</span> <em className={styles.projectTech}>Google Gemini AI, Python, FastAPI, Telethon, React, Vercel</em>
              </span>
              <span className={styles.italicRight}>2025 – 2026</span>
            </div>
            <ul className={styles.bulletList}>
              <li>Architected an AI-powered document intelligence and extractor utility integrating official Telegram MTProto APIs with persistent encrypted session state and multi-user authentication.</li>
              <li>Integrated Google Gemini for automated document summarization, topic extraction, and semantic search across channel files.</li>
            </ul>
          </div>
        </section>

        {/*-----------EXTRACURRICULAR ACTIVITIES & LEADERSHIP-----------*/}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Extracurricular Activities &amp; Leadership</h2>
          
          <div className={styles.entry}>
            <div className={styles.entryRow}>
              <span className={styles.boldLeft}>Society of Automotive Engineers (SAE)</span>
              <span className={styles.rightText}>Collegiate Chapter</span>
            </div>
            <div className={styles.entryRow}>
              <span className={styles.italicLeft}>Active Member – DISCO Subdivision</span>
              <span className={styles.italicRight}>2024 – Present</span>
            </div>
            <ul className={styles.bulletList}>
              <li>Designed promotional posters, banners, and digital graphics; authored technical content and publicity notices for student events.</li>
            </ul>
          </div>

          <div className={styles.entry}>
            <div className={styles.entryRow}>
              <span className={styles.boldLeft}>Techsrijan (Annual Techno-Management Fest)</span>
              <span className={styles.rightText}>MMMUT Gorakhpur</span>
            </div>
            <div className={styles.entryRow}>
              <span className={styles.italicLeft}>Event Organizing Committee Member (Techsrijan 2025 &amp; Techsrijan 2026)</span>
              <span className={styles.italicRight}>2025 – 2026</span>
            </div>
            <ul className={styles.bulletList}>
              <li>Coordinated event publicity, creative media, stage management, and operations across technical tracks for 2,000+ attendees.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
