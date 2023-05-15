import React from 'react';
import { ScrollAreaCornerImpl, ScrollAreaCornerImplProps } from './Corner';
import { useScrollAreaContext } from '../ScrollArea.context';

interface ScrollAreaCornerProps extends ScrollAreaCornerImplProps {}

export const ScrollAreaCorner = React.forwardRef<HTMLDivElement, ScrollAreaCornerProps>(
  (props, forwardedRef) => {
    const context = useScrollAreaContext();
    const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
    const hasCorner = context.type !== 'scroll' && hasBothScrollbarsVisible;
    return hasCorner ? <ScrollAreaCornerImpl {...props} ref={forwardedRef} /> : null;
  }
);
