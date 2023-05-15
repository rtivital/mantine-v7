import React, { forwardRef, useRef, useState, useEffect } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { ScrollAreaScrollbarImpl } from './Scrollbar';
import { ScrollAreaScrollbarAxisProps } from '../ScrollArea.types';
import { useScrollAreaContext } from '../ScrollArea.context';
import { isScrollingWithinScrollbarBounds, getThumbSize, toInt } from '../utils';

export const ScrollAreaScrollbarX = forwardRef<HTMLDivElement, ScrollAreaScrollbarAxisProps>(
  (props, forwardedRef) => {
    const { sizes, onSizesChange, ...scrollbarProps } = props;
    const context = useScrollAreaContext();
    const [computedStyle, setComputedStyle] = useState<CSSStyleDeclaration>();
    const ref = useRef<HTMLDivElement>(null);
    const composeRefs = useMergedRef(forwardedRef, ref, context.onScrollbarXChange);

    useEffect(() => {
      if (ref.current) setComputedStyle(getComputedStyle(ref.current));
    }, [ref]);

    return (
      <ScrollAreaScrollbarImpl
        data-orientation="horizontal"
        {...scrollbarProps}
        ref={composeRefs}
        sizes={sizes}
        style={{
          // @YYY
          bottom: 0,
          left: 0,
          right: 'var(--sa-corner-height)',
          ['--radix-scroll-area-thumb-width' as any]: `${getThumbSize(sizes)}px`,
          ...props.style,
        }}
        onThumbPointerDown={(pointerPos) => props.onThumbPointerDown(pointerPos.x)}
        onDragScroll={(pointerPos) => props.onDragScroll(pointerPos.x)}
        onWheelScroll={(event, maxScrollPos) => {
          if (context.viewport) {
            const scrollPos = context.viewport.scrollLeft + event.deltaX;
            props.onWheelScroll(scrollPos);
            if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
              event.preventDefault();
            }
          }
        }}
        onResize={() => {
          if (ref.current && context.viewport && computedStyle) {
            onSizesChange({
              content: context.viewport.scrollWidth,
              viewport: context.viewport.offsetWidth,
              scrollbar: {
                size: ref.current.clientWidth,
                paddingStart: toInt(computedStyle.paddingLeft),
                paddingEnd: toInt(computedStyle.paddingRight),
              },
            });
          }
        }}
      />
    );
  }
);
