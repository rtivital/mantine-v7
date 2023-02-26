import React from 'react';
import { render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider, MantineThemeOverride, MantineProviderProps } from '@mantine/core';

export function render(
  children: React.ReactNode,
  themeOverride?: MantineThemeOverride,
  providerProps?: Omit<MantineProviderProps, 'theme'>
) {
  const { rerender, ...others } = testingLibraryRender(
    <MantineProvider theme={themeOverride} {...providerProps}>
      {children}
    </MantineProvider>
  );

  return {
    rerender: (ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>) =>
      rerender(<MantineProvider>{ui}</MantineProvider>),
    ...others,
  };
}
