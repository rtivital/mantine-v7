import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { tests, createContextContainer, render } from '@mantine/tests';
import { TabsTab, TabsTabProps } from './TabsTab';
import { Tabs } from '../Tabs';

const defaultProps: TabsTabProps = {
  value: 'test',
  children: 'Test tab',
};

const TestContainer = createContextContainer(TabsTab, Tabs);

describe('@mantine/core/TabsTab', () => {
  tests.itSupportsFocusEvents({
    component: TestContainer,
    props: defaultProps,
    selector: '[role="tab"]',
  });

  tests.itThrowsContextError({
    component: TabsTab,
    props: defaultProps,
    error: 'Tabs component was not found in the tree',
  });

  tests.itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLButtonElement,
    displayName: '@mantine/core/TabsTab',
    extend: true,
    styleProps: true,
    children: true,
    selector: '[role="tab"]',
    // stylesApiSelectors: ['root', 'icon', 'label', 'rightSection'],
  });

  it('calls onClick function from props', async () => {
    const spy = jest.fn();
    render(<TestContainer {...defaultProps} onClick={spy} />);
    await userEvent.click(screen.getByRole('tab'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls onKeyDown function from props', async () => {
    const spy = jest.fn();
    render(<TestContainer {...defaultProps} onKeyDown={spy} />);
    await userEvent.type(screen.getByRole('tab'), 'R');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('renders given right and left sections', () => {
    render(
      <TestContainer {...defaultProps} rightSection="test-right-section" leftSection="test-icon" />
    );
    expect(screen.getByText('test-right-section')).toBeInTheDocument();
    expect(screen.getByText('test-icon')).toBeInTheDocument();
  });
});
