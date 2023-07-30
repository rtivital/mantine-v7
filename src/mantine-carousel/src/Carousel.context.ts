import { createSafeContext, GetStylesApi } from '@mantine/core';
import type { CarouselFactory } from './Carousel';

interface CarouselContextValue {
  getStyles: GetStylesApi<CarouselFactory>;
}

export const [CarouselProvider, useCarouselContext] = createSafeContext<CarouselContextValue>(
  'Carousel component was not found in tree'
);
