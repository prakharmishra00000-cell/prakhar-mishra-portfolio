"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Check, Coffee, Sparkles } from 'lucide-react';
import styles from './BrandIdentity.module.css';

export default function BrandIdentity() {
  const [selectedBrand, setSelectedBrand] = useState<'aurelle' | 'noire'>('noire');
  const [activeTab, setActiveTab] = useState<'primary' | 'monogram' | 'packaging' | 'guidelines'>('primary');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const aurelleColors = [
    { name: "Warm Ivory", hex: "#EDE8DF", role: "Primary Background & Packaging Canvas" },
    { name: "Deep Charcoal", hex: "#282825", role: "Primary Typography & Monogram Geometry" },
    { name: "Muted Sage", hex: "#A5AA96", role: "Subtle Botanical Accent & Herbarium Notes" },
    { name: "Champagne Beige", hex: "#C5B6A2", role: "Understated Metallic & Foil Embossing" },
  ];

  const noireColors = [
    { name: "Espresso Brown", hex: "#382820", role: "Deep Roasted Espresso Primary Tone" },
    { name: "Warm Cream", hex: "#F1E9DC", role: "Minimalist Scandinavian Ceramic Canvas" },
    { name: "Muted Copper", hex: "#A77959", role: "Architectural Precision Foil & Stamping" },
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
            <Award size={15} /> Exclusive Design Showcase &bull; Premium Logos &amp; Identity Systems
          </div>
          <h2 className={`${styles.title} text-gradient`}>Ultra-Premium Brand Identity Studio</h2>
          <p className={styles.subtitle}>
            Architectural precision, quiet luxury visual language, and custom geometric typography engineered for international luxury houses and specialty craft institutions.
          </p>
        </motion.div>

        {/* Brand Selector Bar */}
        <div className={styles.brandSelectorRow}>
          <button 
            className={`${styles.brandPill} ${selectedBrand === 'noire' ? styles.brandPillActive : ''}`}
            onClick={() => { setSelectedBrand('noire'); setActiveTab('primary'); }}
          >
            <Coffee size={15} /> NOIRÉ &mdash; Specialty Coffee House
          </button>
          <button 
            className={`${styles.brandPill} ${selectedBrand === 'aurelle' ? styles.brandPillActive : ''}`}
            onClick={() => { setSelectedBrand('aurelle'); setActiveTab('primary'); }}
          >
            <Sparkles size={15} /> AURELLE &mdash; Haute Skincare House
          </button>
        </div>

        {/* View Mode Sub-tabs */}
        <div className={styles.tabNav}>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'primary' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('primary')}
          >
            Primary Wordmark &amp; Symbol
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'monogram' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('monogram')}
          >
            {selectedBrand === 'noire' ? "Abstract N Monogram & Seal" : "Geometric A Monogram & Seal"}
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'packaging' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('packaging')}
          >
            {selectedBrand === 'noire' ? "Coffee Packaging & Cups" : "Cosmetic Packaging Lockups"}
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'guidelines' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('guidelines')}
          >
            Color Palette &amp; Geometry
          </button>
        </div>

        {/* ====================================================================
           NOIRÉ BRAND IDENTITY SYSTEM (Scandinavian Specialty Coffee)
           ==================================================================== */}
        {selectedBrand === 'noire' && (
          <>
            {/* Tab 1: NOIRÉ Primary Wordmark Canvas */}
            {activeTab === 'primary' && (
              <motion.div 
                className={styles.showcaseCanvas}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.noireCanvasWarmCream}>
                  <div className={styles.canvasMetaTopNoire}>
                    <span>NOIRÉ &bull; SPECIALTY COFFEE ROASTERS</span>
                    <span>FIG. 01 &mdash; ARCHITECTURAL WORDMARK</span>
                  </div>

                  <div className={styles.noireWordmarkCenter}>
                    {/* Abstract Geometric Coffee Bean / Architecture Symbol */}
                    <div className={styles.noireSymbolWrap}>
                      <svg width="72" height="72" viewBox="0 0 100 100" fill="none">
                        <circle cx="50" cy="50" r="46" stroke="#382820" strokeWidth="1.5" />
                        <circle cx="50" cy="50" r="40" stroke="#A77959" strokeWidth="1" strokeDasharray="3 3" />
                        {/* Abstract Geometric Split S-Curve mirroring coffee roasting seam & architectural N */}
                        <path 
                          d="M36 28V72M64 28V72M36 28L64 72" 
                          stroke="#382820" 
                          strokeWidth="3.5" 
                          strokeLinecap="round" 
                        />
                        <circle cx="50" cy="50" r="3" fill="#A77959" />
                      </svg>
                    </div>

                    {/* Bold Yet Elegant Custom Typographic Wordmark: NOIRÉ */}
                    <h1 className={styles.noireWordmarkText}>NOIRÉ</h1>

                    <div className={styles.noireSubDescriptorRow}>
                      <span className={styles.noireSubDescriptor}>SPECIALTY COFFEE ROASTERY</span>
                      <span className={styles.noireSubDot}>&bull;</span>
                      <span className={styles.noireSubDescriptor}>COPENHAGEN &bull; OSLO</span>
                      <span className={styles.noireSubDot}>&bull;</span>
                      <span className={styles.noireSubDescriptor}>SINGLE ORIGIN SELECTION</span>
                    </div>
                  </div>

                  <div className={styles.canvasMetaBottomNoire}>
                    <span>PALETTE: ESPRESSO BROWN (#382820) ON WARM CREAM (#F1E9DC)</span>
                    <span>SCANDINAVIAN MODERN MINIMALISM &bull; ARCHITECTURAL PRECISION</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 2: NOIRÉ Monogram & Cup Stamp Variants */}
            {activeTab === 'monogram' && (
              <motion.div 
                className={styles.monogramGrid}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Variant 1: Warm Cream Ceramic */}
                <div className={styles.noireMonogramCream}>
                  <div className={styles.cardHeaderSmallNoire}>PRIMARY PACKAGING STAMP</div>
                  <div className={styles.monogramCenter}>
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                      <rect x="10" y="10" width="100" height="100" rx="16" stroke="#382820" strokeWidth="2" />
                      <circle cx="60" cy="60" r="40" stroke="#A77959" strokeWidth="1" strokeDasharray="2 2" />
                      <path d="M44 38V82M76 38V82M44 38L76 82" stroke="#382820" strokeWidth="4.5" strokeLinecap="round" />
                    </svg>
                    <div className={styles.monogramCaptionNoire}>Embossed Takeaway Cup &amp; Sleeve Stamp</div>
                  </div>
                </div>

                {/* Variant 2: Deep Espresso Roast Inversion */}
                <div className={styles.noireMonogramEspresso}>
                  <div className={styles.cardHeaderSmallCream}>INVERSE ESPRESSO &mdash; BEAN BAG POUCH</div>
                  <div className={styles.monogramCenter}>
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                      <circle cx="60" cy="60" r="50" stroke="#F1E9DC" strokeWidth="2" />
                      <path d="M44 38V82M76 38V82M44 38L76 82" stroke="#A77959" strokeWidth="4.5" strokeLinecap="round" />
                    </svg>
                    <div className={styles.monogramCaptionLight}>Matte Foil Stamping on Roasted Coffee Pouch</div>
                  </div>
                </div>

                {/* Variant 3: Muted Copper Metallic Accent */}
                <div className={styles.noireMonogramCopper}>
                  <div className={styles.cardHeaderSmallNoire}>METALLIC COPPER &mdash; BARISTA SEAL</div>
                  <div className={styles.monogramCenter}>
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                      <polygon points="60,16 100,84 20,84" stroke="#382820" strokeWidth="2" fill="none" />
                      <circle cx="60" cy="62" r="18" stroke="#382820" strokeWidth="1.5" />
                      <path d="M53 50V74M67 50V74M53 50L67 74" stroke="#382820" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    <div className={styles.monogramCaptionNoire}>Direct Origin Roaster Batch Certificate</div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 3: NOIRÉ Packaging Lockups & Cup Presentation */}
            {activeTab === 'packaging' && (
              <motion.div 
                className={styles.packagingGrid}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Takeaway Coffee Cup Mockup */}
                <div className={styles.packagingCard}>
                  <div className={styles.packagingCardVisualNoire}>
                    <div className={styles.coffeeCup}>
                      <div className={styles.cupLid} />
                      <div className={styles.cupBody}>
                        <div className={styles.cupSleeve}>
                          <span className={styles.cupBrand}>NOIRÉ</span>
                          <span className={styles.cupRoast}>GEISHA &bull; ETHIOPIA YIRGACHEFFE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.packagingMeta}>
                    <h4>Minimalist Ceramic Takeaway Cup</h4>
                    <p>Biodegradable warm cream cup with tactile kraft sleeve featuring the hot-stamped NOIRÉ wordmark.</p>
                  </div>
                </div>

                {/* 250g Whole Bean Valve Pouch */}
                <div className={styles.packagingCard}>
                  <div className={styles.packagingCardVisualNoire}>
                    <div className={styles.coffeePouch}>
                      <div className={styles.pouchSeal} />
                      <div className={styles.pouchBody}>
                        <div className={styles.pouchLabel}>
                          <span className={styles.pouchBrand}>NOIRÉ</span>
                          <span className={styles.pouchSub}>NORDIC LIGHT ROAST</span>
                          <span className={styles.pouchTasting}>Jasmine &bull; Bergamot &bull; Peach</span>
                          <span className={styles.pouchNet}>250g / 8.8 oz &bull; Whole Bean</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.packagingMeta}>
                    <h4>250g Nitrogen-Flushed Bean Pouch</h4>
                    <p>Espresso brown matte gusset bag with degassing valve, pure typographic label, and copper foil detailing.</p>
                  </div>
                </div>

                {/* Horizontal Architectural Lockup */}
                <div className={styles.packagingCard}>
                  <div className={styles.packagingCardVisualNoire}>
                    <div className={styles.horizontalNoireLockup}>
                      <div className={styles.horizNMonogram}>
                        <svg width="42" height="42" viewBox="0 0 80 80" fill="none">
                          <rect width="80" height="80" rx="12" fill="#382820" />
                          <path d="M28 24V56M52 24V56M28 24L52 56" stroke="#F1E9DC" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className={styles.horizNoireDivider} />
                      <div className={styles.horizNoireText}>
                        <div className={styles.horizNoireTitle}>NOIRÉ</div>
                        <div className={styles.horizNoireTag}>NORDIC SPECIALTY COFFEE</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.packagingMeta}>
                    <h4>Horizontal Signage &amp; Digital Lockup</h4>
                    <p>Designed for café exterior brass signage, menu boards, mobile application headers, and wholesale accounts.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 4: NOIRÉ Guidelines & Color Palette */}
            {activeTab === 'guidelines' && (
              <motion.div 
                className={styles.guidelinesContainer}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.paletteGrid}>
                  {noireColors.map((c) => (
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

                <div className={styles.specMatrix}>
                  <div className={styles.specBox}>
                    <h4>Scandinavian Architectural Typometry</h4>
                    <ul>
                      <li><strong>Optical Kerning:</strong> Strict +0.28em tracking with a sculpted acute accent (&Eacute;) cut at a precise 45&deg; angle.</li>
                      <li><strong>Contrast &amp; Weight:</strong> High vertical stem weight with refined, razor-thin transitional cross-members.</li>
                      <li><strong>Zero Generic Clich&eacute;s:</strong> No literal coffee mugs, beans, or steam swirls. Pure timeless modernism.</li>
                    </ul>
                  </div>

                  <div className={styles.specBox}>
                    <h4>Geometric Construction (N Monogram)</h4>
                    <ul>
                      <li><strong>Ratio:</strong> 1:1 square bounding box with 1:1.618 golden ratio internal diagonals.</li>
                      <li><strong>Packaging Adaptability:</strong> Vector lines optimized for rubber stamping, hot-copper debossing, and ceramic glaze transfers.</li>
                      <li><strong>Clean Visual Negative Space:</strong> Balanced open quadrants ensure maximum readability from distance or on micro app icons.</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </>
        )}

        {/* ====================================================================
           AURELLE BRAND IDENTITY SYSTEM (Luxury Skincare House)
           ==================================================================== */}
        {selectedBrand === 'aurelle' && (
          <>
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

                  <div className={styles.primaryWordmarkCore}>
                    <div className={styles.monogramSealEmblem}>
                      <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
                        <circle cx="50" cy="50" r="47.5" stroke="#282825" strokeWidth="1" strokeDasharray="3 3" opacity="0.45" />
                        <circle cx="50" cy="50" r="42" stroke="#282825" strokeWidth="1.2" />
                        <path 
                          d="M50 18L32 74H38.5L43.2 59.5H56.8L61.5 74H68L50 18ZM44.8 54.5L50 38.2L55.2 54.5H44.8Z" 
                          fill="#282825" 
                        />
                        <circle cx="50" cy="74" r="1.5" fill="#282825" />
                      </svg>
                    </div>

                    <h1 className={styles.brandWordmarkText}>AURELLE</h1>

                    <div className={styles.subDescriptorRow}>
                      <span className={styles.subDescriptor}>SOINS DE LA PEAU</span>
                      <span className={styles.subDescriptorDot}>&bull;</span>
                      <span className={styles.subDescriptor}>HAUTE BOTANIQUE</span>
                      <span className={styles.subDescriptorDot}>&bull;</span>
                      <span className={styles.subDescriptor}>GEN&Egrave;VE &bull; PARIS</span>
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

                <div className={styles.packagingCard}>
                  <div className={styles.packagingCardVisual}>
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
                  </div>
                  <div className={styles.packagingMeta}>
                    <h4>Frosted Amber Ceramic Jar</h4>
                    <p>Geometric monogram &lsquo;A&rsquo; blind-embossed directly into the champagne-toned matte aluminium lid.</p>
                  </div>
                </div>

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
                        <div className={styles.horizTag}>HAUTE BEAUT&Eacute; NATURELLE</div>
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
                <div className={styles.paletteGrid}>
                  {aurelleColors.map((c) => (
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

                <div className={styles.specMatrix}>
                  <div className={styles.specBox}>
                    <h4>Typographic Principles</h4>
                    <ul>
                      <li><strong>Optical Contrast:</strong> Extreme stroke modulation inspired by Didone and transitional European serifs.</li>
                      <li><strong>Tracking &amp; Kerning:</strong> Generous, deliberate letter-spacing (+0.28em) to communicate unhurried luxury.</li>
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
          </>
        )}
      </div>
    </section>
  );
}
