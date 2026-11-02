"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Building2, 
  Sparkles, 
  Cpu, 
  Leaf, 
  Coffee, 
  Crown,
  Layers,
  Box,
  Palette,
  Eye
} from 'lucide-react';
import styles from './BrandIdentity.module.css';

interface BrandPaletteColor {
  name: string;
  hex: string;
  role: string;
}

interface BrandSystem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  artDirection: string;
  origin: string;
  subDescriptor: string;
  bgCanvas: string;
  textColor: string;
  accentColor: string;
  symbolSvg: React.ReactNode;
  monogramSvg: React.ReactNode;
  monogramHeroSvg: React.ReactNode;
  palette: BrandPaletteColor[];
  monogramSpecs: {
    ratioTitle: string;
    ratioDesc: string;
    geometryNote: string;
    reproducibility: string;
  };
  packaging: {
    item1Title: string;
    item1Desc: string;
    item1Visual: React.ReactNode;
    horizTag: string;
  };
  guidelines: {
    typography: string[];
    geometry: string[];
  };
}

const brandSystems: BrandSystem[] = [
  {
    id: "forma",
    name: "FORMA",
    category: "Architectural Studio",
    tagline: "Swiss Modernism & Spatial Geometry",
    artDirection: "3D Axonometric Brutalism, structural cantilevered slabs, coordinate drafting balance, intelligent spatial voids.",
    origin: "ZÜRICH &bull; BASEL &bull; EST. 2026",
    subDescriptor: "ARCHITECTURE &bull; SPATIAL DESIGN &bull; ZÜRICH &bull; BASEL",
    bgCanvas: "#F8F8F6",
    textColor: "#292929",
    accentColor: "#B9B6AE",
    symbolSvg: (
      <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
        {/* Isometric 3D Axonometric Structural Cantilever */}
        <path d="M50 14L84 32V68L50 86L16 68V32L50 14Z" stroke="#292929" strokeWidth="2" strokeDasharray="3 3" opacity="0.3" />
        {/* Top Slab */}
        <polygon points="50,18 80,34 50,50 20,34" fill="#B9B6AE" fillOpacity="0.35" stroke="#292929" strokeWidth="2.5" />
        {/* Cantilever Left Face */}
        <polygon points="20,34 50,50 50,78 20,62" fill="#292929" stroke="#292929" strokeWidth="2.5" />
        {/* Cantilever Right Open Core */}
        <polygon points="50,50 80,34 80,62 50,78" fill="#F8F8F6" stroke="#292929" strokeWidth="2.5" />
        {/* Architectonic Void Core */}
        <path d="M35 48L50 56V74" stroke="#F8F8F6" strokeWidth="2" strokeLinecap="square" />
        <circle cx="50" cy="50" r="3" fill="#292929" />
      </svg>
    ),
    monogramSvg: (
      <svg width="44" height="44" viewBox="0 0 80 80" fill="none">
        <rect width="80" height="80" rx="4" fill="#292929" />
        <polygon points="40,16 64,28 40,40 16,28" fill="#B9B6AE" stroke="#F8F8F6" strokeWidth="2" />
        <polygon points="16,28 40,40 40,64 16,52" fill="#F8F8F6" />
        <polygon points="40,40 64,28 64,52 40,64" fill="#292929" stroke="#F8F8F6" strokeWidth="2" />
      </svg>
    ),
    monogramHeroSvg: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        {/* Outer drafting isometric grid lines */}
        <path d="M60 10L106 34V86L60 110L14 86V34L60 10Z" stroke="#292929" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />
        <line x1="60" y1="10" x2="60" y2="110" stroke="#B9B6AE" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="14" y1="34" x2="106" y2="86" stroke="#B9B6AE" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="14" y1="86" x2="106" y2="34" stroke="#B9B6AE" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        
        {/* Monumental Isometric Cantilever Block */}
        <polygon points="60,18 100,38 60,58 20,38" fill="#B9B6AE" fillOpacity="0.4" stroke="#292929" strokeWidth="3.5" />
        <polygon points="20,38 60,58 60,98 20,78" fill="#292929" stroke="#292929" strokeWidth="3.5" />
        <polygon points="60,58 100,38 100,78 60,98" fill="#F8F8F6" stroke="#292929" strokeWidth="3.5" />
        
        {/* Negative-space structural floor slot */}
        <polygon points="42,52 60,61 60,82 42,73" fill="#F8F8F6" opacity="0.95" />
        <circle cx="60" cy="58" r="4.5" fill="#292929" />
        <rect x="75" y="65" width="10" height="2" fill="#B9B6AE" />
      </svg>
    ),
    palette: [
      { name: "Graphite", hex: "#292929", role: "Primary Monolithic Tone & Wordmark Architecture" },
      { name: "Stone Grey", hex: "#B9B6AE", role: "Tactile Concrete Grid Lines & Framing Accents" },
      { name: "Pure White", hex: "#F8F8F6", role: "Warm Gallery Plinth & Architectural Card Canvas" },
    ],
    monogramSpecs: {
      ratioTitle: "Structural Floor Plan Grid",
      ratioDesc: "Engineered on a 12-column architectural blueprint matrix. Cantilevered horizontal crossbars establish spatial tension and equilibrium.",
      geometryNote: "Strict Cartesian 90-degree orthogonal intersections with micro-radii chamfers for ultra-sharp letterform rendering.",
      reproducibility: "Tested for CNC metal wall plaques, architectural laser-etched glass partitions, and 1:100 scale model stamps."
    },
    packaging: {
      item1Title: "Brushed Graphite Architectural Plaque",
      item1Desc: "Custom facade signage machined from solid aircraft-grade anodized aluminium with countersunk stone grey hex fasteners.",
      item1Visual: (
        <div className={styles.archPlaque}>
          <div className={`${styles.plaqueCornerDot}`} style={{ top: 12, left: 12 }} />
          <div className={`${styles.plaqueCornerDot}`} style={{ top: 12, right: 12 }} />
          <div className={`${styles.plaqueCornerDot}`} style={{ bottom: 12, left: 12 }} />
          <div className={`${styles.plaqueCornerDot}`} style={{ bottom: 12, right: 12 }} />
          <div style={{ color: '#F8F8F6', fontFamily: 'sans-serif', fontSize: '1.4rem', fontWeight: 800, letterSpacing: '0.24em' }}>
            FORMA
          </div>
          <div style={{ color: '#B9B6AE', fontSize: '0.62rem', letterSpacing: '0.2em', marginTop: '6px' }}>
            ATELIER D&apos;ARCHITECTURE &bull; Z&Uuml;RICH
          </div>
        </div>
      ),
      horizTag: "ATELIER D'ARCHITECTURE &bull; SPATIAL PRACTICE"
    },
    guidelines: {
      typography: [
        "Primary Wordmark: Pure Swiss neo-grotesque sans-serif with bespoke squared terminals and optically matched counter-spaces.",
        "Tracking Discipline: Uniform +0.26em tracking creates monumental structural stability across all physical signage.",
        "Secondary Scale: Monospace 0.65rem coordinate labels for blueprints, construction documents, and site markers."
      ],
      geometry: [
        "Grid Ratio: 1:1.618 Golden section modular proportions mirroring modernist Bauhaus and Le Corbusier modular grids.",
        "Zero-Noise Rule: Strictly forbidden to introduce ornamental curves, faux shadows, or pictorial building sketches.",
        "High-Res Vector Standard: Native Bézier curves rendered to flawless 8K resolution without raster degradation."
      ]
    }
  },
  {
    id: "elora",
    name: "ÉLORA",
    category: "Haute Parfumerie",
    tagline: "Parisian Understated Glamour & Haute Joaillerie",
    artDirection: "Emerald-Cut Diamond Facets, royal script crest, Parisian haute joaillerie precision, fine 24k gold leaf needles.",
    origin: "PARIS &bull; GRASSE &bull; ÉDITION PRIVÉE",
    subDescriptor: "PARFUMS DE LUXE &bull; PARIS &bull; GRASSE &bull; ÉDITION PRIVÉE",
    bgCanvas: "#EFE5D7",
    textColor: "#302721",
    accentColor: "#B9A17A",
    symbolSvg: (
      <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
        {/* Emerald-Cut Faceted Diamond Crest */}
        <polygon points="32,15 68,15 85,32 85,68 68,85 32,85 15,68 15,32" stroke="#B9A17A" strokeWidth="1.2" strokeDasharray="2 2" />
        <polygon points="35,20 65,20 80,35 80,65 65,80 35,80 20,65 20,35" stroke="#302721" strokeWidth="2" />
        {/* Diamond Facet Lines */}
        <line x1="35" y1="20" x2="42" y2="38" stroke="#B9A17A" strokeWidth="1.2" />
        <line x1="65" y1="20" x2="58" y2="38" stroke="#B9A17A" strokeWidth="1.2" />
        <line x1="80" y1="35" x2="62" y2="42" stroke="#B9A17A" strokeWidth="1.2" />
        <line x1="80" y1="65" x2="62" y2="58" stroke="#B9A17A" strokeWidth="1.2" />
        <line x1="65" y1="80" x2="58" y2="62" stroke="#B9A17A" strokeWidth="1.2" />
        <line x1="35" y1="80" x2="42" y2="62" stroke="#B9A17A" strokeWidth="1.2" />
        <line x1="20" y1="65" x2="38" y2="58" stroke="#B9A17A" strokeWidth="1.2" />
        <line x1="20" y1="35" x2="38" y2="42" stroke="#B9A17A" strokeWidth="1.2" />
        {/* Central Facet Table */}
        <polygon points="42,38 58,38 62,42 62,58 58,62 42,62 38,58 38,42" fill="#B9A17A" fillOpacity="0.18" stroke="#302721" strokeWidth="1.5" />
        {/* Royal Crest Monogram & Fleur Star */}
        <path d="M44 44H56M44 44V56H56M44 50H53" stroke="#302721" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="50" cy="27" r="1.8" fill="#B9A17A" />
        <circle cx="50" cy="73" r="1.8" fill="#B9A17A" />
      </svg>
    ),
    monogramSvg: (
      <svg width="44" height="44" viewBox="0 0 80 80" fill="none">
        <polygon points="26,8 54,8 72,26 72,54 54,72 26,72 8,54 8,26" fill="#302721" />
        <polygon points="30,14 50,14 66,30 66,50 50,66 30,66 14,50 14,30" stroke="#B9A17A" strokeWidth="1.5" />
        <path d="M34 32H48M34 32V48H48M34 40H45" stroke="#EFE5D7" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    monogramHeroSvg: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        {/* Luxury Radiant Starburst Rays */}
        <line x1="60" y1="4" x2="60" y2="16" stroke="#B9A17A" strokeWidth="1.5" />
        <line x1="60" y1="104" x2="60" y2="116" stroke="#B9A17A" strokeWidth="1.5" />
        <line x1="4" y1="60" x2="16" y2="60" stroke="#B9A17A" strokeWidth="1.5" />
        <line x1="104" y1="60" x2="116" y2="60" stroke="#B9A17A" strokeWidth="1.5" />
        {/* Outer Emerald Octagon */}
        <polygon points="38,18 82,18 102,38 102,82 82,102 38,102 18,82 18,38" stroke="#B9A17A" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="42,24 78,24 96,42 96,78 78,96 42,96 24,78 24,42" stroke="#302721" strokeWidth="3" />
        {/* Facet Lines */}
        <line x1="42" y1="24" x2="50" y2="46" stroke="#B9A17A" strokeWidth="1.8" />
        <line x1="78" y1="24" x2="70" y2="46" stroke="#B9A17A" strokeWidth="1.8" />
        <line x1="96" y1="42" x2="74" y2="50" stroke="#B9A17A" strokeWidth="1.8" />
        <line x1="96" y1="78" x2="74" y2="70" stroke="#B9A17A" strokeWidth="1.8" />
        <line x1="78" y1="96" x2="70" y2="74" stroke="#B9A17A" strokeWidth="1.8" />
        <line x1="42" y1="96" x2="50" y2="74" stroke="#B9A17A" strokeWidth="1.8" />
        <line x1="24" y1="78" x2="46" y2="70" stroke="#B9A17A" strokeWidth="1.8" />
        <line x1="24" y1="42" x2="46" y2="50" stroke="#B9A17A" strokeWidth="1.8" />
        {/* Internal Gem Table */}
        <polygon points="50,46 70,46 74,50 74,70 70,74 50,74 46,70 46,50" fill="#B9A17A" fillOpacity="0.2" stroke="#302721" strokeWidth="2" />
        <path d="M52 52H68M52 52V68H68M52 60H64" stroke="#302721" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="60" cy="33" r="2.5" fill="#B9A17A" />
        <circle cx="60" cy="87" r="2.5" fill="#B9A17A" />
      </svg>
    ),
    palette: [
      { name: "Champagne Ivory", hex: "#EFE5D7", role: "Handmade Linen Box Wrap & Velvet Label Ground" },
      { name: "Dark Brown", hex: "#302721", role: "High-Contrast Editorial Typography & Vessel Caps" },
      { name: "Soft Gold", hex: "#B9A17A", role: "Micro-Embossed Metallic Foil & Neck Bands" },
    ],
    monogramSpecs: {
      ratioTitle: "Vessel Silhouette Oval",
      ratioDesc: "Flowing organic arcs derived from classic crystal flacon neck radii, balancing Parisian romance with editorial precision.",
      geometryNote: "High-contrast Didone serifs with delicate hairlines and generous oval geometry.",
      reproducibility: "Engineered for 3D brass wax seals, micro bottle neck medallions, and foil-blocked fragrance blotters."
    },
    packaging: {
      item1Title: "Frosted Crystal Flacon & Soft Gold Cap",
      item1Desc: "Heavy crystal perfume bottle with champagne gold cap and blind-debossed artisanal linen label.",
      item1Visual: (
        <div className={styles.perfumeFlacon}>
          <div className={styles.flaconCap} />
          <div className={styles.flaconBody}>
            <div>
              <div style={{ color: '#302721', fontFamily: 'serif', fontSize: '1.25rem', letterSpacing: '0.22em', fontWeight: 700 }}>
                &Eacute;LORA
              </div>
              <div style={{ color: '#B9A17A', fontSize: '0.48rem', letterSpacing: '0.18em', marginTop: '4px' }}>
                PARFUM EXTRAIT &bull; 50ML
              </div>
            </div>
          </div>
        </div>
      ),
      horizTag: "PARFUMS DE LUXE &bull; PARIS &bull; ÉDITION PRIVÉE"
    },
    guidelines: {
      typography: [
        "Editorial Contrast: Extreme stroke modulation inspired by French transitional serifs and haute couture publications.",
        "Accented Elegance: Custom-crafted acute accent on the capital 'É' optically balanced to match uppercase cap height.",
        "Sub-branding: Understated, tracking-heavy sans-serif (0.62rem) reserved for formulation and volume identifiers."
      ],
      geometry: [
        "Curvature Ratio: Smooth elliptical bezier curves mathematically calibrated to mirror French luxury flacons.",
        "Zero-Illustration Rule: Absolutely no literal perfume bottle drawings or flower sketches inside the mark.",
        "High-Density Stamping: Calibrated for ultra-fine hot gold stamping down to 0.2mm stroke widths."
      ]
    }
  },
  {
    id: "nexora",
    name: "NEXORA",
    category: "Next-Gen Technology",
    tagline: "Quantum Architecture & Deep Tech Optics",
    artDirection: "Stealth Delta-Wing Prism, concentric circular qubit diffraction rings, 45° kinetic waveguides, electric cobalt pulse.",
    origin: "SILICON VALLEY &bull; TOKYO &bull; ZÜRICH",
    subDescriptor: "AUTONOMOUS COMPUTING &bull; QUANTUM NETWORKS &bull; AI INFRASTRUCTURE",
    bgCanvas: "#111827",
    textColor: "#FFFFFF",
    accentColor: "#476CFF",
    symbolSvg: (
      <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
        {/* Stealth Delta Prism & Concentric Qubit Waveguides */}
        <circle cx="50" cy="54" r="38" stroke="#476CFF" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />
        <circle cx="50" cy="54" r="26" stroke="#476CFF" strokeWidth="1" opacity="0.2" />
        {/* Outer Delta Stealth Polygon */}
        <polygon points="50,14 88,78 12,78" stroke="#476CFF" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
        {/* Inner Kinetic Delta Chevrons */}
        <polygon points="50,22 82,74 18,74" stroke="#FFFFFF" strokeWidth="3" strokeLinejoin="round" />
        <polygon points="50,38 70,70 30,70" fill="#476CFF" fillOpacity="0.25" stroke="#476CFF" strokeWidth="2" strokeLinejoin="round" />
        {/* Central Luminous Qubit Core */}
        <circle cx="50" cy="56" r="6" fill="#476CFF" />
        <circle cx="50" cy="56" r="2.5" fill="#FFFFFF" />
        <line x1="50" y1="22" x2="50" y2="46" stroke="#476CFF" strokeWidth="2" />
      </svg>
    ),
    monogramSvg: (
      <svg width="44" height="44" viewBox="0 0 80 80" fill="none">
        <polygon points="40,8 74,68 6,68" fill="#111827" stroke="#476CFF" strokeWidth="2.5" strokeLinejoin="round" />
        <polygon points="40,24 64,62 16,62" fill="#476CFF" fillOpacity="0.3" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="40" cy="48" r="4.5" fill="#476CFF" />
        <circle cx="40" cy="48" r="2" fill="#FFFFFF" />
      </svg>
    ),
    monogramHeroSvg: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        {/* Concentric Quantum Orbital Matrix */}
        <circle cx="60" cy="65" r="50" stroke="#476CFF" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.35" />
        <circle cx="60" cy="65" r="36" stroke="#476CFF" strokeWidth="1" strokeDasharray="3 3" opacity="0.25" />
        <circle cx="60" cy="65" r="20" stroke="#476CFF" strokeWidth="1" opacity="0.2" />
        {/* Monumental Stealth Delta Prism */}
        <polygon points="60,12 110,94 10,94" stroke="#476CFF" strokeWidth="2" strokeDasharray="5 5" opacity="0.6" />
        <polygon points="60,20 102,88 18,88" stroke="#FFFFFF" strokeWidth="4.5" strokeLinejoin="round" />
        <polygon points="60,42 86,82 34,82" fill="#476CFF" fillOpacity="0.22" stroke="#476CFF" strokeWidth="3" strokeLinejoin="round" />
        {/* Optical Waveguides & Laser Emitters */}
        <line x1="60" y1="20" x2="60" y2="52" stroke="#476CFF" strokeWidth="2.5" />
        <line x1="18" y1="88" x2="44" y2="72" stroke="#476CFF" strokeWidth="2.5" />
        <line x1="102" y1="88" x2="76" y2="72" stroke="#476CFF" strokeWidth="2.5" />
        <circle cx="60" cy="66" r="8.5" fill="#476CFF" />
        <circle cx="60" cy="66" r="3.5" fill="#FFFFFF" />
      </svg>
    ),
    palette: [
      { name: "Midnight Navy", hex: "#111827", role: "Deep Dark-Mode Canvas & Server Enclosure Metal" },
      { name: "Electric Blue", hex: "#476CFF", role: "Dynamic Signal Conduit & Interactive UI State" },
      { name: "Cool Silver", hex: "#C6CBD3", role: "Brushed Magnesium Hardware & Precision Accents" },
      { name: "White", hex: "#FFFFFF", role: "Primary Vector Wordmark & High-Readability Type" },
    ],
    monogramSpecs: {
      ratioTitle: "Multi-Node Neural Nexus",
      ratioDesc: "45-degree diagonal convergence vectors intersecting at a central focal data core, visualizing connected machine intelligence.",
      geometryNote: "Continuous isometric angle consistency with symmetrical nodal chamfers.",
      reproducibility: "Scales from 16px Retina favicon displays up to massive illuminated datacenter exterior signage."
    },
    packaging: {
      item1Title: "Anodized Quantum Server Enclosure Badge",
      item1Desc: "Diamond-cut magnesium chassis badge with laser-etched neural X emblem and electric blue underglow.",
      item1Visual: (
        <div className={styles.techBadge}>
          <div style={{ color: '#476CFF', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Cpu size={22} />
            <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', letterSpacing: '0.15em' }}>NEXUS // SYS-01</span>
          </div>
          <div style={{ color: '#FFFFFF', fontFamily: 'sans-serif', fontSize: '1.5rem', fontWeight: 900, letterSpacing: '0.22em' }}>
            NEXORA
          </div>
          <div style={{ color: '#C6CBD3', fontSize: '0.58rem', letterSpacing: '0.16em', opacity: 0.8 }}>
            QUANTUM NEURAL INFRASTRUCTURE
          </div>
        </div>
      ),
      horizTag: "FRONTIER INTELLIGENCE &bull; QUANTUM NETWORKS"
    },
    guidelines: {
      typography: [
        "Letterform Architecture: Custom geometric neo-grotesque with calibrated chamfers on diagonal joints.",
        "Mathematical Tracking: +0.28em letter-spacing engineered to remain razor-sharp in dark-mode emissive displays.",
        "Code Monospace: Monospace secondary labeling for terminal consoles, cloud SDKs, and developer documentation."
      ],
      geometry: [
        "Angle Precision: Strict 45-degree isometric diagonals preventing optical vibration across high-DPI screens.",
        "Zero Circuit Clichés: Forbidden to use generic green circuit lines, glowing globes, or generic stock technology icons.",
        "Vector Scalability: Mathematical SVG paths ensure zero pixelation across any resolution or screen matrix."
      ]
    }
  },
  {
    id: "solve",
    name: "SOLVÉ",
    category: "Organic Wellness & Living",
    tagline: "Wabi-Sabi Botanical Equilibrium & Zen Flora",
    artDirection: "Asymmetric calligraphic Ensō brush stroke, interlocking Gingko leaf teardrop silhouette, raw ceramic pigment balance.",
    origin: "KYOTO &bull; TOKYO &bull; EST. 2026",
    subDescriptor: "ORGANIC EQUILIBRIUM &bull; BOTANICAL RESTORATION &bull; KYOTO &bull; TOKYO",
    bgCanvas: "#F5F1E9",
    textColor: "#30382F",
    accentColor: "#A3AA92",
    symbolSvg: (
      <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
        {/* Asymmetrical Organic Teardrop Ensō Brush Mark */}
        <path 
          d="M50 14C32 28 20 48 20 66C20 82 33 90 50 90C68 90 80 78 80 62C80 44 64 26 50 14Z" 
          stroke="#A3AA92" 
          strokeWidth="1.5" 
          strokeDasharray="4 3" 
        />
        {/* Calligraphic Fluid Fluid Leaf Swirl */}
        <path 
          d="M50 18C36 32 26 48 26 64C26 78 37 84 50 84C63 84 74 74 74 60C74 46 62 34 52 24" 
          stroke="#30382F" 
          strokeWidth="4" 
          strokeLinecap="round" 
        />
        {/* Inner Gingko Vein & Balance Stones */}
        <path 
          d="M50 84C48 70 54 54 62 44" 
          stroke="#A3AA92" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
        />
        <circle cx="50" cy="50" r="4.5" fill="#30382F" />
        <circle cx="62" cy="38" r="2.5" fill="#A3AA92" />
      </svg>
    ),
    monogramSvg: (
      <svg width="44" height="44" viewBox="0 0 80 80" fill="none">
        <path d="M40 8C26 20 16 36 16 52C16 66 26 74 40 74C54 74 64 64 64 50C64 36 52 24 40 8Z" fill="#30382F" />
        <path d="M40 18C30 28 24 40 24 52C24 62 31 66 40 66C49 66 56 58 56 48C56 38 48 28 40 18Z" fill="#F5F1E9" />
        <circle cx="40" cy="48" r="4" fill="#30382F" />
      </svg>
    ),
    monogramHeroSvg: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        {/* Sacred Geometry Harmony Circles */}
        <ellipse cx="60" cy="68" rx="48" ry="44" stroke="#A3AA92" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.4" />
        {/* Monumental Fluid Calligraphic Droplet Ensō */}
        <path 
          d="M60 12C38 30 22 54 22 76C22 98 38 108 60 108C82 108 98 94 98 72C98 50 78 30 60 12Z" 
          stroke="#A3AA92" 
          strokeWidth="2" 
          strokeDasharray="6 4" 
        />
        <path 
          d="M60 18C42 34 28 56 28 76C28 92 40 102 60 102C78 102 92 90 92 70C92 52 76 36 62 24" 
          stroke="#30382F" 
          strokeWidth="6" 
          strokeLinecap="round" 
        />
        {/* Wabi-Sabi Flowing S-Vein */}
        <path 
          d="M60 102C58 84 66 64 78 50C84 42 78 32 70 34" 
          stroke="#A3AA92" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
        />
        {/* Zen Stone Focal Points */}
        <circle cx="60" cy="62" r="6.5" fill="#30382F" />
        <circle cx="76" cy="44" r="3.5" fill="#A3AA92" />
        <circle cx="48" cy="82" r="2.5" fill="#A3AA92" />
      </svg>
    ),
    palette: [
      { name: "Muted Sage", hex: "#A3AA92", role: "Herbal Extract Accent & Japanese Zen Garden Wash" },
      { name: "Warm Sand", hex: "#D8C9B4", role: "Earthy Ceramic Glaze & Textured Washi Paper" },
      { name: "Forest Charcoal", hex: "#30382F", role: "Deep Organic Typography & Woodblock Inking" },
      { name: "Soft Ivory", hex: "#F5F1E9", role: "Unbleached Cotton & Pure Mineral Canvas" },
    ],
    monogramSpecs: {
      ratioTitle: "Ensō Botanical Balance Arc",
      ratioDesc: "Derived from circular Japanese calligraphy principles and natural organic renewal curves.",
      geometryNote: "Continuous tangential spline curves ensuring soothing organic balance without harsh corners.",
      reproducibility: "Calibrated for blind-embossed unbleached cotton paper, ceramic bottle stamps, and bamboo box seals."
    },
    packaging: {
      item1Title: "Matte Ceramic Botanical Serum Bottle",
      item1Desc: "Hand-poured white ceramic bottle with dark wood cap and minimalist blind-debossed label.",
      item1Visual: (
        <div className={styles.serumBottle}>
          <div className={styles.dropperCap} />
          <div className={styles.bottleBase}>
            <div>
              <div style={{ color: '#30382F', fontFamily: 'serif', fontSize: '1.25rem', letterSpacing: '0.2em', fontWeight: 700 }}>
                SOLV&Eacute;
              </div>
              <div style={{ color: '#A3AA92', fontSize: '0.45rem', letterSpacing: '0.14em', marginTop: '4px' }}>
                BOTANICAL ESSENCE &bull; 30ML
              </div>
            </div>
          </div>
        </div>
      ),
      horizTag: "ORGANIC EQUILIBRIUM &bull; BOTANICAL RESTORATION"
    },
    guidelines: {
      typography: [
        "Organic Balance: Elegant modern transitional serif with subtle organic stroke modulation.",
        "Calm Tracking: Generous, deliberate tracking (+0.24em) creating tranquil visual space for high-end organic living.",
        "Harmonious Accent: Custom acute accent on the 'É' reflecting natural leaf tension without literal illustration."
      ],
      geometry: [
        "Zen Circularity: Ensō-inspired circle geometry evoking timeless balance and natural renewal.",
        "Zero-Leaf Rule: Strictly forbids generic clip-art leaf vectors, teardrops, or busy botanical sketches.",
        "Warm Palette Tone: 100% natural pigment color harmony inspired by traditional Japanese dry stone gardens."
      ]
    }
  },
  {
    id: "noire",
    name: "NOIRÉ",
    category: "Specialty Coffee Roasters",
    tagline: "Nordic Brutalist Roastery & Origin Extraction",
    artDirection: "Heavy industrial diamond hallmark, beveled hexagonal stamp, negative-space extraction channels, raw brass roast coordinates.",
    origin: "COPENHAGEN &bull; OSLO &bull; EST. 2026",
    subDescriptor: "SPECIALTY COFFEE ROASTERY &bull; COPENHAGEN &bull; OSLO &bull; SINGLE ORIGIN",
    bgCanvas: "#F1E9DC",
    textColor: "#382820",
    accentColor: "#A77959",
    symbolSvg: (
      <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
        {/* Solid Nordic Diamond Hallmark */}
        <polygon points="50,12 88,50 50,88 12,50" stroke="#A77959" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="50,18 82,50 50,82 18,50" fill="#382820" stroke="#382820" strokeWidth="2" />
        {/* Negative-Space Extraction Channels & N Geometry */}
        <path d="M36 34V66M64 34V66M36 34L64 66" stroke="#F1E9DC" strokeWidth="4.5" strokeLinecap="square" />
        <line x1="50" y1="22" x2="50" y2="28" stroke="#A77959" strokeWidth="2" />
        <line x1="50" y1="72" x2="50" y2="78" stroke="#A77959" strokeWidth="2" />
        <circle cx="50" cy="50" r="3" fill="#A77959" />
      </svg>
    ),
    monogramSvg: (
      <svg width="44" height="44" viewBox="0 0 80 80" fill="none">
        <polygon points="40,8 72,40 40,72 8,40" fill="#382820" stroke="#A77959" strokeWidth="2" />
        <path d="M28 26V54M52 26V54M28 26L52 54" stroke="#F1E9DC" strokeWidth="4" strokeLinecap="square" />
      </svg>
    ),
    monogramHeroSvg: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        {/* Compass Azimuth Dial */}
        <circle cx="60" cy="60" r="56" stroke="#A77959" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />
        <line x1="60" y1="4" x2="60" y2="12" stroke="#A77959" strokeWidth="2" />
        <line x1="60" y1="108" x2="60" y2="116" stroke="#A77959" strokeWidth="2" />
        <line x1="4" y1="60" x2="12" y2="60" stroke="#A77959" strokeWidth="2" />
        <line x1="108" y1="60" x2="116" y2="60" stroke="#A77959" strokeWidth="2" />
        {/* Monumental Solid Nordic Diamond Hallmark */}
        <polygon points="60,10 110,60 60,110 10,60" stroke="#A77959" strokeWidth="2" strokeDasharray="5 3" />
        <polygon points="60,18 102,60 60,102 18,60" fill="#382820" stroke="#382820" strokeWidth="4" />
        {/* Stark Extraction Void Channels */}
        <path d="M42 38V82M78 38V82M42 38L78 82" stroke="#F1E9DC" strokeWidth="7" strokeLinecap="square" />
        <circle cx="60" cy="60" r="5" fill="#A77959" />
        {/* Roast Axis Markers */}
        <line x1="60" y1="22" x2="60" y2="30" stroke="#A77959" strokeWidth="2.5" />
        <line x1="60" y1="90" x2="60" y2="98" stroke="#A77959" strokeWidth="2.5" />
      </svg>
    ),
    palette: [
      { name: "Espresso Brown", hex: "#382820", role: "Deep Roasted Espresso Primary Tone & Wordmark" },
      { name: "Warm Cream", hex: "#F1E9DC", role: "Minimalist Scandinavian Ceramic Cup Canvas" },
      { name: "Muted Copper", hex: "#A77959", role: "Architectural Precision Foil Stamping & Roast Valves" },
    ],
    monogramSpecs: {
      ratioTitle: "Roasting Seam Geometry",
      ratioDesc: "Engineered around a 60-degree angled diagonal traversing parallel vertical roasting columns.",
      geometryNote: "Abstract N monogram reflecting origin beans and Nordic architectural pavilion lines.",
      reproducibility: "Calibrated for copper hot-foil stamping on heavy craft bean pouches and embossed ceramic cups."
    },
    packaging: {
      item1Title: "Ceramic Takeaway Cup & Copper Sleeve",
      item1Desc: "Double-walled Nordic ceramic takeaway vessel featuring dark roast sleeve and copper monogram foil.",
      item1Visual: (
        <div className={styles.coffeeCup}>
          <div style={{ color: '#382820', fontSize: '0.55rem', letterSpacing: '0.18em', fontWeight: 700 }}>
            NORDIC ROAST
          </div>
          <div className={styles.coffeeSleeve}>
            <span className={styles.sleeveLogo}>NOIR&Eacute;</span>
          </div>
          <div style={{ color: '#A77959', fontSize: '0.45rem', letterSpacing: '0.12em' }}>
            EST. 2026 &bull; SINGLE ORIGIN
          </div>
        </div>
      ),
      horizTag: "SPECIALTY COFFEE ROASTERY &bull; SINGLE ORIGIN"
    },
    guidelines: {
      typography: [
        "Nordic Precision: Bold yet refined custom serif wordmark with high optical balance and sharp serifs.",
        "Deliberate Tracking: Generous +0.28em letter-spacing reflecting spacious Scandinavian café interiors.",
        "Origin Coordinates: Miniature micro-sans (0.65rem) for elevation (masl), varietal, and harvest batch info."
      ],
      geometry: [
        "Roast Axis: Mathematical 60-degree diagonal seam connecting dual origin pillars.",
        "Zero Coffee-Cup Clichés: Strictly avoids generic steaming coffee mug drawings or literal bean silhouettes.",
        "Warm Materiality: Designed specifically for tactile interaction with unbleached paper and stoneware."
      ]
    }
  },
  {
    id: "aurelle",
    name: "AURELLE",
    category: "Luxury Skincare House",
    tagline: "Geneva Haute Botanique & Celestial Horlogerie",
    artDirection: "Classical Roman Triumphal Arch, radiating celestial sunburst pediment, fluted Corinthian pillars, laurel balance.",
    origin: "GENÈVE &bull; PARIS &bull; ÉDITION PRIVÉE",
    subDescriptor: "SOINS DE LA PEAU &bull; HAUTE BOTANIQUE &bull; GENÈVE &bull; PARIS",
    bgCanvas: "#EDE8DF",
    textColor: "#282825",
    accentColor: "#C5B6A2",
    symbolSvg: (
      <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
        {/* Classical Roman Triumphal Archway & Sunburst */}
        {/* Radial Sunburst Rays */}
        <line x1="50" y1="20" x2="50" y2="10" stroke="#C5B6A2" strokeWidth="1.5" />
        <line x1="38" y1="23" x2="31" y2="15" stroke="#C5B6A2" strokeWidth="1.5" />
        <line x1="62" y1="23" x2="69" y2="15" stroke="#C5B6A2" strokeWidth="1.5" />
        <line x1="28" y1="31" x2="20" y2="26" stroke="#C5B6A2" strokeWidth="1.5" />
        <line x1="72" y1="31" x2="80" y2="26" stroke="#C5B6A2" strokeWidth="1.5" />
        {/* Arch Pediment Beam */}
        <rect x="22" y="28" width="56" height="4" fill="#282825" />
        {/* Rounded Semicircular Arch Vault */}
        <path d="M30 84V52C30 40 40 32 50 32C60 32 70 40 70 52V84" stroke="#282825" strokeWidth="3" fill="none" />
        <path d="M38 84V54C38 46 44 40 50 40C56 40 62 46 62 54V84" stroke="#C5B6A2" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
        {/* Fluted Twin Columns */}
        <line x1="26" y1="32" x2="26" y2="84" stroke="#282825" strokeWidth="3.5" strokeLinecap="square" />
        <line x1="74" y1="32" x2="74" y2="84" stroke="#282825" strokeWidth="3.5" strokeLinecap="square" />
        {/* Plinth Base */}
        <rect x="18" y="84" width="64" height="4" fill="#282825" />
        <circle cx="50" cy="52" r="3" fill="#C5B6A2" />
      </svg>
    ),
    monogramSvg: (
      <svg width="44" height="44" viewBox="0 0 80 80" fill="none">
        <rect x="12" y="20" width="56" height="4" fill="#282825" />
        <path d="M22 66V42C22 30 30 24 40 24C50 24 58 30 58 42V66" stroke="#282825" strokeWidth="3.5" fill="none" />
        <line x1="18" y1="24" x2="18" y2="66" stroke="#282825" strokeWidth="4" />
        <line x1="62" y1="24" x2="62" y2="66" stroke="#282825" strokeWidth="4" />
        <rect x="14" y="66" width="52" height="4" fill="#282825" />
        <circle cx="40" cy="42" r="3.5" fill="#C5B6A2" />
      </svg>
    ),
    monogramHeroSvg: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        {/* Radiant Celestial Sunburst Crown */}
        <line x1="60" y1="20" x2="60" y2="6" stroke="#C5B6A2" strokeWidth="2" />
        <line x1="44" y1="24" x2="34" y2="12" stroke="#C5B6A2" strokeWidth="2" />
        <line x1="76" y1="24" x2="86" y2="12" stroke="#C5B6A2" strokeWidth="2" />
        <line x1="30" y1="34" x2="18" y2="26" stroke="#C5B6A2" strokeWidth="2" />
        <line x1="90" y1="34" x2="102" y2="26" stroke="#C5B6A2" strokeWidth="2" />
        <line x1="20" y1="48" x2="8" y2="44" stroke="#C5B6A2" strokeWidth="2" />
        <line x1="100" y1="48" x2="112" y2="44" stroke="#C5B6A2" strokeWidth="2" />
        {/* Entablature & Pediment */}
        <rect x="22" y="30" width="76" height="6" fill="#282825" />
        <rect x="26" y="26" width="68" height="4" fill="#C5B6A2" />
        {/* Monumental Semicircular Arch Portal */}
        <path d="M34 104V64C34 48 46 36 60 36C74 36 86 48 86 64V104" stroke="#282825" strokeWidth="5.5" fill="none" />
        <path d="M44 104V66C44 56 52 48 60 48C68 48 76 56 76 66V104" stroke="#C5B6A2" strokeWidth="2.5" strokeDasharray="3 3" fill="none" />
        {/* Fluted Roman Corinthian Columns */}
        <line x1="28" y1="36" x2="28" y2="104" stroke="#282825" strokeWidth="5.5" strokeLinecap="square" />
        <line x1="92" y1="36" x2="92" y2="104" stroke="#282825" strokeWidth="5.5" strokeLinecap="square" />
        {/* Monumental Plinth */}
        <rect x="18" y="104" width="84" height="6" fill="#282825" />
        <circle cx="60" cy="65" r="5" fill="#C5B6A2" />
      </svg>
    ),
    palette: [
      { name: "Warm Ivory", hex: "#EDE8DF", role: "Primary Background & Packaging Canvas" },
      { name: "Deep Charcoal", hex: "#282825", role: "Primary Typography & Monogram Geometry" },
      { name: "Muted Sage", hex: "#A5AA96", role: "Subtle Botanical Accent & Herbarium Notes" },
      { name: "Champagne Beige", hex: "#C5B6A2", role: "Understated Metallic & Foil Embossing" },
    ],
    monogramSpecs: {
      ratioTitle: "Golden Ratio Pyramid Apex",
      ratioDesc: "Monogram apex calibrated to 51.8 degrees, evoking timeless classical Egyptian pyramids and European monumental arches.",
      geometryNote: "Precision vector construction engineered for microscopic bottle cap debossing.",
      reproducibility: "Maintains absolute legibility from 8mm cosmetic bottle caps to oversized high-res billboards."
    },
    packaging: {
      item1Title: "Frosted Amber Ceramic Jar & Aluminium Lid",
      item1Desc: "Geometric monogram 'A' blind-embossed into matte champagne-toned aluminium lid with charcoal ceramic base.",
      item1Visual: (
        <div className={styles.creamJar}>
          <div className={styles.jarLid}>
            <div className={styles.lidEmboss}>A</div>
          </div>
          <div className={styles.jarBase}>
            <div className={styles.jarLabel}>
              <span className={styles.labelBrandSmall}>AURELLE</span>
              <span className={styles.labelProductSmall}>CR&Egrave;ME SUBLIME</span>
            </div>
          </div>
        </div>
      ),
      horizTag: "HAUTE BEAUTÉ NATURELLE &bull; SOINS BOTANIQUES"
    },
    guidelines: {
      typography: [
        "Optical Contrast: Extreme stroke modulation inspired by Didone and transitional European luxury serifs.",
        "Tracking Discipline: Generous, deliberate letter-spacing (+0.28em) to communicate unhurried quiet luxury.",
        "Sub-branding: Pure Swiss neo-grotesque sans-serif in miniature optical size (0.65rem) for secondary descriptors."
      ],
      geometry: [
        "Monogram Ratio: Golden ratio apex angle of 51.8 degrees mirroring classical arches.",
        "Zero-Noise Rule: Completely free of decorative filigrees, flourishes, or generic cosmetic droplets.",
        "Vector Reproducibility: Engineered to scale flawlessly from 8K high-res displays down to 8mm perfume caps."
      ]
    }
  },
];

export default function BrandIdentity() {
  const [selectedBrandId, setSelectedBrandId] = useState<string>("aurelle");
  const [activeTab, setActiveTab] = useState<'primary' | 'monogram' | 'packaging' | 'guidelines'>('primary');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const activeBrand = brandSystems.find(b => b.id === selectedBrandId) || brandSystems[0];

  const copyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const getBrandIcon = (id: string) => {
    switch(id) {
      case 'forma': return <Building2 size={16} />;
      case 'elora': return <Sparkles size={16} />;
      case 'nexora': return <Cpu size={16} />;
      case 'solve': return <Leaf size={16} />;
      case 'noire': return <Coffee size={16} />;
      case 'aurelle': return <Crown size={16} />;
      default: return <Award size={16} />;
    }
  };

  const getBrandCanvasClass = (id: string) => {
    switch(id) {
      case 'forma': return styles.canvasForma;
      case 'elora': return styles.canvasElora;
      case 'nexora': return styles.canvasNexora;
      case 'solve': return styles.canvasSolve;
      case 'noire': return styles.canvasNoire;
      case 'aurelle': return styles.canvasAurelle;
      default: return '';
    }
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
            Six complete high-end identity systems engineered with architectural precision, quiet luxury visual language, and custom geometric typography. Slowly moving in continuous running form below, with four interactive identity views for every brand.
          </p>
        </motion.div>

        {/* ====================================================================
           PART 1: CONTINUOUS RUNNING MARQUEE (ALL 6 BRANDS)
           ==================================================================== */}
        <div className={styles.topControlRow}>
          <div className={styles.categoryPill}>
            <span>6 Complete Vector Systems &bull; Running Marquee &bull; Click any brand to inspect</span>
          </div>

          <div className={styles.scrollNavControls}>
            <button 
              className={styles.scrollNavBtn} 
              onClick={() => {
                const el = document.getElementById('brandCarouselTrack');
                if (el) el.scrollBy({ left: -440, behavior: 'smooth' });
              }}
              aria-label="Previous Brand"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              className={styles.scrollNavBtn} 
              onClick={() => {
                const el = document.getElementById('brandCarouselTrack');
                if (el) el.scrollBy({ left: 440, behavior: 'smooth' });
              }}
              aria-label="Next Brand"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Running Form Continuous Carousel */}
        <div 
          id="brandCarouselTrack"
          className={styles.carouselContainer}
        >
          <div className={styles.carouselTrack}>
            {[...brandSystems, ...brandSystems].map((brand, idx) => (
              <div 
                key={`${brand.id}-${idx}`}
                className={styles.brandCard}
                onClick={() => {
                  setSelectedBrandId(brand.id);
                  const studio = document.getElementById('deepBrandStudio');
                  if (studio) studio.scrollIntoView({ behavior: 'smooth' });
                }}
                title={`Click to inspect all 4 views of ${brand.name}`}
              >
                {/* Visual Board */}
                <div 
                  className={`${styles.brandCanvasBlock} ${getBrandCanvasClass(brand.id)}`}
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

                {/* Card Meta & Swatches */}
                <div className={styles.brandInfoBlock}>
                  <div className={styles.artDirectionText}>
                    {brand.artDirection}
                  </div>

                  <div className={styles.swatchesRow}>
                    {brand.palette.map((p) => (
                      <button 
                        key={p.hex}
                        className={styles.swatchMini}
                        onClick={(e) => {
                          e.stopPropagation();
                          copyColor(p.hex);
                        }}
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

        {/* ====================================================================
           PART 2: INTERACTIVE 4-VIEW DEEP BRAND STUDIO (FOR ALL 6 BRANDS)
           ==================================================================== */}
        <div id="deepBrandStudio" className={styles.studioSection}>
          <div className={styles.studioHeaderRow}>
            <div className={styles.studioTitleWrap}>
              <h3>Comprehensive 4-View Identity Inspector</h3>
              <p>Select any of the 6 luxury houses to explore its four complete design views.</p>
            </div>
          </div>

          {/* Brand Selector Bar (All 6 Brands) */}
          <div className={styles.brandSelectorRow}>
            {brandSystems.map((b) => (
              <button
                key={b.id}
                className={`${styles.brandPill} ${selectedBrandId === b.id ? styles.brandPillActive : ''}`}
                onClick={() => setSelectedBrandId(b.id)}
              >
                {getBrandIcon(b.id)} {b.name} &mdash; {b.category}
              </button>
            ))}
          </div>

          {/* View Mode Sub-tabs (4 Views for the Active Brand) */}
          <div className={styles.tabNav}>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'primary' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('primary')}
            >
              <Eye size={16} /> View 1: Primary Wordmark Canvas
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'monogram' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('monogram')}
            >
              <Layers size={16} /> View 2: Monogram &amp; Stamp
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'packaging' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('packaging')}
            >
              <Box size={16} /> View 3: Packaging &amp; Horizontal Lockup
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'guidelines' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('guidelines')}
            >
              <Palette size={16} /> View 4: Palette &amp; Geometry Matrix
            </button>
          </div>

          {/* VIEW 1: Primary Wordmark Canvas */}
          {activeTab === 'primary' && (
            <motion.div 
              className={styles.showcaseCanvas}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              key={`primary-${activeBrand.id}`}
            >
              <div 
                className={`${styles.primaryDisplayBoard} ${getBrandCanvasClass(activeBrand.id)}`}
                style={{ backgroundColor: activeBrand.bgCanvas }}
              >
                <div className={styles.canvasMetaTop} style={{ color: activeBrand.textColor }}>
                  <span>{activeBrand.category}</span>
                  <span>{activeBrand.origin}</span>
                </div>

                <div className={styles.canvasWordmarkCenter}>
                  <div className={styles.canvasSymbolWrap}>
                    {activeBrand.symbolSvg}
                  </div>

                  <h1 
                    className={styles.canvasWordmarkText}
                    style={{ color: activeBrand.textColor }}
                  >
                    {activeBrand.name}
                  </h1>

                  <div className={styles.subDescriptorRow}>
                    <span 
                      className={styles.subDescriptorText}
                      style={{ color: activeBrand.textColor }}
                    >
                      {activeBrand.subDescriptor}
                    </span>
                  </div>
                </div>

                <div className={styles.canvasMetaBottom} style={{ color: activeBrand.textColor }}>
                  <span>{activeBrand.tagline}</span>
                  <span>8K HIGH-RESOLUTION VECTOR LOCKUP</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* VIEW 2: Monogram & Architectural Stamp */}
          {activeTab === 'monogram' && (
            <motion.div 
              className={styles.monogramContainer}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              key={`monogram-${activeBrand.id}`}
            >
              <div className={styles.monogramGrid}>
                {/* Monogram Hero Card (Light Canvas) */}
                <div 
                  className={styles.monogramHeroCard}
                  style={{ backgroundColor: activeBrand.bgCanvas, color: activeBrand.textColor }}
                >
                  <div className={styles.monogramCardTag} style={{ opacity: 0.7 }}>
                    Primary Vector Monogram
                  </div>
                  <div className={styles.monogramSymbolWrap}>
                    {activeBrand.monogramHeroSvg}
                  </div>
                  <div>
                    <div className={styles.monogramCardName}>{activeBrand.name} Monogram</div>
                    <div className={styles.monogramCardDesc}>Primary brand stamp for luxury collateral and product seals.</div>
                  </div>
                </div>

                {/* Monogram Contrast Card (Dark/Accent Substrate) */}
                <div 
                  className={styles.monogramHeroCard}
                  style={{ 
                    backgroundColor: activeBrand.textColor === '#FFFFFF' ? '#0f172a' : activeBrand.textColor, 
                    color: activeBrand.bgCanvas,
                    borderColor: activeBrand.accentColor
                  }}
                >
                  <div className={styles.monogramCardTag} style={{ color: activeBrand.accentColor }}>
                    Blind Deboss &amp; Foil Variation
                  </div>
                  <div className={styles.monogramSymbolWrap}>
                    {activeBrand.monogramHeroSvg}
                  </div>
                  <div>
                    <div className={styles.monogramCardName}>Inverted Contrast Seal</div>
                    <div className={styles.monogramCardDesc}>Optimized for hot-foil stamping on dark textured stocks.</div>
                  </div>
                </div>

                {/* Monogram Icon / Emblem Thumbnail Card */}
                <div 
                  className={styles.monogramHeroCard}
                  style={{ backgroundColor: '#111827', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.15)' }}
                >
                  <div className={styles.monogramCardTag} style={{ color: '#00d2ff' }}>
                    Micro Optical Size (32px - 64px)
                  </div>
                  <div className={styles.monogramSymbolWrap}>
                    {activeBrand.monogramSvg}
                  </div>
                  <div>
                    <div className={styles.monogramCardName}>Iconic App &amp; Cap Seal</div>
                    <div className={styles.monogramCardDesc}>Engineered with thick stroke terminals to prevent fill-in at 8mm size.</div>
                  </div>
                </div>
              </div>

              {/* View 2 Spec Box */}
              <div className={styles.monogramSpecsCard}>
                <div className={styles.specItem}>
                  <h4>{activeBrand.monogramSpecs.ratioTitle}</h4>
                  <p>{activeBrand.monogramSpecs.ratioDesc}</p>
                </div>
                <div className={styles.specItem}>
                  <h4>Geometric Construction</h4>
                  <p>{activeBrand.monogramSpecs.geometryNote}</p>
                </div>
                <div className={styles.specItem}>
                  <h4>Cross-Media Reproducibility</h4>
                  <p>{activeBrand.monogramSpecs.reproducibility}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* VIEW 3: Packaging & Horizontal Lockups */}
          {activeTab === 'packaging' && (
            <motion.div 
              className={styles.packagingGrid}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              key={`packaging-${activeBrand.id}`}
            >
              {/* Product Packaging Physical Mockup Card */}
              <div className={styles.packagingCard}>
                <div className={styles.packagingCardVisual}>
                  {activeBrand.packaging.item1Visual}
                </div>
                <div className={styles.packagingMeta}>
                  <h4>{activeBrand.packaging.item1Title}</h4>
                  <p>{activeBrand.packaging.item1Desc}</p>
                </div>
              </div>

              {/* Horizontal Secondary Lockup Card */}
              <div className={styles.packagingCard}>
                <div className={styles.packagingCardVisual}>
                  <div className={styles.horizontalLockupBox}>
                    <div className={styles.horizMonogram}>
                      {activeBrand.monogramSvg}
                    </div>
                    <div className={styles.horizDivider} style={{ backgroundColor: activeBrand.accentColor }} />
                    <div className={styles.horizText}>
                      <div className={styles.horizTitle} style={{ color: activeBrand.textColor }}>
                        {activeBrand.name}
                      </div>
                      <div className={styles.horizTag}>
                        {activeBrand.packaging.horizTag}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.packagingMeta}>
                  <h4>Horizontal Alternate Lockup</h4>
                  <p>Engineered for website navigation headers, letterheads, boutique store receipts, and side packaging panels.</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* VIEW 4: Palette & Brand Guidelines Matrix */}
          {activeTab === 'guidelines' && (
            <motion.div 
              className={styles.guidelinesContainer}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              key={`guidelines-${activeBrand.id}`}
            >
              {/* Color Palette Grid */}
              <div className={styles.paletteGrid}>
                {activeBrand.palette.map((c) => (
                  <div 
                    key={c.hex} 
                    className={styles.colorSwatchCard}
                    onClick={() => copyColor(c.hex)}
                    title="Click to copy HEX code"
                  >
                    <div className={styles.swatchBlock} style={{ backgroundColor: c.hex }} />
                    <div className={styles.swatchInfo}>
                      <div className={styles.swatchNameRow}>
                        <span className={styles.swatchName}>{c.name}</span>
                        <span className={styles.copyBadge}>
                          {copiedColor === c.hex ? <Check size={12} /> : c.hex}
                        </span>
                      </div>
                      <p className={styles.swatchRole}>{c.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Typography & Geometry Matrix */}
              <div className={styles.specMatrix}>
                <div className={styles.specBox}>
                  <h4>Typographic Principles</h4>
                  <ul>
                    {activeBrand.guidelines.typography.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.specBox}>
                  <h4>Architectural Geometry &amp; Rigor</h4>
                  <ul>
                    {activeBrand.guidelines.geometry.map((g, i) => (
                      <li key={i}>{g}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
