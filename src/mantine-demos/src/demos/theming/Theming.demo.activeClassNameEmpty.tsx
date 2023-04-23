import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { MantineThemeProvider, Button } from '@mantine/core';

const code = `
import { MantineProvider, Button } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider inherit theme={{ activeClassName: '' }}>
      <Button>No active styles</Button>
    </MantineProvider>
  );
}
`;

function Demo() {
  return (
    <MantineThemeProvider inherit theme={{ activeClassName: '' }}>
      <Button>No active styles</Button>
    </MantineThemeProvider>
  );
}

export const activeClassNameEmpty: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
