"use client";

import { motion } from 'framer-motion';
import { Play, Info, Download, Terminal, BookOpen, Volume2, Sparkles, Check } from 'lucide-react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  const stats = [
    { value: "6+", label: "Original Series (Web Apps)" },
    { value: "8", label: "Authored Masterbooks & Handbooks" },
    { value: "MMMUT '27", label: "Final-Year B.Tech Graduating" },
    { value: "100%", label: "Live Deployed on Vercel" },
  ];

  return (
    <section id="home" className={styles.hero}>
      {/* Hotstar Disney+ Cinematic Atmospheric Glow & Deep Blue Backdrops */}
      <div className={styles.cinemaBackdropGlow} />
      <div className={styles.vignetteOverlay} />
      
      <div className={styles.fullHdContainer}>
        {/* Left Column: Hotstar Hero Billboard Typography & CTAs */}
        <div className={styles.billboardContent}>
          {/* Hotstar Specials Brand Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.netflixBadgeRow}
          >
            <span className={styles.nBadgeLetter}>★</span>
            <span className={styles.nBadgeText}>HOTSTAR SPECIALS &bull; FULL-STACK AI PRODUCTION</span>
          </motion.div>

          {/* Title & Headline */}
          <motion.h1 
            className={styles.cinemaTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            PRAKHAR MISHRA
          </motion.h1>
          
          <motion.div 
            className={styles.cinemaSubtitleRow}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className={styles.matchScore}>★ Top Rated</span>
            <span className={styles.ratingBadge}>U/A 16+</span>
            <span className={styles.badgeSeason}>Graduating 2027</span>
            <span className={styles.hdPill}>4K DOLBY VISION</span>
            <span className={styles.hdPill}>DOLBY ATMOS</span>
          </motion.div>

          <motion.h2 
            className={styles.roleHeadline}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            AI Full-Stack Systems Engineer &amp; Product Architect
          </motion.h2>
          
          <motion.p 
            className={styles.synopsis}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Final-year student at MMMUT Gorakhpur engineering production AI-native applications, real-time data engines, and enterprise web architectures. Creator of 6 live web platforms and author of 8 technical masterbooks.
          </motion.p>
          
          {/* Hotstar Big Billboard Actions */}
          <motion.div 
            className={styles.cinemaActions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <a href="#projects" className={styles.playBtn}>
              <Play size={20} fill="#ffffff" /> Watch Now
            </a>
            <a href="#about" className={styles.moreInfoBtn}>
              <Info size={20} /> Details
            </a>
            <a href="#books" className={styles.subActionBtn}>
              <BookOpen size={18} /> Masterbooks
            </a>
            <a href="#agent-terminal" className={styles.subActionBtn}>
              <Terminal size={18} /> AI Twin
            </a>
            <Link href="/resume" className={styles.subActionBtn}>
              <Download size={18} /> Resume
            </Link>
          </motion.div>

          {/* Quick Cast & Genres Line */}
          <motion.div 
            className={styles.genresMeta}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Starring:</span>
              <span className={styles.metaValue}>Prakhar Mishra</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Genres:</span>
              <span className={styles.metaValue}>AI Engineering, High-Performance Web, Scalable Systems, Hardened Design</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Prominent Large HD Portrait Showcase */}
        <motion.div 
          className={styles.portraitHeroColumn}
          initial={{ opacity: 0, scale: 0.92, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className={styles.portraitGlowBackdrop} />
          
          <div className={styles.portraitFrame}>
            <img 
              src="/profile.jpg" 
              alt="Prakhar Mishra - AI Full-Stack Developer" 
              className={styles.fullHdPortraitImg} 
            />
            
            <div className={styles.portraitCinematicGradient} />
            
            {/* Top Right LIVE Badge */}
            <div className={styles.topRightBadge}>
              <span className="pulse-dot" />
              <span>MMMUT &bull; 2027</span>
            </div>

            {/* Bottom Card Overlay inside Portrait */}
            <div className={styles.portraitOverlayInfo}>
              <div className={styles.portraitOverlayTitle}>Prakhar Mishra</div>
              <div className={styles.portraitOverlayRole}>AI Full-Stack Web Developer</div>
              <div className={styles.taglineRibbon}>
                <span>#1 in Trending Engineers Today</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full-width Hotstar Metrics Showcase */}
      <motion.div 
        className={styles.netflixStatsRibbon}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
      >
        {stats.map((stat, i) => (
          <div key={i} className={styles.statCell}>
            <div className={styles.statCellNumber}>{stat.value}</div>
            <div className={styles.statCellLabel}>{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
