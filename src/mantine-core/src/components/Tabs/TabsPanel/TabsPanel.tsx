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

export type TabsPanelStylesNames = 'panel';

export interface TabsPanelProps
  extends BoxProps,
    StylesApiProps<TabsPanelFactory>,
    ElementProps<'div'> {
  /** Panel content */
  children: React.ReactNode;

  /** Value of associated control */
  value: string;
}

export type TabsPanelFactory = Factory<{
  props: TabsPanelProps;
  ref: HTMLDivElement;
  stylesNames: TabsPanelStylesNames;
}>;

const defaultProps: Partial<TabsPanelProps> = {};

export const TabsPanel = factory<TabsPanelFactory>((props, ref) => {
  const { children, className, value, classNames, styles, style, ...others } = useProps(
    'TabsPanel',
    defaultProps,
    props
  );

  const ctx = useTabsContext();

  const active = ctx.value === value;
  const content = ctx.keepMounted ? children : active ? children : null;

  return (
    <Box
      {...others}
      {...ctx.getStyles('panel', { className, classNames, styles: styles as any, style })}
      ref={ref}
      mod={{ hidden: !active, orientation: ctx.orientation }}
      role="tabpanel"
      id={ctx.getPanelId(value)}
      aria-labelledby={ctx.getTabId(value)}
    >
      {content}
    </Box>
  );
});

TabsPanel.displayName = '@mantine/core/TabsPanel';
