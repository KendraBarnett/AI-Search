export default function TLDRBlock({ children }) {
  return (
    <aside className="tldr-summary key-answer bg-brand-accent-light border-l-4 border-brand-accent p-6 rounded-r-lg my-8" role="note" aria-label="Summary">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-dark mb-2">TL;DR</p>
      <p className="text-brand-dark leading-relaxed text-lg">{children}</p>
    </aside>
  )
}
