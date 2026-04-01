import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import SchemaMarkup from '../components/SchemaMarkup'
import TLDRBlock from '../components/TLDRBlock'
import FAQSection from '../components/FAQSection'
import ComparisonTable from '../components/ComparisonTable'
import Breadcrumbs from '../components/Breadcrumbs'
import DateStamp from '../components/DateStamp'
import StatCard from '../components/StatCard'
import { createArticleSchema, createFAQSchema, createBreadcrumbSchema, createSpeakableSchema } from '../data/schema'

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Comparison', path: '/comparison' },
]

const faqs = [
  {
    question: 'Do Google rankings help with AI search visibility?',
    answer: 'Google rankings provide limited help with AI search visibility. While 92.36% of Google AI Overview responses link to at least one top-10 organic result, 80% of sources cited in AI search don\'t appear in Google\'s traditional top results. Approximately 90% of ChatGPT-cited pages rank position 21+ in Google. Ranking well in traditional search is necessary but not sufficient for AI search visibility.',
  },
  {
    question: 'Are AI search and traditional search the same discovery system?',
    answer: 'No. Traditional search and AI search are fundamentally different discovery systems. Traditional search matches keywords and returns ranked links. AI search understands semantic intent and generates synthesized answers with citations. 86% of top-mentioned sources are NOT shared across ChatGPT, Perplexity, and Google AI features. Winning in one system does not guarantee visibility in the other.',
  },
  {
    question: 'What percentage of AI-cited sources appear in Google\'s top results?',
    answer: 'Only 12% of AI-cited sources match Google\'s top 10 organic results (Passionfruit, 2025). 80% of sources cited in AI search don\'t appear in Google\'s traditional top results at all. Approximately 90% of ChatGPT-cited pages rank position 21+ in Google (Semrush, 2025). This demonstrates that AI search has a fundamentally different source selection model than traditional search.',
  },
]

export default function Comparison() {
  return (
    <article>
      <SEOHead
        title="Traditional Search vs AI Search: Key Technical Distinctions in Query Processing, Source Selection, and User Behavior"
        description="Side-by-side comparison of traditional search and AI search across 6 dimensions — query processing, results format, source selection, personalization, user action, and content format preferences."
        path="/comparison"
      />
      <SchemaMarkup schemas={[
        createArticleSchema({
          title: 'Traditional Search vs AI Search: Key Technical Distinctions',
          description: 'Side-by-side comparison of traditional search and AI search across 6 dimensions.',
          path: '/comparison',
          datePublished: '2025-11-15',
          dateModified: '2026-03-28',
        }),
        createFAQSchema(faqs),
        createBreadcrumbSchema(breadcrumbs),
        createSpeakableSchema('/comparison'),
      ]} />

      <Breadcrumbs items={breadcrumbs} />
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">Traditional Search vs AI Search Comparison</h1>
        <DateStamp published="2025-11-15" modified="2026-03-28" />
      </header>

      <TLDRBlock>
        Traditional search and AI search are fundamentally different discovery systems. 80% of AI-cited sources don't appear in Google's top results, and 86% of top sources aren't shared across AI platforms. Winning in traditional search does not guarantee visibility in AI search.
      </TLDRBlock>

      <ComparisonTable
        caption="Key Differences Between Traditional Search and AI Search"
        headers={['Dimension', 'Traditional Search', 'AI Search']}
        rows={[
          ['Query processing', 'Keyword matching', 'Semantic intent understanding'],
          ['Results format', 'Ranked list of links', 'Synthesized answer + citations'],
          ['Source selection', 'PageRank + 200+ signals', 'Authority, clarity, structure, entities'],
          ['Personalization', 'Limited (location, history)', 'Conversational context & memory'],
          ['User action', 'Click → browse → find answer', 'Read answer → maybe click citation'],
          ['Content format preference', 'Long-form comprehensive pages', 'Concise, well-structured passages'],
        ]}
      />

      <section className="my-10">
        <h2 className="text-2xl font-bold text-brand-black mb-4">The Source Selection Gap</h2>
        <p className="text-brand-dark leading-relaxed mb-6 key-answer">Research from Passionfruit (2025) and Semrush (2025) reveals a stark disconnect between traditional search rankings and AI search citations. The sources AI platforms cite are largely independent of Google's ranking signals.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
          <StatCard value="80%" label="AI Sources Not in Google Top Results" description="Sources cited in AI search don't appear in Google's traditional top results" source="Passionfruit, 2025" variant="neutral" />
          <StatCard value="12%" label="Match Google's Top 10" description="Only 12% of AI-cited sources match Google's top 10 organic results" source="Passionfruit, 2025" variant="neutral" />
          <StatCard value="86%" label="Sources Not Shared" description="Top-mentioned sources are NOT shared across ChatGPT, Perplexity, and Google AI features" source="Passionfruit, 2025" variant="neutral" />
          <StatCard value="~90%" label="ChatGPT Cites Position 21+" description="ChatGPT-cited pages rank position 21+ in Google" source="Semrush, 2025" variant="neutral" />
        </div>

        <p className="text-brand-dark leading-relaxed">Only <strong>11% of domains</strong> are cited by both ChatGPT and Perplexity (Passionfruit, 2025). This means brands cannot rely on a single AI optimization strategy — each platform has distinct citation preferences and retrieval mechanisms.</p>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-bold text-brand-black mb-4">The Strategic Tension</h2>
        <p className="text-brand-dark leading-relaxed mb-4 key-answer"><Link to="/seo-vs-aio" className="text-brand-black underline">SEO</Link> rewards long-form comprehensive content; <Link to="/seo-vs-aio" className="text-brand-black underline">AIO</Link> rewards concise extractable answers. These are competing demands for content teams.</p>
        <p className="text-brand-dark leading-relaxed">The solution is comprehensive content with TL;DR summaries and FAQ schema that serve both systems — long-form depth for traditional search ranking, plus extraction-ready passages for AI citation. See the <Link to="/case-study" className="text-brand-black underline">AcmeCRM case study</Link> for how this dual strategy works in practice.</p>
      </section>

      <FAQSection faqs={faqs} />
    </article>
  )
}
