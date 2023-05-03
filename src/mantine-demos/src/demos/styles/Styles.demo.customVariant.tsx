import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Input } from '@mantine/core';
import classes from './Styles.demo.customVariant.module.css';

const code = `
import { Input } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <>
      <Input classNames={classes} variant="underline" placeholder="Underline input" />
      <Input classNames={classes} variant="filled" placeholder="Filled input" mt="md" />
    </>
  );
}
`;

const cssCode = `
.input {
  &[data-variant='underline'] {
    border-bottom: rem(2px) solid;
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;

    @mixin light {
      border-color: var(--mantine-color-gray-3);
    }

    @mixin dark {
      border-color: var(--mantine-color-dark-3);
    }

    &:focus {
      border-color: var(--mantine-color-blue-filled);
    }
  }
}
`;

function Demo() {
  return (
    <>
      <Input classNames={classes} variant="underline" placeholder="Underline input" />
      <Input classNames={classes} variant="filled" placeholder="Filled input" mt="md" />
    </>
  );
}

export const customVariant: MantineDemo = {
  type: 'code',
  component: Demo,
  maxWidth: 360,
  centered: true,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'Demo.module.css', code: cssCode, language: 'css' },
  ],
};
