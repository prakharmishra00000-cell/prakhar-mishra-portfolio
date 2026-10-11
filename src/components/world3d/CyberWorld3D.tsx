"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { HoloVideoGenerator } from './HoloVideoGenerator';
import { SECTORS, PROJECTS_DATA, SKILL_CATEGORIES, SectorInfo, ProjectInfo } from '@/data/portfolioData';
import { cyberAudio } from '@/utils/audioSynth';

export type CameraMode = 'drone' | 'story';

interface CyberWorld3DProps {
  currentSectorId: string;
  onSectorChange: (sector: SectorInfo) => void;
  onSelectProject: (project: ProjectInfo) => void;
  onOpenSkills: () => void;
  onOpenContact: () => void;
  onOpenVideoPanel: () => void;
  cameraMode: CameraMode;
  onCameraModeChange: (mode: CameraMode) => void;
  isCinemaFocus: boolean;
  activeVideoChannel: 'neural_matrix' | 'quantum_grid' | 'code_cascade' | 'ai_synapse';
  onFpsUpdate?: (fps: number) => void;
}

export default function CyberWorld3D({
  currentSectorId,
  onSectorChange,
  onSelectProject,
  onOpenSkills,
  onOpenContact,
  onOpenVideoPanel,
  cameraMode,
  onCameraModeChange,
  isCinemaFocus,
  activeVideoChannel,
  onFpsUpdate,
}: CyberWorld3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  // Three.js Core Refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const videoGenRef = useRef<HoloVideoGenerator | null>(null);
  const videoTextureRef = useRef<THREE.CanvasTexture | null>(null);

  // Interactive Meshes Map
  const interactablesRef = useRef<Array<{ mesh: THREE.Object3D; type: string; dataId: string }>>([]);
  const hoveredObjectRef = useRef<THREE.Object3D | null>(null);

  // Animated Scene Components Refs
  const wavePlaneRef = useRef<THREE.Mesh | null>(null);
  const starFieldRef = useRef<THREE.Points | null>(null);
  const nexusCoreGroupRef = useRef<THREE.Group | null>(null);
  const neuralNodesGroupRef = useRef<THREE.Group | null>(null);
  const beaconLightRef = useRef<THREE.Mesh | null>(null);
  const projectMeshesRef = useRef<Array<{ mesh: THREE.Group; project: ProjectInfo }>>([]);
  const skillMeshesRef = useRef<Array<{ mesh: THREE.Group; index: number }>>([]);

  // Drone Exploration State
  const keysPressedRef = useRef<{ [key: string]: boolean }>({});
  const droneVelocityRef = useRef<THREE.Vector3>(new THREE.Vector3());
  const mouseRotationRef = useRef<{ yaw: number; pitch: number }>({ yaw: 0, pitch: -0.1 });
  const isDraggingRef = useRef<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Camera Interpolation State
  const cameraTargetPosRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 3.5, 12));
  const cameraLookAtTargetRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 1.5, 0));
  const cameraCurrentLookAtRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 1.5, 0));

  // Story Tour Timer
  const storyTimerRef = useRef<number>(0);
  const storyIndexRef = useRef<number>(0);

  // Performance Telemetry
  const fpsFramesRef = useRef<number>(0);
  const fpsPrevTimeRef = useRef<number>(performance.now());

  // Warp Camera Animation
  const warpFactorRef = useRef<number>(0);

  // Sync Video Channel with VideoGenerator
  useEffect(() => {
    if (videoGenRef.current) {
      videoGenRef.current.setMode(activeVideoChannel);
    }
  }, [activeVideoChannel]);

  // Handle Sector Navigation & Camera Targets
  const navigateToSector = useCallback((sectorId: string, playSound: boolean = true) => {
    const targetSector = SECTORS.find((s) => s.id === sectorId);
    if (!targetSector) return;

    if (playSound) {
      cyberAudio.playSfx('warp');
    }

    warpFactorRef.current = 1.0;
    cameraTargetPosRef.current.set(targetSector.pos.x, targetSector.pos.y, targetSector.pos.z);
    cameraLookAtTargetRef.current.set(targetSector.target.x, targetSector.target.y, targetSector.target.z);

    // Calculate initial yaw/pitch from position to target
    const dx = targetSector.target.x - targetSector.pos.x;
    const dz = targetSector.target.z - targetSector.pos.z;
    mouseRotationRef.current.yaw = Math.atan2(dx, dz) + Math.PI;
    mouseRotationRef.current.pitch = -0.15;

    onSectorChange(targetSector);
  }, [onSectorChange]);

  // Handle Sector Props Changes
  useEffect(() => {
    navigateToSector(currentSectorId, false);
  }, [currentSectorId, navigateToSector]);

  // Cinema Mode Camera Adjustment
  useEffect(() => {
    if (isCinemaFocus) {
      // Zoom right into the Holo-Theater Screen
      cameraTargetPosRef.current.set(0, 3.2, -20);
      cameraLookAtTargetRef.current.set(0, 3.2, -28);
      cyberAudio.playSfx('access');
    }
  }, [isCinemaFocus]);

  // Main Three.js Scene Setup & Render Loop
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x04060c);
    scene.fog = new THREE.FogExp2(0x04060c, 0.022);
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 3.5, 12);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: true,
      alpha: false,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x00f0ff, 1.2);
    dirLight.position.set(20, 40, 20);
    scene.add(dirLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 3.5, 60);
    purpleLight.position.set(-20, 10, -10);
    scene.add(purpleLight);

    const goldLight = new THREE.PointLight(0xf59e0b, 3.2, 50);
    goldLight.position.set(0, 8, -25);
    scene.add(goldLight);

    // 5. Starfield & Cosmic Particles
    const starCount = 2200;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const cyanColor = new THREE.Color(0x00f0ff);
    const purpleColor = new THREE.Color(0xa855f7);
    const goldColor = new THREE.Color(0xf59e0b);

    for (let i = 0; i < starCount; i++) {
      const idx = i * 3;
      const radius = 30 + Math.random() * 80;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      starPos[idx] = radius * Math.cos(phi) * Math.cos(theta);
      starPos[idx + 1] = Math.abs(radius * Math.sin(phi)) + 1; // Above ground
      starPos[idx + 2] = radius * Math.cos(phi) * Math.sin(theta);

      const chosenColor = i % 3 === 0 ? cyanColor : i % 3 === 1 ? purpleColor : goldColor;
      starColors[idx] = chosenColor.r;
      starColors[idx + 1] = chosenColor.g;
      starColors[idx + 2] = chosenColor.b;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.28,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);
    starFieldRef.current = starField;

    // 6. Cyber Dynamic Wave Grid Ground
    const gridDim = 120;
    const gridSegments = 60;
    const planeGeo = new THREE.PlaneGeometry(gridDim, gridDim, gridSegments, gridSegments);
    planeGeo.rotateX(-Math.PI / 2);

    const planeMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const wavePlane = new THREE.Mesh(planeGeo, planeMat);
    wavePlane.position.y = 0;
    scene.add(wavePlane);
    wavePlaneRef.current = wavePlane;

    // Glowing Platform Discs for Sectors
    SECTORS.forEach((sec) => {
      const ringGeo = new THREE.RingGeometry(3.5, 3.7, 48);
      ringGeo.rotateX(-Math.PI / 2);
      const ringMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(sec.color),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7,
      });
      const disc = new THREE.Mesh(ringGeo, ringMat);
      disc.position.set(sec.target.x, 0.05, sec.target.z);
      scene.add(disc);

      // Inner faint glowing circle
      const innerCircleGeo = new THREE.CircleGeometry(3.4, 32);
      innerCircleGeo.rotateX(-Math.PI / 2);
      const innerCircleMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(sec.color),
        transparent: true,
        opacity: 0.08,
      });
      const innerCircle = new THREE.Mesh(innerCircleGeo, innerCircleMat);
      innerCircle.position.set(sec.target.x, 0.04, sec.target.z);
      scene.add(innerCircle);
    });

    // 7. Sector 1: Nexus Core [0, 2, 0]
    const nexusGroup = new THREE.Group();
    nexusGroup.position.set(0, 2, 0);

    // Torus Rings
    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(2.8, 0.04, 16, 80),
      new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.7 })
    );
    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.2, 0.05, 16, 70),
      new THREE.MeshBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.85 })
    );
    const ring3 = new THREE.Mesh(
      new THREE.TorusGeometry(1.6, 0.03, 16, 60),
      new THREE.MeshBasicMaterial({ color: 0xa855f7, wireframe: true, transparent: true, opacity: 0.75 })
    );

    // Inner Glowing Core
    const coreIco = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.0, 1),
      new THREE.MeshStandardMaterial({
        color: 0x00f0ff,
        emissive: 0x0891b2,
        emissiveIntensity: 0.8,
        roughness: 0.2,
        metalness: 0.8,
        wireframe: true,
      })
    );

    // Billboard Profile Avatar Disc
    const textureLoader = new THREE.TextureLoader();
    const avatarTex = textureLoader.load('/profile.jpg');
    const avatarPlane = new THREE.Mesh(
      new THREE.CircleGeometry(1.1, 32),
      new THREE.MeshBasicMaterial({
        map: avatarTex,
        side: THREE.DoubleSide,
      })
    );
    avatarPlane.position.set(0, 0, 0);

    nexusGroup.add(ring1);
    nexusGroup.add(ring2);
    nexusGroup.add(ring3);
    nexusGroup.add(coreIco);
    nexusGroup.add(avatarPlane);
    scene.add(nexusGroup);
    nexusCoreGroupRef.current = nexusGroup;

    // Register Nexus Core click
    interactablesRef.current.push({
      mesh: avatarPlane,
      type: 'sector',
      dataId: 'nexus',
    });

    // 8. Sector 2: Holo-Theater Monumental Curved Video Screen [0, 3.2, -28]
    const videoGen = new HoloVideoGenerator(1024, 576);
    videoGenRef.current = videoGen;

    const videoTexture = new THREE.CanvasTexture(videoGen.canvas);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTextureRef.current = videoTexture;

    // Curved Screen Geometry
    const screenRadius = 14;
    const screenHeight = 6.8;
    const arcAngle = Math.PI * 0.45; // ~81 degrees curved arc
    const curvedScreenGeo = new THREE.CylinderGeometry(
      screenRadius,
      screenRadius,
      screenHeight,
      64,
      1,
      true,
      -arcAngle / 2 + Math.PI / 2,
      arcAngle
    );

    // Texture mapping adjustment for inside cylinder surface
    const uvs = curvedScreenGeo.attributes.uv;
    for (let i = 0; i < uvs.count; i++) {
      uvs.setX(i, 1 - uvs.getX(i)); // Flip horizontally so text renders correctly
    }
    uvs.needsUpdate = true;

    const curvedScreenMat = new THREE.MeshBasicMaterial({
      map: videoTexture,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95,
    });
    const curvedScreenMesh = new THREE.Mesh(curvedScreenGeo, curvedScreenMat);
    curvedScreenMesh.position.set(0, 3.4, -28);
    curvedScreenMesh.rotation.y = Math.PI;
    scene.add(curvedScreenMesh);

    // Holo-Screen Neon Frame Outer Border
    const screenBorderGeo = new THREE.CylinderGeometry(
      screenRadius + 0.08,
      screenRadius + 0.08,
      screenHeight + 0.4,
      64,
      1,
      true,
      -arcAngle / 2 + Math.PI / 2,
      arcAngle
    );
    const screenBorderMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const screenBorder = new THREE.Mesh(screenBorderGeo, screenBorderMat);
    screenBorder.position.copy(curvedScreenMesh.position);
    screenBorder.rotation.copy(curvedScreenMesh.rotation);
    scene.add(screenBorder);

    // Holo-Stage Base
    const stageGeo = new THREE.CylinderGeometry(8, 9, 0.4, 32);
    const stageMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.2,
      roughness: 0.3,
    });
    const stage = new THREE.Mesh(stageGeo, stageMat);
    stage.position.set(0, 0.2, -28);
    scene.add(stage);

    interactablesRef.current.push({
      mesh: curvedScreenMesh,
      type: 'video_theater',
      dataId: 'theater',
    });

    // 9. Sector 3: AI Matrix Lab & Projects Monoliths [-26, 3, -8]
    const neuralGroup = new THREE.Group();
    neuralGroup.position.set(-26, 3, -8);
    scene.add(neuralGroup);
    neuralNodesGroupRef.current = neuralGroup;

    // Synapse Lines & Central AI Cluster
    const clusterIco = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.8, 2),
      new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x0284c7,
        emissiveIntensity: 0.6,
        wireframe: true,
      })
    );
    neuralGroup.add(clusterIco);

    // 6 Project Pedestals around the cluster
    projectMeshesRef.current = [];
    PROJECTS_DATA.forEach((proj, idx) => {
      const pGroup = new THREE.Group();
      pGroup.position.set(proj.worldCoord.x, proj.worldCoord.y, proj.worldCoord.z);

      // Monolith Base
      const baseGeo = new THREE.BoxGeometry(2.4, 3.2, 0.4);
      const baseMat = new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        emissive: new THREE.Color(proj.color),
        emissiveIntensity: 0.3,
        roughness: 0.2,
        metalness: 0.8,
      });
      const monolith = new THREE.Mesh(baseGeo, baseMat);

      // Glowing Wireframe Frame
      const wireGeo = new THREE.BoxGeometry(2.5, 3.3, 0.45);
      const wireMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(proj.color),
        wireframe: true,
        transparent: true,
        opacity: 0.6,
      });
      const wireFrame = new THREE.Mesh(wireGeo, wireMat);

      // Floating Orb / Beacon on top of Monolith
      const orbGeo = new THREE.OctahedronGeometry(0.45, 0);
      const orbMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(proj.color),
        emissive: new THREE.Color(proj.color),
        emissiveIntensity: 1.0,
      });
      const orb = new THREE.Mesh(orbGeo, orbMat);
      orb.position.y = 2.2;

      pGroup.add(monolith);
      pGroup.add(wireFrame);
      pGroup.add(orb);
      scene.add(pGroup);

      projectMeshesRef.current.push({ mesh: pGroup, project: proj });

      interactablesRef.current.push({
        mesh: monolith,
        type: 'project',
        dataId: proj.id,
      });
    });

    // 10. Sector 4: Technical Arsenal Monoliths [26, 3, -8]
    skillMeshesRef.current = [];
    SKILL_CATEGORIES.forEach((skillCat, idx) => {
      const sGroup = new THREE.Group();
      sGroup.position.set(skillCat.worldCoord.x, skillCat.worldCoord.y, skillCat.worldCoord.z);

      // Crystalline Obelisk
      const obeliskGeo = new THREE.ConeGeometry(1.2, 4.2, 5);
      const obeliskMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(skillCat.color),
        emissive: new THREE.Color(skillCat.color),
        emissiveIntensity: 0.5,
        roughness: 0.1,
        metalness: 0.9,
        wireframe: true,
      });
      const obelisk = new THREE.Mesh(obeliskGeo, obeliskMat);

      // Orbital Ring around Obelisk
      const ringGeo = new THREE.TorusGeometry(1.8, 0.04, 16, 40);
      ringGeo.rotateX(Math.PI / 2);
      const ringMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(skillCat.color),
        transparent: true,
        opacity: 0.8,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);

      sGroup.add(obelisk);
      sGroup.add(ring);
      scene.add(sGroup);

      skillMeshesRef.current.push({ mesh: sGroup, index: idx });

      interactablesRef.current.push({
        mesh: obelisk,
        type: 'skill',
        dataId: `skill-${idx}`,
      });
    });

    // 11. Sector 5: Quantum Transmission Laser Beacon [0, 4, 26]
    const beaconGroup = new THREE.Group();
    beaconGroup.position.set(0, 0, 26);

    // Skyward Photon Laser Beam
    const laserGeo = new THREE.CylinderGeometry(0.25, 0.35, 90, 24);
    laserGeo.translate(0, 45, 0); // Extend upward into the sky
    const laserMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.75,
    });
    const laserBeam = new THREE.Mesh(laserGeo, laserMat);
    beaconLightRef.current = laserBeam;
    beaconGroup.add(laserBeam);

    // Console Pedestal
    const consoleGeo = new THREE.CylinderGeometry(1.6, 2.2, 1.4, 24);
    const consoleMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      emissive: 0x10b981,
      emissiveIntensity: 0.3,
    });
    const consoleMesh = new THREE.Mesh(consoleGeo, consoleMat);
    consoleMesh.position.y = 0.7;
    beaconGroup.add(consoleMesh);

    scene.add(beaconGroup);

    interactablesRef.current.push({
      mesh: consoleMesh,
      type: 'contact',
      dataId: 'transmission',
    });

    // 12. Input Event Handlers
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressedRef.current[e.code] = true;
      if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'Space', 'KeyC'].includes(e.code)) {
        if (cameraMode === 'story') {
          onCameraModeChange('drone');
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressedRef.current[e.code] = false;
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 0) {
        isDraggingRef.current = true;
        dragStartRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current && cameraMode === 'drone') {
        const deltaX = e.clientX - dragStartRef.current.x;
        const deltaY = e.clientY - dragStartRef.current.y;
        dragStartRef.current = { x: e.clientX, y: e.clientY };

        mouseRotationRef.current.yaw -= deltaX * 0.0035;
        mouseRotationRef.current.pitch = Math.max(
          -Math.PI / 3,
          Math.min(Math.PI / 3, mouseRotationRef.current.pitch - deltaY * 0.0035)
        );
      }

      // Raycast for Hover Effects
      if (cameraRef.current) {
        const rect = container.getBoundingClientRect();
        const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), cameraRef.current);

        const meshesToCheck = interactablesRef.current.map((item) => item.mesh);
        const intersects = raycaster.intersectObjects(meshesToCheck, true);

        if (intersects.length > 0) {
          const hit = intersects[0].object;
          if (hoveredObjectRef.current !== hit) {
            hoveredObjectRef.current = hit;
            container.style.cursor = 'pointer';
            cyberAudio.playSfx('hover');
          }
        } else {
          if (hoveredObjectRef.current) {
            hoveredObjectRef.current = null;
            container.style.cursor = 'crosshair';
          }
        }
      }
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const handleClick = (e: MouseEvent) => {
      if (!cameraRef.current) return;
      const rect = container.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), cameraRef.current);

      const meshesToCheck = interactablesRef.current.map((item) => item.mesh);
      const intersects = raycaster.intersectObjects(meshesToCheck, true);

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        const interactable = interactablesRef.current.find(
          (item) => item.mesh === hit || item.mesh.children.includes(hit)
        );

        if (interactable) {
          cyberAudio.playSfx('click');
          if (interactable.type === 'project') {
            const project = PROJECTS_DATA.find((p) => p.id === interactable.dataId);
            if (project) onSelectProject(project);
          } else if (interactable.type === 'video_theater') {
            onOpenVideoPanel();
          } else if (interactable.type === 'skill') {
            onOpenSkills();
          } else if (interactable.type === 'contact') {
            onOpenContact();
          } else if (interactable.type === 'sector') {
            navigateToSector(interactable.dataId, true);
          }
        }
      }
    };

    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    container.style.cursor = 'crosshair';

    // 13. Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsed = clock.getElapsedTime();

      // FPS Diagnostics
      fpsFramesRef.current++;
      const now = performance.now();
      if (now - fpsPrevTimeRef.current >= 1000) {
        if (onFpsUpdate) {
          onFpsUpdate(Math.round((fpsFramesRef.current * 1000) / (now - fpsPrevTimeRef.current)));
        }
        fpsFramesRef.current = 0;
        fpsPrevTimeRef.current = now;
      }

      // Update Video Texture
      if (videoTextureRef.current) {
        videoTextureRef.current.needsUpdate = true;
      }

      // Rotate Starfield slowly
      if (starFieldRef.current) {
        starFieldRef.current.rotation.y = elapsed * 0.02;
      }

      // Animate Dynamic Cyber Wave Ground Plane
      if (wavePlaneRef.current) {
        const positions = wavePlaneRef.current.geometry.attributes.position;
        const count = positions.count;
        for (let i = 0; i < count; i++) {
          const x = positions.getX(i);
          const z = positions.getZ(i);
          const wave = Math.sin(x * 0.15 + elapsed * 1.5) * Math.cos(z * 0.15 + elapsed * 1.5) * 0.45;
          positions.setY(i, wave);
        }
        positions.needsUpdate = true;
      }

      // Rotate Nexus Core Rings
      if (nexusCoreGroupRef.current) {
        const [r1, r2, r3, ico] = nexusCoreGroupRef.current.children;
        if (r1) r1.rotation.z = elapsed * 0.4;
        if (r2) r2.rotation.x = elapsed * 0.3;
        if (r3) r3.rotation.y = elapsed * 0.5;
        if (ico) {
          ico.rotation.y = elapsed * 0.6;
          ico.rotation.x = elapsed * 0.4;
        }
      }

      // Rotate Neural Cluster
      if (neuralNodesGroupRef.current) {
        neuralNodesGroupRef.current.rotation.y = elapsed * 0.25;
      }

      // Float Project Monoliths
      projectMeshesRef.current.forEach((item, idx) => {
        const orb = item.mesh.children[2];
        if (orb) {
          orb.rotation.y = elapsed * 1.2;
          orb.position.y = 2.2 + Math.sin(elapsed * 2 + idx) * 0.15;
        }
      });

      // Rotate Skill Obelisks
      skillMeshesRef.current.forEach((item) => {
        const [obelisk, ring] = item.mesh.children;
        if (obelisk) obelisk.rotation.y = elapsed * 0.8;
        if (ring) {
          ring.rotation.z = elapsed * 1.1;
          ring.position.y = Math.sin(elapsed * 2 + item.index) * 0.25;
        }
      });

      // Pulse Laser Beacon
      if (beaconLightRef.current) {
        const scale = 1 + Math.sin(elapsed * 3) * 0.08;
        beaconLightRef.current.scale.set(scale, 1, scale);
      }

      // Drone Free Roam Movement
      if (cameraMode === 'drone' && cameraRef.current) {
        const speed = keysPressedRef.current['ShiftLeft'] || keysPressedRef.current['ShiftRight'] ? 22 : 12;
        const moveDir = new THREE.Vector3();

        if (keysPressedRef.current['KeyW'] || keysPressedRef.current['ArrowUp']) moveDir.z -= 1;
        if (keysPressedRef.current['KeyS'] || keysPressedRef.current['ArrowDown']) moveDir.z += 1;
        if (keysPressedRef.current['KeyA'] || keysPressedRef.current['ArrowLeft']) moveDir.x -= 1;
        if (keysPressedRef.current['KeyD'] || keysPressedRef.current['ArrowRight']) moveDir.x += 1;
        if (keysPressedRef.current['Space']) moveDir.y += 1;
        if (keysPressedRef.current['KeyC']) moveDir.y -= 1;

        moveDir.normalize();

        // Calculate Forward and Right vectors from yaw
        const forward = new THREE.Vector3(
          -Math.sin(mouseRotationRef.current.yaw),
          0,
          -Math.cos(mouseRotationRef.current.yaw)
        );
        const right = new THREE.Vector3(
          Math.cos(mouseRotationRef.current.yaw),
          0,
          -Math.sin(mouseRotationRef.current.yaw)
        );

        const deltaVel = new THREE.Vector3()
          .addScaledVector(forward, -moveDir.z * speed * delta)
          .addScaledVector(right, moveDir.x * speed * delta)
          .addScaledVector(new THREE.Vector3(0, 1, 0), moveDir.y * speed * delta);

        cameraRef.current.position.add(deltaVel);

        // Clamp camera to world bounds
        cameraRef.current.position.y = Math.max(1.2, Math.min(25, cameraRef.current.position.y));
        cameraRef.current.position.x = Math.max(-50, Math.min(50, cameraRef.current.position.x));
        cameraRef.current.position.z = Math.max(-50, Math.min(50, cameraRef.current.position.z));

        // LookAt direction from yaw and pitch
        const lookDir = new THREE.Vector3(
          Math.sin(mouseRotationRef.current.yaw) * Math.cos(mouseRotationRef.current.pitch),
          Math.sin(mouseRotationRef.current.pitch),
          Math.cos(mouseRotationRef.current.yaw) * Math.cos(mouseRotationRef.current.pitch)
        );

        const lookTarget = cameraRef.current.position.clone().add(lookDir);
        cameraRef.current.lookAt(lookTarget);
      } else if (cameraMode === 'story' && cameraRef.current) {
        // Story Autopilot Flight
        storyTimerRef.current += delta;
        if (storyTimerRef.current > 7.5) {
          storyTimerRef.current = 0;
          storyIndexRef.current = (storyIndexRef.current + 1) % SECTORS.length;
          const nextSec = SECTORS[storyIndexRef.current];
          navigateToSector(nextSec.id, true);
        }

        // Smooth camera lerp toward target sector position
        const lerpFactor = warpFactorRef.current > 0 ? 0.08 : 0.035;
        cameraRef.current.position.lerp(cameraTargetPosRef.current, lerpFactor);

        cameraCurrentLookAtRef.current.lerp(cameraLookAtTargetRef.current, lerpFactor);
        cameraRef.current.lookAt(cameraCurrentLookAtRef.current);

        if (warpFactorRef.current > 0) {
          warpFactorRef.current = Math.max(0, warpFactorRef.current - delta * 1.5);
        }
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    // 14. Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);

      if (videoGenRef.current) {
        videoGenRef.current.stop();
      }

      if (rendererRef.current && rendererRef.current.domElement) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, [cameraMode, navigateToSector, onCameraModeChange, onFpsUpdate, onOpenContact, onOpenSkills, onOpenVideoPanel, onSelectProject]);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        userSelect: 'none',
      }}
    />
  );
}
