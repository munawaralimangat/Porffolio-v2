import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

export const Hero3DCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  themeRef.current = theme;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 7, 24);
    camera.lookAt(0, 4, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for perspective grid
    const gridGroup = new THREE.Group();
    scene.add(gridGroup);

    // 1. Perspective Plane Geometry (Large grid surface with undulating waves)
    const gridWidth = 100;
    const gridDepth = 100;
    const segmentsX = 48;
    const segmentsY = 48;
    const geometry = new THREE.PlaneGeometry(gridWidth, gridDepth, segmentsX, segmentsY);
    geometry.rotateX(-Math.PI / 2);
    geometry.translate(0, -6, -20);

    const count = geometry.attributes.position.count;
    const initialY = new Float32Array(count);
    const pos = geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      initialY[i] = pos[i * 3 + 1];
    }

    // 2. Wireframe Grid Material
    const gridMaterial = new THREE.MeshBasicMaterial({
      wireframe: true,
      color: themeRef.current === 'dark' ? new THREE.Color(0x34d399) : new THREE.Color(0x059669),
      transparent: true,
      opacity: themeRef.current === 'dark' ? 0.38 : 0.32,
    });

    const gridMesh = new THREE.Mesh(geometry, gridMaterial);
    gridGroup.add(gridMesh);

    // 3. Glowing Intersecting Grid Nodes (Points)
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(16, 185, 129, 1)');
        gradient.addColorStop(0.4, 'rgba(52, 211, 153, 0.8)');
        gradient.addColorStop(0.8, 'rgba(52, 211, 153, 0.15)');
        gradient.addColorStop(1, 'rgba(52, 211, 153, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const pointsMaterial = new THREE.PointsMaterial({
      size: 1.2,
      map: createCircleTexture(),
      transparent: true,
      opacity: themeRef.current === 'dark' ? 0.65 : 0.5,
      color: new THREE.Color(0xffffff),
      depthWrite: false,
    });

    const pointsMesh = new THREE.Points(geometry, pointsMaterial);
    gridGroup.add(pointsMesh);

    // Mouse Tracking for Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      targetMouseX = (x / container.clientWidth - 0.5) * 5;
      targetMouseY = (y / container.clientHeight - 0.5) * 3;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Intersection Observer for 60fps / Battery Saving
    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse easing
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Parallax Tilt
      gridGroup.rotation.y = mouseX * 0.08;
      gridGroup.rotation.z = -mouseX * 0.04;
      camera.position.y = 7 - mouseY * 1.2;

      // Dynamic forward wave flow
      const positions = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const u = positions[i * 3];     // X
        const v = positions[i * 3 + 2]; // Z

        // Multi-frequency wave calculation flowing towards viewer
        positions[i * 3 + 1] =
          initialY[i] +
          Math.sin(u * 0.15 + elapsedTime * 1.2) * 1.2 +
          Math.cos(v * 0.12 - elapsedTime * 1.4) * 1.4;
      }
      geometry.attributes.position.needsUpdate = true;

      // Dynamic theme sync
      const isDark = themeRef.current === 'dark';
      gridMaterial.color.set(isDark ? 0x34d399 : 0x059669);
      gridMaterial.opacity = isDark ? 0.38 : 0.32;
      pointsMaterial.opacity = isDark ? 0.65 : 0.5;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      gridMaterial.dispose();
      pointsMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-80"
    />
  );
};
