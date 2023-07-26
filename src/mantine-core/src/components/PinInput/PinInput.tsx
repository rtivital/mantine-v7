import React, { useRef, useState, useEffect } from 'react';
import { useUncontrolled, useId } from '@mantine/hooks';
import {
  BoxProps,
  ElementProps,
  Factory,
  MantineRadius,
  MantineSize,
  MantineSpacing,
  StylesApiProps,
  createVarsResolver,
  factory,
  getSize,
  useProps,
  useStyles,
} from '../../core';
import { Group } from '../Group';
import { Input } from '../Input';
import { createPinArray } from './create-pin-array/create-pin-array';
import classes from './PinInput.module.css';

const regex = {
  number: /^[0-9]+$/,
  alphanumeric: /^[a-zA-Z0-9]+$/i,
};

export type PinInputStylesNames = 'root' | 'pinInput' | 'input';

export type PinInputCssVariables = {
  root: '--pininput-size';
};

export interface PinInputProps
  extends BoxProps,
    StylesApiProps<PinInputFactory>,
    ElementProps<'div', 'onChange'> {
  /** Hidden input name attribute */
  name?: string;

  /** Hidden input form attribute */
  form?: string;

  /** Key of theme.spacing or any valid CSS value to set spacing between inputs */
  gap?: MantineSpacing | (string & {}) | number;

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: MantineRadius | (string & {}) | number;

  /** Input width and height */
  size?: MantineSize;

  /** If set, first input is focused when component is mounted */
  autoFocus?: boolean;

  /** Value for controlled component */
  value?: string;

  /** Default value for uncontrolled component */
  defaultValue?: string;

  /** Called when value changes */
  onChange?: (value: string) => void;

  /** Called when user enters value to all inputs */
  onComplete?(value: string): void;

  /** Placeholder for every input field */
  placeholder?: string;

  /** Determines whether focus should be moved automatically to the next input once filled */
  manageFocus?: boolean;

  /** Determines whether autocomplete="one-time-code" attribute should be set on all inputs */
  oneTimeCode?: boolean;

  /** The top-level id that is used as a base in all input fields */
  id?: string;

  /** Sets inputs disabled attribute */
  disabled?: boolean;

  /** Adds error styles to all inputs */
  error?: boolean;

  /** The type of allowed values */
  type?: 'alphanumeric' | 'number' | RegExp;

  /** Changes input type to "password" */
  mask?: boolean;

  /** Number of input boxes */
  length?: number;

  /** Determines whether the user can edit input content */
  readOnly?: boolean;

  /** Inputs type attribute, inferred from type prop if not specified */
  inputType?: React.HTMLInputTypeAttribute;

  /** inputmode attr, inferred from type prop if not specified */
  inputMode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search'
    | undefined;

  //** Aria label for the inputs */
  ariaLabel?: string;
}

export type PinInputFactory = Factory<{
  props: PinInputProps;
  ref: HTMLInputElement;
  stylesNames: PinInputStylesNames;
  vars: PinInputCssVariables;
}>;

const defaultProps: Partial<PinInputProps> = {
  size: 'xs',
  gap: 'sm',
  length: 4,
  manageFocus: true,
  placeholder: '○',
  type: 'alphanumeric',
  ariaLabel: 'PinInput',
};

const varsResolver = createVarsResolver<PinInputFactory>((theme, { size }) => ({
  root: {
    '--pininput-size': getSize(size ?? defaultProps.size, 'pininput-size'),
  },
}));

export const PinInput = factory<PinInputFactory>((props, ref) => {
  const {
    name,
    form,
    className,
    value,
    defaultValue,
    variant,
    gap,
    style,
    size,
    classNames,
    styles,
    unstyled,
    length,
    onChange,
    onComplete,
    manageFocus,
    autoFocus,
    error,
    radius,
    disabled,
    oneTimeCode,
    placeholder,
    type,
    mask,
    readOnly,
    inputType,
    inputMode,
    ariaLabel,
    vars,
    ...others
  } = useProps('PinInput', defaultProps, props);

  const uuid = useId(name);

  const getStyles = useStyles<PinInputFactory>({
    name: 'PinInput',
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

  const [focusedIndex, setFocusedIndex] = useState(-1);

  const [_value, setValues] = useUncontrolled({
    value,
    defaultValue,
    finalValue: '',
    onChange,
  });

  const inputsRef = useRef<Array<HTMLInputElement>>([]);

  const validate = (code: string) => {
    const re = type instanceof RegExp ? type : type && type in regex ? regex[type] : null;
    return re?.test(code);
  };

  const focusInputField = (dir: 'next' | 'prev', index: number) => {
    if (!manageFocus) return;

    if (dir === 'next') {
      const nextIndex = index + 1;
      inputsRef.current[nextIndex < (length ?? 0) ? nextIndex : index].focus();
    }

    if (dir === 'prev') {
      const nextIndex = index - 1;

      inputsRef.current[nextIndex > -1 ? nextIndex : index].focus();
    }
  };

  const setFieldValue = (val: string, index: number) => {
    const values = [...createPinArray(length ?? 0, _value)];
    values[index] = val;
    setValues(values.join(''));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const inputValue = event.target.value;
    const nextChar =
      inputValue.length > 1 ? inputValue.split('')[inputValue.length - 1] : inputValue;

    const isValid = validate(nextChar);

    if (isValid) {
      setFieldValue(nextChar, index);
      focusInputField('next', index);
    } else {
      setFieldValue('', index);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      focusInputField('prev', index);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      focusInputField('next', index);
    } else if (event.key === 'Delete') {
      event.preventDefault();
      setFieldValue('', index);
    } else if (event.key === 'Backspace') {
      event.preventDefault();
      setFieldValue('', index);
      if (length === index + 1) {
        if ((event.target as HTMLInputElement).value === '') {
          focusInputField('prev', index);
        }
      } else {
        focusInputField('prev', index);
      }
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>, index: number) => {
    event.target.select();
    setFocusedIndex(index);
  };

  const handleBlur = () => {
    setFocusedIndex(-1);
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const copyValue = event.clipboardData.getData('Text');
    const isValid = validate(copyValue);

    if (isValid) {
      setValues(copyValue);
    }
  };

  useEffect(() => {
    if (_value.length !== length) return;

    onComplete?.(_value);
  }, [_value]);

  return (
    <>
      <Group
        {...others}
        {...getStyles('root')}
        role="group"
        id={uuid}
        gap={gap}
        ref={ref}
        unstyled={unstyled}
        wrap="nowrap"
      >
        {createPinArray(length ?? 0, _value).map((char, index) => (
          <Input
            component="input"
            {...getStyles('pinInput', {
              style: {
                '--_input-padding': '0',
                '--_input-text-align': 'center',
              } as React.CSSProperties,
            })}
            size={size}
            __staticSelector="pinInput"
            id={`${uuid}-${index + 1}`}
            key={`${uuid}-${index}`}
            inputMode={inputMode || (type === 'number' ? 'numeric' : 'text')}
            onChange={(event) => handleChange(event, index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            onFocus={(event) => handleFocus(event, index)}
            onBlur={handleBlur}
            onPaste={handlePaste}
            type={inputType || (mask ? 'password' : type === 'number' ? 'tel' : 'text')}
            radius={radius}
            error={error}
            variant={variant}
            disabled={disabled}
            ref={(node) => {
              inputsRef.current[index] = node!;
            }}
            autoComplete={oneTimeCode ? 'one-time-code' : 'off'}
            placeholder={focusedIndex === index ? '' : placeholder}
            value={char}
            autoFocus={autoFocus && index === 0}
            unstyled={unstyled}
            aria-label={ariaLabel}
            readOnly={readOnly}
          />
        ))}
      </Group>
      <input type="hidden" name={name} form={form} value={_value} />
    </>
  );
});

PinInput.displayName = '@mantine/core/PinInput';
