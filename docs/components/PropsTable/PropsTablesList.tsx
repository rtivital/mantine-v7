import React, { useState } from 'react';
import { TextInput, Title } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { PropsTable } from './PropsTable';
import classes from './PropsTablesList.module.css';

export interface PropsTablesListProps {
  components: string[];
  componentPrefix?: string;
}

export function PropsTablesList({ components, componentPrefix }: PropsTablesListProps) {
  const [query, setQuery] = useState('');

  const tables = components.map((component) => {
    const componentName = componentPrefix
      ? componentPrefix === component
        ? component
        : `${componentPrefix}.${component.replace(componentPrefix, '')}`
      : component;
    return (
      <div key={component} className={classes.section}>
        <Title order={2} className={classes.title}>
          {componentName} component props
        </Title>
        <PropsTable component={component} query={query} />
      </div>
    );
  });

  return (
    <div>
      <TextInput
        className={classes.search}
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
        leftSection={<IconSearch className={classes.searchIcon} />}
        placeholder="Search props"
        radius="md"
        size="lg"
        autoFocus
      />
      {tables}
    </div>
  );
}
