import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import SchemaMarkup from '../components/SchemaMarkup'
import TLDRBlock from '../components/TLDRBlock'
import FAQSection from '../components/FAQSection'
import Breadcrumbs from '../components/Breadcrumbs'
import DateStamp from '../components/DateStamp'
import StatCard from '../components/StatCard'
import SourceLink from '../components/SourceLink'
import { createArticleSchema, createFAQSchema, createBreadcrumbSchema, createSpeakableSchema } from '../data/schema'

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'The CTR Crisis', path: '/ctr-crisis' },
]

const faqs = [
  {
    question: 'How much has organic CTR dropped due to AI Overviews?',
    answer: 'Organic CTR has dropped 61% on queries where AI Overviews appear, falling from 1.76% to 0.61%. This is based on Seer Interactive\'s 15-month study of 3,119 informational queries across 42 client organizations, tracking 25.1 million organic impressions from June 2024 to September 2025. Even queries WITHOUT AI Overviews saw a 41% CTR decline, suggesting broader behavioral shifts.',
  },
  {
    question: 'Do brands cited in AI Overviews get more clicks?',
    answer: 'Yes. Brands cited within AI Overviews see 35% higher organic CTR and 91% higher paid CTR compared to non-cited brands, according to Seer Interactive\'s November 2025 data. While this is correlation (not proven causation), citation consistently outperforms non-citation regardless of the causal direction.',
  },
  {
    question: 'What is the zero-click rate in Google AI Mode?',
    answer: 'Google AI Mode has a 93% zero-click rate, according to Semrush data from September 2025. This compares to 43% zero-click for AI Overviews and approximately 34% for traditional search. 75% of AI Mode sessions see users never leaving the pane, with session durations 3x longer than AI Overviews (49 seconds vs 21 seconds).',
  },
  {
    question: 'Why do AI search visitors convert at a higher rate?',
    answer: 'AI search visitors convert at 4.4x the rate of traditional organic visitors (Semrush, June 2025) because they arrive pre-qualified. They have already compared options through the AI conversation, making them further along the purchase journey. AI responses function like personal word-of-mouth recommendations, which carry higher trust and purchase intent.',
  },
  {
    question: 'What was Seer Interactive\'s CTR study methodology?',
    answer: 'Seer Interactive tracked 3,119 informational queries across 42 client organizations from June 2024 to September 2025 (15 months). The organic sample comprised 25.1 million impressions. The paid sample was 1.1 million impressions (smaller, with wider confidence intervals). The study was published in September 2025 and updated in November 2025. Results were corroborated by Pew Research and Ahrefs independently.',
  },
]

export default function CTRCrisis() {
  return (
    <article>
      <SEOHead
        title="The CTR Crisis: AI Overviews Cause 61% Organic CTR Drop, But Cited Brands See 35% Lift — Seer Interactive 2025 Data"
        description="Seer Interactive's 15-month study of 3,119 queries across 42 organizations reveals -61% organic CTR, -68% paid CTR with AI Overviews. Cited brands earn +35% organic and +91% paid CTR lift. AI visitors convert at 4.4x (Semrush)."
        path="/ctr-crisis"
      />
      <SchemaMarkup schemas={[
        createArticleSchema({
          title: 'The CTR Crisis: AI Overviews Cause 61% Organic CTR Drop',
          description: 'Seer Interactive\'s data on CTR impact of AI Overviews and the conversion advantage of AI search citations.',
          path: '/ctr-crisis',
          datePublished: '2025-11-15',
          dateModified: '2026-03-28',
        }),
        createFAQSchema(faqs),
        createBreadcrumbSchema(breadcrumbs),
        createSpeakableSchema('/ctr-crisis'),
      ]} />

      <Breadcrumbs items={breadcrumbs} />
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">The CTR Crisis</h1>
        <DateStamp published="2025-11-15" modified="2026-03-28" />
      </header>

      <TLDRBlock>
        AI Overviews have caused a 61% drop in organic CTR and 68% drop in paid CTR (Seer Interactive, 3,119 queries, 42 organizations, June 2024–September 2025). However, brands cited in AI Overviews see 35% higher organic CTR and 91% higher paid CTR. Google AI Mode has a 93% zero-click rate, but AI search visitors convert at 4.4x the rate of traditional organic visitors (Semrush, June 2025).
      </TLDRBlock>

      <section className="my-10">
        <h2 className="text-2xl font-bold text-brand-black mb-4">-61% Organic CTR Drop</h2>
        <StatCard value="-61%" label="Organic CTR Drop" description="Organic CTR dropped from 1.76% to 0.61% for queries with AI Overviews." source="Seer Interactive, September 2025 update, published November 2025" variant="negative" />
        <div className="mt-4 text-brand-dark leading-relaxed space-y-3">
          <p><strong>Methodology:</strong> 3,119 informational queries, 42 client organizations, 25.1 million organic impressions, tracked June 2024–September 2025.</p>
          <p className="key-answer">Even queries <strong>without</strong> AI Overviews saw a <strong>41% CTR decline</strong> — suggesting broader behavioral shifts beyond just the direct displacement effect of AI Overviews.</p>
          <p>Corroborated by <SourceLink name="Pew Research" /> and <SourceLink name="Ahrefs" /> independently. Cited by Forbes, Inc., eMarketer, Search Engine Land.</p>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-bold text-brand-black mb-4">-68% Paid CTR Drop</h2>
        <StatCard value="-68%" label="Paid CTR Drop" description="Paid CTR fell from 19.7% to 6.34% for AI Overview queries." source="Seer Interactive, September 2025" variant="negative" />
        <div className="mt-4 text-brand-dark leading-relaxed space-y-3">
          <p>July 2025 was particularly severe — paid CTR crashed from ~11% to 3% in a single month.</p>
          <p><strong>Caveat:</strong> The paid sample was 1.1M impressions (smaller than the organic sample), making results directionally consistent but with wider confidence intervals.</p>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-bold text-brand-black mb-4">+35% Organic CTR Lift When Cited</h2>
        <StatCard value="+35%" label="Organic CTR Lift When Cited" description="Brands cited within AI Overviews see 35% higher organic CTR and 91% higher paid CTR." source="Seer Interactive, November 2025" variant="positive" />
        <div className="mt-4 text-brand-dark leading-relaxed space-y-3">
          <p className="key-answer">Brands cited within AI Overviews see <strong>35% higher organic CTR</strong> and <strong>91% higher paid CTR</strong> compared to non-cited brands.</p>
          <p><strong>Caveat:</strong> This is correlation, not proven causation — brands with stronger authority may naturally earn both higher CTR and more citations. Regardless of causal direction, citation consistently outperforms non-citation.</p>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-bold text-brand-black mb-4">93% Zero-Click in AI Mode</h2>
        <StatCard value="93%" label="Zero-Click Rate in AI Mode" description="Compared to 43% for AI Overviews and ~34% for traditional search." source="Semrush, September 2025" variant="negative" />
        <div className="mt-4 text-brand-dark leading-relaxed space-y-3">
          <p>75% of AI Mode sessions — users never leave the pane.</p>
          <p>Session durations are <strong>3x longer</strong> than AI Overviews (49 seconds vs 21 seconds). Users are engaging deeply with AI-generated content without clicking through to source websites.</p>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-bold text-brand-black mb-4">4.4x Higher Conversion Rate from AI Search Visitors</h2>
        <StatCard value="4.4x" label="Higher Conversion Rate" description="AI search visitors convert at 4.4x the rate of traditional organic visitors." source="Semrush, published June 9, 2025" variant="positive" />
        <div className="mt-4 text-brand-dark leading-relaxed space-y-3">
          <p>Research by Kyle Byers (Director of Growth Marketing) and Rachel Handley. Analyzed 500+ high-value digital marketing and SEO topics.</p>
          <p className="key-answer">AI search visitors arrive <strong>pre-qualified</strong> — they've already compared options via the AI. AI responses function like personal word-of-mouth recommendations, carrying higher trust and purchase intent.</p>
          <p><SourceLink name="Semrush" /> projects AI channels could drive equivalent economic value to traditional search by end of 2027.</p>
          <p><strong>Caveat:</strong> Measured on digital marketing topics — may not generalize perfectly across all verticals.</p>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-bold text-brand-black mb-4">-32% Fewer Clicks from Google Position #1</h2>
        <StatCard value="-32%" label="Fewer Clicks from Position #1" description="Even the most coveted search position sees significant click decline when AI Overviews appear." source="First Page Sage / GrowthSRC" variant="negative" />
      </section>

      <p className="text-brand-mid my-8">
        See the <Link to="/case-study" className="text-brand-black underline">AcmeCRM case study</Link> for a concrete model of how these numbers affect a real business. For strategic responses, read <Link to="/brand-strategy" className="text-brand-black underline">what this means for brands</Link>.
      </p>

      <FAQSection faqs={faqs} />
    </article>
  )
}
