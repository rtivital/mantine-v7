import React from 'react';
import {
  useComponentDefaultProps,
  factory,
  ElementProps,
  MantineColor,
  createScopedKeydownHandler,
  useDirection,
} from '../../../core';
import { UnstyledButton, UnstyledButtonProps } from '../../UnstyledButton';
import { useTabsContext } from '../Tabs.context';

export type TabsTabStylesNames = 'tab' | 'tabRightSection' | 'tabLeftSection' | 'tabLabel';

export interface TabsTabProps extends UnstyledButtonProps, ElementProps<'button'> {
  /** Value that is used to connect Tab with associated panel */
  value: string;

  /** Tab label */
  children?: React.ReactNode;

  /** Content displayed on the right side of the label, for example, icon */
  rightSection?: React.ReactNode;

  /** Content displayed on the left side of the label, for example, icon */
  leftSection?: React.ReactNode;

  /** Key of theme.colors, controls control color based on variant */
  color?: MantineColor;
}

export interface TabsTabFactory {
  props: TabsTabProps;
  ref: HTMLButtonElement;
  stylesNames: TabsTabStylesNames;
}

const defaultProps: Partial<TabsTabProps> = {};

export const TabsTab = factory<TabsTabFactory>((props, ref) => {
  const { className, children, rightSection, leftSection, value, onClick, onKeyDown, ...others } =
    useComponentDefaultProps('TabsTab', defaultProps, props);

  const { dir } = useDirection();
  const ctx = useTabsContext();
  const isActive = value === ctx.value;
  const activateTab = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    ctx.onChange(ctx.allowTabDeactivation ? (value === ctx.value ? null : value) : value);
    onClick?.(event);
  };

  return (
    <UnstyledButton
      {...others}
      {...ctx.getStyles('tab', { className })}
      unstyled={ctx.unstyled}
      data-active={isActive || undefined}
      ref={ref}
      role="tab"
      id={ctx.getTabId(value)}
      aria-selected={isActive}
      tabIndex={isActive || ctx.value === null ? 0 : -1}
      aria-controls={ctx.getPanelId(value)}
      onClick={activateTab}
      onKeyDown={createScopedKeydownHandler({
        siblingSelector: '[role="tab"]',
        parentSelector: '[role="tablist"]',
        activateOnFocus: ctx.activateTabWithKeyboard,
        loop: ctx.loop,
        orientation: ctx.orientation || 'horizontal',
        dir,
        onKeyDown,
      })}
    >
      {leftSection && <span {...ctx.getStyles('tabLeftSection')}>{leftSection}</span>}
      {children && <span {...ctx.getStyles('tabLabel')}>{children}</span>}
      {rightSection && <span {...ctx.getStyles('tabRightSection')}>{rightSection}</span>}
    </UnstyledButton>
  );
});
