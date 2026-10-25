"use client";

import { useEffect, useRef } from "react";

export function BackgroundField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: -1, y: -1 };
    let width = 0;
    let height = 0;
    let frame = 0;
    let last = 0;

    function resize() {
      if (!canvas || !context) return;
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      if (motion.matches) draw(0);
    }

    function draw(time: number) {
      if (!context) return;
      context.clearRect(0, 0, width, height);
      const phase = time / 8000;
      const glowX = width * (0.65 + Math.sin(phase) * 0.12);
      const glowY = height * (0.35 + Math.cos(phase * 0.7) * 0.18);
      const spacing = width < 600 ? 28 : 24;
      for (let y = 12; y < height; y += spacing) {
        for (let x = 12; x < width; x += spacing) {
          const ambient = Math.max(0, 1 - Math.hypot(x - glowX, y - glowY) / 350);
          const near = pointer.x < 0 ? 0 : Math.max(0, 1 - Math.hypot(x - pointer.x, y - pointer.y) / 160);
          const intensity = Math.max(ambient * 0.65, near * 0.8);
          context.fillStyle = `rgba(${intensity > 0.2 ? "153,170,255" : "120,129,142"},${0.09 + intensity * 0.28})`;
          context.beginPath();
          context.arc(x, y, 0.65 + intensity * 0.55, 0, Math.PI * 2);
          context.fill();
        }
      }
    }

    function tick(time: number) {
      frame = requestAnimationFrame(tick);
      if (document.hidden || time - last < 50) return;
      last = time;
      draw(time);
    }

    function syncMotion() {
      cancelAnimationFrame(frame);
      draw(0);
      if (!motion.matches) frame = requestAnimationFrame(tick);
    }
    function move(event: PointerEvent) { pointer.x = event.clientX; pointer.y = event.clientY; }
    function leave() { pointer.x = -1; pointer.y = -1; }
    resize();
    syncMotion();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    motion.addEventListener("change", syncMotion);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
      motion.removeEventListener("change", syncMotion);
    };
  }, []);

  return <canvas className="background-field" ref={canvasRef} aria-hidden="true" />;
}
