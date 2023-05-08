import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { CloseButton } from '@mantine/core';

const code = `
import { CloseButton } from '@mantine/core';

function Demo() {
  return <CloseButton{{props}} />;
}
`;

function Wrapper(props: any) {
  return <CloseButton {...props} />;
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [{ prop: 'size', type: 'size', initialValue: 'md', libraryValue: 'md' }],
};
