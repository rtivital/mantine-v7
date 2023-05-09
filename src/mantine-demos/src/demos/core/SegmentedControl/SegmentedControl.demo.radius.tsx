import React from 'react';
import { Box } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { SegmentedControlWrapper } from './Wrapper';

function Demo() {
  const items = ['xs', 'sm', 'md', 'lg', 'xl'].map((size, index) => (
    <Box mt={index === 0 ? undefined : 'md'} key={size}>
      <SegmentedControlWrapper size="lg" radius={size} />
    </Box>
  ));

  return <>{items}</>;
}

export const radius: MantineDemo = {
  type: 'code',
  component: Demo,
};
