"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const links = ["About", "Projects", "Certifications", "Blogs", "Contact"];

  const isActive = (link: string) => {
    const href = `/${link.toLowerCase()}`;
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link
            href="/"
            className="group relative font-semibold text-lg tracking-tight text-white flex items-center gap-2"
          >
            {/* Subtle glow dot */}
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 group-hover:bg-white group-hover:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300" />
            <span className="text-white/90 group-hover:text-white transition-colors duration-200">
              Sankalpa Giri
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const active = isActive(link);
              return (
                <Link
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-200 group ${
                    active
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {/* Active background pill */}
                  {active && (
                    <span className="absolute inset-0 rounded-md bg-white/[0.08] border border-white/[0.1]" />
                  )}

                  {/* Hover background */}
                  <span className="absolute inset-0 rounded-md bg-white/0 group-hover:bg-white/[0.05] transition-colors duration-200" />

                  <span className="relative z-10">{link}</span>

                  {/* Active underline dot */}
                  {active && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/70" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-zinc-800 transition-all duration-200"
              aria-label="Toggle menu"
            >
              <span className="relative block w-[22px] h-[22px]">
                <Menu
                  size={22}
                  className={`absolute inset-0 transition-all duration-200 ${
                    menuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  size={22}
                  className={`absolute inset-0 transition-all duration-200 ${
                    menuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/[0.06] bg-black/90 backdrop-blur-xl px-4 py-3 flex flex-col gap-1">
            {links.map((link, i) => {
              const active = isActive(link);
              return (
                <Link
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                    active
                      ? "text-white bg-white/[0.08] border border-white/[0.1]"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {link}
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}