import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { NativeSelect } from '@mantine/core';
import { IconChevronDown, IconHash } from '@tabler/icons-react';

const code = `
import { NativeSelect } from '@mantine/core';
import { IconChevronDown, IconHash } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NativeSelect
        leftSection={<IconHash style={{ width: '1rem', height: '1rem' }} />}
        leftSectionPointerEvents="none"
        label="Left section"
        data={['React', 'Angular']}
      />

      <NativeSelect
        rightSection={<IconChevronDown style={{ width: '1rem', height: '1rem' }} />}
        label="Right section"
        data={['React', 'Angular']}
        mt="md"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <NativeSelect
        leftSection={<IconHash style={{ width: '1rem', height: '1rem' }} />}
        leftSectionPointerEvents="none"
        label="Left section"
        data={['React', 'Angular']}
      />

      <NativeSelect
        rightSection={<IconChevronDown style={{ width: '1rem', height: '1rem' }} />}
        label="Right section"
        data={['React', 'Angular']}
        mt="md"
      />
    </>
  );
}

export const sections: MantineDemo = {
  type: 'code',
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
