import React from 'react';
import { MantineProvider, UnstyledButton } from '@mantine/core';

export default function Home() {
  return (
    <MantineProvider>
      <UnstyledButton bg="blue">Hello</UnstyledButton>
    </MantineProvider>
  );
}
