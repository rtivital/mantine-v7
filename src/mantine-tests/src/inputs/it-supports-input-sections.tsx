import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
}

export function itSupportsInputSections<Props>(
  options: Options<Props>,
  name = 'supports rightSection and leftSection props'
) {
  it(name, () => {
    render(
      <options.component
        {...options.props}
        rightSection="test-right-section"
        leftSection="test-left-section"
      />
    );
    expect(screen.getByText('test-right-section')).toBeInTheDocument();
    expect(screen.getByText('test-left-section')).toBeInTheDocument();
  });
}
