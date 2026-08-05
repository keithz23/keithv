import { ArrowUpRight, BookOpenText, ChatCircleDots, Check, Code, Kanban, ShoppingBagOpen, Warehouse } from "@phosphor-icons/react/dist/ssr";

const projects = [
  { number: "01", title: "Bluesky Social", label: "Full-stack social platform", description: "A complete social experience with personalized feeds, profiles, posts, follows, real-time chat, notifications, and moderation tools.", highlights: ["Redis-backed fan-out feeds and rate limiting", "Socket.IO chat and real-time notifications", "JWT, OTP, RBAC, and audit logging", "ECS Fargate, ALB, RDS, ElastiCache, and S3"], tech: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Redis", "AWS"], github: "https://github.com/keithz23/Bluesky-Social", icon: ChatCircleDots },
  { number: "02", title: "EcomGrove", label: "E-commerce platform", description: "A commerce product connecting a customer storefront, an administration portal, and a consistent typed data flow from interface to API.", highlights: ["JWT and RBAC authorization", "Redis caching for backend workloads", "Next.js SSR for product pages"], tech: ["Next.js", "TypeScript", "NestJS", "Redis", "REST API"], github: "https://github.com/keithz23/EcomGrove", icon: ShoppingBagOpen },
  { number: "03", title: "Dictiohub", label: "Dictionary application", description: "A focused dictionary application with a cached lookup API and an automated cloud delivery workflow.", highlights: ["Redis-cached lookup API", "AWS EC2 and RDS deployment", "CI/CD with GitHub Actions"], tech: ["Node.js", "Redis", "AWS EC2", "AWS RDS"], github: null, icon: BookOpenText },
  { number: "04", title: "Jiramisu", label: "Project management", description: "A Jira-inspired workspace for planning sprints, managing backlogs, and moving work through role-aware task boards.", highlights: ["Sprint and backlog management", "Drag-and-drop task boards", "Role-based access control"], tech: ["Next.js", "NestJS", "PostgreSQL", "Prisma"], github: null, icon: Kanban },
  { number: "05", title: "InventorySys", label: "Operations system", description: "An inventory system for retail and wholesale teams to track stock movement and keep day-to-day operations visible.", highlights: ["Inventory and stock tracking", "Retail and wholesale workflows", "Operational reporting"], tech: ["Java", "Spring MVC", "SQL Server", "JavaScript"], github: null, icon: Warehouse },
];

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  const Icon = project.icon;
  return (
    <div className="project-visual" aria-hidden="true">
      <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-3 dark:border-zinc-700">
        <div className="flex gap-1.5"><span /><span /><span /></div>
        <p className="font-mono text-[9px] uppercase tracking-[.18em] text-zinc-400">{project.label}</p>
      </div>
      <div className="grid grow grid-cols-[3.5rem_1fr]">
        <div className="border-r border-zinc-200 p-4 dark:border-zinc-700"><Icon size={23} weight="duotone" className="text-blue-600 dark:text-blue-400" /></div>
        <div className="flex flex-col justify-between p-5 sm:p-7">
          <div><p className="font-mono text-[9px] uppercase tracking-[.18em] text-zinc-400">System / {project.number}</p><p className="mt-4 max-w-[13ch] text-2xl font-semibold leading-tight tracking-[-.04em] text-zinc-900 dark:text-zinc-100">{project.title}</p></div>
          <div className="mt-10 grid grid-cols-3 gap-2"><span className="h-14 bg-zinc-200/70 dark:bg-zinc-800" /><span className="h-9 self-end bg-blue-600/15 dark:bg-blue-400/15" /><span className="h-20 self-end border border-zinc-200 dark:border-zinc-700" /></div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-shell border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-10">
        <header className="grid gap-8 lg:grid-cols-[.58fr_1.42fr] lg:gap-20">
          <p className="section-index">02 / Selected work</p>
          <div><h2 className="section-title max-w-[13ch]">Systems explained through decisions, not decoration.</h2><p className="mt-7 max-w-[61ch] leading-7 text-zinc-600 dark:text-zinc-400">Each project shows the product surface and the less visible engineering underneath: access control, data flow, real-time behavior, caching, and deployment.</p></div>
        </header>

        <div className="mt-20 space-y-8">
          {projects.map((project, index) => (
            <article key={project.title} className="project-case sticky" style={{ top: `${6.25 + index * 0.75}rem` }}>
              <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-14">
                <ProjectVisual project={project} />
                <div className="flex flex-col py-1 lg:py-4">
                  <div className="flex items-start justify-between gap-5"><div><p className="section-index">Case {project.number}</p><h3 className="mt-3 text-3xl font-semibold tracking-[-.045em] text-zinc-950 sm:text-4xl dark:text-zinc-50">{project.title}</h3></div><span className="font-mono text-[10px] uppercase tracking-[.16em] text-zinc-400">{project.label}</span></div>
                  <p className="mt-6 max-w-[58ch] leading-7 text-zinc-600 dark:text-zinc-300">{project.description}</p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {project.highlights.map((highlight) => <li key={highlight} className="flex gap-2.5 text-sm leading-6 text-zinc-600 dark:text-zinc-300"><Check size={14} weight="bold" className="mt-1 shrink-0 text-blue-600 dark:text-blue-400" />{highlight}</li>)}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 border-t border-zinc-200 pt-5 dark:border-zinc-700">{project.tech.map((tech) => <span key={tech} className="font-mono text-[10px] uppercase tracking-[.12em] text-zinc-500 dark:text-zinc-400">{tech}</span>)}</div>
                  <div className="mt-auto pt-8">{project.github ? <a href={project.github} target="_blank" rel="noreferrer" className="text-link"><Code size={16} weight="bold" /> Explore source <ArrowUpRight size={15} weight="bold" /></a> : <span className="font-mono text-[10px] uppercase tracking-[.16em] text-zinc-400">Private repository / details on request</span>}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
