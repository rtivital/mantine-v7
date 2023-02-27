import React from 'react';
import { MantineProvider } from '@mantine/core';
import { LoaderCustomComponent } from './Loader.stories/Loader.customComponent';

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
      <LoaderCustomComponent />
    </MantineProvider>
  );
}
