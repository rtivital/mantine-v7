import React from 'react';
import { NumericFormat, OnValueChange, NumberFormatValues } from 'react-number-format';
import { useUncontrolled } from '@mantine/hooks';
import {
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
} from '../../core';
import { InputBase } from '../InputBase';
import classes from './NumberInput.module.css';

function isValidNumber(value: number | undefined): value is number {
  return typeof value === 'number' && !Number.isNaN(value);
}

export type NumberInputStylesNames = 'root';
export type NumberInputVariant = string;
export type NumberInputCssVariables = {
  root: '--test';
};

export interface NumberInputProps
  extends BoxProps,
    StylesApiProps<NumberInputFactory>,
    ElementProps<'input', 'size' | 'type' | 'onChange'> {
  /** Controlled component value */
  value?: number | string;

  /** Uncontrolled component default value */
  defaultValue?: number | string;

  /** Called when value changes */
  onChange?(value: number | string): void;

  /** Called when value changes with `react-number-format` payload */
  onValueChange?: OnValueChange;

  /** Determines whether leading zeros are allowed. If not set, leading zeros are removed when the input is blurred. `false` by default */
  allowLeadingZeros?: boolean;

  /** Determines whether negative values are allowed, `true` by default */
  allowNegative?: boolean;

  /** Characters which when pressed result in a decimal separator, `['.']` by default */
  allowedDecimalSeparators?: string[];

  /** Limits the number of digits that can be entered after the decimal point */
  decimalScale?: number;

  /** Character used as a decimal separator, `'.'` by default */
  decimalSeparator?: string;

  /** If set, 0s are added after `decimalSeparator` to match given `decimalScale`. `false` by default */
  fixedDecimalScale?: boolean;

  /** Prefix added before the input value */
  prefix?: string;

  /** Suffix added after the input value */
  suffix?: string;

  /** Defines the thousand grouping style. */
  thousandsGroupStyle?: 'thousand' | 'lakh' | 'wan' | 'none';

  /** A function to validate the input value. If this function returns `false`, the `onChange` will not be called and the input value will not change. */
  isAllowed?(values: NumberFormatValues): boolean;

  /** If value is passed as string representation of numbers (unformatted) and number is used in any format props like in prefix or suffix in numeric format and format prop in pattern format then this should be passed as `true`. `false` by default. */
  valueIsNumericString?: boolean;

  /** Controls input `type` attribute, `'text'` by default */
  type?: 'text' | 'tel' | 'password';
}

export type NumberInputFactory = Factory<{
  props: NumberInputProps;
  ref: HTMLDivElement;
  stylesNames: NumberInputStylesNames;
  vars: NumberInputCssVariables;
  variant: NumberInputVariant;
}>;

const defaultProps: Partial<NumberInputProps> = {};

const varsResolver = createVarsResolver<NumberInputFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const NumberInput = factory<NumberInputFactory>((_props, ref) => {
  const props = useProps('NumberInput', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    onChange,
    onValueChange,
    value,
    defaultValue,
    ...others
  } = props;

  const getStyles = useStyles<NumberInputFactory>({
    name: 'NumberInput',
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

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: '',
    onChange,
  });

  const handleValueChange: OnValueChange = (payload, event) => {
    setValue(isValidNumber(payload.floatValue) ? payload.floatValue : payload.value);
    onValueChange?.(payload, event);
  };

  return (
    <InputBase
      component={NumericFormat}
      {...others}
      value={_value}
      getInputRef={ref}
      onValueChange={handleValueChange}
      isAllowed={(value) => {}}
    />
  );
});

NumberInput.displayName = '@mantine/core/NumberInput';
