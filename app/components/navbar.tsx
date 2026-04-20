"use client";
import { useState, useEffect } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

const menuItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = menuItems.map((item) => {
        const element = document.getElementById(item.id);
        return element
          ? {
              id: item.id,
              top: element.offsetTop,
              height: element.offsetHeight,
            }
          : null;
      });

      const current = sections.find(
        (section) =>
          section &&
          window.scrollY >= section.top - 100 &&
          window.scrollY < section.top + section.height - 100
      );

      if (current) {
        setActiveSection(current.id);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const toggleTheme = () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  const isDarkMode = mounted && resolvedTheme === "dark";

  return (
    <header className="w-full h-20 flex items-center justify-center relative">
      <nav
        className={`
          z-50 fixed left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out origin-top
          
          ${
            isScrolled
              ? "top-3 w-[90%] max-w-5xl scale-[0.96] rounded-3xl border border-blue-100 bg-white/90 p-4 shadow-lg shadow-blue-200/20 backdrop-blur-md md:top-4 md:rounded-full dark:border-slate-700/70 dark:bg-slate-900/85 dark:shadow-slate-900/40"
              : "top-0 w-full max-w-7xl scale-100 bg-transparent px-4 py-4 md:p-5"
          }
        `}
      >
        <div className="flex items-center w-full justify-between gap-x-3">
          {/* 1. Logo/Icon */}
          <div
            className={`
            whitespace-nowrap font-extrabold tracking-tight transition-all duration-500
            ${isScrolled ? "text-slate-900 dark:text-slate-100 text-sm" : "text-slate-900 dark:text-slate-100 text-base md:text-2xl"}
          `}
          >
            KEITHV // DEV
          </div>

          {/* 2. Menu Links */}
          <ul
            className={`
            hidden md:flex flex-1 items-center justify-center transition-all duration-500 px-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            ${isScrolled ? "gap-x-2 lg:gap-x-5 text-[11px] md:text-xs" : "gap-x-3 lg:gap-x-8 text-xs md:text-sm"}
          `}
          >
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="whitespace-nowrap"
              >
                <button
                  type="button"
                  onClick={() => handleClick(item.id)}
                  className={`cursor-pointer font-medium whitespace-nowrap transition-all rounded-md
                  ${
                    activeSection === item.id
                      ? isScrolled
                        ? "bg-blue-600 text-white"
                        : "text-blue-600 font-semibold"
                      : isScrolled
                        ? "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                        : "text-slate-500 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                  }
                  ${isScrolled ? "p-2" : "px-2 py-1"}
                `}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* 3. Action Button / Email */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-white/90 text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <div
              className={`
              rounded-full font-semibold transition-all duration-500 items-center justify-center whitespace-nowrap
              ${
                isScrolled
                  ? "bg-blue-600 text-white px-3 py-1.5 text-[10px] md:text-[11px] hover:bg-blue-700"
                  : "bg-blue-600 text-white px-6 py-2.5 text-sm shadow-blue-200 hover:bg-blue-700 active:scale-95"
              }
            `}
            >
              {isScrolled ? "vuong.tuankiet07979@gmail.com" : "Contact Me"}
            </div>
          </div>

          {/* 4. Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-white/90 text-slate-600 shadow-sm transition-colors hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-white/90 text-blue-600 shadow-sm dark:border-slate-700 dark:bg-slate-900/90 dark:text-blue-400"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-3 rounded-2xl border border-blue-100 bg-white/95 p-2 shadow-md backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/95">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleClick(item.id)}
                    className={`w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors
                      ${
                        activeSection === item.id
                          ? "bg-blue-600 text-white"
                          : "text-slate-600 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                      }
                    `}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
