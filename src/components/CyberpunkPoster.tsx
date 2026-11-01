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
    title: "KOWLOON GRID 09",
    tagline: "THE NEON DATA CANYON",
    imageSrc: "/posters/poster-4.jpg",
    location: "Sector 09 // Terminal Hazard Zone",
    elevation: "+850m Dense High-Rise Canyon",
    story: "Hyper-dense vertical cybernetic canyons with rain-slicked asphalt reflecting vivid multi-tiered neon signage. Augmented lone pedestrians navigate atmospheric alleyways beneath towering commercial facades, tangled fiber-optic conduits, and volumetric neon rain.",
    palette: [
      { name: "Cyan Terminal", hex: "#00F0FF" },
      { name: "Hazard Magenta", hex: "#FF0055" },
      { name: "Wet Asphalt Dark", hex: "#0E111A" },
      { name: "Amber Glare", hex: "#FFAA00" }
    ],
    credits: "URBAN CYBER-STREET CONCEPT &bull; VOLUMETRIC REFLECTIONS &bull; 8K ULTRA-HD MASTER"
  },
  {
    id: "poster-5",
    number: "05/06",
    title: "SYNTHETIC SKYLINE",
    tagline: "APEX MEGALOPOLIS 2099",
    imageSrc: "/posters/poster-5.jpg",
    location: "Upper Stratum // Central Spire Grid",
    elevation: "+2,400m Stratospheric Core",
    story: "Panoramic megalopolis night skyline glowing with thousands of illuminated spire windows and high-speed transit light trails. Giant holographic monoliths pulse against violet dusk clouds, capturing the sublime magnitude of 22nd-century urban engineering.",
    palette: [
      { name: "Spire Violet", hex: "#A855F7" },
      { name: "Skyline Cyan", hex: "#38BDF8" },
      { name: "Deep Stratosphere", hex: "#0B0E1B" },
      { name: "Window Gold", hex: "#FACC15" }
    ],
    credits: "METROPOLITAN PANORAMA &bull; STRATOSPHERIC LIGHT TRAILS &bull; 8K CONCEPT ART"
  },
  {
    id: "poster-6",
    number: "06/06",
    title: "MIDNIGHT DRIFT",
    tagline: "HIGHWAY INTERCEPTOR 01",
    imageSrc: "/posters/poster-6.jpg",
    location: "Corridor Express 01 // Shibuya Apex",
    elevation: "+600m High-Speed Artery",
    story: "Dense metropolitan expressway at the apex of midnight. Brilliant laser light streaks from autonomous pursuit interceptors slash through the wet city atmosphere, framed by towering neon skyscrapers and glowing holographic advertisements.",
    palette: [
      { name: "Amber Thruster", hex: "#F59E0B" },
      { name: "Laser Crimson", hex: "#EF4444" },
      { name: "Midnight Obsidian", hex: "#07090E" },
      { name: "Electric Aqua", hex: "#06B6D4" }
    ],
    credits: "KINETIC PURSUIT KEYFRAME &bull; ANAMORPHIC FLARE VOLUMETRICS &bull; 8K MASTER"
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
