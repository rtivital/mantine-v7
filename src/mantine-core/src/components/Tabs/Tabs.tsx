import React from 'react';
import { useId, useUncontrolled } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  MantineColor,
  MantineRadius,
  StylesApiProps,
  factory,
  useProps,
  useVars,
  getSafeId,
  useStyles,
  ElementProps,
  getRadius,
  getThemeColor,
  useMantineTheme,
} from '../../core';
import { TabsProvider } from './Tabs.context';
import { TabsList, TabsListStylesNames } from './TabsList/TabsList';
import { TabsPanel, TabsPanelStylesNames } from './TabsPanel/TabsPanel';
import { TabsTab, TabsTabStylesNames } from './TabsTab/TabsTab';
import classes from './Tabs.module.css';

export type TabsStylesNames =
  | 'root'
  | TabsListStylesNames
  | TabsPanelStylesNames
  | TabsTabStylesNames;

export type TabsVariant = 'default' | 'outline' | 'pills';
export type TabsCssVariables = '--tabs-color' | '--tabs-radius';
export interface TabsStylesParams {
  color: MantineColor | undefined;
  radius: MantineRadius | number | string | undefined;
}

export interface TabsProps
  extends BoxProps,
    StylesApiProps<TabsStylesNames, TabsVariant, TabsCssVariables, TabsStylesParams>,
    Omit<ElementProps<'div'>, 'defaultValue' | 'value' | 'onChange'> {
  /** Default value for uncontrolled component */
  defaultValue?: string | null;

  /** Value for controlled component */
  value?: string | null;

  /** Called when tab changes */
  onChange?(value: string | null): void;

  /** Tabs orientation, vertical or horizontal */
  orientation?: 'vertical' | 'horizontal';

  /** Tabs.List placement relative to Tabs.Panel, applicable only for orientation="vertical", left by default */
  placement?: 'left' | 'right';

  /** Base id, used to generate ids that connect labels with controls, generated randomly by default */
  id?: string;

  /** Determines whether arrow key presses should loop though items (first to last and last to first) */
  loop?: boolean;

  /** Determines whether tab should be activated with arrow key press, defaults to true */
  activateTabWithKeyboard?: boolean;

  /** Determines whether tab can be deactivated, defaults to false */
  allowTabDeactivation?: boolean;

  /** Tabs content */
  children: React.ReactNode;

  /** Changes colors of Tabs.Tab components when variant is `pills` and `default`, does nothing for other variants */
  color?: MantineColor;

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: MantineRadius;

  /** Determines whether tabs should have inverted styles */
  inverted?: boolean;

  /** If set to false, Tabs.Panel content will not stay mounted when tab is not active */
  keepMounted?: boolean;
}

export interface TabsFactory {
  props: TabsProps;
  ref: HTMLDivElement;
  stylesNames: TabsStylesNames;
  vars: TabsCssVariables;
  stylesParams: TabsStylesParams;
  staticComponents: {
    Tab: typeof TabsTab;
    Panel: typeof TabsPanel;
    List: typeof TabsList;
  };
}

const VALUE_ERROR =
  'Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value';

const defaultProps: Partial<TabsProps> = {
  keepMounted: true,
  orientation: 'horizontal',
  loop: true,
  activateTabWithKeyboard: true,
  allowTabDeactivation: false,
  unstyled: false,
  inverted: false,
  variant: 'default',
  placement: 'left',
};

export const Tabs = factory<TabsFactory>((props, ref) => {
  const {
    defaultValue,
    value,
    onChange,
    orientation,
    children,
    loop,
    id,
    activateTabWithKeyboard,
    allowTabDeactivation,
    variant,
    color,
    radius,
    inverted,
    placement,
    keepMounted,
    classNames,
    styles,
    unstyled,
    className,
    style,
    vars,
    ...others
  } = useProps('Tabs', defaultProps, props);
  const theme = useMantineTheme();

  const uid = useId(id);

  const [currentTab, setCurrentTab] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange,
  });

  const getStyles = useStyles({
    name: 'Tabs',
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  const _vars = useVars<TabsStylesParams>('Tabs', vars, {
    color,
    radius,
  });

  return (
    <TabsProvider
      value={{
        placement,
        value: currentTab,
        orientation,
        id: uid,
        loop,
        activateTabWithKeyboard,
        getTabId: getSafeId(`${uid}-tab`, VALUE_ERROR),
        getPanelId: getSafeId(`${uid}-panel`, VALUE_ERROR),
        onChange: setCurrentTab,
        allowTabDeactivation,
        variant,
        color,
        radius,
        inverted,
        keepMounted,
        unstyled,
        getStyles,
      }}
    >
      <Box
        ref={ref}
        id={uid}
        data-variant={variant}
        data-orientation={orientation}
        data-placement={orientation === 'vertical' ? placement : undefined}
        vars={{
          '--tabs-radius': getRadius(radius),
          '--tabs-color': getThemeColor(color, theme),
          ..._vars,
        }}
        {...getStyles('root')}
        {...others}
      >
        {children}
      </Box>
    </TabsProvider>
  );
});

Tabs.displayName = '@mantine/core/Tabs';
Tabs.Tab = TabsTab;
Tabs.Panel = TabsPanel;
Tabs.List = TabsList;
