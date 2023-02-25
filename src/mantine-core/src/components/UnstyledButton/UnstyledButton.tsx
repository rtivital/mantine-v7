import { forwardRef } from 'react';
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

export interface UnstyledButtonProps extends BoxProps, StylesApiProps<UnstyledButtonStylesNames> {}

export const _UnstyledButton = forwardRef<
  HTMLButtonElement,
  UnstyledButtonProps & { component?: any }
>((props, ref) => {
  const {
    className,
    component = 'button',
    unstyled,
    variant,
    classNames,
    styles,
    style,
    ...others
  } = useComponentDefaultProps('UnstyledButton', {}, props);

  const getStyles = useStylesApi({
    name: 'UnstyledButton',
    classes,
    classNames,
    styles,
    style,
  });

  return (
    <Box
      {...getStyles('root')}
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
