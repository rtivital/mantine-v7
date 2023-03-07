import React from 'react';
import {
  factory,
  Box,
  BoxProps,
  StylesApiProps,
  useComponentDefaultProps,
  useStylesApi,
  useComponentVars,
  rem,
} from '../../../core';
import classes from './ActionIconGroup.module.css';

export type ActionIconGroupStylesNames = 'root';
export type ActionIconGroupVariant = string;
export type ActionIconGroupCssVariables = '--border-width';

export interface ActionIconGroupProps
  extends BoxProps,
    StylesApiProps<
      ActionIconGroupStylesNames,
      ActionIconGroupVariant,
      ActionIconGroupCssVariables
    > {
  /** `<ActionIcon />` components */
  children?: React.ReactNode;

  /** Horizontal or vertical orientation */
  orientation?: 'horizontal' | 'vertical';

  /** Child `<ActionIcon />` border width, default value in 1, numbers are converted to rem (1rem = 16px) */
  borderWidth?: number | string;
}

export interface ActionIconGroupFactory {
  props: ActionIconGroupProps;
  ref: HTMLDivElement;
  stylesNames: ActionIconGroupStylesNames;
  vars: ActionIconGroupCssVariables;
}

const defaultProps: Partial<ActionIconGroupProps> = {
  orientation: 'horizontal',
  borderWidth: 1,
};

export const ActionIconGroup = factory<ActionIconGroupFactory>((props, ref) => {
  const {
    className,
    style,
    classNames,
    styles,
    unstyled,
    orientation,
    vars,
    borderWidth,
    ...others
  } = useComponentDefaultProps('ActionIconGroup', defaultProps, props);
  const _vars = useComponentVars('ActionIconGroup', vars);

  const getStyles = useStylesApi({
    name: 'ActionIconGroup',
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  return (
    <Box
      {...getStyles('root')}
      ref={ref}
      data-orientation={orientation}
      vars={{ '--border-width': rem(borderWidth), ..._vars }}
      {...others}
    />
  );
});
