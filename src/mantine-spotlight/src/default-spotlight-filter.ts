import type { SpotlightFilterFunction, SpotlightActionData } from './Spotlight';

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

export const defaultSpotlightFilter: SpotlightFilterFunction = (_query, actions) => {
  const query = _query.trim().toLowerCase();
  const priorityMatrix: SpotlightActionData[][] = [[], []];
  actions.forEach((action) => {
    if (action.label?.toLowerCase().includes(query)) {
      priorityMatrix[0].push(action);
    } else if (
      action.description?.toLowerCase().includes(query) ||
      getKeywords(action.keywords).includes(query)
    ) {
      priorityMatrix[1].push(action);
    }
  });

  return priorityMatrix.flat();
};
