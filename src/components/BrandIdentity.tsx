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
    artDirection: "Architectural minimalism, structural lines, grid-based balance, intelligent negative space.",
    origin: "ZÜRICH &bull; BASEL &bull; EST. 2026",
    subDescriptor: "ARCHITECTURE &bull; SPATIAL DESIGN &bull; ZÜRICH &bull; BASEL",
    bgCanvas: "#F8F8F6",
    textColor: "#292929",
    accentColor: "#B9B6AE",
    symbolSvg: (
      <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
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
    monogramHeroSvg: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <rect x="15" y="15" width="90" height="90" stroke="#292929" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.35" />
        <path d="M32 26V94M32 26H88M32 58H74" stroke="#292929" strokeWidth="8" strokeLinecap="square" />
        <rect x="64" y="48" width="10" height="10" fill="#B9B6AE" />
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
    tagline: "Parisian Understated Glamour",
    artDirection: "High-contrast editorial serif, perfume bottle silhouette lines, modern femininity, timeless grace.",
    origin: "PARIS &bull; GRASSE &bull; ÉDITION PRIVÉE",
    subDescriptor: "PARFUMS DE LUXE &bull; PARIS &bull; GRASSE &bull; ÉDITION PRIVÉE",
    bgCanvas: "#EFE5D7",
    textColor: "#302721",
    accentColor: "#B9A17A",
    symbolSvg: (
      <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
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
    monogramHeroSvg: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <ellipse cx="60" cy="60" rx="54" ry="54" stroke="#302721" strokeWidth="1.5" />
        <ellipse cx="60" cy="60" rx="47" ry="47" stroke="#B9A17A" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M42 32V88M42 32H78M42 59H68M42 88H78" stroke="#302721" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="56" y1="22" x2="68" y2="27" stroke="#B9A17A" strokeWidth="3.5" strokeLinecap="round" />
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
    tagline: "Futuristic Intelligence & Precision",
    artDirection: "Geometric Swiss grid precision, custom X nexus representing connection and future technology.",
    origin: "SILICON VALLEY &bull; TOKYO &bull; ZÜRICH",
    subDescriptor: "AUTONOMOUS COMPUTING &bull; QUANTUM NETWORKS &bull; AI INFRASTRUCTURE",
    bgCanvas: "#111827",
    textColor: "#FFFFFF",
    accentColor: "#476CFF",
    symbolSvg: (
      <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
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
    monogramHeroSvg: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <rect x="16" y="16" width="88" height="88" rx="22" stroke="#476CFF" strokeWidth="2" opacity="0.5" />
        <path d="M34 34L86 86M86 34L34 86" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
        <circle cx="60" cy="60" r="7.5" fill="#476CFF" />
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
    tagline: "Japanese Simplicity & Calm Luxury",
    artDirection: "Harmonious custom serif, abstract S renewal curves, botanical elegance, natural balance.",
    origin: "KYOTO &bull; TOKYO &bull; EST. 2026",
    subDescriptor: "ORGANIC EQUILIBRIUM &bull; BOTANICAL RESTORATION &bull; KYOTO &bull; TOKYO",
    bgCanvas: "#F5F1E9",
    textColor: "#30382F",
    accentColor: "#A3AA92",
    symbolSvg: (
      <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
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
    monogramHeroSvg: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="54" stroke="#A3AA92" strokeWidth="2" />
        <path 
          d="M74 40C74 30 52 30 47 42C42 54 76 62 71 76C66 88 44 86 44 76" 
          stroke="#30382F" 
          strokeWidth="5.5" 
          strokeLinecap="round" 
        />
        <circle cx="60" cy="60" r="3.5" fill="#A3AA92" />
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
    tagline: "Scandinavian Architectural Café",
    artDirection: "Espresso tones, minimal ceramic warmth, abstract N seam, direct-origin prestige.",
    origin: "COPENHAGEN &bull; OSLO &bull; EST. 2026",
    subDescriptor: "SPECIALTY COFFEE ROASTERY &bull; COPENHAGEN &bull; OSLO &bull; SINGLE ORIGIN",
    bgCanvas: "#F1E9DC",
    textColor: "#382820",
    accentColor: "#A77959",
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
    monogramHeroSvg: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="54" stroke="#382820" strokeWidth="1.8" />
        <circle cx="60" cy="60" r="47" stroke="#A77959" strokeWidth="1.2" strokeDasharray="4 4" />
        <path d="M43 33V87M77 33V87M43 33L77 87" stroke="#382820" strokeWidth="5" strokeLinecap="round" />
        <circle cx="60" cy="60" r="4" fill="#A77959" />
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
    tagline: "Timeless European High-End Beauty",
    artDirection: "Didone editorial contrast, botanical purity, golden-ratio pyramid monogram, unhurried luxury.",
    origin: "GENÈVE &bull; PARIS &bull; ÉDITION PRIVÉE",
    subDescriptor: "SOINS DE LA PEAU &bull; HAUTE BOTANIQUE &bull; GENÈVE &bull; PARIS",
    bgCanvas: "#EDE8DF",
    textColor: "#282825",
    accentColor: "#C5B6A2",
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
    monogramHeroSvg: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="56" stroke="#282825" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.5" />
        <circle cx="60" cy="60" r="50" stroke="#282825" strokeWidth="1.5" />
        <path d="M60 22L38 88H46L51.8 71H68.2L74 88H82L60 22ZM53.6 65L60 45L66.4 65H53.6Z" fill="#282825" />
        <circle cx="60" cy="88" r="2" fill="#282825" />
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
                className={styles.primaryDisplayBoard}
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
