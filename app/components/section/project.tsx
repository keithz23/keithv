"use client";
import { GitBranch, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Jiramisu",
    description:
      "A Jira-inspired project management system featuring drag-and-drop task boards, backlog management, and robust role-based access control.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Prisma"],
    github: "#",
    demo: "#",
    image: "/project-1.jpg",
  },
  {
    title: "Bluesky Social",
    description:
      "A decentralized social media platform built with a focus on high-performance microservices and real-time user interactions.",
    tech: ["Next.js", "TypeScript", "Tailwind", "AWS"],
    github: "https://github.com/keithz23/Bluesky-Social",
    demo: "#",
    image: "/project-2.jpg",
  },
  {
    title: "EcomGrove",
    description:
      "A modern and scalable eCommerce platform designed for a seamless online shopping experience with optimized checkout flows.",
    tech: ["Next.js", "NestJS", "Tailwind", "AWS", "PostgreSQL"],
    github: "https://github.com/keithz23/EcomGrove",
    demo: "#",
    image: "/project-3.jpg",
  },
  {
    title: "InventorySys",
    description:
      "A comprehensive inventory management solution tailored for retail and wholesale businesses to track stock and streamline operations.",
    tech: ["Java", "Spring MVC", "SQL Server", "JavaScript"],
    github: "#",
    demo: "#",
    image: "/project-4.jpg",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-white py-24 border-t border-slate-100 dark:bg-slate-950 dark:border-slate-800">
      <div className="mx-auto w-full max-w-6xl px-8">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Selected Work
          </h2>
          <h3 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl dark:text-slate-100">
            Featured Projects
          </h3>
          <div className="mt-4 h-1 w-12 bg-blue-600 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 dark:bg-slate-900 dark:border-slate-800"
            >
              {/* Image Placeholder with Hover Effect */}
              <div className="relative aspect-video bg-slate-50 overflow-hidden border-b border-slate-50 dark:bg-slate-950 dark:border-slate-800">
                <div className="absolute inset-0 flex items-center justify-center text-slate-300 text-xs font-mono tracking-widest dark:text-slate-600">
                  // {project.title.toUpperCase()} _IMAGE
                </div>
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/2 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col grow">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100 group-hover:border-blue-100 group-hover:text-blue-500 transition-colors dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:group-hover:border-blue-500/40 dark:group-hover:text-blue-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h4 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors dark:text-slate-100 dark:group-hover:text-blue-400">
                  {project.title}
                </h4>

                <p className="mt-4 text-slate-500 leading-relaxed text-sm md:text-base dark:text-slate-300">
                  {project.description}
                </p>

                {/* Footer Links */}
                <div className="mt-8 pt-6 border-t border-slate-50 flex gap-6 dark:border-slate-800">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-slate-900 transition-colors dark:text-slate-300 dark:hover:text-slate-100"
                  >
                    <GitBranch className="w-4 h-4" />
                    GITHUB
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    LIVE PREVIEW
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
