import React from 'react';
import { useDebounceCallback } from '@mantine/hooks';
import { useScrollAreaContext } from '../ScrollArea.context';
import {
  ScrollAreaScrollbarVisibleProps,
  ScrollAreaScrollbarVisible,
} from './ScrollAreaScrollbarVisible';
import { useResizeObserver } from '../use-resize-observer';

export interface ScrollAreaScrollbarAutoProps extends ScrollAreaScrollbarVisibleProps {
  forceMount?: true;
}

export const ScrollAreaScrollbarAuto = React.forwardRef<
  HTMLDivElement,
  ScrollAreaScrollbarAutoProps
>((props, forwardedRef) => {
  const context = useScrollAreaContext();
  const { forceMount, ...scrollbarProps } = props;
  const [visible, setVisible] = React.useState(false);
  const isHorizontal = props.orientation === 'horizontal';
  const handleResize = useDebounceCallback(() => {
    if (context.viewport) {
      const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
      const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
      setVisible(isHorizontal ? isOverflowX : isOverflowY);
    }
  }, 10);

  useResizeObserver(context.viewport, handleResize);
  useResizeObserver(context.content, handleResize);

  if (!forceMount && !visible) {
    return null;
  }

  return (
    <ScrollAreaScrollbarVisible
      data-state={visible ? 'visible' : 'hidden'}
      {...scrollbarProps}
      ref={forwardedRef}
    />
  );
});
