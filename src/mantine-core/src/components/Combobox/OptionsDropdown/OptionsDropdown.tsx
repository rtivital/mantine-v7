import React from 'react';
import { Combobox } from '../Combobox';
import { ComboboxItem, ComboboxParsedItem } from '../Combobox.types';
import { defaultOptionsFilter, FilterOptionsInput } from './default-options-filter';

export type OptionsFilter = (input: FilterOptionsInput) => ComboboxParsedItem[];

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
  filter: OptionsFilter | undefined;
  search: string | undefined;
  limit: number | undefined;
  hidden?: boolean;
}

export function OptionsDropdown({ data, hidden, filter, search, limit }: OptionsDropdownProps) {
  const shouldFilter = typeof search === 'string';
  const filteredData = shouldFilter
    ? (filter || defaultOptionsFilter)({ options: data, search, limit: limit ?? Infinity })
    : data;

  const options = filteredData.map((item) => (
    <Option data={item} key={isGroup(item) ? item.group : item.value} />
  ));

  return (
    <Combobox.Dropdown hidden={hidden}>
      <Combobox.Options>{options}</Combobox.Options>
    </Combobox.Dropdown>
  );
}
