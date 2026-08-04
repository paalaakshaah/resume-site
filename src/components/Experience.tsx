import { experience } from "../data";
import { accentMap, accentOrder } from "../accentColors";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 pt-20">
      <h2 className="text-2xl font-semibold text-[var(--text-h)]">Experience</h2>

      <ol className="mt-10 space-y-8">
        {experience.map((item, i) => {
          const accent = accentMap[accentOrder[i % accentOrder.length]];
          const isLast = i === experience.length - 1;
          return (
            <li key={i} className="relative pl-20">
              {!isLast && (
                <span className="absolute left-7 top-14 bottom-[-3.75rem] w-px bg-[var(--border)]" />
              )}

              <div className="absolute left-0 top-0 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white ring-1 ring-[var(--border)] shadow-sm">
                <img src={item.logo} alt="" className="h-8 w-8 object-contain" />
              </div>

              <div className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5">
                <span className={`absolute inset-x-0 top-0 h-[3px] ${accent.bg}`} />
                <h3 className="text-base font-medium leading-tight text-[var(--text-h)]">
                  {item.title}
                </h3>
                <p className={`mt-0.5 text-xs font-medium ${accent.text}`}>{item.org}</p>
                <p className="mt-2 text-xs font-medium text-[var(--text-muted)]">{item.period}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text)]">{item.description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
