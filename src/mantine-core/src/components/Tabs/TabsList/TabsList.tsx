import React from 'react';
import {
  Box,
  BoxProps,
  useProps,
  factory,
  ElementProps,
  StylesApiProps,
  Factory,
} from '../../../core';
import { useTabsContext } from '../Tabs.context';

export type TabsListStylesNames = 'list';

export interface TabsListProps
  extends BoxProps,
    StylesApiProps<TabsListFactory>,
    ElementProps<'div'> {
  /** <Tabs.Tab /> components */
  children: React.ReactNode;

  /** Determines whether tabs should take the whole space, `false` by default */
  grow?: boolean;

  /** Tabs alignment, `flex-start` by default */
  justify?: React.CSSProperties['justifyContent'];
}

export type TabsListFactory = Factory<{
  props: TabsListProps;
  ref: HTMLDivElement;
  stylesNames: TabsListStylesNames;
}>;

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
      {...ctx.getStyles('list', {
        className,
        style,
        classNames,
        styles,
        variant: ctx.variant,
      })}
      ref={ref}
      role="tablist"
      variant={ctx.variant}
      mod={{
        grow,
        orientation: ctx.orientation,
        placement: ctx.orientation === 'vertical' && ctx.placement,
        inverted: ctx.inverted,
      }}
      aria-orientation={ctx.orientation}
      vars={{ '--tabs-justify': justify }}
    >
      {children}
    </Box>
  );
});

TabsList.displayName = '@mantine/core/TabsList';
