import { createSafeContext, GetStylesApi } from '@mantine/core';
import type { SpotlightFactory } from './Spotlight';

interface SpotlightContextValue {
  query: string;
  empty: boolean;
  setQuery(query: string): void;
  registerAction(id: string): () => void;
  getStyles: GetStylesApi<SpotlightFactory>;
}

export const [SpotlightProvider, useSpotlightContext] = createSafeContext<SpotlightContextValue>(
  'Spotlight component was not found in tree'
);
