import { createSafeContext, GetStylesApi } from '@mantine/core';
import type { SpotlightFactory } from './Spotlight';
import type { SpotlightActionProps } from './SpotlightAction';

interface SpotlightContextValue {
  query: string;
  empty: boolean;
  filter(props: SpotlightActionProps): boolean;
  setQuery(query: string): void;
  registerAction(id: string): () => void;
  getStyles: GetStylesApi<SpotlightFactory>;
}

export const [SpotlightProvider, useSpotlightContext] = createSafeContext<SpotlightContextValue>(
  'Spotlight component was not found in tree'
);
