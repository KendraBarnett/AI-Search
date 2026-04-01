import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/traditional-search', label: 'Traditional Search' },
  { path: '/ai-search', label: 'AI Search' },
  { path: '/comparison', label: 'Comparison' },
  { path: '/landscape-shift', label: 'Landscape Shift' },
  { path: '/seo-vs-aio', label: 'SEO vs AIO' },
  { path: '/ctr-crisis', label: 'CTR Crisis' },
  { path: '/case-study', label: 'Case Study' },
  { path: '/brand-strategy', label: 'Brand Strategy' },
  { path: '/glossary', label: 'Glossary' },
]

export default function Layout({ children }) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-gray-900">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-lg font-bold text-teal-800 no-underline whitespace-nowrap">
              Search vs AI Search
            </Link>
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            <nav className="hidden lg:block" aria-label="Main navigation">
              <ul className="flex items-center gap-1">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`px-3 py-2 rounded-md text-sm font-medium no-underline transition-colors ${
                        location.pathname === item.path
                          ? 'bg-teal-100 text-teal-800'
                          : 'text-gray-600 hover:text-teal-700 hover:bg-teal-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        {menuOpen && (
          <nav className="lg:hidden border-t border-gray-200 bg-white" aria-label="Mobile navigation">
            <ul className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-sm font-medium no-underline ${
                      location.pathname === item.path
                        ? 'bg-teal-100 text-teal-800'
                        : 'text-gray-600 hover:text-teal-700 hover:bg-teal-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-gray-800 text-gray-300 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-3">Traditional Search vs AI Search</h3>
              <p className="text-sm">A comprehensive resource on how AI search is reshaping brand discovery, with data on CTR impact, conversion rates, and optimization strategies.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Key Topics</h3>
              <ul className="space-y-1 text-sm">
                <li><Link to="/ai-search" className="hover:text-white no-underline text-gray-300">How AI Search Works</Link></li>
                <li><Link to="/ctr-crisis" className="hover:text-white no-underline text-gray-300">The CTR Crisis</Link></li>
                <li><Link to="/seo-vs-aio" className="hover:text-white no-underline text-gray-300">SEO vs AIO</Link></li>
                <li><Link to="/brand-strategy" className="hover:text-white no-underline text-gray-300">Brand Strategy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Resources</h3>
              <ul className="space-y-1 text-sm">
                <li><Link to="/glossary" className="hover:text-white no-underline text-gray-300">Glossary</Link></li>
                <li><Link to="/comparison" className="hover:text-white no-underline text-gray-300">Side-by-Side Comparison</Link></li>
                <li><Link to="/case-study" className="hover:text-white no-underline text-gray-300">Case Study</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
            <p>Content based on research from Seer Interactive, Semrush, Passionfruit, and other industry sources.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
