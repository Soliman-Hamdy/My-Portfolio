"use client";

import { useCallback, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Download, Mail, MapPin } from "lucide-react";
import ProfileImage from "@/components/ui/ProfileImage";
import ImageLightbox from "@/components/ui/ImageLightbox";

const PROFILE_SRC = "/images/profile.jpeg";
const PROFILE_ALT = "Soliman Hamdy";

export default function HeroSection() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const openLightbox = useCallback(() => setIsLightboxOpen(true), []);
  const closeLightbox = useCallback(() => setIsLightboxOpen(false), []);

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.12 } },
  };

  const item: Variants = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-6 py-28 sm:px-10 lg:px-16"
    >
      {/* Background glow circles (CSS animation, GPU-friendly) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-16 h-72 w-72 animate-float rounded-full bg-primary/30 blur-3xl will-change-transform motion-reduce:animate-none" />
        <div className="absolute -right-20 bottom-10 h-80 w-80 animate-float-reverse rounded-full bg-accent-pink/20 blur-3xl will-change-transform motion-reduce:animate-none" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-cyan/10 blur-3xl" />
      </div>

      <motion.div
        className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-20"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Photo (left) */}
        <motion.div variants={item} className="flex justify-center">
          <ProfileImage
            src={PROFILE_SRC}
            alt={PROFILE_ALT}
            onClick={openLightbox}
          />
        </motion.div>

        {/* Text (right) */}
        <div className="text-center lg:text-left">
          <motion.p
            variants={item}
            className="text-lg font-medium text-primary-light"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            className="gradient-text mt-2 pb-2 font-heading text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl"
          >
            Soliman Hamdy
          </motion.h1>

          <motion.h2
            variants={item}
            className="mt-2 font-heading text-2xl font-semibold sm:text-3xl"
          >
            Front-End Developer
          </motion.h2>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0"
          >
            I build responsive web apps with React, Next.js, TypeScript and
            Tailwind CSS, from a full online store to a real-time social
            platform.
          </motion.p>

          <motion.div
            variants={item}
            className="glass mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted"
          >
            <MapPin size={16} className="text-accent-cyan" aria-hidden />
            Alexandria, Egypt, open to relocate
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <a
              href="/Soliman_Hamdy_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent-pink px-6 py-3 font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-primary/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
            >
              <Download size={18} aria-hidden />
              Download CV
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary/60 px-6 py-3 font-semibold text-text transition hover:-translate-y-0.5 hover:border-accent-cyan hover:text-accent-cyan focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
            >
              <Mail size={18} aria-hidden />
              Contact me
            </a>
          </motion.div>
        </div>
      </motion.div>

      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        src={PROFILE_SRC}
        alt={PROFILE_ALT}
      />
    </section>
  );
}
