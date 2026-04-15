"use client";

import { useEffect, useRef } from "react";

type NeuralNetworkBackgroundProps = {
  nodeCount?: number;
  className?: string;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  depth: number;
  color: string;
};

export default function NeuralNetworkBackground({
  nodeCount = 84,
  className = "",
}: NeuralNetworkBackgroundProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const rootEl = rootRef.current;
    const canvasEl = canvasRef.current;
    const parentEl = rootEl?.parentElement;
    if (!rootEl || !canvasEl || !parentEl) return;

    const ctx = canvasEl.getContext("2d");
    if (!ctx) return;

    const MAX_LINK_DISTANCE = 120;
    const CURSOR_LINK_DISTANCE = 150;
    const CURSOR_REPEL_DISTANCE = 95;
    const CURSOR_REPEL_FORCE = 0.09;

    const colorPool = ["#00ff88", "#00c3ff"];

    let width = 0;
    let height = 0;
    let rafId = 0;
    let particles: Particle[] = [];

    const mouse = {
      x: 0,
      y: 0,
      active: false,
    };

    const initParticles = () => {
      particles = Array.from({ length: nodeCount }, () => {
        const depth = 0.6 + Math.random() * 1.1;
        const angle = Math.random() * Math.PI * 2;
        const speed = (0.15 + Math.random() * 0.25) * depth;

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 0.8 + Math.random() * 1.8,
          depth,
          color: colorPool[Math.floor(Math.random() * colorPool.length)],
        };
      });
    };

    const resizeCanvas = () => {
      width = rootEl.clientWidth;
      height = rootEl.clientHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvasEl.width = Math.floor(width * dpr);
      canvasEl.height = Math.floor(height * dpr);
      canvasEl.style.width = `${width}px`;
      canvasEl.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      initParticles();
    };

    const onMouseMove = (event: MouseEvent) => {
      const rect = parentEl.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      mouse.active = true;
    };

    const onMouseLeave = () => {
      mouse.active = false;
    };

    const drawNeuralLinks = () => {
      for (let i = 0; i < particles.length; i += 1) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j += 1) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < MAX_LINK_DISTANCE) {
            const opacity = (1 - dist / MAX_LINK_DISTANCE) * 0.42;
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };

    const drawMouseLinksAndRepel = () => {
      if (!mouse.active) return;

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);

        if (dist < CURSOR_LINK_DISTANCE) {
          const opacity = (1 - dist / CURSOR_LINK_DISTANCE) * 0.55;
          ctx.strokeStyle = `rgba(0, 255, 136, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        }

        if (dist > 0 && dist < CURSOR_REPEL_DISTANCE) {
          const repelPower =
            ((CURSOR_REPEL_DISTANCE - dist) / CURSOR_REPEL_DISTANCE) *
            CURSOR_REPEL_FORCE;
          p.vx += (dx / dist) * repelPower * p.depth;
          p.vy += (dy / dist) * repelPower * p.depth;
        }
      }

      ctx.fillStyle = "rgba(0, 255, 136, 0.25)";
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 2.5, 0, Math.PI * 2);
      ctx.fill();
    };

    const updateAndDrawParticles = () => {
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        p.vx *= 0.995;
        p.vy *= 0.995;

        if (Math.abs(p.vx) < 0.03) p.vx += (Math.random() - 0.5) * 0.04;
        if (Math.abs(p.vy) < 0.03) p.vy += (Math.random() - 0.5) * 0.04;

        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;

        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));

        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.85;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = 0.18;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.6, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      drawNeuralLinks();
      drawMouseLinksAndRepel();
      updateAndDrawParticles();
      rafId = window.requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });

    resizeCanvas();
    resizeObserver.observe(rootEl);
    parentEl.addEventListener("mousemove", onMouseMove);
    parentEl.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", resizeCanvas);
    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      parentEl.removeEventListener("mousemove", onMouseMove);
      parentEl.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [nodeCount]);

  return (
    <div
      ref={rootRef}
      className={`absolute inset-0 z-0 pointer-events-none ${className}`}
    >
      <canvas className="hero-neural-canvas" ref={canvasRef} />
      <div className="hero-code-overlay" />
    </div>
  );
}
