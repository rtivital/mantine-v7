import React from 'react';
import { SegmentedControlProps } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { SegmentedControlWrapper } from './Wrapper';

function Demo(props: SegmentedControlProps) {
  return (
    <>
      <SegmentedControlWrapper {...props} />
    </>
  );
}

const code = `
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} />;
}
`;

export const fullWidth: MantineDemo = {
  type: 'configurator',
  component: Demo,
  code,
  controls: [
    { prop: 'fullWidth', type: 'boolean', initialValue: false, libraryValue: false },
    {
      prop: 'orientation',
      type: 'segmented',
      initialValue: 'horizontal',
      libraryValue: 'horizontal',
      data: [
        { label: 'horizontal', value: 'horizontal' },
        { label: 'vertical', value: 'vertical' },
      ],
    },
  ],
};
