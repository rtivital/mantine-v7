import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { SegmentedControlWrapper } from './Wrapper';

const code = `
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <SegmentedControl
      data={[
        { label: 'React', value: 'react' },
        { label: 'Angular', value: 'ng' },
        { label: 'Vue', value: 'vue' },
        { label: 'Svelte', value: 'svelte' },
      ]}
    />
  );
}
`;

function Demo() {
  return <SegmentedControlWrapper />;
}

export const usage: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
