import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Text } from '@mantine/core';

const code = `
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text
      variant="gradient"
      gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
      style={{ fontFamily: 'Greycliff CF, sans-serif' }}
      ta="center"
      fz="xl"
      fw={700}
    >
      Indigo cyan gradient
    </Text>
  );
}
`;

function Demo() {
  return (
    <Text
      variant="gradient"
      gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
      style={{ fontFamily: 'Greycliff CF, sans-serif' }}
      ta="center"
      fz="xl"
      fw={700}
    >
      Indigo cyan gradient
    </Text>
  );
}

export const gradient: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
