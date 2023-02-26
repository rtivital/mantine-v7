import React from 'react';
import { MantineProvider } from '@mantine/core';
import { render } from '@testing-library/react';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
  providerName: string;
}

export function itSupportsProviderDefaultProps<Props>(
  options: Options<Props>,
  name = 'supports default props on MantineProvider'
) {
  it(name, () => {
    const { container } = render(<options.component {...(options.props as any)} />, {
      wrapper: ({ children }) => (
        <MantineProvider
          theme={{
            components: {
              [options.providerName]: {
                defaultProps: { 'data-provider-prop': 'test-provider-prop' },
              },
            },
          }}
        >
          {children}
        </MantineProvider>
      ),
    });

    const element = container.querySelector('[data-provider-prop]');
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('data-provider-prop', 'test-provider-prop');
  });
}
