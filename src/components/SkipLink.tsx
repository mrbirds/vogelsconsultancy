export function SkipLink({ label }: { label: string }) {
  return (
    <a
      href="#main-content"
      className="skip-link rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
    >
      {label}
    </a>
  );
}
