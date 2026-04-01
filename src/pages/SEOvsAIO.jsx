import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import SchemaMarkup from '../components/SchemaMarkup'
import TLDRBlock from '../components/TLDRBlock'
import FAQSection from '../components/FAQSection'
import SourceLink from '../components/SourceLink'
import ComparisonTable from '../components/ComparisonTable'
import Breadcrumbs from '../components/Breadcrumbs'
import DateStamp from '../components/DateStamp'
import { createArticleSchema, createFAQSchema, createBreadcrumbSchema, createSpeakableSchema } from '../data/schema'

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'SEO vs AIO', path: '/seo-vs-aio' },
]

const faqs = [
  {
    question: 'What is AIO (AI Optimization)?',
    answer: 'AIO (AI Optimization) is the practice of optimizing content to be cited in AI-generated answers across platforms like ChatGPT, Perplexity, Google AI Overviews, and Gemini. AIO focuses on authority (brand search volume), structure (schema markup, TL;DR summaries), entity clarity (consistent brand definition), and directness (answer-first formatting). AIO is distinct from SEO, which focuses on ranking in traditional search results.',
  },
  {
    question: 'What is GEO (Generative Engine Optimization)?',
    answer: 'GEO (Generative Engine Optimization) is the broader discipline of optimizing content for all generative AI search platforms. It encompasses the strategies and techniques needed to ensure content is discoverable, citable, and accurately represented in AI-generated responses. GEO is often used interchangeably with AIO.',
  },
  {
    question: 'Is SEO still important in 2026?',
    answer: 'Yes, SEO remains critically important in 2026. SEO is the foundation — it gets your content crawled, indexed, and discoverable. However, SEO alone is no longer sufficient. With AI search capturing 12-15% of global search share and organic CTR dropping 61% on AI Overview queries, brands need both SEO and AIO. SEO without AIO means losing visibility to a growing segment of users; AIO without SEO means lacking the foundational discoverability AI systems depend on.',
  },
  {
    question: 'How do you measure AI search performance?',
    answer: 'AI search performance is measured through new metrics: citation frequency across AI platforms, share of voice in AI answers, brand mention rate in AI responses, source authority and citation quality, AI-referred conversion rate, and Share of Model (SOM) — the percentage of times cited for priority topics. Tools like Semrush AI Visibility, Ahrefs Brand Radar, and Passionfruit Labs enable this tracking. Only 16% of brands currently track these metrics systematically.',
  },
]

export default function SEOvsAIO() {
  return (
    <article>
      <SEOHead
        title="SEO vs AIO: The Optimization Divide — How Search Engine Optimization and AI Optimization Differ"
        description="SEO gets you ranked. AIO gets you cited. Comparison of goals, signals, style, metrics, and strategic approach between Search Engine Optimization and AI Optimization."
        path="/seo-vs-aio"
      />
      <SchemaMarkup schemas={[
        createArticleSchema({
          title: 'SEO vs AIO: The Optimization Divide',
          description: 'How Search Engine Optimization and AI Optimization differ in goals, signals, style, and metrics.',
          path: '/seo-vs-aio',
          datePublished: '2025-11-15',
          dateModified: '2026-03-28',
        }),
        createFAQSchema(faqs),
        createBreadcrumbSchema(breadcrumbs),
        createSpeakableSchema('/seo-vs-aio'),
      ]} />

      <Breadcrumbs items={breadcrumbs} />
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">SEO vs AIO: The Optimization Divide</h1>
        <DateStamp published="2025-11-15" modified="2026-03-28" />
      </header>

      <TLDRBlock>
        <dfn>SEO (Search Engine Optimization)</dfn> aims to rank in organic results using keywords, backlinks, and technical health. <dfn>AIO (AI Optimization)</dfn> aims to get cited in AI-generated answers using authority, structure, and entity clarity. Both are necessary — SEO is the foundation, AIO is the growth layer.
      </TLDRBlock>

      <ComparisonTable
        caption="SEO vs AIO: Complete Comparison"
        headers={['Attribute', 'SEO', 'AIO']}
        rows={[
          ['Goal', 'Rank in organic results', 'Get cited in AI-generated answers'],
          ['Primary signals', 'Keywords, backlinks, technical health', 'Authority, structure, entity clarity'],
          ['Content style', 'Keyword-optimized, comprehensive, link-worthy', 'Answer-first, extraction-ready, concise passages'],
          ['Authority signal', 'Backlinks and domain authority', 'Brand search volume (0.334 correlation)'],
          ['Success metric', 'Rankings, CTR, traffic, conversions', 'Citations, share of voice, AI-referred conversions'],
          ['Platform focus', 'Google SERPs', 'ChatGPT, Perplexity, AI Overviews, Gemini'],
          ['Content format', 'Long-form, comprehensive pages', 'TL;DR summaries, FAQ schema, structured passages'],
          ['Technical foundation', 'Site speed, mobile, crawl architecture', 'Schema markup, speakable, fast FCP (<0.4s)'],
        ]}
      />

      <section className="my-10">
        <h2 className="text-2xl font-bold text-brand-black mb-4">The Strategic Tension for Content Teams</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-brand-light rounded-lg p-6">
            <h3 className="text-lg font-semibold text-brand-dark mb-2">SEO Style</h3>
            <ul className="space-y-1 text-brand-dark list-disc list-inside">
              <li>Keyword-optimized</li>
              <li>Comprehensive and thorough</li>
              <li>Link-worthy (earns backlinks)</li>
              <li>Long-form depth</li>
            </ul>
          </div>
          <div className="bg-white border border-brand-light rounded-lg p-6">
            <h3 className="text-lg font-semibold text-brand-dark mb-2">AIO Style</h3>
            <ul className="space-y-1 text-brand-dark list-disc list-inside">
              <li>Answer-first formatting</li>
              <li>Extraction-ready passages</li>
              <li>Concise, well-structured</li>
              <li>Schema markup throughout</li>
            </ul>
          </div>
        </div>

        <p className="text-brand-dark leading-relaxed mb-4 key-answer">Only <strong>16% of brands</strong> systematically track AI search performance. A new tooling landscape is emerging: <SourceLink name="Semrush" /> AI Visibility, <SourceLink name="Ahrefs" /> Brand Radar, and <SourceLink name="Passionfruit" /> Labs now offer AI-specific tracking capabilities.</p>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-bold text-brand-black mb-4">New Metrics for AIO</h2>
        <ul className="space-y-3 text-brand-dark">
          <li className="flex items-start gap-3">
            <span className="text-brand-dark font-bold mt-1">1.</span>
            <span><strong><dfn>Citation frequency</dfn></strong> across AI platforms — how often your brand is referenced in AI-generated responses</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-dark font-bold mt-1">2.</span>
            <span><strong>Share of voice</strong> in AI answers — your visibility relative to competitors in AI responses</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-dark font-bold mt-1">3.</span>
            <span><strong>Brand mention rate</strong> in AI responses — frequency of brand mentions across platforms</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-dark font-bold mt-1">4.</span>
            <span><strong>Source authority / citation quality</strong> — the quality and context of your citations</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-dark font-bold mt-1">5.</span>
            <span><strong>AI-referred conversion rate</strong> — conversion rate of traffic arriving from AI platforms</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-dark font-bold mt-1">6.</span>
            <span><strong><dfn>Share of Model (SOM)</dfn></strong> — percentage of times cited for priority topics vs. competitors</span>
          </li>
        </ul>
      </section>

      <p className="text-brand-mid my-8">
        See the <Link to="/ctr-crisis" className="text-brand-black underline">CTR crisis data</Link> for why AIO matters now, or the <Link to="/case-study" className="text-brand-black underline">AcmeCRM case study</Link> for a concrete example of SEO + AIO strategy in action.
      </p>

      <FAQSection faqs={faqs} />
    </article>
  )
}
