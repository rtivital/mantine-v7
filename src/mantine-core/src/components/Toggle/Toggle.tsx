import React from 'react';
import {
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  getSize,
  getRadius,
  MantineSize,
  MantineRadius,
  MantineColor,
} from '../../core';
import { UnstyledButton } from '../UnstyledButton';
import classes from './Toggle.module.css';

export type ToggleStylesNames = 'root';
export type ToggleVariant = 'filled' | 'light';
export type ToggleCssVariables = {
  root: '--toggle-size' | '--toggle-radius' | '--toggle-bg' | '--toggle-hover' | '--toggle-color';
};

export interface ToggleProps
  extends BoxProps,
    StylesApiProps<ToggleFactory>,
    ElementProps<'button'> {
  /** Determines whether the toggle should have active styles, `false` by default */
  active?: boolean;

  /** Controls `min-width` and `height` of the toggle, `'md'` by default */
  size?: MantineSize | (string & {}) | number;

  /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `theme.defaultRadius` by default. */
  radius?: MantineRadius | (string & {}) | number;

  /** Key of `theme.colors` or any valid CSS color. Controls colors of active state. Default value is `theme.primaryColor`.  */
  color?: MantineColor;
}

export type ToggleFactory = Factory<{
  props: ToggleProps;
  ref: HTMLButtonElement;
  stylesNames: ToggleStylesNames;
  vars: ToggleCssVariables;
  variant: ToggleVariant;
}>;

const defaultProps: Partial<ToggleProps> = {
  size: 'md',
  variant: 'light',
};

const varsResolver = createVarsResolver<ToggleFactory>(
  (theme, { size, radius, variant, color }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      variant: variant!,
    });

    return {
      root: {
        '--toggle-size': getSize(size, 'toggle-size'),
        '--toggle-radius': getRadius(radius),
        '--toggle-bg': colors.background,
        '--toggle-hover': colors.hover,
        '--toggle-color': colors.color,
      },
    };
  }
);

export const Toggle = factory<ToggleFactory>((_props, ref) => {
  const props = useProps('Toggle', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    active,
    radius,
    color,
    variant,
    ...others
  } = props;

  const getStyles = useStyles<ToggleFactory>({
    name: 'Toggle',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return (
    <UnstyledButton
      {...getStyles('root', { active: true, variant })}
      ref={ref}
      mod={{ active }}
      variant={variant}
      {...others}
      aria-pressed={active}
    />
  );
});

Toggle.classes = classes;
Toggle.displayName = '@mantine/core/Toggle';
