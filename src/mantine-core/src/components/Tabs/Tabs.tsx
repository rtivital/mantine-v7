import React from 'react';
import { useId, useUncontrolled } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  MantineColor,
  MantineRadius,
  StylesApiProps,
  factory,
  useComponentDefaultProps,
  getSafeId,
  useStylesApi,
  ElementProps,
} from '../../core';
import { TabsProvider } from './Tabs.context';
import { TabsListStylesNames } from './TabsList/TabsList';
import { TabsPanelStylesNames } from './TabsPanel/TabsPanel';
import classes from './Tabs.module.css';

export type TabsStylesNames = 'root' | TabsListStylesNames | TabsPanelStylesNames;
export type TabsVariant = 'default' | 'outline' | 'pills';
export type TabsCssVariables = '--test';
export interface TabsStylesParams {}

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

  /** Changes tabs visuals */
  variant?: TabsVariant;

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
}

const VALUE_ERROR =
  'Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value';

const defaultProps: Partial<TabsProps> = {
  keepMounted: true,
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
    ...others
  } = useComponentDefaultProps('Tabs', defaultProps, props);

  const uid = useId(id);

  const [currentTab, setCurrentTab] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange,
  });

  const getStyles = useStylesApi({
    name: 'Tabs',
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
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
        data-tabs
        data-variant={variant}
        data-orientation={orientation}
        data-placement={placement}
        {...getStyles('root')}
        {...others}
      >
        {children}
      </Box>
    </TabsProvider>
  );
});
