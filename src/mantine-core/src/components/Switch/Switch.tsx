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
  useMantineTheme,
} from '../../core';
import { InlineInput } from '../InlineInput';
import { useSwitchGroupContext } from './SwitchGroup.context';
import { SwitchGroup } from './SwitchGroup/SwitchGroup';
import classes from './Switch.module.css';

export type SwitchStylesNames = 'root' | 'track' | 'trackLabel' | 'thumb' | 'input';
export type SwitchVariant = string;
export type SwitchCssVariables =
  | '--switch-radius'
  | '--switch-height'
  | '--switch-width'
  | '--switch-handle-size'
  | '--switch-label-font-size'
  | '--switch-label-padding'
  | '--switch-color';

export interface SwitchStylesParams {
  size: MantineSize | (string & {}) | undefined;
  radius: MantineRadius | (string & {}) | number | undefined;
}

export interface SwitchProps
  extends BoxProps,
    StylesApiProps<SwitchStylesNames, SwitchVariant, SwitchCssVariables>,
    Omit<ElementProps<'input'>, 'size'> {
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

export interface SwitchFactory {
  props: SwitchProps;
  ref: HTMLInputElement;
  stylesNames: SwitchStylesNames;
  vars: SwitchCssVariables;
  stylesParams: SwitchStylesParams;
  staticComponents: {
    Group: typeof SwitchGroup;
  };
}

const defaultProps: Partial<SwitchProps> = {
  size: 'sm',
  radius: 'xl',
  labelPosition: 'right',
};

export const Switch = factory<SwitchFactory>((props, ref) => {
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
  } = useProps('Switch', defaultProps, props);

  const theme = useMantineTheme();
  const ctx = useSwitchGroupContext();
  const _size = size || ctx?.size;

  const getStyles = useStyles({
    name: 'Switch',
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  const _vars = useVars<SwitchStylesParams>('Switch', vars, {
    size: _size,
    radius,
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
      vars={{
        '--switch-radius': getRadius(radius),
        '--switch-height': getSize(_size, 'switch-height'),
        '--switch-width': getSize(_size, 'switch-width'),
        '--switch-handle-size': getSize(_size, 'switch-handle-size'),
        '--switch-label-font-size': getSize(_size, 'switch-label-font-size'),
        '--switch-track-label-padding': getSize(_size, 'switch-track-label-padding'),
        '--switch-color': getThemeColor(color, theme),
        ..._vars,
      }}
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
        <Box
          component="span"
          mod={{ 'respect-reduce-motion': theme.respectReducedMotion }}
          {...getStyles('thumb')}
        >
          {thumbIcon}
        </Box>
        <span {...getStyles('trackLabel')}>{_checked ? onLabel : offLabel}</span>
      </Box>
    </InlineInput>
  );
});

Switch.displayName = '@mantine/core/Switch';
Switch.Group = SwitchGroup;
