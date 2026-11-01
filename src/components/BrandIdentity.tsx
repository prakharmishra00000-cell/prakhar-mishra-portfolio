"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import styles from './BrandIdentity.module.css';

interface BrandSystem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  artDirection: string;
  palette: { name: string; hex: string }[];
  bgCanvas: string;
  textColor: string;
  accentColor: string;
  subDescriptor: string;
  symbolSvg: React.ReactNode;
  monogramSvg: React.ReactNode;
}

const brandSystems: BrandSystem[] = [
  {
    id: "forma",
    name: "FORMA",
    category: "Architectural Studio",
    tagline: "Swiss Modernism & Spatial Geometry",
    artDirection: "Architectural minimalism, structural lines, grid-based balance, intelligent negative space.",
    palette: [
      { name: "Graphite", hex: "#292929" },
      { name: "Stone Grey", hex: "#B9B6AE" },
      { name: "Pure White", hex: "#F8F8F6" },
    ],
    bgCanvas: "#F8F8F6",
    textColor: "#292929",
    accentColor: "#B9B6AE",
    subDescriptor: "ARCHITECTURE &bull; SPATIAL DESIGN &bull; ZÜRICH &bull; BASEL",
    symbolSvg: (
      <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
        {/* Abstract F Monogram inspired by architectural floor plans & structural lines */}
        <rect x="20" y="20" width="60" height="60" stroke="#292929" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" />
        <path d="M30 24V76M30 24H72M30 48H60" stroke="#292929" strokeWidth="5.5" strokeLinecap="square" />
        <rect x="52" y="40" width="8" height="8" fill="#B9B6AE" />
      </svg>
    ),
    monogramSvg: (
      <svg width="44" height="44" viewBox="0 0 80 80" fill="none">
        <rect width="80" height="80" rx="8" fill="#292929" />
        <path d="M26 22V58M26 22H56M26 38H48" stroke="#F8F8F6" strokeWidth="4.5" strokeLinecap="square" />
      </svg>
    ),
  },
  {
    id: "elora",
    name: "ÉLORA",
    category: "Haute Parfumerie",
    tagline: "Parisian Understated Glamour",
    artDirection: "High-contrast editorial serif, perfume bottle silhouette lines, modern femininity, timeless grace.",
    palette: [
      { name: "Champagne Ivory", hex: "#EFE5D7" },
      { name: "Dark Brown", hex: "#302721" },
      { name: "Soft Gold", hex: "#B9A17A" },
    ],
    bgCanvas: "#EFE5D7",
    textColor: "#302721",
    accentColor: "#B9A17A",
    subDescriptor: "PARFUMS DE LUXE &bull; PARIS &bull; GRASSE &bull; ÉDITION PRIVÉE",
    symbolSvg: (
      <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
        {/* Abstract É Monogram inspired by perfume silhouette & graceful flowing lines */}
        <ellipse cx="50" cy="50" rx="46" ry="46" stroke="#302721" strokeWidth="1.2" />
        <ellipse cx="50" cy="50" rx="40" ry="40" stroke="#B9A17A" strokeWidth="0.8" strokeDasharray="3 3" />
        <path d="M36 28V72M36 28H64M36 49H56M36 72H64" stroke="#302721" strokeWidth="3.2" strokeLinecap="round" />
        <line x1="48" y1="20" x2="56" y2="24" stroke="#B9A17A" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    monogramSvg: (
      <svg width="44" height="44" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="38" fill="#302721" />
        <path d="M28 24V56M28 24H52M28 39H46M28 56H52" stroke="#EFE5D7" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "nexora",
    name: "NEXORA",
    category: "Next-Gen Technology",
    tagline: "Futuristic Intelligence & Precision",
    artDirection: "Geometric Swiss grid precision, custom X nexus representing connection and future technology.",
    palette: [
      { name: "Midnight Navy", hex: "#111827" },
      { name: "Electric Blue", hex: "#476CFF" },
      { name: "Cool Silver", hex: "#C6CBD3" },
      { name: "White", hex: "#FFFFFF" },
    ],
    bgCanvas: "#111827",
    textColor: "#FFFFFF",
    accentColor: "#476CFF",
    subDescriptor: "AUTONOMOUS COMPUTING &bull; QUANTUM NETWORKS &bull; AI INFRASTRUCTURE",
    symbolSvg: (
      <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
        {/* Custom Scalable Geometric X Nexus of connection & intelligence */}
        <rect x="15" y="15" width="70" height="70" rx="16" stroke="#476CFF" strokeWidth="1.5" opacity="0.4" />
        <path d="M30 30L70 70M70 30L30 70" stroke="#FFFFFF" strokeWidth="5.5" strokeLinecap="round" />
        <circle cx="50" cy="50" r="5" fill="#476CFF" />
      </svg>
    ),
    monogramSvg: (
      <svg width="44" height="44" viewBox="0 0 80 80" fill="none">
        <rect width="80" height="80" rx="14" fill="#111827" stroke="#476CFF" strokeWidth="2" />
        <path d="M24 24L56 56M56 24L24 56" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
        <circle cx="40" cy="40" r="3.5" fill="#476CFF" />
      </svg>
    ),
  },
  {
    id: "solve",
    name: "SOLVÉ",
    category: "Organic Wellness & Living",
    tagline: "Japanese Simplicity & Calm Luxury",
    artDirection: "Harmonious custom serif, abstract S renewal curves, botanical elegance, natural balance.",
    palette: [
      { name: "Muted Sage", hex: "#A3AA92" },
      { name: "Warm Sand", hex: "#D8C9B4" },
      { name: "Forest Charcoal", hex: "#30382F" },
      { name: "Soft Ivory", hex: "#F5F1E9" },
    ],
    bgCanvas: "#F5F1E9",
    textColor: "#30382F",
    accentColor: "#A3AA92",
    subDescriptor: "ORGANIC EQUILIBRIUM &bull; BOTANICAL RESTORATION &bull; KYOTO &bull; TOKYO",
    symbolSvg: (
      <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
        {/* Subtle Organic S Symbol of renewal, flow, and botanical balance */}
        <circle cx="50" cy="50" r="46" stroke="#A3AA92" strokeWidth="1.5" />
        <path 
          d="M62 34C62 26 44 26 40 36C36 46 64 52 60 64C56 74 38 72 38 64" 
          stroke="#30382F" 
          strokeWidth="4" 
          strokeLinecap="round" 
        />
        <circle cx="50" cy="50" r="2.5" fill="#A3AA92" />
      </svg>
    ),
    monogramSvg: (
      <svg width="44" height="44" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="38" fill="#30382F" />
        <path 
          d="M50 26C50 20 35 20 32 28C29 36 51 41 48 51C45 59 30 57 30 51" 
          stroke="#F5F1E9" 
          strokeWidth="3.2" 
          strokeLinecap="round" 
        />
      </svg>
    ),
  },
  {
    id: "noire",
    name: "NOIRÉ",
    category: "Specialty Coffee Roasters",
    tagline: "Scandinavian Architectural Café",
    artDirection: "Espresso tones, minimal ceramic warmth, abstract N seam, direct-origin prestige.",
    palette: [
      { name: "Espresso Brown", hex: "#382820" },
      { name: "Warm Cream", hex: "#F1E9DC" },
      { name: "Muted Copper", hex: "#A77959" },
    ],
    bgCanvas: "#F1E9DC",
    textColor: "#382820",
    accentColor: "#A77959",
    subDescriptor: "SPECIALTY COFFEE ROASTERY &bull; COPENHAGEN &bull; OSLO &bull; SINGLE ORIGIN",
    symbolSvg: (
      <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="46" stroke="#382820" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="40" stroke="#A77959" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M36 28V72M64 28V72M36 28L64 72" stroke="#382820" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="50" cy="50" r="3" fill="#A77959" />
      </svg>
    ),
    monogramSvg: (
      <svg width="44" height="44" viewBox="0 0 80 80" fill="none">
        <rect width="80" height="80" rx="10" fill="#382820" />
        <path d="M28 24V56M52 24V56M28 24L52 56" stroke="#F1E9DC" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "aurelle",
    name: "AURELLE",
    category: "Luxury Skincare House",
    tagline: "Timeless European High-End Beauty",
    artDirection: "Didone editorial contrast, botanical purity, golden-ratio pyramid monogram, unhurried luxury.",
    palette: [
      { name: "Warm Ivory", hex: "#EDE8DF" },
      { name: "Deep Charcoal", hex: "#282825" },
      { name: "Muted Sage", hex: "#A5AA96" },
      { name: "Champagne Beige", hex: "#C5B6A2" },
    ],
    bgCanvas: "#EDE8DF",
    textColor: "#282825",
    accentColor: "#C5B6A2",
    subDescriptor: "SOINS DE LA PEAU &bull; HAUTE BOTANIQUE &bull; GENÈVE &bull; PARIS",
    symbolSvg: (
      <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="47.5" stroke="#282825" strokeWidth="1" strokeDasharray="3 3" opacity="0.45" />
        <circle cx="50" cy="50" r="42" stroke="#282825" strokeWidth="1.2" />
        <path d="M50 18L32 74H38.5L43.2 59.5H56.8L61.5 74H68L50 18ZM44.8 54.5L50 38.2L55.2 54.5H44.8Z" fill="#282825" />
        <circle cx="50" cy="74" r="1.5" fill="#282825" />
      </svg>
    ),
    monogramSvg: (
      <svg width="44" height="44" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="38" fill="#282825" />
        <path d="M40 18L26 58H31L34.5 48H45.5L49 58H54L40 18ZM36 44L40 32L44 44H36Z" fill="#EDE8DF" />
      </svg>
    ),
  },
];

export default function BrandIdentity() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <section id="brand-identity" className={styles.brandSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.eyebrow}>
            <Award size={15} /> Exclusive Design Showcase &bull; Premium Logos &amp; Identity Systems
          </div>
          <h2 className={`${styles.title} text-gradient`}>Luxury &amp; Modernist Brand Identity Studio</h2>
          <p className={styles.subtitle}>
            Six complete high-end identity systems engineered with architectural precision, quiet luxury visual language, and custom geometric typography for international houses. Slowly moving in continuous running form below.
          </p>
        </motion.div>

        {/* Carousel Header Controls */}
        <div className={styles.topControlRow}>
          <div className={styles.categoryPill}>
            <span>6 Complete Vector Identity Systems &bull; Running Marquee</span>
          </div>

          <div className={styles.scrollNavControls}>
            <button 
              className={styles.scrollNavBtn} 
              onClick={() => {
                const el = document.getElementById('brandCarouselTrack');
                if (el) el.scrollBy({ left: -460, behavior: 'smooth' });
              }}
              aria-label="Previous Brand"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              className={styles.scrollNavBtn} 
              onClick={() => {
                const el = document.getElementById('brandCarouselTrack');
                if (el) el.scrollBy({ left: 460, behavior: 'smooth' });
              }}
              aria-label="Next Brand"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Running Form Continuous Carousel for Brand Logos */}
        <div 
          id="brandCarouselTrack"
          className={styles.carouselContainer}
        >
          <div className={styles.carouselTrack}>
            {/* Duplicated list for seamless infinite loop */}
            {[...brandSystems, ...brandSystems].map((brand, idx) => (
              <div 
                key={`${brand.id}-${idx}`}
                className={styles.brandCard}
              >
                {/* Visual Display Board (Warm Canvas with Centered Wordmark) */}
                <div 
                  className={styles.brandCanvasBlock}
                  style={{ backgroundColor: brand.bgCanvas }}
                >
                  <div className={styles.canvasHeader}>
                    <span style={{ color: brand.textColor, opacity: 0.6 }}>{brand.category}</span>
                    <span style={{ color: brand.textColor, opacity: 0.6 }}>0{((idx % brandSystems.length) + 1)}/06</span>
                  </div>

                  <div className={styles.canvasCenter}>
                    <div className={styles.symbolEmblem}>
                      {brand.symbolSvg}
                    </div>

                    <h3 
                      className={styles.wordmarkTitle}
                      style={{ color: brand.textColor }}
                    >
                      {brand.name}
                    </h3>

                    <div 
                      className={styles.descriptorLine}
                      style={{ color: brand.textColor }}
                    >
                      {brand.subDescriptor}
                    </div>
                  </div>

                  <div className={styles.canvasFooter}>
                    <div className={styles.monogramThumbnail}>
                      {brand.monogramSvg}
                    </div>
                    <div 
                      className={styles.canvasTagline}
                      style={{ color: brand.textColor }}
                    >
                      {brand.tagline}
                    </div>
                  </div>
                </div>

                {/* Card Meta Description & Palette Swatches */}
                <div className={styles.brandInfoBlock}>
                  <div className={styles.artDirectionText}>
                    {brand.artDirection}
                  </div>

                  {/* Swatches */}
                  <div className={styles.swatchesRow}>
                    {brand.palette.map((p) => (
                      <button 
                        key={p.hex}
                        className={styles.swatchMini}
                        onClick={() => copyColor(p.hex)}
                        title={`Copy ${p.name} (${p.hex})`}
                      >
                        <span 
                          className={styles.swatchDot} 
                          style={{ backgroundColor: p.hex }} 
                        />
                        <span className={styles.swatchLabel}>
                          {copiedColor === p.hex ? <Check size={10} /> : p.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
