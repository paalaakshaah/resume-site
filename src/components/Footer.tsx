import { profile } from "../data";
import StarField from "./StarField";
import { GitHubIcon, LinkedInIcon, EmailIcon, DownloadIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--hero-border)] bg-[var(--hero-bg)]">
      <div className="pointer-events-none absolute inset-0">
        <StarField />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-16 text-center">
        <p className="text-sm text-[var(--hero-text)]">
          {profile.email} · {profile.phone} · {profile.location}
        </p>

        <div className="flex items-center gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--hero-border)] bg-[var(--hero-bg-elevated)] text-[var(--hero-text)] transition-colors hover:border-[#4285f4] hover:text-[#4285f4]"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--hero-border)] bg-[var(--hero-bg-elevated)] text-[var(--hero-text)] transition-colors hover:border-[#ea4335] hover:text-[#ea4335]"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--hero-border)] bg-[var(--hero-bg-elevated)] text-[var(--hero-text)] transition-colors hover:border-[#34a853] hover:text-[#34a853]"
          >
            <EmailIcon className="h-4 w-4" />
          </a>
        </div>

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full border border-[var(--hero-border)] bg-[var(--hero-bg-elevated)] px-4 py-2 text-xs font-medium text-[var(--hero-text)] transition-colors hover:border-[var(--hero-text-muted)] hover:text-[var(--hero-text-h)]"
        >
          <DownloadIcon className="h-3.5 w-3.5" />
          Download Resume
        </a>

        <p className="text-xs text-[var(--hero-text-muted)]">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
