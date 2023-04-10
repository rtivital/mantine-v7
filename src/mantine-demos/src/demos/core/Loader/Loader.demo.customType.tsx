import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Loader, defaultLoaders } from '@mantine/core';
import { RingLoader, ringLoaderCode } from './_RingLoader';

const code = `
`;

function Demo() {
  return <Loader type="ring" loaders={{ ...defaultLoaders, ring: RingLoader }} />;
}

export const customType: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code: '' },
    { fileName: 'RingLoader.tsx', language: 'tsx', code: ringLoaderCode },
  ],
};
