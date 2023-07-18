import React from 'react';
import {
  getSortedBreakpoints,
  useMantineTheme,
  keys,
  getSpacing,
  MantineBreakpoint,
  StyleProp,
  filterProps,
  InlineStyles,
} from '../../core';
import type { SimpleGridProps } from './SimpleGrid';

function getBaseValue(value: StyleProp<any>) {
  if (typeof value === 'object' && value !== null) {
    return value.base;
  }

  return value;
}

interface SimpleGridVariablesProps extends SimpleGridProps {
  selector: string;
}

export function SimpleGridVariables({
  spacing,
  verticalSpacing,
  cols,
  selector,
}: SimpleGridVariablesProps) {
  const theme = useMantineTheme();

  const baseStyles: Record<string, string> = filterProps({
    '--sg-spacing-x': getSpacing(getBaseValue(spacing)),
    '--sg-spacing-y': getSpacing(getBaseValue(verticalSpacing)),
    '--sg-cols': getBaseValue(cols),
  });

  const queries = keys(theme.breakpoints).reduce<Record<string, Record<string, any>>>(
    (acc, breakpoint) => {
      if (!acc[breakpoint]) {
        acc[breakpoint] = {};
      }

      if (typeof spacing === 'object' && spacing[breakpoint] !== undefined) {
        acc[breakpoint]['--sg-spacing-x'] = getSpacing(spacing[breakpoint]);
      }

      if (typeof verticalSpacing === 'object' && verticalSpacing[breakpoint] !== undefined) {
        acc[breakpoint]['--sg-spacing-y'] = getSpacing(verticalSpacing[breakpoint]);
      }

      if (typeof cols === 'object' && cols[breakpoint] !== undefined) {
        acc[breakpoint]['--sg-cols'] = cols[breakpoint];
      }

      return acc;
    },
    {}
  );

  const sortedBreakpoints = getSortedBreakpoints(keys(queries), theme).filter(
    (breakpoint) => keys(queries[breakpoint.value]).length > 0
  );

  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${theme.breakpoints[breakpoint.value as MantineBreakpoint]})`,
    styles: queries[breakpoint.value],
  }));

  return <InlineStyles styles={baseStyles} media={media} selector={selector} />;
}
