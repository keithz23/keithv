"use client";
import { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";

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

  return (
    <header className="w-full h-20 flex items-center justify-center relative">
      <nav
        className={`
          z-50 fixed left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out
          
          ${
            isScrolled
              ? "top-4 w-[94%] max-w-7xl rounded-3xl border border-blue-100 bg-white/85 px-3 py-2 shadow-lg shadow-blue-200/20 backdrop-blur-md md:top-5 md:rounded-full"
              : "top-0 w-full max-w-7xl bg-transparent px-4 py-4 md:p-5"
          }
        `}
      >
        <div className="flex items-center w-full justify-between gap-x-3">
          {/* 1. Logo/Icon */}
          <div
            className={`
            flex items-center justify-center rounded-full transition-all duration-500
            ${isScrolled ? "bg-blue-600 p-2" : "bg-blue-50 p-2"}
          `}
          >
            <Globe
              className={`w-5 h-5 transition-colors ${isScrolled ? "text-white" : "text-blue-600"}`}
            />
          </div>

          {/* 2. Menu Links */}
          <ul
            className={`
            hidden md:flex flex-1 items-center justify-center transition-all duration-500 px-2 gap-x-3 lg:gap-x-8 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            ${isScrolled ? "text-[11px] md:text-xs" : "text-xs md:text-sm"}
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
                  className={`cursor-pointer font-medium whitespace-nowrap transition-all px-2 py-1 rounded-md
                  ${
                    activeSection === item.id
                      ? isScrolled
                        ? "bg-blue-600 text-white"
                        : "text-blue-600 font-semibold"
                      : isScrolled
                        ? "text-slate-600 hover:text-blue-600"
                        : "text-slate-500 hover:text-blue-600"
                  }
                `}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* 3. Action Button / Email */}
          <div
            className={`
            hidden lg:flex rounded-full font-semibold transition-all duration-500 items-center justify-center whitespace-nowrap
            ${
              isScrolled
                ? "bg-blue-600 text-white px-4 py-2 text-[10px] md:text-xs hover:bg-blue-700"
                : "bg-blue-600 text-white px-6 py-2.5 text-sm shadow-md shadow-blue-200 hover:bg-blue-700 active:scale-95"
            }
          `}
          >
            {isScrolled ? "vuong.tuankiet07979@gmail.com" : "Contact Me"}
          </div>

          {/* 4. Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-white/90 text-blue-600 shadow-sm"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-3 rounded-2xl border border-blue-100 bg-white/95 p-2 shadow-md backdrop-blur-sm">
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
                          : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
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
