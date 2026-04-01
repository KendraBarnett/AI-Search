import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import SchemaMarkup from '../components/SchemaMarkup'
import TLDRBlock from '../components/TLDRBlock'
import FAQSection from '../components/FAQSection'
import Breadcrumbs from '../components/Breadcrumbs'
import DateStamp from '../components/DateStamp'
import { createArticleSchema, createFAQSchema, createBreadcrumbSchema, createSpeakableSchema } from '../data/schema'

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'How Traditional Search Works', path: '/traditional-search' },
]

const faqs = [
  {
    question: 'How does Google rank websites?',
    answer: 'Google ranks websites using over 200 signals including keyword relevance, backlink quality and quantity, technical health (site speed, mobile responsiveness, crawl architecture), content depth and freshness, user engagement metrics, and domain authority. The process follows a crawl → index → rank → display model where Googlebot discovers pages, indexes their content, scores them against these signals, and presents a ranked list.',
  },
  {
    question: 'What are the most important SEO ranking factors?',
    answer: 'The most important SEO ranking factors are high-quality backlinks (still the primary authority signal), keyword-optimized content that matches user search intent, technical SEO (site speed, mobile responsiveness, clean crawl architecture), content depth and comprehensiveness, and user engagement signals. Brands win by building content clusters around high-intent terms and earning authority through valuable resources.',
  },
  {
    question: 'What happened to HubSpot\'s organic traffic?',
    answer: 'HubSpot peaked at approximately 13-16 million organic visits per month through massive content clusters around terms like "what is a CRM" and "email marketing guide." Through 2024-2025, organic traffic reportedly declined from ~13.5M to ~8.6M as AI Overviews began answering informational queries directly. Industry analysts coined this "the HubSpot Shift" — not a penalty, but a redistribution of utility as AI search absorbed the informational queries HubSpot had dominated.',
  },
]

export default function TraditionalSearch() {
  return (
    <article>
      <SEOHead
        title="How Traditional Search Works: The Crawl-Index-Rank-Display Model Explained"
        description="How Google's traditional search model works — crawling, indexing, ranking with 200+ signals, and displaying blue links. Plus the HubSpot SEO case study."
        path="/traditional-search"
      />
      <SchemaMarkup schemas={[
        createArticleSchema({
          title: 'How Traditional Search Works: The Crawl-Index-Rank-Display Model Explained',
          description: 'How Google\'s traditional search model works — crawling, indexing, ranking with 200+ signals, and displaying blue links.',
          path: '/traditional-search',
          datePublished: '2025-11-15',
          dateModified: '2026-03-28',
        }),
        createFAQSchema(faqs),
        createBreadcrumbSchema(breadcrumbs),
        createSpeakableSchema('/traditional-search'),
      ]} />

      <Breadcrumbs items={breadcrumbs} />
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">How Traditional Search Works</h1>
        <DateStamp published="2025-11-15" modified="2026-03-28" />
      </header>

      <TLDRBlock>
        Traditional search follows a crawl → index → rank → display model. Bots discover pages, Google categorizes them, algorithms score against 200+ signals including keywords, backlinks, and technical health, and users see a ranked list of blue links. Success is measured by rankings, clicks, traffic, and conversions.
      </TLDRBlock>

      <section className="my-10">
        <h2 className="text-2xl font-bold text-brand-black mb-4">The Four-Step Model</h2>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-brand-dark mb-2">1. Crawling</h3>
          <p className="text-brand-dark leading-relaxed">Googlebot and other search engine crawlers systematically browse the web, following links from page to page to discover new and updated content. Crawlers respect robots.txt directives and follow sitemaps to find pages efficiently. The frequency of crawling depends on the site's authority, update frequency, and technical accessibility.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-brand-dark mb-2">2. Indexing</h3>
          <p className="text-brand-dark leading-relaxed">Once crawled, Google processes and stores the page's content in its massive index — a database of hundreds of billions of web pages. During indexing, Google analyzes the page's text, images, and metadata to understand what the page is about. Pages that are duplicate, low-quality, or blocked by noindex directives are excluded from the index.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-brand-dark mb-2">3. Ranking</h3>
          <p className="text-brand-dark leading-relaxed">When a user enters a query, Google's algorithms score indexed pages against 200+ ranking signals to determine the most relevant results. Key signals include keyword relevance, backlink quality, page speed, mobile-friendliness, content depth, and user engagement patterns. The algorithm produces a ranked list ordered by estimated relevance and quality.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-brand-dark mb-2">4. Display</h3>
          <p className="text-brand-dark leading-relaxed">Users see a <dfn>Search Engine Results Page (SERP)</dfn> — a ranked list of blue links, often accompanied by featured snippets, knowledge panels, ads, and (increasingly) AI Overviews. The user clicks a link, visits the website, and finds their answer. This click-through model is the foundation of digital marketing measurement.</p>
        </section>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-bold text-brand-black mb-4">How Brands Win with Traditional SEO</h2>

        <section className="mb-4">
          <h3 className="text-xl font-semibold text-brand-dark mb-2">Keywords</h3>
          <p className="text-brand-dark leading-relaxed">Matching user search terms with optimized on-page content. Keyword research identifies high-intent terms, and content is structured to satisfy the search intent behind those terms.</p>
        </section>

        <section className="mb-4">
          <h3 className="text-xl font-semibold text-brand-dark mb-2">Backlinks</h3>
          <p className="text-brand-dark leading-relaxed key-answer">Earning authority signals from other websites — still the primary authority signal in traditional search. High-quality backlinks from relevant, authoritative domains tell Google that your content is trustworthy and valuable.</p>
        </section>

        <section className="mb-4">
          <h3 className="text-xl font-semibold text-brand-dark mb-2">Technical SEO</h3>
          <p className="text-brand-dark leading-relaxed">Site speed, mobile responsiveness, and crawl architecture all affect how well Google can discover, understand, and rank your content. A technically sound site removes barriers to indexing and ranking.</p>
        </section>

        <section className="mb-4">
          <h3 className="text-xl font-semibold text-brand-dark mb-2">Content Depth</h3>
          <p className="text-brand-dark leading-relaxed">Comprehensive, intent-satisfying content that thoroughly addresses the user's query. Long-form content with clear structure, supporting data, and visual elements tends to outperform thin or superficial pages.</p>
        </section>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-bold text-brand-black mb-4">Case Study: HubSpot's SEO Strategy</h2>
        <div className="bg-white border border-brand-light rounded-lg p-6">
          <p className="text-brand-dark leading-relaxed mb-4">HubSpot built massive content clusters around high-intent terms like "what is a CRM" and "email marketing guide." They earned thousands of backlinks through free tools and templates, peaking at approximately <strong>13–16 million organic visits per month</strong>.</p>
          <p className="text-brand-dark leading-relaxed mb-4">Through 2024–2025, organic traffic reportedly declined from ~13.5M to ~8.6M as <Link to="/ai-search" className="text-brand-black underline">AI Overviews</Link> began answering informational queries directly. Industry analysts coined the term <strong>"the HubSpot Shift"</strong> — not a penalty, but a redistribution of utility.</p>
          <p className="text-brand-dark leading-relaxed key-answer">The content strategy that made HubSpot dominant became insufficient on its own. The same informational queries they ranked #1 for were now being answered directly by AI, reducing the need for users to click through to the source.</p>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-bold text-brand-black mb-4">The Traditional Search Success Formula</h2>
        <div className="flex flex-wrap items-center justify-center gap-3 text-lg font-semibold text-brand-black bg-brand-accent-light p-6 rounded-lg">
          <span>Rankings</span><span aria-hidden="true">→</span>
          <span>Clicks</span><span aria-hidden="true">→</span>
          <span>Traffic</span><span aria-hidden="true">→</span>
          <span>Conversions</span>
        </div>
      </section>

      <p className="text-brand-mid my-8">
        Understanding the traditional search model is essential context for understanding <Link to="/ai-search" className="text-brand-black underline">how AI search works differently</Link> and why the <Link to="/landscape-shift" className="text-brand-black underline">landscape is shifting</Link>.
      </p>

      <FAQSection faqs={faqs} />
    </article>
  )
}
