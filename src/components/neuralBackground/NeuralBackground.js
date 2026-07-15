import React, {useRef, useEffect, useContext} from "react";
import StyleContext from "../../contexts/StyleContext";

/**
 * Generative "neural network" particle field rendered on a canvas.
 * Drifting nodes link up when close, like synapses firing — pure code,
 * no image assets, no dependencies. Sits behind content (pointer-events
 * none) and stays inert when the user prefers reduced motion.
 */
export default function NeuralBackground() {
  const canvasRef = useRef(null);
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const NODE_RGB = isDark ? "129, 140, 248" : "99, 102, 241";
    const LINK_RGB = isDark ? "34, 211, 238" : "8, 145, 178";
    const LINK_DIST = 140;
    let width, height, particles, rafId;

    function resize() {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function seed() {
      const count = Math.min(80, Math.max(30, Math.floor(width / 22)));
      particles = Array.from({length: count}, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1 + Math.random() * 1.8
      }));
    }

    function step() {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${NODE_RGB}, 0.7)`;
        ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${LINK_RGB}, ${
              0.35 * (1 - dist / LINK_DIST)
            })`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      rafId = window.requestAnimationFrame(step);
    }

    function onResize() {
      resize();
      seed();
    }

    resize();
    seed();
    step();
    window.addEventListener("resize", onResize);
    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, [isDark]);

  return <canvas ref={canvasRef} className="neural-bg" aria-hidden="true" />;
}
