import { skills } from "../data";
import { accentMap, accentOrder } from "../accentColors";

export default function Skills() {
  const groups = Object.entries(skills);
  return (
    <section id="skills" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="text-2xl font-semibold text-[var(--text-h)]">Skills</h2>

      <div className="mt-8 space-y-6">
        {groups.map(([group, items], gi) => (
          <div key={group}>
            <p className="text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">
              {group}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {items.map((item) => {
                const accent = accentMap[accentOrder[gi % accentOrder.length]];
                return (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-1 text-xs font-medium text-[var(--text)] transition-colors"
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = accent.hex)}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
