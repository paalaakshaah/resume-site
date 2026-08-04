import { cvUrl } from "../data";
import cvImage from "../assets/cv.png";
import Nav from "./Nav";
import { DownloadIcon } from "./Icons";

export default function CVPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <div className="border-b border-[var(--hero-border)] bg-[var(--hero-bg)]">
        <Nav />
      </div>

      <div className="mx-auto max-w-3xl px-6 py-10">
        <img
          src={cvImage}
          alt="Palak Shah — CV"
          className="w-full rounded-lg border border-[var(--border)] shadow-sm"
        />

        <div className="mt-6 flex justify-center">
          <a
            href={cvUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--text-h)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] transition-transform hover:scale-[1.03]"
          >
            <DownloadIcon className="h-4 w-4" />
            Open PDF
          </a>
        </div>
      </div>
    </div>
  );
}
