import React from 'react';
import { render, tests } from '@mantine/tests';
import { screen } from '@testing-library/react';
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
    render(
      <Table>
        <tbody data-test="tbody" />
      </Table>
    );
    expect(document.querySelector('[data-test="tbody"]')).toBeInTheDocument();
  });

  it('sets data-with-table-border attribute when withTableBorder prop is set', () => {
    render(<Table withTableBorder />);
    expect(screen.getByRole('table')).toHaveAttribute('data-with-table-border');
  });
});
