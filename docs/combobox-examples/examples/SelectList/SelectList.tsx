import React, { useState } from 'react';
import { TextInput, Combobox, useCombobox, Checkbox, Group } from '@mantine/core';
import classes from './SelectList.module.css';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

export function SelectList() {
  const combobox = useCombobox();

  const [value, setValue] = useState<string[]>([]);

  const handleValueSelect = (val: string) =>
    setValue((current) =>
      current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
    );

  const options = groceries.map((item) => (
    <Combobox.Option
      value={item}
      key={item}
      active={value.includes(item)}
      onMouseOver={() => combobox.resetSelectedOption()}
    >
      <Group gap="sm">
        <Checkbox
          checked={value.includes(item)}
          onChange={() => {}}
          aria-hidden
          tabIndex={-1}
          style={{ pointerEvents: 'none' }}
        />
        <span>{item}</span>
      </Group>
    </Combobox.Option>
  ));

  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
      <Combobox.EventsTarget>
        <TextInput placeholder="Search groceries" classNames={{ input: classes.input }} />
      </Combobox.EventsTarget>

      <div className={classes.list}>
        <Combobox.Options>{options}</Combobox.Options>
      </div>
    </Combobox>
  );
}
