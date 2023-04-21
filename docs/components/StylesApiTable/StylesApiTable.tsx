import React from 'react';
import Link from 'next/link';
import { Text, Anchor, Table, rem } from '@mantine/core';
import * as stylesData from '@mantine/styles-api';
import type { Modifier } from '@mantine/styles-api';
import { HtmlText } from '@/components/HtmlText';
import { TableInlineCode } from '@/components/TableInlineCode';
import { DocsSection } from '@/components/DocsSection';
import classes from './StylesApiTable.module.css';

interface StylesApiData {
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
    return (
      <Text>
        <Text span c="red">
          Error loading component styles api data.{' '}
        </Text>
        If you see this message please let us know by{' '}
        <Anchor
          href="https://github.com/mantinedev/mantine/issues/new?assignees=&labels=&template=docs_report.yml"
          target="_blank"
        >
          opening an issue on GitHub
        </Anchor>
        .
      </Text>
    );
  }

  const selectorsRows = Object.keys(data.selectors).map((selector) => (
    <Table.Tr key={selector}>
      <Table.Td>{selector}</Table.Td>
      <Table.Td>
        <TableInlineCode>
          .mantine-{component}-{selector}
        </TableInlineCode>
      </Table.Td>
      <Table.Td>
        <HtmlText>{data.selectors[selector]}</HtmlText>
      </Table.Td>
    </Table.Tr>
  ));

  const variablesRows = Object.keys(data.vars).reduce<React.ReactNode[]>((acc, selector) => {
    Object.keys(data.vars[selector]).forEach((variable, index) => {
      acc.push(
        <Table.Tr key={`${selector}-${variable}`}>
          {index === 0 && (
            <Table.Td rowSpan={Object.keys(data.vars[selector]).length}>{selector}</Table.Td>
          )}
          <Table.Td>
            <TableInlineCode>{variable}</TableInlineCode>
          </Table.Td>
          <Table.Td>
            <HtmlText>{data.vars[selector][variable]}</HtmlText>
          </Table.Td>
        </Table.Tr>
      );
    });

    return acc;
  }, []);

  const modifiersRows = data.modifiers.map((modifier, index) => (
    <Table.Tr key={index}>
      <Table.Td>
        {Array.isArray(modifier.selector) ? modifier.selector.join(', ') : modifier.selector}
      </Table.Td>
      <Table.Td>
        <TableInlineCode>{modifier.modifier}</TableInlineCode>
      </Table.Td>
      <Table.Td>
        <HtmlText>{modifier.condition || '–'}</HtmlText>
      </Table.Td>
      <Table.Td>
        <HtmlText>{modifier.value || '–'}</HtmlText>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <DocsSection>
      <div style={{ overflowX: 'auto' }}>
        <div style={{ minWidth: rem(500) }}>
          <div className={classes.section}>
            <Text className={classes.title}>{component} component selectors</Text>
            <Anchor component={Link} href="/styles/styles-api/" className={classes.link}>
              Learn how to customize components styles with Styles API →
            </Anchor>
            <Table withTableBorder>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Selector</Table.Th>
                  <Table.Th>Static selector</Table.Th>
                  <Table.Th>Description</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{selectorsRows}</Table.Tbody>
            </Table>
          </div>

          {variablesRows.length > 0 && (
            <div className={classes.section}>
              <Text className={classes.title}>{component} component CSS variables</Text>
              <Anchor component={Link} href="/styles/styles-api/" className={classes.link}>
                Learn how to handle dynamic styles with CSS variables →
              </Anchor>
              <Table withTableBorder>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Selector</Table.Th>
                    <Table.Th>Variable</Table.Th>
                    <Table.Th>Description</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{variablesRows}</Table.Tbody>
              </Table>
            </div>
          )}

          {modifiersRows.length > 0 && (
            <div className={classes.section}>
              <Text className={classes.title}>{component} component modifiers</Text>
              <Anchor component={Link} href="/styles/styles-api/" className={classes.link}>
                Learn how to use data attributes to customize styles →
              </Anchor>
              <Table withTableBorder>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Selector</Table.Th>
                    <Table.Th>Modifier</Table.Th>
                    <Table.Th>Condition</Table.Th>
                    <Table.Th>Value</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{modifiersRows}</Table.Tbody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </DocsSection>
  );
}
