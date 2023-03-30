import React from 'react';
import { render, tests } from '@mantine/tests';
import { InputWrapper, InputWrapperProps, InputWrapperStylesNames } from './InputWrapper';

const defaultProps: InputWrapperProps = {
  id: 'test-id',
  children: 'test',
  label: 'test-label',
  error: 'test-error',
  description: 'test-description',
  required: true,
};

const queries = {
  getLabel: (container: HTMLElement) => container.querySelector('.mantine-InputWrapper-label')!,
  getError: (container: HTMLElement) => container.querySelector('.mantine-InputWrapper-error')!,
  getRequired: (container: HTMLElement) =>
    container.querySelector('.mantine-InputWrapper-required')!,
  getDescription: (container: HTMLElement) =>
    container.querySelector('.mantine-InputWrapper-description')!,
};

describe('@mantine/core/InputWrapper', () => {
  tests.itSupportsSystemProps<InputWrapperProps, InputWrapperStylesNames>({
    component: InputWrapper,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/InputWrapper',
    stylesApiSelectors: ['root', 'description', 'error', 'label', 'required'],
  });

  it('renders correct error, description and label', () => {
    const { container } = render(
      <InputWrapper
        {...defaultProps}
        required={false}
        label="test-label"
        error="test-error"
        description="test-description"
      />
    );

    expect(queries.getLabel(container).textContent).toBe('test-label');
    expect(queries.getDescription(container).textContent).toBe('test-description');
    expect(queries.getError(container).textContent).toBe('test-error');
  });

  it('does not render error if error prop is boolean', () => {
    const { container } = render(<InputWrapper {...defaultProps} error />);
    expect(queries.getError(container)).toBe(null);
  });

  it('renders required asterisk with required prop is true', () => {
    const { container, rerender } = render(<InputWrapper {...defaultProps} required />);
    expect(queries.getRequired(container)).toBeInTheDocument();

    rerender(<InputWrapper {...defaultProps} required={false} />);
    expect(queries.getRequired(container)).not.toBeInTheDocument();
  });

  it('spreads props to label, description and error', () => {
    const { container } = render(
      <InputWrapper
        {...defaultProps}
        labelProps={{ 'data-test-label': true }}
        descriptionProps={{ 'data-test-description': true }}
        errorProps={{ 'data-test-error': true }}
      />
    );

    expect(queries.getLabel(container)).toHaveAttribute('data-test-label');
    expect(queries.getDescription(container)).toHaveAttribute('data-test-description');
    expect(queries.getError(container)).toHaveAttribute('data-test-error');
  });

  it('sets label element based on labelElement prop', () => {
    const { container: label } = render(<InputWrapper {...defaultProps} labelElement="label" />);
    const { container: div } = render(<InputWrapper {...defaultProps} labelElement="div" />);
    expect(queries.getLabel(label)).toHaveAttribute('for', 'test-id');
    expect(queries.getLabel(div)).not.toHaveAttribute('for');
  });

  it('generates correct ids for description and error', () => {
    const { container } = render(<InputWrapper {...defaultProps} id="test45" />);
    expect(queries.getDescription(container)).toHaveAttribute('id', 'test45-description');
    expect(queries.getError(container)).toHaveAttribute('id', 'test45-error');
  });
});
