import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Slider, Box } from '@mantine/core';

function Wrapper(props: any) {
  return (
    <Box maw={400} mx="auto">
      <Slider {...props} defaultValue={20} />
    </Box>
  );
}

const code = `
import { Slider, RangeSlider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} defaultValue={20} />;
}
`;

export const thumbSize: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    { prop: 'thumbSize', type: 'number', min: 14, max: 32, initialValue: 14, libraryValue: null },
  ],
};
