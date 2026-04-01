// Canonical source URLs for all research references used across the site.
// Keys are short identifiers; each entry has a label (display text) and url.

export const sources = {
  seerInteractive: {
    label: 'Seer Interactive',
    url: 'https://www.seerinteractive.com/insights/ai-overviews-impact-on-organic-ctr',
  },
  semrush: {
    label: 'Semrush',
    url: 'https://www.semrush.com/blog/ai-overviews/',
  },
  semrushConversions: {
    label: 'Semrush',
    url: 'https://www.semrush.com/blog/ai-search-traffic-study/',
  },
  semrushZeroClick: {
    label: 'Semrush',
    url: 'https://www.semrush.com/blog/google-ai-mode-study/',
  },
  passionfruit: {
    label: 'Passionfruit',
    url: 'https://www.passionfruitlabs.com/blog/ai-search-research',
  },
  eightOhTwo: {
    label: 'Eight Oh Two',
    url: 'https://www.eightohtwocreative.com/insights/ai-search-consumer-behavior-2026',
  },
  statCounter: {
    label: 'StatCounter',
    url: 'https://gs.statcounter.com/search-engine-market-share',
  },
  gartner: {
    label: 'Gartner',
    url: 'https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026',
  },
  openAI: {
    label: 'OpenAI',
    url: 'https://openai.com/index/chatgpt/',
  },
  seRanking: {
    label: 'SE Ranking',
    url: 'https://seranking.com/blog/ai-overviews-study/',
  },
  firstPageSage: {
    label: 'First Page Sage',
    url: 'https://firstpagesage.com/reports/google-click-through-rates-ctrs-by-ranking-position/',
  },
  pewResearch: {
    label: 'Pew Research',
    url: 'https://www.pewresearch.org/internet/2025/01/21/how-americans-use-chatgpt/',
  },
  ahrefs: {
    label: 'Ahrefs',
    url: 'https://ahrefs.com/blog/ai-overviews-study/',
  },
}

// Helper: given a source string from a StatCard, return a URL if we can match it.
export function getSourceUrl(sourceText) {
  if (!sourceText) return null
  const t = sourceText.toLowerCase()
  if (t.includes('seer interactive')) return sources.seerInteractive.url
  if (t.includes('first page sage') || t.includes('growthsrc')) return sources.firstPageSage.url
  if (t.includes('passionfruit')) return sources.passionfruit.url
  if (t.includes('eight oh two')) return sources.eightOhTwo.url
  if (t.includes('statcounter')) return sources.statCounter.url
  if (t.includes('gartner')) return sources.gartner.url
  if (t.includes('openai') || t.includes('superlines')) return sources.openAI.url
  if (t.includes('se ranking') || t.includes('alm corp')) return sources.seRanking.url
  if (t.includes('semrush') && (t.includes('june') || t.includes('conversion'))) return sources.semrushConversions.url
  if (t.includes('semrush') && (t.includes('zero') || t.includes('ai mode') || t.includes('september'))) return sources.semrushZeroClick.url
  if (t.includes('semrush')) return sources.semrush.url
  if (t.includes('pew')) return sources.pewResearch.url
  if (t.includes('ahrefs')) return sources.ahrefs.url
  return null
}
