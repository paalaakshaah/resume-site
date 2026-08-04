import { podcast } from "../data";
import Nav from "./Nav";
import Footer from "./Footer";
import { SpotifyIcon, MusicNoteIcon, PodcastIcon } from "./Icons";

const platforms = [
  {
    label: "Spotify",
    href: podcast.spotify,
    icon: SpotifyIcon,
    bg: "#1DB954",
  },
  {
    label: "Apple Podcasts",
    href: podcast.apple,
    icon: PodcastIcon,
    bg: "#A855F7",
  },
  {
    label: "Amazon Music",
    href: podcast.amazon,
    icon: MusicNoteIcon,
    bg: "#00A8E1",
  },
];

export default function PodcastPage() {
  return (
    <>
      <section className="relative border-b border-[var(--hero-border)]">
        <Nav />

        <div className="relative mx-auto flex max-w-2xl flex-col items-center px-6 pb-24 pt-4 text-center sm:pb-32">
          <img
            src={podcast.cover}
            alt={podcast.title}
            className="h-40 w-40 rounded-2xl object-cover shadow-lg ring-1 ring-[var(--hero-border)] sm:h-48 sm:w-48"
          />

          <h1 className="mt-8 text-3xl font-semibold tracking-tight text-[var(--hero-text-h)] sm:text-4xl">
            {podcast.title}
          </h1>

          <p className="mt-4 max-w-xl text-balance text-sm leading-relaxed text-[var(--hero-text)]">
            {podcast.description}
          </p>

          <p className="mt-6 text-sm text-[var(--hero-text-muted)]">Listen on</p>

          <div className="mt-4 flex flex-col items-stretch gap-3 sm:flex-row">
            {platforms.map(({ label, href, icon: Icon, bg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
                style={{ backgroundColor: bg }}
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
