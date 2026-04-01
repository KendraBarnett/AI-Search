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
  { name: 'Brand Strategy', path: '/brand-strategy' },
]

const faqs = [
  {
    question: 'What is the tri-modal search ecosystem?',
    answer: 'The tri-modal ecosystem describes the three discovery layers brands must now optimize across: (1) Traditional Search — navigation via blue links, requiring SEO to get crawled and indexed; (2) AI Overviews — Google\'s summarization layer, requiring AIO to unlock visibility and citations; (3) AI Mode / Standalone AI — complex reasoning platforms like ChatGPT, Perplexity, and Claude, requiring GEO to protect brand accuracy.',
  },
  {
    question: 'What new KPIs should brands track for AI search?',
    answer: 'Brands should track citation frequency across AI platforms (replacing keyword rankings), share of voice in AI answers (replacing organic CTR), brand mention rate in AI responses (replacing pageviews), source authority and citation quality (replacing backlink count), and AI-referred conversion rate (replacing bounce rate). Tools like Semrush AI Visibility, Ahrefs Brand Radar, and Passionfruit Labs enable this tracking.',
  },
  {
    question: 'How do brands get started with AI optimization?',
    answer: 'Start by auditing current AI visibility — run your top 50 queries through ChatGPT, Perplexity, and Google AI Overviews. Then implement structured data (FAQ, HowTo, Organization, speakable schema), reformat content with TL;DR summaries and answer-first passages, set up tracking with AI-specific tools, and monitor by platform since optimization strategies differ across ChatGPT, Perplexity, and Google AI Overviews.',
  },
]

export default function BrandStrategy() {
  return (
    <article>
      <SEOHead
        title="What AI Search Means for Brands: The Tri-Modal Ecosystem and New KPIs for 2026"
        description="Brands must now optimize across three discovery layers: traditional search, AI Overviews, and standalone AI platforms. New KPIs include citation frequency, share of voice in AI answers, and AI-referred conversion rate."
        path="/brand-strategy"
      />
      <SchemaMarkup schemas={[
        createArticleSchema({
          title: 'What AI Search Means for Brands: The Tri-Modal Ecosystem and New KPIs',
          description: 'Strategic guide for brands navigating the tri-modal search ecosystem with new KPIs for AI search.',
          path: '/brand-strategy',
          datePublished: '2025-11-15',
          dateModified: '2026-03-28',
        }),
        createFAQSchema(faqs),
        createBreadcrumbSchema(breadcrumbs),
        createSpeakableSchema('/brand-strategy'),
      ]} />

      <Breadcrumbs items={breadcrumbs} />
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">What This Means for Brands</h1>
        <DateStamp published="2025-11-15" modified="2026-03-28" />
      </header>

      <TLDRBlock>
        Brands now operate in a tri-modal ecosystem: traditional search (navigation), AI Overviews (summarization), and standalone AI platforms like ChatGPT and Perplexity (complex reasoning). Each requires different optimization. New KPIs — citation frequency, share of voice in AI answers, brand mention rate, and AI-referred conversion rate — are replacing traditional metrics.
      </TLDRBlock>

      <section className="my-10">
        <h2 className="text-2xl font-bold text-brand-black mb-4">The Tri-Modal Ecosystem</h2>
        <div className="space-y-4">
          <div className="bg-white border border-brand-light rounded-lg p-6">
            <h3 className="text-xl font-semibold text-brand-dark mb-2">Layer 1: Traditional Search</h3>
            <p className="text-brand-dark leading-relaxed"><strong>Function:</strong> Navigation via blue links. <strong>Optimization:</strong> <Link to="/traditional-search" className="text-brand-black underline">SEO</Link> — gets your content crawled, indexed, and discoverable. This remains the foundation. Without SEO, AI systems may never find your content to cite it.</p>
          </div>
          <div className="bg-white border border-brand-light rounded-lg p-6">
            <h3 className="text-xl font-semibold text-brand-dark mb-2">Layer 2: AI Overviews</h3>
            <p className="text-brand-dark leading-relaxed"><strong>Function:</strong> Summarization layer on Google. <strong>Optimization:</strong> <Link to="/seo-vs-aio" className="text-brand-black underline">AIO</Link> — unlocks visibility and citations in Google's AI-generated summaries. 92.36% of AI Overview responses link to at least one top-10 organic result, making SEO and AIO complementary.</p>
          </div>
          <div className="bg-white border border-brand-light rounded-lg p-6">
            <h3 className="text-xl font-semibold text-brand-dark mb-2">Layer 3: AI Mode / Standalone AI</h3>
            <p className="text-brand-dark leading-relaxed"><strong>Function:</strong> Complex reasoning via ChatGPT, Perplexity, Claude. <strong>Optimization:</strong> <dfn>GEO (Generative Engine Optimization)</dfn> — protects brand accuracy and ensures correct representation across AI platforms. Only <Link to="/comparison" className="text-brand-black underline">11% of domains</Link> are cited by both ChatGPT and Perplexity.</p>
          </div>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-bold text-brand-black mb-4">New KPIs for the AI Era</h2>
        <ComparisonTable
          caption="Old Metrics vs New Metrics"
          headers={['Old Metric', 'New Metric']}
          rows={[
            ['Keyword rankings', 'Citation frequency across AI platforms'],
            ['Organic CTR', 'Share of voice in AI answers'],
            ['Pageviews / sessions', 'Brand mention rate in AI responses'],
            ['Backlink count', 'Source authority / citation quality'],
            ['Bounce rate', 'AI-referred conversion rate'],
          ]}
        />
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-bold text-brand-black mb-4">Getting Started — Practical Steps</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <span className="bg-brand-accent text-brand-black rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">1</span>
            <div>
              <h3 className="font-semibold text-brand-dark mb-1">Audit Current AI Visibility</h3>
              <p className="text-brand-dark">Run your top 50 queries through ChatGPT, Perplexity, and Google AI Overviews. Document where you appear, how you're described, and where competitors are cited instead.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-brand-accent text-brand-black rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">2</span>
            <div>
              <h3 className="font-semibold text-brand-dark mb-1">Implement Structured Data</h3>
              <p className="text-brand-dark">Add FAQ, HowTo, Organization, Product, and <Link to="/glossary" className="text-brand-black underline">speakable schema</Link> markup to your key pages. This helps AI systems understand and extract your content accurately.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-brand-accent text-brand-black rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">3</span>
            <div>
              <h3 className="font-semibold text-brand-dark mb-1">Reformat Content</h3>
              <p className="text-brand-dark">Add TL;DR summaries to every page, lead with answers in every section, create extraction-ready passages with clear passage boundaries. Pages with FCP under 0.4s get <Link to="/ai-search" className="text-brand-black underline">3x more AI citations</Link>.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-brand-accent text-brand-black rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">4</span>
            <div>
              <h3 className="font-semibold text-brand-dark mb-1">Track New KPIs</h3>
              <p className="text-brand-dark">Set up tracking with <SourceLink name="Semrush" /> AI Visibility, <SourceLink name="Ahrefs" /> Brand Radar, or <SourceLink name="Passionfruit" /> Labs. Monitor citation frequency, share of voice, and AI-referred conversion rate alongside traditional SEO metrics.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-brand-accent text-brand-black rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">5</span>
            <div>
              <h3 className="font-semibold text-brand-dark mb-1">Monitor by Platform</h3>
              <p className="text-brand-dark">Optimization strategies differ for ChatGPT vs. Perplexity vs. Google AI Overviews. Only <Link to="/comparison" className="text-brand-black underline">11% of domains</Link> are cited by both ChatGPT and Perplexity — track each platform independently.</p>
            </div>
          </div>
        </div>
      </section>

      <p className="text-brand-mid my-8">
        See the <Link to="/case-study" className="text-brand-black underline">AcmeCRM case study</Link> for a concrete example of this strategy in action, or review the <Link to="/glossary" className="text-brand-black underline">glossary</Link> for definitions of all key terms.
      </p>

      <FAQSection faqs={faqs} />
    </article>
  )
}
