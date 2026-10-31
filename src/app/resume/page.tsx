"use client";

import React from 'react';
import Link from 'next/link';
import { X, Printer, Download, MapPin, Calendar, Phone, Mail } from 'lucide-react';
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
            <span><MapPin size={13} className={styles.icon} /> C-7, Deojhar Colony, Barbil, Keonjhar, Odisha</span>
            <span className={styles.sep}>|</span>
            <span><Calendar size={13} className={styles.icon} /> DOB: 28 April 2006</span>
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
              <a href="https://linkedin.com/in/prakhar-mishra-8aa426423" target="_blank" rel="noopener noreferrer">
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
            AI-driven B.Tech Mechanical Engineering final year student at MMMUT Gorakhpur, leveraging advanced AI developer platforms including Claude, Antigravity, OpenAI Codex, and ChatGPT for AI-powered web development, UI/UX design, and rapid prototyping. Experienced in community outreach, creative event poster design, technical content writing, and electro-mechanical fabrication. Active in SAE (DISCO) and organizing committee for Techsrijan 2025 &amp; 2026.
          </p>
        </section>

        {/*-----------TECHNICAL SKILLS-----------*/}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <div className={styles.skillsBlock}>
            <div className={styles.skillLine}>
              <strong className={styles.skillLabel}>AI Developer Tools:</strong>
              <span> Claude (Anthropic), Antigravity, OpenAI Codex, ChatGPT, Prompt Engineering, Agentic Workflows</span>
            </div>
            <div className={styles.skillLine}>
              <strong className={styles.skillLabel}>AI-Powered Web &amp; UI/UX:</strong>
              <span> AI-Powered Full-Stack Web Development, AI-Assisted UI/UX Design, Rapid Wireframing, Figma AI</span>
            </div>
            <div className={styles.skillLine}>
              <strong className={styles.skillLabel}>Design &amp; Creative Content:</strong>
              <span> Digital Poster Design, AI Image Generation, Technical Content Writing, Event Copywriting</span>
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
              <span className={styles.italicLeft}>Bachelor of Technology (B.Tech) in Mechanical Engineering – <strong>CGPA: 4.18 (Final Year)</strong></span>
              <span className={styles.italicRight}>2023 – 2027</span>
            </div>
            <ul className={styles.bulletList}>
              <li>Focus: Artificial Intelligence Applications, Web Development, Systems Design, Engineering Fabrication.</li>
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

        {/*-----------INTERNSHIP EXPERIENCE-----------*/}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Internship Experience</h2>
          
          <div className={styles.entry}>
            <div className={styles.entryRow}>
              <span className={styles.boldLeft}>Sahara Welfare Foundation (SWF)</span>
              <span className={styles.rightText}>Lucknow / Gorakhpur</span>
            </div>
            <div className={styles.entryRow}>
              <span className={styles.italicLeft}>Social Work Intern (CSR Division) – Cert. No: SWF/2025/1986</span>
              <span className={styles.italicRight}>June 6, 2025 – June 20, 2025</span>
            </div>
            <ul className={styles.bulletList}>
              <li>Promoted the “Stop Single-Use Plastic” campaign and advocated eco-friendly alternatives in community outreach drives.</li>
              <li>Organized cleanliness programs, waste segregation campaigns, and interactive conservation sessions in schools.</li>
              <li>Spearheaded tree plantation initiatives and supported green campus operations, earning CSR leadership recognition.</li>
            </ul>
          </div>
        </section>

        {/*-----------KEY PROJECTS & ENGINEERING PORTFOLIO-----------*/}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Projects &amp; Engineering Portfolio</h2>
          
          <div className={styles.entry}>
            <div className={styles.entryRow}>
              <span className={styles.boldLeft}>
                AI-Powered Career Discovery &amp; Web Platforms <span className={styles.sepPipe}>|</span> <em className={styles.projectTech}>Claude, Antigravity, Codex, Figma, Web</em>
              </span>
              <span className={styles.italicRight}>2025 – 2026</span>
            </div>
            <ul className={styles.bulletList}>
              <li>Built modern, responsive web applications leveraging state-of-the-art AI developer tools (Claude, Antigravity, Codex, ChatGPT) to accelerate end-to-end code generation, component architecture, and automated debugging.</li>
              <li>Created high-fidelity UI/UX layouts utilizing AI design tools, cutting wireframe-to-prototype delivery cycles by 60%.</li>
            </ul>
          </div>

          <div className={styles.entry}>
            <div className={styles.entryRow}>
              <span className={styles.boldLeft}>
                Human-Powered Energy Harvesting Rowing Machine <span className={styles.sepPipe}>|</span> <em className={styles.projectTech}>Mechanical Fabrication, Power Circuits</em>
              </span>
              <span className={styles.italicRight}>6th &amp; 7th Sem (Ongoing)</span>
            </div>
            <ul className={styles.bulletList}>
              <li>Fabricating a human-powered energy harvesting rowing mechanism converting cyclic mechanical strokes into electrical power.</li>
              <li>Engineered step-up transmission via high-ratio sprockets, chain drives, one-way clutch, and permanent magnet DC generator.</li>
            </ul>
          </div>

          <div className={styles.entry}>
            <div className={styles.entryRow}>
              <span className={styles.boldLeft}>
                AI-Assisted Media, Poster &amp; Content Automation System <span className={styles.sepPipe}>|</span> <em className={styles.projectTech}>Generative AI, Prompt Engineering</em>
              </span>
              <span className={styles.italicRight}>2024 – 2025</span>
            </div>
            <ul className={styles.bulletList}>
              <li>Architected an automated content pipeline generating thematic event posters, visual banners, and promotional copy.</li>
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
              <li>Designed creative promotional posters, banners, and digital graphics for diverse events and workshops organized by SAE.</li>
              <li>Authored engaging technical content, notices, event descriptions, and publicity write-ups for the student community.</li>
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
              <li>Active organizing committee member for two consecutive editions (2025 and 2026) of MMMUT’s flagship tech festival.</li>
              <li>Assisted in event publicity, creative media coordination, stage management, and operations across technical tracks for 2,000+ attendees.</li>
            </ul>
          </div>
        </section>

        {/*-----------HOBBIES & PERSONAL INTERESTS-----------*/}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Hobbies &amp; Personal Interests</h2>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.2rem', marginTop: '0.2rem' }}>
            <li style={{ fontSize: '0.78rem', lineHeight: '1.35', marginBottom: '0.2rem' }}>
              <strong>Cricket:</strong> Active cricket player participating in collegiate and local matches; team strategy and match tactics.
            </li>
            <li style={{ fontSize: '0.78rem', lineHeight: '1.35', marginBottom: '0.2rem' }}>
              <strong>PC Gaming:</strong> Passionate about competitive tactical and strategy games, exercising quick decision-making and spatial focus.
            </li>
            <li style={{ fontSize: '0.78rem', lineHeight: '1.35', marginBottom: '0.2rem' }}>
              <strong>Creative Design &amp; AI:</strong> Experimenting with cutting-edge multimodal generative AI, poster aesthetics, and digital media design.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
