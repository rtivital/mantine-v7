import React from 'react';
import { Box, SegmentedControl } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';

function Demo() {
  const items = ['xs', 'sm', 'md', 'lg', 'xl'].map((size, index) => (
    <Box mt={index === 0 ? undefined : 15} key={size}>
      <SegmentedControl size={size} data={['React', 'Angular', 'Vue']} />
    </Box>
  ));

  return <>{items}</>;
}

export const sizes: MantineDemo = {
  type: 'code',
  component: Demo,
};
