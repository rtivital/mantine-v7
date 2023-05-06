import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Button } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

const code = `
import { Button } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

function Demo() {
  const icon = <IconPhoto size={14} />;
  return (
    <Button{{props}} fullWidth leftSection={icon} rightSection={icon} variant="default">
      Button label
    </Button>
  );
}
`;

function Wrapper(props: any) {
  const icon = <IconPhoto size={14} />;
  return (
    <Button fullWidth leftSection={icon} rightSection={icon} variant="default" {...props}>
      Button label
    </Button>
  );
}

export const sectionsJustify: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    {
      type: 'segmented',
      prop: 'justify',
      data: ['center', 'space-between'],
      initialValue: 'center',
      libraryValue: '__none__',
    },
  ],
};
