"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type ImageLightboxProps = {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
};

export default function ImageLightbox({
  isOpen,
  onClose,
  src,
  alt,
}: ImageLightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close photo"
            autoFocus
            className="glass absolute right-4 top-4 rounded-full p-2 text-text transition hover:text-accent-pink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan"
          >
            <X size={24} aria-hidden />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="overflow-hidden rounded-2xl border border-primary/40 shadow-2xl shadow-primary/30"
          >
            {/* Same file as the hero photo, so it is already cached and opens instantly */}
            <Image
              src={src}
              alt={alt}
              width={480}
              height={480}
              unoptimized
              className="block h-auto w-[min(90vw,70vh)] max-w-[480px] object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
