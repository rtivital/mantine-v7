/* eslint-disable no-console */
import React from 'react';
import { TextInput } from '../TextInput';
import { Button } from '../Button';
import { Combobox } from './Combobox';
import { useCombobox } from './use-combobox';

export default { title: 'Combobox' };

export function Usage() {
  const store = useCombobox();
  const [value, setValue] = React.useState('');

  return (
    <div style={{ padding: 40 }}>
      <Combobox store={store} withinPortal={false} onItemSelect={setValue}>
        <Combobox.Target>
          <TextInput
            placeholder="Pick a value"
            onFocus={store.openDropdown}
            onBlur={store.closeDropdown}
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
          />
        </Combobox.Target>
        <Combobox.Dropdown>
          <Combobox.Options>
            <Combobox.Option value="react">React</Combobox.Option>
            <Combobox.Option value="vue">Vue</Combobox.Option>
            <Combobox.Option value="svelte">Svelte</Combobox.Option>
            <Combobox.Option value="angular">Angular</Combobox.Option>
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}

export function WithButtonTarget() {
  const store = useCombobox();

  return (
    <div style={{ padding: 40 }}>
      <Combobox
        store={store}
        withinPortal={false}
        onItemSelect={(value) => {
          console.log(value);
          store.closeDropdown();
        }}
        width={400}
        position="bottom-start"
      >
        <Combobox.Target>
          <Button onClick={() => store.toggleDropdown()}>Toggle Popover</Button>
        </Combobox.Target>
        <Combobox.Dropdown>
          <Combobox.Options>
            <Combobox.Option value="react">React</Combobox.Option>
            <Combobox.Option value="vue">Vue</Combobox.Option>
            <Combobox.Option value="svelte">Svelte</Combobox.Option>
            <Combobox.Option value="angular">Angular</Combobox.Option>
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}
