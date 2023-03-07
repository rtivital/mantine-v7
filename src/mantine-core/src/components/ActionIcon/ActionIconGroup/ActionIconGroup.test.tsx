import React from 'react';
import { tests, render } from '@mantine/tests';
import { screen } from '@testing-library/react';
import {
  ActionIconGroup,
  ActionIconGroupProps,
  ActionIconGroupStylesNames,
} from './ActionIconGroup';

const defaultProps: ActionIconGroupProps = {};

describe('@mantine/core/ActionIconGroup', () => {
  tests.itSupportsSystemProps<ActionIconGroupProps, ActionIconGroupStylesNames>({
    component: ActionIconGroup,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/ActionIconGroup',
    stylesApiSelectors: ['root'],
  });

  it('adds data-orientation attribute to root element based on orientation prop', () => {
    render(<ActionIconGroup orientation="vertical" />);
    expect(screen.getByRole('group')).toHaveAttribute('data-orientation', 'vertical');
  });
});
