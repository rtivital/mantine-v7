import React from 'react';
import { UnstyledButton, useMantineColorScheme } from '@mantine/core';

export default function Home() {
  const { colorScheme, setColorScheme, clearColorScheme } = useMantineColorScheme();
  return (
    <>
      <button type="button" onClick={() => setColorScheme('light')}>
        Light
      </button>
      <button type="button" onClick={() => setColorScheme('dark')}>
        Dark
      </button>
      <button type="button" onClick={() => setColorScheme('auto')}>
        Auto
      </button>
      <button type="button" onClick={() => clearColorScheme()}>
        Clear
      </button>
    </>
  );
}
