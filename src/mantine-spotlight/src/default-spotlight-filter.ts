import type { SpotlightFilterFunction } from './Spotlight';

export const defaultSpotlightFilter: SpotlightFilterFunction = (query, action) => {
  const normalizedQuery = query.trim().toLowerCase();

  if (
    typeof action.description === 'string' &&
    !action.description.toLowerCase().includes(normalizedQuery)
  ) {
    return false;
  }

  if (typeof action.label === 'string' && !action.label.toLowerCase().includes(normalizedQuery)) {
    return false;
  }

  return true;
};
