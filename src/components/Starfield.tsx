"use client";

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
}

interface CursorStar {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  offsetX: number;
  offsetY: number;
  radius: number;
  alpha: number;
  speed: number;
  orbitAngle: number;
  orbitSpeed: number;
  orbitRadius: number;
  color: string;
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initBackgroundStars();
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinate tracking with smooth interpolation
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isMoving: false,
    };

    let moveTimeout: NodeJS.Timeout;
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isMoving = true;
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        mouse.isMoving = false;
      }, 2000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 1. Background Twinkling Stars
    const STAR_COUNT = Math.min(Math.floor((width * height) / 4500), 280);
    let bgStars: Star[] = [];

    const starColors = ['#ffffff', '#e0f2fe', '#bae6fd', '#c7d2fe', '#ddd6fe', '#fae8ff'];

    function initBackgroundStars() {
      bgStars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        bgStars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.03 + 0.008,
          twinklePhase: Math.random() * Math.PI * 2,
          color: starColors[Math.floor(Math.random() * starColors.length)],
        });
      }
    }

    initBackgroundStars();

    // 2. Cursor Constellation Cluster (Group of stars moving with the cursor)
    const CLUSTER_COUNT = 32;
    const clusterStars: CursorStar[] = [];
    const clusterColors = ['#38bdf8', '#818cf8', '#60a5fa', '#93c5fd', '#c084fc', '#ffffff'];

    for (let i = 0; i < CLUSTER_COUNT; i++) {
      const orbitRad = Math.random() * 75 + 15;
      const angle = Math.random() * Math.PI * 2;
      clusterStars.push({
        x: mouse.x + Math.cos(angle) * orbitRad,
        y: mouse.y + Math.sin(angle) * orbitRad,
        targetX: mouse.x,
        targetY: mouse.y,
        offsetX: Math.cos(angle) * orbitRad,
        offsetY: Math.sin(angle) * orbitRad,
        radius: Math.random() * 2.2 + 1,
        alpha: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.08 + 0.04,
        orbitAngle: angle,
        orbitSpeed: (Math.random() - 0.5) * 0.04,
        orbitRadius: orbitRad,
        color: clusterColors[Math.floor(Math.random() * clusterColors.length)],
      });
    }

    // Trailing particles behind cursor movement
    interface TrailParticle {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      decay: number;
      color: string;
    }
    const trail: TrailParticle[] = [];

    // Render loop
    let lastTime = 0;
    const render = (time: number) => {
      lastTime = time;

      // Smooth cursor lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      // Add trail when cursor moves
      if (Math.hypot(mouse.targetX - mouse.x, mouse.targetY - mouse.y) > 0.5) {
        trail.push({
          x: mouse.x + (Math.random() - 0.5) * 16,
          y: mouse.y + (Math.random() - 0.5) * 16,
          radius: Math.random() * 2 + 0.8,
          alpha: 0.9,
          decay: Math.random() * 0.03 + 0.02,
          color: clusterColors[Math.floor(Math.random() * clusterColors.length)],
        });
      }

      ctx.clearRect(0, 0, width, height);

      // A. Draw Background Twinkling Stars
      for (let i = 0; i < bgStars.length; i++) {
        const star = bgStars[i];
        star.twinklePhase += star.twinkleSpeed;
        const currentAlpha = Math.max(0.1, Math.min(1, star.alpha + Math.sin(star.twinklePhase) * 0.35));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = currentAlpha;
        ctx.fill();

        // Occasional light spikes for larger stars
        if (star.radius > 1.4 && currentAlpha > 0.6) {
          ctx.strokeStyle = star.color;
          ctx.lineWidth = 0.5;
          ctx.globalAlpha = currentAlpha * 0.4;
          ctx.beginPath();
          ctx.moveTo(star.x - star.radius * 2.5, star.y);
          ctx.lineTo(star.x + star.radius * 2.5, star.y);
          ctx.moveTo(star.x, star.y - star.radius * 2.5);
          ctx.lineTo(star.x, star.y + star.radius * 2.5);
          ctx.stroke();
        }
      }

      // B. Draw Trailing Sparkles
      for (let i = trail.length - 1; i >= 0; i--) {
        const p = trail[i];
        p.alpha -= p.decay;
        p.radius *= 0.97;
        if (p.alpha <= 0) {
          trail.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // C. Update & Draw Cursor Constellation Cluster
      // Draw delicate connecting filaments between nearby stars in cluster
      ctx.lineWidth = 0.6;
      for (let i = 0; i < clusterStars.length; i++) {
        for (let j = i + 1; j < clusterStars.length; j++) {
          const dx = clusterStars[i].x - clusterStars[j].x;
          const dy = clusterStars[i].y - clusterStars[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 55) {
            ctx.beginPath();
            ctx.moveTo(clusterStars[i].x, clusterStars[i].y);
            ctx.lineTo(clusterStars[j].x, clusterStars[j].y);
            ctx.strokeStyle = 'rgba(56, 189, 248, 0.22)';
            ctx.globalAlpha = (1 - dist / 55) * 0.45;
            ctx.stroke();
          }
        }
      }

      // Draw cluster stars
      for (let i = 0; i < clusterStars.length; i++) {
        const star = clusterStars[i];

        // Orbit around cursor center
        star.orbitAngle += star.orbitSpeed;
        const targetX = mouse.x + Math.cos(star.orbitAngle) * star.orbitRadius;
        const targetY = mouse.y + Math.sin(star.orbitAngle) * star.orbitRadius;

        // Fluid follow
        star.x += (targetX - star.x) * star.speed;
        star.y += (targetY - star.y) * star.speed;

        // Glowing core
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Outer starlight halo
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha * 0.15;
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      clearTimeout(moveTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}
