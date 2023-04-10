import React from 'react';
import { factory, ElementProps, useProps } from '../../core';
import { InputBase, InputBaseProps } from '../InputBase';
import { __InputStylesNames } from '../Input';

export interface TextInputProps extends InputBaseProps, ElementProps<'input', 'size'> {}

export interface TextInputFactory {
  props: TextInputProps;
  ref: HTMLInputElement;
  stylesNames: __InputStylesNames;
}

const defaultProps: Partial<TextInputProps> = {};

export const TextInput = factory<TextInputFactory>((props, ref) => {
  const _props = useProps('TextInput', defaultProps, props);

  return <InputBase component="input" ref={ref} {..._props} __staticSelector="TextInput" />;
});

TextInput.displayName = '@mantine/core/TextInput';
