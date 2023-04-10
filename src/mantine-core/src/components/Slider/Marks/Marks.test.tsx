import React from 'react';
import { render, userEvent } from '@mantine/tests';
import { Marks, MarksProps } from './Marks';

const defaultProps: MarksProps = {
  marks: [
    { value: 50, label: 'test-1' },
    { value: 80, label: 'test-2' },
  ],
  min: 0,
  max: 100,
  value: 80,
  disabled: false,
  variant: '',
  offset: 0,
  inverted: false,
};

describe('@mantine/core/Slider/Marks', () => {
  it('renders correct marks labels', () => {
    const { container } = render(<Marks {...defaultProps} />);
    const labels = container.querySelectorAll('.mantine-Slider-markLabel');
    expect(container.querySelectorAll('.mantine-Slider-markWrapper')).toHaveLength(2);
    expect(labels[0].textContent).toBe('test-1');
    expect(labels[1].textContent).toBe('test-2');
  });

  it('has correct displayName', () => {
    expect(Marks.displayName).toStrictEqual('@mantine/core/SliderMarks');
  });
});
