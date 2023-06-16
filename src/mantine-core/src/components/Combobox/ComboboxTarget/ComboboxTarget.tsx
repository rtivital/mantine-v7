import React, { cloneElement } from 'react';
import { Popover } from '../../Popover';
import { isElement, useProps, factory, Factory } from '../../../core';
import { useComboboxContext } from '../Combobox.context';

export interface ComboboxTargetProps {
  /** Target element */
  children: React.ReactNode;

  /** Key of the prop that should be used to access element ref */
  refProp?: string;
}

const defaultProps: Partial<ComboboxTargetProps> = {
  refProp: 'ref',
};

export type ComboboxTargetFactory = Factory<{
  props: ComboboxTargetProps;
  ref: HTMLElement;
  compound: true;
}>;

export const ComboboxTarget = factory<ComboboxTargetFactory>((props, ref) => {
  const { children, refProp, ...others } = useProps('ComboboxTarget', defaultProps, props);

  if (!isElement(children)) {
    throw new Error(
      'Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
    );
  }

  const ctx = useComboboxContext();

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    children.props.onMouseDown?.(event);

    if (event.nativeEvent.code === 'ArrowDown') {
      if (!ctx.store.dropdownOpened) {
        ctx.store.openDropdown();
      }

      ctx.store.selectNextItem();
    }
  };

  const clonedElement = cloneElement(children, {
    'aria-haspopup': 'listbox',
    'aria-expanded': ctx.store.listId ? ctx.store.dropdownOpened : undefined,
    'aria-controls': ctx.store.listId,
    autoComplete: 'off',
    onKeyDown,
    ...others,
  });

  return <Popover.Target ref={ref}>{clonedElement}</Popover.Target>;
});

ComboboxTarget.displayName = '@mantine/core/ComboboxTarget';
