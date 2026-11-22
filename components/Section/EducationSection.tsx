import { GraduationCap } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { education } from "@/data/portofolio";

export function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="mx-auto max-w-3xl space-y-10 border-l-2 border-violet-500/40 pl-8">
        {education.map((e) => (
          <div key={e.degree} className="relative">
            <span className="absolute -left-[3.15rem] flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 text-white">
              <GraduationCap size={20} />
            </span>

            <p className="text-sm text-cyan-600 dark:text-cyan-400">
              {e.period}
            </p>
            <h3 className="mt-1 text-xl font-semibold">{e.degree}</h3>
            <p className="opacity-80">{e.school}</p>
            <p className="mt-3 text-sm leading-relaxed opacity-70">
              {e.details}
            </p>

            {e.highlights && (
              <div className="mt-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide opacity-60">
                  Key Learnings
                </p>
                <ul className="space-y-2">
                  {e.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-3 text-sm leading-relaxed opacity-75"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {e.tags && (
              <div className="mt-5 flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-700 dark:text-violet-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
