import React from 'react';
import { MantineDemo } from '@mantine/ds';

const code = `
import React from 'react';
`;

function Demo() {
  return <div>Hello</div>;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
