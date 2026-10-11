"use client";

import React, { useState } from 'react';
import CyberWorld3D, { CameraMode } from './CyberWorld3D';
import HoloHUD from './HoloHUD';
import styles from './WorldContainer.module.css';
import { SECTORS, SectorInfo, ProjectInfo } from '@/data/portfolioData';

interface WorldContainerProps {
  isEmbedded?: boolean;
  onViewModeToggle?: () => void;
  viewMode?: '3d_world' | 'classic_deck';
}

export default function WorldContainer({
  isEmbedded = false,
  onViewModeToggle,
  viewMode = '3d_world',
}: WorldContainerProps) {
  const [currentSector, setCurrentSector] = useState<SectorInfo>(SECTORS[0]);
  const [cameraMode, setCameraMode] = useState<CameraMode>('story');
  const [selectedProject, setSelectedProject] = useState<ProjectInfo | null>(null);
  const [showSkillsModal, setShowSkillsModal] = useState<boolean>(false);
  const [showContactModal, setShowContactModal] = useState<boolean>(false);
  const [showVideoModal, setShowVideoModal] = useState<boolean>(false);
  const [activeVideoChannel, setActiveVideoChannel] = useState<'neural_matrix' | 'quantum_grid' | 'code_cascade' | 'ai_synapse'>('neural_matrix');
  const [isCinemaFocus, setIsCinemaFocus] = useState<boolean>(false);
  const [fps, setFps] = useState<number>(60);

  const handleToggleCameraMode = () => {
    setCameraMode(prev => prev === 'drone' ? 'story' : 'drone');
  };

  const handleToggleCinemaFocus = () => {
    setIsCinemaFocus(prev => !prev);
  };

  return (
    <div className={`${styles.worldContainer} ${isEmbedded ? styles.embeddedMode : ''} ${isCinemaFocus ? styles.cinemaActive : ''}`}>
      {/* Cinematic Letterbox Bars */}
      <div className={styles.cinematicBarTop} />
      <div className={styles.cinematicBarBottom} />

      {/* 3D Cyber Viewport Canvas */}
      <CyberWorld3D
        currentSectorId={currentSector.id}
        onSectorChange={setCurrentSector}
        onSelectProject={setSelectedProject}
        onOpenSkills={() => setShowSkillsModal(true)}
        onOpenContact={() => setShowContactModal(true)}
        onOpenVideoPanel={() => setShowVideoModal(true)}
        cameraMode={cameraMode}
        onCameraModeChange={setCameraMode}
        isCinemaFocus={isCinemaFocus}
        activeVideoChannel={activeVideoChannel}
        onFpsUpdate={setFps}
      />

      {/* Holographic HUD Overlays */}
      <HoloHUD
        currentSector={currentSector}
        onSelectSector={setCurrentSector}
        cameraMode={cameraMode}
        onToggleCameraMode={handleToggleCameraMode}
        selectedProject={selectedProject}
        onCloseProject={() => setSelectedProject(null)}
        showSkillsModal={showSkillsModal}
        onCloseSkills={() => setShowSkillsModal(false)}
        showContactModal={showContactModal}
        onCloseContact={() => setShowContactModal(false)}
        showVideoModal={showVideoModal}
        onCloseVideoModal={() => setShowVideoModal(false)}
        activeVideoChannel={activeVideoChannel}
        onSelectVideoChannel={setActiveVideoChannel}
        fps={fps}
        viewMode={viewMode}
        onToggleViewMode={onViewModeToggle || (() => {})}
        isCinemaFocus={isCinemaFocus}
        onToggleCinemaFocus={handleToggleCinemaFocus}
      />
    </div>
  );
}
