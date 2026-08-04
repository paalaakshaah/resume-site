import { profile } from "../data";
import StarField from "./StarField";
import headshot from "../assets/headshot.jpg";
import {
  GitHubIcon,
  LinkedInIcon,
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  DownloadIcon,
} from "./Icons";

const socials = [
  { label: "Email", href: `mailto:${profile.email}`, icon: EmailIcon, color: "#34a853" },
  { label: "Phone", href: `tel:${profile.phone.replace(/[^\d+]/g, "")}`, icon: PhoneIcon, color: "#fbbc05" },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedInIcon, color: "#4285f4" },
  { label: "GitHub", href: profile.github, icon: GitHubIcon, color: "#ea4335" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <StarField />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <div className="relative mb-6 h-28 w-28 rounded-full p-[3px]">
          <div
            className="h-full w-full rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, #4285f4, #34a853, #fbbc05, #ea4335, #4285f4)",
            }}
          >
            <div className="h-full w-full overflow-hidden rounded-full bg-[var(--bg)] m-[3px]">
              <img
                src={headshot}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-semibold tracking-tight text-[var(--text-h)] sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-lg text-[var(--text)]">{profile.title}</p>

        <div className="mt-2 flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
          <LocationIcon className="h-3.5 w-3.5" />
          <span>{profile.location}</span>
        </div>

        <p className="mt-6 max-w-xl text-balance text-sm leading-relaxed text-[var(--text)]">
          {profile.summary}
        </p>

        <div className="mt-8 flex items-center gap-4">
          {socials.map(({ label, href, icon: Icon, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text)] transition-colors duration-200"
              style={{ ["--hover-color" as string]: color }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = color;
                e.currentTarget.style.borderColor = color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "";
                e.currentTarget.style.borderColor = "";
              }}
            >
              <Icon className="h-4.5 w-4.5" />
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          download
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--text-h)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] transition-transform hover:scale-[1.03]"
        >
          <DownloadIcon className="h-4 w-4" />
          Download Resume
        </a>
      </div>
    </section>
  );
}
