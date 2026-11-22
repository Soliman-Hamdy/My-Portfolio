import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Section } from "@/components/ui/Section";
import { contact } from "@/data/portofolio";

const info = [
  { icon: MapPin, label: "Location", value: contact.location, href: undefined },
  {
    icon: Phone,
    label: "Phone",
    value: contact.phone,
    href: `tel:+2${contact.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
];

const socials = [
  { icon: FaLinkedin, label: "LinkedIn", href: contact.linkedin },
  { icon: FaGithub, label: "GitHub", href: contact.github },
];

export function ContactSection() {
  return (
    <Section id="contact" title="Contact">
      <p className="mx-auto mb-10 max-w-xl text-center opacity-70">
        Have a project or an opportunity in mind? Feel free to reach out.
      </p>

      <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-3">
        {info.map(({ icon: Icon, label, value, href }) => {
          const content = (
            <>
              <Icon className="mb-3 text-violet-500" size={24} />
              <p className="text-xs uppercase opacity-60">{label}</p>
              <p className="mt-1 whitespace-nowrap text-sm font-medium">
                {value}
              </p>
            </>
          );
          const cls =
            "flex flex-col items-center rounded-2xl border border-black/10 bg-black/[0.03] p-6 text-center dark:border-white/10 dark:bg-white/[0.04]";
          return href ? (
            <a
              key={label}
              href={href}
              className={`${cls} transition hover:border-violet-500/50`}
            >
              {content}
            </a>
          ) : (
            <div key={label} className={cls}>
              {content}
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center gap-4">
        {socials.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-violet-500/40 text-xl transition hover:scale-110 hover:bg-gradient-to-br hover:from-violet-500 hover:to-cyan-500 hover:text-white"
          >
            <Icon />
          </a>
        ))}
      </div>
    </Section>
  );
}
