import React from 'react';
import { TextInput } from '../TextInput';
import { Combobox } from './Combobox';
import { useCombobox } from './use-combobox';

export default { title: 'Combobox' };

export function Usage() {
  const store = useCombobox();

  return (
    <div style={{ padding: 40 }}>
      <Combobox store={store}>
        <Combobox.Target>
          <TextInput
            placeholder="Pick a value"
            onFocus={store.openDropdown}
            onBlur={store.closeDropdown}
          />
        </Combobox.Target>
        <Combobox.Dropdown>Test dropdown</Combobox.Dropdown>
      </Combobox>
    </div>
  );
}
