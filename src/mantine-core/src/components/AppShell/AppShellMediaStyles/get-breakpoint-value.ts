import { MantineTheme, px, MantineBreakpoint } from '../../../core';

export function getBreakpointValue(breakpoint: number | string, theme: MantineTheme) {
  if (breakpoint in theme.breakpoints) {
    return px(theme.breakpoints[breakpoint as MantineBreakpoint]) as number;
  }

  const convertedValue = px(breakpoint);

  if (typeof convertedValue !== 'number') {
    throw new Error(`[@mantine/core] AppShell: failed to parse breakpoint value ${breakpoint}`);
  }

  return convertedValue;
}
