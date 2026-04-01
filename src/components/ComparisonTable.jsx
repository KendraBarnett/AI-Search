export default function ComparisonTable({ headers, rows, caption }) {
  return (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse text-left">
        {caption && <caption className="text-lg font-semibold text-brand-black mb-4 text-left">{caption}</caption>}
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i} className="bg-brand-black text-white px-6 py-3 font-semibold text-sm uppercase tracking-wide first:rounded-tl-lg last:rounded-tr-lg">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {row.map((cell, j) => (
                <td key={j} className="px-6 py-4 border-b border-brand-light text-brand-dark first:font-semibold first:text-brand-black">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
