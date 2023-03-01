import React from 'react';
import { MantineProvider, ActionIcon } from '@mantine/core';
import { IconUserSearch } from '@tabler/icons-react';

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
      <div style={{ padding: 40 }}>
        <ActionIcon>
          <IconUserSearch size={20} />
        </ActionIcon>
      </div>
    </MantineProvider>
  );
}
