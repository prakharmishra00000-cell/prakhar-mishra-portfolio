"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Download, Check, Layers, Eye, ShieldCheck, Award } from 'lucide-react';
import styles from './BrandIdentity.module.css';

export default function BrandIdentity() {
  const [activeTab, setActiveTab] = useState<'primary' | 'monogram' | 'packaging' | 'guidelines'>('primary');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const colors = [
    { name: "Warm Ivory", hex: "#EDE8DF", role: "Primary Background & Packaging Canvas" },
    { name: "Deep Charcoal", hex: "#282825", role: "Primary Typography & Monogram Geometry" },
    { name: "Muted Sage", hex: "#A5AA96", role: "Subtle Botanical Accent & Herbarium Notes" },
    { name: "Champagne Beige", hex: "#C5B6A2", role: "Understated Metallic & Foil Embossing" },
  ];

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
            <Award size={15} /> Exclusive Design Showcase &bull; Premium Logos &amp; Identity
          </div>
          <h2 className={`${styles.title} text-gradient`}>AURELLE &mdash; Haute Parfumerie &amp; Skincare House</h2>
          <p className={styles.subtitle}>
            An ultra-premium, quiet luxury skincare identity inspired by natural botanical purity, Swiss typographic precision, and timeless European cosmetic elegance.
          </p>
        </motion.div>

        {/* Brand System Selector Tabs */}
        <div className={styles.tabNav}>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'primary' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('primary')}
          >
            Primary Wordmark &amp; Monogram
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'monogram' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('monogram')}
          >
            Geometric Monogram &amp; Seal
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'packaging' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('packaging')}
          >
            Cosmetic Packaging Lockups
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'guidelines' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('guidelines')}
          >
            Brand Palette &amp; Proportions
          </button>
        </div>

        {/* Tab 1: Primary Wordmark Display Canvas */}
        {activeTab === 'primary' && (
          <motion.div 
            className={styles.showcaseCanvas}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.canvasBackgroundWarmIvory}>
              <div className={styles.canvasMetaTop}>
                <span>AURELLE &bull; BRAND IDENTITY SYSTEM</span>
                <span>FIG. 01 &mdash; PRIMARY LOGOTYPE</span>
              </div>

              {/* The Core Wordmark & Minimalist Monogram */}
              <div className={styles.primaryWordmarkCore}>
                {/* Monogram Seal */}
                <div className={styles.monogramSealEmblem}>
                  <svg width="68" height="68" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="47.5" stroke="#282825" strokeWidth="1" strokeDasharray="3 3" opacity="0.45" />
                    <circle cx="50" cy="50" r="42" stroke="#282825" strokeWidth="1.2" />
                    {/* Architectural Luxury Serif 'A' Monogram */}
                    <path 
                      d="M50 18L32 74H38.5L43.2 59.5H56.8L61.5 74H68L50 18ZM44.8 54.5L50 38.2L55.2 54.5H44.8Z" 
                      fill="#282825" 
                    />
                    {/* Subtle Cross-Bar Diamond Accent */}
                    <circle cx="50" cy="74" r="1.5" fill="#282825" />
                  </svg>
                </div>

                {/* Customized High-Contrast Luxury Serif Wordmark */}
                <h1 className={styles.brandWordmarkText}>AURELLE</h1>

                {/* Sub-labeling */}
                <div className={styles.subDescriptorRow}>
                  <span className={styles.subDescriptor}>SOINS DE LA PEAU</span>
                  <span className={styles.subDescriptorDot}>&bull;</span>
                  <span className={styles.subDescriptor}>HAUTE BOTANIQUE</span>
                  <span className={styles.subDescriptorDot}>&bull;</span>
                  <span className={styles.subDescriptor}>GENÈVE &bull; PARIS</span>
                </div>
              </div>

              <div className={styles.canvasMetaBottom}>
                <span>COLORWAY: DEEP CHARCOAL (#282825) ON WARM IVORY (#EDE8DF)</span>
                <span>EDITORIAL CONTRAST SERIF &bull; ZERO DECORATIVE DISTRACTION</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Geometric Monogram & Seal */}
        {activeTab === 'monogram' && (
          <motion.div 
            className={styles.monogramGrid}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Variant A: Warm Ivory Canvas */}
            <div className={styles.monogramCardIvory}>
              <div className={styles.cardHeaderSmall}>MONOGRAM SEAL &mdash; PACKAGING STAMP</div>
              <div className={styles.monogramCenter}>
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                  <circle cx="60" cy="60" r="56" stroke="#282825" strokeWidth="1.5" />
                  <circle cx="60" cy="60" r="50" stroke="#C5B6A2" strokeWidth="1" strokeDasharray="2 2" />
                  <path 
                    d="M60 26L40 88H47.5L52.5 72H67.5L72.5 88H80L60 26ZM54.2 66.5L60 48L65.8 66.5H54.2Z" 
                    fill="#282825" 
                  />
                </svg>
                <div className={styles.monogramCaption}>Embossed Bottle Cap &amp; Dropper Stamp</div>
              </div>
            </div>

            {/* Variant B: Deep Charcoal Inversion Canvas */}
            <div className={styles.monogramCardCharcoal}>
              <div className={styles.cardHeaderSmall}>INVERSE NOIR &mdash; OUTER CARTON LOCKUP</div>
              <div className={styles.monogramCenter}>
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                  <circle cx="60" cy="60" r="56" stroke="#EDE8DF" strokeWidth="1.5" />
                  <circle cx="60" cy="60" r="50" stroke="#C5B6A2" strokeWidth="1" strokeDasharray="2 2" />
                  <path 
                    d="M60 26L40 88H47.5L52.5 72H67.5L72.5 88H80L60 26ZM54.2 66.5L60 48L65.8 66.5H54.2Z" 
                    fill="#EDE8DF" 
                  />
                </svg>
                <div className={styles.monogramCaptionLight}>High-Contrast Luxury Outer Packaging</div>
              </div>
            </div>

            {/* Variant C: Muted Sage Organic Herbarium Canvas */}
            <div className={styles.monogramCardSage}>
              <div className={styles.cardHeaderSmall}>BOTANICAL VARIANT &mdash; SAGE &amp; CHAMPAGNE</div>
              <div className={styles.monogramCenter}>
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                  <circle cx="60" cy="60" r="56" stroke="#282825" strokeWidth="1.5" />
                  <circle cx="60" cy="60" r="50" stroke="#EDE8DF" strokeWidth="1" />
                  <path 
                    d="M60 26L40 88H47.5L52.5 72H67.5L72.5 88H80L60 26ZM54.2 66.5L60 48L65.8 66.5H54.2Z" 
                    fill="#282825" 
                  />
                </svg>
                <div className={styles.monogramCaption}>Organic Extract Certificate &amp; Seal</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Cosmetic Packaging Lockups */}
        {activeTab === 'packaging' && (
          <motion.div 
            className={styles.packagingGrid}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Glass Dropper Bottle Mockup Card */}
            <div className={styles.packagingCard}>
              <div className={styles.packagingCardVisual}>
                <div className={styles.dropperBottle}>
                  <div className={styles.bottleCap} />
                  <div className={styles.bottleNeck} />
                  <div className={styles.bottleGlass}>
                    <div className={styles.bottleLabel}>
                      <span className={styles.labelBrand}>AURELLE</span>
                      <span className={styles.labelProduct}>ELIXIR BOTANIQUE</span>
                      <span className={styles.labelSub}>Cellular Renewal Serum</span>
                      <span className={styles.labelVolume}>30 ml &bull; 1.0 fl. oz.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.packagingMeta}>
                <h4>Heavyweight Glass Serum Vial</h4>
                <p>Minimalist warm ivory label printed on tactile uncoated cotton stock with deep charcoal typography.</p>
              </div>
            </div>

            {/* Jar Card */}
            <div className={styles.packagingCard}>
              <div className={styles.packagingCardVisual}>
                <div className={styles.creamJar}>
                  <div className={styles.jarLid}>
                    <div className={styles.lidEmboss}>A</div>
                  </div>
                  <div className={styles.jarBase}>
                    <div className={styles.jarLabel}>
                      <span className={styles.labelBrandSmall}>AURELLE</span>
                      <span className={styles.labelProductSmall}>CRÈME SUBLIME</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.packagingMeta}>
                <h4>Frosted Amber Ceramic Jar</h4>
                <p>Geometric monogram &lsquo;A&rsquo; blind-embossed directly into the champagne-toned matte aluminium lid.</p>
              </div>
            </div>

            {/* Horizontal Secondary Lockup */}
            <div className={styles.packagingCard}>
              <div className={styles.packagingCardVisual}>
                <div className={styles.horizontalLockupBox}>
                  <div className={styles.horizMonogram}>
                    <svg width="44" height="44" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="47" stroke="#282825" strokeWidth="2" />
                      <path d="M50 20L34 76H40L44.5 61H55.5L60 76H66L50 20ZM46 56L50 40L54 56H46Z" fill="#282825" />
                    </svg>
                  </div>
                  <div className={styles.horizDivider} />
                  <div className={styles.horizText}>
                    <div className={styles.horizTitle}>AURELLE</div>
                    <div className={styles.horizTag}>HAUTE BEAUTÉ NATURELLE</div>
                  </div>
                </div>
              </div>
              <div className={styles.packagingMeta}>
                <h4>Horizontal Secondary Identity</h4>
                <p>Engineered for outer shipping boxes, boutique receipt headers, website navbars, and official certificates.</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 4: Brand Guidelines & Palette */}
        {activeTab === 'guidelines' && (
          <motion.div 
            className={styles.guidelinesContainer}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Color Palette Swatches */}
            <div className={styles.paletteGrid}>
              {colors.map((c) => (
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
                  <li><strong>Optical Contrast:</strong> Extreme stroke modulation inspired by Didone and transitional European serifs.</li>
                  <li><strong>Tracking &amp; Kerning:</strong> Generous, deliberate letter-spacing (+0.24em) to communicate unhurried luxury.</li>
                  <li><strong>Sub-branding Hierarchy:</strong> Pure Swiss neo-grotesque sans-serif in miniature optical size (0.65rem) for secondary descriptors.</li>
                </ul>
              </div>

              <div className={styles.specBox}>
                <h4>Architectural Geometry</h4>
                <ul>
                  <li><strong>Monogram Ratio:</strong> Golden ratio apex angle of 51.8&deg; mirroring Egyptian pyramids and classical arches.</li>
                  <li><strong>Zero-Noise Rule:</strong> Completely free of decorative filigrees, flourishes, or generic cosmetic droplets.</li>
                  <li><strong>Reproducibility:</strong> Vector curves engineered to scale flawlessly from 8K high-res billboards down to 8mm perfume caps.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
