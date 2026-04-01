import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import SchemaMarkup from '../components/SchemaMarkup'
import TLDRBlock from '../components/TLDRBlock'
import FAQSection from '../components/FAQSection'
import StatCard from '../components/StatCard'
import { createOrganizationSchema, createWebSiteSchema, createFAQSchema, createSpeakableSchema } from '../data/schema'

const faqs = [
  {
    question: 'What is the difference between traditional search and AI search?',
    answer: 'Traditional search uses a crawl-index-rank-display model to return a ranked list of links based on keywords, backlinks, and 200+ ranking signals. AI search uses an interpret-retrieve-synthesize-generate model powered by Retrieval-Augmented Generation (RAG) to deliver direct answers with citations. 80% of AI-cited sources don\'t appear in Google\'s traditional top results.',
  },
  {
    question: 'What is AIO (AI Optimization)?',
    answer: 'AIO (AI Optimization) is the practice of optimizing content to be cited in AI-generated answers across platforms like ChatGPT, Perplexity, Google AI Overviews, and Gemini. AIO focuses on authority, entity clarity, structured content, and extraction-ready formatting rather than traditional keyword optimization.',
  },
  {
    question: 'Is SEO dead?',
    answer: 'SEO is not dead — it remains the foundation of digital discovery. However, SEO alone is no longer sufficient. With organic CTR dropping 61% on queries with AI Overviews, brands must now optimize for both traditional search (SEO) and AI search (AIO) to maintain visibility. SEO gets you crawled and indexed; AIO gets you cited.',
  },
  {
    question: 'How do brands get cited in AI answers?',
    answer: 'Brands get cited in AI answers through high brand authority (search volume is the #1 predictor, 0.334 correlation), structured content with schema markup (FAQ, HowTo, Organization), entity clarity across all digital surfaces, concise answer-first content formatting, and presence on trust platforms like G2, Trustpilot, and Reddit.',
  },
  {
    question: 'What is the CTR impact of AI Overviews?',
    answer: 'According to Seer Interactive\'s 15-month study of 3,119 queries across 42 organizations, AI Overviews cause a 61% drop in organic CTR and 68% drop in paid CTR. However, brands cited in AI Overviews see 35% higher organic CTR and 91% higher paid CTR. Google AI Mode has a 93% zero-click rate.',
  },
]

export default function Home() {
  return (
    <article>
      <SEOHead
        title="Traditional Search vs AI Search: Why Rankings Alone No Longer Predict Revenue"
        description="Comprehensive analysis of how AI search is reshaping brand discovery. Data from Seer Interactive, Semrush, and Passionfruit on CTR impact, conversion rates, and AI optimization strategies."
        path="/"
      />
      <SchemaMarkup schemas={[
        createOrganizationSchema(),
        createWebSiteSchema(),
        createFAQSchema(faqs),
        createSpeakableSchema('/'),
      ]} />

      <header className="text-center py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Why Rankings Alone No Longer Predict Revenue
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A comprehensive analysis of how AI search is reshaping brand discovery — and what it means for your strategy.
        </p>
      </header>

      <TLDRBlock>
        AI search is fundamentally changing how brands get discovered. Organic CTR has dropped 61% on queries with AI Overviews, but brands cited in AI answers see 35% higher click-through rates and AI search visitors convert at 4.4x the rate of traditional organic traffic. Rankings still matter — but citation is the new currency.
      </TLDRBlock>

      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">The Data at a Glance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <StatCard value="-61%" label="Organic CTR Drop" description="On queries with AI Overviews" source="Seer Interactive, 2025" variant="negative" />
          <StatCard value="4.4x" label="Higher Conversion Rate" description="AI search visitors vs traditional organic" source="Semrush, June 2025" variant="positive" />
          <StatCard value="37%" label="Start with AI Tools" description="Consumers now begin searches with AI" source="Eight Oh Two, January 2026" variant="neutral" />
          <StatCard value="93%" label="Zero-Click Rate" description="In Google AI Mode" source="Semrush, September 2025" variant="negative" />
        </div>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore the Research</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { path: '/traditional-search', title: 'How Traditional Search Works', desc: 'The crawl-index-rank-display model, SEO strategies, and the HubSpot case study.' },
            { path: '/ai-search', title: 'How AI Search Works', desc: 'RAG architecture, vector embeddings, and platform-specific retrieval differences.' },
            { path: '/comparison', title: 'Traditional vs AI Search', desc: 'Side-by-side comparison across 6 key dimensions.' },
            { path: '/landscape-shift', title: 'The Landscape Shift', desc: 'Market data on AI search adoption and Google\'s declining share.' },
            { path: '/seo-vs-aio', title: 'SEO vs AIO', desc: 'The optimization divide — goals, signals, style, and metrics.' },
            { path: '/ctr-crisis', title: 'The CTR Crisis', desc: 'Seer Interactive data on CTR impact and the zero-click reality.' },
            { path: '/case-study', title: 'Case Study: AcmeCRM', desc: 'How SEO + AIO strategy increases conversions despite SERP traffic loss.' },
            { path: '/brand-strategy', title: 'Brand Strategy', desc: 'The tri-modal ecosystem and new KPIs for the AI era.' },
            { path: '/glossary', title: 'Glossary', desc: 'Definitions of RAG, AIO, GEO, Entity Clarity, and more.' },
          ].map((item) => (
            <Link key={item.path} to={item.path} className="block p-6 border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-md transition-all no-underline group bg-white">
              <h3 className="text-lg font-semibold text-teal-800 group-hover:text-teal-600 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </article>
  )
}
