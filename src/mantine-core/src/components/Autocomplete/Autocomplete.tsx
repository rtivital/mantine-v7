import React from 'react';
import {
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
  useResolvedStylesApi,
} from '../../core';
import { InputBase } from '../InputBase';
import { __InputStylesNames, __BaseInputProps, InputVariant } from '../Input';
import {
  Combobox,
  OptionsDropdown,
  ComboboxStylesNames,
  useCombobox,
  ComboboxData,
  getParsedComboboxData,
} from '../Combobox';

export type AutocompleteStylesNames = __InputStylesNames | ComboboxStylesNames;

interface ComboboxLikeProps {
  /** Data used to generate options */
  data: ComboboxData;

  /** Controlled dropdown opened state */
  dropdownOpened?: boolean;

  /** Uncontrolled dropdown initial opened state */
  defaultDropdownOpened?: boolean;

  /** Called when dropdown opens */
  onDropdownOpen?(): void;

  /** Called when dropdown closes */
  onDropdownClose?(): void;
}

export interface AutocompleteProps
  extends BoxProps,
    __BaseInputProps,
    ComboboxLikeProps,
    StylesApiProps<AutocompleteFactory>,
    ElementProps<'div'> {}

export type AutocompleteFactory = Factory<{
  props: AutocompleteProps;
  ref: HTMLInputElement;
  stylesNames: AutocompleteStylesNames;
  variant: InputVariant;
}>;

const defaultProps: Partial<AutocompleteProps> = {};

export const Autocomplete = factory<AutocompleteFactory>((_props, ref) => {
  const props = useProps('Autocomplete', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    dropdownOpened,
    defaultDropdownOpened,
    onDropdownClose,
    onDropdownOpen,
    onFocus,
    onBlur,
    data,
    ...others
  } = props;

  const parsedData = getParsedComboboxData(data);

  const combobox = useCombobox({
    opened: dropdownOpened,
    defaultOpened: defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<AutocompleteFactory>({
    props,
    styles,
    classNames,
  });

  return (
    <Combobox
      store={combobox}
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      unstyled={unstyled}
    >
      <Combobox.Target>
        <InputBase
          ref={ref}
          {...others}
          onFocus={(event) => {
            combobox.openDropdown();
            onFocus?.(event);
          }}
          onBlur={(event) => {
            combobox.closeDropdown();
            onBlur?.(event);
          }}
          classNames={resolvedClassNames}
          styles={resolvedStyles}
          unstyled={unstyled}
        />
      </Combobox.Target>
      <OptionsDropdown data={parsedData} />
    </Combobox>
  );
});

Autocomplete.displayName = '@mantine/core/Autocomplete';
