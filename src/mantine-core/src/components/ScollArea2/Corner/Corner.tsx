import React from 'react';
import { useScrollAreaContext } from '../ScrollArea.context';
import { useResizeObserver } from '../use-resize-observer';

export interface ScrollAreaCornerImplProps extends React.ComponentPropsWithoutRef<'div'> {}

export const ScrollAreaCornerImpl = React.forwardRef<HTMLDivElement, ScrollAreaCornerImplProps>(
  (props, forwardedRef) => {
    const { ...cornerProps } = props;
    const context = useScrollAreaContext();
    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(0);
    const hasSize = Boolean(width && height);

    useResizeObserver(context.scrollbarX, () => {
      const h = context.scrollbarX?.offsetHeight || 0;
      context.onCornerHeightChange(h);
      setHeight(h);
    });

    useResizeObserver(context.scrollbarY, () => {
      const w = context.scrollbarY?.offsetWidth || 0;
      context.onCornerWidthChange(w);
      setWidth(w);
    });

    return hasSize ? <div {...cornerProps} ref={forwardedRef} style={{ width, height }} /> : null;
  }
);
