import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently in the middle of the screen.
 * Ids that don't exist on the page yet are ignored.
 */
export default function useScrollSpy(ids: string[]): string {
  const [activeId, setActiveId] = useState("");
  const key = ids.join(",");

  useEffect(() => {
    const elements = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return activeId;
}
