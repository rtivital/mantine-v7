import React from 'react';
import { IconArrowLeft } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { Center, Anchor, Box } from '@mantine/core';

const code = `
import { Center, Anchor, Box } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

function Demo() {
  return (
    <Anchor href="https://mantine.dev" target="_blank">
      <Center inline>
        <IconArrowLeft style={{ width: '0.8rem', height: '0.8rem' }} />
        <Box ml={5}>Back to Mantine website</Box>
      </Center>
    </Anchor>
  );
}
`;

function Demo() {
  return (
    <Anchor href="https://mantine.dev" target="_blank">
      <Center inline>
        <IconArrowLeft
          style={{ width: '0.8rem', height: '0.8rem' }}
          className="mantine-rotate-rtl"
        />
        <Box ml={5}>Back to Mantine website</Box>
      </Center>
    </Anchor>
  );
}

export const inline: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
