import type { SpotlightFilterFunction } from './Spotlight';

export const defaultSpotlightFilter: SpotlightFilterFunction = (query, action) => {
  const normalizedQuery = query.trim().toLowerCase();

  const titleMatch =
    typeof action.children === 'string'
      ? action.children.toLowerCase().includes(normalizedQuery)
      : true;

  const descriptionMatch =
    typeof action.description === 'string'
      ? action.description.toLowerCase().includes(normalizedQuery)
      : true;

  return titleMatch || descriptionMatch;
};
