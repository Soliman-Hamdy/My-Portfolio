"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/portofolio";

export function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    update();
    emblaApi.on("select", update).on("reInit", update).on("scroll", update);
    return () => {
      emblaApi
        .off("select", update)
        .off("reInit", update)
        .off("scroll", update);
    };
  }, [emblaApi, update]);

  return (
    <Section id="projects" title="Projects">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex cursor-grab gap-6 active:cursor-grabbing">
          {projects.map((p) => {
            const mainLink = p.live || p.github;
            return (
              <article
                key={p.title}
                className="group relative flex min-w-0 flex-[0_0_85%] select-none flex-col overflow-hidden rounded-2xl border border-black/10 bg-black/[0.03] transition hover:border-violet-500/50 sm:flex-[0_0_55%] lg:flex-[0_0_380px] dark:border-white/10 dark:bg-white/[0.04]"
              >
                {/* Preview */}
                <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-violet-500/30 to-cyan-500/30">
                  {p.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.image}
                      alt={p.title}
                      draggable={false}
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                  )}
                  {mainLink && (
                    <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                      <ArrowUpRight size={18} />
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold">
                    {mainLink ? (
                      <a
                        href={mainLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        draggable={false}
                        className="after:absolute after:inset-0 after:content-['']"
                      >
                        {p.title}
                      </a>
                    ) : (
                      p.title
                    )}
                  </h3>
                  <p className="mt-2 flex-1 text-sm opacity-70">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-cyan-500/10 px-2 py-1 text-xs text-cyan-700 dark:text-cyan-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.github && p.live && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      draggable={false}
                      className="relative z-10 mt-4 flex w-fit items-center gap-2 text-sm hover:text-violet-500"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Arrows */}
      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canPrev}
          aria-label="Previous project"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-500/40 transition enabled:hover:bg-violet-500/20 disabled:opacity-30"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canNext}
          aria-label="Next project"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-500/40 transition enabled:hover:bg-violet-500/20 disabled:opacity-30"
        >
          <ChevronRight />
        </button>
      </div>
    </Section>
  );
}
