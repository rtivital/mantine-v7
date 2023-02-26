import React, { forwardRef } from 'react';
import {
  Box,
  BoxProps,
  useComponentDefaultProps,
  createPolymorphicComponent,
  StylesApiProps,
  useStylesApi,
} from '../../core';
import classes from './UnstyledButton.module.css';

export type UnstyledButtonStylesNames = 'root';

export interface UnstyledButtonProps extends BoxProps, StylesApiProps<UnstyledButtonStylesNames> {
  __staticSelector?: string;
}

const defaultProps: Partial<UnstyledButtonProps> = {
  __staticSelector: 'UnstyledButton',
};

export const _UnstyledButton = forwardRef<
  HTMLButtonElement,
  UnstyledButtonProps & { component?: any }
>((props, ref) => {
  const {
    className,
    component = 'button',
    __staticSelector,
    unstyled,
    variant,
    classNames,
    styles,
    style,
    ...others
  } = useComponentDefaultProps('UnstyledButton', defaultProps, props);

  const getStyles = useStylesApi({
    name: __staticSelector!,
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  return (
    <Box
      {...getStyles('root', { focusable: true })}
      component={component}
      ref={ref}
      type={component === 'button' ? 'button' : undefined}
      {...others}
    />
  );
});

_UnstyledButton.displayName = '@mantine/core/UnstyledButton';

export const UnstyledButton = createPolymorphicComponent<'button', UnstyledButtonProps>(
  _UnstyledButton
);
