import { Link } from 'react-router-dom'

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2" aria-hidden="true">/</span>}
            {index === items.length - 1 ? (
              <span className="text-gray-900 font-medium" aria-current="page">{item.name}</span>
            ) : (
              <Link to={item.path} className="hover:text-teal-700 underline">{item.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
