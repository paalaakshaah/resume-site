import { experience } from "../data";
import { accentMap, accentOrder } from "../accentColors";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 pt-20">
      <h2 className="text-2xl font-semibold text-[var(--text-h)]">Experience</h2>

      <ol className="relative mt-10 border-l border-[var(--border)] pl-8">
        {experience.map((item, i) => {
          const accent = accentMap[accentOrder[i % accentOrder.length]];
          return (
            <li key={i} className="relative pb-10 last:pb-0">
              <span
                className={`absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full ${accent.bg}`}
              />
              <p className="text-xs font-medium text-[var(--text-muted)]">{item.period}</p>
              <h3 className="mt-1 text-base font-medium text-[var(--text-h)]">{item.title}</h3>
              <p className={`mt-0.5 text-sm font-medium ${accent.text}`}>{item.org}</p>
              {item.description && (
                <p className="mt-2 text-sm leading-relaxed text-[var(--text)]">{item.description}</p>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
