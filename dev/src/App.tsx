import React from 'react';
import { MantineProvider, UnstyledButton } from '@mantine/core';

export default function App() {
  return (
    <MantineProvider
      defaultColorScheme="auto"
      theme={{
        components: {
          UnstyledButton: {
            defaultProps: {
              'data-test-prop': 'test',
            },
          },
        },
      }}
    >
      <UnstyledButton style={(theme) => ({ color: theme.colors.pink[6] })} p="xl">
        Hello
      </UnstyledButton>
      <UnstyledButton classNames={{ root: 'test-root' }} unstyled>
        Hello
      </UnstyledButton>
    </MantineProvider>
  );
}
