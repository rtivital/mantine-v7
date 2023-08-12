import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { DatePicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DatePicker
      value={value}
      onChange={setValue}
      defaultDate={new Date(2021, 7)}
      getDayProps={(date) => {
        if (date.getDay() === 5 && date.getDate() === 13) {
          return {
            style: {
              backgroundColor: 'var(--mantine-color-red-filled)',
              color: 'var(--mantine-color-white)',
            },
          };
        }

        return {};
      }}
      getYearControlProps={(date) => {
        if (date.getFullYear() === new Date().getFullYear()) {
          return {
            style: {
              color: 'var(--mantine-color-blue-filled)',
              fontWeight: 700,
            },
          };
        }

        if (date.getFullYear() === new Date().getFullYear() + 1) {
          return { disabled: true };
        }

        return {};
      }}
      getMonthControlProps={(date) => {
        if (date.getMonth() === 1) {
          return {
            style: {
              color: 'var(--mantine-color-blue-filled)',
              fontWeight: 700,
            },
          };
        }

        if (date.getMonth() === 5) {
          return { disabled: true };
        }

        return {};
      }}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DatePicker
      value={value}
      onChange={setValue}
      defaultDate={new Date(2021, 7)}
      getDayProps={(date) => {
        if (date.getDay() === 5 && date.getDate() === 13) {
          return {
            style: {
              backgroundColor: 'var(--mantine-color-red-filled)',
              color: 'var(--mantine-color-white)',
            },
          };
        }

        return {};
      }}
      getYearControlProps={(date) => {
        if (date.getFullYear() === new Date().getFullYear()) {
          return {
            style: {
              color: 'var(--mantine-color-blue-filled)',
              fontWeight: 700,
            },
          };
        }

        if (date.getFullYear() === new Date().getFullYear() + 1) {
          return { disabled: true };
        }

        return {};
      }}
      getMonthControlProps={(date) => {
        if (date.getMonth() === 1) {
          return {
            style: {
              color: 'var(--mantine-color-blue-filled)',
              fontWeight: 700,
            },
          };
        }

        if (date.getMonth() === 5) {
          return { disabled: true };
        }

        return {};
      }}
    />
  );
}

export const controlProps: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
