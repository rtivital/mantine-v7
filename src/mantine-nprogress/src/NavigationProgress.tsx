import React, { useRef, useState } from 'react';
import {
  OptionalPortal,
  Progress,
  useMantineTheme,
  getDefaultZIndex,
  MantineColor,
  PortalProps,
} from '@mantine/core';
import { useDidUpdate, useReducedMotion } from '@mantine/hooks';
import {
  NprogressStore,
  nprogressStore,
  stopNavigationProgressAction,
  resetNavigationProgressAction,
  useNprogress,
} from './nprogress.store';

export interface NavigationProgressProps {
  store?: NprogressStore;

  /** The default progress */
  initialProgress?: number;

  /** Key of theme.colors of any other valid CSS color */
  color?: MantineColor;

  /** Height of the progressbar */
  size?: number;

  /** Called when the progressbar reaches 100% */
  onFinish?(): void;

  /** Determines whether progress should be automatically reset when 100% is reached */
  autoReset?: boolean;

  /** Step interval in ms */
  stepInterval?: number;

  /** Transition duration in ms */
  transitionDuration?: number;

  /** Number of ms that should elapse before progressbar is hidden after reaching 100% */
  exitTimeout?: number;

  /** Exit transition duration in ms */
  exitTransitionDuration?: number;

  /** Determines whether progressbar should be rendered within Portal, defaults to true */
  withinPortal?: boolean;

  /** Props to pass down to the portal when withinPortal is true */
  portalProps?: Omit<PortalProps, 'children' | 'withinPortal'>;

  /** Progressbar z-index */
  zIndex?: React.CSSProperties['zIndex'];

  /** aria-label for `Progress`*/
  progressLabel?: string;
}

export function NavigationProgress({
  initialProgress = 0,
  color,
  size = 3,
  stepInterval = 500,
  transitionDuration = 300,
  exitTimeout = 500,
  exitTransitionDuration = 400,
  onFinish,
  autoReset = false,
  withinPortal = true,
  portalProps,
  zIndex = getDefaultZIndex('max'),
  progressLabel,
  store = nprogressStore,
}: NavigationProgressProps) {
  const theme = useMantineTheme();
  const shouldReduceMotion = useReducedMotion();
  const reducedMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [mounted, setMounted] = useState(true);
  const resetRef = useRef<number | null>();
  const unmountRef = useRef<number | null>();

  store.initialize({
    mounted: false,
    progress: initialProgress,
    interval: -1,
    step: 1,
    stepInterval,
  });

  const state = useNprogress(store);

  const cancelUnmount = () => {
    if (unmountRef.current) {
      window.clearTimeout(unmountRef.current);
      unmountRef.current = null;
    }
    if (resetRef.current) {
      window.clearTimeout(resetRef.current);
      resetRef.current = null;
    }

    setMounted(true);
  };

  useDidUpdate(() => {
    if (state.progress >= 100) {
      stopNavigationProgressAction(store);
      onFinish?.();

      unmountRef.current = window.setTimeout(() => {
        unmountRef.current = null;
        setMounted(false);

        if (autoReset) {
          resetRef.current = window.setTimeout(
            () => {
              resetRef.current = null;
              resetNavigationProgressAction(store);
            },
            reducedMotion ? 0 : exitTransitionDuration
          );
        }
      }, exitTimeout);
    } else if (!mounted) {
      cancelUnmount();
    }
  }, [state.progress]);

  return (
    <OptionalPortal {...portalProps} withinPortal={withinPortal}>
      {state.mounted && (
        <Progress
          radius={0}
          value={state.progress}
          size={size}
          color={color}
          styles={{
            root: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              zIndex,
              backgroundColor: 'transparent',
              transitionProperty: 'opacity',
              transitionTimingFunction: 'ease',
              transitionDuration: `${
                reducedMotion || state.progress !== 100 ? 0 : exitTransitionDuration
              }ms`,
              opacity: mounted ? 1 : 0,
            },
            section: {
              position: 'relative',
              transitionProperty: 'width',
              transitionTimingFunction: 'ease',
              transitionDuration: `${reducedMotion || !mounted ? 0 : transitionDuration}ms`,
            },
          }}
          aria-label={progressLabel}
        />
      )}
    </OptionalPortal>
  );
}
