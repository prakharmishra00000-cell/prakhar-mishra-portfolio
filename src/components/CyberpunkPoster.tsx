"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Download, 
  Maximize2, 
  Eye, 
  Check, 
  Film,
  ChevronLeft,
  ChevronRight,
  Layers
} from 'lucide-react';
import styles from './CyberpunkPoster.module.css';

interface PosterItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  imageSrc: string;
  story: string;
  location: string;
  elevation: string;
  palette: { name: string; hex: string }[];
  credits: string;
}

const postersList: PosterItem[] = [
  {
    id: "poster-1",
    number: "01/06",
    title: "NEO-SHINJUKU",
    tagline: "THE VERTICAL MEGALOPOLIS",
    imageSrc: "/posters/poster-1.jpg",
    location: "Sector 09 // Shinjuku Vertical Axis",
    elevation: "+3,200m Above Ground",
    story: "Colossal brutalist megatowers house layered residential super-blocks connected by high-altitude pedestrian skybridges and aerial magnetic docking conduits. Volumetric rain washes across endless holographic billboards, creating saturated reflections along mirror-gloss titanium roadways.",
    palette: [
      { name: "Acid Magenta", hex: "#FF007F" },
      { name: "Electric Cyan", hex: "#00D2FF" },
      { name: "Neon Violet", hex: "#8A2BE2" },
      { name: "Tokyo Obsidian", hex: "#080C18" }
    ],
    credits: "DIRECTED BY PRAKHAR MISHRA &bull; CONCEPT ART &bull; UNREAL 5 VOLUMETRICS &bull; OCTANE X RAYTRACING &bull; 8K RESOLUTION"
  },
  {
    id: "poster-2",
    number: "02/06",
    title: "SHIBUYA SUB-LEVEL 04",
    tagline: "THE NEON LABYRINTH",
    imageSrc: "/posters/poster-2.jpg",
    location: "Subterranean Quad 04 // Shibuya Core",
    elevation: "-180m Sub-surface",
    story: "Beneath the surface megastructures lies the subterranean bazaar. Saturated paper lanterns flicker against rain-soaked neon stalls, steam ducts billow across damp alleyways, and cybernetically augmented crowds navigate high-density synthetic spice markets.",
    palette: [
      { name: "Crimson Red", hex: "#E50914" },
      { name: "Lantern Amber", hex: "#FF9900" },
      { name: "Cobalt Blue", hex: "#1A56DB" },
      { name: "Dark Wet Asphalt", hex: "#11141F" }
    ],
    credits: "SUBTERRANEAN PRODUCTION &bull; KEYFRAME 02 &bull; 8K CONCEPT ART &bull; UNREAL ENGINE 5.4"
  },
  {
    id: "poster-3",
    number: "03/06",
    title: "ORBITAL ELEVATOR",
    tagline: "APEX OF THE MEGALOPOLIS",
    imageSrc: "/posters/poster-3.jpg",
    location: "Stratospheric Tether // Sector Zero",
    elevation: "+36,000km Geostationary Apex",
    story: "A colossal carbon-nanotube space elevator tether piercing through dusk stratospheric cloudbanks into low Earth orbit. Cyan plasma propulsion rings pulse along the guide rails as trans-atmospheric shuttles dock with glowing retro-thrusters.",
    palette: [
      { name: "Plasma Cyan", hex: "#00F0FF" },
      { name: "Dusk Violet", hex: "#4B0082" },
      { name: "Solar Gold", hex: "#FFB800" },
      { name: "Void Black", hex: "#05070C" }
    ],
    credits: "ORBITAL CONCEPT &bull; ARCHITECTURAL SPEC &bull; OCTANE 8K MASTER &bull; CINEMATIC KEYFRAME"
  },
  {
    id: "poster-4",
    number: "04/06",
    title: "AERODYNE HIGHWAY",
    tagline: "CLOUD RUNNERS // AIRSPACE SECTOR",
    imageSrc: "/posters/poster-4.jpg",
    location: "Skyway Corridor 88 // High-Speed Transit",
    elevation: "+1,800m Aerial Concourse",
    story: "Multi-lane aerial highways suspended thousands of meters above city streets. Flying aerodynes and heavy cargo skimmers weave through torrential volumetric rain, carving luminous magenta and cyan light trails across towering corporate architecture.",
    palette: [
      { name: "Turbo Cyan", hex: "#00E5FF" },
      { name: "Laser Magenta", hex: "#FF006E" },
      { name: "Atmospheric Indigo", hex: "#1C1438" },
      { name: "Carbon Grey", hex: "#1A1D28" }
    ],
    credits: "VEHICULAR CONCEPT ART &bull; MOTION BLUR DYNAMICS &bull; 8K ULTRA-HD &bull; PRAKHAR MISHRA"
  },
  {
    id: "poster-5",
    number: "05/06",
    title: "CYBERNETIC SHRINE",
    tagline: "DIGITAL SHINTO // NEON TORII",
    imageSrc: "/posters/poster-5.jpg",
    location: "Kanda Forest Preserve // Data District",
    elevation: "+450m Elevated Sanctuary",
    story: "An ancient traditional vermilion Torii gate seamlessly reinforced with fiber-optic micro-cables and glowing holographic sacred glyphs, standing serene in misty bamboo glades beneath the humming monoliths of quantum server vaults.",
    palette: [
      { name: "Vermilion Torii", hex: "#FF3300" },
      { name: "Bioluminescent Mint", hex: "#00FFB2" },
      { name: "Deep Bamboo Mist", hex: "#0B1D19" },
      { name: "Temple Gold", hex: "#D4AF37" }
    ],
    credits: "ENVIRONMENTAL DESIGN &bull; SACRED ARCHITECTURE &bull; 8K MASTER KEYFRAME &bull; UNREAL 5"
  },
  {
    id: "poster-6",
    number: "06/06",
    title: "NEO-DOCKS SECTOR 12",
    tagline: "THE INDUSTRIAL BASIN & DARK WATERS",
    imageSrc: "/posters/poster-6.jpg",
    location: "Tokyo Bay Super-Basin // Freight District",
    elevation: "+0m Sea Level",
    story: "Automated robotic container cranes towering 400 meters above oil-slicked dark harbor waters. Massive autonomous cargo leviathans navigate the bay under a heavy industrial night sky illuminated by amber sodium floodlights and cobalt warning signals.",
    palette: [
      { name: "Industrial Amber", hex: "#FF7700" },
      { name: "Harbor Cobalt", hex: "#0044FF" },
      { name: "Dark Water Slate", hex: "#0A101D" },
      { name: "Oxidized Rust", hex: "#8B3A1C" }
    ],
    credits: "INDUSTRIAL CONCEPT ART &bull; WATER REFLECTION VOLUMETRICS &bull; 8K RENDER &bull; 2099"
  }
];

export default function CyberpunkPoster() {
  const [selectedPosterId, setSelectedPosterId] = useState<string>("poster-1");
  const [activeView, setActiveView] = useState<'poster' | 'details' | 'raw'>('poster');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const activePoster = postersList.find(p => p.id === selectedPosterId) || postersList[0];

  const copyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <section id="cyberpunk-poster" className={styles.posterSection}>
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
            <Sparkles size={15} /> 8K Visual Concept &bull; Cinematic Keyframe Poster Series
          </div>
          <h2 className={`${styles.title} text-gradient`}>Cyberpunk Metropolis // 8K Aesthetic Posters</h2>
          <p className={styles.subtitle}>
            A series of six ultra-high-resolution architectural concept posters capturing the vertical density, volumetric neon rain, and brutalist-cybernetic environments of Neo-Shinjuku 2099. Slowly moving in continuous marquee form below.
          </p>
        </motion.div>

        {/* ====================================================================
           PART 1: CONTINUOUS RUNNING MARQUEE (ALL 6 POSTERS MOVING)
           ==================================================================== */}
        <div className={styles.topControlRow}>
          <div className={styles.categoryPill}>
            <span>6 Collector Posters &bull; Running Marquee &bull; Click any poster to inspect</span>
          </div>

          <div className={styles.scrollNavControls}>
            <button 
              className={styles.scrollNavBtn} 
              onClick={() => {
                const el = document.getElementById('posterCarouselTrack');
                if (el) el.scrollBy({ left: -340, behavior: 'smooth' });
              }}
              aria-label="Previous Poster"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              className={styles.scrollNavBtn} 
              onClick={() => {
                const el = document.getElementById('posterCarouselTrack');
                if (el) el.scrollBy({ left: 340, behavior: 'smooth' });
              }}
              aria-label="Next Poster"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Running Form Continuous Carousel */}
        <div 
          id="posterCarouselTrack"
          className={styles.carouselContainer}
        >
          <div className={styles.carouselTrack}>
            {[...postersList, ...postersList].map((p, idx) => (
              <div 
                key={`${p.id}-${idx}`}
                className={`${styles.posterMarqueeCard} ${selectedPosterId === p.id ? styles.posterMarqueeCardActive : ''}`}
                onClick={() => {
                  setSelectedPosterId(p.id);
                  const inspector = document.getElementById('posterMasterInspector');
                  if (inspector) inspector.scrollIntoView({ behavior: 'smooth' });
                }}
                title={`Click to inspect ${p.title} in 8K UHD`}
              >
                <img 
                  src={p.imageSrc} 
                  alt={p.title} 
                  className={styles.cardImg} 
                />
                <div className={styles.cardVignette} />
                <span className={styles.cardTopBadge}>{p.number} // 8K</span>
                <div className={styles.cardBottomInfo}>
                  <span className={styles.cardSubline}>{p.tagline}</span>
                  <h4 className={styles.cardTitle}>{p.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ====================================================================
           PART 2: INTERACTIVE 8K POSTER MASTER INSPECTOR
           ==================================================================== */}
        <div id="posterMasterInspector" className={styles.inspectorSection}>
          <div className={styles.inspectorGrid}>
            {/* Left: Master Poster Frame */}
            <motion.div 
              className={styles.masterFrameWrapper}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              key={`master-${activePoster.id}`}
            >
              <div className={styles.masterGlow} />

              <div className={styles.masterFrame}>
                <img 
                  src={activePoster.imageSrc} 
                  alt={activePoster.title} 
                  className={styles.masterImg}
                  style={{
                    filter: activeView === 'details' ? 'contrast(1.15) brightness(1.05)' : 'none',
                    transform: activeView === 'details' ? 'scale(1.25)' : 'scale(1)'
                  }}
                />

                <div className={styles.masterOverlay} />

                {/* Top Badges */}
                <div className={styles.masterTopBadges}>
                  <span className={styles.badge8K}>8K ULTRA-HD MASTER</span>
                  <span className={styles.badgeIndex}>{activePoster.number} // COLLECTOR EDITION</span>
                </div>

                {/* Movie Poster Typography Framing */}
                {activeView !== 'raw' && (
                  <div className={styles.masterTypography}>
                    <span className={styles.movieTagline}>{activePoster.tagline}</span>
                    <h3 className={styles.movieTitle}>{activePoster.title}</h3>
                    <div className={styles.movieCredits}>{activePoster.credits}</div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Right: Technical Breakdown & Controls */}
            <div className={styles.masterDetailsColumn}>
              {/* Story & Lore */}
              <div className={styles.storyCard}>
                <h3>
                  <Film size={20} color="#ff007f" />
                  {activePoster.title} // Environmental Lore
                </h3>
                <p>{activePoster.story}</p>
              </div>

              {/* Specifications Grid */}
              <div className={styles.metaGrid}>
                <div className={styles.metaCard}>
                  <span className={styles.metaLabel}>Coordinates / Sector</span>
                  <span className={styles.metaVal}>{activePoster.location}</span>
                  <span className={styles.metaSub}>Elevation: {activePoster.elevation}</span>
                </div>

                <div className={styles.metaCard}>
                  <span className={styles.metaLabel}>Master Resolution</span>
                  <span className={styles.metaVal}>7680 &times; 4320 (8K UHD)</span>
                  <span className={styles.metaSub}>Uncompressed 300 DPI Fine-Art Master</span>
                </div>

                <div className={styles.metaCard}>
                  <span className={styles.metaLabel}>Rendering Pipeline</span>
                  <span className={styles.metaVal}>Octane X // Unreal Engine 5.4</span>
                  <span className={styles.metaSub}>Volumetric path-tracing, rain refraction &amp; bloom</span>
                </div>

                <div className={styles.metaCard}>
                  <span className={styles.metaLabel}>Curated Series</span>
                  <span className={styles.metaVal}>Poster {activePoster.number} of 06</span>
                  <span className={styles.metaSub}>Collector Concept Art Portfolio Series</span>
                </div>
              </div>

              {/* Color Matrix */}
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8292ab', marginBottom: '0.75rem' }}>
                  Chromatic Palette Matrix (Click to Copy HEX)
                </div>
                <div className={styles.paletteBar}>
                  {activePoster.palette.map((c) => (
                    <button 
                      key={c.hex}
                      className={styles.paletteChip}
                      onClick={() => copyColor(c.hex)}
                      title={`Click to copy ${c.name} (${c.hex})`}
                    >
                      <span className={styles.paletteDot} style={{ backgroundColor: c.hex, color: c.hex }} />
                      <span>{copiedColor === c.hex ? <Check size={12} /> : c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className={styles.actionBtnRow}>
                <a 
                  href={activePoster.imageSrc} 
                  download={`${activePoster.title.replace(/\s+/g, '_')}_8K_Poster.jpg`}
                  className={styles.downloadBtn}
                >
                  <Download size={18} /> Download 8K Wallpaper
                </a>

                <button 
                  className={styles.secondaryActionBtn}
                  onClick={() => {
                    if (activeView === 'poster') setActiveView('details');
                    else if (activeView === 'details') setActiveView('raw');
                    else setActiveView('poster');
                  }}
                >
                  <Eye size={18} /> 
                  {activeView === 'poster' ? 'Zoom 8K Macro' : activeView === 'details' ? 'View Clean Artwork' : 'View Framed Poster'}
                </button>

                <a 
                  href={activePoster.imageSrc} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.secondaryActionBtn}
                  title="Open full resolution in new browser tab"
                >
                  <Maximize2 size={18} /> Fullscreen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
