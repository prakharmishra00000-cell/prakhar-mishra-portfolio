"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Compass, Sparkles, ArrowRight, Eye, ShieldCheck, Cpu } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { cyberAudio } from '@/utils/audioSynth';

// Dynamic import for WorldContainer to avoid SSR canvas issues
const WorldContainer = dynamic(() => import('@/components/world3d/WorldContainer'), {
  ssr: false,
  loading: () => (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: '#04060c',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      fontFamily: 'monospace',
      color: '#00f0ff'
    }}>
      <div style={{
        width: 48,
        height: 48,
        border: '3px solid rgba(0, 240, 255, 0.2)',
        borderTopColor: '#00f0ff',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <div style={{ letterSpacing: '0.1em', fontSize: '14px', fontWeight: 700 }}>
        INITIALIZING 3D QUANTUM NEURAL ENGINE...
      </div>
      <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
    </div>
  )
});

export default function Home() {
  const [viewMode, setViewMode] = useState<'3d_world' | 'classic_deck'>('3d_world');

  const handleEnter3D = () => {
    cyberAudio.playSfx('warp');
    setViewMode('3d_world');
  };

  const handleExit3D = () => {
    cyberAudio.playSfx('click');
    setViewMode('classic_deck');
  };

  return (
    <>
      {viewMode === '3d_world' ? (
        // Mode 1: 100% Full-Screen Futuristic Explorable 3D Cyber World
        <WorldContainer
          viewMode="3d_world"
          onViewModeToggle={handleExit3D}
        />
      ) : (
        // Mode 2: Executive Holodeck & Classic Portfolio Deck
        <div style={{ position: 'relative', minHeight: '100vh' }}>
          {/* Top Cyber Return Banner */}
          <div style={{
            background: 'linear-gradient(90deg, rgba(0, 240, 255, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)',
            borderBottom: '1px solid rgba(0, 240, 255, 0.3)',
            padding: '10px 20px',
            position: 'sticky',
            top: 0,
            zIndex: 150,
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#00f0ff',
                boxShadow: '0 0 10px #00f0ff',
                display: 'inline-block'
              }} />
              <span style={{
                color: '#e2e8f0',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                fontFamily: 'monospace'
              }}>
                EXPLORABLE 3D CYBER WORLD ENGINE READY
              </span>
            </div>

            <button
              type="button"
              onClick={handleEnter3D}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 18px',
                background: 'linear-gradient(135deg, #00f0ff 0%, #3b82f6 100%)',
                color: '#060810',
                fontWeight: 800,
                fontSize: '12px',
                letterSpacing: '0.05em',
                borderRadius: 6,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 18px rgba(0, 240, 255, 0.4)',
                transition: 'all 0.2s ease'
              }}
            >
              <Compass size={14} />
              <span>RE-ENTER 3D IMMERSIVE WORLD</span>
            </button>
          </div>

          <Navigation />
          
          <Hero />

          {/* Embedded 3D Interactive Viewport Box */}
          <section style={{ maxWidth: 1200, margin: '40px auto 20px', padding: '0 20px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: 16,
              flexWrap: 'wrap',
              gap: 12
            }}>
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  color: '#00f0ff',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  fontFamily: 'monospace',
                  marginBottom: 4
                }}>
                  <Cpu size={14} />
                  <span>INTERACTIVE 3D VIEWPORT // HOLO-THEATER & SHADERS</span>
                </div>
                <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
                  Explorable 3D Cyber Stage
                </h2>
                <p style={{ color: '#94a3b8', fontSize: '14px', maxWidth: 600 }}>
                  Real-time WebGL rendering, curved holographic video theater, and interactive 3D monoliths with live flight controls.
                </p>
              </div>

              <button
                type="button"
                onClick={handleEnter3D}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '10px 20px',
                  background: 'rgba(0, 240, 255, 0.1)',
                  border: '1px solid rgba(0, 240, 255, 0.4)',
                  borderRadius: 8,
                  color: '#00f0ff',
                  fontWeight: 700,
                  fontSize: '13px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>Full-Screen 3D Flight Mode</span>
                <ArrowRight size={15} />
              </button>
            </div>

            <WorldContainer
              isEmbedded={true}
              viewMode="classic_deck"
              onViewModeToggle={handleEnter3D}
            />
          </section>

          <About />
          <Skills />
          <Projects />
          <Services />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
