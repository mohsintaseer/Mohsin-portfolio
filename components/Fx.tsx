"use client";
import { useEffect, useRef, useState } from "react";

export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`rv ${className}`}>{children}</div>;
}

export function Card({ children }: { children: React.ReactNode }) {
  const onMove = (e: React.MouseEvent<HTMLLIElement>) => {
    const el = e.currentTarget, r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
    el.style.transform = `perspective(800px) rotateY(${(x - 0.5) * 8}deg) rotateX(${(0.5 - y) * 8}deg)`;
  };
  const onLeave = (e: React.MouseEvent<HTMLLIElement>) => { e.currentTarget.style.transform = ""; };
  return <li className="card" onMouseMove={onMove} onMouseLeave={onLeave}>{children}</li>;
}

export function Typer({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    const t = setTimeout(() => {
      if (!del) { setTxt(w.slice(0, txt.length + 1)); if (txt.length + 1 === w.length) setTimeout(() => setDel(true), 1200); }
      else { setTxt(w.slice(0, txt.length - 1)); if (txt.length <= 1) { setDel(false); setI((i + 1) % words.length); } }
    }, del ? 35 : 70);
    return () => clearTimeout(t);
  }, [txt, del, i, words]);
  return <span className="typer" aria-label={words[0]}>{txt}<i className="caret" /></span>;
}

export function Progress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const f = () => setP(scrollY / Math.max(1, document.body.scrollHeight - innerHeight));
    f(); addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  return <div className="progress" style={{ transform: `scaleX(${p})` }} />;
}
