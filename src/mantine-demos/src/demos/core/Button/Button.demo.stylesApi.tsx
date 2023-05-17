import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Button } from '@mantine/core';
import { ButtonStylesApi } from '@mantine/styles-api';
import { IconAt } from '@tabler/icons-react';

const code = `
import { Button } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  return <Button{{props}} leftSection={<IconAt style={{ width: '1rem', height: '1rem' }} />}>Your email</Button>;
}
`;

function Demo(props: any) {
  return (
    <Button leftSection={<IconAt style={{ width: '1rem', height: '1rem' }} />} {...props}>
      Your email
    </Button>
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: ButtonStylesApi,
  component: Demo,
  code,
  centered: true,
};
