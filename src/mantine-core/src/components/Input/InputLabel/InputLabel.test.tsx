import React from 'react';
import { render, tests } from '@mantine/tests';
import { screen } from '@testing-library/react';
import { InputLabel, InputLabelProps, InputLabelStylesNames } from './InputLabel';

const defaultProps: InputLabelProps = {
  required: true,
};

describe('@mantine/core/InputLabel', () => {
  tests.itSupportsSystemProps<InputLabelProps, InputLabelStylesNames>({
    component: InputLabel,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    refType: HTMLLabelElement,
    displayName: '@mantine/core/InputLabel',
    stylesApiSelectors: ['label', 'required'],
  });

  it('renders required asterisk if required prop is set', () => {
    const { container, rerender } = render(<InputLabel required>Label</InputLabel>);
    expect(container.querySelector('.mantine-InputLabel-required')).toHaveTextContent('*');

    rerender(<InputLabel required={false}>Label</InputLabel>);
    expect(container.querySelector('.mantine-InputLabel-required')).toBeNull();
  });

  it('changes root element based on labelElement prop', () => {
    const { rerender } = render(<InputLabel labelElement="label">Label</InputLabel>);
    expect(screen.getByText('Label').tagName).toBe('LABEL');

    rerender(<InputLabel labelElement="div">Label</InputLabel>);
    expect(screen.getByText('Label').tagName).toBe('DIV');
  });
});
