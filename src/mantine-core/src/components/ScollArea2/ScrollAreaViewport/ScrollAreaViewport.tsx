import React, { forwardRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { Box, BoxProps, ElementProps, useProps } from '../../../core';
import { useScrollAreaContext } from '../ScrollArea.context';

export interface ScrollAreaViewportProps extends BoxProps, ElementProps<'div'> {}

const defaultProps: Partial<ScrollAreaViewportProps> = {};

export const ScrollAreaViewport = forwardRef<HTMLDivElement, ScrollAreaViewportProps>(
  (props, ref) => {
    const { children, ...others } = useProps('ScrollAreaViewport', defaultProps, props);
    const ctx = useScrollAreaContext();
    const rootRef = useMergedRef(ref, ctx.onViewportChange);

    return (
      <Box
        {...ctx.getStyles('viewport')}
        {...others}
        ref={rootRef}
        style={{
          // @YYY
          overflowX: ctx.scrollbarXEnabled ? 'scroll' : 'hidden',
          overflowY: ctx.scrollbarYEnabled ? 'scroll' : 'hidden',
          ...props.style,
        }}
      >
        <div {...ctx.getStyles('viewportInner')} ref={ctx.onContentChange}>
          {children}
        </div>
      </Box>
    );
  }
);

ScrollAreaViewport.displayName = '@mantine/core/ScrollAreaViewport';
