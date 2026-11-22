import { Section } from "@/components/ui/Section";
import { skills } from "@/data/portofolio";

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-black/10 bg-black/[0.03] p-6 dark:border-white/10 dark:bg-white/[0.04]"
          >
            <h3 className="mb-4 text-lg font-semibold">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-sm text-violet-700 dark:text-violet-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
