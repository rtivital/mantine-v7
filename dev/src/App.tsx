import React from 'react';
import { MantineProvider, UnstyledButton, Loader } from '@mantine/core';

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
      <Loader />
      <Loader type="bars" />
      <Loader type="dots" />
    </MantineProvider>
  );
}
