/* eslint-disable no-console */
import React from 'react';
import { TextInput } from '../TextInput';
import { Button } from '../Button';
import { ScrollArea } from '../ScrollArea';
import { Combobox } from './Combobox';
import { useCombobox } from './use-combobox';

export default { title: 'Combobox' };

const largeOptionsList = Array(100)
  .fill(0)
  .map((_, index) => (
    <Combobox.Option value={`option-${index}`} key={index}>
      Option {index}
    </Combobox.Option>
  ));

const lorem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl quis tincidunt
sodales, leo sapien faucibus eros, eu tincidunt nisl quam eget mauris. Nulla facilisi. Nulla
facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
`;

const scrollableContent = Array(20)
  .fill(0)
  .map((_, index) => <p key={index}>{lorem}</p>);

export function Usage() {
  const store = useCombobox();
  const [value, setValue] = React.useState('');

  return (
    <div style={{ padding: 40 }}>
      <Combobox
        store={store}
        withinPortal={false}
        onItemSelect={(val) => {
          setValue(val);
          store.closeDropdown();
          store.resetSelectedOption();
        }}
      >
        <Combobox.Target>
          <TextInput
            placeholder="Pick a value"
            onFocus={store.openDropdown}
            onBlur={store.closeDropdown}
            value={value}
            onChange={(event) => {
              setValue(event.currentTarget.value);
            }}
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

export function WithScrollArea() {
  const store = useCombobox();
  const [value, setValue] = React.useState('');

  return (
    <div style={{ padding: 40 }}>
      {scrollableContent}
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
            <ScrollArea.Autosize mah={200} type="scroll">
              {largeOptionsList}
            </ScrollArea.Autosize>
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
      {scrollableContent}
    </div>
  );
}
