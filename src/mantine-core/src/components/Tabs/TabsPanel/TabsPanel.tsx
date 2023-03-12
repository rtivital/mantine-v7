import React from 'react';
import { Box, BoxProps, useComponentDefaultProps, factory, ElementProps } from '../../../core';
import { useTabsContext } from '../Tabs.context';

export type TabsPanelStylesNames = 'panel';

export interface TabsPanelProps extends BoxProps, ElementProps<'div'> {
  /** Panel content */
  children: React.ReactNode;

  /** Value of associated control */
  value: string;
}

export interface TabsPanelFactory {
  props: TabsPanelProps;
  ref: HTMLDivElement;
  stylesNames: TabsPanelStylesNames;
}

const defaultProps: Partial<TabsPanelProps> = {};

export const TabsPanel = factory<TabsPanelFactory>((props, ref) => {
  const { children, className, value, ...others } = useComponentDefaultProps(
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
      {...ctx.getStyles('panel', { className })}
      ref={ref}
      data-hidden={!active || undefined}
      data-orientation={ctx.orientation}
      role="tabpanel"
      id={ctx.getPanelId(value)}
      aria-labelledby={ctx.getTabId(value)}
    >
      {content}
    </Box>
  );
});
