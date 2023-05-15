import React from 'react';
import { useDebounceCallback } from '@mantine/hooks';
import { useScrollAreaContext } from '../ScrollArea.context';
import {
  ScrollAreaScrollbarVisible,
  ScrollAreaScrollbarVisibleProps,
} from './ScrollAreaScrollbarVisible';
import { useStateMachine } from './use-state-machine';
import { composeEventHandlers } from '../utils';

interface ScrollAreaScrollbarScrollProps extends ScrollAreaScrollbarVisibleProps {
  forceMount?: true;
}

export const ScrollAreaScrollbarScroll = React.forwardRef<
  HTMLDivElement,
  ScrollAreaScrollbarScrollProps
>((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = useScrollAreaContext();
  const isHorizontal = props.orientation === 'horizontal';
  const [state, send] = useStateMachine('hidden', {
    hidden: {
      SCROLL: 'scrolling',
    },
    scrolling: {
      SCROLL_END: 'idle',
      POINTER_ENTER: 'interacting',
    },
    interacting: {
      SCROLL: 'interacting',
      POINTER_LEAVE: 'idle',
    },
    idle: {
      HIDE: 'hidden',
      SCROLL: 'scrolling',
      POINTER_ENTER: 'interacting',
    },
  });

  const debounceScrollEnd = useDebounceCallback(() => send('SCROLL_END'), 100);

  React.useEffect(() => {
    if (state === 'idle') {
      const hideTimer = window.setTimeout(() => send('HIDE'), context.scrollHideDelay);
      return () => window.clearTimeout(hideTimer);
    }

    return undefined;
  }, [state, context.scrollHideDelay, send]);

  React.useEffect(() => {
    const { viewport } = context;
    const scrollDirection = isHorizontal ? 'scrollLeft' : 'scrollTop';

    if (viewport) {
      let prevScrollPos = viewport[scrollDirection];
      const handleScroll = () => {
        const scrollPos = viewport[scrollDirection];
        const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
        if (hasScrollInDirectionChanged) {
          send('SCROLL');
          debounceScrollEnd();
        }
        prevScrollPos = scrollPos;
      };
      viewport.addEventListener('scroll', handleScroll);
      return () => viewport.removeEventListener('scroll', handleScroll);
    }

    return undefined;
  }, [context.viewport, isHorizontal, send, debounceScrollEnd]);

  if (forceMount || state !== 'hidden') {
    return (
      <ScrollAreaScrollbarVisible
        data-state="visible"
        {...scrollbarProps}
        ref={forwardedRef}
        onPointerEnter={composeEventHandlers(props.onPointerEnter, () => send('POINTER_ENTER'))}
        onPointerLeave={composeEventHandlers(props.onPointerLeave, () => send('POINTER_LEAVE'))}
      />
    );
  }

  return null;
});
