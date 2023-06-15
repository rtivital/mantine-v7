import React from 'react';
import { StylesApiProps, useProps, useStyles, Factory } from '../../core';
import { __PopoverProps, Popover } from '../Popover';
import { useCombobox, ComboboxStore } from './use-combobox';
import { ComboboxProvider } from './Combobox.context';
import { ComboboxTarget } from './ComboboxTarget/ComboboxTarget';
import { ComboboxDropdown } from './ComboboxDropdown/ComboboxDropdown';
import classes from './Combobox.module.css';

export type ComboboxStylesNames = 'root';

export interface ComboboxProps extends __PopoverProps, StylesApiProps<ComboboxFactory> {
  /** Combobox content */
  children: React.ReactNode;

  /** Combobox store, can be used to control combobox state */
  store?: ComboboxStore;
}

export type ComboboxFactory = Factory<{
  props: ComboboxProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxStylesNames;
  staticComponents: {
    Target: typeof ComboboxTarget;
    Dropdown: typeof ComboboxDropdown;
  };
}>;

const defaultProps: Partial<ComboboxProps> = {
  keepMounted: true,
  withinPortal: true,
  width: 'target',
};

export function Combobox(_props: ComboboxProps) {
  const props = useProps('Combobox', defaultProps, _props);
  const { classNames, styles, unstyled, children, store: controlledStore, vars, ...others } = props;
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
    <ComboboxProvider value={{ getStyles, store }}>
      <Popover opened={store.dropdownOpened} {...others} withRoles={false}>
        {children}
      </Popover>
    </ComboboxProvider>
  );
}

Combobox.classes = classes;
Combobox.displayName = '@mantine/core/Combobox';
Combobox.Target = ComboboxTarget;
Combobox.Dropdown = ComboboxDropdown;
