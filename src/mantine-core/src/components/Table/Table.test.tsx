import React from 'react';
import { render, tests } from '@mantine/tests';
import { Table, TableProps, TableStylesNames } from './Table';

const defaultProps: TableProps = {};

describe('@mantine/core/Table', () => {
  tests.itSupportsSystemProps<TableProps, TableStylesNames>({
    component: Table,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    extend: true,
    refType: HTMLTableElement,
    displayName: '@mantine/core/Table',
    stylesApiSelectors: ['root'],
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
