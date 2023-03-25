import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  polymorphicFactory,
  useProps,
  useStyles,
  MantineRadius,
} from '../../core';
import classes from './Input.module.css';

export type InputStylesNames = 'root';
export type InputVariant = 'default' | 'filled' | 'unstyled';
export type InputCssVariables = '--test';

export interface InputStylesParams {}

export interface InputSharedProps {
  /** Content section rendered on the left side of the input */
  leftSection?: React.ReactNode;

  /** Left section width, used to set `width` of the section and input `padding-left`, by default equals to input height */
  leftSectionWidth?: React.CSSProperties['width'];

  /** Props added to `leftSection` element */
  leftSectionProps?: React.ComponentPropsWithoutRef<'div'>;

  /** Content section rendered on the right side of the input */
  rightSection?: React.ReactNode;

  /** Right section width, used to set `width` of the section and input `padding-right`, by default equals to input height */
  rightSectionWidth?: React.CSSProperties['width'];

  /** Props added to `rightSection` element */
  rightSectionProps?: React.ComponentPropsWithoutRef<'div'>;

  /** Props added to root element of `Input` component */
  wrapperProps?: React.ComponentPropsWithoutRef<'div'>;

  /** Sets `required` attribute on the `input` element */
  required?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem (1rem = 16px), `theme.defaultRadius` by default */
  radius?: MantineRadius | (string & {}) | number;

  /** Sets `disabled` attribute on the `input` element */
  disabled?: boolean;

  /** Input size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export interface InputProps
  extends BoxProps,
    InputSharedProps,
    StylesApiProps<InputStylesNames, InputVariant, InputCssVariables, InputStylesParams> {
  __staticSelector?: string;

  /** Determines whether the input should have error styles and `aria-invalid` attribute */
  error?: boolean;

  /** Determines whether the input can have multiple lines, for example when `component="textarea"`, `false` by default */
  multiline?: boolean;

  /** Determines whether the input should has `cursor: pointer` style, `false` by default */
  pointer?: boolean;
}

export interface InputFactory {
  props: InputProps;
  defaultRef: HTMLInputElement;
  defaultComponent: 'input';
  stylesNames: InputStylesNames;
  vars: InputCssVariables;
  stylesParams: InputStylesParams;
}

const defaultProps: Partial<InputProps> = {};

export const Input = polymorphicFactory<InputFactory>((props, ref) => {
  const { classNames, className, style, styles, unstyled, required, __staticSelector, ...others } =
    useProps('Input', defaultProps, props);

  const getStyles = useStyles({
    name: ['Input', __staticSelector],
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  return <Box component="input" ref={ref} {...getStyles('root')} {...others} />;
});

Input.displayName = '@mantine/core/Input';
