import React, { forwardRef, useRef, useEffect } from 'react';
import { useDebounceCallback, useMergedRef } from '@mantine/hooks';
import { useScrollbarContext } from '../ScrollAreaScrollbar/Scrollbar.context';
import { useScrollAreaContext } from '../ScrollArea.context';
import { addUnlinkedScrollListener, composeEventHandlers } from '../utils';

export interface ScrollAreaThumbImplProps extends React.ComponentPropsWithoutRef<'div'> {}

export const ScrollAreaThumbImpl = forwardRef<HTMLDivElement, ScrollAreaThumbImplProps>(
  (props, forwardedRef) => {
    const { style, ...thumbProps } = props;
    const scrollAreaContext = useScrollAreaContext();
    const scrollbarContext = useScrollbarContext();
    const { onThumbPositionChange } = scrollbarContext;
    const composedRef = useMergedRef(forwardedRef, (node) => scrollbarContext.onThumbChange(node));
    const removeUnlinkedScrollListenerRef = useRef<() => void>();
    const debounceScrollEnd = useDebounceCallback(() => {
      if (removeUnlinkedScrollListenerRef.current) {
        removeUnlinkedScrollListenerRef.current();
        removeUnlinkedScrollListenerRef.current = undefined;
      }
    }, 100);

    useEffect(() => {
      const { viewport } = scrollAreaContext;
      if (viewport) {
        const handleScroll = () => {
          debounceScrollEnd();
          if (!removeUnlinkedScrollListenerRef.current) {
            const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
            removeUnlinkedScrollListenerRef.current = listener;
            onThumbPositionChange();
          }
        };
        onThumbPositionChange();
        viewport.addEventListener('scroll', handleScroll);
        return () => viewport.removeEventListener('scroll', handleScroll);
      }

      return undefined;
    }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]);

    return (
      <div
        data-state={scrollbarContext.hasThumb ? 'visible' : 'hidden'}
        {...thumbProps}
        ref={composedRef}
        style={{
          // @YYY
          width: 'var(--radix-scroll-area-thumb-width)',
          height: 'var(--radix-scroll-area-thumb-height)',
          ...style,
        }}
        onPointerDownCapture={composeEventHandlers(props.onPointerDownCapture, (event) => {
          const thumb = event.target as HTMLElement;
          const thumbRect = thumb.getBoundingClientRect();
          const x = event.clientX - thumbRect.left;
          const y = event.clientY - thumbRect.top;
          scrollbarContext.onThumbPointerDown({ x, y });
        })}
        onPointerUp={composeEventHandlers(props.onPointerUp, scrollbarContext.onThumbPointerUp)}
      />
    );
  }
);
