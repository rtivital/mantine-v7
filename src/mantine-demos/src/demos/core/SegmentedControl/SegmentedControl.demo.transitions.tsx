import React from 'react';
import { Text } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { SegmentedControlWrapper } from './Wrapper';

const code = `
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* No transitions */}
      <SegmentedControl transitionDuration={0} />

      {/* 500ms linear transition */}
      <SegmentedControl
        transitionDuration={500}
        transitionTimingFunction="linear"
      />
    </>
  );
}

`;

function Demo() {
  return (
    <>
      <div>
        <Text size="sm" fw={500} mt={3}>
          No transitions
        </Text>
        <SegmentedControlWrapper transitionDuration={0} />
      </div>

      <div>
        <Text size="sm" fw={500} mt="md">
          500ms linear transition
        </Text>
        <SegmentedControlWrapper transitionDuration={500} transitionTimingFunction="linear" />
      </div>
    </>
  );
}

export const transitions: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
