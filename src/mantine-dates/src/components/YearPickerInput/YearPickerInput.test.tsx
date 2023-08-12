import React from 'react';
import { tests, inputDefaultProps, inputStylesApiSelectors, render } from '@mantine/tests';
import { __InputStylesNames } from '@mantine/core';
import { datesTests, expectValue } from '@mantine/dates-tests';
import { YearPickerInput, YearPickerInputProps } from './YearPickerInput';

const defaultProps = {
  popoverProps: { withinPortal: false, transitionProps: { duration: 0 } },
  modalProps: { withinPortal: false, transitionProps: { duration: 0 } },
};

const defaultPropsWithInputProps = {
  ...defaultProps,
  ...(inputDefaultProps as any),
};

describe('@mantine/dates/YearPickerInput', () => {
  tests.axe([
    <YearPickerInput aria-label="test-label" />,
    <YearPickerInput aria-label="test-label" error />,
    <YearPickerInput aria-label="test-label" error="test-error" id="test" />,
    <YearPickerInput aria-label="test-label" description="test-description" />,
  ]);

  tests.itSupportsSystemProps<YearPickerInputProps, __InputStylesNames>({
    component: YearPickerInput,
    props: defaultPropsWithInputProps,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    refType: HTMLButtonElement,
    displayName: '@mantine/dates/YearPickerInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<YearPickerInputProps>({
    component: YearPickerInput,
    props: defaultPropsWithInputProps,
    selector: 'button',
  });

  datesTests.itSupportsDateInputProps({ component: YearPickerInput, props: defaultProps });
  datesTests.itSupportsClearableProps({
    component: YearPickerInput,
    props: { ...defaultProps, defaultValue: new Date() },
  });
  datesTests.itSupportsYearsListProps({
    component: YearPickerInput,
    props: {
      ...defaultProps,
      defaultValue: new Date(),
      popoverProps: { opened: true, withinPortal: false, transitionProps: { duration: 0 } },
    },
  });

  it('supports valueFormat prop', () => {
    const { container, rerender } = render(
      <YearPickerInput {...defaultProps} valueFormat="YY" value={new Date(2022, 3, 11)} />
    );
    expectValue(container, '22');

    rerender(
      <YearPickerInput
        {...defaultProps}
        type="multiple"
        valueFormat="YY"
        value={[new Date(2022, 3, 11), new Date(2024, 3, 11)]}
      />
    );
    expectValue(container, '22, 24');

    rerender(
      <YearPickerInput
        {...defaultProps}
        type="range"
        valueFormat="YY"
        value={[new Date(2022, 3, 11), new Date(2024, 3, 11)]}
      />
    );
    expectValue(container, '22 – 24');
  });

  it('has correct default __staticSelector', () => {
    const { container } = render(
      <YearPickerInput
        {...defaultProps}
        popoverProps={{ opened: true, withinPortal: false, transitionProps: { duration: 0 } }}
      />
    );
    expect(container.querySelector('[data-dates-input]')).toHaveClass(
      'mantine-YearPickerInput-input'
    );

    expect(container.querySelector('table button')).toHaveClass(
      'mantine-YearPickerInput-yearsListControl'
    );
  });
});
