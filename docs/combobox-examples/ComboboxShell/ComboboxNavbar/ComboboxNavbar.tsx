import React, { useState, useRef } from 'react';
import Link from 'next/link';
import cx from 'clsx';
import { useHotkeys } from '@mantine/hooks';
import { Center, UnstyledButton, Highlight, TextInput, Badge, Group } from '@mantine/core';
import { IconArrowLeft, IconSearch } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { COMBOBOX_EXAMPLES_DATA } from '../../combobox-examples-data';
import classes from './ComboboxNavbar.module.css';

export function ComboboxNavbar() {
  const router = useRouter();
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

  const links = filteredData.map((item) => (
    <UnstyledButton
      key={item.id}
      onClick={() => router.replace(`${router.pathname}?e=${item.id}`)}
      className={classes.item}
      data-active={router.query.e === item.id || undefined}
    >
      <Group justify="space-between">
        <Highlight highlight={splittedSearch} className={classes.itemName}>
          {item.name}
        </Highlight>

        <Badge variant={router.query.e === item.id ? 'light' : 'light'} size="xs">
          {item.type}
        </Badge>
      </Group>

      <Highlight highlight={splittedSearch} className={classes.itemDescription}>
        {item.description}
      </Highlight>
    </UnstyledButton>
  ));

  useHotkeys([['mod + shift + k', () => searchInputRef.current?.focus()]]);

  return (
    <div className={classes.navbar}>
      <Center className={classes.backLink} component={Link} inline href="/core/combobox">
        <IconArrowLeft className={cx(classes.backIcon, 'mantine-rotate-rtl')} stroke={1.5} />
        <span>Back to Combobox documentation</span>
      </Center>

      <TextInput
        placeholder="Ctrl + Shift + K to search"
        classNames={{ input: classes.search }}
        leftSection={<IconSearch className={classes.searchIcon} stroke={1.5} />}
        radius={0}
        size="lg"
        value={search}
        onChange={(event) => setSearch(event.currentTarget.value)}
        ref={searchInputRef}
      />

      {links.length > 0 ? links : <div className={classes.empty}>Nothing found</div>}
    </div>
  );
}
