import { useState } from "react";
import { experience, type ExperienceHighlight } from "../data";
import { accentMap, accentOrder, type Accent } from "../accentColors";
import { ChevronDownIcon } from "./Icons";

function HighlightRow({ highlight, accent }: { highlight: ExperienceHighlight; accent: Accent }) {
  const [open, setOpen] = useState(false);
  const colors = accentMap[accent];

  return (
    <div className="py-3 first:pt-0 last:pb-0">
      <div className="flex items-baseline justify-between gap-3">
        <h4 className="text-sm font-medium text-[var(--text-h)]">{highlight.title}</h4>
        <p className="shrink-0 text-xs font-medium text-[var(--text-muted)]">{highlight.period}</p>
      </div>
      <p className="mt-1 text-sm leading-relaxed text-[var(--text)]">{highlight.summary}</p>

      {highlight.detail.length > 0 && (
        <>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className={`mt-1.5 inline-flex items-center gap-1 text-xs font-medium ${colors.text}`}
          >
            {open ? "Show less" : "Learn more"}
            <ChevronDownIcon
              className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open && (
            <ul className="mt-2 space-y-1.5">
              {highlight.detail.map((d, i) => (
                <li key={i} className="flex gap-2 text-xs leading-relaxed text-[var(--text-muted)]">
                  <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${colors.bg}`} />
                  {d}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 pt-20">
      <h2 className="text-2xl font-semibold text-[var(--text-h)]">Experience</h2>

      <ol className="mt-10 space-y-8">
        {experience.map((item, i) => {
          const accent = accentOrder[i % accentOrder.length];
          const colors = accentMap[accent];
          const isLast = i === experience.length - 1;
          const showCardPeriod = item.highlights.length > 1;

          return (
            <li key={i} className="relative pl-20">
              {!isLast && (
                <span className="absolute left-7 top-14 bottom-[-3.75rem] w-px bg-[var(--border)]" />
              )}

              <div className="absolute left-0 top-0 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white ring-1 ring-[var(--border)] shadow-sm">
                <img src={item.logo} alt="" className="h-8 w-8 object-contain" />
              </div>

              <div className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5">
                <span className={`absolute inset-x-0 top-0 h-[3px] ${colors.bg}`} />
                <h3 className="text-base font-medium leading-tight text-[var(--text-h)]">
                  {item.title}
                </h3>
                <div className="mt-0.5 flex items-baseline gap-2">
                  <p className={`text-xs font-medium ${colors.text}`}>{item.org}</p>
                  {showCardPeriod && (
                    <>
                      <span className="text-xs text-[var(--text-muted)]">·</span>
                      <p className="text-xs font-medium text-[var(--text-muted)]">{item.period}</p>
                    </>
                  )}
                </div>

                <div className="mt-3 divide-y divide-[var(--border)]">
                  {item.highlights.map((highlight, j) => (
                    <HighlightRow key={j} highlight={highlight} accent={accent} />
                  ))}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
