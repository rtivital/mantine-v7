import React from 'react';
import { useMergedRef } from '@mantine/hooks';
import { factory, ElementProps, useProps, Factory } from '../../../core';
import { Input, InputProps, InputStylesNames } from '../../Input/Input';
import { useComboboxContext } from '../Combobox.context';
import classes from '../Combobox.module.css';

export type ComboboxSearchStylesNames = InputStylesNames;

export interface ComboboxSearchProps extends InputProps, ElementProps<'input', 'size'> {}

export type ComboboxSearchFactory = Factory<{
  props: ComboboxSearchProps;
  ref: HTMLInputElement;
  stylesNames: ComboboxSearchStylesNames;
}>;

const defaultProps: Partial<ComboboxSearchProps> = {};

export const ComboboxSearch = factory<ComboboxSearchFactory>((_props, ref) => {
  const props = useProps('ComboboxSearch', defaultProps, _props);
  const { classNames, styles, unstyled, vars, ...others } = props;
  const ctx = useComboboxContext();
  const _styles = ctx.getStyles('search');
  const _ref = useMergedRef(ref, ctx.store.searchRef);

  return (
    <Input
      ref={_ref}
      classNames={[{ input: _styles.className }, classNames] as any}
      styles={[{ input: _styles.style }, styles] as any}
      {...others}
    />
  );
});

ComboboxSearch.classes = classes;
ComboboxSearch.displayName = '@mantine/core/ComboboxSearch';
