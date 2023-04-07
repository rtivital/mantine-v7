import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  polymorphicFactory,
  useProps,
  useStyles,
  MantineRadius,
  MantineSize,
  extractStyleProps,
  getSize,
  getFontSize,
  useVars,
  getRadius,
  rem,
  createVarsResolver,
} from '../../core';
import { useInputWrapperContext } from './InputWrapper.context';
import { InputLabel } from './InputLabel/InputLabel';
import { InputError } from './InputError/InputError';
import { InputDescription } from './InputDescription/InputDescription';
import { InputPlaceholder } from './InputPlaceholder/InputPlaceholder';
import {
  InputWrapper,
  __InputWrapperProps,
  InputWrapperStylesNames,
} from './InputWrapper/InputWrapper';
import classes from './Input.module.css';

export interface __BaseInputProps extends __InputWrapperProps, __InputProps {}
export type __InputStylesNames = InputStylesNames | InputWrapperStylesNames;

export type InputStylesNames = 'input' | 'wrapper' | 'leftSection' | 'rightSection';
export type InputVariant = 'default' | 'filled' | 'unstyled';
export type InputCssVariables =
  | '--input-height'
  | '--input-fz'
  | '--input-radius'
  | '--input-left-section-width'
  | '--input-right-section-width'
  | '--input-left-section-pointer-events'
  | '--input-right-section-pointer-events'
  | '--input-padding-y'
  | '--input-margin-top'
  | '--input-margin-bottom';

export interface InputStylesParams {
  size: MantineSize | undefined;
  radius: MantineRadius | (string & {}) | number | undefined;
  variant: InputVariant | (string & {}) | undefined;
  offsetTop: boolean | undefined;
  offsetBottom: boolean | undefined;
  multiline: boolean | undefined;
  leftSectionWidth: React.CSSProperties['width'] | undefined;
  rightSectionWidth: React.CSSProperties['width'] | undefined;
  leftSectionPointerEvents: React.CSSProperties['pointerEvents'];
  rightSectionPointerEvents: React.CSSProperties['pointerEvents'];
}

export interface __InputProps {
  /** Content section rendered on the left side of the input */
  leftSection?: React.ReactNode;

  /** Left section width, used to set `width` of the section and input `padding-left`, by default equals to input height */
  leftSectionWidth?: React.CSSProperties['width'];

  /** Props added to `leftSection` element */
  leftSectionProps?: React.ComponentPropsWithoutRef<'div'>;

  /** Sets `pointer-events` styles of `leftSection` node, `'none'` by default */
  leftSectionPointerEvents?: React.CSSProperties['pointerEvents'];

  /** Content section rendered on the right side of the input */
  rightSection?: React.ReactNode;

  /** Right section width, used to set `width` of the section and input `padding-right`, by default equals to input height */
  rightSectionWidth?: React.CSSProperties['width'];

  /** Props added to `rightSection` element */
  rightSectionProps?: React.ComponentPropsWithoutRef<'div'>;

  /** Sets `pointer-events` styles of `rightSection` node, `'none'` by default */
  rightSectionPointerEvents?: React.CSSProperties['pointerEvents'];

  /** Props added to root element of `Input` component */
  wrapperProps?: React.ComponentPropsWithoutRef<'div'>;

  /** Sets `required` attribute on the `input` element */
  required?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem (1rem = 16px), `theme.defaultRadius` by default */
  radius?: MantineRadius | (string & {}) | number;

  /** Sets `disabled` attribute on the `input` element */
  disabled?: boolean;

  /** Input size */
  size?: MantineSize;

  /** Determines whether the input should have `cursor: pointer` style, `false` by default */
  pointer?: boolean;
}

export interface InputProps
  extends BoxProps,
    __InputProps,
    StylesApiProps<InputStylesNames, InputVariant, InputCssVariables, InputStylesParams> {
  __staticSelector?: string;

  /** Determines whether the input should have error styles and `aria-invalid` attribute */
  error?: React.ReactNode;

  /** Determines whether the input can have multiple lines, for example when `component="textarea"`, `false` by default */
  multiline?: boolean;
}

export interface InputFactory {
  props: InputProps;
  defaultRef: HTMLInputElement;
  defaultComponent: 'input';
  stylesNames: InputStylesNames;
  vars: InputCssVariables;
  stylesParams: InputStylesParams;
  staticComponents: {
    Label: typeof InputLabel;
    Error: typeof InputError;
    Description: typeof InputDescription;
    Placeholder: typeof InputPlaceholder;
    Wrapper: typeof InputWrapper;
  };
}

const defaultProps: Partial<InputProps> = {
  size: 'sm',
  variant: 'default',
  leftSectionPointerEvents: 'none',
  rightSectionPointerEvents: 'none',
};

const varsResolver = createVarsResolver<InputCssVariables, InputStylesParams>((params) => ({
  '--input-margin-top': params.offsetTop ? 'calc(var(--mantine-spacing-xs) / 2)' : undefined,
  '--input-margin-bottom': params.offsetBottom ? 'calc(var(--mantine-spacing-xs) / 2)' : undefined,
  '--input-height': getSize(params.size, 'input-height'),
  '--input-fz': getFontSize(params.size),
  '--input-radius': getRadius(params.radius),
  '--input-left-section-width':
    params.leftSectionWidth !== undefined ? rem(params.leftSectionWidth) : undefined,
  '--input-right-section-width':
    params.rightSectionWidth !== undefined ? rem(params.rightSectionWidth) : undefined,
  '--input-padding-y': params.multiline ? getSize(params.size, 'input-padding-y') : undefined,
  '--input-left-section-pointer-events': params.leftSectionPointerEvents,
  '--input-right-section-pointer-events': params.rightSectionPointerEvents,
}));

export const Input = polymorphicFactory<InputFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    required,
    __staticSelector,
    size,
    wrapperProps,
    error,
    disabled,
    leftSection,
    leftSectionProps,
    leftSectionWidth,
    rightSection,
    rightSectionProps,
    rightSectionWidth,
    rightSectionPointerEvents,
    leftSectionPointerEvents,
    variant,
    vars,
    pointer,
    multiline,
    radius,
    ...others
  } = useProps('Input', defaultProps, props);

  const { styleProps, rest } = extractStyleProps(others);
  const ctx = useInputWrapperContext();

  const getStyles = useStyles<InputStylesNames>({
    name: ['Input', __staticSelector],
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
    rootSelector: 'wrapper',
  });

  const _vars = useVars<InputStylesParams>('Input', varsResolver, vars, {
    size,
    radius,
    variant,
    offsetBottom: ctx?.offsetBottom,
    offsetTop: ctx?.offsetTop,
    leftSectionWidth,
    rightSectionWidth,
    leftSectionPointerEvents,
    rightSectionPointerEvents,
    multiline,
  });

  return (
    <Box
      {...getStyles('wrapper')}
      {...styleProps}
      {...wrapperProps}
      mod={{
        error: !!error,
        pointer,
        disabled,
        multiline,
        'data-with-right-section': !!rightSection,
        'data-with-left-section': !!leftSection,
      }}
      variant={variant}
      vars={_vars}
    >
      {leftSection && (
        <div
          {...leftSectionProps}
          {...getStyles('leftSection', {
            className: leftSectionProps?.className,
            style: leftSectionProps?.style,
          })}
        >
          {leftSection}
        </div>
      )}

      <Box
        component="input"
        {...rest}
        ref={ref}
        required={required}
        mod={{ disabled, error: !!error }}
        aria-invalid={!!error}
        variant={variant}
        aria-describedby={ctx.describedBy}
        disabled={disabled}
        {...getStyles('input')}
      />

      {rightSection && (
        <div
          {...rightSectionProps}
          {...getStyles('rightSection', {
            className: rightSectionProps?.className,
            style: rightSectionProps?.style,
          })}
        >
          {rightSection}
        </div>
      )}
    </Box>
  );
});

Input.Wrapper = InputWrapper;
Input.Label = InputLabel;
Input.Error = InputError;
Input.Description = InputDescription;
Input.Placeholder = InputPlaceholder;
Input.displayName = '@mantine/core/Input';
