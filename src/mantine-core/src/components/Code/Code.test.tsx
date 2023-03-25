import React from 'react';
import { screen } from '@testing-library/react';
import { render, tests } from '@mantine/tests';
import { Code, CodeProps, CodeStylesNames } from './Code';

const defaultProps: CodeProps = {};

describe('@mantine/core/Code', () => {
  tests.itSupportsSystemProps<CodeProps, CodeStylesNames>({
    component: Code,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    refType: HTMLElement,
    displayName: '@mantine/core/Code',
    stylesApiSelectors: ['root'],
  });

  it('renders code element for inline code and pre element for block', () => {
    const { rerender } = render(<Code {...defaultProps}>inline-code</Code>);
    expect(screen.getByText('inline-code').nodeName).toBe('CODE');

    rerender(
      <Code {...defaultProps} block>
        block-code
      </Code>
    );
    expect(screen.getByText('block-code').nodeName).toBe('PRE');
  });
});
