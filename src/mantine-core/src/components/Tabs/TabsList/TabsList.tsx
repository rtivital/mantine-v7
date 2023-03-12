import React from 'react';
import { Box, BoxProps, useComponentDefaultProps, factory, ElementProps } from '../../../core';
import { useTabsContext } from '../Tabs.context';

export type TabsListStylesNames = 'list';

export interface TabsListProps extends BoxProps, ElementProps<'div'> {
  /** <Tabs.Tab /> components */
  children: React.ReactNode;

  /** Determines whether tabs should take the whole space, `false` by default */
  grow?: boolean;

  /** Tabs alignment, `left` by default */
  position?: 'left' | 'center' | 'right' | 'apart';
}

export interface TabsListFactory {
  props: TabsListProps;
  ref: HTMLDivElement;
  stylesNames: TabsListStylesNames;
}

const defaultProps: Partial<TabsListProps> = {
  grow: false,
  position: 'left',
};

export const TabsList = factory<TabsListFactory>((props, ref) => {
  const { children, className, grow, position, ...others } = useComponentDefaultProps(
    'TabsList',
    defaultProps,
    props
  );

  const ctx = useTabsContext();

  return (
    <Box
      {...others}
      {...ctx.getStyles('list', { className })}
      ref={ref}
      role="tablist"
      aria-orientation={ctx.orientation}
      data-orientation={ctx.orientation}
      data-variant={ctx.variant}
      data-grow={grow || undefined}
    >
      {children}
    </Box>
  );
});
