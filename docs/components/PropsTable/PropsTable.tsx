import React from 'react';
import { Table, Text, Highlight, rem, Anchor } from '@mantine/core';
import { DocsSection } from '@/components/DocsSection';
import { HtmlText } from '@/components/HtmlText';
import { TableInlineCode } from '@/components/TableInlineCode';
import docgenData from '@/.docgen/docgen.json';

export interface DocgenProp {
  defaultValue: {
    value: string;
  };
  description: string;
  name: string;
  required: boolean;
  type: {
    name: string;
  };
}

export interface Docgen {
  description: string;
  displayName: string;
  props: Record<string, DocgenProp>;
}

const PROPS_DATA: Record<string, Docgen> = docgenData as any;

interface PropsTableProps {
  component: string;
  query: string;
}

export function PropsTable({ component, query }: PropsTableProps) {
  if (!PROPS_DATA[component]) {
    return (
      <Text>
        <Text span c="red">
          Error loading component props data.{' '}
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

  const rows = Object.keys(PROPS_DATA[component].props)
    .filter((propKey) =>
      PROPS_DATA[component].props[propKey].name.toLowerCase().includes(query.toLowerCase().trim())
    )
    .map((propKey) => {
      const prop = PROPS_DATA[component].props[propKey];

      return (
        <Table.Tr key={propKey}>
          <Table.Td style={{ whiteSpace: 'nowrap' }}>
            <Highlight highlight={query} component="span" fz="sm">
              {prop.name}
            </Highlight>

            {prop.required && (
              <Text component="sup" color="red" fz="xs">
                {' '}
                *
              </Text>
            )}
          </Table.Td>

          <Table.Td>
            <TableInlineCode>{prop.type.name}</TableInlineCode>
          </Table.Td>
          <Table.Td>
            <HtmlText fz="sm">{prop.description}</HtmlText>
          </Table.Td>
        </Table.Tr>
      );
    });

  if (rows.length === 0) {
    return (
      <Text color="dimmed" mb="xl">
        Nothing found
      </Text>
    );
  }

  return (
    <DocsSection>
      <div style={{ overflowX: 'auto' }}>
        <div style={{ minWidth: rem(500) }}>
          <Table withTableBorder>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Name</Table.Th>
                <Table.Th>Type</Table.Th>
                <Table.Th>Description</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </div>
      </div>
    </DocsSection>
  );
}
