import React from 'react';
import { MantineProvider } from '@mantine/core';

export const decorators = [
  (renderStory: any) => <MantineProvider>{renderStory()}</MantineProvider>,
];
