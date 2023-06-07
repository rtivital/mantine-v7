import { createSafeContext, GetStylesApi } from '@mantine/core';
import type { SpotlightFactory } from './Spotlight';

interface SpotlightContextValue {
  query: string;
  setQuery(query: string): void;
  getStyles: GetStylesApi<SpotlightFactory>;
}

export const [SpotlightProvider, useSpotlightContext] = createSafeContext<SpotlightContextValue>(
  'Spotlight component was not found in tree'
);
