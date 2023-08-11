import React from 'react';
import {
  tests,
  inputDefaultProps,
  inputStylesApiSelectors,
  expectValue,
  render,
} from '@mantine/tests';
import { __InputStylesNames } from '@mantine/core';
import { MonthPickerInput, MonthPickerInputProps } from './MonthPickerInput';

const defaultProps = {
  popoverProps: { withinPortal: false, transitionProps: { duration: 0 } },
  modalProps: { withinPortal: false, transitionProps: { duration: 0 } },
};

const defaultPropsWithInputProps = {
  ...defaultProps,
  ...(inputDefaultProps as any),
};

describe('@mantine/dates/MonthPickerInput', () => {
  tests.axe([
    <MonthPickerInput aria-label="test-label" />,
    <MonthPickerInput aria-label="test-label" error />,
    <MonthPickerInput aria-label="test-label" error="test-error" id="test" />,
    <MonthPickerInput aria-label="test-label" description="test-description" />,
  ]);

  tests.itSupportsSystemProps<MonthPickerInputProps, __InputStylesNames>({
    component: MonthPickerInput,
    props: defaultPropsWithInputProps,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    refType: HTMLButtonElement,
    displayName: '@mantine/dates/MonthPickerInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<MonthPickerInputProps>({
    component: MonthPickerInput,
    props: defaultPropsWithInputProps,
    selector: 'button',
  });

  tests.dates.itSupportsDateInputProps({ component: MonthPickerInput, props: defaultProps });
  tests.dates.itSupportsClearableProps({
    component: MonthPickerInput,
    props: { ...defaultProps, defaultValue: new Date() },
  });
  tests.dates.itSupportsYearsListProps({
    component: MonthPickerInput,
    props: {
      ...defaultProps,
      defaultLevel: 'decade',
      defaultValue: new Date(2022, 3, 11),
      popoverProps: { opened: true, withinPortal: false, transitionProps: { duration: 0 } },
    },
  });

  tests.dates.itSupportsMonthsListProps({
    component: MonthPickerInput,
    props: {
      ...defaultProps,
      defaultValue: new Date(2022, 3, 11),
      popoverProps: { opened: true, withinPortal: false, transitionProps: { duration: 0 } },
    },
  });

  it('supports valueFormat prop', () => {
    const { container, rerender } = render(
      <MonthPickerInput {...defaultProps} valueFormat="MMMM" value={new Date(2022, 3, 11)} />
    );
    expectValue(container, 'April');

    rerender(
      <MonthPickerInput
        {...defaultProps}
        type="multiple"
        valueFormat="MMMM"
        value={[new Date(2022, 3, 11), new Date(2022, 4, 11)]}
      />
    );
    expectValue(container, 'April, May');

    rerender(
      <MonthPickerInput
        {...defaultProps}
        type="range"
        valueFormat="MMMM"
        value={[new Date(2022, 3, 11), new Date(2022, 4, 11)]}
      />
    );
    expectValue(container, 'April – May');
  });

  it('has correct default __staticSelector', () => {
    const { container } = render(
      <MonthPickerInput
        {...defaultProps}
        popoverProps={{ opened: true, withinPortal: false, transitionProps: { duration: 0 } }}
      />
    );
    expect(container.querySelector('[data-dates-input]')).toHaveClass(
      'mantine-MonthPickerInput-input'
    );

    expect(container.querySelector('table button')).toHaveClass(
      'mantine-MonthPickerInput-monthsListControl'
    );
  });
});
