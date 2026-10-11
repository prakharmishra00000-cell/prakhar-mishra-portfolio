// Futuristic Web Audio API Sound Synthesizer
// Zero external audio files required - works 100% offline and cross-platform

class CyberAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private volume: number = 0.3;
  private droneGain: GainNode | null = null;
  private droneOsc1: OscillatorNode | null = null;
  private droneOsc2: OscillatorNode | null = null;
  private isDronePlaying: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      const savedMute = localStorage.getItem('cyber_audio_muted');
      if (savedMute !== null) {
        this.isMuted = savedMute === 'true';
      }
    }
  }

  private initContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public setMuted(muted: boolean): boolean {
    this.isMuted = muted;
    if (typeof window !== 'undefined') {
      localStorage.setItem('cyber_audio_muted', String(muted));
    }
    if (this.droneGain && this.ctx) {
      const targetGain = muted ? 0 : this.volume * 0.15;
      this.droneGain.gain.setTargetAtTime(targetGain, this.ctx.currentTime, 0.1);
    }
    return this.isMuted;
  }

  public toggleMute(): boolean {
    return this.setMuted(!this.isMuted);
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.droneGain && this.ctx && !this.isMuted) {
      this.droneGain.gain.setTargetAtTime(this.volume * 0.15, this.ctx.currentTime, 0.1);
    }
  }

  // Futuristic SFX library
  public playSfx(type: 'hover' | 'click' | 'warp' | 'terminal' | 'access' | 'scan') {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;

      if (type === 'hover') {
        // High-tech micro blip
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(1760, now + 0.04);
        gain.gain.setValueAtTime(this.volume * 0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.045);
      } else if (type === 'click') {
        // Resonant cyber click
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(220, now + 0.06);
        gain.gain.setValueAtTime(this.volume * 0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.065);
      } else if (type === 'warp') {
        // Hyperspace / Sector warp whoosh
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(200, now);
        filter.frequency.exponentialRampToValueAtTime(3200, now + 0.25);
        filter.frequency.exponentialRampToValueAtTime(300, now + 0.6);

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(110, now);
        osc.frequency.exponentialRampToValueAtTime(440, now + 0.25);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.6);

        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(this.volume * 0.35, now + 0.2);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.65);
      } else if (type === 'terminal') {
        // Keyboard mechanical chirp
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(700 + Math.random() * 200, now);
        gain.gain.setValueAtTime(this.volume * 0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.035);
      } else if (type === 'access') {
        // Sci-Fi Positive Chord (Arpeggiated)
        const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const startTime = now + idx * 0.05;
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, startTime);
          gain.gain.setValueAtTime(this.volume * 0.18, startTime);
          gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.25);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(startTime);
          osc.stop(startTime + 0.26);
        });
      } else if (type === 'scan') {
        // High-tech frequency sweep
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.linearRampToValueAtTime(2400, now + 0.12);
        gain.gain.setValueAtTime(this.volume * 0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.13);
      }
    } catch {
      // Audio autoplay policy fallback
    }
  }

  // Atmospheric Space Drone Loop
  public startAmbientDrone() {
    if (this.isDronePlaying) return;
    const ctx = this.initContext();
    if (!ctx) return;

    try {
      this.droneGain = ctx.createGain();
      const initialGain = this.isMuted ? 0 : this.volume * 0.15;
      this.droneGain.gain.setValueAtTime(initialGain, ctx.currentTime);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(280, ctx.currentTime);

      // Low sub drone
      this.droneOsc1 = ctx.createOscillator();
      this.droneOsc1.type = 'sine';
      this.droneOsc1.frequency.setValueAtTime(55, ctx.currentTime); // A1

      // Shimmer detuned drone
      this.droneOsc2 = ctx.createOscillator();
      this.droneOsc2.type = 'sawtooth';
      this.droneOsc2.frequency.setValueAtTime(110.5, ctx.currentTime); // A2 slight detune

      const subGain = ctx.createGain();
      subGain.gain.setValueAtTime(0.7, ctx.currentTime);
      const sawGain = ctx.createGain();
      sawGain.gain.setValueAtTime(0.12, ctx.currentTime);

      this.droneOsc1.connect(subGain);
      this.droneOsc2.connect(sawGain);
      subGain.connect(filter);
      sawGain.connect(filter);

      filter.connect(this.droneGain);
      this.droneGain.connect(ctx.destination);

      this.droneOsc1.start();
      this.droneOsc2.start();
      this.isDronePlaying = true;
    } catch {
      // Audio context might be restricted before user gesture
    }
  }

  public stopAmbientDrone() {
    if (!this.isDronePlaying) return;
    try {
      if (this.droneOsc1) {
        this.droneOsc1.stop();
        this.droneOsc1.disconnect();
      }
      if (this.droneOsc2) {
        this.droneOsc2.stop();
        this.droneOsc2.disconnect();
      }
      this.isDronePlaying = false;
    } catch {
      // Ignore
    }
  }
}

export const cyberAudio = new CyberAudioEngine();
