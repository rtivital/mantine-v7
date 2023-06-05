import { createSafeContext, GetStylesApi } from '@mantine/core';
import type { SpotlightFactory } from './Spotlight';

interface SpotlightContextValue {
  getStyles: GetStylesApi<SpotlightFactory>;
}

export const [SpotlightProvider, useSpotlightContext] = createSafeContext<SpotlightContextValue>(
  'Spotlight component was not found in tree'
);
