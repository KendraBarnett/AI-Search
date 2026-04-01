import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TraditionalSearch from './pages/TraditionalSearch'
import AISearch from './pages/AISearch'
import Comparison from './pages/Comparison'
import LandscapeShift from './pages/LandscapeShift'
import SEOvsAIO from './pages/SEOvsAIO'
import CTRCrisis from './pages/CTRCrisis'
import CaseStudy from './pages/CaseStudy'
import BrandStrategy from './pages/BrandStrategy'
import Glossary from './pages/Glossary'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/traditional-search" element={<TraditionalSearch />} />
          <Route path="/ai-search" element={<AISearch />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/landscape-shift" element={<LandscapeShift />} />
          <Route path="/seo-vs-aio" element={<SEOvsAIO />} />
          <Route path="/ctr-crisis" element={<CTRCrisis />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/brand-strategy" element={<BrandStrategy />} />
          <Route path="/glossary" element={<Glossary />} />
        </Routes>
      </Layout>
    </>
  )
}
