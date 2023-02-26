import React from 'react';
import { MantineProvider, UnstyledButton } from '@mantine/core';

export default function App() {
  return (
    <MantineProvider defaultColorScheme="auto">
      <UnstyledButton style={(theme) => ({ color: theme.colors.pink[6] })} p="xl">
        Hello
      </UnstyledButton>
      <UnstyledButton style={{ color: 'red' }}>Hello</UnstyledButton>
    </MantineProvider>
  );
}
