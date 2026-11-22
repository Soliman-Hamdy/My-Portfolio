"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navLinks";
import useScrollSpy from "@/hooks/useScrollSpy";
import ThemeToggle from "@/components/ui/ThemeToggle";

const SECTION_IDS = ["home", ...navLinks.map((link) => link.id)];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-primary/20 bg-bg/80 px-6 backdrop-blur-md sm:px-10 lg:px-16">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
        {/* Logo + name (left) */}
        <a
          href="#home"
          className="flex items-center gap-3 justify-self-start rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
        >
          <span
            aria-hidden
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 bg-surface font-mono text-sm font-bold text-accent-cyan"
          >
            ~/
          </span>
          <span className="font-mono text-sm font-medium text-text">
            Soliman Hamdy
          </span>
        </a>

        {/* Links (center, desktop) */}
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ label, id }) => {
              const isActive = activeId === id;

              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan ${
                      isActive ? "text-text" : "text-muted hover:text-text"
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-primary to-accent-cyan"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Theme toggle + hamburger (right) */}
        <div className="flex items-center gap-1 justify-self-end">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-primary/15 hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan md:hidden"
          >
            {isMenuOpen ? (
              <X size={22} aria-hidden />
            ) : (
              <Menu size={22} aria-hidden />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-auto max-w-6xl overflow-hidden md:hidden"
          >
            <ul className="flex flex-col gap-1 pb-4">
              {navLinks.map(({ label, id }) => {
                const isActive = activeId === id;

                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={isActive ? "true" : undefined}
                      className={`block rounded-lg px-3 py-3 text-base transition-colors ${
                        isActive
                          ? "bg-primary/15 text-text"
                          : "text-muted hover:bg-primary/10 hover:text-text"
                      }`}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
