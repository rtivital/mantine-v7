import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { YearPicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <YearPicker
      value={value}
      onChange={setValue}
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
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <YearPicker
      value={value}
      onChange={setValue}
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
    />
  );
}

export const controlProps: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
