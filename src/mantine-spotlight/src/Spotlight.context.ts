import { createSafeContext, GetStylesApi } from '@mantine/core';
import type { SpotlightFactory } from './Spotlight';
import type { SpotlightActionProps } from './SpotlightAction';
import { SpotlightStore } from './spotlight.store';

interface SpotlightContextValue {
  query: string;
  empty: boolean;
  filter(props: SpotlightActionProps): boolean;
  setQuery(query: string): void;
  getStyles: GetStylesApi<SpotlightFactory>;
  store: SpotlightStore;
}

export const [SpotlightProvider, useSpotlightContext] = createSafeContext<SpotlightContextValue>(
  'Spotlight component was not found in tree'
);
