import React from 'react';
import { Combobox } from '../Combobox';
import { ComboboxItem } from '../Combobox.types';

export interface OptionsGroup {
  group: string;
  items: ComboboxItem[];
}

export type OptionsData = (ComboboxItem | OptionsGroup)[];

interface OptionProps {
  data: ComboboxItem | OptionsGroup;
}

function isGroup(data: ComboboxItem | OptionsGroup): data is OptionsGroup {
  return (data as OptionsGroup).group !== undefined;
}

function Option({ data }: OptionProps) {
  if (!isGroup(data)) {
    return (
      <Combobox.Option value={data.value} disabled={data.disabled}>
        {data.label}
      </Combobox.Option>
    );
  }

  const options = data.items.map((item) => <Option data={item} key={item.value} />);
  return <Combobox.Group label={data.group}>{options}</Combobox.Group>;
}

export interface OptionsDropdownProps {
  data: OptionsData;
}

export function OptionsDropdown({ data }: OptionsDropdownProps) {
  const options = data.map((item) => (
    <Option data={item} key={isGroup(item) ? item.group : item.value} />
  ));

  return (
    <Combobox.Dropdown>
      <Combobox.Options>{options}</Combobox.Options>
    </Combobox.Dropdown>
  );
}
