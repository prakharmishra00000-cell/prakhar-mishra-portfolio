// High-Performance Dynamic Video & Hologram Texture Generator for Three.js
// Renders 60FPS futuristic cyber visuals onto a 2D canvas utilized as a real-time THREE.CanvasTexture

export class HoloVideoGenerator {
  public canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private animId: number | null = null;
  private currentMode: 'neural_matrix' | 'quantum_grid' | 'code_cascade' | 'ai_synapse' = 'neural_matrix';
  public isPlaying: boolean = true;
  private time: number = 0;
  public onFrameUpdate?: () => void;

  // Nodes for neural matrix
  private nodes: Array<{ x: number; y: number; vx: number; vy: number; radius: number; pulse: number }> = [];
  // Matrix rain characters
  private rainDrops: number[] = [];
  private readonly matrixChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ010101Ω≈µ∑√∫';

  constructor(width: number = 1024, height: number = 576) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height;
    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get canvas context');
    this.ctx = ctx;

    this.initNeuralNodes(60);
    this.initRainDrops();
    this.start();
  }

  private initNeuralNodes(count: number) {
    this.nodes = [];
    for (let i = 0; i < count; i++) {
      this.nodes.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius: Math.random() * 3 + 2,
        pulse: Math.random() * Math.PI * 2
      });
    }
  }

  private initRainDrops() {
    const columns = Math.floor(this.canvas.width / 20);
    this.rainDrops = [];
    for (let i = 0; i < columns; i++) {
      this.rainDrops.push(Math.random() * -100);
    }
  }

  public setMode(mode: 'neural_matrix' | 'quantum_grid' | 'code_cascade' | 'ai_synapse') {
    this.currentMode = mode;
  }

  public start() {
    if (this.animId !== null) return;
    const loop = () => {
      if (this.isPlaying) {
        this.time += 0.03;
        this.render();
        if (this.onFrameUpdate) this.onFrameUpdate();
      }
      this.animId = requestAnimationFrame(loop);
    };
    this.animId = requestAnimationFrame(loop);
  }

  public stop() {
    if (this.animId !== null) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
  }

  public togglePlay(): boolean {
    this.isPlaying = !this.isPlaying;
    return this.isPlaying;
  }

  private render() {
    const { ctx, canvas } = this;
    const w = canvas.width;
    const h = canvas.height;

    // Dark cyber backdrop with slight persistence trail
    ctx.fillStyle = 'rgba(6, 8, 16, 0.25)';
    ctx.fillRect(0, 0, w, h);

    switch (this.currentMode) {
      case 'neural_matrix':
        this.renderNeuralMatrix(w, h);
        break;
      case 'quantum_grid':
        this.renderQuantumGrid(w, h);
        break;
      case 'code_cascade':
        this.renderCodeCascade(w, h);
        break;
      case 'ai_synapse':
        this.renderAISynapse(w, h);
        break;
    }

    // Overlay Holographic HUD and Scanlines
    this.renderHoloOverlay(w, h);
  }

  // Channel 1: Neural Matrix
  private renderNeuralMatrix(w: number, h: number) {
    const { ctx } = this;

    // Connect nodes
    ctx.lineWidth = 1;
    for (let i = 0; i < this.nodes.length; i++) {
      const n1 = this.nodes[i];
      n1.x += n1.vx;
      n1.y += n1.vy;
      n1.pulse += 0.05;

      if (n1.x < 0 || n1.x > w) n1.vx *= -1;
      if (n1.y < 0 || n1.y > h) n1.vy *= -1;

      for (let j = i + 1; j < this.nodes.length; j++) {
        const n2 = this.nodes[j];
        const dx = n2.x - n1.x;
        const dy = n2.y - n1.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 140) {
          const alpha = (1 - dist / 140) * 0.7;
          ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.stroke();

          // Active pulse packets along synapse lines
          if (Math.sin(this.time * 4 + i) > 0.85) {
            const px = n1.x + dx * ((this.time * 0.8) % 1);
            const py = n1.y + dy * ((this.time * 0.8) % 1);
            ctx.fillStyle = '#f59e0b';
            ctx.beginPath();
            ctx.arc(px, py, 2.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Draw node
      const r = n1.radius + Math.sin(n1.pulse) * 1.5;
      const grad = ctx.createRadialGradient(n1.x, n1.y, 0, n1.x, n1.y, r * 2.5);
      grad.addColorStop(0, '#ffffff');
      grad.addColorStop(0.4, '#00f0ff');
      grad.addColorStop(1, 'rgba(0, 240, 255, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(n1.x, n1.y, r * 2.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Channel 2: Quantum Raymarched Grid & Horizon
  private renderQuantumGrid(w: number, h: number) {
    const { ctx, time } = this;
    const horizon = h * 0.55;

    // Cyber Horizon Glow
    const horizGrad = ctx.createLinearGradient(0, horizon - 50, 0, horizon + 50);
    horizGrad.addColorStop(0, 'rgba(168, 85, 247, 0)');
    horizGrad.addColorStop(0.5, 'rgba(0, 240, 255, 0.4)');
    horizGrad.addColorStop(1, 'rgba(168, 85, 247, 0)');
    ctx.fillStyle = horizGrad;
    ctx.fillRect(0, horizon - 50, w, 100);

    // Glowing Sun/Core on horizon
    const sunGrad = ctx.createRadialGradient(w / 2, horizon - 20, 10, w / 2, horizon - 20, 120);
    sunGrad.addColorStop(0, '#f59e0b');
    sunGrad.addColorStop(0.5, 'rgba(236, 72, 153, 0.6)');
    sunGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = sunGrad;
    ctx.beginPath();
    ctx.arc(w / 2, horizon - 20, 120, 0, Math.PI * 2);
    ctx.fill();

    // Perspective floor lines
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.35)';
    ctx.lineWidth = 1.5;
    const numLines = 26;
    for (let i = 0; i <= numLines; i++) {
      const xBottom = (w / numLines) * i;
      ctx.beginPath();
      ctx.moveTo(w / 2, horizon);
      ctx.lineTo(xBottom, h);
      ctx.stroke();
    }

    // Moving horizontal grid lines
    const offset = (time * 60) % 35;
    for (let y = horizon + offset; y < h; y += 30) {
      const progress = (y - horizon) / (h - horizon);
      ctx.lineWidth = 0.5 + progress * 2.5;
      ctx.strokeStyle = `rgba(168, 85, 247, ${0.15 + progress * 0.7})`;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
  }

  // Channel 3: Production Code Stream & Data Cascade
  private renderCodeCascade(w: number, h: number) {
    const { ctx, rainDrops, matrixChars } = this;

    ctx.fillStyle = 'rgba(0, 240, 255, 0.9)';
    ctx.font = '14px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
      const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
      const x = i * 20;
      const y = rainDrops[i];

      // Draw glowing head
      ctx.fillStyle = '#ffffff';
      ctx.fillText(char, x, y);

      // Trailing characters
      ctx.fillStyle = 'rgba(0, 240, 255, 0.65)';
      ctx.fillText(matrixChars[Math.floor(Math.random() * matrixChars.length)], x, y - 18);

      if (y > h && Math.random() > 0.975) {
        rainDrops[i] = 0;
      } else {
        rainDrops[i] += 12;
      }
    }
  }

  // Channel 4: Deep Synapse / Gemini Reasoning Rings
  private renderAISynapse(w: number, h: number) {
    const { ctx, time } = this;
    const cx = w / 2;
    const cy = h / 2;

    for (let r = 0; r < 5; r++) {
      const radius = 60 + r * 45;
      const rotation = time * (r % 2 === 0 ? 0.8 : -0.8) + r;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rotation);

      ctx.strokeStyle = r % 2 === 0 ? 'rgba(0, 240, 255, 0.6)' : 'rgba(245, 158, 11, 0.6)';
      ctx.lineWidth = 2;
      ctx.setLineDash([15 + r * 4, 10 + r * 2]);
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Orbital planetary nodes
      const numOrbits = 3 + r;
      for (let p = 0; p < numOrbits; p++) {
        const angle = (Math.PI * 2 / numOrbits) * p + time * 1.2;
        const px = Math.cos(angle) * radius;
        const py = Math.sin(angle) * radius;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }

    // Central pulsing neural core
    const corePulse = 20 + Math.sin(time * 3) * 6;
    const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, corePulse * 2);
    coreGrad.addColorStop(0, '#ffffff');
    coreGrad.addColorStop(0.3, '#38bdf8');
    coreGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = coreGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, corePulse * 2, 0, Math.PI * 2);
    ctx.fill();
  }

  // Holographic Scanlines & Telemetry Frame
  private renderHoloOverlay(w: number, h: number) {
    const { ctx, time } = this;

    // Scanlines
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    for (let y = 0; y < h; y += 4) {
      ctx.fillRect(0, y, w, 1.5);
    }

    // Moving horizontal laser scan beam
    const scanY = ((time * 80) % (h + 40)) - 20;
    const scanGrad = ctx.createLinearGradient(0, scanY - 15, 0, scanY + 15);
    scanGrad.addColorStop(0, 'rgba(0, 240, 255, 0)');
    scanGrad.addColorStop(0.5, 'rgba(0, 240, 255, 0.25)');
    scanGrad.addColorStop(1, 'rgba(0, 240, 255, 0)');
    ctx.fillStyle = scanGrad;
    ctx.fillRect(0, scanY - 15, w, 30);

    // Audio frequency visualizer bars at the bottom
    const numBars = 32;
    const barWidth = 6;
    const barGap = 4;
    const totalBarsWidth = numBars * (barWidth + barGap);
    const startX = (w - totalBarsWidth) / 2;

    for (let b = 0; b < numBars; b++) {
      const freqHeight = 8 + Math.abs(Math.sin(time * 4 + b * 0.4)) * 36;
      ctx.fillStyle = b % 2 === 0 ? 'rgba(0, 240, 255, 0.8)' : 'rgba(245, 158, 11, 0.8)';
      ctx.fillRect(startX + b * (barWidth + barGap), h - 28 - freqHeight, barWidth, freqHeight);
    }

    // Corner targeting brackets
    const bracketSize = 24;
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 2.5;

    // Top-Left
    ctx.beginPath();
    ctx.moveTo(20, 20 + bracketSize);
    ctx.lineTo(20, 20);
    ctx.lineTo(20 + bracketSize, 20);
    ctx.stroke();

    // Top-Right
    ctx.beginPath();
    ctx.moveTo(w - 20 - bracketSize, 20);
    ctx.lineTo(w - 20, 20);
    ctx.lineTo(w - 20, 20 + bracketSize);
    ctx.stroke();

    // Bottom-Left
    ctx.beginPath();
    ctx.moveTo(20, h - 20 - bracketSize);
    ctx.lineTo(20, h - 20);
    ctx.lineTo(20 + bracketSize, h - 20);
    ctx.stroke();

    // Bottom-Right
    ctx.beginPath();
    ctx.moveTo(w - 20 - bracketSize, h - 20);
    ctx.lineTo(w - 20, h - 20);
    ctx.lineTo(w - 20, h - 20 - bracketSize);
    ctx.stroke();

    // Telemetry text overlay
    ctx.font = 'bold 12px monospace';
    ctx.fillStyle = '#00f0ff';
    ctx.fillText('REC ● 60FPS // NEURAL-STREAM ACTIVE', 32, 36);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fillText(`CH: ${this.currentMode.toUpperCase()} | BUFFER: OPTIMAL`, w - 320, 36);
  }
}
