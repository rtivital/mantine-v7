import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { ActionIcon, createTheme, Group, MantineThemeProvider } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './ActionIcon.demo.customSize.module.css';

const code = `
import { ActionIcon, createTheme, Group, MantineThemeProvider } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    ActionIcon: ActionIcon.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Group justify="center">
        <ActionIcon size="xxs" aria-label="Custom xxs size">
          <IconHeart style={{ width: '0.6rem', height: '0.6rem' }} />
        </ActionIcon>

        <ActionIcon size="xxl" aria-label="Custom xxl size">
          <IconHeart style={{ width: '2rem', height: '2rem' }} />
        </ActionIcon>
      </Group>
    </MantineThemeProvider>
  );
}
`;

const cssCode = `
.root {
  --ai-size-xxs: rem(16px);
  --ai-size-xxl: rem(50px);
}
`;

const theme = createTheme({
  components: {
    ActionIcon: ActionIcon.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Group justify="center">
        <ActionIcon size="xxs" aria-label="Custom xxs size">
          <IconHeart style={{ width: '0.6rem', height: '0.6rem' }} />
        </ActionIcon>

        <ActionIcon size="xxl" aria-label="Custom xxl size">
          <IconHeart style={{ width: '2rem', height: '2rem' }} />
        </ActionIcon>
      </Group>
    </MantineThemeProvider>
  );
}

export const customSize: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.module.css', code: cssCode, language: 'css' },
    { fileName: 'Demo.tsx', code, language: 'tsx' },
  ],
};
