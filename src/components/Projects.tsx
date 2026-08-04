import { useState } from "react";
import { projects, type Project } from "../data";
import { accentMap } from "../accentColors";
import { GitHubIcon, ChevronDownIcon } from "./Icons";

function ProjectCard({ project }: { project: Project }) {
  const accent = accentMap[project.accent];
  const collapsible = project.bullets.length > 0;
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5 transition-colors ${
        project.placeholder ? "opacity-60" : "hover:border-[var(--text-muted)]"
      }`}
    >
      <span className={`absolute inset-x-0 top-0 h-[3px] ${accent.bg}`} />
      <h3 className="text-base font-medium text-[var(--text-h)]">{project.title}</h3>
      <p className={`mt-1 text-xs font-medium ${accent.text}`}>{project.period}</p>
      <p className="mt-3 text-sm leading-relaxed text-[var(--text)]">{project.blurb}</p>

      {collapsible && (
        <>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className={`mt-3 inline-flex items-center gap-1 text-xs font-medium ${accent.text}`}
          >
            {open ? "Show less" : "Learn more"}
            <ChevronDownIcon
              className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open && (
            <ul className="mt-3 space-y-1.5">
              {project.bullets.map((b, j) => (
                <li key={j} className="flex gap-2 text-xs leading-relaxed text-[var(--text-muted)]">
                  <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${accent.bg}`} />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </>
      )}

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className={`mt-4 inline-flex items-center gap-1.5 text-xs font-medium ${accent.text}`}
        >
          <GitHubIcon className="h-3.5 w-3.5" />
          View on GitHub
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-2xl font-semibold text-[var(--text-h)]">Projects</h2>
      <p className="mt-2 text-sm text-[var(--text-muted)]">
        A few things I've built on the side.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}
