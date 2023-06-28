import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Pill } from '@mantine/core';
import { PillStylesApi } from '@mantine/styles-api';

const code = `
import { Pill } from '@mantine/core';

function Demo() {
  return <Pill{{props}} withRemoveButton>Test pill</Pill>;
}
`;

function Demo(props: any) {
  return (
    <Pill {...props} withRemoveButton>
      Test pill
    </Pill>
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: PillStylesApi,
  component: Demo,
  code,
  centered: true,
};
