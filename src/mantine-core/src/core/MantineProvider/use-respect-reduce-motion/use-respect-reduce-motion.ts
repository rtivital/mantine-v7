import { useIsomorphicEffect } from '@mantine/hooks';
import { MantineTheme } from '../theme.types';

interface UseRespectReduceMotionOptions {
  theme: MantineTheme;
  getRootElement: () => HTMLElement | undefined;
}

export function useRespectReduceMotion({ theme, getRootElement }: UseRespectReduceMotionOptions) {
  useIsomorphicEffect(() => {
    if (theme.respectReducedMotion) {
      getRootElement()?.setAttribute('data-respect-reduced-motion', 'true');
    }
  }, [theme.respectReducedMotion]);
}
