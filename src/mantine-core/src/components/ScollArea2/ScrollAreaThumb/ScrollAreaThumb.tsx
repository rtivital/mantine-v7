import React from 'react';
import { ScrollAreaThumbImpl, ScrollAreaThumbImplProps } from './Thumb';
import { useScrollbarContext } from '../ScrollAreaScrollbar/Scrollbar.context';

interface ScrollAreaThumbProps extends ScrollAreaThumbImplProps {
  forceMount?: true;
}

export const ScrollAreaThumb = React.forwardRef<HTMLDivElement, ScrollAreaThumbProps>(
  (props, forwardedRef) => {
    const { forceMount, ...thumbProps } = props;
    const scrollbarContext = useScrollbarContext();

    if (forceMount || scrollbarContext.hasThumb) {
      return <ScrollAreaThumbImpl ref={forwardedRef} {...thumbProps} />;
    }

    return null;
  }
);
