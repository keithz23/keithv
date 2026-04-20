"use client";

const techStack = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "NestJS", "Node.js", "Prisma"],
  },
  { category: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  {
    category: "Cloud & DevOps",
    items: ["AWS (SAA)", "Docker", "Terraform", "GitHub Actions"],
  },
];

const education = [
  {
    degree: "Bachelor of Information Technology",
    school: "HCM University of Technology and Egineering",
    major: "Software Engineering",
    period: "2019 - 2023",
    status: "Completed",
  },
];

const experiences = [
  {
    role: "Web Developer",
    company: "Sea Dragon Technology LLC",
    period: "2024-Present",
    type: "Contract",
    summary:
      "Delivered responsive frontends, integrated REST APIs, and optimized performance across multiple business websites.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-6xl px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  About Me
                </h2>
                <h3 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl dark:text-slate-100 lg:whitespace-nowrap">
                  Keith Vuong
                </h3>
              </div>

              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                I’m a Full-stack Developer with 2 years of experience delivering
                high-quality websites and management systems. I focus on clean
                code and seamless user experiences.
              </p>

              {/* Stats */}
              <div className="pt-4 flex items-center gap-6">
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    2+
                  </p>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Years Exp
                  </p>
                </div>
                <div className="h-8 w-px bg-slate-200 dark:bg-slate-700" />
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    5+
                  </p>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Projects
                  </p>
                </div>
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
                      className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-md text-sm font-medium text-slate-600 hover:border-blue-200 hover:text-blue-600 transition-colors dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-500/60 dark:hover:text-blue-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-t border-slate-100 pt-8 dark:border-slate-800 lg:grid-cols-2">
          {/* EDUCATION SECTION */}
          <section className="space-y-5">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Education
              </h4>
            </div>
            <div className="space-y-4">
              {education.map((edu) => (
                <article
                  key={`${edu.school}-${edu.degree}`}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900/60"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        {edu.degree}
                      </p>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        {edu.school}
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:border-blue-500/50 dark:bg-blue-500/10 dark:text-blue-300">
                      {edu.status}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {/* <span>{edu.period}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600" /> */}
                    <span>{edu.major}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* EXPERIENCE SECTION */}
          <section className="space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Experience
            </h4>
            <div className="space-y-4">
              {experiences.map((job) => (
                <article
                  key={`${job.company}-${job.role}`}
                  className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 dark:border-slate-700 dark:bg-slate-900/60"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        {job.role}
                      </p>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        {job.company}
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {job.type}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {job.summary}
                  </p>
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {job.period}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
