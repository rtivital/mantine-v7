import React from 'react';
import { Box, BoxProps, useProps, StylesApiProps, useStyles, polymorphicFactory } from '../../core';
import classes from './UnstyledButton.module.css';

export type UnstyledButtonStylesNames = 'root';

export interface UnstyledButtonProps extends BoxProps, StylesApiProps<UnstyledButtonStylesNames> {
  __staticSelector?: string;
}

const defaultProps: Partial<UnstyledButtonProps> = {
  __staticSelector: 'UnstyledButton',
};

export interface UnstyledButtonFactory {
  props: UnstyledButtonProps;
  stylesNames: UnstyledButtonStylesNames;
  defaultComponent: 'button';
  defaultRef: HTMLButtonElement;
}

export const UnstyledButton = polymorphicFactory<UnstyledButtonFactory>(
  (props: UnstyledButtonProps & { component?: any }, ref) => {
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
    } = useProps('UnstyledButton', defaultProps, props);

    const getStyles = useStyles({
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
  }
);

UnstyledButton.displayName = '@mantine/core/UnstyledButton';
