import React from 'react';
import { em, keys, useMantineTheme, useMantineContext, InlineStyles } from '../../../core';
import type { AppShellProps } from '../AppShell';
import { getPaddingValue } from './get-padding-value';
import { getBaseSize } from './get-base-size';
import { getSortedBreakpoints } from './get-sorted-breakpoints';
import { isPrimitiveSize } from './is-primitive-size';
import { isResponsiveSize } from './is-responsive-size';
import { assignNavbarVariables } from './assign-navbar-variables';
import { assignHeaderVariables } from './assign-header-variables';

export type CSSVariables = Record<`--${string}`, string>;
export type MediaQueryVariables = Record<string, Record<`--${string}`, string>>;

interface AppShellMediaStylesProps {
  navbar: AppShellProps['navbar'] | undefined;
  header: AppShellProps['header'] | undefined;
  padding: AppShellProps['padding'] | undefined;
}

export function AppShellMediaStyles({ navbar, header, padding }: AppShellMediaStylesProps) {
  const minMediaStyles: MediaQueryVariables = {};
  const maxMediaStyles: MediaQueryVariables = {};
  const baseStyles: CSSVariables = {};
  const theme = useMantineTheme();
  const ctx = useMantineContext();

  assignNavbarVariables({
    baseStyles,
    minMediaStyles,
    maxMediaStyles,
    navbar,
    theme,
  });

  assignHeaderVariables({
    baseStyles,
    minMediaStyles,
    maxMediaStyles,
    header,
    theme,
  });

  if (isPrimitiveSize(padding)) {
    baseStyles['--app-shell-padding'] = getPaddingValue(getBaseSize(padding));
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
