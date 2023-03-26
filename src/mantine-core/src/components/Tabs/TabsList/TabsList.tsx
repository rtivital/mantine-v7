import React from 'react';
import { Box, BoxProps, useProps, factory, ElementProps, StylesApiProps } from '../../../core';
import { useTabsContext } from '../Tabs.context';

export type TabsListStylesNames = 'list';

export interface TabsListProps
  extends BoxProps,
    StylesApiProps<TabsListStylesNames>,
    ElementProps<'div'> {
  /** <Tabs.Tab /> components */
  children: React.ReactNode;

  /** Determines whether tabs should take the whole space, `false` by default */
  grow?: boolean;

  /** Tabs alignment, `flex-start` by default */
  justify?: React.CSSProperties['justifyContent'];
}

export interface TabsListFactory {
  props: TabsListProps;
  ref: HTMLDivElement;
  stylesNames: TabsListStylesNames;
}

const defaultProps: Partial<TabsListProps> = {};

export const TabsList = factory<TabsListFactory>((props, ref) => {
  const { children, className, grow, justify, classNames, styles, style, ...others } = useProps(
    'TabsList',
    defaultProps,
    props
  );

  const ctx = useTabsContext();

  return (
    <Box
      {...others}
      {...ctx.getStyles('list', { className, style, classNames, styles, variant: ctx.variant })}
      ref={ref}
      role="tablist"
      aria-orientation={ctx.orientation}
      data-orientation={ctx.orientation}
      data-placement={ctx.orientation === 'vertical' ? ctx.placement : undefined}
      data-inverted={ctx.inverted || undefined}
      data-variant={ctx.variant}
      data-grow={grow || undefined}
      vars={{ '--tabs-justify': justify }}
    >
      {children}
    </Box>
  );
});

TabsList.displayName = '@mantine/core/TabsList';
