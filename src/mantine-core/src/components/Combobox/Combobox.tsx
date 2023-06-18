import React from 'react';
import {
  StylesApiProps,
  useProps,
  useStyles,
  Factory,
  createVarsResolver,
  MantineSize,
  getFontSize,
  rem,
  getSize,
} from '../../core';
import { __PopoverProps, Popover } from '../Popover';
import { useCombobox, ComboboxStore } from './use-combobox/use-combobox';
import { ComboboxProvider } from './Combobox.context';
import { ComboboxTarget } from './ComboboxTarget/ComboboxTarget';
import { ComboboxDropdown } from './ComboboxDropdown/ComboboxDropdown';
import { ComboboxOptions } from './ComboboxOptions/ComboboxOptions';
import { ComboboxOption, ComboboxOptionProps } from './ComboboxOption/ComboboxOption';
import { ComboboxSearch } from './ComboboxSearch/ComboboxSearch';
import { ComboboxEmpty } from './ComboboxEmpty/ComboboxEmpty';
import { ComboboxChevron } from './ComboboxChevron/ComboboxChevron';
import classes from './Combobox.module.css';

export type ComboboxStylesNames = 'options' | 'dropdown' | 'option' | 'search' | 'empty';
export type ComboboxCSSVariables = {
  dropdown: '--combobox-option-fz' | '--combobox-padding' | '--combobox-option-padding';
};

export interface ComboboxProps extends __PopoverProps, StylesApiProps<ComboboxFactory> {
  /** Combobox content */
  children: React.ReactNode;

  /** Combobox store, can be used to control combobox state */
  store?: ComboboxStore;

  /** Called when item is selected with `Enter` key or by clicking it */
  onOptionSelect?(value: string, optionProps: ComboboxOptionProps): void;

  /** Controls items `font-size` and `padding`, `'sm'` by default */
  size?: MantineSize | (string & {});

  /** Controls `padding` of the dropdown, `4` by default */
  dropdownPadding?: React.CSSProperties['padding'];

  /** Determines whether selection should be reset when option is hovered, `false` by default */
  resetSelectionOnOptionHover?: boolean;
}

export type ComboboxFactory = Factory<{
  props: ComboboxProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxStylesNames;
  vars: ComboboxCSSVariables;
  staticComponents: {
    Target: typeof ComboboxTarget;
    Dropdown: typeof ComboboxDropdown;
    Options: typeof ComboboxOptions;
    Option: typeof ComboboxOption;
    Search: typeof ComboboxSearch;
    Empty: typeof ComboboxEmpty;
    Chevron: typeof ComboboxChevron;
  };
}>;

const defaultProps: Partial<ComboboxProps> = {
  keepMounted: true,
  withinPortal: true,
  resetSelectionOnOptionHover: false,
  width: 'target',
  transitionProps: { transition: 'fade', duration: 0 },
  size: 'sm',
  dropdownPadding: 4,
};

const varsResolver = createVarsResolver<ComboboxFactory>((_, { size, dropdownPadding }) => ({
  dropdown: {
    '--combobox-option-fz': getFontSize(size),
    '--combobox-padding': rem(dropdownPadding),
    '--combobox-option-padding': getSize(size, 'combobox-option-padding'),
  },
}));

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
    size,
    dropdownPadding,
    resetSelectionOnOptionHover,
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
    vars,
    varsResolver,
  });

  return (
    <ComboboxProvider
      value={{ getStyles, store, onOptionSelect, size: size!, resetSelectionOnOptionHover }}
    >
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
Combobox.Empty = ComboboxEmpty;
Combobox.Chevron = ComboboxChevron;
