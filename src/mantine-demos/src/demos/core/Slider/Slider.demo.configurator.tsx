import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Slider, RangeSlider, Box } from '@mantine/core';

function Wrapper(props: any) {
  const { type, ...others } = props;
  const Component = type === 'range' ? RangeSlider : Slider;

  return (
    <Box maw={400} mx="auto">
      <Component
        defaultValue={type === 'range' ? [20, 80] : 40}
        marks={[
          { value: 20, label: '20%' },
          { value: 50, label: '50%' },
          { value: 80, label: '80%' },
        ]}
        {...others}
      />
    </Box>
  );
}

const code = `
import { Slider } from '@mantine/core';


function Demo() {
  return (
    <Slider
      {{props}}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    { prop: 'color', type: 'color', initialValue: 'blue', libraryValue: 'blue' },
    { prop: 'size', type: 'size', initialValue: 'md', libraryValue: 'md' },
    { prop: 'radius', type: 'size', initialValue: 'xl', libraryValue: 'xl' },
    { prop: 'showLabelOnHover', type: 'boolean', initialValue: true, libraryValue: true },
    { prop: 'labelAlwaysOn', type: 'boolean', initialValue: false, libraryValue: false },
  ],
};
