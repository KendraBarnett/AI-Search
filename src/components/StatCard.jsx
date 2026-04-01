export default function StatCard({ value, label, description, source, variant = 'default' }) {
  const colors = {
    default: 'border-brand-accent bg-brand-accent-light',
    negative: 'border-brand-black bg-gray-100',
    positive: 'border-brand-accent bg-brand-accent-light',
    neutral: 'border-brand-mid bg-gray-50',
  }

  return (
    <figure className={`border-l-4 ${colors[variant]} p-6 rounded-r-lg`}>
      <p className="text-4xl font-bold text-brand-black mb-1">{value}</p>
      <p className="text-lg font-semibold text-brand-dark mb-2">{label}</p>
      {description && <p className="text-brand-mid mb-2">{description}</p>}
      {source && (
        <figcaption className="text-sm text-brand-mid italic">
          Source: {source}
        </figcaption>
      )}
    </figure>
  )
}
