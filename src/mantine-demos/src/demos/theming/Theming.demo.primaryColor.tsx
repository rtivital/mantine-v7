import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Group, Button } from '@mantine/core';

const code = `
import { Group, Button, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        primaryColor: 'brand',
        colors: {
          brand: [
            '#F0BBDD',
            '#ED9BCF',
            '#EC7CC3',
            '#ED5DB8',
            '#F13EAF',
            '#F71FA7',
            '#FF00A1',
            '#E00890',
            '#C50E82',
            '#AD1374',
          ],
        },
      }}
    >
      <Group>
        <Button>Primary button</Button>
        <Button color="blue">Blue button</Button>
      </Group>
    </MantineProvider>
  );
}

`;

function Demo() {
  return (
    <Group>
      <Button color="#FF00A1">Primary button</Button>
      <Button color="blue">Blue button</Button>
    </Group>
  );
}

export const primaryColor: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
