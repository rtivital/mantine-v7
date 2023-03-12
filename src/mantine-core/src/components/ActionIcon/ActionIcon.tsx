import React from 'react';
import {
  BoxProps,
  useComponentDefaultProps,
  StylesApiProps,
  useStylesApi,
  MantineSize,
  MantineColor,
  MantineGradient,
  getRadius,
  useMantineTheme,
  polymorphicFactory,
  useComponentVars,
  getSize,
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
export type ActionIconCssVariables =
  | '--radius'
  | '--size'
  | '--bg'
  | '--hover'
  | '--color'
  | '--bd';

export interface ActionIconStylesParams {
  color: MantineColor | string | undefined;
  size: MantineSize | string | number | undefined;
  radius: MantineSize | string | number | undefined;
  gradient: MantineGradient | undefined;
  variant: string | undefined;
}

export interface ActionIconProps
  extends BoxProps,
    StylesApiProps<
      ActionIconStylesNames,
      ActionIconVariant,
      ActionIconCssVariables,
      ActionIconStylesParams
    > {
  __staticSelector?: string;

  /** Determines whether Loader component should be displayed instead of the icon */
  loading?: boolean;

  /** Props added to Loader component (only visible when `loading` prop is set) */
  loaderProps?: LoaderProps;

  /** Width and height of the button. Action has predefined xs-xl values, number value (in px) ix converted to rem (1rem = 16px). `md` by default */
  size?: MantineSize | string | number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: MantineColor | string;

  /** Key of theme.radius or any valid CSS value to set border-radius, `theme.defaultRadius` by default */
  radius?: MantineSize | string | number;

  /** Gradient styles used when `variant="gradient"`, default value is `theme.defaultGradient` */
  gradient?: MantineGradient;

  /** Indicates disabled state */
  disabled?: boolean;

  /** Icon displayed inside button */
  children?: React.ReactNode;
}

export interface ActionIconFactory {
  props: ActionIconProps;
  defaultComponent: 'button';
  defaultRef: HTMLButtonElement;
  stylesNames: ActionIconStylesNames;
  variant: ActionIconVariant;
  vars: ActionIconCssVariables;
  stylesParams: ActionIconStylesParams;
  staticComponents: {
    Group: typeof ActionIconGroup;
  };
}

const defaultProps: Partial<ActionIconProps> = {
  variant: 'filled',
  size: 'md',
};

export const ActionIcon = polymorphicFactory<ActionIconFactory>((props, ref) => {
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
    ...others
  } = useComponentDefaultProps('ActionIcon', defaultProps, props);

  const theme = useMantineTheme();
  const _vars = useComponentVars<ActionIconStylesParams>('ActionIcon', vars, {
    color,
    size,
    radius,
    gradient,
    variant,
  });

  const getStyles = useStylesApi({
    name: ['ActionIcon', __staticSelector],
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  const colorsVars = theme.variantColorResolver({
    color: color || theme.primaryColor,
    theme,
    gradient,
    variant: variant!,
  });

  return (
    <UnstyledButton
      {...getStyles('root', { active: !disabled && !loading })}
      {...others}
      unstyled={unstyled}
      data-action-icon
      data-variant={variant}
      data-loading={loading || undefined}
      data-disabled={(disabled && !loading) || undefined}
      disabled={disabled || loading}
      ref={ref}
      vars={{
        '--size': getSize(size),
        '--radius': getRadius(theme, radius),
        ...colorsVars,
        ..._vars,
      }}
    >
      {loading ? (
        <Loader
          {...getStyles('loader')}
          color={colorsVars['--color']}
          size="70%"
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
