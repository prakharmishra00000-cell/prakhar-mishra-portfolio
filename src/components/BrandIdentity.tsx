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
            Bespoke high-end identity system engineered with architectural precision, quiet luxury visual language, and custom geometric typography. Featuring four interactive identity views.
          </p>
        </motion.div>

        {/* ====================================================================
           PART 1: CONTINUOUS RUNNING MARQUEE (ALL 6 BRANDS)
           ==================================================================== */}
        <div className={styles.topControlRow}>
          <div className={styles.categoryPill}>
            <span>Bespoke Vector Brand System &bull; Interactive Identity Studio &bull; Inspect 4 Design Views</span>
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
                    <span style={{ color: brand.textColor, opacity: 0.6 }}>01/01</span>
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
              <p>Explore the complete luxury brand design architecture across four comprehensive views.</p>
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
