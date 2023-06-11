import type { SpotlightFilterFunction } from './Spotlight';

export const defaultSpotlightFilter: SpotlightFilterFunction = (query, action) => {
  const normalizedQuery = query.trim().toLowerCase();
  const shouldFilterByDescription = typeof action.description === 'string';
  const shouldFilterByLabel = typeof action.label === 'string';
  const descriptionMatched =
    shouldFilterByDescription &&
    (action.description as string).toLowerCase().includes(normalizedQuery);
  const labelMatched =
    shouldFilterByLabel && (action.label as string).toLowerCase().includes(normalizedQuery);

  return descriptionMatched || labelMatched;
};
