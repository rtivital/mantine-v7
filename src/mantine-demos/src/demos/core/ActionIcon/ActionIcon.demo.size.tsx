import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

const code = `
import { ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon size={42} variant="default" aria-label="ActionIcon with size as a number">
      <IconHeart style={{ width: '1.5rem', height: '1.5rem' }} />
    </ActionIcon>
  );
}
`;

function Demo() {
  return (
    <ActionIcon size={42} variant="default" aria-label="ActionIcon with size as a number">
      <IconHeart style={{ width: '1.5rem', height: '1.5rem' }} />
    </ActionIcon>
  );
}

export const size: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
