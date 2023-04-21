import React from 'react';
import { Table, rem } from '@mantine/core';
import { DocsSection } from '@/components/DocsSection';

interface DataTableProps {
  data: React.ReactNode[][];
  head?: string[];
}

export function MdxDataTable({ data, head }: DataTableProps) {
  const rows = data.map((row, index) => {
    const cells = row.map((cell, cellIndex) => <Table.Td key={cellIndex}>{cell}</Table.Td>);
    return <Table.Tr key={index}>{cells}</Table.Tr>;
  });

  const ths = Array.isArray(head)
    ? head.map((cell, index) => <Table.Th key={index}>{cell}</Table.Th>)
    : null;

  return (
    <DocsSection>
      <div style={{ overflowX: 'auto' }}>
        <div style={{ minWidth: rem(400) }}>
          <Table>
            {ths && (
              <Table.Thead>
                <Table.Tr>{ths}</Table.Tr>
              </Table.Thead>
            )}
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </div>
      </div>
    </DocsSection>
  );
}
