import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { ActionIcon } from '@mantine/core';
import { IconPhoto, IconSettings, IconHeart } from '@tabler/icons-react';

const code = `
import { ActionIcon } from '@mantine/core';
import { IconPhoto, IconSettings, IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon.Group>
      <ActionIcon variant="default" size="lg" aria-label="Gallery">
        <IconPhoto style={{ width: '1.2rem' }} stroke={1.5} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Settings">
        <IconSettings style={{ width: '1.2rem' }} stroke={1.5} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Likes">
        <IconHeart style={{ width: '1.2rem' }} stroke={1.5} />
      </ActionIcon>
    </ActionIcon.Group>
  );
}
`;

function Demo() {
  return (
    <ActionIcon.Group>
      <ActionIcon variant="default" size="lg" aria-label="Gallery">
        <IconPhoto style={{ width: '1.2rem' }} stroke={1.5} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Settings">
        <IconSettings style={{ width: '1.2rem' }} stroke={1.5} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Likes">
        <IconHeart style={{ width: '1.2rem' }} stroke={1.5} />
      </ActionIcon>
    </ActionIcon.Group>
  );
}

export const group: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
