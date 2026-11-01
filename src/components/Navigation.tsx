"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Do not render global top navigation bar on standalone full-page views
  if (pathname === '/resume' || pathname === '/pdf-viewer') {
    return null;
  }

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Premium Logos', href: '#brand-identity' },
    { name: 'Books & Guides', href: '#books' },
    { name: 'Skills & Radar', href: '#skills' },
    { name: 'Workflow', href: '#services' },
    { name: 'Live AI Twin', href: '#agent-terminal' },
  ];

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="#home" className={styles.logoWrapper}>
          <div className={styles.logoBadge}>
            N
          </div>
          <div className={styles.logoText}>
            <span className={styles.logo}>PRAKHAR</span>
            <span className={styles.logoSub}>NETFLIX</span>
          </div>
        </Link>
        
        <div className={styles.centerPill}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={styles.link}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className={styles.rightActions}>
          <div className={styles.statusPill}>
            <span className="pulse-dot" />
            <span>Open for Hire</span>
          </div>
          <Link href="#contact" className={styles.cta}>
            Connect <ArrowUpRight size={14} />
          </Link>
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {mobileOpen && (
        <div className={styles.mobileDrawer}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/resume" 
            className={styles.mobileLink}
            onClick={() => setMobileOpen(false)}
          >
            View Technical Resume
          </Link>
          <Link 
            href="#contact" 
            className={styles.mobileCta}
            onClick={() => setMobileOpen(false)}
          >
            Send Direct Message
          </Link>
        </div>
      )}
    </nav>
  );
}
