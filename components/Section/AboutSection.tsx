import { Layers, Smartphone, Plug, GitBranch, MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { about } from "@/data/portofolio";

const icons = {
  layers: Layers,
  smartphone: Smartphone,
  plug: Plug,
  git: GitBranch,
} as const;

export function AboutSection() {
  return (
    <Section id="about" title="About Me">
      <div className="grid items-start gap-12 lg:grid-cols-5">
        {/* Text + stats */}
        <div className="lg:col-span-3">
          <div className="space-y-4 leading-relaxed opacity-80">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 px-4 py-1.5 text-sm">
            <MapPin size={16} className="text-cyan-500" />
            Alexandria, Egypt, open to relocate
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {about.stats.map((s) => (
              <div
                key={`${s.label}-${s.value}`}
                className="rounded-2xl border border-black/10 bg-black/[0.03] p-4 text-center dark:border-white/10 dark:bg-white/[0.04]"
              >
                <p className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs opacity-70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
          {about.highlights.map((h) => {
            const Icon = icons[h.icon as keyof typeof icons];
            return (
              <div
                key={h.title}
                className="flex gap-4 rounded-2xl border border-black/10 bg-black/[0.03] p-5 transition hover:border-violet-500/50 dark:border-white/10 dark:bg-white/[0.04]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-semibold">{h.title}</h3>
                  <p className="mt-1 text-sm opacity-70">{h.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
