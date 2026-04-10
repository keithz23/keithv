"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

type Point = { x: number; y: number };

const InteractiveHero = () => {
  const [mousePos, setMousePos] = useState<Point>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement | null>(null);
  const currentPosRef = useRef<Point>({ x: 0, y: 0 });
  const targetPosRef = useRef<Point>({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const setCenterPoint = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const center = { x: rect.width / 2, y: rect.height / 2 };
      currentPosRef.current = center;
      targetPosRef.current = center;
      setMousePos(center);
    };

    const animate = () => {
      const current = currentPosRef.current;
      const target = targetPosRef.current;
      const next = {
        x: current.x + (target.x - current.x) * 0.1,
        y: current.y + (target.y - current.y) * 0.1,
      };
      currentPosRef.current = next;
      setMousePos(next);
      rafRef.current = window.requestAnimationFrame(animate);
    };

    setCenterPoint();
    window.addEventListener("resize", setCenterPoint);
    rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", setCenterPoint);
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      targetPosRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-white py-16"
    >
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(#3b82f6 0.5px, transparent 0.5px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div
        className="absolute pointer-events-none inset-0 z-10"
        style={{
          background: `radial-gradient(
            400px circle at ${mousePos.x}px ${mousePos.y}px,
            rgba(59, 130, 246, 0.08),
            transparent 80%
          )`,
        }}
      />

      <div className="relative z-20 w-full max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="text-left">
            <span className="text-sm font-medium tracking-wider text-blue-600 uppercase">
              Full-stack Developer
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Crafting Visuals.
              <br />
              <span className="text-blue-600">Defining Logic.</span>
            </h1>

            <p className="mt-6 max-w-md text-base text-slate-500 leading-relaxed">
              Hi, I&apos;m Keith. I build clean, efficient web products with a
              focus on user experience and performance.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button className="rounded-lg bg-slate-900 px-6 py-2.5 text-sm font-medium text-white transition-hover hover:bg-slate-800">
                Let&apos;s Build
              </button>
              <button
                type="button"
                onClick={handleScrollToProjects}
                className="rounded-lg border border-slate-200 px-6 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                View Work
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative h-64 w-64 md:h-80 md:w-80 overflow-hidden rounded-2xl bg-slate-50 shadow-sm border border-slate-100">
              <Image
                src="/window.svg"
                alt="Profile"
                fill
                className="object-contain p-8"
                priority
              />
            </div>

            <div className="absolute -bottom-3 right-0 md:right-4 rounded-full bg-white border border-slate-100 px-4 py-1.5 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-slate-600">
                  Available to work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveHero;
