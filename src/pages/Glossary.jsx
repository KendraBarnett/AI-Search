import SEOHead from '../components/SEOHead'
import SchemaMarkup from '../components/SchemaMarkup'
import TLDRBlock from '../components/TLDRBlock'
import Breadcrumbs from '../components/Breadcrumbs'
import DateStamp from '../components/DateStamp'
import { glossaryTerms } from '../data/glossary'
import { createArticleSchema, createBreadcrumbSchema, createSpeakableSchema, createDefinedTermSetSchema } from '../data/schema'

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Glossary', path: '/glossary' },
]

export default function Glossary() {
  return (
    <article>
      <SEOHead
        title="AI Search Glossary: Definitions of RAG, AIO, GEO, Entity Clarity, Citation Frequency, and More"
        description="Clear definitions of key AI search terms — Retrieval-Augmented Generation (RAG), AI Optimization (AIO), Generative Engine Optimization (GEO), Entity Clarity, Share of Model, Zero-Click Search, and more."
        path="/glossary"
      />
      <SchemaMarkup schemas={[
        createArticleSchema({
          title: 'AI Search Glossary',
          description: 'Definitions of key terms in AI search and AI optimization.',
          path: '/glossary',
          datePublished: '2025-11-15',
          dateModified: '2026-03-28',
        }),
        createBreadcrumbSchema(breadcrumbs),
        createSpeakableSchema('/glossary'),
        createDefinedTermSetSchema(glossaryTerms),
      ]} />

      <Breadcrumbs items={breadcrumbs} />
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">AI Search Glossary</h1>
        <DateStamp published="2025-11-15" modified="2026-03-28" />
      </header>

      <TLDRBlock>
        Key terms and definitions for understanding AI search, AI Optimization (AIO), and the shift from traditional SEO to AI-driven discovery. Each term is defined with precision to support consistent usage and AI citation readiness.
      </TLDRBlock>

      <dl className="space-y-6 my-10">
        {glossaryTerms.map((item, index) => (
          <div key={index} className="bg-white border border-brand-light rounded-lg p-6">
            <dt className="text-lg font-bold text-brand-black mb-2">
              <dfn>{item.term}</dfn>
            </dt>
            <dd className="text-brand-dark leading-relaxed key-answer">
              {item.definition}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  )
}
