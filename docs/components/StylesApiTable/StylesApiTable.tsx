import React from 'react';
import Link from 'next/link';
import { Text, Anchor, rem } from '@mantine/core';
import * as stylesData from '@mantine/styles-api';
import type { Modifier } from '@mantine/styles-api';
import { TableError } from '@/components/TableError';
import { SelectorsTable } from './SelectorsTable';
import { VariablesTable } from './VariablesTable';
import { ModifiersTable } from './ModifiersTable';
import classes from './StylesApiTable.module.css';

export interface StylesApiData {
  selectors: Record<string, string>;
  vars: Record<string, Record<string, string>>;
  modifiers: Modifier<string>[];
}

const STYLES_API_DATA: Record<string, StylesApiData> = stylesData as any;

export interface StylesApiTableProps {
  component: string;
}

export function StylesApiTable({ component }: StylesApiTableProps) {
  const data = STYLES_API_DATA[`${component}StylesApi`];
  if (!data) {
    return <TableError errorOf="Styles API" />;
  }

  return (
    <>
      <div style={{ overflowX: 'auto' }}>
        <div style={{ minWidth: rem(500) }}>
          <div className={classes.section}>
            <Text className={classes.title}>{component} selectors</Text>
            <Anchor component={Link} href="/styles/styles-api/" className={classes.link}>
              Learn how to customize components styles with Styles API →
            </Anchor>
            <SelectorsTable component={component} data={data} />
          </div>

          {Object.keys(data.vars).length > 0 && (
            <div className={classes.section}>
              <Text className={classes.title}>{component} CSS variables</Text>
              <Anchor component={Link} href="/styles/styles-api/" className={classes.link}>
                Learn how to handle dynamic styles with CSS variables →
              </Anchor>
              <VariablesTable data={data} />
            </div>
          )}

          {Array.isArray(data.modifiers) && data.modifiers.length > 0 && (
            <div className={classes.section}>
              <Text className={classes.title}>{component} component modifiers</Text>
              <Anchor component={Link} href="/styles/styles-api/" className={classes.link}>
                Learn how to use data attributes to customize styles →
              </Anchor>
              <ModifiersTable data={data} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
