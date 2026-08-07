import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-100/70 dark:border-zinc-800 dark:bg-zinc-900/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-9 text-xs text-zinc-500 sm:px-8 md:grid-cols-[1fr_auto_1fr] md:items-center lg:px-10 dark:text-zinc-400">
        <p>© 2026 Keith Vuong · Ho Chi Minh City</p>
        <div className="flex gap-5">
          <a
            className="footer-link"
            href="https://github.com/keithz23"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight size={12} weight="regular" />
          </a>
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/keithivers/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight size={12} weight="regular" />
          </a>
        </div>
        <p className="font-mono uppercase tracking-[.14em] md:text-right">
          Built with Next.js
        </p>
      </div>
    </footer>
  );
}
