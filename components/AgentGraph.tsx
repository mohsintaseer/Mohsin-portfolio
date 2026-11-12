"use client";
import { useEffect, useRef } from "react";

const LABELS = ["Next.js", "Node.js", "React", "Python", "LangChain", "RAG", "CrewAI", "Flutter", "TypeScript", "Ollama", "C++", "TensorFlow.js"];
type N = { x: number; y: number; vx: number; vy: number; l?: string };

export default function AgentGraph() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const m = { x: -999, y: -999 };
    let w = 0, h = 0, raf = 0, nodes: N[] = [];
    const pulses: { a: N; b: N; t: number }[] = [];
    const LINK = 140;

    const resize = () => {
      const r = c.getBoundingClientRect(), d = devicePixelRatio || 1;
      w = r.width; h = r.height; c.width = w * d; c.height = h * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
      const n = Math.max(LABELS.length + 6, Math.min(80, Math.round((w * h) / 15000)));
      nodes = Array.from({ length: n }, (_, i) => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35, l: LABELS[i],
      }));
    };

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        const dx = m.x - n.x, dy = m.y - n.y, d = Math.hypot(dx, dy);
        if (d < 220 && !still) { n.vx += (dx / d) * 0.012; n.vy += (dy / d) * 0.012; }
        n.vx *= 0.995; n.vy *= 0.995;
        if (!still) { n.x += n.vx; n.y += n.vy; }
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      const near: [N, N][] = [];
      for (let i = 0; i < nodes.length; i++)
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < LINK) {
            near.push([nodes[i], nodes[j]]);
            ctx.strokeStyle = `rgba(224,123,150,${(1 - d / LINK) * 0.35})`;
            ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke();
          }
        }
      if (!still && near.length && Math.random() < 0.08) {
        const [a, b] = near[Math.floor(Math.random() * near.length)];
        pulses.push({ a, b, t: 0 });
      }
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i]; p.t += 0.02;
        if (p.t >= 1) { pulses.splice(i, 1); continue; }
        ctx.fillStyle = "#d8b45f"; ctx.shadowColor = "#d8b45f"; ctx.shadowBlur = 12;
        ctx.beginPath(); ctx.arc(p.a.x + (p.b.x - p.a.x) * p.t, p.a.y + (p.b.y - p.a.y) * p.t, 2.5, 0, 7); ctx.fill();
        ctx.shadowBlur = 0;
      }
      ctx.font = "12px var(--font-body), sans-serif";
      for (const n of nodes) {
        ctx.fillStyle = n.l ? "#d8b45f" : "rgba(241,236,238,.55)";
        ctx.beginPath(); ctx.arc(n.x, n.y, n.l ? 4 : 2, 0, 7); ctx.fill();
        if (n.l) { ctx.fillStyle = "rgba(241,236,238,.85)"; ctx.fillText(n.l, n.x + 9, n.y + 4); }
      }
      if (!still) raf = requestAnimationFrame(frame);
    };

    const move = (e: PointerEvent) => { const r = c.getBoundingClientRect(); m.x = e.clientX - r.left; m.y = e.clientY - r.top; };
    resize(); frame();
    addEventListener("resize", resize); addEventListener("pointermove", move);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); removeEventListener("pointermove", move); };
  }, []);
  return <canvas ref={ref} className="graph" aria-hidden="true" />;
}
