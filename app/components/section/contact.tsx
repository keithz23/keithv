"use client";
import React from "react";
import { Mail, GitBranch, Send, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24 border-t border-slate-100">
      <div className="mx-auto w-full max-w-6xl px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Contact
              </h2>
              <h3 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                Let&apos;s work together.
              </h3>
              <p className="mt-4 text-lg text-slate-500 max-w-sm">
                I&apos;m currently available for new projects and opportunities.
                Let&apos;s build something amazing.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:vuong.tuankiet07979@gmail.com"
                className="group flex items-center gap-4 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Email Me
                  </p>
                  <p className="font-medium text-slate-900">
                    vuong.tuankiet07979@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-slate-600">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-slate-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Location
                  </p>
                  <p className="font-medium text-slate-900">
                    Ho Chi Minh City, Vietnam
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                {
                  icon: GitBranch,
                  href: "https://github.com",
                  label: "GitHub",
                },
                {
                  icon: GitBranch,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-700 active:scale-[0.98] transition-all shadow-lg shadow-blue-200"
              >
                <Send className="w-4 h-4" />
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
