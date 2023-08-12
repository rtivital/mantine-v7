import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Indicator } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const code = `
import { Indicator } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <DatePicker
      renderDay={(date) => {
        const day = date.getDate();
        return (
          <Indicator size={6} color="red" offset={-5} disabled={day !== 16}>
            <div>{day}</div>
          </Indicator>
        );
      }}
    />
  );
}
`;

function Demo() {
  return (
    <DatePicker
      renderDay={(date) => {
        const day = date.getDate();
        return (
          <Indicator size={6} color="red" offset={-5} disabled={day !== 16}>
            <div>{day}</div>
          </Indicator>
        );
      }}
    />
  );
}

export const renderDay: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
