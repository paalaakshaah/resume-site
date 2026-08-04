import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="text-2xl font-semibold text-[var(--text-h)]">Education</h2>

      <div className="mt-8 divide-y divide-[var(--border)]">
        {education.map((item, i) => (
          <div key={i} className="flex flex-col gap-0.5 py-4 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <p className="text-base font-medium text-[var(--text-h)]">{item.degree}</p>
              <p className="text-sm text-[var(--text-muted)]">{item.school}</p>
            </div>
            <p className="text-sm text-[var(--text-muted)]">{item.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
