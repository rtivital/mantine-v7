import React, { forwardRef } from 'react';
import {
  BoxProps,
  useComponentDefaultProps,
  createPolymorphicComponent,
  StylesApiProps,
  useStylesApi,
} from '../../core';
import { UnstyledButton } from '../UnstyledButton';
import classes from './ActionIcon.module.css';

export type ActionIconStylesNames = 'root';

export interface ActionIconProps extends BoxProps, StylesApiProps<ActionIconStylesNames> {}

const defaultProps: Partial<ActionIconProps> = {};

export const _ActionIcon = forwardRef<HTMLButtonElement, ActionIconProps & { component?: any }>(
  (props, ref) => {
    const { className, unstyled, variant, classNames, styles, style, ...others } =
      useComponentDefaultProps('ActionIcon', defaultProps, props);

    const getStyles = useStylesApi({
      name: 'ActionIcon',
      className,
      style,
      classes,
      classNames,
      styles,
      unstyled,
    });

    return <UnstyledButton {...getStyles('root', { focusable: true })} ref={ref} {...others} />;
  }
);

_ActionIcon.displayName = '@mantine/core/ActionIcon';

export const ActionIcon = createPolymorphicComponent<'button', ActionIconProps>(_ActionIcon);
