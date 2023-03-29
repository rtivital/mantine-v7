import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  useVars,
  MantineSize,
  getFontSize,
} from '../../../core';
import classes from './InputLabel.module.css';

export type InputLabelStylesNames = 'label' | 'required';
export type InputLabelVariant = string;
export type InputLabelCssVariables = '--input-asterisk-color' | '--input-label-size';

export interface InputLabelStylesParams {
  required: boolean | undefined;
  size: MantineSize | (string & {}) | undefined;
}

export interface InputLabelProps
  extends BoxProps,
    StylesApiProps<InputLabelStylesNames, InputLabelVariant, InputLabelCssVariables>,
    ElementProps<'label'> {
  __staticSelector?: string;

  /** Determines whether required asterisk should be displayed  */
  required?: boolean;

  /** Controls label `font-size`, `'sm'` by default */
  size?: MantineSize | (string & {});

  /** Root element of the label, `'label'` by default */
  labelElement?: 'label' | 'div';
}

export interface InputLabelFactory {
  props: InputLabelProps;
  ref: HTMLLabelElement;
  stylesNames: InputLabelStylesNames;
  vars: InputLabelCssVariables;
  stylesParams: InputLabelStylesParams;
}

const defaultProps: Partial<InputLabelProps> = {
  size: 'sm',
  labelElement: 'label',
};

export const InputLabel = factory<InputLabelFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    labelElement,
    size,
    required,
    htmlFor,
    onMouseDown,
    children,
    __staticSelector,
    ...others
  } = useProps('InputLabel', defaultProps, props);

  const getStyles = useStyles<InputLabelStylesNames>({
    name: ['InputLabel', __staticSelector],
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
    rootSelector: 'label',
  });

  const _vars = useVars<InputLabelStylesParams>('InputLabel', vars, {
    size,
    required,
  });

  return (
    <Box
      {...getStyles('label')}
      component={labelElement as 'label'}
      ref={ref}
      htmlFor={labelElement === 'label' ? htmlFor : undefined}
      onMouseDown={(event) => {
        onMouseDown?.(event);
        if (!event.defaultPrevented && event.detail > 1) {
          event.preventDefault();
        }
      }}
      vars={{
        '--input-label-size': getFontSize(size),
        '--input-asterisk-color': 'var(--mantine-color-red-filled)',
        ..._vars,
      }}
      {...others}
    >
      {children}
      {required && (
        <span {...getStyles('required')} aria-hidden>
          {' *'}
        </span>
      )}
    </Box>
  );
});

InputLabel.displayName = '@mantine/core/InputLabel';
