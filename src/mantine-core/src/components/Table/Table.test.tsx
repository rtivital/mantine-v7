import React from 'react';
import { render, tests } from '@mantine/tests';
import { Table, TableProps, TableStylesNames } from './Table';

const defaultProps: TableProps = {
  children: (
    <>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>test-th-1</Table.Th>
          <Table.Th>test-th-2</Table.Th>
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>
        <Table.Tr>
          <Table.Td>test-td-1</Table.Td>
          <Table.Td>test-td-2</Table.Td>
        </Table.Tr>
      </Table.Tbody>

      <Table.Tfoot>
        <Table.Tr>
          <Table.Td>test-td-1</Table.Td>
          <Table.Td>test-td-2</Table.Td>
        </Table.Tr>
      </Table.Tfoot>

      <Table.Caption>test-caption</Table.Caption>
    </>
  ),
};

describe('@mantine/core/Table', () => {
  tests.itSupportsSystemProps<TableProps, TableStylesNames>({
    component: Table,
    props: defaultProps,
    styleProps: true,
    extend: true,
    refType: HTMLTableElement,
    displayName: '@mantine/core/Table',
    stylesApiSelectors: ['table', 'caption', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td'],
  });

  it('renders children', () => {
    const { container } = render(
      <Table>
        <tbody data-test />
      </Table>
    );
    expect(container.querySelector('[data-test]')).toBeInTheDocument();
  });
});
