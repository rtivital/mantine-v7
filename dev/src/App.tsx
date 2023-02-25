import React from 'react';
import { MantineProvider, UnstyledButton } from '@mantine/core';

export default function App() {
  return (
    <MantineProvider defaultColorScheme="auto">
      <UnstyledButton c="blue">Hello</UnstyledButton>
    </MantineProvider>
  );
}
