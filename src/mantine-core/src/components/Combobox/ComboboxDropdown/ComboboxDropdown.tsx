import React, { forwardRef, useEffect } from 'react';
import { useId } from '@mantine/hooks';
import { useProps } from '../../../core';
import { Popover, PopoverDropdownProps } from '../../Popover';
import { useComboboxContext } from '../Combobox.context';

export interface ComboboxDropdownProps extends PopoverDropdownProps {}

const defaultProps: Partial<ComboboxDropdownProps> = {};

export const ComboboxDropdown = forwardRef<HTMLDivElement, ComboboxDropdownProps>((props, ref) => {
  const ctx = useComboboxContext();
  const { id, ...others } = useProps('ComboboxDropdown', defaultProps, props);
  const dropdownId = useId(id);

  useEffect(() => {
    ctx.store.setDropdownId(dropdownId);
  }, [dropdownId]);

  return (
    <Popover.Dropdown
      {...props}
      ref={ref}
      id={dropdownId}
      {...others}
      role="listbox"
      tabIndex={-1}
    />
  );
});

ComboboxDropdown.displayName = '@mantine/core/ComboboxDropdown';
