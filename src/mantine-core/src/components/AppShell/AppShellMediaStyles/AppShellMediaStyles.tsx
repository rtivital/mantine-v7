import React from 'react';
import { rem, em, keys, useMantineTheme, useMantineContext, InlineStyles } from '../../../core';
import type { AppShellProps } from '../AppShell';
import { getPaddingValue } from './get-padding-value';
import { getBreakpointValue } from './get-breakpoint-value';
import { getSortedBreakpoints } from './get-sorted-breakpoints';
import { isPrimitiveSize } from './is-primitive-size';
import { isResponsiveSize } from './is-responsive-size';

interface AppShellMediaStylesProps {
  navbar: AppShellProps['navbar'] | undefined;
  padding: AppShellProps['padding'] | undefined;
}

export function AppShellMediaStyles({ navbar, padding }: AppShellMediaStylesProps) {
  const minMediaStyles: Record<string, Record<`--${string}`, string>> = {};
  const maxMediaStyles: Record<string, Record<`--${string}`, string>> = {};
  const baseStyles: Record<`--${string}`, string> = {};
  const navbarWidth = navbar?.width;
  const theme = useMantineTheme();
  const ctx = useMantineContext();

  if (isPrimitiveSize(navbarWidth)) {
    baseStyles['--app-shell-navbar-width'] = rem(navbarWidth);
  }

  if (isResponsiveSize(navbarWidth)) {
    baseStyles['--app-shell-navbar-width'] =
      typeof navbarWidth.base !== 'undefined' ? rem(navbarWidth.base) : '100%';

    keys(navbarWidth).forEach((key) => {
      if (key !== 'base') {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]['--app-shell-navbar-width'] = rem(navbarWidth![key]);
        minMediaStyles[key]['--app-shell-navbar-offset'] = rem(navbarWidth![key]);
      }
    });
  }

  if (navbar?.offsetBreakpoint) {
    const breakpointValue = getBreakpointValue(navbar!.offsetBreakpoint!, theme) - 0.1;
    maxMediaStyles[breakpointValue] = maxMediaStyles[breakpointValue] || {};
    maxMediaStyles[breakpointValue]['--app-shell-navbar-width'] = '100%';
    maxMediaStyles[breakpointValue]['--app-shell-navbar-offset'] = '0px';
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
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]['--app-shell-padding'] = getPaddingValue(padding![key]);
      }
    });
  }

  const minMedia = getSortedBreakpoints(keys(minMediaStyles), theme).map((breakpoint) => ({
    query: `(min-width: ${em(breakpoint.px)})`,
    styles: minMediaStyles[breakpoint.value],
  }));

  const maxMedia = getSortedBreakpoints(keys(maxMediaStyles), theme).map((breakpoint) => ({
    query: `(max-width: ${em(breakpoint.px)})`,
    styles: maxMediaStyles[breakpoint.value],
  }));

  const media = [...minMedia, ...maxMedia];

  return <InlineStyles media={media} styles={baseStyles} selector={ctx.cssVariablesSelector} />;
}
