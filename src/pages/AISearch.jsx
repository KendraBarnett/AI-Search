import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import SchemaMarkup from '../components/SchemaMarkup'
import TLDRBlock from '../components/TLDRBlock'
import FAQSection from '../components/FAQSection'
import Breadcrumbs from '../components/Breadcrumbs'
import DateStamp from '../components/DateStamp'
import { createArticleSchema, createFAQSchema, createBreadcrumbSchema, createHowToSchema, createSpeakableSchema } from '../data/schema'

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'How AI Search Works', path: '/ai-search' },
]

const faqs = [
  {
    question: 'What is RAG (Retrieval-Augmented Generation)?',
    answer: 'RAG (Retrieval-Augmented Generation) is an AI architecture where the model retrieves relevant passages from external sources — including the live web, knowledge bases, and training corpus — before generating a response. Rather than relying solely on training data, RAG systems embed queries and candidate passages into the same vector space, perform similarity matching, and use the retrieved content to ground the generated answer with citations.',
  },
  {
    question: 'How does ChatGPT decide which sources to cite?',
    answer: 'ChatGPT blends training data with live web browsing when search is triggered. Commercial intent prompts trigger web search 53.5% of the time vs. 18.7% for informational queries. Users\' opening questions trigger searches; follow-ups rarely do. Critically, ChatGPT cites only 15% of the pages it retrieves, favoring sources with high authority, clear entity definition, and well-structured content.',
  },
  {
    question: 'How does Perplexity search differently from ChatGPT?',
    answer: 'Perplexity performs real-time web retrieval against a proprietary index of 200+ billion URLs, processing tens of thousands of indexing operations per second across 400+ petabytes of storage. It is the most similar to traditional search in citation behavior. Only 11% of domains are cited by both ChatGPT and Perplexity — optimization strategies must differ by platform.',
  },
  {
    question: 'What is entity clarity in AI search?',
    answer: 'Entity clarity is the consistency and precision with which a brand or concept is defined across all digital surfaces. In AI search, higher entity clarity increases the AI system\'s confidence in citing that source. This means using consistent terminology, having Organization and Person schema markup, and ensuring your brand means the same thing on every page and platform.',
  },
]

export default function AISearch() {
  return (
    <article>
      <SEOHead
        title="How AI Search Works: RAG, Vector Embeddings, and the Interpret-Retrieve-Synthesize-Generate Model"
        description="Technical explanation of AI search architecture — Retrieval-Augmented Generation (RAG), semantic intent understanding, and how ChatGPT, Perplexity, and Google AI Overviews retrieve and cite sources differently."
        path="/ai-search"
      />
      <SchemaMarkup schemas={[
        createArticleSchema({
          title: 'How AI Search Works: RAG, Vector Embeddings, and the Interpret-Retrieve-Synthesize-Generate Model',
          description: 'Technical explanation of AI search architecture — Retrieval-Augmented Generation (RAG), semantic intent understanding, and platform-specific retrieval.',
          path: '/ai-search',
          datePublished: '2025-11-15',
          dateModified: '2026-03-28',
        }),
        createFAQSchema(faqs),
        createBreadcrumbSchema(breadcrumbs),
        createHowToSchema({
          name: 'How AI Search Processes a Query',
          description: 'The four-step model AI search uses to answer queries: interpret, retrieve, synthesize, generate.',
          steps: [
            { name: 'Interpret', text: 'AI converts the query into vector representations using semantic embeddings, understanding full meaning, context, follow-ups, and true intent — not just keywords.' },
            { name: 'Retrieve', text: 'Using Retrieval-Augmented Generation (RAG), the model actively retrieves passages from the live web, knowledge bases, and training corpus by embedding queries and candidate passages into the same vector space.' },
            { name: 'Synthesize', text: 'The system cross-references multiple sources for agreement, weighs authority based on brand search volume, web mentions, and branded anchors, and drops low-confidence content.' },
            { name: 'Generate', text: 'The AI delivers a direct answer with citations, often satisfying the user without requiring a click to any source website.' },
          ],
        }),
        createSpeakableSchema('/ai-search'),
      ]} />

      <Breadcrumbs items={breadcrumbs} />
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How AI Search Works</h1>
        <DateStamp published="2025-11-15" modified="2026-03-28" />
      </header>

      <TLDRBlock>
        AI search uses a fundamentally different model: interpret → retrieve → synthesize → generate. Instead of matching keywords, AI systems understand full query meaning through semantic embeddings, retrieve relevant passages using <dfn>RAG (Retrieval-Augmented Generation)</dfn>, cross-reference sources for agreement, and generate a direct answer with citations.
      </TLDRBlock>

      <section className="my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Four-Step AI Search Model</h2>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Interpret — Semantic Intent Understanding</h3>
          <p className="text-gray-700 leading-relaxed">AI converts queries into <dfn>vector representations</dfn> — mathematical representations of text in multi-dimensional space. This allows the system to understand full context, follow-up questions, and true intent. Unlike traditional search keyword matching, AI comprehends the complete meaning of a query, including nuance, ambiguity, and implied needs.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Retrieve — Retrieval-Augmented Generation (RAG)</h3>
          <p className="text-gray-700 leading-relaxed key-answer">The model doesn't just generate from training data — it actively retrieves passages from the live web, knowledge bases, and training corpus. <dfn>RAG (Retrieval-Augmented Generation)</dfn> embeds queries and candidate passages into the same vector space and performs similarity matching. This grounds the AI's response in real, verifiable sources rather than relying solely on pattern-learned knowledge.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Synthesize — Cross-Reference and Weigh</h3>
          <p className="text-gray-700 leading-relaxed">The system cross-references multiple sources for agreement. Authority is driven by brand search volume, web mentions, and branded anchors — not PageRank. Low-confidence content is dropped. Sources that agree with each other on factual claims receive higher weighting in the final response.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">4. Generate — Direct Answer with Citations</h3>
          <p className="text-gray-700 leading-relaxed">The AI delivers a direct, synthesized answer with inline citations to source material. This often satisfies the user without a click — creating the <Link to="/ctr-crisis" className="text-teal-700 underline">zero-click phenomenon</Link> that is reshaping digital marketing economics.</p>
        </section>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Different AI Platforms Retrieve</h2>
        <p className="text-gray-700 leading-relaxed mb-6 key-answer">Understanding platform-specific retrieval differences is critical for <Link to="/seo-vs-aio" className="text-teal-700 underline">AI Optimization (AIO)</Link> strategy. Only 11% of domains are cited by both ChatGPT and Perplexity — optimization strategies must differ by platform.</p>

        <section className="mb-6 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Perplexity</h3>
          <p className="text-gray-700 leading-relaxed">Real-time web retrieval against a proprietary index of <strong>200+ billion URLs</strong>. Processes tens of thousands of indexing operations per second across 400+ petabytes of storage. Most similar to traditional search in citation behavior — Perplexity cites sources more frequently and transparently than other AI platforms.</p>
        </section>

        <section className="mb-6 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">ChatGPT</h3>
          <p className="text-gray-700 leading-relaxed">Blends training data with live browsing when search is triggered. Commercial intent prompts trigger web search <strong>53.5%</strong> of the time vs. 18.7% for informational queries. Users' opening questions trigger searches; follow-ups rarely do. ChatGPT cites only <strong>15%</strong> of the pages it retrieves — making each citation highly selective and competitive.</p>
        </section>

        <section className="mb-6 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Google AI Overviews</h3>
          <p className="text-gray-700 leading-relaxed">Pulls from Google's own index using Gemini models. Uses <dfn>query fan-out</dfn> — issuing multiple related sub-queries simultaneously to build comprehensive responses. AI Overviews now appear in ~16% of global queries. <strong>92.36%</strong> of AI Overview responses link to at least one top-10 organic result.</p>
        </section>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Brands Win with AI Optimization</h2>

        <section className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Authority</h3>
          <p className="text-gray-700 leading-relaxed key-answer">Brand search volume is the strongest predictor of AI citations (<strong>0.334 correlation</strong>) — stronger than backlinks. Brands in the top 25% for web mentions earn 10x more AI Overview mentions. Presence on trust platforms (G2, Trustpilot, Reddit) gives 3x higher citation probability.</p>
        </section>

        <section className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Structure</h3>
          <p className="text-gray-700 leading-relaxed">Format content for AI extraction — TL;DR summaries, FAQ schema, HowTo schema, clear passage boundaries. Pages with FCP under 0.4 seconds average <strong>6.7 ChatGPT citations</strong> vs. 2.1 for slower pages.</p>
        </section>

        <section className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Entity Clarity</h3>
          <p className="text-gray-700 leading-relaxed">Define who you are consistently across every surface. Organization and Person schema. Consistent terminology. If your brand means different things on different pages, AI loses confidence in citing you.</p>
        </section>

        <section className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Directness</h3>
          <p className="text-gray-700 leading-relaxed">Lead with the answer. Don't make the model dig for it. AI systems prioritize content that immediately addresses user intent — answer-first formatting is essential for citation.</p>
        </section>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The AI Search Success Formula</h2>
        <div className="flex flex-wrap items-center justify-center gap-3 text-lg font-semibold text-teal-800 bg-teal-50 p-6 rounded-lg">
          <span>Citations</span><span aria-hidden="true">→</span>
          <span>Brand Mentions</span><span aria-hidden="true">→</span>
          <span>AI Visibility</span><span aria-hidden="true">→</span>
          <span>Conversions</span>
        </div>
      </section>

      <p className="text-gray-600 my-8">
        Compare this model with <Link to="/traditional-search" className="text-teal-700 underline">how traditional search works</Link>, or see the <Link to="/comparison" className="text-teal-700 underline">side-by-side comparison</Link>. To understand the business impact, read about <Link to="/ctr-crisis" className="text-teal-700 underline">the CTR crisis</Link>.
      </p>

      <FAQSection faqs={faqs} />
    </article>
  )
}
