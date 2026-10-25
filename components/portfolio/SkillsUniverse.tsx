"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Skill } from "@/data/portfolio";

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
class UniverseController {
  private rotationX = 0.08;
  private rotationY = -0.35;
  private velocityX = 0;
  private velocityY = 0;
  private dragging = false;
  private reducedMotion: boolean;
  private pointer = { x: 0, y: 0, time: 0 };

  constructor(reducedMotion = false) {
    this.reducedMotion = reducedMotion;
  }

  setReducedMotion(value: boolean) {
    this.reducedMotion = value;
    if (value) {
      this.velocityX = 0;
      this.velocityY = 0;
    }
  }

  startDrag(x: number, y: number, time: number) {
    this.dragging = true;
    this.velocityX = 0;
    this.velocityY = 0;
    this.pointer = { x, y, time };
  }

  drag(x: number, y: number, time: number) {
    if (!this.dragging) return;

    const elapsed = Math.max((time - this.pointer.time) / 1000, 0.016);
    const deltaX = x - this.pointer.x;
    const deltaY = y - this.pointer.y;

    this.rotationX = clamp(
      this.rotationX + deltaY * 0.005,
      -Math.PI / 6,
      Math.PI / 6,
    );
    this.rotationY += deltaX * 0.007;
    this.velocityX = this.reducedMotion ? 0 : (deltaY * 0.005) / elapsed;
    this.velocityY = this.reducedMotion ? 0 : (deltaX * 0.007) / elapsed;
    this.pointer = { x, y, time };
  }

  release() {
    this.dragging = false;
  }

  rotate(key: string) {
    const step = (7 * Math.PI / 180);

    switch (key) {
      case "ArrowLeft":
        this.rotationY -= step;
        break;
      case "ArrowRight":
        this.rotationY += step;
        break;
      case "ArrowUp":
        this.rotationX = clamp(
          this.rotationX - step,
          -Math.PI / 6,
          Math.PI / 6,
        );
        break;
      case "ArrowDown":
        this.rotationX = clamp(
          this.rotationX + step,
          -Math.PI / 6,
          Math.PI / 6,
        );
        break;
      default:
        return false;
    }

    this.velocityX = 0;
    this.velocityY = 0;
    return true;
  }

  step(delta: number): [number, number] {
    if (!this.dragging && !this.reducedMotion) {
      const speed = Math.hypot(this.velocityX, this.velocityY);

      if (speed > 0.006) {
        this.rotationX = clamp(
          this.rotationX + this.velocityX * delta,
          -Math.PI / 6,
          Math.PI / 6,
        );
        this.rotationY += this.velocityY * delta;

        const damping = Math.exp(-1.55 * delta);
        this.velocityX *= damping;
        this.velocityY *= damping;
      } else {
        this.velocityX = 0;
        this.velocityY = 0;
        this.rotationY += (5 * Math.PI / 180) * delta;
      }
    }

    return [this.rotationX, this.rotationY];
  }
}


const colors = { cobalt: "#7691FF", lime: "#C8F56A", mint: "#72D6BE" };

export default function SkillsUniverse({ skills }: { skills: Skill[] }) {
  const reducedMotion = useReducedMotion();
  const [controller] = useState(() => new UniverseController(Boolean(reducedMotion)));
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const labelsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => { controller.setReducedMotion(Boolean(reducedMotion)); }, [controller, reducedMotion]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !container || !context) return;
    let frame = 0;
    let previous = 0;
    let visible = true;
    let width = 0;
    let height = 0;
    const resize = new ResizeObserver(() => {
      width = container.clientWidth;
      height = container.clientHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    });
    resize.observe(container);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(container);
    function render(time: number) {
      frame = requestAnimationFrame(render);
      const delta = previous ? Math.min((time - previous) / 1000, 0.05) : 0;
      previous = time;
      if (!visible || !context || !canvas) return;
      const [rx, ry] = controller.step(delta);
      const radius = Math.min(width * 0.32, height * 0.34);
      function project(x: number, y: number, z: number) {
        const xx = x * Math.cos(ry) + z * Math.sin(ry);
        const zz = z * Math.cos(ry) - x * Math.sin(ry);
        const yy = y * Math.cos(rx) - zz * Math.sin(rx);
        const depth = y * Math.sin(rx) + zz * Math.cos(rx);
        const perspective = 4 / (4 - depth);
        return [width / 2 + xx * radius * perspective, height / 2 + yy * radius * perspective, depth];
      }
      context.clearRect(0, 0, width, height);
      context.strokeStyle = "rgba(118,145,255,0.18)";
      context.lineWidth = 0.7;
      for (let ring = 0; ring < 23; ring++) {
        context.beginPath();
        for (let step = 0; step <= 80; step++) {
          const angle = step / 80 * Math.PI * 2;
          const latitude = (ring % 11 + 1) / 12 * Math.PI;
          const longitude = ring / 12 * Math.PI;
          const point = ring < 11
            ? project(Math.sin(latitude) * Math.cos(angle), Math.cos(latitude), Math.sin(latitude) * Math.sin(angle))
            : project(Math.cos(longitude) * Math.sin(angle), Math.cos(angle), Math.sin(longitude) * Math.sin(angle));
          if (step === 0) context.moveTo(point[0], point[1]); else context.lineTo(point[0], point[1]);
        }
        context.stroke();
      }
      skills.forEach((skill, index) => {
        const label = labelsRef.current[index];
        if (!label) return;
        const y = skills.length > 1 ? 1 - index / (skills.length - 1) * 2 : 0;
        const r = Math.sqrt(1 - y * y);
        const angle = Math.PI * (3 - Math.sqrt(5)) * index;
        const [x, py, z] = project(Math.cos(angle) * r, y, Math.sin(angle) * r);
        const depth = (z + 1) / 2;
        label.style.transform = `translate(-50%, -50%) translate(${x}px, ${py}px) scale(${0.75 + depth * 0.3})`;
        label.style.opacity = String(0.25 + depth * 0.75);
        label.style.zIndex = String(Math.round(depth * 100));
        context.fillStyle = colors[skill.tone];
        context.beginPath(); context.arc(x, py, 2.5, 0, Math.PI * 2); context.fill();
      });
    }
    frame = requestAnimationFrame(render);
    return () => { cancelAnimationFrame(frame); resize.disconnect(); observer.disconnect(); };
  }, [controller, skills]);

  function release(event: React.PointerEvent<HTMLDivElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    controller.release();
  }

  return (
    // This custom canvas application intentionally captures arrow keys for 2D rotation.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-noninteractive-tabindex
    <div ref={containerRef} className="universe-canvas" role="application" aria-label="Interactive skills universe" aria-describedby="skills-universe-instructions" tabIndex={0}
      onKeyDown={(event) => { if (controller.rotate(event.key)) event.preventDefault(); }}
      onPointerDown={(event) => { event.currentTarget.setPointerCapture(event.pointerId); controller.startDrag(event.clientX, event.clientY, performance.now()); }}
      onPointerMove={(event) => controller.drag(event.clientX, event.clientY, performance.now())}
      onPointerUp={release} onPointerCancel={release} onLostPointerCapture={() => controller.release()}>
      <canvas ref={canvasRef} aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {skills.map((skill, index) => <span key={skill.name} ref={(element) => { labelsRef.current[index] = element; }} className={`universe-label universe-label-${skill.tone}`} style={{ position: "absolute", left: 0, top: 0 }}>{skill.name}</span>)}
      </div>
      <p className="universe-hint" id="skills-universe-instructions"><span aria-hidden="true">↔</span> Drag or use arrow keys to inspect</p>
    </div>
  );
}
