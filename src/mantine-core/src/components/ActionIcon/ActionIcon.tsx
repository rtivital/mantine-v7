import React from 'react';
import {
  BoxProps,
  useProps,
  StylesApiProps,
  useStyles,
  MantineSize,
  MantineColor,
  MantineGradient,
  getRadius,
  polymorphicFactory,
  getSize,
  createVarsResolver,
  MantineRadius,
  PolymorphicFactory,
} from '../../core';
import { UnstyledButton } from '../UnstyledButton';
import { LoaderProps, Loader } from '../Loader';
import { ActionIconGroup } from './ActionIconGroup/ActionIconGroup';
import classes from './ActionIcon.module.css';

export type ActionIconVariant =
  | 'filled'
  | 'light'
  | 'outline'
  | 'transparent'
  | 'white'
  | 'subtle'
  | 'default'
  | 'gradient';

export type ActionIconStylesNames = 'root' | 'loader';
export type ActionIconCssVariables = {
  root: '--ai-radius' | '--ai-size' | '--ai-bg' | '--ai-hover' | '--ai-color' | '--ai-bd';
};

export interface ActionIconProps extends BoxProps, StylesApiProps<ActionIconFactory> {
  'data-disabled'?: boolean;
  __staticSelector?: string;

  /** Determines whether `Loader` component should be displayed instead of the `children`, `false` by default */
  loading?: boolean;

  /** Props added to the `Loader` component (only visible when `loading` prop is set) */
  loaderProps?: LoaderProps;

  /** Controls width and height of the button. Numbers are converted to rem `(1rem = 16px)`. `'md'` by default. */
  size?: MantineSize | (string & {}) | number;

  /** Key of `theme.colors` or any valid CSS color. Default value is `theme.primaryColor`.  */
  color?: MantineColor;

  /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem `(1rem = 16px)`. `theme.defaultRadius` by default. */
  radius?: MantineRadius | (string & {}) | number;

  /** Gradient data used when `variant="gradient"`, default value is `theme.defaultGradient` */
  gradient?: MantineGradient;

  /** Sets `disabled` and `data-disabled` attributes on the button element */
  disabled?: boolean;

  /** Icon displayed inside the button */
  children?: React.ReactNode;
}

export type ActionIconFactory = PolymorphicFactory<{
  props: ActionIconProps;
  defaultComponent: 'button';
  defaultRef: HTMLButtonElement;
  stylesNames: ActionIconStylesNames;
  variant: ActionIconVariant;
  vars: ActionIconCssVariables;
  staticComponents: {
    Group: typeof ActionIconGroup;
  };
}>;

const defaultProps: Partial<ActionIconProps> = {
  variant: 'filled',
  size: 'md',
};

const varsResolver = createVarsResolver<ActionIconFactory>(
  (theme, { size, radius, variant, gradient, color }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant!,
    });

    return {
      root: {
        '--ai-size': getSize(size, 'ai-size'),
        '--ai-radius': getRadius(radius),
        '--ai-bg': colors.background,
        '--ai-hover': colors.hover,
        '--ai-color': colors.color,
        '--ai-bd': colors.border,
      },
    };
  }
);

export const ActionIcon = polymorphicFactory<ActionIconFactory>((_props, ref) => {
  const props = useProps('ActionIcon', defaultProps, _props);
  const {
    className,
    unstyled,
    variant,
    classNames,
    styles,
    style,
    loading,
    loaderProps,
    size,
    color,
    radius,
    __staticSelector,
    gradient,
    vars,
    children,
    disabled,
    'data-disabled': dataDisabled,
    ...others
  } = props;

  const getStyles = useStyles<ActionIconFactory>({
    name: ['ActionIcon', __staticSelector],
    props,
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return (
    <UnstyledButton
      {...getStyles('root', { active: !disabled && !loading && !dataDisabled })}
      {...others}
      unstyled={unstyled}
      variant={variant}
      size={size}
      disabled={disabled || loading}
      ref={ref}
      mod={['action-icon', { loading, disabled: disabled || dataDisabled }]}
    >
      {loading ? (
        <Loader
          {...getStyles('loader')}
          color="var(--ai-color)"
          size="calc(var(--ai-size) * 0.65)"
          {...loaderProps}
        />
      ) : (
        children
      )}
    </UnstyledButton>
  );
});

ActionIcon.displayName = '@mantine/core/ActionIcon';
ActionIcon.Group = ActionIconGroup;
