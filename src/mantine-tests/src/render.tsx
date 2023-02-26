import React from 'react';
import { render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider, MantineThemeOverride, MantineProviderProps } from '@mantine/core';

export function render(
  ui: React.ReactNode,
  themeOverride?: MantineThemeOverride,
  providerProps?: Omit<MantineProviderProps, 'theme'>
) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider theme={themeOverride} {...providerProps}>
        {children}
      </MantineProvider>
    ),
  });
}
