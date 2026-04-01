export default function StatCard({ value, label, description, source, variant = 'default' }) {
  const colors = {
    default: 'border-teal-600 bg-teal-50',
    negative: 'border-red-500 bg-red-50',
    positive: 'border-emerald-500 bg-emerald-50',
    neutral: 'border-amber-500 bg-amber-50',
  }

  return (
    <figure className={`border-l-4 ${colors[variant]} p-6 rounded-r-lg`}>
      <p className="text-4xl font-bold text-gray-900 mb-1">{value}</p>
      <p className="text-lg font-semibold text-gray-800 mb-2">{label}</p>
      {description && <p className="text-gray-600 mb-2">{description}</p>}
      {source && (
        <figcaption className="text-sm text-gray-500 italic">
          Source: {source}
        </figcaption>
      )}
    </figure>
  )
}
