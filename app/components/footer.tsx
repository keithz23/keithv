import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  MessageSquare,
} from "lucide-react";

const quickLinks = ["Home", "About", "Services", "Projects", "Contact"];

const contactInfo = [
  { label: "Email", value: "vuong.tuankiet07979@gmail.com", icon: Mail },
  { label: "Phone", value: "0904346382", icon: Phone },
  { label: "Location", value: "HCMC", icon: MapPin },
];

const socialLinks = [
  { icon: Code2, url: "#", label: "GitHub" },
  { icon: ExternalLink, url: "#", label: "LinkedIn" },
  { icon: MessageSquare, url: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand / Description */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Keith Wong
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Full-stack developer building clean, scalable web applications
              with focus on performance and user experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-start gap-3">
                    <Icon className="mt-1 h-4 w-4 shrink-0 text-blue-400" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        {item.label}
                      </p>
                      <p className="text-sm text-slate-300">{item.value}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-1">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Follow
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-all hover:bg-blue-600 hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-slate-800" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-slate-400">
            © 2026 Keith Wong. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Built with <span className="text-blue-400">Next.js</span> &amp;
            <span className="text-blue-400"> Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
