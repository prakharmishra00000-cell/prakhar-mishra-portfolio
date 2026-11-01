const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const postersDir = path.join(__dirname, '..', 'public', 'posters');

// POSTER 4: AERODYNE HIGHWAY // CLOUD RUNNERS
const svgPoster4 = `
<svg width="1600" height="2400" viewBox="0 0 1600 2400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#050811" />
      <stop offset="40%" stop-color="#140B24" />
      <stop offset="75%" stop-color="#2D0B3A" />
      <stop offset="100%" stop-color="#080C16" />
    </linearGradient>
    <linearGradient id="laserCyan" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00F0FF" />
      <stop offset="100%" stop-color="#0077FF" />
    </linearGradient>
    <linearGradient id="laserMagenta" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FF007F" />
      <stop offset="100%" stop-color="#FF0040" />
    </linearGradient>
    <radialGradient id="plasmaGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#00F0FF" stop-opacity="0.9" />
      <stop offset="60%" stop-color="#FF007F" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#140B24" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="glassVignette" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#00F0FF" stop-opacity="0.15" />
      <stop offset="50%" stop-color="#000000" stop-opacity="0" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0.8" />
    </linearGradient>
  </defs>

  <!-- Sky Background -->
  <rect width="1600" height="2400" fill="url(#skyGrad)" />

  <!-- Distant Megatowers with Neon Lines -->
  <polygon points="100,300 350,300 380,2400 60,2400" fill="#0C101E" />
  <line x1="120" y1="350" x2="120" y2="2200" stroke="#00F0FF" stroke-width="3" opacity="0.6" stroke-dasharray="25 15" />
  <line x1="330" y1="400" x2="330" y2="2200" stroke="#FF007F" stroke-width="4" opacity="0.5" stroke-dasharray="40 20" />

  <polygon points="1200,200 1500,200 1560,2400 1140,2400" fill="#0E1322" />
  <line x1="1250" y1="250" x2="1250" y2="2300" stroke="#FF007F" stroke-width="4" opacity="0.7" stroke-dasharray="30 20" />
  <line x1="1450" y1="300" x2="1450" y2="2300" stroke="#00F0FF" stroke-width="3" opacity="0.6" stroke-dasharray="20 15" />

  <!-- Center Suspended Aerial Highway Structure -->
  <polygon points="450,1100 1150,1100 1500,2400 100,2400" fill="#080B14" />
  <!-- Radiant Highway Guidelines -->
  <line x1="800" y1="1100" x2="800" y2="2400" stroke="#00F0FF" stroke-width="8" opacity="0.9" />
  <line x1="650" y1="1100" x2="350" y2="2400" stroke="#FF007F" stroke-width="6" opacity="0.8" />
  <line x1="950" y1="1100" x2="1250" y2="2400" stroke="#FF007F" stroke-width="6" opacity="0.8" />

  <!-- Pursued Aerodyne Vehicle in Flight -->
  <g transform="translate(620, 920)">
    <polygon points="180,60 260,110 320,130 40,130 100,110" fill="#1A2030" stroke="#00F0FF" stroke-width="3" />
    <polygon points="80,120 130,120 110,145 90,145" fill="#FF007F" />
    <polygon points="230,120 280,120 270,145 250,145" fill="#FF007F" />
    <!-- Blinding Plasma Thruster Trails -->
    <polygon points="90,145 120,145 60,600 30,600" fill="url(#laserMagenta)" opacity="0.85" />
    <polygon points="240,145 270,145 330,600 300,600" fill="url(#laserMagenta)" opacity="0.85" />
    <circle cx="105" cy="145" r="28" fill="#FFFFFF" opacity="0.9" />
    <circle cx="255" cy="145" r="28" fill="#FFFFFF" opacity="0.9" />
  </g>

  <!-- Cockpit HUD Curvature & Targeting Reticle -->
  <ellipse cx="800" cy="1200" rx="350" ry="250" stroke="#00F0FF" stroke-width="2" stroke-dasharray="10 10" fill="none" opacity="0.5" />
  <circle cx="800" cy="1050" r="45" stroke="#FF007F" stroke-width="3" fill="none" />
  <line x1="720" y1="1050" x2="880" y2="1050" stroke="#FF007F" stroke-width="2" />
  <line x1="800" y1="970" x2="800" y2="1130" stroke="#FF007F" stroke-width="2" />

  <!-- Cockpit HUD Telemetry Texts -->
  <text x="520" y="880" fill="#00F0FF" font-family="monospace" font-size="28" font-weight="bold" letter-spacing="4">TARGET_LOCK // CORRIDOR_88</text>
  <text x="520" y="920" fill="#FF007F" font-family="monospace" font-size="24" letter-spacing="3">VELOCITY: MACH 2.85 // ALT: +1,840M</text>
  <text x="960" y="880" fill="#4EF2D2" font-family="monospace" font-size="24" letter-spacing="2">AIRSPACE_STATUS: PURSUIT</text>

  <!-- Windshield Rain Streaks -->
  <line x1="200" y1="100" x2="160" y2="900" stroke="#00F0FF" stroke-width="1.5" opacity="0.3" stroke-dasharray="40 25" />
  <line x1="450" y1="200" x2="410" y2="1200" stroke="#FFFFFF" stroke-width="1" opacity="0.4" stroke-dasharray="60 35" />
  <line x1="900" y1="150" x2="870" y2="1100" stroke="#FF007F" stroke-width="1.5" opacity="0.35" stroke-dasharray="50 30" />
  <line x1="1350" y1="300" x2="1310" y2="1400" stroke="#00F0FF" stroke-width="2" opacity="0.3" stroke-dasharray="45 20" />

  <!-- Curved Cockpit Dashboard Frame -->
  <path d="M0,1900 Q800,1650 1600,1900 L1600,2400 L0,2400 Z" fill="#060810" />
  <path d="M0,1900 Q800,1650 1600,1900" stroke="#00F0FF" stroke-width="6" fill="none" opacity="0.7" />

  <!-- Poster Movie Title Overlay -->
  <text x="800" y="2120" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="78" font-weight="900" letter-spacing="18">AERODYNE HIGHWAY</text>
  <text x="800" y="2180" text-anchor="middle" fill="#4EF2D2" font-family="sans-serif" font-size="28" font-weight="700" letter-spacing="12">CLOUD RUNNERS // AIRSPACE SECTOR</text>
  <text x="800" y="2260" text-anchor="middle" fill="#8292AB" font-family="monospace" font-size="18" letter-spacing="6">KEYFRAME 04 // 8K ULTRA-HD // UNREAL 5 VOLUMETRICS</text>
</svg>
`;

// POSTER 5: CYBERNETIC SHRINE // DIGITAL SHINTO
const svgPoster5 = `
<svg width="1600" height="2400" viewBox="0 0 1600 2400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="shrineSky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#04090A" />
      <stop offset="35%" stop-color="#09181B" />
      <stop offset="70%" stop-color="#0C2522" />
      <stop offset="100%" stop-color="#030808" />
    </linearGradient>
    <linearGradient id="toriiRed" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FF2A00" />
      <stop offset="50%" stop-color="#FF5500" />
      <stop offset="100%" stop-color="#D40000" />
    </linearGradient>
    <radialGradient id="shrineHalo" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#00FFB2" stop-opacity="0.8" />
      <stop offset="45%" stop-color="#D4AF37" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#04090A" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="1600" height="2400" fill="url(#shrineSky)" />

  <!-- Background Quantum Data Spires -->
  <polygon points="200,100 450,100 500,2400 150,2400" fill="#061214" opacity="0.9" />
  <line x1="260" y1="150" x2="260" y2="2100" stroke="#00FFB2" stroke-width="3" opacity="0.6" stroke-dasharray="30 20" />
  <polygon points="1150,150 1400,150 1450,2400 1100,2400" fill="#061214" opacity="0.9" />
  <line x1="1340" y1="200" x2="1340" y2="2100" stroke="#00FFB2" stroke-width="3" opacity="0.6" stroke-dasharray="25 15" />

  <!-- Ethereal Circular Data Halo -->
  <circle cx="800" cy="980" r="420" fill="url(#shrineHalo)" />
  <circle cx="800" cy="980" r="460" stroke="#00FFB2" stroke-width="4" stroke-dasharray="12 12" fill="none" opacity="0.7" />
  <circle cx="800" cy="980" r="380" stroke="#D4AF37" stroke-width="3" stroke-dasharray="20 10" fill="none" opacity="0.8" />

  <!-- Misty Bamboo Silhouettes -->
  <line x1="120" y1="500" x2="120" y2="2200" stroke="#0A221C" stroke-width="18" />
  <line x1="220" y1="700" x2="220" y2="2200" stroke="#0A221C" stroke-width="14" />
  <line x1="1380" y1="600" x2="1380" y2="2200" stroke="#0A221C" stroke-width="16" />
  <line x1="1480" y1="400" x2="1480" y2="2200" stroke="#0A221C" stroke-width="20" />

  <!-- Monumental Cybernetic Torii Gate -->
  <g transform="translate(0, 200)">
    <!-- Top Kasagi Curved Beam -->
    <path d="M300,520 Q800,440 1300,520 L1320,580 Q800,510 280,580 Z" fill="url(#toriiRed)" />
    <!-- Secondary Shimaki Beam -->
    <rect x="360" y="620" width="880" height="50" fill="url(#toriiRed)" />
    <rect x="360" y="620" width="880" height="6" fill="#D4AF37" />

    <!-- Two Giant Vertical Hashira Pillars -->
    <rect x="440" y="620" width="85" height="1500" fill="url(#toriiRed)" />
    <line x1="482" y1="670" x2="482" y2="2100" stroke="#00FFB2" stroke-width="5" stroke-dasharray="40 15" />

    <rect x="1075" y="620" width="85" height="1500" fill="url(#toriiRed)" />
    <line x1="1117" y1="670" x2="1117" y2="2100" stroke="#00FFB2" stroke-width="5" stroke-dasharray="40 15" />

    <!-- Central Sacred Plaque (Gakuzuka) -->
    <rect x="740" y="550" width="120" height="150" fill="#0B1D19" stroke="#D4AF37" stroke-width="4" />
    <text x="800" y="640" text-anchor="middle" fill="#00FFB2" font-family="sans-serif" font-size="48" font-weight="bold">電霊</text>

    <!-- Fiber-Optic Shimenawa Rope with Golden Paper Zide -->
    <path d="M460,780 Q800,920 1140,780" stroke="#D4AF37" stroke-width="16" fill="none" />
    <polygon points="620,860 670,960 600,940" fill="#FFFFFF" opacity="0.9" />
    <polygon points="780,890 830,990 760,970" fill="#FFFFFF" opacity="0.9" />
    <polygon points="940,860 990,960 920,940" fill="#FFFFFF" opacity="0.9" />
  </g>

  <!-- Wet Stone Steps Leading up to Shrine -->
  <polygon points="350,2050 1250,2050 1450,2400 150,2400" fill="#04090A" />
  <line x1="300" y1="2120" x2="1300" y2="2120" stroke="#00FFB2" stroke-width="4" opacity="0.5" />
  <line x1="220" y1="2200" x2="1380" y2="2200" stroke="#00FFB2" stroke-width="4" opacity="0.4" />

  <!-- Poster Movie Title Overlay -->
  <text x="800" y="2140" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="78" font-weight="900" letter-spacing="18">CYBERNETIC SHRINE</text>
  <text x="800" y="2200" text-anchor="middle" fill="#00FFB2" font-family="sans-serif" font-size="28" font-weight="700" letter-spacing="12">DIGITAL SHINTO // NEON TORII</text>
  <text x="800" y="2270" text-anchor="middle" fill="#8292AB" font-family="monospace" font-size="18" letter-spacing="6">KEYFRAME 05 // 8K ULTRA-HD // VOLUMETRIC RAYTRACING</text>
</svg>
`;

// POSTER 6: NEO-DOCKS SECTOR 12 // INDUSTRIAL HARBOR
const svgPoster6 = `
<svg width="1600" height="2400" viewBox="0 0 1600 2400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="docksSky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0A0C14" />
      <stop offset="40%" stop-color="#1B1322" />
      <stop offset="70%" stop-color="#2D1B16" />
      <stop offset="100%" stop-color="#05080E" />
    </linearGradient>
    <linearGradient id="amberGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FF7700" />
      <stop offset="100%" stop-color="#FF3700" />
    </linearGradient>
  </defs>

  <rect width="1600" height="2400" fill="url(#docksSky)" />

  <!-- Industrial Smog Horizon -->
  <circle cx="800" cy="1150" r="500" fill="#FF7700" opacity="0.25" />

  <!-- Massive Gantry Robotic Cargo Cranes (Silhouettes) -->
  <g transform="translate(100, 300)">
    <line x1="200" y1="400" x2="350" y2="1300" stroke="#0E121B" stroke-width="26" />
    <line x1="500" y1="400" x2="350" y2="1300" stroke="#0E121B" stroke-width="26" />
    <line x1="100" y1="400" x2="700" y2="400" stroke="#0E121B" stroke-width="32" />
    <circle cx="200" cy="400" r="14" fill="#FF7700" />
    <circle cx="600" cy="400" r="14" fill="#0077FF" />
    <!-- Crane Rigging Lines -->
    <line x1="400" y1="400" x2="400" y2="900" stroke="#FF7700" stroke-width="3" stroke-dasharray="15 10" />
    <rect x="340" y="900" width="120" height="70" fill="#FF7700" opacity="0.8" />
  </g>

  <g transform="translate(850, 200)">
    <line x1="200" y1="400" x2="350" y2="1400" stroke="#121722" stroke-width="30" />
    <line x1="550" y1="400" x2="350" y2="1400" stroke="#121722" stroke-width="30" />
    <line x1="50" y1="400" x2="750" y2="400" stroke="#121722" stroke-width="36" />
    <circle cx="250" cy="400" r="16" fill="#0077FF" />
    <circle cx="650" cy="400" r="16" fill="#FF7700" />
  </g>

  <!-- Autonomous Cargo Super-Freighter Hull in Water -->
  <polygon points="250,1400 1350,1400 1480,1650 120,1650" fill="#090D17" stroke="#1E283A" stroke-width="4" />
  <line x1="200" y1="1450" x2="1400" y2="1450" stroke="#FF7700" stroke-width="5" />
  <!-- Cargo Containers Stacked on Deck -->
  <rect x="350" y="1250" width="140" height="150" fill="#FF7700" opacity="0.85" />
  <rect x="520" y="1200" width="140" height="200" fill="#0055FF" opacity="0.85" />
  <rect x="690" y="1150" width="140" height="250" fill="#D40030" opacity="0.85" />
  <rect x="860" y="1220" width="140" height="180" fill="#00AA66" opacity="0.85" />
  <rect x="1030" y="1280" width="140" height="120" fill="#FF7700" opacity="0.85" />

  <!-- Dark Harbor Water with Oil Slick Reflections -->
  <rect x="0" y="1650" width="1600" height="750" fill="#04070D" />
  <!-- Wavy Amber and Cobalt Light Reflections on Water -->
  <ellipse cx="420" cy="1800" rx="180" ry="15" fill="#FF7700" opacity="0.4" />
  <ellipse cx="600" cy="1850" rx="160" ry="12" fill="#0055FF" opacity="0.4" />
  <ellipse cx="800" cy="1780" rx="220" ry="18" fill="#FF3700" opacity="0.45" />
  <ellipse cx="1100" cy="1830" rx="190" ry="15" fill="#0077FF" opacity="0.4" />

  <line x1="100" y1="1950" x2="1500" y2="1950" stroke="#FF7700" stroke-width="3" opacity="0.3" stroke-dasharray="60 30" />
  <line x1="50" y1="2020" x2="1550" y2="2020" stroke="#0077FF" stroke-width="3" opacity="0.3" stroke-dasharray="40 20" />

  <!-- Poster Movie Title Overlay -->
  <text x="800" y="2140" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="78" font-weight="900" letter-spacing="18">NEO-DOCKS SECTOR 12</text>
  <text x="800" y="2200" text-anchor="middle" fill="#FF7700" font-family="sans-serif" font-size="28" font-weight="700" letter-spacing="12">THE INDUSTRIAL BASIN &amp; DARK WATERS</text>
  <text x="800" y="2270" text-anchor="middle" fill="#8292AB" font-family="monospace" font-size="18" letter-spacing="6">KEYFRAME 06 // 8K ULTRA-HD // WATER REFLECTION VOLUMETRICS</text>
</svg>
`;

async function generate() {
  console.log("Generating distinct 8K aesthetic posters 4, 5, and 6...");

  await sharp(Buffer.from(svgPoster4))
    .jpeg({ quality: 95 })
    .toFile(path.join(postersDir, 'poster-4.jpg'));
  console.log("✓ poster-4.jpg generated successfully!");

  await sharp(Buffer.from(svgPoster5))
    .jpeg({ quality: 95 })
    .toFile(path.join(postersDir, 'poster-5.jpg'));
  console.log("✓ poster-5.jpg generated successfully!");

  await sharp(Buffer.from(svgPoster6))
    .jpeg({ quality: 95 })
    .toFile(path.join(postersDir, 'poster-6.jpg'));
  console.log("✓ poster-6.jpg generated successfully!");
}

generate().catch(err => {
  console.error("Error generating posters:", err);
  process.exit(1);
});
