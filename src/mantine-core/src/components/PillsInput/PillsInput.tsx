import React, { useRef } from 'react';
import { factory, ElementProps, useProps, Factory } from '../../core';
import { __InputStylesNames } from '../Input';
import { InputBase, InputBaseProps } from '../InputBase';
import { PillsInputProvider } from './PillsInput.context';
import { PillsInputField } from './PillsInputField/PillsInputField';

export interface PillsInputProps extends InputBaseProps, ElementProps<'div', 'size'> {}

export type PillsInputFactory = Factory<{
  props: PillsInputProps;
  ref: HTMLInputElement;
  stylesNames: __InputStylesNames;
  staticComponents: {
    Field: typeof PillsInputField;
  };
}>;

const defaultProps: Partial<PillsInputProps> = {
  size: 'sm',
};

export const PillsInput = factory<PillsInputFactory>((_props, ref) => {
  const props = useProps('PillsInput', defaultProps, _props);
  const { children, onMouseDown, size, disabled, __staticSelector, ...others } = props;

  const fieldRef = useRef<HTMLInputElement>();

  return (
    <PillsInputProvider value={{ fieldRef, size: size!, disabled }}>
      <InputBase
        size={size}
        component="div"
        ref={ref}
        onMouseDown={(event) => {
          event.preventDefault();
          onMouseDown?.(event);
          fieldRef.current?.focus();
        }}
        {...others}
        multiline
        disabled={disabled}
        __staticSelector={__staticSelector || 'PillsInput'}
      >
        {children}
      </InputBase>
    </PillsInputProvider>
  );
});

PillsInput.displayName = '@mantine/core/PillsInput';
PillsInput.Field = PillsInputField;
