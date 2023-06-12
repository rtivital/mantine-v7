import type { SpotlightFilterFunction } from './Spotlight';

function getKeywords(keywords: string | string[] | undefined) {
  if (Array.isArray(keywords)) {
    return keywords
      .map((keyword) => keyword.trim())
      .join(',')
      .toLowerCase()
      .trim();
  }

  if (typeof keywords === 'string') {
    return keywords.toLowerCase().trim();
  }

  return '';
}

export const defaultSpotlightFilter: SpotlightFilterFunction = (query, action) => {
  const normalizedQuery = query.trim().toLowerCase();
  const shouldFilterByDescription = typeof action.description === 'string';
  const shouldFilterByLabel = typeof action.label === 'string';
  const shouldFilterByKeywords =
    Array.isArray(action.keywords) || typeof action.keywords === 'string';
  const keywords = getKeywords(action.keywords);

  const descriptionMatched =
    shouldFilterByDescription &&
    (action.description as string).toLowerCase().includes(normalizedQuery);
  const labelMatched =
    shouldFilterByLabel && (action.label as string).toLowerCase().includes(normalizedQuery);
  const keywordsMatched = shouldFilterByKeywords && keywords.includes(normalizedQuery);

  return descriptionMatched || labelMatched || keywordsMatched;
};
