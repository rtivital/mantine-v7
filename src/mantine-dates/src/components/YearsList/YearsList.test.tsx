import React from 'react';
import { render, tests, screen } from '@mantine/tests';
import { YearsList, YearsListProps, YearsListStylesNames } from './YearsList';

const defaultProps: YearsListProps = {
  decade: new Date(2022, 3, 11),
};

describe('@mantine/core/YearsList', () => {
  tests.itSupportsSystemProps<YearsListProps, YearsListStylesNames>({
    component: YearsList,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLTableElement,
    displayName: '@mantine/core/YearsList',
    stylesApiSelectors: ['yearsList', 'yearsListCell', 'yearsListControl', 'yearsListRow'],
  });

  tests.dates.itSupportsGetControlRef({
    component: YearsList,
    props: defaultProps,
    numberOfControls: 10,
  });
  tests.dates.itSupportsYearsListProps({ component: YearsList, props: defaultProps });
  tests.dates.itSupportsOnControlKeydown({ component: YearsList, props: defaultProps });
  tests.dates.itSupportsOnControlClick({ component: YearsList, props: defaultProps });
  tests.dates.itSupportsOnControlMouseEnter({ component: YearsList, props: defaultProps });

  it('has correct default __staticSelector', () => {
    render(<YearsList {...defaultProps} />);
    expect(screen.getByRole('table')).toHaveClass('mantine-YearsList-yearsList');
    expect(screen.getAllByRole('button')[0]).toHaveClass('mantine-YearsList-yearsListControl');
  });

  it('supports custom __staticSelector', () => {
    render(<YearsList {...defaultProps} __staticSelector="Calendar" />);
    expect(screen.getByRole('table')).toHaveClass('mantine-Calendar-yearsList');
    expect(screen.getAllByRole('button')[0]).toHaveClass('mantine-Calendar-yearsListControl');
  });
});
