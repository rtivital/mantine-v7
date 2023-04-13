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
  PolymorphicFactory,
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

export interface InputStylesCtx {
  offsetTop: boolean;
  offsetBottom: boolean;
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

export interface InputProps extends BoxProps, __InputProps, StylesApiProps<InputFactory> {
  __staticSelector?: string;

  /** Props passed to Styles API context, replaces Input.Wrapper props */
  __stylesApiProps?: Record<string, any>;

  /** Determines whether the input should have error styles and `aria-invalid` attribute */
  error?: React.ReactNode;

  /** Determines whether the input can have multiple lines, for example when `component="textarea"`, `false` by default */
  multiline?: boolean;
}

export type InputFactory = PolymorphicFactory<{
  props: InputProps;
  defaultRef: HTMLInputElement;
  defaultComponent: 'input';
  stylesNames: InputStylesNames;
  variant: InputVariant;
  vars: InputCssVariables;
  ctx: InputStylesCtx;
  staticComponents: {
    Label: typeof InputLabel;
    Error: typeof InputError;
    Description: typeof InputDescription;
    Placeholder: typeof InputPlaceholder;
    Wrapper: typeof InputWrapper;
  };
}>;

const defaultProps: Partial<InputProps> = {
  size: 'sm',
  variant: 'default',
  leftSectionPointerEvents: 'none',
  rightSectionPointerEvents: 'none',
};

const varsResolver = createVarsResolver<InputFactory>((_, props, ctx) => ({
  '--input-margin-top': ctx.offsetTop ? 'calc(var(--mantine-spacing-xs) / 2)' : undefined,
  '--input-margin-bottom': ctx.offsetBottom ? 'calc(var(--mantine-spacing-xs) / 2)' : undefined,
  '--input-height': getSize(props.size, 'input-height'),
  '--input-fz': getFontSize(props.size),
  '--input-radius': getRadius(props.radius),
  '--input-left-section-width':
    props.leftSectionWidth !== undefined ? rem(props.leftSectionWidth) : undefined,
  '--input-right-section-width':
    props.rightSectionWidth !== undefined ? rem(props.rightSectionWidth) : undefined,
  '--input-padding-y': props.multiline ? getSize(props.size, 'input-padding-y') : undefined,
  '--input-left-section-pointer-events': props.leftSectionPointerEvents,
  '--input-right-section-pointer-events': props.rightSectionPointerEvents,
}));

export const Input = polymorphicFactory<InputFactory>((_props, ref) => {
  const props = useProps('Input', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    required,
    __staticSelector,
    __stylesApiProps,
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
  } = props;

  const { styleProps, rest } = extractStyleProps(others);
  const ctx = useInputWrapperContext();
  const stylesCtx: InputStylesCtx = { offsetBottom: ctx.offsetBottom, offsetTop: ctx.offsetTop };

  const getStyles = useStyles<InputFactory>({
    name: ['Input', __staticSelector],
    props: __stylesApiProps || props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    stylesCtx,
    rootSelector: 'wrapper',
  });

  const _vars = useVars<InputFactory>({
    name: 'Input',
    resolver: varsResolver,
    props,
    vars,
    stylesCtx,
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
      size={size}
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
