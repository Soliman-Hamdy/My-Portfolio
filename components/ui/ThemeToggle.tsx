"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import useTheme from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-primary/15 hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "sun" : "moon"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex"
        >
          {isDark ? (
            <Sun size={20} aria-hidden />
          ) : (
            <Moon size={20} aria-hidden />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
