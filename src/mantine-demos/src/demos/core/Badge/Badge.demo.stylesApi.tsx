import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { BadgeStylesApi } from '@mantine/styles-api';
import { Badge } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

const code = `
import { Badge } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt style={{ width: '0.8rem', height: '0.8rem' }} />;

  return (
    <Badge leftSection={icon} rightSection={icon}{{props}}>
      Badge component
    </Badge>
  );
}
`;

function Demo(props: any) {
  const icon = <IconAt style={{ width: '0.8rem', height: '0.8rem' }} />;

  return (
    <Badge leftSection={icon} rightSection={icon} {...props}>
      Badge component
    </Badge>
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: BadgeStylesApi,
  component: Demo,
  centered: true,
  code,
};
