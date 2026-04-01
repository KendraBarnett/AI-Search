import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import SchemaMarkup from '../components/SchemaMarkup'
import TLDRBlock from '../components/TLDRBlock'
import ComparisonTable from '../components/ComparisonTable'
import Breadcrumbs from '../components/Breadcrumbs'
import DateStamp from '../components/DateStamp'
import { createArticleSchema, createBreadcrumbSchema, createSpeakableSchema } from '../data/schema'

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Case Study', path: '/case-study' },
]

export default function CaseStudy() {
  return (
    <article>
      <SEOHead
        title="AI Optimization Case Study: How AIO Increases Conversions 9% Despite 56% SERP Traffic Loss"
        description="Hypothetical model of a mid-market B2B SaaS company showing how combining SEO and AIO strategies produces 9% more conversions despite losing 56% of traditional search clicks."
        path="/case-study"
      />
      <SchemaMarkup schemas={[
        createArticleSchema({
          title: 'AI Optimization Case Study: How AIO Increases Conversions 9% Despite 56% SERP Traffic Loss',
          description: 'Hypothetical model showing how combining SEO and AIO strategies produces 9% more conversions despite losing 56% of traditional search clicks.',
          path: '/case-study',
          datePublished: '2025-11-15',
          dateModified: '2026-03-28',
        }),
        createBreadcrumbSchema(breadcrumbs),
        createSpeakableSchema('/case-study'),
      ]} />

      <Breadcrumbs items={breadcrumbs} />
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Case Study: AcmeCRM</h1>
        <p className="text-gray-600 italic">Hypothetical model based on industry data</p>
        <DateStamp published="2025-11-15" modified="2026-03-28" />
      </header>

      <TLDRBlock>
        A hypothetical mid-market B2B SaaS ranking #3 for "best CRM for small business" would lose 56% of SERP clicks as AI Overviews expand. With AIO investment, AI-referred traffic (converting at 8.9% vs 1.8% for SERP) produces a net 9% increase in conversions. Without AIO, the same company would face a 62% drop in total conversions.
      </TLDRBlock>

      <section className="my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Math Walkthrough</h2>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">SEO Only — 2024 Baseline</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex flex-wrap items-center justify-center gap-3 text-lg font-semibold text-gray-800 mb-4">
              <span>45K impressions</span><span aria-hidden="true">→</span>
              <span>8.2% CTR</span><span aria-hidden="true">→</span>
              <span>3,690 clicks</span><span aria-hidden="true">→</span>
              <span>2.1% conversion</span><span aria-hidden="true">→</span>
              <span className="text-teal-700">77 conversions</span>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">SEO + AIO — 2026 Projection</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-gray-700 leading-relaxed mb-4 key-answer">SERP clicks down to <strong>1,612</strong> (56% loss), BUT <strong>1,400 AI citations</strong> drive <strong>620 AI visits</strong> converting at <strong>8.9%</strong> = <strong>84 total conversions (+9%)</strong></p>
          </div>
        </section>
      </section>

      <ComparisonTable
        caption="AcmeCRM: SEO Only (2024) vs SEO + AIO (2026)"
        headers={['Metric', 'SEO Only 2024', 'SEO + AIO 2026']}
        rows={[
          ['SERP Impressions', '45,000', '45,000'],
          ['SERP CTR', '8.2%', '3.58%'],
          ['SERP Clicks', '3,690', '1,612'],
          ['SERP Conversion Rate', '2.1%', '1.8%'],
          ['SERP Conversions', '77', '29'],
          ['AI Citations', '—', '1,400'],
          ['AI Click-Through', '—', '620'],
          ['AI Conversion Rate', '—', '8.9%'],
          ['AI Conversions', '—', '55'],
          ['Total Conversions', '77', '84 (+9%)'],
        ]}
      />

      <section className="my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Counterfactual — What Happens Without AIO</h2>
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
          <p className="text-gray-800 leading-relaxed mb-4 key-answer"><strong>Without AIO:</strong> The same 56% SERP click loss occurs, but with no AI traffic to compensate. Total conversions drop from 77 to approximately <strong>29 — a 62% decline</strong>.</p>
          <p className="text-gray-700 leading-relaxed">The difference between investing in AIO and ignoring it is the difference between <strong>growing 9%</strong> and <strong>collapsing 62%</strong>. The SERP traffic decline happens regardless — the only question is whether AI-referred traffic fills the gap.</p>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why AI Traffic Converts Higher</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-teal-600 font-bold">1.</span>
            <span><strong>Users arrive pre-qualified</strong> — they've already compared options through the AI conversation before clicking</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-600 font-bold">2.</span>
            <span><strong>AI recommendation acts like word-of-mouth</strong> — being cited by an AI carries implicit endorsement</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-600 font-bold">3.</span>
            <span><strong>Higher purchase intent</strong> — AI visitors are deeper in the funnel when they arrive</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-600 font-bold">4.</span>
            <span><strong>Consistent with Semrush's finding</strong> — <Link to="/ctr-crisis" className="text-teal-700 underline">4.4x conversion rate</Link> across 500+ high-value topics</span>
          </li>
        </ul>
      </section>

      <p className="text-gray-600 my-8">
        For the underlying data behind this model, see <Link to="/ctr-crisis" className="text-teal-700 underline">the CTR crisis</Link>. For how to implement AIO strategy at your organization, read <Link to="/brand-strategy" className="text-teal-700 underline">what this means for brands</Link>.
      </p>
    </article>
  )
}
