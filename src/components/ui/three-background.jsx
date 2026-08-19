import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground({ className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ─── Scene, Camera, Renderer Setup ───
    const scene = new THREE.Scene();
    
    // Slight ambient fog for deep volumetric perspective
    scene.fog = new THREE.FogExp2(0x0a0908, 0.0018);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 15, 65);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // ─── Create Circular Glow Texture for Particles ───
    const createCircleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");

      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.2, "rgba(245, 180, 50, 0.85)");
      gradient.addColorStop(0.5, "rgba(217, 119, 6, 0.35)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);

      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    const particleTexture = createCircleTexture();

    // ─── 1. Flowing Wave Grid (Interactive 3D Terrain) ───
    const GRID_X = 65;
    const GRID_Z = 55;
    const TOTAL_GRID = GRID_X * GRID_Z;
    const SPACING = 2.2;

    const gridPositions = new Float32Array(TOTAL_GRID * 3);
    const gridColors = new Float32Array(TOTAL_GRID * 3);
    const gridScales = new Float32Array(TOTAL_GRID);

    const baseColor1 = new THREE.Color("#fbbf24"); // Amber gold
    const baseColor2 = new THREE.Color("#d97706"); // Warm bronze

    let idx = 0;
    for (let ix = 0; ix < GRID_X; ix++) {
      for (let iz = 0; iz < GRID_Z; iz++) {
        const x = (ix - GRID_X / 2) * SPACING;
        const z = (iz - GRID_Z / 2) * SPACING;
        const y = 0;

        gridPositions[idx * 3] = x;
        gridPositions[idx * 3 + 1] = y;
        gridPositions[idx * 3 + 2] = z;

        // Color interpolation
        const mixRatio = (Math.sin(ix * 0.1) + Math.cos(iz * 0.1) + 2) / 4;
        const color = baseColor1.clone().lerp(baseColor2, mixRatio);

        gridColors[idx * 3] = color.r;
        gridColors[idx * 3 + 1] = color.g;
        gridColors[idx * 3 + 2] = color.b;

        gridScales[idx] = Math.random() * 0.8 + 0.6;
        idx++;
      }
    }

    const gridGeometry = new THREE.BufferGeometry();
    gridGeometry.setAttribute("position", new THREE.BufferAttribute(gridPositions, 3));
    gridGeometry.setAttribute("color", new THREE.BufferAttribute(gridColors, 3));

    const gridMaterial = new THREE.PointsMaterial({
      size: 1.4,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const gridPoints = new THREE.Points(gridGeometry, gridMaterial);
    gridPoints.position.y = -14;
    gridPoints.rotation.x = 0.15;
    scene.add(gridPoints);

    // ─── 2. Floating Ambient Dust / Light Orbs ───
    const DUST_COUNT = 180;
    const dustPositions = new Float32Array(DUST_COUNT * 3);
    const dustSpeeds = [];

    for (let i = 0; i < DUST_COUNT; i++) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 120;
      dustPositions[i * 3 + 1] = Math.random() * 45 - 10;
      dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      dustSpeeds.push({
        y: Math.random() * 0.015 + 0.005,
        x: (Math.random() - 0.5) * 0.008,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    const dustGeometry = new THREE.BufferGeometry();
    dustGeometry.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));

    const dustMaterial = new THREE.PointsMaterial({
      size: 2.2,
      color: new THREE.Color("#f59e0b"),
      map: particleTexture,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const dustPoints = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dustPoints);

    // ─── Mouse Interaction & Parallax ───
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      mouse.targetX = (clientX / rect.width - 0.5) * 2;
      mouse.targetY = -(clientY / rect.height - 0.5) * 2;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // ─── Resize Handler ───
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", onResize);

    // ─── Animation Loop ───
    let animationFrameId;
    let clock = new THREE.Clock();
    let isVisible = true;

    // Pause rendering when scrolled out of view for ultra-high performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Subtle camera parallax
      camera.position.x = mouse.x * 6;
      camera.position.y = 15 + mouse.y * 4;
      camera.lookAt(0, 0, 0);

      // Animate wave grid
      const posAttr = gridGeometry.attributes.position;
      const posArray = posAttr.array;

      let pIdx = 0;
      for (let ix = 0; ix < GRID_X; ix++) {
        for (let iz = 0; iz < GRID_Z; iz++) {
          const x = posArray[pIdx * 3];
          const z = posArray[pIdx * 3 + 2];

          // Complex layered sine waves for organic flow
          const wave1 = Math.sin(x * 0.12 + elapsedTime * 1.1) * 3.2;
          const wave2 = Math.cos(z * 0.15 + elapsedTime * 0.9) * 2.8;
          const wave3 = Math.sin((x + z) * 0.08 + elapsedTime * 0.7) * 2.0;

          // Interactive mouse wave disturbance
          const distToMouse = Math.sqrt(
            Math.pow(x - mouse.x * 35, 2) + Math.pow(z - mouse.y * 25, 2)
          );
          const mouseLift = Math.exp(-distToMouse * 0.08) * 6.5;

          posArray[pIdx * 3 + 1] = wave1 + wave2 + wave3 + mouseLift;
          pIdx++;
        }
      }
      posAttr.needsUpdate = true;

      // Animate ambient dust particles
      const dustPos = dustGeometry.attributes.position.array;
      for (let i = 0; i < DUST_COUNT; i++) {
        const speed = dustSpeeds[i];
        dustPos[i * 3 + 1] += speed.y;
        dustPos[i * 3] += Math.sin(elapsedTime + speed.pulse) * 0.03;

        // Reset if float out of bounds
        if (dustPos[i * 3 + 1] > 35) {
          dustPos[i * 3 + 1] = -15;
          dustPos[i * 3] = (Math.random() - 0.5) * 120;
        }
      }
      dustGeometry.attributes.position.needsUpdate = true;

      // Slow rotation of grid points
      gridPoints.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // ─── Cleanup ───
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      gridGeometry.dispose();
      gridMaterial.dispose();
      dustGeometry.dispose();
      dustMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{
        zIndex: 0,
        maskImage: "linear-gradient(to bottom, black 0%, black 45%, transparent 95%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 45%, transparent 95%)",
      }}
    />
  );
}
