import { getSourceUrl } from '../data/sources'

export default function SourceLink({ name, url }) {
  const resolvedUrl = url || getSourceUrl(name)
  if (!resolvedUrl) return name
  return (
    <a href={resolvedUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-black">
      {name}
    </a>
  )
}
