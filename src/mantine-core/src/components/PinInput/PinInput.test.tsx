import React from 'react';
import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render, tests } from '@mantine/tests';
import { PinInput, PinInputProps, PinInputStylesNames } from './PinInput';

const defaultProps: PinInputProps = {};

describe('@mantine/core/PinInput', () => {
  tests.axe([<PinInput {...defaultProps} aria-label="Test label" />]);

  tests.itSupportsSystemProps<PinInputProps, PinInputStylesNames>({
    component: PinInput,
    props: defaultProps,
    displayName: '@mantine/core/PinInput',
    refType: HTMLDivElement,
    stylesApiSelectors: ['root', 'pinInput'],
  });

  it('renders correct amount of inputs based on length prop', () => {
    const { container } = render(<PinInput {...defaultProps} length={5} />);
    expect(container.querySelectorAll('.mantine-pinInput-input')).toHaveLength(5);
  });

  it('onComplete is called on last input', () => {
    const spy = jest.fn();
    const { container } = render(<PinInput {...defaultProps} onComplete={spy} />);

    expect(container.querySelectorAll('.mantine-pinInput-input')).toHaveLength(4);

    container.querySelectorAll('.mantine-pinInput-input').forEach((element) => {
      fireEvent.change(element, { target: { value: '1' } });
    });

    expect(spy).toHaveBeenCalledWith('1111');
  });

  it('stay focused on last element on initial backspace press', async () => {
    const { container } = render(<PinInput {...defaultProps} length={5} />);
    expect(container.querySelectorAll('.mantine-pinInput-input')).toHaveLength(5);

    container.querySelectorAll('.mantine-pinInput-input').forEach((element, key) => {
      fireEvent.change(element, { target: { value: key } });
    });

    await userEvent.keyboard('{Backspace}');
    expect(container.querySelectorAll('.mantine-pinInput-input')[4]).toHaveFocus();
  });

  it('inputs except the last element should not need two backspace press to shift focus to prev element', async () => {
    const { container } = render(<PinInput {...defaultProps} length={5} />);
    expect(container.querySelectorAll('.mantine-pinInput-input')).toHaveLength(5);

    container.querySelectorAll('.mantine-pinInput-input').forEach((element, key) => {
      fireEvent.change(element, { target: { value: key } });
    });

    await userEvent.keyboard('{Backspace}');
    expect(container.querySelectorAll('.mantine-pinInput-input')[4]).toHaveFocus();

    await userEvent.keyboard('{Backspace}');
    expect(container.querySelectorAll('.mantine-pinInput-input')[3]).toHaveFocus();

    await userEvent.keyboard('{Backspace}');
    expect(container.querySelectorAll('.mantine-pinInput-input')[2]).toHaveFocus();

    await userEvent.keyboard('{Backspace}');
    expect(container.querySelectorAll('.mantine-pinInput-input')[1]).toHaveFocus();

    await userEvent.keyboard('{Backspace}');
    expect(container.querySelectorAll('.mantine-pinInput-input')[0]).toHaveFocus();
  });
});
