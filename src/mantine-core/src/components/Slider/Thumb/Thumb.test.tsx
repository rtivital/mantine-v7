import React from 'react';
import { tests, render } from '@mantine/tests';
import { Thumb, ThumbProps } from './Thumb';

const defaultProps: ThumbProps = {
  max: 100,
  min: 0,
  value: 10,
  position: 10,
  label: 'test-label',
  dragging: false,
  onMouseDown: () => {},
  labelTransition: 'skew-up' as const,
  labelTransitionDuration: 0,
  labelTransitionTimingFunction: 'ease',
  labelAlwaysOn: true,
  thumbLabel: 'test-label',
  disabled: false,
  variant: '',
  showLabelOnHover: true,
};

describe('@mantine/core/Thumb', () => {
  tests.axe([<Thumb {...defaultProps} />]);
  tests.itSupportsRef<ThumbProps>({
    component: Thumb,
    props: defaultProps,
    refType: HTMLDivElement,
  });

  it('shows label based on dragging and labelAlwaysOn props', () => {
    const { container, rerender } = render(
      <Thumb {...defaultProps} labelAlwaysOn dragging={false} />
    );
    expect(container.querySelectorAll('.mantine-Slider-label')).toHaveLength(1);

    rerender(<Thumb {...defaultProps} labelAlwaysOn={false} dragging />);
    expect(container.querySelectorAll('.mantine-Slider-label')).toHaveLength(1);

    rerender(<Thumb {...defaultProps} labelAlwaysOn={false} dragging={false} />);
    expect(container.querySelectorAll('.mantine-Slider-label')).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(Thumb.displayName).toStrictEqual('@mantine/core/SliderThumb');
  });
});
