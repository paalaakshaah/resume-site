import StarField from "./StarField";

export default function BackgroundLayer() {
  return (
    <div className="fixed inset-0 bg-[var(--hero-bg)]" aria-hidden="true">
      <StarField />
    </div>
  );
}
