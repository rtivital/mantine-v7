import React from 'react';
import {
  rem,
  em,
  keys,
  MantineTheme,
  px,
  MantineBreakpoint,
  useMantineTheme,
  useMantineContext,
  InlineStyles,
  getSpacing,
} from '../../../core';
import type { AppShellProps, AppShellSize, AppShellResponsiveSize } from '../AppShell';

function getPaddingValue(padding: string | number | undefined) {
  return Number(padding) === 0 ? '0px' : getSpacing(padding);
}

function isResponsiveSize(
  size: AppShellSize | AppShellResponsiveSize | undefined
): size is AppShellResponsiveSize {
  return typeof size === 'object' && size !== null;
}

function isPrimitiveSize(
  size: AppShellSize | AppShellResponsiveSize | undefined
): size is AppShellSize {
  return typeof size === 'number' || typeof size === 'string';
}

function getSortedBreakpoints(breakpoints: string[], theme: MantineTheme) {
  const convertedBreakpoints = breakpoints.map((breakpoint) => {
    const realValue =
      breakpoint in theme.breakpoints
        ? theme.breakpoints[breakpoint as MantineBreakpoint]
        : breakpoint;
    const convertedValue = px(realValue);

    if (typeof convertedValue !== 'number') {
      throw new Error(`[@mantine/core] AppShell: failed to parse breakpoint value ${breakpoint}`);
    }

    return {
      value: breakpoint,
      px: convertedValue,
    };
  });

  convertedBreakpoints.sort((a, b) => a.px - b.px);
  return convertedBreakpoints;
}

interface AppShellMediaStylesProps {
  navbar: AppShellProps['navbar'] | undefined;
  padding: AppShellProps['padding'] | undefined;
}

export function AppShellMediaStyles({ navbar, padding }: AppShellMediaStylesProps) {
  const mediaStyles: Record<string, Record<`--${string}`, string>> = {};
  const baseStyles: Record<`--${string}`, string> = {};
  const navbarWidth = navbar?.width;
  const theme = useMantineTheme();
  const ctx = useMantineContext();

  if (isPrimitiveSize(navbarWidth)) {
    baseStyles['--app-shell-navbar-width'] = rem(navbarWidth);
  }

  if (isResponsiveSize(navbarWidth)) {
    if (navbarWidth.base) {
      baseStyles['--app-shell-navbar-width'] = rem(navbarWidth.base);
    }

    keys(navbarWidth).forEach((key) => {
      if (key !== 'base') {
        mediaStyles[key] = mediaStyles[key] || {};
        mediaStyles[key]['--app-shell-navbar-width'] = rem(navbarWidth![key]);
      }
    });
  }

  if (isPrimitiveSize(padding)) {
    baseStyles['--app-shell-padding'] = getPaddingValue(padding);
  }

  if (isResponsiveSize(padding)) {
    if (padding.base) {
      baseStyles['--app-shell-padding'] = getPaddingValue(padding.base);
    }

    keys(padding).forEach((key) => {
      if (key !== 'base') {
        mediaStyles[key] = mediaStyles[key] || {};
        mediaStyles[key]['--app-shell-padding'] = getPaddingValue(padding![key]);
      }
    });
  }

  const media = getSortedBreakpoints(keys(mediaStyles), theme).map((breakpoint) => ({
    query: `(min-width: ${em(breakpoint.px)})`,
    styles: mediaStyles[breakpoint.value],
  }));

  return <InlineStyles media={media} styles={baseStyles} selector={ctx.cssVariablesSelector} />;
}
