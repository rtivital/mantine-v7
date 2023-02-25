import React from 'react';
import { MantineProvider, UnstyledButton } from '@mantine/core';

export default function App() {
  return (
    <MantineProvider>
      <UnstyledButton>Hello</UnstyledButton>
    </MantineProvider>
  );
}
