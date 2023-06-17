import React from 'react';
import { StylesApiProps, useProps, useStyles, Factory } from '../../core';
import { __PopoverProps, Popover } from '../Popover';
import { useCombobox, ComboboxStore } from './use-combobox/use-combobox';
import { ComboboxProvider } from './Combobox.context';
import { ComboboxTarget } from './ComboboxTarget/ComboboxTarget';
import { ComboboxDropdown } from './ComboboxDropdown/ComboboxDropdown';
import { ComboboxOptions } from './ComboboxOptions/ComboboxOptions';
import { ComboboxOption, ComboboxOptionProps } from './ComboboxOption/ComboboxOption';
import { ComboboxSearch } from './ComboboxSearch/ComboboxSearch';
import classes from './Combobox.module.css';

export type ComboboxStylesNames = 'root' | 'options' | 'dropdown' | 'option' | 'search';

export interface ComboboxProps extends __PopoverProps, StylesApiProps<ComboboxFactory> {
  /** Combobox content */
  children: React.ReactNode;

  /** Combobox store, can be used to control combobox state */
  store?: ComboboxStore;

  /** Called when item is selected with `Enter` key or by clicking it */
  onOptionSelect?(value: string, optionProps: ComboboxOptionProps): void;
}

export type ComboboxFactory = Factory<{
  props: ComboboxProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxStylesNames;
  staticComponents: {
    Target: typeof ComboboxTarget;
    Dropdown: typeof ComboboxDropdown;
    Options: typeof ComboboxOptions;
    Option: typeof ComboboxOption;
    Search: typeof ComboboxSearch;
  };
}>;

const defaultProps: Partial<ComboboxProps> = {
  keepMounted: true,
  withinPortal: true,
  width: 'target',
  transitionProps: { transition: 'fade', duration: 0 },
};

export function Combobox(_props: ComboboxProps) {
  const props = useProps('Combobox', defaultProps, _props);
  const {
    classNames,
    styles,
    unstyled,
    children,
    store: controlledStore,
    vars,
    onOptionSelect,
    ...others
  } = props;

  const uncontrolledStore = useCombobox();
  const store = controlledStore || uncontrolledStore;

  const getStyles = useStyles<ComboboxFactory>({
    name: 'Combobox',
    classes,
    props,
    classNames,
    styles,
    unstyled,
  });

  return (
    <ComboboxProvider value={{ getStyles, store, onOptionSelect }}>
      <Popover
        opened={store.dropdownOpened}
        {...others}
        onClose={store.closeDropdown}
        withRoles={false}
      >
        {children}
      </Popover>
    </ComboboxProvider>
  );
}

Combobox.classes = classes;
Combobox.displayName = '@mantine/core/Combobox';
Combobox.Target = ComboboxTarget;
Combobox.Dropdown = ComboboxDropdown;
Combobox.Options = ComboboxOptions;
Combobox.Option = ComboboxOption;
Combobox.Search = ComboboxSearch;
