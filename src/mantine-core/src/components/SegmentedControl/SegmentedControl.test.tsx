import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render, tests } from '@mantine/tests';
import {
  SegmentedControl,
  SegmentedControlProps,
  SegmentedControlStylesNames,
} from './SegmentedControl';

const defaultProps: SegmentedControlProps = {
  transitionDuration: 0,
  data: ['First', 'Second', 'Third'],
};

describe('@mantine/core/SegmentedControl', () => {
  tests.axe([
    <SegmentedControl {...defaultProps} />,
    <SegmentedControl {...defaultProps} aria-label="group label" />,
  ]);
  tests.itSupportsSystemProps<SegmentedControlProps, SegmentedControlStylesNames>({
    component: SegmentedControl,
    props: defaultProps,
    styleProps: true,
    extend: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/SegmentedControl',
    stylesApiSelectors: ['root', 'label', 'input', 'control', 'indicator'],
  });

  it('supports uncontrolled state', async () => {
    render(<SegmentedControl {...defaultProps} />);
    expect(screen.getAllByRole('radio')[0]).toBeChecked();
    await userEvent.click(screen.getAllByRole('radio')[1]);
    expect(screen.getAllByRole('radio')[1]).toBeChecked();
  });

  it('supports controlled state', async () => {
    const spy = jest.fn();
    render(<SegmentedControl {...defaultProps} value="Second" onChange={spy} />);
    expect(screen.getAllByRole('radio')[1]).toBeChecked();
    await userEvent.click(screen.getAllByRole('radio')[0]);
    expect(screen.getAllByRole('radio')[1]).toBeChecked();
    expect(screen.getAllByRole('radio')[0]).not.toBeChecked();
    expect(spy).toHaveBeenCalledWith('First');
  });
});
