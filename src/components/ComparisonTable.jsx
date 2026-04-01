export default function ComparisonTable({ headers, rows, caption }) {
  return (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse text-left">
        {caption && <caption className="text-lg font-semibold text-gray-900 mb-4 text-left">{caption}</caption>}
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i} className="bg-gray-800 text-white px-6 py-3 font-semibold text-sm uppercase tracking-wide first:rounded-tl-lg last:rounded-tr-lg">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {row.map((cell, j) => (
                <td key={j} className="px-6 py-4 border-b border-gray-200 text-gray-700 first:font-semibold first:text-gray-900">
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
