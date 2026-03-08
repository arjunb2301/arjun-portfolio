"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const isMobile = width < 768;
    const particleCount = isMobile ? 28 : width < 1100 ? 46 : 64;
    const linkDistance = isMobile ? 72 : 96;

    let particles: Particle[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.12 : 0.18),
        vy: (Math.random() - 0.5) * (isMobile ? 0.12 : 0.18),
        r: Math.random() * 1.5 + 0.8,
      }));
    };

    const drawGradientWash = () => {
      const g1 = ctx.createRadialGradient(
        width * 0.18,
        height * 0.18,
        20,
        width * 0.18,
        height * 0.18,
        width * 0.45
      );
      g1.addColorStop(0, "rgba(137, 120, 255, 0.14)");
      g1.addColorStop(1, "rgba(137, 120, 255, 0)");

      const g2 = ctx.createRadialGradient(
        width * 0.78,
        height * 0.25,
        10,
        width * 0.78,
        height * 0.25,
        width * 0.4
      );
      g2.addColorStop(0, "rgba(88, 145, 255, 0.12)");
      g2.addColorStop(1, "rgba(88, 145, 255, 0)");

      const g3 = ctx.createRadialGradient(
        width * 0.55,
        height * 0.82,
        20,
        width * 0.55,
        height * 0.82,
        width * 0.42
      );
      g3.addColorStop(0, "rgba(172, 98, 255, 0.08)");
      g3.addColorStop(1, "rgba(172, 98, 255, 0)");

      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, width, height);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      drawGradientWash();

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= -10 || p.x >= width + 10) p.vx *= -1;
        if (p.y <= -10 || p.y >= height + 10) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.18)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j += 1) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < linkDistance) {
            const opacity = (1 - distance / linkDistance) * 0.07;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(208, 214, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationId = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="soft-grid absolute inset-0 opacity-25" />
      <div className="absolute left-[-10%] top-[-12%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(115,120,255,0.22),_transparent_68%)] blur-3xl" />
      <div className="absolute right-[-10%] top-[8%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_rgba(98,162,255,0.18),_transparent_70%)] blur-3xl" />
      <div className="absolute bottom-[-10%] left-[28%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_rgba(183,110,255,0.16),_transparent_72%)] blur-3xl" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />
    </div>
  );
}