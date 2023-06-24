import React, { useState, useRef } from 'react';
import { useHotkeys } from '@mantine/hooks';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { COMBOBOX_EXAMPLES_DATA } from '../../combobox-examples-data';
import { ComboboxLinksGroup } from './ComboboxLinksGroup/ComboboxLinksGroup';
import { getGroupedData } from './get-grouped-data';
import classes from './ComboboxNavbar.module.css';

export function ComboboxNavbar() {
  const [search, setSearch] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const splittedSearch = search
    .toLowerCase()
    .split(' ')
    .filter((item) => item.trim().length > 0);

  const filteredData = COMBOBOX_EXAMPLES_DATA.filter((item) => {
    const splittedName = item.name
      .toLowerCase()
      .split(' ')
      .filter((part) => part.trim().length > 0);
    const splittedDescription = item.description
      .toLowerCase()
      .split(' ')
      .filter((part) => part.trim().length > 0);

    return splittedSearch.every(
      (part) =>
        splittedName.some((name) => name.includes(part)) ||
        splittedDescription.some((name) => name.includes(part)) ||
        item.type.includes(part)
    );
  });

  const groupedData = getGroupedData(filteredData);

  const groups = groupedData.map((item) => (
    <ComboboxLinksGroup data={item} key={item.group} searchQuery={splittedSearch} />
  ));

  useHotkeys([['mod + shift + k', () => searchInputRef.current?.focus()]], []);

  return (
    <div className={classes.navbar}>
      <TextInput
        placeholder="Ctrl + Shift + K to search"
        classNames={{ root: classes.search, input: classes.searchInput }}
        leftSection={<IconSearch className={classes.searchIcon} stroke={1.5} />}
        radius="md"
        size="md"
        value={search}
        onChange={(event) => setSearch(event.currentTarget.value)}
        ref={searchInputRef}
      />

      {groups}
    </div>
  );
}
