"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Flower2, 
  Building, 
  ShieldAlert, 
  Boxes, 
  Globe2, 
  Check,
  Maximize2
} from 'lucide-react';
import styles from './DigitalArt.module.css';

interface Artwork {
  id: string;
  title: string;
  seriesNumber: string;
  medium: string;
  concept: string;
  visual: React.ReactNode;
}

interface ArtCollection {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  tagline: string;
  artDirection: string;
  description: string;
  palette: { name: string; hex: string }[];
  curatedCount: string;
  heroArtwork: React.ReactNode;
  artworks: Artwork[];
}

const artCollections: ArtCollection[] = [
  {
    id: "aurora",
    name: "AURORA",
    subtitle: "Surreal Dreamscapes & Impossible Architecture",
    category: "Surreal Digital Art",
    tagline: "Dreamcore Aesthetics & Cinematic Weightlessness",
    artDirection: "Contemporary surrealism, floating monolithic sculptures, atmospheric depth, realistic 3D textures, and ethereal light.",
    description: "An imaginative dreamlike universe featuring impossible floating temples, organic monolithic spheres, soft volumetric clouds, and solitary silhouettes standing at the threshold of the infinite.",
    curatedCount: "6 Curated Works",
    palette: [
      { name: "Dusty Lavender", hex: "#B8A9C9" },
      { name: "Pale Peach", hex: "#F7CAC9" },
      { name: "Warm Ivory", hex: "#FDFBF7" },
      { name: "Soft Blue", hex: "#92A8D1" },
      { name: "Muted Rose", hex: "#D5A6BD" }
    ],
    heroArtwork: (
      <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="auroraSky" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#92A8D1" />
            <stop offset="50%" stopColor="#B8A9C9" />
            <stop offset="85%" stopColor="#F7CAC9" />
            <stop offset="100%" stopColor="#D5A6BD" />
          </linearGradient>
          <radialGradient id="sunGlow" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#FDFBF7" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#F7CAC9" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#B8A9C9" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="600" height="400" fill="url(#auroraSky)" />
        <circle cx="300" cy="160" r="140" fill="url(#sunGlow)" />
        {/* Floating Impossible Monolith */}
        <polygon points="300,60 380,180 300,300 220,180" fill="#FDFBF7" opacity="0.85" />
        <polygon points="300,60 380,180 300,300" fill="#B8A9C9" opacity="0.4" />
        {/* Floating Ring */}
        <ellipse cx="300" cy="200" rx="160" ry="35" stroke="#FDFBF7" strokeWidth="3" strokeDasharray="6 6" opacity="0.7" />
        {/* Abstract Clouds */}
        <path d="M0,320 Q120,290 240,320 T480,310 T600,330 L600,400 L0,400 Z" fill="#D5A6BD" opacity="0.6" />
        <path d="M0,350 Q160,330 320,350 T600,340 L600,400 L0,400 Z" fill="#7E6C8E" opacity="0.8" />
        {/* Solitary Silhouette */}
        <circle cx="300" cy="335" r="4" fill="#2E2438" />
        <path d="M296,340 L304,340 L302,360 L298,360 Z" fill="#2E2438" />
      </svg>
    ),
    artworks: [
      {
        id: "aurora-1",
        title: "The Floating Sanctuary",
        seriesNumber: "01/06",
        medium: "Cinematic 3D & Digital Matte Painting",
        concept: "A colossal cantilevered temple levitating above dusty rose cloudbanks, illuminated by a low celestial horizon.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#92A8D1" />
            <circle cx="200" cy="110" r="80" fill="#F7CAC9" opacity="0.7" />
            <polygon points="200,40 260,130 200,210 140,130" fill="#FDFBF7" opacity="0.9" />
            <ellipse cx="200" cy="140" rx="110" ry="22" stroke="#FDFBF7" strokeWidth="2" opacity="0.6" />
            <path d="M0,230 Q100,210 200,230 T400,220 L400,300 L0,300 Z" fill="#B8A9C9" />
            <circle cx="200" cy="245" r="3" fill="#2E2438" />
            <rect x="198" y="249" width="4" height="15" fill="#2E2438" />
          </svg>
        )
      },
      {
        id: "aurora-2",
        title: "Pillars of Somnolence",
        seriesNumber: "02/06",
        medium: "Surreal Environmental Concept",
        concept: "Infinite marble colonnades rising out of a mirror-smooth pastel lake under double crescent moons.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#B8A9C9" />
            <path d="M0,180 L400,180 L400,300 L0,300 Z" fill="#7E6C8E" opacity="0.5" />
            <line x1="80" y1="40" x2="80" y2="240" stroke="#FDFBF7" strokeWidth="12" />
            <line x1="160" y1="60" x2="160" y2="230" stroke="#FDFBF7" strokeWidth="10" />
            <line x1="240" y1="50" x2="240" y2="235" stroke="#FDFBF7" strokeWidth="11" />
            <line x1="320" y1="70" x2="320" y2="225" stroke="#FDFBF7" strokeWidth="9" />
            <circle cx="200" cy="80" r="35" stroke="#F7CAC9" strokeWidth="4" fill="none" />
          </svg>
        )
      },
      {
        id: "aurora-3",
        title: "Ascension of the Monolith",
        seriesNumber: "03/06",
        medium: "Sculptural Dreamcore Render",
        concept: "A mirrored obelisk reflecting fragments of ancient architectures while slowly breaking into weightless shards.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#F7CAC9" />
            <polygon points="170,260 230,260 215,60 185,60" fill="#92A8D1" />
            <polygon points="190,50 210,50 205,25 195,25" fill="#FDFBF7" />
            <circle cx="270" cy="90" r="18" fill="#B8A9C9" />
            <circle cx="130" cy="140" r="12" fill="#D5A6BD" />
            <path d="M0,250 Q200,230 400,250 L400,300 L0,300 Z" fill="#D5A6BD" opacity="0.8" />
          </svg>
        )
      },
      {
        id: "aurora-4",
        title: "The Cloud Loom",
        seriesNumber: "04/06",
        medium: "Atmospheric Digital Matte",
        concept: "Giant curved titanium rings spinning through stratus clouds, weaving daylight into golden auroral threads.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#92A8D1" />
            <ellipse cx="200" cy="150" rx="90" ry="120" stroke="#FDFBF7" strokeWidth="8" fill="none" />
            <ellipse cx="200" cy="150" rx="120" ry="90" stroke="#F7CAC9" strokeWidth="5" fill="none" />
            <path d="M0,220 C120,180 280,240 400,200 L400,300 L0,300 Z" fill="#B8A9C9" opacity="0.8" />
          </svg>
        )
      },
      {
        id: "aurora-5",
        title: "Echoes of the Solitary",
        seriesNumber: "05/06",
        medium: "Cinematic Narrative Illustration",
        concept: "A cloaked traveler gazing into an enormous doorway standing unsupported on a desert of lavender sand.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#B8A9C9" />
            <rect x="150" y="60" width="100" height="190" fill="#FDFBF7" stroke="#92A8D1" strokeWidth="6" />
            <rect x="165" y="80" width="70" height="170" fill="#F7CAC9" />
            <circle cx="200" cy="220" r="4" fill="#2E2438" />
            <path d="M196,225 L204,225 L201,250 L199,250 Z" fill="#2E2438" />
            <path d="M0,260 Q200,240 400,260 L400,300 L0,300 Z" fill="#7E6C8E" />
          </svg>
        )
      },
      {
        id: "aurora-6",
        title: "Equinox of the Glass Spheres",
        seriesNumber: "06/06",
        medium: "3D Procedural Surrealism",
        concept: "Translucent spheres containing self-contained miniature oceans floating along geometric ley lines.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#D5A6BD" />
            <circle cx="120" cy="140" r="45" fill="#92A8D1" opacity="0.7" stroke="#FDFBF7" strokeWidth="3" />
            <circle cx="280" cy="110" r="60" fill="#B8A9C9" opacity="0.6" stroke="#FDFBF7" strokeWidth="3" />
            <circle cx="200" cy="200" r="30" fill="#F7CAC9" opacity="0.8" stroke="#FDFBF7" strokeWidth="2" />
            <line x1="40" y1="260" x2="360" y2="40" stroke="#FDFBF7" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        )
      }
    ]
  },
  {
    id: "botanica",
    name: "BOTANICA",
    subtitle: "Modern Botanical Art & Rare Flora",
    category: "Botanical Digital Illustration",
    tagline: "Contemporary Naturalism & Refined Minimalism",
    artDirection: "Exotic flowers, delicate leaves, botanical branches, subtle organic paper grain, hand-drawn linework, layered natural textures.",
    description: "Curated museum-grade illustrations celebrating the architectural geometry of rare flora, seed pods, and botanical foliage, engineered for luxury packaging and fine editorial prints.",
    curatedCount: "6 Curated Works",
    palette: [
      { name: "Sage Green", hex: "#8A9A86" },
      { name: "Olive", hex: "#5C6B50" },
      { name: "Muted Terracotta", hex: "#C67D5A" },
      { name: "Warm Cream", hex: "#F7F4EB" },
      { name: "Dusty Pink", hex: "#D9A59F" },
      { name: "Earthy Brown", hex: "#4A3B32" }
    ],
    heroArtwork: (
      <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#F7F4EB" />
        <circle cx="300" cy="200" r="130" fill="#D9A59F" opacity="0.35" />
        {/* Botanical Stems and Leaves */}
        <path d="M300,360 Q280,240 300,80" stroke="#4A3B32" strokeWidth="3.5" strokeLinecap="round" />
        {/* Intricate Exotic Flower */}
        <ellipse cx="300" cy="110" rx="35" ry="60" fill="#C67D5A" opacity="0.85" />
        <ellipse cx="260" cy="130" rx="30" ry="50" transform="rotate(-30 260 130)" fill="#D9A59F" opacity="0.75" />
        <ellipse cx="340" cy="130" rx="30" ry="50" transform="rotate(30 340 130)" fill="#D9A59F" opacity="0.75" />
        {/* Delicate Leaves */}
        <path d="M295,260 C240,240 220,190 230,170 C250,190 280,230 295,260 Z" fill="#8A9A86" />
        <path d="M305,210 C360,190 380,140 370,120 C350,140 320,180 305,210 Z" fill="#5C6B50" />
        <circle cx="300" cy="110" r="10" fill="#4A3B32" />
      </svg>
    ),
    artworks: [
      {
        id: "botanica-1",
        title: "Monstera Obliqua & Seedpod Study",
        seriesNumber: "01/06",
        medium: "Fine Digital Gouache & Micron Ink",
        concept: "High-magnification anatomical study of fenestrated tropical foliage and micro-textured seed pods.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#F7F4EB" />
            <path d="M200,280 Q180,180 200,40" stroke="#4A3B32" strokeWidth="2.5" />
            <path d="M195,200 C120,170 110,100 130,80 C155,105 180,150 195,200 Z" fill="#8A9A86" />
            <path d="M205,150 C270,130 290,70 270,50 C250,75 220,110 205,150 Z" fill="#5C6B50" />
            <circle cx="200" cy="60" r="14" fill="#C67D5A" />
          </svg>
        )
      },
      {
        id: "botanica-2",
        title: "Orchidaceae Nocturna",
        seriesNumber: "02/06",
        medium: "Botanical Vector Engraving",
        concept: "Rare nocturnal epiphytic orchid with delicate filament petals and textured nectar labellum.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#F7F4EB" />
            <circle cx="200" cy="150" r="70" fill="#D9A59F" opacity="0.3" />
            <path d="M200,150 L140,90 M200,150 L260,90 M200,150 L150,210 M200,150 L250,210" stroke="#4A3B32" strokeWidth="2" />
            <circle cx="200" cy="150" r="22" fill="#C67D5A" />
            <circle cx="200" cy="150" r="8" fill="#4A3B32" />
          </svg>
        )
      },
      {
        id: "botanica-3",
        title: "Ficus Auriculata & Spore Vessels",
        seriesNumber: "03/06",
        medium: "Layered Texture Linocut",
        concept: "Structural branch segment showing rhythmic alternating veins and terracotta spore capsules.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#F7F4EB" />
            <line x1="80" y1="240" x2="320" y2="60" stroke="#4A3B32" strokeWidth="4" />
            <circle cx="150" cy="190" r="24" fill="#C67D5A" />
            <circle cx="220" cy="135" r="30" fill="#8A9A86" />
            <circle cx="280" cy="90" r="20" fill="#5C6B50" />
          </svg>
        )
      },
      {
        id: "botanica-4",
        title: "Ginkgo Biloba Golden Section",
        seriesNumber: "04/06",
        medium: "Hand-Drawn & Vector Composite",
        concept: "Fan-shaped leaves arranged in strict Fibonacci spiral geometry with delicate radial striations.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#F7F4EB" />
            <path d="M200,250 C120,220 110,130 180,100 C190,130 200,180 200,250 Z" fill="#5C6B50" opacity="0.9" />
            <path d="M200,250 C280,220 290,130 220,100 C210,130 200,180 200,250 Z" fill="#8A9A86" opacity="0.9" />
            <line x1="200" y1="250" x2="200" y2="280" stroke="#4A3B32" strokeWidth="3" />
          </svg>
        )
      },
      {
        id: "botanica-5",
        title: "Magnolia Stellata Calyx",
        seriesNumber: "05/06",
        medium: "Editorial Watercolor & Grain",
        concept: "Ethereal star magnolia sepals unfolding in rhythmic radial symmetry on warm handmade paper.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#F7F4EB" />
            <circle cx="200" cy="150" r="65" stroke="#C67D5A" strokeWidth="1.5" strokeDasharray="3 3" />
            <ellipse cx="200" cy="110" rx="14" ry="40" fill="#D9A59F" />
            <ellipse cx="200" cy="190" rx="14" ry="40" fill="#D9A59F" />
            <ellipse cx="160" cy="150" rx="40" ry="14" fill="#8A9A86" />
            <ellipse cx="240" cy="150" rx="40" ry="14" fill="#8A9A86" />
            <circle cx="200" cy="150" r="10" fill="#4A3B32" />
          </svg>
        )
      },
      {
        id: "botanica-6",
        title: "Herbarium Specimen No. 42",
        seriesNumber: "06/06",
        medium: "Archival Specimen Print",
        concept: "Pressed botanical fern specimen with taxonomic calligraphic annotations and seed envelope mockup.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#F7F4EB" />
            <rect x="50" y="30" width="300" height="240" stroke="#D9A59F" strokeWidth="1" opacity="0.5" />
            <line x1="200" y1="50" x2="200" y2="250" stroke="#4A3B32" strokeWidth="2" />
            <path d="M200,90 L160,70 M200,120 L240,100 M200,150 L150,130 M200,180 L250,160" stroke="#5C6B50" strokeWidth="3" />
            <rect x="230" y="210" width="90" height="40" fill="#C67D5A" opacity="0.2" />
          </svg>
        )
      }
    ]
  },
  {
    id: "neon-city",
    name: "NEON CITY",
    subtitle: "Cyberpunk Metropolis & Cinematic Concept Art",
    category: "Futuristic Concept Art",
    tagline: "Volumetric Fog, Holographic Rain & Cybernetic Architecture",
    artDirection: "Towering megastructures, glowing holographic signs, wet asphalt reflections, flying aerodynes, cinematic atmosphere.",
    description: "An immersive concept art journey through an ultra-dense futuristic megalopolis at midnight, saturated in violet rain and cutting-edge holographic advertisements.",
    curatedCount: "6 Curated Works",
    palette: [
      { name: "Deep Navy", hex: "#0B1021" },
      { name: "Electric Blue", hex: "#00D2FF" },
      { name: "Neon Violet", hex: "#8A2BE2" },
      { name: "Magenta", hex: "#FF007F" },
      { name: "Subtle Cyan", hex: "#4EF2D2" }
    ],
    heroArtwork: (
      <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#0B1021" />
        {/* Distant Skyscrapers */}
        <rect x="60" y="80" width="80" height="320" fill="#131B35" />
        <rect x="180" y="40" width="110" height="360" fill="#182346" />
        <rect x="330" y="90" width="95" height="310" fill="#131B35" />
        <rect x="460" y="60" width="85" height="340" fill="#182346" />
        {/* Holographic Billboards */}
        <rect x="200" y="90" width="70" height="40" fill="#FF007F" opacity="0.85" />
        <rect x="350" y="140" width="60" height="80" fill="#00D2FF" opacity="0.75" />
        {/* Flying Vehicles (Aerodynes) */}
        <polygon points="120,140 180,145 150,155" fill="#4EF2D2" />
        <circle cx="120" cy="140" r="3" fill="#00D2FF" />
        <polygon points="380,80 430,85 410,92" fill="#FF007F" />
        {/* Wet Reflective Street */}
        <rect x="0" y="320" width="600" height="80" fill="#080C18" />
        <line x1="200" y1="320" x2="270" y2="400" stroke="#FF007F" strokeWidth="6" opacity="0.4" />
        <line x1="350" y1="320" x2="410" y2="400" stroke="#00D2FF" strokeWidth="8" opacity="0.4" />
        {/* Volumetric Fog & Rain */}
        <line x1="50" y1="20" x2="30" y2="380" stroke="#00D2FF" strokeWidth="0.8" opacity="0.25" strokeDasharray="15 10" />
        <line x1="250" y1="10" x2="230" y2="390" stroke="#FF007F" strokeWidth="0.8" opacity="0.2" strokeDasharray="12 12" />
        <line x1="450" y1="0" x2="430" y2="380" stroke="#4EF2D2" strokeWidth="0.8" opacity="0.2" strokeDasharray="18 8" />
      </svg>
    ),
    artworks: [
      {
        id: "neon-1",
        title: "Sector 07 // The Lower Concourse",
        seriesNumber: "01/06",
        medium: "Cyberpunk Environment Matte",
        concept: "Multi-level pedestrian skybridges suspended between megatowers amidst persistent acid rain.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#0B1021" />
            <rect x="40" y="40" width="60" height="260" fill="#182346" />
            <rect x="300" y="20" width="70" height="280" fill="#182346" />
            <rect x="80" y="120" width="240" height="15" fill="#8A2BE2" opacity="0.9" />
            <rect x="100" y="180" width="220" height="12" fill="#00D2FF" opacity="0.75" />
            <rect x="180" y="145" width="40" height="25" fill="#FF007F" />
          </svg>
        )
      },
      {
        id: "neon-2",
        title: "Aero-Docking Terminal 49",
        seriesNumber: "02/06",
        medium: "Futuristic Architectural Concept",
        concept: "Cantilevered hangar platform with heavy aerial freight freighters descending through violet smog.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#0B1021" />
            <polygon points="50,220 350,220 310,260 90,260" fill="#131B35" />
            <circle cx="200" cy="110" r="50" fill="#FF007F" opacity="0.4" />
            <polygon points="160,110 240,110 200,85" fill="#4EF2D2" />
            <line x1="0" y1="280" x2="400" y2="280" stroke="#00D2FF" strokeWidth="3" />
          </svg>
        )
      },
      {
        id: "neon-3",
        title: "Neon Rain over Shibuya 2099",
        seriesNumber: "03/06",
        medium: "Cinematic Lighting Study",
        concept: "High-density holographic crossing flooded with neon reflection vectors on mirror-gloss asphalt.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#0B1021" />
            <rect x="120" y="40" width="160" height="160" fill="#8A2BE2" opacity="0.6" />
            <rect x="150" y="70" width="100" height="100" fill="#00D2FF" opacity="0.8" />
            <line x1="0" y1="230" x2="400" y2="230" stroke="#FF007F" strokeWidth="4" />
            <line x1="80" y1="230" x2="120" y2="300" stroke="#00D2FF" strokeWidth="12" opacity="0.4" />
            <line x1="280" y1="230" x2="240" y2="300" stroke="#FF007F" strokeWidth="12" opacity="0.4" />
          </svg>
        )
      },
      {
        id: "neon-4",
        title: "The Datastream Spire",
        seriesNumber: "04/06",
        medium: "3D Digital Sci-Fi Rendering",
        concept: "Monolithic central computing node piercing the stratosphere, radiating pulsating magenta telemetry rings.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#0B1021" />
            <polygon points="185,20 215,20 225,300 175,300" fill="#182346" />
            <ellipse cx="200" cy="80" rx="60" ry="15" stroke="#FF007F" strokeWidth="3" fill="none" />
            <ellipse cx="200" cy="140" rx="80" ry="18" stroke="#00D2FF" strokeWidth="3" fill="none" />
            <ellipse cx="200" cy="200" rx="100" ry="22" stroke="#4EF2D2" strokeWidth="3" fill="none" />
          </svg>
        )
      },
      {
        id: "neon-5",
        title: "Synthetic Alley // Noodle Bar",
        seriesNumber: "05/06",
        medium: "Narrative Environmental Vignette",
        concept: "Intimate ground-level alleyway with warm tungsten lantern glow, steam vents, and cybernetic diners.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#0B1021" />
            <rect x="60" y="100" width="280" height="150" fill="#131B35" />
            <rect x="100" y="140" width="80" height="60" fill="#FF007F" opacity="0.9" />
            <circle cx="260" cy="160" r="25" fill="#4EF2D2" opacity="0.8" />
            <line x1="0" y1="260" x2="400" y2="260" stroke="#8A2BE2" strokeWidth="2" />
          </svg>
        )
      },
      {
        id: "neon-6",
        title: "Sub-Atmospheric Skyline at Dawn",
        seriesNumber: "06/06",
        medium: "Panoramic Keyframe Art",
        concept: "First rays of synthetic solar dawn cutting through cloud smog behind megastructure super-blocks.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#0B1021" />
            <circle cx="200" cy="220" r="140" fill="#FF007F" opacity="0.35" />
            <polygon points="60,140 100,140 100,300 60,300" fill="#182346" />
            <polygon points="140,80 190,80 190,300 140,300" fill="#131B35" />
            <polygon points="230,110 270,110 270,300 230,300" fill="#182346" />
            <polygon points="310,60 360,60 360,300 310,300" fill="#131B35" />
          </svg>
        )
      }
    ]
  },
  {
    id: "fable",
    name: "FABLE",
    subtitle: "Original Fantasy Character Design & Lore",
    category: "Fantasy Character Concept Art",
    tagline: "Stylized Realism & Imaginative Visual Storytelling",
    artDirection: "Expressive silhouettes, intricate costume layering, antique metals, celestial fabrics, and rich lore.",
    description: "Four iconic archetypes meticulously developed with full-body silhouettes, portrait studies, and material breakdowns across an enchanted high-fantasy realm.",
    curatedCount: "4 Core Characters",
    palette: [
      { name: "Forest Green", hex: "#2D5A27" },
      { name: "Antique Gold", hex: "#D4AF37" },
      { name: "Dusty Blue", hex: "#4A6B82" },
      { name: "Burgundy", hex: "#800020" },
      { name: "Warm Ivory", hex: "#FDFBF7" }
    ],
    heroArtwork: (
      <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#111A15" />
        <circle cx="300" cy="180" r="130" stroke="#D4AF37" strokeWidth="2" strokeDasharray="6 6" fill="none" opacity="0.4" />
        {/* Forest Guardian Figure with Antler Crest */}
        <path d="M260,110 Q300,50 340,110" stroke="#D4AF37" strokeWidth="4" fill="none" />
        <line x1="280" y1="80" x2="260" y2="50" stroke="#D4AF37" strokeWidth="3" />
        <line x1="320" y1="80" x2="340" y2="50" stroke="#D4AF37" strokeWidth="3" />
        {/* Head and Cloak */}
        <circle cx="300" cy="130" r="22" fill="#FDFBF7" />
        <polygon points="260,160 340,160 380,360 220,360" fill="#2D5A27" />
        <polygon points="280,160 320,160 330,360 270,360" fill="#800020" opacity="0.9" />
        {/* Staff of Astral Roots */}
        <line x1="370" y1="80" x2="370" y2="380" stroke="#D4AF37" strokeWidth="4" />
        <circle cx="370" cy="80" r="14" fill="#4A6B82" />
      </svg>
    ),
    artworks: [
      {
        id: "fable-1",
        title: "Sylas // The Ancient Forest Guardian",
        seriesNumber: "01/04",
        medium: "Full Character Design & Turnaround",
        concept: "Ethereal sylvan protector adorned with living ironwood branch antlers, moss-woven ceremonial robe, and root staff.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#111A15" />
            <circle cx="200" cy="100" r="18" fill="#FDFBF7" />
            <path d="M170,70 Q200,30 230,70" stroke="#D4AF37" strokeWidth="3" fill="none" />
            <polygon points="170,125 230,125 250,280 150,280" fill="#2D5A27" />
            <line x1="260" y1="60" x2="260" y2="290" stroke="#D4AF37" strokeWidth="3" />
            <circle cx="260" cy="60" r="8" fill="#4A6B82" />
          </svg>
        )
      },
      {
        id: "fable-2",
        title: "Zephyr // The Wandering Star Mage",
        seriesNumber: "02/04",
        medium: "Character Portrait & Costume Sheet",
        concept: "Nomadic astral scholar clad in constellation-embroidered midnight robes, holding a floating gyro-orb lantern.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#0C1420" />
            <circle cx="200" cy="95" r="18" fill="#FDFBF7" />
            <polygon points="160,120 240,120 260,285 140,285" fill="#4A6B82" />
            <circle cx="200" cy="160" r="26" stroke="#D4AF37" strokeWidth="2" strokeDasharray="4 4" fill="none" />
            <circle cx="200" cy="160" r="9" fill="#FDFBF7" />
          </svg>
        )
      },
      {
        id: "fable-3",
        title: "Valkis // The Chitin Vanguard Warrior",
        seriesNumber: "03/04",
        medium: "Action Pose & Armory Study",
        concept: "Relentless guardian clad in layered insectoid chitin alloy armor, dual plasma daggers, and ornate crest.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#180C10" />
            <circle cx="200" cy="90" r="16" fill="#D4AF37" />
            <polygon points="160,115 240,115 230,220 170,220" fill="#800020" />
            <polygon points="170,220 230,220 240,285 160,285" fill="#2D5A27" />
            <line x1="130" y1="80" x2="160" y2="210" stroke="#FDFBF7" strokeWidth="4" />
            <line x1="270" y1="80" x2="240" y2="210" stroke="#FDFBF7" strokeWidth="4" />
          </svg>
        )
      },
      {
        id: "fable-4",
        title: "Aurelia // The Celestial Monarch",
        seriesNumber: "04/04",
        medium: "Regal Costume & Portrait Concept",
        concept: "Empress of the Solstice wearing heavy velvet robes bordered with antique gold solar halos and velvet scepter.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#15120B" />
            <circle cx="200" cy="90" r="45" stroke="#D4AF37" strokeWidth="2.5" fill="none" />
            <circle cx="200" cy="90" r="18" fill="#FDFBF7" />
            <polygon points="150,120 250,120 280,290 120,290" fill="#800020" />
            <polygon points="175,120 225,120 235,290 165,290" fill="#D4AF37" opacity="0.8" />
          </svg>
        )
      }
    ]
  },
  {
    id: "objects",
    name: "OBJECTS",
    subtitle: "Sculptural 3D Art & Material Explorations",
    category: "Abstract 3D Digital Art",
    tagline: "Minimalist Sculpture & Luxury Editorial Aesthetics",
    artDirection: "Liquid metals, folded organic sheets, translucent glass, floating spheres, realistic material reflections, balanced shadowplay.",
    description: "An experimental laboratory of high-end computational 3D sculptures exploring the tactile intersection of liquid chrome, frosted borosilicate glass, and warm alabaster stone.",
    curatedCount: "6 Curated Works",
    palette: [
      { name: "Warm Beige", hex: "#E5DDD0" },
      { name: "Ivory", hex: "#FDFCF7" },
      { name: "Chrome Silver", hex: "#D6DCE5" },
      { name: "Soft Grey", hex: "#A8B2C1" },
      { name: "Muted Blue", hex: "#6C8299" },
      { name: "Subtle Black", hex: "#1C2026" }
    ],
    heroArtwork: (
      <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#E5DDD0" />
        {/* Soft Background Plinth */}
        <rect x="150" y="240" width="300" height="140" fill="#FDFCF7" rx="12" />
        {/* Chrome Floating Liquid Ring */}
        <ellipse cx="300" cy="180" rx="140" ry="80" stroke="#D6DCE5" strokeWidth="24" fill="none" />
        {/* Translucent Glass Sphere */}
        <circle cx="240" cy="150" r="65" fill="#6C8299" opacity="0.6" stroke="#FDFCF7" strokeWidth="3" />
        {/* Liquid Metal Mercury Droplet */}
        <circle cx="360" cy="170" r="45" fill="#1C2026" />
        <ellipse cx="350" cy="155" rx="12" ry="6" fill="#FDFCF7" opacity="0.8" />
        {/* Cast Shadows */}
        <ellipse cx="300" cy="330" rx="180" ry="18" fill="#1C2026" opacity="0.12" />
      </svg>
    ),
    artworks: [
      {
        id: "objects-1",
        title: "Torus in Liquid Chrome",
        seriesNumber: "01/06",
        medium: "Raytraced 3D Sculpture",
        concept: "Interlocking chrome rings floating in zero-gravity with high-frequency mirror reflections.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#E5DDD0" />
            <ellipse cx="200" cy="150" rx="90" ry="50" stroke="#D6DCE5" strokeWidth="18" fill="none" />
            <circle cx="200" cy="150" r="28" fill="#1C2026" />
          </svg>
        )
      },
      {
        id: "objects-2",
        title: "Frosted Glass & Alabaster Fold",
        seriesNumber: "02/06",
        medium: "Subsurface Scattering Render",
        concept: "Translucent curved ribbons reflecting refracted warm ivory light through frosted glass layers.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#E5DDD0" />
            <path d="M100,220 C140,80 260,80 300,220 Z" fill="#FDFCF7" opacity="0.8" />
            <circle cx="200" cy="120" r="40" fill="#6C8299" opacity="0.5" />
          </svg>
        )
      },
      {
        id: "objects-3",
        title: "Mercury Equilibrium No. 7",
        seriesNumber: "03/06",
        medium: "Computational Fluid Dynamics",
        concept: "High-surface-tension mercury globules suspended on an inclined stone plane.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#E5DDD0" />
            <line x1="60" y1="220" x2="340" y2="120" stroke="#1C2026" strokeWidth="5" />
            <circle cx="160" cy="170" r="28" fill="#D6DCE5" />
            <circle cx="240" cy="140" r="18" fill="#1C2026" />
          </svg>
        )
      },
      {
        id: "objects-4",
        title: "The Floating Monad",
        seriesNumber: "04/06",
        medium: "Minimalist Geometry Study",
        concept: "Monolithic sphere casting soft ambient occlusion shadows across layered travertine plinths.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#E5DDD0" />
            <rect x="120" y="180" width="160" height="80" fill="#FDFCF7" />
            <circle cx="200" cy="130" r="50" fill="#6C8299" />
          </svg>
        )
      },
      {
        id: "objects-5",
        title: "Translucent Membrane & Steel Pins",
        seriesNumber: "05/06",
        medium: "Organic 3D Form Study",
        concept: "Tense stretched membrane held by brushed chrome hardware pins in architectural balance.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#E5DDD0" />
            <polygon points="120,80 280,80 240,220 160,220" fill="#D6DCE5" opacity="0.7" />
            <circle cx="120" cy="80" r="8" fill="#1C2026" />
            <circle cx="280" cy="80" r="8" fill="#1C2026" />
          </svg>
        )
      },
      {
        id: "objects-6",
        title: "Curved Specular Monolith",
        seriesNumber: "06/06",
        medium: "Monochrome Material Study",
        concept: "Twisted ribbon of black high-gloss ceramic with pure white Fresnel highlights.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#E5DDD0" />
            <path d="M140,240 Q200,60 260,240" stroke="#1C2026" strokeWidth="26" fill="none" />
            <path d="M140,240 Q200,60 260,240" stroke="#FDFCF7" strokeWidth="4" fill="none" opacity="0.7" />
          </svg>
        )
      }
    ]
  },
  {
    id: "cultura",
    name: "CULTURA",
    subtitle: "Modern Indian Culture & Editorial Illustration",
    category: "Contemporary Cultural Illustration",
    tagline: "Folk-Art Influence, Modern Graphic Patterns & Heritage",
    artDirection: "Traditional Indian architecture, bustling spice bazaars, handcrafted textiles, temple florals, folk motifs, and sophisticated editorial layouts.",
    description: "A celebration of modern Indian culture reinterpreted through bold contemporary graphic shapes, intricate textile motifs, and radiant editorial palettes.",
    curatedCount: "6 Curated Works",
    palette: [
      { name: "Burnt Orange", hex: "#E36414" },
      { name: "Deep Indigo", hex: "#1D2D50" },
      { name: "Mustard Yellow", hex: "#E9B824" },
      { name: "Terracotta", hex: "#C05621" },
      { name: "Muted Pink", hex: "#E6A4B4" },
      { name: "Warm Cream", hex: "#FDF6EC" }
    ],
    heroArtwork: (
      <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#FDF6EC" />
        {/* Heritage Jharokha Archway */}
        <path d="M180,380 L180,180 Q180,80 300,80 Q420,80 420,180 L420,380 Z" fill="#1D2D50" />
        <path d="M210,380 L210,200 Q210,120 300,120 Q390,120 390,200 L390,380 Z" fill="#FDF6EC" />
        {/* Decorative Lotus & Marigold Mandala */}
        <circle cx="300" cy="220" r="60" fill="#E36414" />
        <circle cx="300" cy="220" r="40" fill="#E9B824" />
        <circle cx="300" cy="220" r="20" fill="#E6A4B4" />
        {/* Geometric Indian Textile Borders */}
        <rect x="0" y="0" width="600" height="24" fill="#C05621" />
        <rect x="0" y="376" width="600" height="24" fill="#E36414" />
      </svg>
    ),
    artworks: [
      {
        id: "cultura-1",
        title: "The Jharokha Window of Jaipur",
        seriesNumber: "01/06",
        medium: "Graphic Architectural Print",
        concept: "Stylized Rajasthani lattice screen overlooking a mustard courtyard filled with morning shadows.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#FDF6EC" />
            <path d="M120,260 L120,140 Q120,70 200,70 Q280,70 280,140 L280,260 Z" fill="#1D2D50" />
            <circle cx="200" cy="140" r="40" fill="#E36414" />
          </svg>
        )
      },
      {
        id: "cultura-2",
        title: "The Spice Market of Khari Baoli",
        seriesNumber: "02/06",
        medium: "Editorial Narrative Illustration",
        concept: "Concentric pyramids of vibrant turmeric, chili terracotta, and cardamoms in woven hemp baskets.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#FDF6EC" />
            <circle cx="130" cy="160" r="45" fill="#E36414" />
            <circle cx="270" cy="160" r="45" fill="#E9B824" />
            <circle cx="200" cy="210" r="50" fill="#C05621" />
          </svg>
        )
      },
      {
        id: "cultura-3",
        title: "Marigold Garlands at the Temple Ghat",
        seriesNumber: "03/06",
        medium: "Contemporary Folk Print",
        concept: "Rhythmic waves of orange and yellow marigold blooms cascading down deep indigo river steps.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#1D2D50" />
            <line x1="0" y1="200" x2="400" y2="200" stroke="#E36414" strokeWidth="8" strokeDasharray="16 8" />
            <line x1="0" y1="230" x2="400" y2="230" stroke="#E9B824" strokeWidth="8" strokeDasharray="16 8" />
            <circle cx="200" cy="110" r="40" fill="#E6A4B4" />
          </svg>
        )
      },
      {
        id: "cultura-4",
        title: "Bandhani Indigo Blockprint",
        seriesNumber: "04/06",
        medium: "Textile Geometric Pattern",
        concept: "Intricate hand-carved wooden blockprint motif inspired by ancient Gujarati resist-dyeing.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#FDF6EC" />
            <rect x="80" y="50" width="240" height="200" stroke="#1D2D50" strokeWidth="4" />
            <circle cx="200" cy="150" r="50" fill="#1D2D50" />
            <circle cx="200" cy="150" r="25" fill="#E36414" />
          </svg>
        )
      },
      {
        id: "cultura-5",
        title: "Chai on the Steps of Varanasi",
        seriesNumber: "05/06",
        medium: "Atmospheric Editorial Vignette",
        concept: "Steaming terracotta kulhar cups set against early morning boat silhouettes on the misty Ganges.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#FDF6EC" />
            <polygon points="170,160 230,160 215,240 185,240" fill="#C05621" />
            <path d="M190,130 Q200,90 210,130" stroke="#E36414" strokeWidth="3" fill="none" />
            <line x1="60" y1="240" x2="340" y2="240" stroke="#1D2D50" strokeWidth="4" />
          </svg>
        )
      },
      {
        id: "cultura-6",
        title: "The Peacock of Mandawa",
        seriesNumber: "06/06",
        medium: "Heritage Fresco Revival",
        concept: "Modernized Shekhawati haveli fresco depicting a regal peacock in deep indigo and mustard feather geometry.",
        visual: (
          <svg viewBox="0 0 400 300" fill="none">
            <rect width="400" height="300" fill="#FDF6EC" />
            <circle cx="200" cy="120" r="30" fill="#1D2D50" />
            <path d="M200,150 C140,170 120,240 200,270 C280,240 260,170 200,150 Z" fill="#E36414" />
            <circle cx="200" cy="210" r="15" fill="#E9B824" />
          </svg>
        )
      }
    ]
  }
];

export default function DigitalArt() {
  const [selectedCollectionId, setSelectedCollectionId] = useState<string>("aurora");
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const activeCollection = artCollections.find(c => c.id === selectedCollectionId) || artCollections[0];

  const copyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const getCollectionIcon = (id: string) => {
    switch(id) {
      case 'aurora': return <Sparkles size={16} />;
      case 'botanica': return <Flower2 size={16} />;
      case 'neon-city': return <Building size={16} />;
      case 'fable': return <ShieldAlert size={16} />;
      case 'objects': return <Boxes size={16} />;
      case 'cultura': return <Globe2 size={16} />;
      default: return <Palette size={16} />;
    }
  };

  return (
    <section id="digital-art" className={styles.artSection}>
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
            <Palette size={15} /> Curated Gallery &bull; Digital Art &amp; Illustration
          </div>
          <h2 className={`${styles.title} text-gradient`}>Digital Art &amp; Editorial Illustration Master Series</h2>
          <p className={styles.subtitle}>
            Six visionary collections exploring contemporary surrealism, luxury botanical illustration, cyberpunk concept environments, original character lore, abstract 3D sculptures, and Indian cultural heritage.
          </p>
        </motion.div>

        {/* ====================================================================
           PART 1: CONTINUOUS RUNNING CAROUSEL (ALL 6 ART COLLECTIONS)
           ==================================================================== */}
        <div className={styles.topControlRow}>
          <div className={styles.categoryPill}>
            <span>6 Museum-Grade Collections &bull; Running Marquee &bull; Click to View Gallery</span>
          </div>

          <div className={styles.scrollNavControls}>
            <button 
              className={styles.scrollNavBtn} 
              onClick={() => {
                const el = document.getElementById('artCarouselTrack');
                if (el) el.scrollBy({ left: -460, behavior: 'smooth' });
              }}
              aria-label="Previous Collection"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              className={styles.scrollNavBtn} 
              onClick={() => {
                const el = document.getElementById('artCarouselTrack');
                if (el) el.scrollBy({ left: 460, behavior: 'smooth' });
              }}
              aria-label="Next Collection"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Running Form Continuous Carousel */}
        <div 
          id="artCarouselTrack"
          className={styles.carouselContainer}
        >
          <div className={styles.carouselTrack}>
            {[...artCollections, ...artCollections].map((col, idx) => (
              <div 
                key={`${col.id}-${idx}`}
                className={styles.collectionCard}
                onClick={() => {
                  setSelectedCollectionId(col.id);
                  const studio = document.getElementById('curatedArtExhibition');
                  if (studio) studio.scrollIntoView({ behavior: 'smooth' });
                }}
                title={`Click to explore ${col.name}`}
              >
                {/* Hero Artwork Visual */}
                <div className={styles.cardHeroArtwork}>
                  {col.heroArtwork}
                  <div className={styles.cardMetaOverlay}>
                    <span className={styles.cardCategoryBadge}>{col.category}</span>
                    <span className={styles.cardCountBadge}>{col.curatedCount}</span>
                  </div>
                </div>

                {/* Card Information */}
                <div className={styles.cardInfoBlock}>
                  <div className={styles.cardTitleRow}>
                    <h3 className={styles.cardTitle}>{col.name}</h3>
                    <span className={styles.cardSubtitle}>{col.tagline}</span>
                  </div>
                  <p className={styles.cardDescription}>{col.description}</p>

                  {/* Swatches */}
                  <div className={styles.cardPaletteRow}>
                    {col.palette.map((p) => (
                      <span 
                        key={p.hex}
                        className={styles.swatchMiniDot}
                        style={{ backgroundColor: p.hex }}
                        title={`${p.name} (${p.hex})`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ====================================================================
           PART 2: INTERACTIVE CURATED EXHIBITION STUDIO
           ==================================================================== */}
        <div id="curatedArtExhibition" className={styles.exhibitionStudio}>
          <div className={styles.studioHeader}>
            <div className={styles.studioTitleWrap}>
              <h3>Curated Exhibition Gallery</h3>
              <p>Select any of the six creative collections below to inspect its individual artworks, mediums, and conceptual storytelling.</p>
            </div>
          </div>

          {/* Collection Selector Pills */}
          <div className={styles.collectionSelectorBar}>
            {artCollections.map((c) => (
              <button
                key={c.id}
                className={`${styles.collectionPill} ${selectedCollectionId === c.id ? styles.collectionPillActive : ''}`}
                onClick={() => setSelectedCollectionId(c.id)}
              >
                {getCollectionIcon(c.id)} {c.name} &mdash; {c.category}
              </button>
            ))}
          </div>

          {/* Series Overview Banner */}
          <motion.div 
            className={styles.seriesOverviewBanner}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            key={`banner-${activeCollection.id}`}
          >
            <div className={styles.bannerDetails}>
              <h4>{activeCollection.name} // {activeCollection.subtitle}</h4>
              <p>{activeCollection.description}</p>
              
              {/* Palette Tags */}
              <div className={styles.paletteBar}>
                {activeCollection.palette.map((p) => (
                  <button 
                    key={p.hex}
                    className={styles.paletteTag}
                    onClick={() => copyColor(p.hex)}
                    title={`Click to copy ${p.hex}`}
                  >
                    <span className={styles.paletteDot} style={{ backgroundColor: p.hex }} />
                    <span>{copiedColor === p.hex ? <Check size={10} /> : `${p.name} (${p.hex})`}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.bannerMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Art Direction</span>
                <span className={styles.metaValue}>{activeCollection.artDirection}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Curated Works</span>
                <span className={styles.metaValue}>{activeCollection.curatedCount} in Series</span>
              </div>
            </div>
          </motion.div>

          {/* Artworks Grid */}
          <div className={styles.artworksGrid}>
            {activeCollection.artworks.map((art) => (
              <motion.div 
                key={art.id}
                className={styles.artworkCard}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.artworkVisual}>
                  {art.visual}
                  <span className={styles.artIndexTag}>{art.seriesNumber}</span>
                </div>
                <div className={styles.artworkDetails}>
                  <div className={styles.artworkTitleRow}>
                    <h5 className={styles.artworkTitle}>{art.title}</h5>
                  </div>
                  <span className={styles.artworkMedium}>{art.medium}</span>
                  <p className={styles.artworkConcept}>{art.concept}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
