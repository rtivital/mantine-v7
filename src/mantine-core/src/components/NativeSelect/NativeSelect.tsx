import React from 'react';
import { factory, ElementProps, useProps } from '../../core';
import { InputBase, InputBaseProps } from '../InputBase';
import { __InputStylesNames } from '../Input';
import { ComboboxData, getParsedComboboxData } from '../Combobox';
import { NativeSelectOption } from './NativeSelectOption';

export interface NativeSelectProps extends InputBaseProps, Omit<ElementProps<'select'>, 'size'> {
  /** Data used to render options, can be replaced with `children` */
  data?: ComboboxData;
}

export interface NativeSelectFactory {
  props: NativeSelectProps;
  ref: HTMLSelectElement;
  stylesNames: __InputStylesNames;
}

const defaultProps: Partial<NativeSelectProps> = {};

export const NativeSelect = factory<NativeSelectFactory>((props, ref) => {
  const { data, children, ...others } = useProps('NativeSelect', defaultProps, props);

  const options = getParsedComboboxData(data).map((item, index) => (
    <NativeSelectOption key={index} data={item} />
  ));

  return (
    <InputBase component="select" ref={ref} {...others} __staticSelector="NativeSelect" pointer>
      {children || options}
    </InputBase>
  );
});

NativeSelect.displayName = '@mantine/core/NativeSelect';
