"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Volume2, VolumeX, Eye, Compass, Terminal, Tv, 
  X, ExternalLink, Code, Layers, Mail, Phone, Download,
  Play, Pause, ChevronRight, Sparkles, Send
} from 'lucide-react';
import styles from './HoloHUD.module.css';
import { 
  SECTORS, PROJECTS_DATA, SKILL_CATEGORIES, VIDEO_TRACKS, PROFILE_INFO,
  SectorInfo, ProjectInfo, VideoTrack 
} from '@/data/portfolioData';
import { cyberAudio } from '@/utils/audioSynth';
import { CameraMode } from './CyberWorld3D';

interface HoloHUDProps {
  currentSector: SectorInfo;
  onSelectSector: (sector: SectorInfo) => void;
  cameraMode: CameraMode;
  onToggleCameraMode: () => void;
  selectedProject: ProjectInfo | null;
  onCloseProject: () => void;
  showSkillsModal: boolean;
  onCloseSkills: () => void;
  showContactModal: boolean;
  onCloseContact: () => void;
  showVideoModal: boolean;
  onCloseVideoModal: () => void;
  activeVideoChannel: 'neural_matrix' | 'quantum_grid' | 'code_cascade' | 'ai_synapse';
  onSelectVideoChannel: (channel: 'neural_matrix' | 'quantum_grid' | 'code_cascade' | 'ai_synapse') => void;
  fps: number;
  viewMode: '3d_world' | 'classic_deck';
  onToggleViewMode: () => void;
  isCinemaFocus: boolean;
  onToggleCinemaFocus: () => void;
}

export default function HoloHUD({
  currentSector,
  onSelectSector,
  cameraMode,
  onToggleCameraMode,
  selectedProject,
  onCloseProject,
  showSkillsModal,
  onCloseSkills,
  showContactModal,
  onCloseContact,
  showVideoModal,
  onCloseVideoModal,
  activeVideoChannel,
  onSelectVideoChannel,
  fps,
  viewMode,
  onToggleViewMode,
  isCinemaFocus,
  onToggleCinemaFocus,
}: HoloHUDProps) {
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showTerminal, setShowTerminal] = useState<boolean>(false);
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "PRAKHAR MISHRA // QUANTUM CORE OS v4.2.0 [BOOT COMPLETED]",
    "System: All 5 Sectors Online. WebGL Shaders Active. Neural Matrix Connected.",
    "Type 'help' to inspect command list or click any sector to warp."
  ]);
  const [terminalInput, setTerminalInput] = useState<string>('');
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  // Audio mute sync
  useEffect(() => {
    setIsMuted(cyberAudio.getMuted());
  }, []);

  const handleToggleAudio = () => {
    const muted = cyberAudio.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      cyberAudio.startAmbientDrone();
      cyberAudio.playSfx('access');
    } else {
      cyberAudio.stopAmbientDrone();
    }
  };

  // Terminal Command Parser
  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    cyberAudio.playSfx('terminal');
    const newHistory = [...terminalHistory, `> ${terminalInput}`];

    if (cmd === 'help') {
      newHistory.push(
        "COMMANDS AVAILABLE:",
        "  warp <nexus|theater|projects|skills|transmission> : Teleport to sector",
        "  projects                                          : List flagship AI projects",
        "  skills                                            : View technical arsenal",
        "  video <1|2|3|4>                                   : Switch Holo-Theater video channel",
        "  drone / story                                     : Switch camera flight mode",
        "  sfx on / sfx off                                  : Toggle cyber audio",
        "  whoami                                            : Display developer dossier",
        "  clear                                             : Clear terminal buffer"
      );
    } else if (cmd === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    } else if (cmd === 'whoami') {
      newHistory.push(
        `DEVELOPER: ${PROFILE_INFO.name}`,
        `TITLE: ${PROFILE_INFO.title}`,
        `STATUS: ${PROFILE_INFO.status}`,
        `CONTACT: ${PROFILE_INFO.email}`
      );
    } else if (cmd.startsWith('warp ')) {
      const targetSec = cmd.replace('warp ', '').trim();
      const sec = SECTORS.find(s => s.id === targetSec || s.name.toLowerCase().includes(targetSec));
      if (sec) {
        onSelectSector(sec);
        newHistory.push(`[WARP SUCCESS] Relocating to ${sec.codename}`);
      } else {
        newHistory.push(`[WARP ERROR] Sector '${targetSec}' not recognized. Use: nexus, theater, projects, skills, transmission`);
      }
    } else if (cmd === 'drone') {
      if (cameraMode !== 'drone') onToggleCameraMode();
      newHistory.push("[CAMERA] Drone Roam Mode engaged (WASD + Mouse Drag)");
    } else if (cmd === 'story') {
      if (cameraMode !== 'story') onToggleCameraMode();
      newHistory.push("[CAMERA] Story Fly-through Autopilot engaged");
    } else if (cmd === 'sfx on') {
      cyberAudio.setMuted(false);
      setIsMuted(false);
      cyberAudio.startAmbientDrone();
      newHistory.push("[AUDIO] Cyber Synth Engine ACTIVATED");
    } else if (cmd === 'sfx off') {
      cyberAudio.setMuted(true);
      setIsMuted(true);
      cyberAudio.stopAmbientDrone();
      newHistory.push("[AUDIO] Cyber Synth Engine MUTED");
    } else if (cmd.startsWith('video ')) {
      const channelNum = cmd.replace('video ', '').trim();
      const channelMap: { [key: string]: 'neural_matrix' | 'quantum_grid' | 'code_cascade' | 'ai_synapse' } = {
        '1': 'neural_matrix',
        '2': 'quantum_grid',
        '3': 'code_cascade',
        '4': 'ai_synapse',
      };
      if (channelMap[channelNum]) {
        onSelectVideoChannel(channelMap[channelNum]);
        newHistory.push(`[VIDEO] Hologram channel switched to CH-0${channelNum}`);
      } else {
        newHistory.push("[VIDEO] Invalid channel number. Options: 1, 2, 3, 4");
      }
    } else {
      newHistory.push(`Command '${cmd}' not recognized. Type 'help' for syntax.`);
    }

    setTerminalHistory(newHistory);
    setTerminalInput('');

    setTimeout(() => {
      terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <div className={styles.hudRoot}>
      {/* 1. TOPBAR HUD */}
      <header className={styles.topbar}>
        <div className={`${styles.systemStatus} ${styles.interactive}`}>
          <span className={styles.pulseDot} />
          <span>PRAKHAR MISHRA // NEURAL ENGINE ONLINE // {fps || 60} FPS</span>
        </div>

        <div className={`${styles.topActions} ${styles.interactive}`}>
          {/* Audio Synthesizer Toggle */}
          <button 
            type="button" 
            className={`${styles.hudBtn} ${!isMuted ? styles.active : ''}`}
            onClick={handleToggleAudio}
            title={isMuted ? "Activate Audio Synthesizer" : "Mute Audio Engine"}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            <span>{isMuted ? 'AUDIO OFF' : 'CYBER SFX'}</span>
          </button>

          {/* Camera Flight Mode Toggle */}
          <button
            type="button"
            className={`${styles.hudBtn} ${cameraMode === 'drone' ? styles.active : ''}`}
            onClick={() => {
              cyberAudio.playSfx('click');
              onToggleCameraMode();
            }}
            title="Switch between Free Drone Roam & Cinematic Story Autopilot"
          >
            <Compass size={15} />
            <span>{cameraMode === 'drone' ? 'DRONE ROAM' : 'STORY TOUR'}</span>
          </button>

          {/* Cinema Theater Focus Toggle */}
          <button
            type="button"
            className={`${styles.hudBtn} ${isCinemaFocus ? styles.active : ''}`}
            onClick={() => {
              cyberAudio.playSfx('click');
              onToggleCinemaFocus();
            }}
            title="Focus camera directly on the 3D Holographic Theater"
          >
            <Tv size={15} />
            <span>CINEMA FOCUS</span>
          </button>

          {/* View Mode Toggle: 3D World vs Classic Deck */}
          <button
            type="button"
            className={styles.hudBtn}
            onClick={() => {
              cyberAudio.playSfx('warp');
              onToggleViewMode();
            }}
            title="Switch to Executive Holodeck Portfolio View"
          >
            <Eye size={15} />
            <span>{viewMode === '3d_world' ? 'CLASSIC DECK' : '3D WORLD'}</span>
          </button>
        </div>
      </header>

      {/* 2. CENTER SECTOR BANNER */}
      <div className={styles.sectorBanner}>
        <span className={styles.sectorCodename}>{currentSector.codename}</span>
        <h2 className={styles.sectorName}>{currentSector.name}</h2>
        <p className={styles.sectorDesc}>{currentSector.description}</p>
      </div>

      {/* 3. RADAR MINIMAP (Bottom Right) */}
      <div 
        className={`${styles.radarContainer} ${styles.interactive}`}
        title="Tactical Radar // Click blips to warp"
      >
        <div className={styles.radarSweep} />
        <div className={styles.radarRings} />
        <div className={styles.radarCrossX} />
        <div className={styles.radarCrossY} />

        {/* Sector Blips */}
        {SECTORS.map((sec) => {
          // Normalize 3D coordinates [-30 to 30] to radar percentage [10% to 90%]
          const leftPercent = 50 + (sec.target.x / 35) * 38;
          const topPercent = 50 + (sec.target.z / 35) * 38;
          const isSelected = sec.id === currentSector.id;

          return (
            <div
              key={sec.id}
              className={styles.radarBlip}
              style={{
                left: `${leftPercent}%`,
                top: `${topPercent}%`,
                background: sec.color,
                boxShadow: isSelected ? `0 0 10px ${sec.color}` : 'none',
                transform: isSelected ? 'translate(-50%, -50%) scale(1.6)' : 'translate(-50%, -50%)',
              }}
              onClick={() => {
                cyberAudio.playSfx('warp');
                onSelectSector(sec);
              }}
              title={`Warp to ${sec.name}`}
            />
          );
        })}
      </div>

      {/* 4. BOTTOMBAR HUD */}
      <footer className={styles.bottombar}>
        {/* Sector Quick-Warp Tabs */}
        <div className={`${styles.sectorTabs} ${styles.interactive}`}>
          {SECTORS.map((sec, idx) => (
            <button
              key={sec.id}
              type="button"
              className={`${styles.sectorTab} ${sec.id === currentSector.id ? styles.active : ''}`}
              onClick={() => {
                cyberAudio.playSfx('warp');
                onSelectSector(sec);
              }}
            >
              <span style={{ color: sec.color }}>0{idx + 1}</span>
              <span>{sec.name}</span>
            </button>
          ))}
        </div>

        {/* Terminal Button & Controls Guide */}
        <div className={`${styles.topActions} ${styles.interactive}`}>
          <div className={styles.controlsGuide}>
            <span>MOVE:</span>
            <span className={styles.keyBadge}>WASD</span>
            <span>ALTITUDE:</span>
            <span className={styles.keyBadge}>SPACE / C</span>
            <span>LOOK:</span>
            <span className={styles.keyBadge}>DRAG MOUSE</span>
          </div>

          <button
            type="button"
            className={`${styles.hudBtn} ${showTerminal ? styles.active : ''}`}
            onClick={() => {
              cyberAudio.playSfx('click');
              setShowTerminal(!showTerminal);
            }}
          >
            <Terminal size={15} />
            <span>&gt;_ TERMINAL</span>
          </button>
        </div>
      </footer>

      {/* 5. PROJECT DOSSIER MODAL */}
      {selectedProject && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalCard}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => {
                cyberAudio.playSfx('click');
                onCloseProject();
              }}
            >
              <X size={18} />
            </button>

            <div className={styles.modalHeader}>
              <span className={styles.modalTag} style={{ color: selectedProject.color }}>
                FLAGSHIP AI APPLICATION // DOSSIER
              </span>
              <h3 className={styles.modalTitle}>{selectedProject.name}</h3>
              <p className={styles.modalSubtitle}>{selectedProject.role}</p>
            </div>

            <div className={styles.projectMedia}>
              <img src={selectedProject.image} alt={selectedProject.name} />
            </div>

            {/* Metrics */}
            <div className={styles.metricsGrid}>
              {selectedProject.metrics.map((m, i) => (
                <div key={i} className={styles.metricCard}>
                  <span className={styles.metricValue} style={{ color: selectedProject.color }}>
                    {m.value}
                  </span>
                  <span className={styles.metricLabel}>{m.label}</span>
                </div>
              ))}
            </div>

            {/* Problem & Solution */}
            <div className={styles.infoBlock}>
              <h4>The Problem</h4>
              <p>{selectedProject.problem}</p>
            </div>

            <div className={styles.infoBlock}>
              <h4>The Solution</h4>
              <p>{selectedProject.solution}</p>
            </div>

            <div className={styles.infoBlock}>
              <h4>Product Positioning</h4>
              <p style={{ fontStyle: 'italic', color: '#e2e8f0' }}>"{selectedProject.positioning}"</p>
            </div>

            {/* Tech Stack */}
            <div className={styles.infoBlock}>
              <h4>Architecture Stack</h4>
              <div className={styles.techPills}>
                {selectedProject.tech.map((t) => (
                  <span key={t} className={styles.techPill}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className={styles.modalActions}>
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionBtnPrimary}
                onClick={() => cyberAudio.playSfx('access')}
              >
                Launch Live Application <ExternalLink size={16} />
              </a>

              {selectedProject.githubLink && selectedProject.githubLink !== '#' && (
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actionBtnSecondary}
                  onClick={() => cyberAudio.playSfx('click')}
                >
                  Inspect Source Code <Code size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 6. HOLO-THEATER VIDEO CONTROLLER MODAL */}
      {showVideoModal && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalCard}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => {
                cyberAudio.playSfx('click');
                onCloseVideoModal();
              }}
            >
              <X size={18} />
            </button>

            <div className={styles.modalHeader}>
              <span className={styles.modalTag}>3D HOLO-THEATER // VIDEO CONTROLLER</span>
              <h3 className={styles.modalTitle}>Holographic Video Stream Deck</h3>
              <p className={styles.modalSubtitle}>
                Real-time procedural video feeds and architecture showreels projected dynamically onto the 3D curved cyber screen.
              </p>
            </div>

            <div className={styles.channelGrid}>
              {VIDEO_TRACKS.map((track) => {
                const isActive = activeVideoChannel === track.generatorType;
                return (
                  <div
                    key={track.id}
                    className={`${styles.channelCard} ${isActive ? styles.activeChannel : ''}`}
                    onClick={() => {
                      cyberAudio.playSfx('click');
                      onSelectVideoChannel(track.generatorType);
                    }}
                  >
                    <div className={styles.channelTop}>
                      <span className={styles.channelBadge}>{track.category}</span>
                      <span style={{ fontSize: '11px', color: '#94a3b8' }}>{track.duration}</span>
                    </div>
                    <h4 className={styles.channelTitle}>{track.title}</h4>
                    <p className={styles.channelDesc}>{track.description}</p>
                  </div>
                );
              })}
            </div>

            <div className={styles.modalActions}>
              <button
                type="button"
                className={styles.actionBtnPrimary}
                onClick={() => {
                  cyberAudio.playSfx('warp');
                  onToggleCinemaFocus();
                  onCloseVideoModal();
                }}
              >
                Enter Cinema Focus Mode <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7. SKILLS TECHNICAL ARSENAL MODAL */}
      {showSkillsModal && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalCard}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => {
                cyberAudio.playSfx('click');
                onCloseSkills();
              }}
            >
              <X size={18} />
            </button>

            <div className={styles.modalHeader}>
              <span className={styles.modalTag}>SECTOR-04 // TECH FORGE</span>
              <h3 className={styles.modalTitle}>Technical Arsenal & System Capabilities</h3>
              <p className={styles.modalSubtitle}>
                Cross-domain systems engineering combining Mechanical structured problem solving with AI Full-Stack development.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {SKILL_CATEGORIES.map((cat, i) => (
                <div key={i} className={styles.metricCard} style={{ borderColor: cat.color }}>
                  <h4 style={{ color: cat.color, fontSize: '14px', marginBottom: '8px' }}>{cat.title}</h4>
                  <div className={styles.techPills}>
                    {cat.skills.map((s) => (
                      <span key={s} className={styles.techPill} style={{ color: cat.color, borderColor: `${cat.color}40` }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 8. TRANSMISSION CONTACT MODAL */}
      {showContactModal && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalCard}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => {
                cyberAudio.playSfx('click');
                onCloseContact();
              }}
            >
              <X size={18} />
            </button>

            <div className={styles.modalHeader}>
              <span className={styles.modalTag}>SECTOR-05 // TRANSMISSION BEACON</span>
              <h3 className={styles.modalTitle}>Initiate Quantum Transmission</h3>
              <p className={styles.modalSubtitle}>
                Ready to engineer intelligent AI applications, 3D WebGL experiences, or scalable products.
              </p>
            </div>

            <div className={styles.metricsGrid}>
              <div className={styles.metricCard}>
                <span className={styles.metricLabel}>DIRECT EMAIL</span>
                <a href={`mailto:${PROFILE_INFO.email}`} style={{ color: '#00f0ff', fontSize: '14px', fontWeight: 600 }}>
                  {PROFILE_INFO.email}
                </a>
              </div>
              <div className={styles.metricCard}>
                <span className={styles.metricLabel}>PHONE / WHATSAPP</span>
                <a href={`tel:${PROFILE_INFO.phone}`} style={{ color: '#10b981', fontSize: '14px', fontWeight: 600 }}>
                  {PROFILE_INFO.phone}
                </a>
              </div>
            </div>

            <div className={styles.modalActions}>
              <a
                href={`mailto:${PROFILE_INFO.email}`}
                className={styles.actionBtnPrimary}
                onClick={() => cyberAudio.playSfx('access')}
              >
                Send Direct Message <Send size={16} />
              </a>
              <a
                href={PROFILE_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionBtnSecondary}
                onClick={() => cyberAudio.playSfx('click')}
              >
                LinkedIn Profile <ExternalLink size={16} />
              </a>
              <a
                href={PROFILE_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionBtnSecondary}
                onClick={() => cyberAudio.playSfx('click')}
              >
                GitHub Repositories <Code size={16} />
              </a>
              <a
                href="/resume"
                className={styles.actionBtnSecondary}
                onClick={() => cyberAudio.playSfx('click')}
              >
                View Full Resume <Download size={16} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 9. CYBER TERMINAL CLI MODAL */}
      {showTerminal && (
        <div className={styles.modalBackdrop}>
          <div className={styles.terminalCard}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', borderBottom: '1px solid rgba(0, 240, 255, 0.2)', paddingBottom: '8px' }}>
              <span style={{ color: '#00f0ff', fontSize: '12px', fontWeight: 700 }}>&gt;_ CYBER COMMAND TERMINAL // v4.2</span>
              <button
                type="button"
                className={styles.modalClose}
                style={{ position: 'static' }}
                onClick={() => {
                  cyberAudio.playSfx('click');
                  setShowTerminal(false);
                }}
              >
                <X size={16} />
              </button>
            </div>

            <div className={styles.terminalOutput}>
              {terminalHistory.map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
              <div ref={terminalBottomRef} />
            </div>

            <form onSubmit={handleTerminalSubmit} className={styles.terminalForm}>
              <span className={styles.terminalPrompt}>prakhar@core:~$</span>
              <input
                type="text"
                className={styles.terminalInput}
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type 'help' or command..."
                autoFocus
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
