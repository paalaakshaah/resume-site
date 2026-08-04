import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="relative z-20 flex items-center justify-between px-6 py-6 sm:px-10">
      <Link
        to="/"
        className="text-sm font-semibold tracking-tight text-[var(--hero-text-h)]"
      >
        Palak Shah
      </Link>
      <div className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[var(--hero-text)]">
        <Link to="/" className="transition-colors hover:text-[var(--hero-text-h)]">
          Home
        </Link>
        <Link to="/podcast" className="transition-colors hover:text-[var(--hero-text-h)]">
          Podcast
        </Link>
        <Link to="/cv" className="transition-colors hover:text-[var(--hero-text-h)]">
          CV
        </Link>
      </div>
    </nav>
  );
}
