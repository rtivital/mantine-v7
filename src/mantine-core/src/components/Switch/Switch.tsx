import React from 'react';
import { useId, useUncontrolled } from '@mantine/hooks';
import {
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  useVars,
  MantineColor,
  MantineSize,
  MantineRadius,
  extractStyleProps,
  getRadius,
  Box,
  getSize,
  getThemeColor,
  createVarsResolver,
  Factory,
} from '../../core';
import { InlineInput, InlineInputStylesNames } from '../InlineInput';
import { useSwitchGroupContext } from './SwitchGroup.context';
import { SwitchGroup } from './SwitchGroup/SwitchGroup';
import classes from './Switch.module.css';

export type SwitchStylesNames =
  | 'root'
  | 'track'
  | 'trackLabel'
  | 'thumb'
  | 'input'
  | InlineInputStylesNames;
export type SwitchVariant = string;
export type SwitchCssVariables =
  | '--switch-radius'
  | '--switch-height'
  | '--switch-width'
  | '--switch-thumb-size'
  | '--switch-label-font-size'
  | '--switch-track-label-padding'
  | '--switch-color';

export interface SwitchProps
  extends BoxProps,
    StylesApiProps<SwitchFactory>,
    ElementProps<'input', 'size'> {
  /** Id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Switch label */
  label?: React.ReactNode;

  /** Inner label when Switch is in unchecked state */
  offLabel?: React.ReactNode;

  /** Inner label when Switch is in checked state */
  onLabel?: React.ReactNode;

  /** Key of `theme.colors` or any valid CSS color to set input color in checked state, `theme.primaryColor` by default */
  color?: MantineColor;

  /** Controls size of all elements */
  size?: MantineSize | (string & {});

  /** Key of `theme.radius` or any valid CSS value to set `border-radius,` "xl" by default */
  radius?: MantineRadius | (string & {}) | number;

  /** Props spread to wrapper element */
  wrapperProps?: Record<string, any>;

  /** Icon inside the thumb of switch */
  thumbIcon?: React.ReactNode;

  /** Position of the label relative to the input, `'right'` by default */
  labelPosition?: 'left' | 'right';

  /** Description displayed below label */
  description?: React.ReactNode;

  /** Error displayed below label */
  error?: React.ReactNode;
}

export type SwitchFactory = Factory<{
  props: SwitchProps;
  ref: HTMLInputElement;
  stylesNames: SwitchStylesNames;
  vars: SwitchCssVariables;
  variant: SwitchVariant;
  staticComponents: {
    Group: typeof SwitchGroup;
  };
}>;

const defaultProps: Partial<SwitchProps> = {
  size: 'sm',
  radius: 'xl',
  labelPosition: 'right',
};

const varsResolver = createVarsResolver<SwitchFactory>((theme, { radius, color, size }) => ({
  '--switch-radius': getRadius(radius),
  '--switch-height': getSize(size, 'switch-height'),
  '--switch-width': getSize(size, 'switch-width'),
  '--switch-thumb-size': getSize(size, 'switch-thumb-size'),
  '--switch-label-font-size': getSize(size, 'switch-label-font-size'),
  '--switch-track-label-padding': getSize(size, 'switch-track-label-padding'),
  '--switch-color': getThemeColor(color, theme),
}));

export const Switch = factory<SwitchFactory>((_props, ref) => {
  const props = useProps('Switch', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    label,
    offLabel,
    onLabel,
    id,
    size,
    radius,
    wrapperProps,
    children,
    thumbIcon,
    checked,
    defaultChecked,
    onChange,
    labelPosition,
    description,
    error,
    disabled,
    variant,
    ...others
  } = props;

  const ctx = useSwitchGroupContext();
  const _size = size || ctx?.size;

  const getStyles = useStyles<SwitchFactory>({
    name: 'Switch',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
  });

  const _vars = useVars<SwitchFactory>({
    name: 'Switch',
    resolver: varsResolver,
    props,
    vars,
  });

  const { styleProps, rest } = extractStyleProps(others);
  const uuid = useId(id);

  const contextProps = ctx
    ? {
        checked: ctx.value.includes(rest.value as string),
        onChange: ctx.onChange,
      }
    : {};

  const [_checked, handleChange] = useUncontrolled({
    value: contextProps.checked ?? checked,
    defaultValue: defaultChecked,
    finalValue: false,
  });

  return (
    <InlineInput
      {...getStyles('root')}
      style={style}
      id={uuid}
      size={_size}
      labelPosition={labelPosition}
      label={label}
      description={description}
      error={error}
      disabled={disabled}
      __staticSelector="Switch"
      classNames={classNames}
      styles={styles}
      unstyled={unstyled}
      data-checked={contextProps.checked || undefined}
      variant={variant}
      vars={_vars}
      {...styleProps}
      {...wrapperProps}
    >
      <input
        {...rest}
        disabled={disabled}
        checked={_checked}
        onChange={(event) => {
          ctx ? contextProps.onChange?.(event) : onChange?.(event);
          handleChange(event.currentTarget.checked);
        }}
        id={uuid}
        ref={ref}
        type="checkbox"
        {...getStyles('input')}
      />

      <Box
        component="label"
        htmlFor={uuid}
        mod={{ error, 'label-position': labelPosition }}
        {...getStyles('track')}
      >
        <Box component="span" mod={{ 'reduce-motion': true }} {...getStyles('thumb')}>
          {thumbIcon}
        </Box>
        <span {...getStyles('trackLabel')}>{_checked ? onLabel : offLabel}</span>
      </Box>
    </InlineInput>
  );
});

Switch.displayName = '@mantine/core/Switch';
Switch.Group = SwitchGroup;
