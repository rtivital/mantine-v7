import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { IconBrandMantine } from '@tabler/icons-react';

const code = `
import { IconBrandMantine } from '@tabler/icons-react';

function Demo() {
  return (
    <IconBrandMantine
      style={{ width: '5rem', height: '5rem' }}
      stroke={1.5}
      color="var(--mantine-color-blue-filled)"
    />
  );
}
`;

function Demo() {
  return (
    <IconBrandMantine
      style={{ width: '5rem', height: '5rem' }}
      stroke={1.5}
      color="var(--mantine-color-blue-filled)"
    />
  );
}

export const icon: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
