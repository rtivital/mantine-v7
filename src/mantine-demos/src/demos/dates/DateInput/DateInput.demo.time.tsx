import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { DateInput } from '@mantine/dates';

const code = `
import { DateInput } from '@mantine/dates';

function Demo() {
  return (
    <DateInput
      valueFormat="DD/MM/YYYY HH:mm:ss"
      label="Date input"
      placeholder="Date input"
    />
  );
}
`;

function Demo() {
  return (
    <DateInput valueFormat="DD/MM/YYYY HH:mm:ss" label="Date input" placeholder="Date input" />
  );
}

export const time: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
