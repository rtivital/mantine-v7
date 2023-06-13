import React from 'react';
import { useRouter } from 'next/router';
import { IconSearch } from '@tabler/icons-react';
import { rem } from '@mantine/core';
import { Spotlight, createSpotlight } from '@mantine/spotlight';
import { ALL_MDX_PAGES } from '@/mdx';

export const [searchStore, searchHandlers] = createSpotlight();

export function Search() {
  const router = useRouter();

  const actions = ALL_MDX_PAGES.map((page) => (
    <Spotlight.Action
      key={page.title}
      label={page.title}
      description={page.search || page.description}
      highlightQuery
      onClick={() => router.push(page.slug)}
    />
  ));

  return (
    <Spotlight store={searchStore} shortcut={['mod + K', 'mod + P', '/']}>
      <Spotlight.Search
        leftSection={<IconSearch style={{ width: rem(20), height: rem(20) }} />}
        placeholder="Search documentation"
      />
      <Spotlight.ActionsList>
        {actions}
        <Spotlight.Empty>Nothing found...</Spotlight.Empty>
      </Spotlight.ActionsList>
    </Spotlight>
  );
}
