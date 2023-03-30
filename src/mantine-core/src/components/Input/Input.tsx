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
} from '../../core';
import { useInputWrapperContext } from './InputWrapper.context';
import { InputLabel } from './InputLabel/InputLabel';
import { InputError } from './InputError/InputError';
import { InputDescription } from './InputDescription/InputDescription';
import { InputPlaceholder } from './InputPlaceholder/InputPlaceholder';
import { InputWrapper, __InputWrapperProps } from './InputWrapper/InputWrapper';
import classes from './Input.module.css';

export interface __BaseInputProps extends __InputWrapperProps, __InputProps {}

export type InputStylesNames = 'input' | 'wrapper' | 'leftSection' | 'rightSection';
export type InputVariant = 'default' | 'filled' | 'unstyled';
export type InputCssVariables =
  | '--input-height'
  | '--input-fz'
  | '--input-radius'
  | '--input-left-section-width'
  | '--input-right-section-width'
  | '--input-padding-y'
  | '--input-margin-top'
  | '--input-margin-bottom';

export interface InputStylesParams {
  size: MantineSize | undefined;
  radius: MantineRadius | (string & {}) | number | undefined;
}

export interface __InputProps {
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
  size?: MantineSize;
}

export interface InputProps
  extends BoxProps,
    __InputProps,
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
};

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

  const _vars = useVars<InputStylesParams>('Input', vars, { size, radius });

  return (
    <Box
      ref={ref}
      {...getStyles('wrapper')}
      {...styleProps}
      {...wrapperProps}
      data-error={error || undefined}
      variant={variant}
      data-with-right-section={!!rightSection || undefined}
      data-with-left-section={!!leftSection || undefined}
      data-multiline={multiline || undefined}
      data-pointer={pointer || undefined}
      vars={{
        '--input-margin-top': ctx?.offsetTop ? 'calc(var(--mantine-spacing-xs) / 2)' : undefined,
        '--input-margin-bottom': ctx?.offsetBottom
          ? 'calc(var(--mantine-spacing-xs) / 2)'
          : undefined,
        '--input-height': getSize(size, 'input-height'),
        '--input-fz': getFontSize(size),
        '--input-radius': getRadius(radius),
        '--input-left-section-width':
          leftSectionWidth !== undefined ? rem(leftSectionWidth) : undefined,
        '--input-right-section-width':
          rightSectionWidth !== undefined ? rem(rightSectionWidth) : undefined,
        '--input-padding-y': multiline ? getSize(size, 'input-padding-y') : undefined,
        ..._vars,
      }}
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
        aria-invalid={!!error}
        variant={variant}
        aria-describedby={ctx.descriptionId}
        aria-errormessage={ctx.errorId}
        disabled={disabled}
        data-disabled={disabled || undefined}
        data-error={error || undefined}
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
