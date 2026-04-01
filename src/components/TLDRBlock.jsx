export default function TLDRBlock({ children }) {
  return (
    <aside className="tldr-summary key-answer bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg my-8" role="note" aria-label="Summary">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal-800 mb-2">TL;DR</p>
      <p className="text-gray-800 leading-relaxed text-lg">{children}</p>
    </aside>
  )
}
