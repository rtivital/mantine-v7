import React from 'react';
import { BoxProps, StylesApiProps, polymorphicFactory } from '../../core';
import { __InputStylesNames, __BaseInputProps, InputVariant, useInputProps, Input } from '../Input';

export interface InputBaseProps
  extends BoxProps,
    __BaseInputProps,
    StylesApiProps<__InputStylesNames, InputVariant> {
  __staticSelector?: string;

  /** Props passed to the root element (`Input.Wrapper` component) */
  wrapperProps?: Record<string, any>;
}

export interface InputBaseFactory {
  props: InputBaseProps;
  defaultRef: HTMLInputElement;
  defaultComponent: 'input';
  stylesNames: __InputStylesNames;
}

const defaultProps: Partial<InputBaseProps> = {
  size: 'sm',
  __staticSelector: 'InputBase',
};

export const InputBase = polymorphicFactory<InputBaseFactory>((props, ref) => {
  const { inputProps, wrapperProps, ...others } = useInputProps('InputBase', defaultProps, props);
  return (
    <Input.Wrapper {...wrapperProps}>
      <Input {...inputProps} {...others} ref={ref} />
    </Input.Wrapper>
  );
});

InputBase.displayName = '@mantine/core/InputBase';
