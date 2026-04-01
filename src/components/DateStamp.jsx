export default function DateStamp({ published, modified }) {
  return (
    <div className="flex flex-wrap gap-4 text-sm text-brand-mid my-4">
      <span>
        Published: <time dateTime={published}>{new Date(published).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
      </span>
      <span>
        Last updated: <time dateTime={modified}>{new Date(modified).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
      </span>
    </div>
  )
}
