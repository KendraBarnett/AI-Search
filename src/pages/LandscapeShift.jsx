import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import SchemaMarkup from '../components/SchemaMarkup'
import TLDRBlock from '../components/TLDRBlock'
import FAQSection from '../components/FAQSection'
import Breadcrumbs from '../components/Breadcrumbs'
import DateStamp from '../components/DateStamp'
import StatCard from '../components/StatCard'
import { createArticleSchema, createFAQSchema, createBreadcrumbSchema, createSpeakableSchema } from '../data/schema'

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'The Landscape Shift', path: '/landscape-shift' },
]

const faqs = [
  {
    question: 'What percentage of searches start with AI tools?',
    answer: '37% of consumers now start searches with AI tools, according to Eight Oh Two research published in January 2026. This represents a fundamental shift in discovery behavior — more than one in three consumers bypass traditional search engines entirely for their initial query.',
  },
  {
    question: 'Has Google\'s search market share declined?',
    answer: 'Yes. Google\'s search market share dropped below 90% for the first time, according to StatCounter data from March 2025. AI search tools including ChatGPT, Perplexity, and others have captured 12-15% of global search share (PushLeads / ALM Corp). This is a structural shift, not a temporary fluctuation.',
  },
  {
    question: 'How fast is AI search adoption growing?',
    answer: 'AI search adoption is growing rapidly. ChatGPT user growth is 8x from October 2023 to April 2025, reaching 800M+ weekly active users and 1B+ daily queries. Google AI Overviews now reach 2B monthly users across 200+ countries. After the March 2025 core update, AI Overviews expanded by +528% in entertainment, +387% in restaurants, and +381% in travel.',
  },
]

export default function LandscapeShift() {
  return (
    <article>
      <SEOHead
        title="AI Search Adoption 2025-2026: 37% of Consumers Start with AI Tools, Google Below 90% Market Share"
        description="Market data on the AI search landscape shift — 1B+ daily ChatGPT queries, 2B monthly AI Overview users, Google below 90% share, and Gartner's prediction of 25% traditional search volume decline."
        path="/landscape-shift"
      />
      <SchemaMarkup schemas={[
        createArticleSchema({
          title: 'AI Search Adoption 2025-2026: The Landscape Shift',
          description: 'Market data on AI search adoption and the structural shift in discovery behavior.',
          path: '/landscape-shift',
          datePublished: '2025-11-15',
          dateModified: '2026-03-28',
        }),
        createFAQSchema(faqs),
        createBreadcrumbSchema(breadcrumbs),
        createSpeakableSchema('/landscape-shift'),
      ]} />

      <Breadcrumbs items={breadcrumbs} />
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">The Landscape Shift</h1>
        <DateStamp published="2025-11-15" modified="2026-03-28" />
      </header>

      <TLDRBlock>
        AI search has reached mainstream adoption. 37% of consumers now start searches with AI tools, Google's market share dipped below 90% for the first time, and Gartner predicts a 25% drop in traditional search volume. Brands not visible in AI-generated answers are invisible to a growing share of their customers.
      </TLDRBlock>

      <section className="my-10">
        <h2 className="text-2xl font-bold text-brand-black mb-6">The Numbers</h2>
        <div className="space-y-6">
          <StatCard value="37%" label="Start with AI Tools" description="37% of consumers now start searches with AI tools rather than traditional search engines." source="Eight Oh Two, January 2026" variant="neutral" />
          <StatCard value="1B+" label="Daily ChatGPT Queries" description="Over 1 billion ChatGPT queries per day, with 800M+ weekly active users as of April 2025." source="OpenAI / Superlines, 2026" variant="neutral" />
          <StatCard value="2B" label="Monthly AI Overview Users" description="Google AI Overviews now reach 2 billion monthly users across 200+ countries." source="SE Ranking / ALM Corp" variant="neutral" />
          <StatCard value="12-15%" label="Global Search Share by AI Tools" description="AI tools have captured 12-15% of global search share." source="PushLeads / ALM Corp" variant="neutral" />
          <StatCard value="<90%" label="Google's Market Share" description="Google dropped below 90% search market share for the first time." source="StatCounter, March 2025" variant="negative" />
          <StatCard value="-25%" label="Predicted Traditional Search Decline" description="Gartner predicts a 25% drop in traditional search volume." source="Gartner, 2026" variant="negative" />
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-bold text-brand-black mb-4">What These Numbers Mean Together</h2>
        <p className="text-brand-dark leading-relaxed mb-4 key-answer">This isn't early adoption — it's a structural shift in discovery behavior. The growth rates across platforms indicate that AI search is becoming the default starting point for a significant and growing segment of users.</p>

        <div className="bg-white border border-brand-light rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-brand-dark mb-3">AI Overviews Expansion After March 2025 Core Update</h3>
          <ul className="space-y-2 text-brand-dark">
            <li><strong>+528%</strong> in entertainment queries</li>
            <li><strong>+387%</strong> in restaurant queries</li>
            <li><strong>+381%</strong> in travel queries</li>
          </ul>
        </div>

        <div className="bg-white border border-brand-light rounded-lg p-6">
          <h3 className="text-xl font-semibold text-brand-dark mb-3">ChatGPT User Growth</h3>
          <p className="text-brand-dark leading-relaxed"><strong>8x growth</strong> from October 2023 to April 2025 — from approximately 100M weekly active users to 800M+. This trajectory shows no signs of slowing, with AI search becoming embedded in daily workflows across consumer and enterprise contexts.</p>
        </div>
      </section>

      <p className="text-brand-mid my-8">
        For the business impact of this shift, see <Link to="/ctr-crisis" className="text-brand-black underline">the CTR crisis data</Link>. For what brands should do about it, read <Link to="/brand-strategy" className="text-brand-black underline">the brand strategy guide</Link>.
      </p>

      <FAQSection faqs={faqs} />
    </article>
  )
}
