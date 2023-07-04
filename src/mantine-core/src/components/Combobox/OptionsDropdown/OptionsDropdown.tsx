import React from 'react';
import { ScrollArea } from '../../ScrollArea/ScrollArea';
import { Combobox } from '../Combobox';
import { ComboboxItem, ComboboxParsedItem } from '../Combobox.types';
import { defaultOptionsFilter, FilterOptionsInput } from './default-options-filter';
import { isEmptyComboboxData } from './is-empty-combobox-data';
import classes from './OptionsDropdown.module.css';

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
  withScrollArea: boolean | undefined;
  maxDropdownHeight: number | string | undefined;
  hidden?: boolean;
  hiddenWhenEmpty?: boolean;
}

export function OptionsDropdown({
  data,
  hidden,
  hiddenWhenEmpty,
  filter,
  search,
  limit,
  maxDropdownHeight,
  withScrollArea = true,
}: OptionsDropdownProps) {
  const shouldFilter = typeof search === 'string';
  const filteredData = shouldFilter
    ? (filter || defaultOptionsFilter)({ options: data, search, limit: limit ?? Infinity })
    : data;
  const isEmpty = isEmptyComboboxData(filteredData);

  const options = filteredData.map((item) => (
    <Option data={item} key={isGroup(item) ? item.group : item.value} />
  ));

  return (
    <Combobox.Dropdown hidden={hidden || (hiddenWhenEmpty && isEmpty)}>
      <Combobox.Options>
        {withScrollArea ? (
          <ScrollArea.Autosize
            mah={maxDropdownHeight ?? 220}
            type="scroll"
            scrollbarSize="var(--combobox-padding)"
            offsetScrollbars="y"
            className={classes.scrollArea}
          >
            {options}
          </ScrollArea.Autosize>
        ) : (
          options
        )}
      </Combobox.Options>
    </Combobox.Dropdown>
  );
}
