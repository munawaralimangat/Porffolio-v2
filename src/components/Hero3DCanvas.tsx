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
    camera.position.z = 45;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Count & Buffer
    const particleCount = 135;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 80;
      const y = (Math.random() - 0.5) * 50;
      const z = (Math.random() - 0.5) * 40;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle Texture Generation (Vibrant Warm Yellow / Amber circular sprite)
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(245, 158, 11, 1)');       // Rich Amber Yellow (#f59e0b)
        gradient.addColorStop(0.35, 'rgba(251, 191, 36, 0.85)'); // Bright Golden Yellow (#fbbf24)
        gradient.addColorStop(0.75, 'rgba(251, 191, 36, 0.2)');
        gradient.addColorStop(1, 'rgba(251, 191, 36, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: 2.2,
      map: createCircleTexture(),
      transparent: true,
      opacity: 0.85,
      color: new THREE.Color(0xffffff),
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // Subtle Interconnecting Constellation Lines in Golden Yellow
    const linesMaterial = new THREE.LineBasicMaterial({
      transparent: true,
      opacity: 0.16,
      color: new THREE.Color(0xf59e0b),
      blending: THREE.NormalBlending,
    });

    const linesGeometry = new THREE.BufferGeometry();
    const maxLineSegments = (particleCount * (particleCount - 1)) / 2;
    const linePositions = new Float32Array(maxLineSegments * 6);
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    const lineMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(lineMesh);

    // Mouse Tracking for Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      targetMouseX = (x / container.clientWidth - 0.5) * 6;
      targetMouseY = (y / container.clientHeight - 0.5) * 6;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
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

      particles.rotation.y = elapsedTime * 0.03 + mouseX * 0.08;
      particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.1 - mouseY * 0.08;
      lineMesh.rotation.y = particles.rotation.y;
      lineMesh.rotation.x = particles.rotation.x;

      // Update Particle Positions gently
      const pos = geometry.attributes.position.array as Float32Array;
      let lineIndex = 0;
      const connectionDistance = 14;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        pos[i3] += velocities[i3] + Math.sin(elapsedTime + originalPositions[i3]) * 0.008;
        pos[i3 + 1] += velocities[i3 + 1] + Math.cos(elapsedTime + originalPositions[i3 + 1]) * 0.008;
        pos[i3 + 2] += velocities[i3 + 2];

        // Boundary wrap
        if (pos[i3] > 40) pos[i3] = -40;
        if (pos[i3] < -40) pos[i3] = 40;
        if (pos[i3 + 1] > 25) pos[i3 + 1] = -25;
        if (pos[i3 + 1] < -25) pos[i3 + 1] = 25;

        // Calculate line connections
        for (let j = i + 1; j < particleCount; j++) {
          const j3 = j * 3;
          const dx = pos[i3] - pos[j3];
          const dy = pos[i3 + 1] - pos[j3 + 1];
          const dz = pos[i3 + 2] - pos[j3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectionDistance) {
            linePositions[lineIndex++] = pos[i3];
            linePositions[lineIndex++] = pos[i3 + 1];
            linePositions[lineIndex++] = pos[i3 + 2];
            linePositions[lineIndex++] = pos[j3];
            linePositions[lineIndex++] = pos[j3 + 1];
            linePositions[lineIndex++] = pos[j3 + 2];
          }
        }
      }

      geometry.attributes.position.needsUpdate = true;
      linesGeometry.setDrawRange(0, lineIndex / 3);
      linesGeometry.attributes.position.needsUpdate = true;

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
      particleMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
};
