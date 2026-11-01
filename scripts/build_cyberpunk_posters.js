const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const postersDir = path.join(__dirname, '..', 'public', 'posters');
if (!fs.existsSync(postersDir)) {
  fs.mkdirSync(postersDir, { recursive: true });
}

const posterConfigs = [
  {
    target: 'poster-4.jpg',
    url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=92&w=2400&auto=format&fit=crop',
    title: 'KOWLOON GRID 09',
    subtitle: 'THE NEON DATA CANYON',
    code: 'SECTOR-09 // TERMINAL HAZARD',
    accent: '#00F0FF',
    accent2: '#FF0055',
    kanji: '九龍電脳街区'
  },
  {
    target: 'poster-5.jpg',
    url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=92&w=2400&auto=format&fit=crop',
    title: 'SYNTHETIC SKYLINE',
    subtitle: 'APEX MEGALOPOLIS 2099',
    code: 'ELEVATION 2400M // CORE NET',
    accent: '#A855F7',
    accent2: '#38BDF8',
    kanji: '電脳超高層都市'
  },
  {
    target: 'poster-6.jpg',
    url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=92&w=2400&auto=format&fit=crop',
    title: 'MIDNIGHT DRIFT',
    subtitle: 'HIGHWAY INTERCEPTOR 01',
    code: 'VELOCITY MACH 1.8 // PURSUIT',
    accent: '#F59E0B',
    accent2: '#EF4444',
    kanji: '高速電脳追跡'
  }
];

function downloadBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadBuffer(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with status ${res.statusCode}`));
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

function createOverlaySvg(cfg) {
  return Buffer.from(`
    <svg width="1600" height="2400" viewBox="0 0 1600 2400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="vignette" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#000000" stop-opacity="0.65" />
          <stop offset="25%" stop-color="#000000" stop-opacity="0.0" />
          <stop offset="65%" stop-color="#000000" stop-opacity="0.0" />
          <stop offset="85%" stop-color="#000000" stop-opacity="0.75" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.95" />
        </linearGradient>
        <linearGradient id="laserLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${cfg.accent}" stop-opacity="0" />
          <stop offset="30%" stop-color="${cfg.accent}" stop-opacity="0.9" />
          <stop offset="70%" stop-color="${cfg.accent2}" stop-opacity="0.9" />
          <stop offset="100%" stop-color="${cfg.accent2}" stop-opacity="0" />
        </linearGradient>
      </defs>

      <!-- Atmospheric Vignette & Color Gradients -->
      <rect width="1600" height="2400" fill="url(#vignette)" />

      <!-- High-Tech Framing Border -->
      <rect x="50" y="50" width="1500" height="2300" fill="none" stroke="${cfg.accent}" stroke-width="1.5" stroke-opacity="0.35" />
      <rect x="62" y="62" width="1476" height="2276" fill="none" stroke="#FFFFFF" stroke-width="0.75" stroke-opacity="0.15" />

      <!-- Corner HUD Brackets -->
      <path d="M 40 100 L 40 40 L 100 40" fill="none" stroke="${cfg.accent}" stroke-width="4" />
      <path d="M 1560 100 L 1560 40 L 1500 40" fill="none" stroke="${cfg.accent}" stroke-width="4" />
      <path d="M 40 2300 L 40 2360 L 100 2360" fill="none" stroke="${cfg.accent}" stroke-width="4" />
      <path d="M 1560 2300 L 1560 2360 L 1500 2360" fill="none" stroke="${cfg.accent}" stroke-width="4" />

      <!-- Top Header Telemetry -->
      <text x="80" y="105" font-family="'Helvetica Neue', 'Arial', sans-serif" font-size="20" font-weight="800" fill="${cfg.accent}" letter-spacing="4">
        SYS // ${cfg.code}
      </text>
      <text x="1520" y="105" text-anchor="end" font-family="'Helvetica Neue', 'Arial', sans-serif" font-size="20" font-weight="700" fill="#FFFFFF" letter-spacing="3" opacity="0.8">
        8K MASTER RESOLUTION &#8226; 60FPS MATRIX
      </text>

      <!-- Kanji Watermark -->
      <text x="1500" y="320" text-anchor="end" font-family="sans-serif" font-size="74" font-weight="900" fill="${cfg.accent}" fill-opacity="0.4" letter-spacing="12">
        ${cfg.kanji}
      </text>

      <!-- Center Crosshair Reticle -->
      <circle cx="800" cy="1200" r="160" fill="none" stroke="${cfg.accent}" stroke-width="1" stroke-dasharray="8 8" stroke-opacity="0.2" />
      <line x1="720" y1="1200" x2="880" y2="1200" stroke="${cfg.accent}" stroke-width="1.5" stroke-opacity="0.4" />
      <line x1="800" y1="1120" x2="800" y2="1280" stroke="${cfg.accent}" stroke-width="1.5" stroke-opacity="0.4" />

      <!-- Bottom Cinematic Typography Bar -->
      <rect x="80" y="2060" width="1440" height="3" fill="url(#laserLine)" />

      <text x="100" y="2150" font-family="'Helvetica Neue', 'Arial', sans-serif" font-size="76" font-weight="900" fill="#FFFFFF" letter-spacing="10">
        ${cfg.title}
      </text>
      <text x="104" y="2210" font-family="'Helvetica Neue', 'Arial', sans-serif" font-size="28" font-weight="700" fill="${cfg.accent}" letter-spacing="6">
        ${cfg.subtitle}
      </text>

      <text x="1500" y="2200" text-anchor="end" font-family="monospace" font-size="22" font-weight="600" fill="#FFFFFF" letter-spacing="4" opacity="0.75">
        RAW_INDEX: 0x88F9 &#8226; NEURAL NODE 4
      </text>
    </svg>
  `);
}

async function build() {
  console.log('Rendering 8K aesthetic photorealistic cyberpunk posters...');
  for (const cfg of posterConfigs) {
    const outPath = path.join(postersDir, cfg.target);
    console.log(`Downloading source for ${cfg.target}...`);
    const rawBuffer = await downloadBuffer(cfg.url);
    console.log(`Processing with Sharp (${rawBuffer.length} bytes)...`);

    const overlaySvg = createOverlaySvg(cfg);

    await sharp(rawBuffer)
      .resize(1600, 2400, { fit: 'cover', position: 'center' })
      .modulate({
        brightness: 1.05,
        saturation: 1.25
      })
      .composite([
        {
          input: overlaySvg,
          top: 0,
          left: 0
        }
      ])
      .jpeg({
        quality: 95,
        chromaSubsampling: '4:4:4'
      })
      .toFile(outPath);

    const stats = fs.statSync(outPath);
    console.log(`✓ ${cfg.target} rendered successfully: ${stats.size} bytes`);
  }
}

build().catch(err => {
  console.error('Build error:', err);
  process.exit(1);
});
