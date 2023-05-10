import React from 'react';
import { Switch, useMantineTheme } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

const code = `
import { Switch, useMantineTheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

function Demo() {
  const theme = useMantineTheme();

  const sunIcon = (
    <IconSun
      style={{ width: '1rem', height: '1rem' }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: '1rem', height: '1rem' }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return <Switch size="md" color="dark.4" onLabel={sunIcon} offLabel={moonIcon} />;
}
`;

function Demo() {
  const theme = useMantineTheme();

  const sunIcon = (
    <IconSun
      style={{ width: '1rem', height: '1rem' }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: '1rem', height: '1rem' }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return <Switch size="md" color="dark.4" onLabel={sunIcon} offLabel={moonIcon} />;
}

export const iconLabels: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
