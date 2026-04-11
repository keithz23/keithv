"use client";
import React from "react";

const techStack = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  { category: "Backend", items: ["NestJS", "Node.js", "Express", "Prisma"] },
  { category: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  {
    category: "Cloud & DevOps",
    items: ["AWS (SAA)", "Docker", "Terraform", "GitHub Actions"],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto w-full max-w-6xl px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:items-start">
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                About Me
              </h2>
              <h3 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                Tuan Kiet Vuong
              </h3>
            </div>

            <p className="text-lg leading-relaxed text-slate-600">
              I’m a Web Developer with 2 years of experience
              delivering high-quality websites and management systems. I focus
              on clean code and seamless user experiences.
            </p>

            <div className="pt-4 flex items-center gap-6">
              <div>
                <p className="text-2xl font-bold text-slate-900">2+</p>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Years Exp
                </p>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <p className="text-2xl font-bold text-slate-900">5+</p>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Projects
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {techStack.map((group) => (
              <div key={group.category} className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-md text-sm font-medium text-slate-600 hover:border-blue-200 hover:text-blue-600 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
