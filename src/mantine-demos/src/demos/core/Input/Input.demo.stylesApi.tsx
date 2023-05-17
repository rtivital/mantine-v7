import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Input } from '@mantine/core';
import { InputStylesApi } from '@mantine/styles-api';
import { IconAt, IconChevronDown } from '@tabler/icons-react';

const code = `
import { Input } from '@mantine/core';

function Demo() {
  const at = <IconAt style={{ width: '1rem', height: '1rem' }} stroke={1.5} />;
  const chevron = <IconChevronDown style={{ width: '1rem', height: '1rem' }} stroke={1.5} />;
  return <Input{{props}} placeholder="Input component" leftSection={at} rightSection={chevron} />;
}
`;

function Demo(props: any) {
  const at = <IconAt style={{ width: '1rem', height: '1rem' }} stroke={1.5} />;
  const chevron = <IconChevronDown style={{ width: '1rem', height: '1rem' }} stroke={1.5} />;
  return <Input placeholder="Input component" leftSection={at} rightSection={chevron} {...props} />;
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: InputStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
