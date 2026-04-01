const SITE_URL = 'https://ai-search-optimized.netlify.app'
const SITE_NAME = 'Traditional Search vs AI Search'
const AUTHOR = 'AI Search Research Team'
const PUBLISHER = {
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/favicon.ico`,
  },
}

export function createOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
    description: 'Comprehensive resource on traditional search vs AI search, covering CTR impact, conversion rates, and AI optimization strategies.',
  }
}

export function createWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function createArticleSchema({ title, description, path, datePublished, dateModified }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: { '@type': 'Person', name: AUTHOR },
    publisher: PUBLISHER,
    datePublished,
    dateModified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${path}`,
    },
  }
}

export function createFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }
}

export function createBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

export function createHowToSchema({ name, description, steps }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }
}

export function createSpeakableSchema(path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${path}`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.tldr-summary', '.key-answer'],
    },
  }
}

export function createDefinedTermSetSchema(terms) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'AI Search Glossary',
    description: 'Definitions of key terms in AI search and AI optimization.',
    definedTerm: terms.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.term,
      description: t.definition,
    })),
  }
}
